const fs = require('fs');
const path = require('path');

// 文件路径
const websitesPath = path.join(__dirname, '..', 'websites.js');
const originalContent = fs.readFileSync(websitesPath, 'utf8');

// 备份原始文件
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.writeFileSync(backupPath, originalContent);
console.log(`已备份原始文件到 ${backupPath}`);

// 首先，提取数据库部分，不管结构如何，我们只需要替换iconUrl
const newContent = originalContent.replace(/"iconUrl"\s*:\s*"[^"]*",?/g, '');

// 写回文件
fs.writeFileSync(websitesPath, newContent);
console.log('已移除所有iconUrl属性');

// 验证语法
try {
  require(websitesPath);
  console.log('语法验证通过！');
} catch(e) {
  console.error('语法验证失败:', e);
  console.log('正在恢复原始文件...');
  fs.copyFileSync(backupPath, websitesPath);
  console.log('已恢复原始文件');
}