// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');
const results = document.getElementById('results');
const resultsList = document.getElementById('resultsList');
const resultsTitle = document.getElementById('resultsTitle');
const resultsCount = document.getElementById('resultsCount');
const hotSites = document.getElementById('hotSites');
const hotList = document.getElementById('hotList');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    loadHotSites();
    
    // 检查URL参数，自动搜索
    const urlParams = new URLSearchParams(window.location.search);
    const autoQuery = urlParams.get('q');
    if (autoQuery) {
        searchInput.value = autoQuery;
        setTimeout(() => handleSearch(), 500);
    }
    
    // 事件监听
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

// 加载热门网站
function loadHotSites() {
    hotList.innerHTML = '';
    
    hotWebsites.forEach(siteName => {
        const site = websitesDatabase.find(s => s.name === siteName);
        if (site) {
            const item = createHotSiteElement(site);
            hotList.appendChild(item);
        }
    });
}

// 创建热门网站元素
function createHotSiteElement(site) {
    const div = document.createElement('div');
    div.className = 'hot-item';
    div.innerHTML = `
        <h4>${site.name}</h4>
        <p>${site.description.substring(0, 30)}...</p>
    `;
    
    div.addEventListener('click', () => {
        window.open(site.url, '_blank');
    });
    
    return div;
}

// 处理搜索
async function handleSearch() {
    const query = searchInput.value.trim();
    
    if (!query) {
        alert('请输入搜索关键词');
        return;
    }
    
    // 隐藏热门推荐，显示加载动画
    hotSites.classList.add('hidden');
    results.classList.add('hidden');
    loading.classList.remove('hidden');
    
    try {
        // 检查缓存
        const cached = getCache(query);
        if (cached) {
            console.log('使用缓存结果');
            displayResults(cached, query);
            return;
        }
        
        // 执行智能搜索
        const searchResults = await intelligentSearch(query);
        
        // 缓存结果
        setCache(query, searchResults);
        
        // 显示结果
        displayResults(searchResults, query);
        
    } catch (error) {
        console.error('搜索错误:', error);
        loading.classList.add('hidden');
        alert('搜索出错，请稍后重试');
    }
}

// 智能搜索主函数
async function intelligentSearch(query) {
    const apiKey = getApiKey();
    
    // 如果没有API Key，只搜索本地
    if (!apiKey) {
        console.log('无API Key，仅搜索本地数据库');
        return searchLocalDatabase(query);
    }
    
    try {
        // 1. 调用AI理解用户意图
        const intent = await analyzeIntent(query, apiKey);
        console.log('AI理解的意图:', intent);
        
        // 2. 根据意图匹配本地数据库
        const localResults = matchLocalDatabase(intent, query);
        console.log('本地匹配结果:', localResults.length, '个');
        
        // 3. 如果本地结果充足，直接返回
        if (localResults.length >= CONFIG.MIN_LOCAL_RESULTS) {
            return localResults.map(r => ({...r, source: 'local'}));
        }
        
        // 4. 本地结果不足，调用AI推荐
        const aiRecommendations = await getAIRecommendations(intent, query, localResults, apiKey);
        console.log('AI推荐结果:', aiRecommendations.length, '个');
        
        // 5. 合并结果
        const allResults = [
            ...localResults.map(r => ({...r, source: 'local'})),
            ...aiRecommendations.map(r => ({...r, source: 'ai'}))
        ];
        
        return allResults;
        
    } catch (error) {
        console.error('AI搜索失败，回退到本地搜索:', error);
        // AI失败时回退到本地搜索
        return searchLocalDatabase(query);
    }
}

// 本地数据库简单搜索（无AI时使用）
function searchLocalDatabase(query) {
    const lowerQuery = query.toLowerCase();
    
    return websitesDatabase.filter(site => {
        return site.name.toLowerCase().includes(lowerQuery) ||
               site.description.toLowerCase().includes(lowerQuery) ||
               site.category.toLowerCase().includes(lowerQuery) ||
               site.tags.some(tag => tag.toLowerCase().includes(lowerQuery));
    }).map(r => ({...r, source: 'local'}));
}

