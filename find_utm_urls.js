const fs = require('fs');

// 读取websites.js文件
const websitesPath = './websites.js';
const fileContent = fs.readFileSync(websitesPath, 'utf8');

// 正则表达式匹配包含utm参数的URL
const utmRegex = /"url":\s*"([^"]*utm[^"]*)"/g;
let match;
const utmUrls = [];

// 收集所有包含UTM参数的URL
while ((match = utmRegex.exec(fileContent)) !== null) {
    const originalUrl = match[1];
    utmUrls.push({
        url: originalUrl,
        position: match.index
    });
}

console.log(`找到 ${utmUrls.length} 个包含UTM参数的URL：`);
utmUrls.forEach(item => console.log(item.url));