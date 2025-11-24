const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 读取文件
let content = fs.readFileSync(websitesPath, 'utf8');

// 分类优化规则 - 更精确的分类
const categoryOptimizationRules = [
    // AI相关分类统一规范
    { from: ['AI视频创作', '视频生成AI', 'AI视频生成', 'AI视频编辑'], to: 'AI视频工具', priority: 1 },
    { from: ['AI图像创作', 'AI图像生成', '图像生成AI', 'AI绘画', '绘画AI'], to: 'AI图像工具', priority: 1 },
    { from: ['AI音频创作', 'AI音乐生成', '音频生成AI', '音频AI'], to: 'AI音频工具', priority: 1 },
    { from: ['AI写作助手', '写作助手', '写作AI', 'AI文案'], to: 'AI写作工具', priority: 1 },
    { from: ['AI设计助手', '设计助手', '设计AI'], to: 'AI设计工具', priority: 1 },
    { from: ['AI编程助手', '编程助手', '编程AI', '代码AI'], to: 'AI编程工具', priority: 1 },
    { from: ['AI办公助手', '办公助手', '办公AI'], to: 'AI办公工具', priority: 1 },
    { from: ['聊天AI', 'AI助手', 'AI对话'], to: 'AI聊天助手', priority: 1 },
    { from: ['阅读AI', 'AI阅读'], to: 'AI阅读工具', priority: 1 },
    { from: ['图像AI', 'AI图片'], to: 'AI图像工具', priority: 1 },
    { from: ['视频AI'], to: 'AI视频工具', priority: 1 },
    
    // 设计相关分类
    { from: ['漫画插画', '插画设计'], to: '插画与漫画', priority: 2 },
    { from: ['背景移除', '抠图工具'], to: '图像处理', priority: 2 },
    { from: ['无损调整', '图片编辑'], to: '图像处理', priority: 2 },
    { from: ['配色方案', '颜色工具'], to: '设计资源', priority: 2 },
    { from: ['图标下载', '图标库'], to: '设计资源', priority: 2 },
    { from: ['免费图库', '图片素材'], to: '设计资源', priority: 2 },
    { from: ['付费图库', '高质量图库'], to: '设计资源', priority: 2 },
    
    // 电商相关分类
    { from: ['全球电商平台', '国际电商'], to: '电商平台', priority: 2 },
    { from: ['拉美电商', '区域电商'], to: '电商平台', priority: 2 },
    { from: ['跨境电商工具', '电商辅助'], to: '跨境电商工具', priority: 2 },
    { from: ['选品分析', '产品分析'], to: '跨境电商工具', priority: 2 },
    { from: ['跨境市场分析'], to: '跨境电商工具', priority: 2 },
    
    // 隐私安全工具
    { from: ['代理IP', 'IP代理'], to: '隐私安全工具', priority: 2 },
    { from: ['指纹浏览器', '防关联浏览器'], to: '隐私安全工具', priority: 2 },
    { from: ['指纹检测'], to: '隐私安全工具', priority: 2 },
    { from: ['临时邮箱', '临时邮件'], to: '隐私安全工具', priority: 2 },
    { from: ['短信接码', '免费接码'], to: '隐私安全工具', priority: 2 },
    
    // 支付工具
    { from: ['虚拟信用卡', '虚拟卡'], to: '支付工具', priority: 2 },
    
    // 营销工具
    { from: ['SEO工具', 'SEO优化'], to: '营销推广', priority: 2 },
    { from: ['Deals平台'], to: '营销推广', priority: 2 },
    
    // 知识产权
    { from: ['知识产权业务', '商标专利'], to: '知识产权服务', priority: 2 },
    
    // 其他
    { from: ['新闻资讯', '资讯平台'], to: '资讯与媒体', priority: 2 },
    { from: ['灵感创意', '创意设计公司'], to: '创意灵感', priority: 2 },
    { from: ['浏览器插件'], to: '浏览器扩展', priority: 2 },
];