// AI理解用户意图
async function analyzeIntent(query, apiKey) {
    const response = await fetch(CONFIG.DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: CONFIG.DEEPSEEK_MODEL,
            messages: [{
                role: "system",
                content: `你是一个网站导航助手。分析用户的搜索意图，返回JSON格式（不要markdown代码块）：
{
    "category": "最相关的分类",
    "keywords": ["关键词1", "关键词2", "关键词3"],
    "intent": "用户想做什么的简短描述"
}

可能的分类：
【AI工具】AI聊天助手、AI写作工具、AI图像工具、AI视频工具、AI音频工具、AI编程工具、AI设计工具、AI办公工具、AI搜索引擎、AI开发平台、AI学习网站、AI检测工具、提示词工程、AI营销工具、AI数据分析、AI客服、AI教育、3D建模
【跨境电商】跨境选品工具、跨境关键词工具、跨境广告平台、跨境建站系统、跨境支付收款、跨境物流服务、跨境网红营销、跨境数据分析、跨境邮件营销、跨境货源平台、跨境资讯媒体
【设计师工具】设计灵感网站、设计素材下载、设计配色工具、在线设计工具、设计字体资源、设计软件工具、设计学习平台
【广告营销】广告营销资讯、创意视频平台、广告创意奖项、创意设计公司
【创意文案】文案创作平台、文案灵感网站、文案学习资源、创意文案社区、广告文案库
【数字营销】数字分析工具、社交媒体营销、邮件营销平台、SEO工具、内容营销、营销自动化、流量获取、用户增长
【法律资源】裁判案例、法律法规、市场主体信息、司法案件信息、网络司法拍卖、知识产权、资本证券、法律数据查询
【常用工具】搜索引擎、在线办公、设计与创意、程序开发、产品与运营、学习与知识、效率工具、电商工具、营销工具、社交娱乐、生活服务、新闻资讯、金融投资

例如：
- 用户输入"抠图" → category: "AI图像工具", keywords: ["抠图", "去背景", "图片处理", "背景移除"], intent: "移除图片背景"
- 用户输入"亚马逊选品" → category: "跨境选品工具", keywords: ["亚马逊", "选品", "产品研究", "销量分析"], intent: "亚马逊选品分析"
- 用户输入"独立站建站" → category: "跨境建站系统", keywords: ["建站", "独立站", "Shopify", "网站"], intent: "搭建跨境电商网站"
- 用户输入"SEO工具" → category: "跨境关键词工具", keywords: ["SEO", "关键词", "优化", "排名"], intent: "搜索引擎优化"
- 用户输入"Google广告" → category: "跨境广告平台", keywords: ["广告", "Google", "投放", "营销"], intent: "投放Google广告"
- 用户输入"PayPal收款" → category: "跨境支付收款", keywords: ["收款", "PayPal", "支付", "跨境"], intent: "跨境支付收款"
- 用户输入"一件代发" → category: "跨境货源平台", keywords: ["代发", "货源", "批发", "采购"], intent: "寻找代发货源"
- 用户输入"网红营销" → category: "跨境网红营销", keywords: ["网红", "KOL", "营销", "推广"], intent: "网红合作推广"
- 用户输入"设计灵感" → category: "设计灵感网站", keywords: ["设计", "灵感", "作品", "参考"], intent: "寻找设计灵感"
- 用户输入"免费图片" → category: "设计素材下载", keywords: ["图片", "素材", "免费", "下载"], intent: "下载免费素材"
- 用户输入"配色" → category: "设计配色工具", keywords: ["配色", "颜色", "色彩", "搭配"], intent: "配色设计"
- 用户输入"在线PS" → category: "在线设计工具", keywords: ["设计", "在线", "PS", "工具"], intent: "在线设计"
- 用户输入"免费字体" → category: "设计字体资源", keywords: ["字体", "免费", "下载", "字库"], intent: "下载字体"
- 用户输入"Figma" → category: "设计软件工具", keywords: ["设计", "软件", "UI", "工具"], intent: "使用设计软件"
- 用户输入"chatgpt" → category: "AI聊天助手", keywords: ["聊天", "对话", "AI助手"], intent: "AI对话交流"
- 用户输入"AI检测" → category: "AI检测工具", keywords: ["检测", "识别", "AI内容"], intent: "检测AI生成内容"
- 用户输入"提示词" → category: "提示词工程", keywords: ["提示词", "Prompt", "优化"], intent: "优化AI提示词"
- 用户输入"数据分析" → category: "AI数据分析", keywords: ["数据", "分析", "可视化"], intent: "分析数据"
- 用户输入"文案创作" → category: "文案创作平台", keywords: ["文案", "创作", "写作"], intent: "寻找文案创作工具"
- 用户输入"文案灵感" → category: "文案灵感网站", keywords: ["文案", "灵感", "创意"], intent: "寻找文案创作灵感"
- 用户输入"广告文案" → category: "广告文案库", keywords: ["广告", "文案", "案例"], intent: "查找广告文案案例"
- 用户输入"客服机器人" → category: "AI客服", keywords: ["客服", "聊天", "自动化"], intent: "搭建智能客服"
- 用户输入"在线学习" → category: "AI教育", keywords: ["学习", "教育", "课程"], intent: "在线学习"
- 用户输入"3D建模" → category: "3D建模", keywords: ["3D", "建模", "三维"], intent: "创建3D模型"
- 用户输入"广告创意" → category: "广告营销资讯", keywords: ["广告", "创意", "营销", "案例"], intent: "查看广告创意案例"
- 用户输入"创意短片" → category: "创意视频平台", keywords: ["视频", "短片", "创意", "广告"], intent: "观看创意视频"
- 用户输入"戛纳" → category: "广告创意奖项", keywords: ["奖项", "戛纳", "广告", "创意"], intent: "了解广告奖项"
- 用户输入"广告公司" → category: "创意设计公司", keywords: ["广告", "设计", "创意", "公司"], intent: "寻找创意设计服务"
- 用户输入"数据分析工具" → category: "数字分析工具", keywords: ["分析", "数据", "工具", "指标"], intent: "查找数字营销分析工具"
- 用户输入"社交媒体营销" → category: "社交媒体营销", keywords: ["社交媒体", "营销", "社交平台"], intent: "寻找社交媒体营销工具"
- 用户输入"邮件营销" → category: "邮件营销平台", keywords: ["邮件", "营销", "邮件列表", "群发"], intent: "寻找邮件营销服务"
- 用户输入"SEO优化" → category: "SEO工具", keywords: ["SEO", "优化", "搜索", "排名"], intent: "提升网站SEO排名"
- 用户输入"内容营销" → category: "内容营销", keywords: ["内容", "营销", "策略", "创作"], intent: "制定内容营销策略"
- 用户输入"裁判文书" → category: "裁判案例", keywords: ["裁判", "文书", "案例", "法院"], intent: "查询法院裁判文书"
- 用户输入"法律法规" → category: "法律法规", keywords: ["法律", "法规", "规定", "条例"], intent: "查询法律法规条文"
- 用户输入"司法拍卖" → category: "网络司法拍卖", keywords: ["拍卖", "司法", "竞买", "资产"], intent: "参与司法拍卖活动"
- 用户输入"企业信息" → category: "市场主体信息", keywords: ["企业", "工商", "信用", "主体"], intent: "查询市场主体信息"
- 用户输入"百度" → category: "搜索引擎", keywords: ["搜索", "百度", "查找"], intent: "搜索信息"`
            }, {
                role: "user",
                content: query
            }],
            temperature: 0.3
        })
    });
    
    if (!response.ok) {
        throw new Error(`API请求失败: ${response.status}`);
    }
    
    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // 清理可能的markdown代码块
    const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    return JSON.parse(jsonStr);
}

