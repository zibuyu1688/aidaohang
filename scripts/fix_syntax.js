// 修复网站数据库文件语法
const fs = require('fs');
const path = require('path');

// 读取原始数据库文件的前后部分
const websitesPath = path.join(__dirname, '..', 'websites.js');
const content = fs.readFileSync(websitesPath, 'utf8');

// 寻找分隔点
const databaseStartMarker = 'const websitesDatabase = ';
const databaseEndMarker = '// 热门推荐';
const hotWebsitesMarker = 'const hotWebsites = ';
const exportsMarker = 'module.exports = ';

// 提取不同部分
const dbStartPos = content.indexOf(databaseStartMarker);
const dbEndPos = content.indexOf(databaseEndMarker);
const hotWebsitesPos = content.indexOf(hotWebsitesMarker);
const exportsPos = content.indexOf(exportsMarker);

// 获取各部分内容
const dbHeader = content.substring(0, dbStartPos + databaseStartMarker.length);
const dbContent = content.substring(dbStartPos + databaseStartMarker.length, dbEndPos).trim();
const hotWebsitesSection = content.substring(hotWebsitesPos).trim();

// 确保数据库部分正确闭合
let fixedDbContent = dbContent;
// 如果不是以 ]; 结尾，添加它
if (!fixedDbContent.endsWith('];')) {
  if (fixedDbContent.endsWith(']')) {
    fixedDbContent += ';';
  } else if (fixedDbContent.endsWith(']}')) {
    fixedDbContent += '];';
  }
}

// 重建文件内容
const newContent = `${dbHeader}${fixedDbContent}

// 热门推荐（首页展示）
${hotWebsitesSection}`;

// 写回文件
fs.writeFileSync(websitesPath, newContent);
console.log('文件已修复');