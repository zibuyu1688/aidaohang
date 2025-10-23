const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 其余教育学习工具数据
const moreEducationTools = [
    {
        "name": "AI工具集",
        "description": "国内外热门AI工具集合网站",
        "url": "https://ai.bot",
        "category": "AI教育与学习",
        "tags": ["AI", "工具集合"]
    },
    {
        "name": "AI分享圈",
        "description": "最好最全的AI免费资源分享网站",
        "url": "https://aisharenet.com",
        "category": "AI教育与学习",
        "tags": ["AI", "免费资源"]
    },
    {
        "name": "软件侠",
        "description": "常用软件的入门视频教程",
        "url": "https://xueruanjian.com",
        "category": "AI教育与学习",
        "tags": ["软件教程", "视频教程"]
    },
    {
        "name": "ProcessOn",
        "description": "免费在线流程图和思维导图工具",
        "url": "https://www.processon.com",
        "category": "AI办公工具",
        "tags": ["工具", "在线", "流程图", "思维导图"]
    },
    {
        "name": "在线自学网",
        "description": "在线职业办公技能学习平台",
        "url": "https://www.zaixianzixue.com",
        "category": "AI教育与学习",
        "tags": ["在线", "职业技能"]
    },
    {
        "name": "PPTfans",
        "description": "PPT设计教程网",
        "url": "https://www.pptfans.cn/pptcourse",
        "category": "AI教育与学习",
        "tags": ["设计", "PPT教程"]
    },
    {
        "name": "OfficePLUS",
        "description": "微软Office官方在线模板网站",
        "url": "https://www.officeplus.cn",
        "category": "AI办公工具",
        "tags": ["在线", "Office模板"]
    },
    {
        "name": "Office官方",
        "description": "微软Office软件官方帮助和培训",
        "url": "https://support.microsoft.com/zh-cn/office",
        "category": "AI教育与学习",
        "tags": ["Office", "官方培训"]
    },
    {
        "name": "WPS学堂",
        "description": "WPS官方技巧学习平台",
        "url": "https://www.wps.cn/learning",
        "category": "AI教育与学习",
        "tags": ["WPS", "技巧学习"]
    },
    {
        "name": "Word联盟",
        "description": "办公软件教程学习平台",
        "url": "http://www.wordlm.com",
        "category": "AI教育与学习",
        "tags": ["办公软件", "教程"]
    },
    {
        "name": "锐普PPT论坛",
        "description": "专业友好的PPT交流平台",
        "url": "http://www.rapidbbs.cn",
        "category": "AI教育与学习",
        "tags": ["PPT", "交流平台"]
    },
    {
        "name": "办公资源网",
        "description": "海量办公资源下载的网站",
        "url": "https://www.bangongziyuan.com",
        "category": "设计资源",
        "tags": ["办公资源", "下载"]
    },
    {
        "name": "ExcelHome",
        "description": "Excel表格资源和教程网站",
        "url": "http://www.excelhome.net",
        "category": "AI教育与学习",
        "tags": ["Excel", "教程"]
    },
    {
        "name": "优品PPT",
        "description": "免费高质量PPT模板下载网站",
        "url": "https://www.ypppt.com",
        "category": "设计资源",
        "tags": ["PPT模板", "免费下载"]
    },
    {
        "name": "秋叶PPT",
        "description": "Office和职场系列在线课程",
        "url": "https://www.qiuyeppt.com",
        "category": "AI教育与学习",
        "tags": ["在线", "Office", "职场"]
    },
    {
        "name": "观猹",
        "description": "AI产品点评网站",
        "url": "https://watcha.cn",
        "category": "AI教育与学习",
        "tags": ["AI", "产品点评"]
    },
    {
        "name": "LiblibAI",
        "description": "国内领先的AI图像创作平台和模型社区",
        "url": "https://www.liblib.art/?sourceId=003943",
        "category": "AI设计工具",
        "tags": ["AI", "图像创作"]
    },
    {
        "name": "C4D之家",
        "description": "Cinema 4D教程和资源网站",
        "url": "https://www.c4d.cn",
        "category": "AI教育与学习",
        "tags": ["C4D", "教程"]
    },
    {
        "name": "Domestika",
        "description": "面向创意者的在线学习平台",
        "url": "https://www.domestika.org",
        "category": "AI教育与学习",
        "tags": ["在线", "创意学习"]
    },
    {
        "name": "CreativeLive",
        "description": "在线创意学习平台",
        "url": "https://www.creativelive.com",
        "category": "AI教育与学习",
        "tags": ["在线", "创意学习"]
    },
    {
        "name": "翼狐网",
        "description": "专注于设计教育的学习平台",
        "url": "https://www.yiihuu.com",
        "category": "AI教育与学习",
        "tags": ["设计", "教育平台"]
    },
    {
        "name": "有籍",
        "description": "设计相关的小册子集合网站",
        "url": "https://youji.pro",
        "category": "设计资源",
        "tags": ["设计", "小册子"]
    },
    {
        "name": "Adobe官方教程",
        "description": "Adobe官方出品的软件使用文章和视频教程",
        "url": "https://helpx.adobe.com/cn/support/support-new/learn-apps.html#phsp",
        "category": "AI教育与学习",
        "tags": ["Adobe", "官方教程"]
    },
    {
        "name": "飞屋设计",
        "description": "设计和插画创作方面的个人博客",
        "url": "https://www.ifeiwu.com",
        "category": "创意灵感",
        "tags": ["设计", "插画创作"]
    },
    {
        "name": "站酷ZCOOL",
        "description": "国内设计师交流互动分享平台",
        "url": "https://www.zcool.com.cn",
        "category": "创意灵感",
        "tags": ["设计", "交流平台"]
    },
    {
        "name": "UI中国",
        "description": "国内极具影响力的设计平台之一",
        "url": "https://www.ui.cn",
        "category": "创意灵感",
        "tags": ["设计", "UI设计"]
    },
    {
        "name": "虎课网",
        "description": "设计和办公软件视频教程在线学习平台",
        "url": "https://huke88.com",
        "category": "AI教育与学习",
        "tags": ["设计", "在线", "视频教程"]
    },
    {
        "name": "Skillshare",
        "description": "在线创意技能和软件相关学习社区",
        "url": "https://www.skillshare.com",
        "category": "AI教育与学习",
        "tags": ["在线", "创意技能"]
    },
    {
        "name": "Envato Tuts+",
        "description": "免费在线学习创意类教程和教学的平台",
        "url": "https://tutsplus.com",
        "category": "AI教育与学习",
        "tags": ["在线", "创意教程"]
    },
    {
        "name": "站酷学习",
        "description": "站酷旗下的艺术设计在线教育平台",
        "url": "https://www.gogoup.com",
        "category": "AI教育与学习",
        "tags": ["设计", "在线", "艺术设计"]
    },
    {
        "name": "oeasy",
        "description": "oeasy系列网络教程，完全免费",
        "url": "http://oeasy.org",
        "category": "AI教育与学习",
        "tags": ["免费教程", "网络教程"]
    },
    {
        "name": "优设网",
        "description": "国内优秀的设计师学习平台",
        "url": "https://www.uisdc.com",
        "category": "AI教育与学习",
        "tags": ["设计", "学习平台"]
    },
    {
        "name": "abduzeedo",
        "description": "高质量的设计灵感分享平台",
        "url": "https://abduzeedo.com",
        "category": "创意灵感",
        "tags": ["设计", "灵感分享"]
    },
    {
        "name": "优优教程网",
        "description": "设计师教程学习平台",
        "url": "https://uiiiuiii.com",
        "category": "AI教育与学习",
        "tags": ["设计", "教程平台"]
    },
    {
        "name": "doyoudo",
        "description": "平面设计及剪辑软件在线教程网站",
        "url": "https://www.doyoudo.com/free",
        "category": "AI教育与学习",
        "tags": ["设计", "在线", "剪辑软件"]
    },
    {
        "name": "国家中小学智慧教育平台电子教材",
        "description": "小初高免费电子教材",
        "url": "https://basic.smartedu.cn/tchMaterial",
        "category": "AI教育与学习",
        "tags": ["电子教材", "免费", "中小学"]
    },
    {
        "name": "鸠摩搜索",
        "description": "电子书搜索引擎",
        "url": "https://www.jiumodiary.com",
        "category": "AI教育与学习",
        "tags": ["电子书", "搜索引擎"]
    },
    {
        "name": "高教书苑",
        "description": "高等教育出版社电子教材",
        "url": "https://ebook.hep.com.cn/index.html",
        "category": "AI教育与学习",
        "tags": ["电子教材", "高等教育"]
    },
    {
        "name": "書格",
        "description": "自由开放的在线古籍图书馆",
        "url": "https://new.shuge.org",
        "category": "AI教育与学习",
        "tags": ["在线", "古籍图书馆"]
    },
    {
        "name": "古登堡计划Project Gutenberg",
        "description": "公共领域作品的免费电子图书馆",
        "url": "http://www.gutenberg.org",
        "category": "AI教育与学习",
        "tags": ["免费", "电子图书馆"]
    },
    {
        "name": "GitBook",
        "description": "开源的技术文档平台",
        "url": "https://www.gitbook.com",
        "category": "编程开发",
        "tags": ["文档", "开源", "技术文档"]
    },
    {
        "name": "微信读书",
        "description": "腾讯微信旗下正版书籍小说免费阅读平台",
        "url": "https://weread.qq.com",
        "category": "AI教育与学习",
        "tags": ["阅读", "免费", "腾讯"]
    },
    {
        "name": "LoreFree",
        "description": "去中心化知识共享社区",
        "url": "https://ebook2.lorefree.com",
        "category": "AI教育与学习",
        "tags": ["知识共享", "去中心化"]
    },
    {
        "name": "植物智",
        "description": "中科院植物研究所推出的植物百科和物种信息系统网站",
        "url": "https://www.iplant.cn",
        "category": "AI教育与学习",
        "tags": ["植物百科", "中科院"]
    },
    {
        "name": "Kurzgesagt简而言之",
        "description": "高质量的极简科普动画教育",
        "url": "https://kurzgesagt.org",
        "category": "AI教育与学习",
        "tags": ["科普", "动画教育"]
    },
    {
        "name": "独立游戏百科",
        "description": "独立游戏人的百科文档",
        "url": "https://docs.qq.com/sheet/DWWtxbVFWZ25OZWJU",
        "category": "AI教育与学习",
        "tags": ["文档", "独立游戏"]
    },
    {
        "name": "萌娘百科",
        "description": "ACG向wiki（百科）站点",
        "url": "https://zh.moegirl.org.cn/Mainpage",
        "category": "AI教育与学习",
        "tags": ["百科", "ACG"]
    },
    {
        "name": "Emoji百科",
        "description": "Emoji表情大全和颜文字百科",
        "url": "https://emojixd.com",
        "category": "AI教育与学习",
        "tags": ["Emoji", "表情百科"]
    },
    {
        "name": "小鸡词典",
        "description": "网络梗文化的娱乐科普社区",
        "url": "https://jikipedia.com",
        "category": "AI教育与学习",
        "tags": ["网络文化", "科普"]
    },
    {
        "name": "MBA智库",
        "description": "MBA智库百科，专注于经济管理",
        "url": "https://wiki.mbalib.com",
        "category": "AI教育与学习",
        "tags": ["MBA", "经济管理"]
    },
    {
        "name": "搜狗百科",
        "description": "搜狗公司推出的百科知识平台",
        "url": "https://baike.sogou.com",
        "category": "AI教育与学习",
        "tags": ["百科", "搜狗"]
    },
    {
        "name": "360百科",
        "description": "360推出的中文百科平台",
        "url": "https://baike.so.com",
        "category": "AI教育与学习",
        "tags": ["百科", "360"]
    },
    {
        "name": "业百科",
        "description": "各种百科小知识、生活常识问答",
        "url": "https://www.yebaike.com",
        "category": "AI教育与学习",
        "tags": ["百科", "生活常识"]
    },
    {
        "name": "央视网纪录片",
        "description": "CCTV节目官网旗下的央视纪录片平台",
        "url": "https://tv.cctv.com/yxg/index.shtml#datacid=jlp&datapd=&datafl=&fc=%E7%BA%AA%E5%BD%95%E7%89%87&datanf=&dataszm=",
        "category": "AI教育与学习",
        "tags": ["纪录片", "央视"]
    },
    {
        "name": "中国科普博览",
        "description": "中科院推出的大型科普网站",
        "url": "http://www.kepu.net.cn",
        "category": "AI教育与学习",
        "tags": ["科普", "中科院"]
    },
    {
        "name": "百度百科",
        "description": "百度旗下中文知识性百科全书",
        "url": "https://baike.baidu.com",
        "category": "AI教育与学习",
        "tags": ["百科", "百度"]
    },
    {
        "name": "快懂百科",
        "description": "今日头条旗下中文网络百科全书",
        "url": "http://www.baike.com",
        "category": "AI教育与学习",
        "tags": ["百科", "今日头条"]
    },
    {
        "name": "wikiHow",
        "description": "你可以信赖的万事指南",
        "url": "https://zh.wikihow.com",
        "category": "AI教育与学习",
        "tags": ["指南", "教程"]
    },
    {
        "name": "科普中国",
        "description": "让科技知识在网上和生活中流行",
        "url": "http://www.kepuchina.cn",
        "category": "AI教育与学习",
        "tags": ["科普", "科技知识"]
    },
    {
        "name": "知乎",
        "description": "有问题，上知乎。",
        "url": "https://www.zhihu.com",
        "category": "社交媒体",
        "tags": ["问答", "知识分享"]
    },
    {
        "name": "头条问答",
        "description": "头条问答（原悟空问答），今日头条旗下问答版块",
        "url": "https://wukong.toutiao.com",
        "category": "社交媒体",
        "tags": ["问答", "今日头条"]
    },
    {
        "name": "中公网校",
        "description": "公职备考在线学习培训辅助平台",
        "url": "https://www.eoffcn.com",
        "category": "AI教育与学习",
        "tags": ["在线", "公职备考", "辅助"]
    },
    {
        "name": "粉笔网",
        "description": "专注于职业教育和考试培训的在线教育平台",
        "url": "https://fenbi.com",
        "category": "AI教育与学习",
        "tags": ["在线", "职业教育"]
    },
    {
        "name": "中国研究生招生信息网",
        "description": "隶属教育部官方的考研网站",
        "url": "https://yz.chsi.com.cn",
        "category": "AI教育与学习",
        "tags": ["考研", "官方网站"]
    },
    {
        "name": "考研帮",
        "description": "中国领先的考研服务平台",
        "url": "http://www.kaoyan.com",
        "category": "AI教育与学习",
        "tags": ["考研", "服务平台"]
    },
    {
        "name": "中国教育在线考研频道",
        "description": "专业的研究生报考服务网络平台",
        "url": "https://kaoyan.eol.cn",
        "category": "AI教育与学习",
        "tags": ["在线", "考研服务"]
    },
    {
        "name": "中国考研网",
        "description": "为考生提供专业、可靠、贴心的考研信息",
        "url": "http://www.chinakaoyan.com",
        "category": "AI教育与学习",
        "tags": ["考研", "信息服务"]
    },
    {
        "name": "翰墨风雅碑帖网",
        "description": "汇藏历代经典碑帖，书法学习必备网站",
        "url": "http://www.hanmofengya.com/Index.html",
        "category": "AI教育与学习",
        "tags": ["书法", "碑帖"]
    },
    {
        "name": "建筑学院",
        "description": "为建筑师学习设计而打造的高品质平台",
        "url": "http://www.archcollege.com",
        "category": "AI教育与学习",
        "tags": ["设计", "建筑学"]
    },
    {
        "name": "音乐而聚",
        "description": "每天几分钟，做自己的音乐家",
        "url": "https://www.music2gather.com/hans",
        "category": "AI教育与学习",
        "tags": ["音乐", "学习"]
    },
    {
        "name": "吉他堂",
        "description": "聚合全网免费吉他谱",
        "url": "https://www.jitatang.cn",
        "category": "AI教育与学习",
        "tags": ["吉他", "免费"]
    },
    {
        "name": "蓝调口琴网",
        "description": "张晓松老师创办的蓝调口琴网",
        "url": "http://www.tenholes.com",
        "category": "AI教育与学习",
        "tags": ["口琴", "蓝调"]
    },
    {
        "name": "Flowkey",
        "description": "专为自学设计的在线钢琴教学应用",
        "url": "https://www.flowkey.com/zh",
        "category": "AI教育与学习",
        "tags": ["设计", "在线", "钢琴"]
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

console.log(`解析到 ${moreEducationTools.length} 个其余教育学习工具`);

// 去重
const uniqueEntries = moreEducationTools.filter(entry => !existingUrls.has(entry.url));
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
console.log('\n添加的其余教育学习工具（前15个）:');
uniqueEntries.slice(0, 15).forEach((entry, index) => {
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