// 特殊关键词匹配规则（基于描述和名称的内容分析）
const contentBasedRules = [
    // 视频相关
    { keywords: ['视频编辑', '视频制作', '视频生成', '视频创作', 'video', 'sora'], category: 'AI视频工具' },
    
    // 图像相关
    { keywords: ['图片生成', '图像生成', '绘画', '画图', 'midjourney', 'stable diffusion', 'dalle'], category: 'AI图像工具' },
    { keywords: ['抠图', '去背景', '背景移除', 'remove background'], category: '图像处理' },
    
    // 音频相关
    { keywords: ['音频', '音乐', '语音', 'audio', 'music', 'tts', '文字转语音', '语音合成'], category: 'AI音频工具' },
    
    // 编程相关
    { keywords: ['编程', '代码', '开发', 'github', 'copilot', 'code', 'programming'], category: 'AI编程工具' },
    
    // 写作相关
    { keywords: ['写作', '文案', '文章', '内容创作', 'writing', '润色'], category: 'AI写作工具' },
    
    // 聊天助手
    { keywords: ['聊天', '对话', 'gpt', 'claude', '助手', 'chatbot'], category: 'AI聊天助手' },
    
    // 办公工具
    { keywords: ['办公', 'ppt', 'excel', 'word', '表格', '文档', 'office'], category: 'AI办公工具' },
    
    // 翻译工具
    { keywords: ['翻译', 'translation', '多语言'], category: 'AI翻译工具' },
    
    // 教育学习
    { keywords: ['教育', '学习', '教学', '培训', '课程', 'education', 'learning'], category: 'AI教育与学习' },
];

let changedCount = 0;
const changes = [];

// 第一步：合并相似分类
console.log('\n第一步：统一和合并相似分类...\n');

categoryOptimizationRules.forEach(rule => {
    rule.from.forEach(oldCat => {
        const pattern = new RegExp(`"category":\\s*"${oldCat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`, 'g');
        const matches = content.match(pattern);
        
        if (matches && matches.length > 0) {
            content = content.replace(pattern, `"category": "${rule.to}"`);
            changedCount += matches.length;
            changes.push({
                type: '分类合并',
                from: oldCat,
                to: rule.to,
                count: matches.length
            });
            console.log(`✓ "${oldCat}" -> "${rule.to}" (${matches.length}个)`);
        }
    });
});

// 第二步：基于内容的智能分类优化
console.log('\n第二步：基于内容分析优化分类...\n');

const websitePattern = /{\s*"name":\s*"([^"]+)",\s*"description":\s*"([^"]*)",\s*"url":\s*"([^"]+)",\s*"category":\s*"([^"]+)"/g;
let match;
const contentChanges = [];

while ((match = websitePattern.exec(content)) !== null) {
    const [fullMatch, name, description, url, currentCategory] = match;
    const text = (name + ' ' + description).toLowerCase();
    
    // 跳过已经是AI工具的分类
    if (currentCategory.startsWith('AI') && currentCategory !== 'AI工具') {
        continue;
    }
    
    // 检查是否需要重新分类
    for (const rule of contentBasedRules) {
        let shouldRecategorize = false;
        
        for (const keyword of rule.keywords) {
            if (text.includes(keyword.toLowerCase())) {
                shouldRecategorize = true;
                break;
            }
        }
        
        if (shouldRecategorize && currentCategory !== rule.category) {
            contentChanges.push({
                name,
                from: currentCategory,
                to: rule.category,
                reason: '内容匹配'
            });
            break;
        }
    }
}

// 应用基于内容的更改
contentChanges.forEach(change => {
    const pattern = new RegExp(
        `({\\s*"name":\\s*"${change.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}",\\s*"description":\\s*"[^"]*",\\s*"url":\\s*"[^"]+",\\s*"category":\\s*)"${change.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`,
        'g'
    );
    
    content = content.replace(pattern, `$1"${change.to}"`);
    console.log(`✓ "${change.name}": "${change.from}" -> "${change.to}"`);
});

// 写入文件
fs.writeFileSync(websitesPath, content, 'utf8');

console.log(`\n优化完成！`);
console.log(`分类合并：${changedCount} 个`);
console.log(`内容优化：${contentChanges.length} 个`);

// 显示优化后的分类统计
console.log('\n优化后的主要分类统计：');
const categoryStats = {};
const allCategories = content.match(/"category":\s*"([^"]+)"/g);

if (allCategories) {
    allCategories.forEach(cat => {
        const name = cat.match(/"category":\s*"([^"]+)"/)[1];
        categoryStats[name] = (categoryStats[name] || 0) + 1;
    });
    
    Object.entries(categoryStats)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 30)
        .forEach(([cat, count]) => {
            console.log(`  ${cat}: ${count}个`);
        });
}

// 验证语法
try {
    delete require.cache[require.resolve(websitesPath)];
    require(websitesPath);
    console.log('\n✓ 语法验证通过！');
} catch (e) {
    console.error('\n✗ 语法验证失败:', e.message);
    fs.copyFileSync(backupPath, websitesPath);
    console.log('已从备份恢复文件');
    process.exit(1);
}

console.log(`\n如需恢复，备份文件位于: ${backupPath}`);
