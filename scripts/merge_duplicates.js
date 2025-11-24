const fs = require('fs');
const path = require('path');

const websitesFile = path.join(__dirname, '..', 'websites.js');
const backupFile = path.join(__dirname, '..', `websites.js.bak.${Date.now()}`);
const reportFile = path.join(__dirname, '..', 'merge_report.json');

function normalizeUrl(u) {
  if (!u) return '';
  return u.trim().toLowerCase().replace(/\/$/, '');
}

function pickBest(a, b) {
  // choose the longer non-empty string
  if (!a && !b) return '';
  if (!a) return b;
  if (!b) return a;
  return a.length >= b.length ? a : b;
}

function mergeGroup(occurrences) {
  // occurrences: [{item, idx}]
  const items = occurrences.map(o => o.item);
  const merged = {
    name: items.map(i => i.name || '').sort((x,y)=>y.length-x.length)[0] || '',
    description: items.map(i => i.description || '').sort((x,y)=>y.length-x.length)[0] || '',
    url: items.map(i => i.url).find(Boolean) || '',
    category: (items.map(i => i.category || '').filter(c=>c && c.toLowerCase()!=='未分类')[0]) || (items.map(i=>i.category||'')[0] || '未分类'),
    tags: []
  };
  const tagSet = new Set();
  items.forEach(i => (i.tags||[]).forEach(t => tagSet.add(t)));
  merged.tags = Array.from(tagSet);
  return merged;
}

// load
let exported;
try {
  exported = require(websitesFile);
} catch (err) {
  console.error('Failed to load websites.js:', err.message);
  process.exit(2);
}
const db = exported.websitesDatabase;

// group by normalized url
const map = new Map();
db.forEach((item, idx) => {
  const k = normalizeUrl(item.url);
  if (!map.has(k)) map.set(k, []);
  map.get(k).push({item, idx});
});

const merges = [];
for (const [k, arr] of map.entries()) {
  if (!k) continue; // skip empty url
  if (arr.length <= 1) continue;
  const merged = mergeGroup(arr);
  merges.push({key: k, occurrences: arr, merged});
}

if (merges.length === 0) {
  console.log('No URL-based merges necessary.');
  process.exit(0);
}

// backup original
fs.copyFileSync(websitesFile, backupFile);
console.log('Backup written to', backupFile);

// build new db: iterate original and skip items that are duplicate (except first occurrence), replace first occurrence with merged item
const toRemove = new Set();
const replacements = new Map(); // idx -> mergedItem
merges.forEach(m => {
  const keepIdx = m.occurrences[0].idx;
  const removeIdxs = m.occurrences.slice(1).map(o=>o.idx);
  removeIdxs.forEach(i=>toRemove.add(i));
  replacements.set(keepIdx, m.merged);
});

const newDb = [];
const actions = [];
for (let i=0;i<db.length;i++) {
  if (toRemove.has(i)) {
    // skip
    continue;
  }
  if (replacements.has(i)) {
    newDb.push(replacements.get(i));
    actions.push({action: 'merged', originalIdxs: map.get(normalizeUrl(db[i].url)).map(o=>o.idx), keepIdx: i});
  } else {
    newDb.push(db[i]);
  }
}

// write merge report
const report = {
  generatedAt: new Date().toISOString(),
  totalOriginal: db.length,
  totalAfter: newDb.length,
  merges: merges.map(m => ({key: m.key, occurrenceIdxs: m.occurrences.map(o=>o.idx), merged: m.merged}))
};
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf8');

// write new websites.js by requiring the original file text and replacing the array
const origText = fs.readFileSync(websitesFile, 'utf8');
// naive replace: find 'const websitesDatabase = [' and the closing '];' before hotWebsites
const startToken = 'const websitesDatabase = [';
const start = origText.indexOf(startToken);
if (start === -1) {
  console.error('Could not find websitesDatabase start token');
  process.exit(3);
}
// find the position of the closing '];' that closes websitesDatabase
const endToken = '\n// 热门推荐（首页展示）';
const end = origText.indexOf(endToken, start);
if (end === -1) {
  console.error('Could not find end token near hotWebsites');
  process.exit(3);
}
const before = origText.slice(0, start + startToken.length);
const after = origText.slice(end);
const newArrayText = '\n' + JSON.stringify(newDb, null, 4).replace(/^/gm, '    ') + '\n';
const newText = before + newArrayText + after;
fs.writeFileSync(websitesFile, newText, 'utf8');

console.log('Merged', merges.length, 'URL groups. Original items:', db.length, 'New items:', newDb.length);
console.log('Report written to', reportFile);