// 根据意图匹配本地数据库
function matchLocalDatabase(intent, originalQuery) {
    const results = new Set();
    const lowerQuery = originalQuery.toLowerCase();
    
    websitesDatabase.forEach(site => {
        let score = 0;
        
        // 1. 完全匹配分类（高权重）
        if (site.category === intent.category) {
            score += 10;
        }
        
        // 2. 关键词匹配
        intent.keywords.forEach(keyword => {
            const lowerKeyword = keyword.toLowerCase();
            
            if (site.name.toLowerCase().includes(lowerKeyword)) score += 5;
            if (site.description.toLowerCase().includes(lowerKeyword)) score += 3;
            if (site.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))) score += 4;
        });
        
        // 3. 原始查询匹配
        if (site.name.toLowerCase().includes(lowerQuery)) score += 6;
        if (site.description.toLowerCase().includes(lowerQuery)) score += 2;
        if (site.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 3;
        
        // 添加到结果集
        if (score > 0) {
            results.add({...site, score});
        }
    });
    
    // 按分数排序并返回
    return Array.from(results)
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
}

// AI推荐补充网站
async function getAIRecommendations(intent, query, existingResults, apiKey) {
    const existingNames = existingResults.map(r => r.name).join('、');
    
    const response = await fetch(CONFIG.DEEPSEEK_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: CONFIG.DEEPSEEK_MODEL,
            messages: [{
                role: "system",
                content: `你是一个网站推荐专家。根据用户需求推荐优质网站。
返回JSON数组格式（不要markdown代码块），每项包含：
{
    "name": "网站名称",
    "url": "网站完整URL（必须以http或https开头）",
    "description": "网站功能描述（30-50字）",
    "category": "${intent.category}"
}

要求：
1. 推荐3-5个最优质、最知名的网站
2. URL必须真实有效
3. 不要推荐这些网站：${existingNames}
4. 描述要简洁明了
5. 返回纯JSON数组，不要其他文字`
            }, {
                role: "user",
                content: `推荐${intent.intent}相关的网站`
            }],
            temperature: 0.7
        })
    });
    
    if (!response.ok) {
        throw new Error(`AI推荐请求失败: ${response.status}`);
    }
    
    const data = await response.json();
    const content = data.choices[0].message.content;
    
    // 清理可能的markdown代码块
    const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    try {
        const recommendations = JSON.parse(jsonStr);
        return Array.isArray(recommendations) ? recommendations : [];
    } catch (e) {
        console.error('解析AI推荐结果失败:', e);
        return [];
    }
}

