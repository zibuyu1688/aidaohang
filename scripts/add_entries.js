const fs = require('fs');
const path = require('path');

const websitesFile = path.join(__dirname, '..', 'websites.js');
const backupFile = path.join(__dirname, '..', `websites.js.bak.${Date.now()}`);
const reportFile = path.join(__dirname, '..', 'add_entries_report.json');

const entriesText = `
八点八数字\thttps://www.88digital.cn/\t提供AI数字人和XR直播解决方案，拥有海量直播素材库，支持全天候智能直播。
司马诸葛\thttps://www.simazhuge.com/\t基于企业自有知识文档，训练专属的、可对话交互的AI数字员工。
AskBot员工AI助手\thttps://www.askbot.cn/\t提供新一代企业级内部数智化平台，整合知识库、流程与任务，赋能员工高效办公。
深维智信 Megaview\thttps://www.megaview.com.cn/\t专注于销售会话智能分析，通过全量沟通数据驱动销售流程优化与业绩增长。
多么行\thttps://www.duomexing.com/\t提供开箱即用的AI数据训练及模型拓展解决方案，通过低/无代码平台帮助企业快速部署AI应用。
运小沓·数字员工\thttps://www.yunxiao.com/\t提供基于大模型技术驱动的数字员工聚合、训练与管理服务，赋能企业多种业务场景。
美洽智能客服\thttps://www.meiqia.com/\t提供一体化智能客服系统，具备意图识别、情绪理解等AI能力，提升企业客户服务效率与体验。
Chato\thttps://chato.cn/\t专注于打造企业级AI数字员工和智能客服，帮助企业快速构建和定制专属的AI助手。
BOSSAI\thttps://www.bossai.cn/\t提供企业级AI员工解决方案，支持专家等多种角色训练，将AI能力融入团队工作流程。
GentleAI\thttps://www.gentleai.com/\t一个高效的AI工作平台，旨在为普通人提供简单易用、功能强大的智能计算和专业支持。
Salesforce AI\thttps://www.salesforce.com/products/einstein/\t在其CRM平台中集成可信赖的预测性和生成性AI，全面提升销售、服务、营销等部门的智能化水平。
Emind\thttps://www.emind.ai/\t一个AI原生工作平台，帮助企业快速构建、部署和管理专属的AI智能体与应用。
Cody AI\thttps://www.meetcody.ai/\t用作您的AI员工，通过学习和理解公司知识，为团队提供问答、创作和任务支持。
Luminaries AI\thttps://luminaries.ai/\t专注于客户沟通的人工智能平台，通过AI驱动的方式帮助企业改进和自动化客户外联工作
合同嗖嗖\thttps://www.htsousou.com/\t提供AI智能合同生成服务，用户可快速获取法律文书范文，实现“嗖一下，智能生成范文合同”。
智合同\thttp://www.mdtico.com/\t专注于为政府及企事业单位提供智慧法律应用与服务，致力于通过AI技术提升合同与法务管理的智能化水平。
MeFlow\thttps://www.meflow.com/\t提供智能合同全生命周期管理平台，帮助企业法务部门提升合同起草、审批、履约及归档的效率，确保合规并实现风控管理的智能化。
`;

function normalizeUrl(u) {
  if (!u) return '';
  return u.trim().toLowerCase().replace(/\/$/, '');
}

function parseEntries(text) {
  const lines = text.trim().split(/\n+/);
  return lines.map(l => {
    // split by tab or multiple spaces
    const parts = l.split(/\t|\s{2,}/).map(p=>p.trim()).filter(Boolean);
    return {
      name: parts[0] || '',
      url: parts[1] || '',
      description: parts[2] || ''
    };
  });
}

// load current db
let exported;
try {
  exported = require(websitesFile);
} catch (err) {
  console.error('Failed to load websites.js:', err.message);
  process.exit(2);
}
const db = exported.websitesDatabase;
const existingUrls = new Set(db.map(i => normalizeUrl(i.url)));

const entries = parseEntries(entriesText);
const toAdd = [];
const skipped = [];
entries.forEach(e => {
  const nurl = normalizeUrl(e.url);
  if (!nurl) {
    skipped.push({entry: e, reason: 'empty url'});
    return;
  }
  if (existingUrls.has(nurl)) {
    skipped.push({entry: e, reason: 'duplicate url'});
    return;
  }
  // prepare object
  const obj = {
    name: e.name || '暂无名称',
    description: e.description || '暂无描述',
    url: e.url,
    category: '未分类',
    tags: []
  };
  toAdd.push(obj);
  existingUrls.add(nurl);
});

if (toAdd.length === 0) {
  console.log('No new entries to add.');
  fs.writeFileSync(reportFile, JSON.stringify({added:0, skipped, entries}, null, 2), 'utf8');
  process.exit(0);
}

// backup
fs.copyFileSync(websitesFile, backupFile);

// append to websites.js: we will naive append before the closing '];\n\n// 热门推荐' token
const origText = fs.readFileSync(websitesFile, 'utf8');
const insertToken = '\n];\n\n// 热门推荐（首页展示）';
const idx = origText.lastIndexOf(insertToken);
let newText;
if (idx === -1) {
  console.error('Could not find insert token; aborting');
  process.exit(3);
} else {
  const before = origText.slice(0, idx);
  const after = origText.slice(idx);
  // build insertion text
  const addText = toAdd.map(o => '    ' + JSON.stringify(o, null, 4).replace(/\n/g, '\n    ')).join(',\n') + ',\n';
  // remove the trailing '\n];' from before and re-add
  newText = before + '\n' + addText + '];' + after.slice(2); // after starts with '];\n...'
}
fs.writeFileSync(websitesFile, newText, 'utf8');

const report = {added: toAdd.length, skipped, addedItems: toAdd, backup: backupFile};
fs.writeFileSync(reportFile, JSON.stringify(report, null, 2), 'utf8');
console.log('Added', toAdd.length, 'new entries. Report at', reportFile);
