const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 读取文件
let content = fs.readFileSync(websitesPath, 'utf8');

// 统计信息
let changedCount = 0;
const changes = [];

// 清理URL的函数
function cleanUrl(url) {
    try {
        const urlObj = new URL(url);
        
        // 移除查询参数（如 ?source=aigccn, ?channel=aigc 等）
        urlObj.search = '';
        
        // 移除hash
        urlObj.hash = '';
        
        // 移除路径，只保留域名
        urlObj.pathname = '';
        
        let cleanedUrl = urlObj.toString();
        
        // 移除末尾的斜杠
        if (cleanedUrl.endsWith('/')) {
            cleanedUrl = cleanedUrl.slice(0, -1);
        }
        
        return cleanedUrl;
    } catch (e) {
        // 如果URL解析失败，返回原URL
        return url;
    }
}

// 使用正则表达式匹配所有的 "url": "..." 部分
const urlPattern = /"url":\s*"([^"]+)"/g;

content = content.replace(urlPattern, (match, url) => {
    const cleanedUrl = cleanUrl(url);
    
    if (cleanedUrl !== url) {
        changedCount++;
        changes.push({
            original: url,
            cleaned: cleanedUrl
        });
    }
    
    return `"url": "${cleanedUrl}"`;
});

// 写入文件
fs.writeFileSync(websitesPath, content, 'utf8');

console.log(`\n清理完成！`);
console.log(`总共修改了 ${changedCount} 个URL`);

if (changes.length > 0) {
    console.log('\n前10个修改示例:');
    changes.slice(0, 10).forEach((change, index) => {
        console.log(`${index + 1}. ${change.original}`);
        console.log(`   -> ${change.cleaned}\n`);
    });
}

// 验证语法
try {
    delete require.cache[require.resolve(websitesPath)];
    require(websitesPath);
    console.log('✓ 语法验证通过！');
} catch (e) {
    console.error('✗ 语法验证失败:', e.message);
    // 恢复备份
    fs.copyFileSync(backupPath, websitesPath);
    console.log('已从备份恢复文件');
    process.exit(1);
}

console.log(`\n如需恢复，备份文件位于: ${backupPath}`);