// 显示搜索结果
function displayResults(searchResults, query) {
    loading.classList.add('hidden');
    
    if (searchResults.length === 0) {
        results.classList.remove('hidden');
        resultsTitle.textContent = '😢 没有找到相关网站';
        resultsCount.textContent = '';
        resultsList.innerHTML = '<p style="text-align:center;color:#666;padding:40px;">试试其他关键词吧<br><br>💡 试试搜索："抠图"、"去水印"、"AI绘画"</p>';
        return;
    }
    
    // 显示结果
    results.classList.remove('hidden');
    resultsTitle.textContent = `为你找到 "${query}" 相关网站`;
    resultsCount.textContent = `${searchResults.length} 个结果`;
    
    resultsList.innerHTML = '';
    searchResults.forEach(site => {
        const item = createResultElement(site);
        resultsList.appendChild(item);
    });
}

// 创建结果元素
function createResultElement(site) {
    const div = document.createElement('div');
    div.className = 'result-item';
    
    const tagClass = site.source === 'ai' ? 'tag ai-recommend' : 'tag';
    const tagText = site.source === 'ai' ? 'AI推荐' : site.category;
    
    div.innerHTML = `
        <span class="${tagClass}">${tagText}</span>
        <h3>${site.name}</h3>
        <div class="url">${site.url}</div>
        <p>${site.description}</p>
    `;
    
    div.addEventListener('click', () => {
        window.open(site.url, '_blank');
    });
    
    return div;
}
