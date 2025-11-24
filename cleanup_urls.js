const fs = require('fs');
const path = require('path');

// 读取websites.js文件
const websitesPath = './websites.js';
const fileContent = fs.readFileSync(websitesPath, 'utf8');

// 创建备份
const backupPath = `${websitesPath}.backup-${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`原始文件已备份到 ${backupPath}`);

// 显示一些专门的UTM处理信息
console.log("特别查找UTM参数...");
const specificUtmRegex = /utm[_-]source=aibotQD/ig;
const hasAibotQD = specificUtmRegex.test(fileContent);
console.log(`包含utm_source=aibotQD参数的URL: ${hasAibotQD ? '是' : '否'}`);

// 正则表达式匹配包含utm参数的URL
const utmRegex = /"url":\s*"([^"]*utm[^"]*)"/g;
let utmMatch;
const utmUrls = [];

// 收集所有包含UTM参数的URL
while ((utmMatch = utmRegex.exec(fileContent)) !== null) {
    const originalUrl = utmMatch[1];
    utmUrls.push({
        url: originalUrl,
        position: utmMatch.index,
        length: utmMatch[0].length
    });
}

console.log(`找到 ${utmUrls.length} 个包含UTM参数的URL。`);

// 正则表达式匹配URL并去除跟踪参数
const urlRegex = /"url":\s*"([^"]+)"/g;
let match;
const urls = new Set();
const duplicates = [];
let modifiedContent = fileContent;
let count = 0;
let cleanedCount = 0;

// 收集所有URL
const allUrls = [];
const cleanedUrlDetails = []; // 存储已清理的URL详情

while ((match = urlRegex.exec(fileContent)) !== null) {
    const originalUrl = match[1];
    let cleanUrl = originalUrl;
    let cleaned = false;
    
    try {
        const url = new URL(originalUrl);
        
        // 移除跟踪参数
        const searchParams = new URLSearchParams(url.search);
        let paramsRemoved = false;
        const removedParams = {};
        
        ['utm_source', 'utm-source', 'utm_medium', 'utm-medium', 'utm_campaign', 
         'utm-campaign', 'utm_term', 'utm-term', 'utm_content', 'utm-content', 
         'utm_code', 'utm-code', 'utm-keyword', 'utm_keyword', 'ref', 'source'].forEach(param => {
            if (searchParams.has(param)) {
                removedParams[param] = searchParams.get(param);
                searchParams.delete(param);
                paramsRemoved = true;
            }
        });
        
        // 重建干净的URL
        if (paramsRemoved) {
            const newSearch = searchParams.toString();
            cleanUrl = `${url.origin}${url.pathname}${newSearch ? `?${newSearch}` : ''}${url.hash}`;
            cleanedCount++;
            cleaned = true;
            
            cleanedUrlDetails.push({
                originalUrl,
                cleanedUrl: cleanUrl,
                removedParams
            });
        }
    } catch (e) {
        console.log(`警告: 无效的URL ${originalUrl}`);
    }
    
    // 检查重复
    const lowerCaseUrl = cleanUrl.toLowerCase();
    if (urls.has(lowerCaseUrl)) {
        duplicates.push({
            originalUrl,
            cleanUrl,
            position: match.index
        });
    } else {
        urls.add(lowerCaseUrl);
    }
    
    allUrls.push({
        originalUrl,
        cleanUrl,
        position: match.index,
        length: match[0].length,
        cleaned
    });
    
    count++;
}

// 从后向前替换，以保持索引位置准确
allUrls.sort((a, b) => b.position - a.position).forEach(item => {
    if (item.originalUrl !== item.cleanUrl) {
        const before = modifiedContent.substring(0, item.position);
        const after = modifiedContent.substring(item.position + item.length);
        modifiedContent = before + `"url": "${item.cleanUrl}"` + after;
    }
});

// 写入更新后的文件
fs.writeFileSync(websitesPath, modifiedContent);

// 生成报告
const report = {
    totalUrls: count,
    cleanedUrls: cleanedCount,
    duplicatesCount: duplicates.length,
    cleanedUrlDetails: cleanedUrlDetails,
    duplicates: duplicates.map(d => ({
        url: d.cleanUrl
    }))
};

// 将报告写入文件
fs.writeFileSync('./cleanup_report.json', JSON.stringify(report, null, 2));

console.log(`
URL清理完成：
- 总共处理了 ${count} 个URL
- 清理了 ${cleanedCount} 个带跟踪参数的URL
- 发现了 ${duplicates.length} 个重复URL
- 报告已保存到 cleanup_report.json

已清理的URL:
${cleanedUrlDetails.map(item => `- ${item.originalUrl} -> ${item.cleanedUrl}`).join('\n')}
`);