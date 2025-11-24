const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 读取文件
let content = fs.readFileSync(websitesPath, 'utf8');

// 分类规则 - 基于名称和描述的关键词匹配
const categoryRules = [
    // AI助手和聊天
    { keywords: ['claude', 'chatgpt', '助手', '对话', '聊天', 'chat'], category: 'AI聊天助手' },
    
    // 教育学习
    { keywords: ['教育', '学习', '教学', '学伴', '辅导', '备考', '教师', '学生', '课程', 'teach', 'learn', 'education', 'study', 'tutor'], category: 'AI教育与学习' },
    
    // 面试求职
    { keywords: ['面试', '求职', '找工作', 'interview', 'job'], category: 'AI职业发展' },
    
    // 英语学习
    { keywords: ['英语', 'english', '语言学习', '外语'], category: 'AI语言学习' },
    
    // 古籍文献
    { keywords: ['古籍', '典籍', '古文', '文献'], category: 'AI文化传承' },
    
    // 图书知识
    { keywords: ['图书', 'books', '知识引擎', '百科', 'wolfram'], category: 'AI知识工具' },
    
    // 数据分析
    { keywords: ['数据', 'data', '分析', 'analytics'], category: 'AI数据分析' },
    
    // 游戏开发
    { keywords: ['游戏', 'game', '游戏素材', '游戏资产', '游戏开发'], category: 'AI游戏工具' },
    
    // 无障碍辅助
    { keywords: ['手语', '视障', '听障', '无障碍', '残障', 'eyes', '志愿者'], category: 'AI无障碍辅助' },
    
    // 占卜娱乐
    { keywords: ['占卜', '易经', '算命', '卦'], category: 'AI娱乐工具' },
    
    // 创客社区
    { keywords: ['创客', '社区', 'community', 'lablab'], category: 'AI开发社区' },
    
    // 问答工具
    { keywords: ['问答', 'q&a', 'qchat', '在问'], category: 'AI问答工具' },
    
    // 世界构建
    { keywords: ['世界', '元宇宙', 'world'], category: 'AI世界构建' },
];

// 提取所有网站条目进行分析
let changedCount = 0;
const changes = [];

// 匹配网站对象的正则表达式
const websitePattern = /{\s*"name":\s*"([^"]+)",\s*"description":\s*"([^"]*)",\s*"url":\s*"([^"]+)",\s*"category":\s*"未分类"/g;

content = content.replace(websitePattern, (match, name, description, url) => {
    let newCategory = '未分类';
    
    // 组合名称和描述用于匹配
    const text = (name + ' ' + description).toLowerCase();
    
    // 尝试匹配分类规则
    for (const rule of categoryRules) {
        for (const keyword of rule.keywords) {
            if (text.includes(keyword.toLowerCase())) {
                newCategory = rule.category;
                break;
            }
        }
        if (newCategory !== '未分类') break;
    }
    
    // 如果仍未分类，使用默认分类
    if (newCategory === '未分类') {
        newCategory = 'AI工具';
    }
    
    changedCount++;
    changes.push({
        name: name,
        oldCategory: '未分类',
        newCategory: newCategory
    });
    
    return `{
        "name": "${name}",
        "description": "${description}",
        "url": "${url}",
        "category": "${newCategory}"`;
});

// 写入文件
fs.writeFileSync(websitesPath, content, 'utf8');

console.log(`\n重新分类完成！`);
console.log(`总共修改了 ${changedCount} 个网站`);

if (changes.length > 0) {
    console.log('\n分类详情:');
    
    // 按新分类分组统计
    const categoryStats = {};
    changes.forEach(change => {
        if (!categoryStats[change.newCategory]) {
            categoryStats[change.newCategory] = [];
        }
        categoryStats[change.newCategory].push(change.name);
    });
    
    Object.keys(categoryStats).sort().forEach(category => {
        console.log(`\n${category} (${categoryStats[category].length}个):`);
        categoryStats[category].forEach(name => {
            console.log(`  - ${name}`);
        });
    });
}

// 验证语法
try {
    delete require.cache[require.resolve(websitesPath)];
    require(websitesPath);
    console.log('\n✓ 语法验证通过！');
} catch (e) {
    console.error('\n✗ 语法验证失败:', e.message);
    // 恢复备份
    fs.copyFileSync(backupPath, websitesPath);
    console.log('已从备份恢复文件');
    process.exit(1);
}

console.log(`\n如需恢复，备份文件位于: ${backupPath}`);
