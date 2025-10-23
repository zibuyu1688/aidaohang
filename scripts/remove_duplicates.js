const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 读取数据库
delete require.cache[require.resolve(websitesPath)];
const { websitesDatabase } = require(websitesPath);

console.log(`当前网站总数: ${websitesDatabase.length}`);

// 检查重复项
const urlMap = new Map();
const nameMap = new Map();
const duplicateUrls = [];
const duplicateNames = [];
const uniqueWebsites = [];

websitesDatabase.forEach((website, index) => {
    const url = website.url;
    const name = website.name;
    
    // 检查URL重复
    if (urlMap.has(url)) {
        duplicateUrls.push({
            index: index,
            website: website,
            originalIndex: urlMap.get(url)
        });
    } else {
        urlMap.set(url, index);
    }
    
    // 检查名称重复
    if (nameMap.has(name)) {
        duplicateNames.push({
            index: index,
            website: website,
            originalIndex: nameMap.get(name)
        });
    } else {
        nameMap.set(name, index);
    }
});

console.log(`\n发现重复URL: ${duplicateUrls.length}个`);
console.log(`发现重复名称: ${duplicateNames.length}个`);

// 显示重复的URL
if (duplicateUrls.length > 0) {
    console.log('\n=== 重复的URL ===');
    duplicateUrls.forEach((dup, i) => {
        const original = websitesDatabase[dup.originalIndex];
        console.log(`${i + 1}. URL: ${dup.website.url}`);
        console.log(`   原始: [${dup.originalIndex}] ${original.name} - ${original.description}`);
        console.log(`   重复: [${dup.index}] ${dup.website.name} - ${dup.website.description}`);
        console.log('');
    });
}

// 显示重复的名称
if (duplicateNames.length > 0) {
    console.log('\n=== 重复的名称 ===');
    duplicateNames.slice(0, 10).forEach((dup, i) => {
        const original = websitesDatabase[dup.originalIndex];
        console.log(`${i + 1}. 名称: ${dup.website.name}`);
        console.log(`   原始: [${dup.originalIndex}] ${original.url} - ${original.description}`);
        console.log(`   重复: [${dup.index}] ${dup.website.url} - ${dup.website.description}`);
        console.log('');
    });
    if (duplicateNames.length > 10) {
        console.log(`... 还有 ${duplicateNames.length - 10} 个重复名称`);
    }
}

// 去重处理 - 以URL为准，保留第一个出现的
const seenUrls = new Set();
const seenNames = new Set();
let removedCount = 0;

websitesDatabase.forEach((website, index) => {
    const url = website.url;
    const name = website.name;
    
    // 如果URL和名称都没有见过，则保留
    if (!seenUrls.has(url) && !seenNames.has(name)) {
        seenUrls.add(url);
        seenNames.add(name);
        uniqueWebsites.push(website);
    } else {
        removedCount++;
        console.log(`删除重复项[${index}]: ${website.name} - ${website.url}`);
    }
});

console.log(`\n去重完成:`);
console.log(`原始数量: ${websitesDatabase.length}`);
console.log(`删除数量: ${removedCount}`);
console.log(`保留数量: ${uniqueWebsites.length}`);

if (removedCount === 0) {
    console.log('没有发现重复项，无需处理');
    fs.unlinkSync(backupPath);
    process.exit(0);
}

// 生成新的文件内容
const newContent = `// 网站数据库
const websitesDatabase = [
${uniqueWebsites.map(website => `    {
        "name": "${website.name}",
        "description": "${website.description}",
        "url": "${website.url}",
        "category": "${website.category}",
        "tags": ${JSON.stringify(website.tags)}
    }`).join(',\n')}
];

// 热门推荐
const hotWebsites = [
    "https://www.baidu.com",
    "https://www.google.com",
    "https://www.zhihu.com",
    "https://github.com",
    "https://stackoverflow.com"
];

module.exports = {
    websitesDatabase,
    hotWebsites
};`;

// 写入新文件
fs.writeFileSync(websitesPath, newContent, 'utf8');

// 验证语法
try {
    delete require.cache[require.resolve(websitesPath)];
    const db = require(websitesPath);
    console.log('✓ 语法验证通过');
    console.log(`最终网站总数: ${db.websitesDatabase.length}`);
} catch (e) {
    console.error('✗ 语法验证失败:', e.message);
    // 恢复备份
    fs.copyFileSync(backupPath, websitesPath);
    console.log('已从备份恢复文件');
    process.exit(1);
}

// 删除备份文件
fs.unlinkSync(backupPath);
console.log('\n✓ 去重完成，备份文件已清理');