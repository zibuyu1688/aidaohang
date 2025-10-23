const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 教育学习工具数据
const educationTools = [
    {
        "name": "稿易AI论文",
        "description": "专业的AI论文写作助手，免费生成2000字大纲",
        "url": "https://gaoyiai.com",
        "category": "AI办公工具",
        "tags": ["AI", "论文写作", "助手"]
    },
    {
        "name": "笔灵AI论文",
        "description": "一站式AI论文写作助手",
        "url": "https://ibiling.cn/paper?from=aibotpaper",
        "category": "AI办公工具",
        "tags": ["AI", "论文写作", "助手"]
    },
    {
        "name": "66AI论文",
        "description": "高质量、低重复率AI辅助论文写作工具",
        "url": "https://www.66paper.cn/?pmt=2E1C09",
        "category": "AI办公工具",
        "tags": ["AI", "论文写作", "工具", "辅助"]
    },
    {
        "name": "千笔AI论文",
        "description": "专业的论文写作指导工具",
        "url": "https://www.qianbixiezuo.com/?pic=g5DP",
        "category": "AI办公工具",
        "tags": ["AI", "论文写作", "工具"]
    },
    {
        "name": "茅茅虫AI论文",
        "description": "一站式AI智能写作助手",
        "url": "https://www.mmc.cc/?fromId=954f8p78",
        "category": "AI办公工具",
        "tags": ["AI", "智能", "写作助手"]
    },
    {
        "name": "Aibiye",
        "description": "综合性的AI论文写作AI平台",
        "url": "https://www.aibiye.com/?code=ZrW9Dy",
        "category": "AI办公工具",
        "tags": ["AI", "论文写作"]
    },
    {
        "name": "Paperpal",
        "description": "CACTUS开科思推出的英语论文AI写作工具",
        "url": "https://www.editage.cn/paperpal?utm_source=ai-bot&utm_medium=Banner&utm_campaign=Banner",
        "category": "AI办公工具",
        "tags": ["AI", "英语论文", "工具"]
    },
    {
        "name": "知网",
        "description": "中国最大的学术信息检索与服务平台",
        "url": "https://www.cnki.net",
        "category": "AI教育与学习",
        "tags": ["学术检索", "服务平台"]
    },
    {
        "name": "百度学术",
        "description": "提供学术文献检索和分析的平台",
        "url": "https://xueshu.baidu.com",
        "category": "AI教育与学习",
        "tags": ["学术检索", "分析"]
    },
    {
        "name": "万方数据",
        "description": "科研学习全流程支持服务平台",
        "url": "https://w.wanfangdata.com.cn",
        "category": "AI教育与学习",
        "tags": ["科研学习", "服务平台"]
    },
    {
        "name": "青泥学术",
        "description": "专注于学术研究与写作的智能平台",
        "url": "https://www.xueshuchuangxin.com",
        "category": "AI教育与学习",
        "tags": ["学术研究", "智能"]
    },
    {
        "name": "玻尔",
        "description": "新一代科研知识库与AI学术搜索平台",
        "url": "https://www.bohrium.com",
        "category": "AI教育与学习",
        "tags": ["AI", "科研知识库"]
    },
    {
        "name": "沁言学术",
        "description": "专为高校师生、科研人员及知识工作者设计的AI科研写作工具",
        "url": "https://www.qinyanai.com",
        "category": "AI办公工具",
        "tags": ["AI", "科研写作", "工具", "设计"]
    },
    {
        "name": "WisPaper",
        "description": "复旦大学团队推出的 AI 学术科研工具",
        "url": "https://www.wispaper.ai",
        "category": "AI办公工具",
        "tags": ["AI", "学术科研", "工具"]
    },
    {
        "name": "猫眼课题宝",
        "description": "专为科研人员设计的AI课题申报辅助工具",
        "url": "https://www.myketi.com/ai-topic-release?passageCode=aigongjuji",
        "category": "AI办公工具",
        "tags": ["AI", "课题申报", "工具", "设计", "辅助"]
    },
    {
        "name": "小绿鲸",
        "description": "AI英文文献管理和阅读工具",
        "url": "https://www.xljsci.com",
        "category": "AI办公工具",
        "tags": ["AI", "文献管理", "阅读", "工具"]
    },
    {
        "name": "范文喵",
        "description": "大学生的AI论文写作工具",
        "url": "https://ai.wolian.chat",
        "category": "AI办公工具",
        "tags": ["AI", "论文写作", "工具"]
    },
    {
        "name": "笔目鱼",
        "description": "小绿鲸推出的专业AI英文论文写作工具",
        "url": "https://www.bmysci.com/?channelCode=aibotad",
        "category": "AI办公工具",
        "tags": ["AI", "英文论文", "工具"]
    },
    {
        "name": "大学资源网",
        "description": "汇聚各类学科领域的学习资源平台",
        "url": "https://www.dxzy163.com",
        "category": "AI教育与学习",
        "tags": ["学习资源", "平台"]
    },
    {
        "name": "我要自学网",
        "description": "国内领先的在线实用技能视频学习平台",
        "url": "https://www.51zxw.net",
        "category": "AI教育与学习",
        "tags": ["在线", "技能学习"]
    },
    {
        "name": "OpenClassrooms",
        "description": "超过500+免费高质量课程",
        "url": "https://openclassrooms.com/en/courses",
        "category": "AI教育与学习",
        "tags": ["免费课程", "高质量"]
    },
    {
        "name": "MasterClass",
        "description": "世界顶级大师精品课程学习平台",
        "url": "https://www.masterclass.com",
        "category": "AI教育与学习",
        "tags": ["精品课程", "大师级"]
    },
    {
        "name": "FutureLearn",
        "description": "英国第一MOOC平台",
        "url": "https://www.futurelearn.com",
        "category": "AI教育与学习",
        "tags": ["MOOC", "英国平台"]
    },
    {
        "name": "爱课程",
        "description": "高等教育课程资源共享平台",
        "url": "https://www.icourses.cn",
        "category": "AI教育与学习",
        "tags": ["高等教育", "资源共享"]
    },
    {
        "name": "网易公开课",
        "description": "网易旗下的免费公开课平台",
        "url": "https://open.163.com",
        "category": "AI教育与学习",
        "tags": ["免费", "公开课"]
    },
    {
        "name": "MOOC中国",
        "description": "慕课改变你，你改变世界。",
        "url": "https://www.mooc.cn",
        "category": "AI教育与学习",
        "tags": ["慕课", "MOOC"]
    },
    {
        "name": "终身教育平台",
        "description": "国家开放大学推出的全民终身教育平台",
        "url": "http://le.ouchn.cn/#/home",
        "category": "AI教育与学习",
        "tags": ["终身教育", "国家平台"]
    },
    {
        "name": "国家高等教育智慧教育平台",
        "description": "全国性的综合性在线开放课程平台",
        "url": "https://higher.smartedu.cn/subjects",
        "category": "AI教育与学习",
        "tags": ["在线", "智慧教育"]
    },
    {
        "name": "Udemy",
        "description": "全球性在线学习与教学平台，超20余万门课程",
        "url": "https://www.udemy.com",
        "category": "AI教育与学习",
        "tags": ["在线", "全球平台"]
    },
    {
        "name": "Coursera",
        "description": "大型公开在线课程项目，来自世界顶尖大学的慕课",
        "url": "https://www.coursera.org",
        "category": "AI教育与学习",
        "tags": ["在线", "顶尖大学"]
    },
    {
        "name": "edX",
        "description": "MIT和哈佛推出的大规模开放在线课堂平台",
        "url": "https://www.edx.org/edxchina",
        "category": "AI教育与学习",
        "tags": ["在线", "MIT", "哈佛"]
    },
    {
        "name": "可汗学院",
        "description": "非营利性教育学习平台",
        "url": "https://zh.khanacademy.org",
        "category": "AI教育与学习",
        "tags": ["非营利", "教育平台"]
    },
    {
        "name": "网易云课堂",
        "description": "专注于成人终身学习的在线教育平台",
        "url": "https://study.163.com",
        "category": "AI教育与学习",
        "tags": ["在线", "终身学习"]
    },
    {
        "name": "哔哩哔哩知识区",
        "description": "来哔哩哔哩，学习也要干杯",
        "url": "https://www.bilibili.com/v/knowledge",
        "category": "AI教育与学习",
        "tags": ["知识分享", "视频学习"]
    },
    {
        "name": "腾讯课堂",
        "description": "腾讯推出的专业在线教育平台",
        "url": "https://ke.qq.com",
        "category": "AI教育与学习",
        "tags": ["在线", "腾讯"]
    },
    {
        "name": "超星尔雅",
        "description": "通识教育网络教学平台",
        "url": "http://erya.mooc.chaoxing.com",
        "category": "AI教育与学习",
        "tags": ["通识教育", "网络教学"]
    },
    {
        "name": "学堂在线",
        "description": "清华大学发起建立的慕课平台",
        "url": "https://www.xuetangx.com",
        "category": "AI教育与学习",
        "tags": ["在线", "清华大学"]
    },
    {
        "name": "中国大学MOOC",
        "description": "国家精品课程在线学习平台",
        "url": "https://www.icourse163.org",
        "category": "AI教育与学习",
        "tags": ["在线", "精品课程"]
    },
    {
        "name": "AI大学堂",
        "description": "科大讯飞打造的专业 AI 在线学习平台",
        "url": "https://www.aidaxue.com/?ch=daxue_collection_28",
        "category": "AI教育与学习",
        "tags": ["AI", "在线", "科大讯飞"]
    },
    {
        "name": "华为开发者学堂",
        "description": "华为官方面向开发者的学习、认证和职业发展的平台",
        "url": "https://developer.huawei.com/consumer/cn/training",
        "category": "编程开发",
        "tags": ["华为", "开发者", "认证"]
    },
    {
        "name": "Sabe.io",
        "description": "免费高质量的编程课程和教程",
        "url": "https://sabe.io",
        "category": "编程开发",
        "tags": ["免费", "编程课程"]
    },
    {
        "name": "Laracasts",
        "description": "学习Laravel和网页开发的优质网站",
        "url": "https://laracasts.com",
        "category": "编程开发",
        "tags": ["Laravel", "网页开发"]
    },
    {
        "name": "Codewars",
        "description": "计算机编程教育和技术挑战社区",
        "url": "https://www.codewars.com",
        "category": "编程开发",
        "tags": ["编程教育", "技术挑战"]
    },
    {
        "name": "CSDN",
        "description": "全球知名中文开发者网站",
        "url": "https://www.csdn.net",
        "category": "编程开发",
        "tags": ["开发者社区", "中文"]
    },
    {
        "name": "GeeksforGeeks",
        "description": "专为极客提供的计算机科学门户",
        "url": "https://www.geeksforgeeks.org",
        "category": "编程开发",
        "tags": ["计算机科学", "极客"]
    },
    {
        "name": "DEV Community",
        "description": "软件开发人员社区",
        "url": "https://dev.to",
        "category": "编程开发",
        "tags": ["开发者社区", "软件开发"]
    },
    {
        "name": "W3School在线教程",
        "description": "在线网站建设和Web技术教程平台",
        "url": "https://www.w3school.com.cn",
        "category": "编程开发",
        "tags": ["在线", "Web技术"]
    },
    {
        "name": "SoloLearn",
        "description": "编程语言课程在线学习平台",
        "url": "https://www.sololearn.com/home",
        "category": "编程开发",
        "tags": ["在线", "编程语言"]
    },
    {
        "name": "Google开发者教程（官方中文）",
        "description": "谷歌官方的开发者课程",
        "url": "https://developers.google.cn/learn/pathways?hl=zh-cn",
        "category": "编程开发",
        "tags": ["Google", "开发者", "官方"]
    },
    {
        "name": "Kaggle",
        "description": "数据科学社区和机器学习竞赛平台",
        "url": "https://www.kaggle.com",
        "category": "AI数据分析",
        "tags": ["数据科学", "机器学习"]
    },
    {
        "name": "Udacity优达学城",
        "description": "在线学习各种编程和互联网技术",
        "url": "https://www.udacity.com",
        "category": "编程开发",
        "tags": ["在线", "编程技术"]
    },
    {
        "name": "Programiz",
        "description": "免费的在线编程学习平台",
        "url": "https://www.programiz.com",
        "category": "编程开发",
        "tags": ["在线", "免费", "编程学习"]
    },
    {
        "name": "OSHWHub",
        "description": "嘉立创EDA开源硬件平台和社区",
        "url": "https://oshwhub.com",
        "category": "编程开发",
        "tags": ["开源硬件", "EDA"]
    },
    {
        "name": "飞桨PaddlePaddle",
        "description": "百度旗下推出的开源深度学习平台",
        "url": "https://www.paddlepaddle.org.cn",
        "category": "AI数据分析",
        "tags": ["深度学习", "百度", "开源"]
    },
    {
        "name": "freeCodeCamp",
        "description": "免费学习编程的平台和非营利社区",
        "url": "https://www.freecodecamp.org",
        "category": "编程开发",
        "tags": ["免费", "编程学习"]
    },
    {
        "name": "SegmentFault思否",
        "description": "国内领先的开发者技术社区",
        "url": "https://segmentfault.com",
        "category": "编程开发",
        "tags": ["开发者社区", "技术"]
    },
    {
        "name": "Stack Overflow",
        "description": "全世界最大的开发者和编程技术问答社区",
        "url": "https://stackoverflow.com",
        "category": "编程开发",
        "tags": ["问答社区", "编程技术"]
    },
    {
        "name": "掘金",
        "description": "开发者技术内容分享与交流平台",
        "url": "https://juejin.cn",
        "category": "编程开发",
        "tags": ["技术分享", "开发者"]
    },
    {
        "name": "egghead",
        "description": "专业高质量的前端开发课程平台",
        "url": "https://egghead.io",
        "category": "编程开发",
        "tags": ["前端开发", "高质量"]
    },
    {
        "name": "五分钟学算法",
        "description": "小吴讲算法，图解面试算法",
        "url": "https://www.cxyxiaowu.com",
        "category": "编程开发",
        "tags": ["算法", "面试"]
    },
    {
        "name": "Pluralsight",
        "description": "IT在线教育和培训平台",
        "url": "https://www.pluralsight.com",
        "category": "编程开发",
        "tags": ["在线", "IT教育"]
    },
    {
        "name": "GitHub",
        "description": "全世界最大的程序员开发社区",
        "url": "https://github.com",
        "category": "编程开发",
        "tags": ["开发社区", "程序员"]
    },
    {
        "name": "微软学院",
        "description": "微软官方出品的教程和学习路径",
        "url": "https://docs.microsoft.com/zh-cn/learn",
        "category": "编程开发",
        "tags": ["微软", "官方教程"]
    },
    {
        "name": "Scrimba",
        "description": "交互式前端学习神器",
        "url": "https://scrimba.com",
        "category": "编程开发",
        "tags": ["交互式", "前端学习"]
    },
    {
        "name": "Codecademy",
        "description": "国外在线学习编程知识的网站",
        "url": "https://codecademy.dev",
        "category": "编程开发",
        "tags": ["在线", "编程知识"]
    },
    {
        "name": "慕课网",
        "description": "程序员的梦工厂，IT技能学习平台",
        "url": "https://www.imooc.com",
        "category": "编程开发",
        "tags": ["IT技能", "程序员"]
    },
    {
        "name": "蓝桥云课（原实验楼）",
        "description": "IT在线编程及在线实训学习平台",
        "url": "https://www.lanqiao.cn",
        "category": "编程开发",
        "tags": ["在线", "IT编程"]
    },
    {
        "name": "CodePen",
        "description": "在线运行前端代码，发现和学习其他开发者分享的项目",
        "url": "https://codepen.io",
        "category": "编程开发",
        "tags": ["在线", "前端代码"]
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

console.log(`解析到 ${educationTools.length} 个教育学习工具`);

// 去重
const uniqueEntries = educationTools.filter(entry => !existingUrls.has(entry.url));
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
console.log('\n添加的教育学习工具（前15个）:');
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