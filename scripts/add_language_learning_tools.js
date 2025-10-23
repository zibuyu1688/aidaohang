const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 语言学习工具数据
const languageLearningTools = [
    {
        "name": "哇学社",
        "description": "游戏化英语学习平台",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2025/09/waxueshe-logo.png",
        "url": "https://www.waxueshe.com",
        "category": "AI教育与学习",
        "tags": ["英语学习", "游戏化"]
    },
    {
        "name": "Linggle",
        "description": "语言参考搜索引擎",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/linggle-icon.png",
        "url": "https://linggle.com",
        "category": "AI教育与学习",
        "tags": ["语言搜索", "参考工具"]
    },
    {
        "name": "Toucan",
        "description": "浏览网页时学外语",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/toucan.png",
        "url": "https://jointoucan.com",
        "category": "AI教育与学习",
        "tags": ["浏览器扩展", "外语学习"]
    },
    {
        "name": "Cambly",
        "description": "私人外教1对1真人在线课堂",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/cambly.png",
        "url": "https://www.cambly.com",
        "category": "AI教育与学习",
        "tags": ["在线", "一对一", "外教"]
    },
    {
        "name": "Grammarly",
        "description": "英语写作语法和拼写检查神器",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/grammarly-icon.png",
        "url": "https://app.grammarly.com",
        "category": "AI办公工具",
        "tags": ["语法检查", "写作辅助"]
    },
    {
        "name": "Ludwig",
        "description": "英语句子用例搜索引擎",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/ludwig-guru.png",
        "url": "https://ludwig.guru",
        "category": "AI教育与学习",
        "tags": ["英语搜索", "句子用例"]
    },
    {
        "name": "italki",
        "description": "向专业教师在线学习超过150种外语",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/italki.png",
        "url": "https://www.italki.cn",
        "category": "AI教育与学习",
        "tags": ["在线", "多语种", "专业教师"]
    },
    {
        "name": "Babbel",
        "description": "1000万用户都在用的语言学习平台",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/babbel.png",
        "url": "https://www.babbel.com",
        "category": "AI教育与学习",
        "tags": ["语言学习", "热门平台"]
    },
    {
        "name": "LingoDeer",
        "description": "在线学习韩语、日语和其他语言",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/lingodeer.png",
        "url": "https://www.lingodeer.com",
        "category": "AI教育与学习",
        "tags": ["在线", "韩语", "日语"]
    },
    {
        "name": "Rosetta Stone罗塞塔石碑",
        "description": "快速、简便、正确地学习语言",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/rosettastone.png",
        "url": "https://www.rosettastone.com",
        "category": "AI教育与学习",
        "tags": ["语言学习", "经典软件"]
    },
    {
        "name": "Visuwords",
        "description": "可视化英语单词词典",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/visuwords-iconpng.png",
        "url": "https://visuwords.com",
        "category": "AI教育与学习",
        "tags": ["可视化", "英语词典"]
    },
    {
        "name": "NHK学日语",
        "description": "日本广播协会出品的免费日语学习课程",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/nhk.png",
        "url": "https://www3.nhk.or.jp/nhkworld/zh/learnjapanese",
        "category": "AI教育与学习",
        "tags": ["日语学习", "免费课程", "NHK"]
    },
    {
        "name": "TV5Monde Enseigner",
        "description": "TV5Monde法语电视网旗下的免费学习法语的网站",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/tv5monde.png",
        "url": "https://enseigner.tv5monde.com",
        "category": "AI教育与学习",
        "tags": ["法语学习", "免费", "TV5Monde"]
    },
    {
        "name": "田间小站",
        "description": "英语小词详解和好书推荐",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/tianfateng.png",
        "url": "https://www.tianfateng.cn",
        "category": "AI教育与学习",
        "tags": ["英语词汇", "图书推荐"]
    },
    {
        "name": "多邻国",
        "description": "在多邻国学外语，学习就像玩游戏！",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/duolingo.png",
        "url": "https://www.duolingo.com",
        "category": "AI教育与学习",
        "tags": ["外语学习", "游戏化", "热门"]
    },
    {
        "name": "忆术家Memrise",
        "description": "像当地人一样学习外语",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/memrise.png",
        "url": "https://www.memrise.com",
        "category": "AI教育与学习",
        "tags": ["外语学习", "记忆技巧"]
    },
    {
        "name": "百词斩",
        "description": "趣味背单词，就用百词斩！",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/baicizhan.png",
        "url": "http://www.baicizhan.com",
        "category": "AI教育与学习",
        "tags": ["背单词", "趣味学习"]
    },
    {
        "name": "每日英语听力",
        "description": "专为英语学习者定制的英语听力训练软件",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/ting-daily.png",
        "url": "http://dict.eudic.net/ting",
        "category": "AI教育与学习",
        "tags": ["英语听力", "训练软件"]
    },
    {
        "name": "Maspeak",
        "description": "学习新语言单词的有趣平台",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/maspeak.png",
        "url": "https://www.maspeak.com",
        "category": "AI教育与学习",
        "tags": ["单词学习", "趣味平台"]
    },
    {
        "name": "ESLBuzz",
        "description": "1000+免费英语学习课程",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/eslbuzz.png",
        "url": "https://www.eslbuzz.com",
        "category": "AI教育与学习",
        "tags": ["免费课程", "英语学习"]
    },
    {
        "name": "Lang-8",
        "description": "多国语言学习交流平台",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/lang-8.png",
        "url": "https://lang-8.com",
        "category": "AI教育与学习",
        "tags": ["语言交流", "多国语言"]
    },
    {
        "name": "沪江英语",
        "description": "沪江旗下英语学习资讯网站",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/hjenglish.png",
        "url": "https://www.hjenglish.com",
        "category": "AI教育与学习",
        "tags": ["英语学习", "沪江"]
    },
    {
        "name": "译学馆",
        "description": "知识无疆界",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/yxgapp.png",
        "url": "https://www.yxgapp.com",
        "category": "AI教育与学习",
        "tags": ["翻译学习", "知识分享"]
    },
    {
        "name": "声同小语种",
        "description": "声同此声，心同此心！小语种学习论坛",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/shengtong.png",
        "url": "http://www.somdom.com",
        "category": "AI教育与学习",
        "tags": ["小语种", "学习论坛"]
    },
    {
        "name": "有道精品课",
        "description": "有道旗下精品学习课程",
        "iconUrl": "https://www.xue8nav.com/wp-content/uploads/2020/01/youdaoke.png",
        "url": "https://ke.youdao.com",
        "category": "AI教育与学习",
        "tags": ["精品课程", "有道"]
    }
];

