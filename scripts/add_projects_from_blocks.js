const fs = require('fs');
const path = require('path');

const websitesFile = path.join(__dirname, '..', 'websites.js');
const backupFile = path.join(__dirname, '..', `websites.js.bak.${Date.now()}`);
const reportFile = path.join(__dirname, '..', 'add_entries_report_blocks.json');

// Paste the blocks here as an array of objects
const blocks = [
{
  "name": "闪剪-直播切片一键生成",
  "description": "一款AI智能直播切片一键生成工具，数字人短视频创作平台。提供SAAS级企业应用的数字产品，并打造了APP和网页两种产品形态。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20240222171254-1.jpg",
  "url": "https://shanjian.tv/?inviteId=64b78e68072504003a4143c0",
  "category": "",
  "tags": ["AI","工具","智能"]
},
{
  "name": "蝉妈妈AI",
  "description": "电商人专属的营销助手，通过蝉妈妈庞大的电商数据库和AI大语言模型深度分析，帮助电商人从战略决策到执行落地，从数据解读到内容创作，一站式高效解决电商营销难题。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2025/09/chanmama-ai-logo.jpg",
  "url": "https://ai.chanmama.com/chat",
  "category": "",
  "tags": ["AI","电商","助手","分析"]
},
{
  "name": "易销AI-专为跨境",
  "description": "最懂跨境电商的AI营销工具",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2025/07/logo-yixiao-100x100-1.png",
  "url": "https://yixiaoai.com/",
  "category": "",
  "tags": ["AI","工具","跨境","电商"]
},
{
  "name": "MiniWork",
  "description": "整合文本处理、图像生成、营销策划及运营管理等多元化AI工具",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2025/06/mini.jpg",
  "url": "https://miniwork.ai/zh-CN",
  "category": "",
  "tags": ["AI","工具","运营"]
},
{
  "name": "自媒AI",
  "description": "自媒AI，更懂自媒体的AI工具，将致力打造一个包含AI工具、经验分享、有趣故事的网站，探索自媒体与AI之间，更多的可能性。这里提供AI续写、AI改写、标题优化、小红书文案生成等功能，有助于解决自媒体创作效率低，内容不够吸引人等问题，轻轻松松使用AI进行创作。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/t0197bdc4dc00c038bc1.png",
  "url": "https://zimeiai.com",
  "category": "",
  "tags": ["AI","工具","效率"]
},
{
  "name": "易撰自媒体工具",
  "description": "易撰提供文章检测、爆文分析、数据监测、视频库、热点追踪等功能，如果需要，我们还将为您提供数据定制服务及其它相关联的API接口服务。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/73458-zmt.yizhuan5.com.png",
  "url": "https://zmt.yizhuan5.com",
  "category": "",
  "tags": ["工具","分析"]
},
{
  "name": "活动汪",
  "description": "10W+方案/设计可下载",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/12/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20231205085648.jpg",
  "url": "https://www.eventwang.cn",
  "category": "",
  "tags": ["设计"]
},
{
  "name": "图司机AI创作写作助手",
  "description": "为你提供快速、高效、多元化的创意设计解决方案，让你在短时间内实现最佳的推广效果",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/2baa6-www.tusij.com.png",
  "url": "https://www.tusij.com",
  "category": "",
  "tags": ["AI","助手","设计"]
},
{
  "name": "灵感岛",
  "description": "灵感岛一方面会对社交平台的热门内容进行全面分析，圈定流量密码，为自媒体创作者提供爆文创作灵感，同时依托海量的中文语料库训练数据和智能化的自然语言处理技术，预设30余种国内创作者常用的写作应用场景，实现在不同需求场景下，自动调优生成高效、准确、优质的文本内容，大幅提升内容质量及生产效率。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/t0111d61afe9737612e1.png",
  "url": "https://web.linggandaquan.com",
  "category": "",
  "tags": ["效率","智能","分析"]
},
{
  "name": "LinkFoxAI",
  "description": "跨境电商企业级AI营销工具",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/44653-ai.linkfox.com.png",
  "url": "https://ai.linkfox.com/lp/campain/?channel=aigccn",
  "category": "",
  "tags": ["AI","工具","跨境","电商"]
},
{
  "name": "Kua.ai",
  "description": "帮助您创建优于竞争对手的优化内容",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/c93fb-www.kua.ai.png",
  "url": "https://www.kua.ai",
  "category": "",
  "tags": []
},
{
  "name": "轻舸",
  "description": "AI更懂你 | 让营销更省力、更省心",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/09/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230924223300.jpg",
  "url": "https://qingge.baidu.com/login",
  "category": "",
  "tags": ["AI"]
},
{
  "name": "智猫AI",
  "description": "智猫AI是运用ChatGPT深度开发的，一款基于搜索引擎优化规则的跨境文案创作、营销及分析工具",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/827bb-www.zhimaoai.cn.png",
  "url": "https://www.zhimaoai.cn",
  "category": "",
  "tags": ["AI","工具","跨境","分析"]
},
{
  "name": "亚马逊Listing AI助手",
  "description": "基于gpt模型 AI智能生成亚马逊产品listing",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/07/b15be-www.assistanttool.site.png",
  "url": "https://www.assistanttool.site",
  "category": "",
  "tags": ["AI","智能","助手"]
},
{
  "name": "星耀裂变",
  "description": "专注微信生态用户增长，企业微信、公众号、视频号裂变增长工具",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/e6953-www.xyookj.com.png",
  "url": "https://www.xyookj.com",
  "category": "",
  "tags": ["工具"]
},
{
  "name": "5118营销大数据",
  "description": "5118站长工具，关键词挖掘，流量词",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/03/7863c-www.5118.com.png",
  "url": "https://www.5118.com/?promote=aigccn",
  "category": "",
  "tags": ["工具"]
},
{
  "name": "Jounce",
  "description": "营销领域已经开始逐渐转向人...",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/a2bfe-www.jounce.ai.png",
  "url": "https://www.jounce.ai",
  "category": "",
  "tags": []
},
{
  "name": "Klap",
  "description": "生成tiktok，短片和卷轴从你的YouTube视频在点击使用人工智能。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/2c83e-klap.app.png",
  "url": "https://klap.app",
  "category": "",
  "tags": ["智能"]
},
{
  "name": "HubSpot收购Motion AI",
  "description": "免费聊天机器人生成器软件,HubSpot 是一个 CRM 平台，具有连接营销、销售、内容管理和客户服务所需的所有软件、集成和资源。该平台中的每个产品本身都很强大，但真正的魔力只有在您将它们结合使用时才会发生。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/02/f05ef-www.motion.ai_.png",
  "url": "https://www.motion.ai",
  "category": "",
  "tags": ["AI"]
},
{
  "name": "CLOSERSCOPY",
  "description": "利用世界上最强大的文案的秘密……让您的文案机器人将它们变为现实！",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/02/3face-www.closerscopy.com.png",
  "url": "https://www.closerscopy.com",
  "category": "",
  "tags": []
},
{
  "name": "shopGPT",
  "description": "AI帮助你自动生成/优化你的商品素材，包括标题、描述、营销邮件、广告素材等，并根据商品上线的表现数据全自动优化素材",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/02/35f03-apps.shopify.com.png",
  "url": "https://apps.shopify.com/shopcopilot",
  "category": "",
  "tags": ["AI"]
},
{
  "name": "Onlycoms",
  "description": "Onlycoms是一个专注于提供.com域名生成服务的网站。它使用人工智能技术来帮助用户为他们的下一个项目找到独特的.com域名。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/07/bb1bb-onlycoms.com.png",
  "url": "https://onlycoms.com",
  "category": "",
  "tags": ["智能"]
},
{
  "name": "Capsho",
  "description": "Capsho 是一个 AI 驱动的内容营销工具，专门为播客、视频博客（Vlog）或直播的企业家和内容创作者设计。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/06/c7be7-www.capsho.com.png",
  "url": "https://www.capsho.com",
  "category": "",
  "tags": ["AI","工具","设计"]
},
{
  "name": "BrandSnap",
  "description": "Brandsnap.ai 是一个利用人工智能技术帮助用户发现和选择完美品牌名称的平台。它专注于为企业提供域名和社交媒体账号名称的推荐服务。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/07/608e9-brandsnap.ai.png",
  "url": "https://brandsnap.ai",
  "category": "",
  "tags": ["智能"]
},
{
  "name": "八点八数字",
  "description": "海量直播素材库任选，一键数字人全天候AI/XR开播。",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/12/%E4%BA%BF%E6%92%ADlogo%E5%BA%94%E7%94%A8%E6%A0%87%E8%AF%86.png",
  "url": "https://www.bdbdigital.com/live",
  "category": "",
  "tags": ["AI"]
},
{
  "name": "司马诸葛",
  "description": "基于企业知识文档，就可训练专属AI数字员工",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/08/F90028DA@580E8E66.FCAAB966.jpg",
  "url": "https://smartchoose.cn",
  "category": "",
  "tags": ["AI","文档"]
},
{
  "name": "AskBot员工AI助手",
  "description": "新一代企业级内部数智化解决方案",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2023/05/876ee-www.askbot.cn_.png",
  "url": "https://www.askbot.cn",
  "category": "",
  "tags": ["AI","助手"]
},
{
  "name": "深维智信Megaview",
  "description": "专注于销售会话智能分析的工具，它通过全量数据分析帮助企业优化销售流程，降低沟通成本，并提升销售效率",
  "iconUrl": "https://www.aigc.cn/wp-content/uploads/2024/12/c5a35bc7093a0e6a5642a99e859d6d6d.png",
  "url": "https://www.megaview.com/index.html",
  "category": "",
  "tags": ["工具","效率","智能","分析"]
}
];

