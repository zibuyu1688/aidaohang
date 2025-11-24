const fs = require('fs');
const path = require('path');

const websitesFile = path.join(__dirname, '..', 'websites.js');
const outFile = path.join(__dirname, '..', 'duplicates_report.json');

// require the file to get the websitesDatabase
let db;
try {
  const exported = require(websitesFile);
  db = exported.websitesDatabase;
} catch (err) {
  console.error('Failed to load websites.js:', err.message);
  process.exit(2);
}

function findDuplicates(list, keyFn) {
  const map = new Map();
  list.forEach((item, idx) => {
    const k = keyFn(item) || '';
    if (!map.has(k)) map.set(k, []);
    map.get(k).push({item, idx});
  });
  const duplicates = [];
  for (const [k, arr] of map.entries()) {
    if (k === '') continue; // skip empty keys
    if (arr.length > 1) duplicates.push({key: k, occurrences: arr});
  }
  return duplicates;
}

const byUrl = findDuplicates(db, i => (i.url || '').trim().toLowerCase());
const byName = findDuplicates(db, i => (i.name || '').trim().toLowerCase());

const report = {
  summary: {
    total: db.length,
    urlDuplicates: byUrl.length,
    nameDuplicates: byName.length,
    generatedAt: new Date().toISOString()
  },
  urlDuplicates: byUrl,
  nameDuplicates: byName
};

fs.writeFileSync(outFile, JSON.stringify(report, null, 2), 'utf8');
console.log('Duplicate check complete. Report written to', outFile);
console.log(`Total items: ${db.length}, URL duplicate groups: ${byUrl.length}, Name duplicate groups: ${byName.length}`);

if (byUrl.length > 0) {
  console.log('\nSample URL duplicate groups:');
  byUrl.slice(0, 10).forEach(g => {
    console.log('-', g.key, '->', g.occurrences.length, 'occurrences');
  });
}

if (byName.length > 0) {
  console.log('\nSample Name duplicate groups:');
  byName.slice(0, 10).forEach(g => {
    console.log('-', g.key, '->', g.occurrences.length, 'occurrences');
  });
}