// 读取现有数据并获取已存在的URL
let content = fs.readFileSync(websitesPath, 'utf8');
const existingUrls = new Set();
const urlMatches = content.match(/"url":\s*"([^"]+)"/g);
if (urlMatches) {
    urlMatches.forEach(match => {
        const url = match.match(/"url":\s*"([^"]+)"/)[1];
        existingUrls.add(url);
    });
}

console.log(`解析到 ${languageLearningTools.length} 个语言学习工具`);

// 去重
const uniqueEntries = languageLearningTools.filter(entry => !existingUrls.has(entry.url));
console.log(`去重后剩余 ${uniqueEntries.length} 个新条目`);

if (uniqueEntries.length === 0) {
    console.log('没有新条目需要添加');
    fs.unlinkSync(backupPath);
    process.exit(0);
}

// 生成要插入的条目
const newEntriesText = uniqueEntries.map(entry => `    {
        "name": "${entry.name}",
        "description": "${entry.description}",
        "url": "${entry.url}",
        "category": "${entry.category}",
        "tags": ${JSON.stringify(entry.tags)}
    }`).join(',\n');

// 找到插入点
const insertPoint = content.lastIndexOf('\n];\n\n// 热门推荐');
if (insertPoint === -1) {
    console.error('未找到插入点');
    fs.unlinkSync(backupPath);
    process.exit(1);
}

// 插入新条目
const newContent = content.slice(0, insertPoint) + ',\n' + newEntriesText + content.slice(insertPoint);
fs.writeFileSync(websitesPath, newContent, 'utf8');

console.log(`已添加 ${uniqueEntries.length} 个新条目到 websites.js`);

// 验证语法
try {
    delete require.cache[require.resolve(websitesPath)];
    const db = require(websitesPath);
    console.log('✓ 语法验证通过');
    console.log(`当前网站总数: ${db.websitesDatabase.length}`);
} catch (e) {
    console.error('✗ 语法验证失败:', e.message);
    // 恢复备份
    fs.copyFileSync(backupPath, websitesPath);
    console.log('已从备份恢复文件');
    process.exit(1);
}

// 显示添加的条目示例
console.log('\n添加的语言学习工具（前10个）:');
uniqueEntries.slice(0, 10).forEach((entry, index) => {
    console.log(`${index + 1}. ${entry.name} - ${entry.url} (${entry.category})`);
});

// 显示分类统计
const categoryStats = {};
uniqueEntries.forEach(entry => {
    categoryStats[entry.category] = (categoryStats[entry.category] || 0) + 1;
});

console.log('\n新增条目按分类统计:');
Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
    console.log(`  ${category}: ${count}个`);
});

// 删除备份文件
fs.unlinkSync(backupPath);
console.log('\n✓ 添加完成，备份文件已清理');