// processing logic: backup, skip existing urls, append new entries and write report
const normalizeUrl = (u) => (u || '').trim().toLowerCase().replace(/\/$/, '');

try {
  // require websites to get current DB
  const exported = require(websitesFile);
  const db = exported.websitesDatabase;
  const existing = new Set(db.map(i => normalizeUrl(i.url)));

  const toAdd = [];
  const skipped = [];
  blocks.forEach(b => {
    const nurl = normalizeUrl(b.url);
    if (!nurl) return skipped.push({entry: b, reason: 'empty url'});
    if (existing.has(nurl)) return skipped.push({entry: b, reason: 'duplicate url'});
    const obj = {
      name: b.name || '暂无名称',
      description: b.description || '暂无描述',
      url: b.url,
      category: (b.category && b.category.trim()) ? b.category : '未分类',
      tags: Array.isArray(b.tags) ? b.tags : [],
    };
    if (b.iconUrl) obj.iconUrl = b.iconUrl;
    toAdd.push(obj);
    existing.add(nurl);
  });

  if (toAdd.length === 0) {
    fs.writeFileSync(reportFile, JSON.stringify({added:0, skipped}, null, 2), 'utf8');
    console.log('No new blocks to add. Report written to', reportFile);
    process.exit(0);
  }

  // backup
  fs.copyFileSync(websitesFile, backupFile);

  // insert before the closing token
  const origText = fs.readFileSync(websitesFile, 'utf8');
  const insertToken = '\n];\n\n// 热门推荐（首页展示）';
  const idx = origText.lastIndexOf(insertToken);
  if (idx === -1) {
    console.error('Could not find insert token in websites.js; aborting');
    process.exit(3);
  }
  const before = origText.slice(0, idx);
  const after = origText.slice(idx);
  const addText = toAdd.map(o => '    ' + JSON.stringify(o, null, 4).replace(/\n/g, '\n    ')).join(',\n') + ',\n';
  const newText = before + '\n' + addText + '];' + after.slice(2);
  fs.writeFileSync(websitesFile, newText, 'utf8');

  const report = {added: toAdd.length, skipped, addedItems: toAdd, backup: backupFile};
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf8');
  console.log('Added', toAdd.length, 'new blocks. Report at', reportFile);
} catch (err) {
  console.error('Error processing blocks:', err.message);
  process.exit(2);
}