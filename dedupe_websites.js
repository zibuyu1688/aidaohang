const fs = require('fs');
const path = require('path');
const file = path.resolve('websites.js');
let content = fs.readFileSync(file, 'utf8');

// Locate websitesDatabase boundaries
const startIdx = content.indexOf('const websitesDatabase = [');
if (startIdx === -1) throw new Error('websitesDatabase not found');
const hotIdx = content.indexOf('\n// 热门推荐', startIdx);
if (hotIdx === -1) throw new Error('hot section not found');
const beforeHot = content.slice(0, hotIdx);
const endIdx = beforeHot.lastIndexOf('];');
if (endIdx === -1) throw new Error('closing bracket not found');

const arrayText = content.slice(startIdx, endIdx + 2); // includes '];'
const header = 'const websitesDatabase = ';
const arrStart = arrayText.indexOf('[');
const arrEnd = arrayText.lastIndexOf(']');
const jsonLike = arrayText.slice(arrStart, arrEnd + 1);

// Normalize to valid JSON by removing trailing commas
const fixed = jsonLike
  .replace(/,\s*\]/g, ']')
  .replace(/,\s*\}/g, '}');

let data;
try {
  data = JSON.parse(fixed);
} catch (e) {
  console.error('Parse error, aborting:', e.message);
  process.exit(1);
}

// Dedupe by URL (keep first)
const seen = new Set();
const deduped = [];
for (const item of data) {
  const url = item && item.url;
  if (!url) continue;
  if (seen.has(url)) continue;
  seen.add(url);
  deduped.push(item);
}

// Serialize back preserving 4-space indentation like file
const serialized = JSON.stringify(deduped, null, 4)
  .replace(/^/gm, '') // keep indentation from JSON
;

// Build new content
const head = content.slice(0, startIdx) + 'const websitesDatabase = ' + serialized + '\n';
const tail = content.slice(endIdx + 2);
const newContent = head + tail;
fs.writeFileSync(file, newContent, 'utf8');
console.log(`Deduped: from ${data.length} to ${deduped.length} entries.`);
