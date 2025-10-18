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
const loadMoreContainer = document.getElementById('loadMoreContainer');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreText = document.getElementById('loadMoreText');

// 全局状态
let allSearchResults = [];
let currentDisplayedCount = 0;
let columnsPerRow = 3;

// 计算每行显示的列数
function getColumnsPerRow() {
    const width = window.innerWidth;
    if (width < 480) return 1;
    if (width < 768) return 2;
    if (width < 1200) return 3;
    return 3;  // 默认3列
}

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
    
    // 加载更多按钮事件
    loadMoreBtn.addEventListener('click', handleLoadMore);
    
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        columnsPerRow = getColumnsPerRow();
    });
    
    columnsPerRow = getColumnsPerRow();
});

// 加载热门网站
function loadHotSites() {
    hotList.innerHTML = '';
    
    // 最多显示6个热门网站
    const maxHotSites = 6;
    let count = 0;
    
    hotWebsites.forEach(siteName => {
        if (count >= maxHotSites) return;
        
        const site = websitesDatabase.find(s => s.name === siteName);
        if (site) {
            const item = createHotSiteElement(site);
            hotList.appendChild(item);
            count++;
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
                content: `你是一个精准的网站导航助手。你的核心职责是：
1. **深入分析用户意图** - 不仅理解表面搜索词，还要挖掘用户的真实需求
2. **精准分类匹配** - 将用户需求映射到最相关的网站分类
3. **推荐高质量资源** - 只推荐公认的、专业的、直接服务于用户意图的网站

【用户意图分类】
必须首先判断用户的搜索属于以下哪一类：
- **获取信息**: 查找新闻、资讯、数据、行业报告等信息类内容
- **学习教程**: 学习技能、获取培训课程、教学资源
- **使用工具**: 寻找在线工具、软件、应用程序
- **购买商品**: 寻找产品、商城、交易平台
- **社区交流**: 寻找论坛、社群、讨论社区
- **其他需求**: 其他特定用途（如数据分析、业务合作等）

【网站筛选标准】
推荐的网站必须满足以下条件：
✓ 公认的高质量资源 - 业界认可、用户众多
✓ 直接服务用户意图 - 专业针对用户的具体需求
✓ 避免推荐泛滥的门户网站 - 不推荐过于宽泛的综合型网站
✓ 避免推荐不相关的链接 - 确保完全匹配用户需求
✓ 优先推荐专业化网站 - 深度服务优于广泛覆盖

【返回格式】
返回JSON格式（不要markdown代码块）：
{
    "userIntent": "获取信息|学习教程|使用工具|购买商品|社区交流|其他",
    "category": "最相关的分类",
    "keywords": ["关键词1", "关键词2", "关键词3"],
    "intent": "用户想做什么的简短描述"
}

【可能的分类及推荐场景】
【AI工具】AI聊天助手、AI写作工具、AI图像工具、AI视频工具、AI音频工具、AI编程工具、AI设计工具、AI办公工具、AI搜索引擎、AI开发平台、AI学习网站、AI检测工具、提示词工程、AI营销工具、AI数据分析、AI客服、AI教育、3D建模
【跨境电商】跨境选品工具、跨境关键词工具、跨境广告平台、跨境建站系统、跨境支付收款、跨境物流服务、跨境网红营销、跨境数据分析、跨境邮件营销、跨境货源平台、跨境资讯媒体
【设计师工具】设计灵感网站、设计素材下载、设计配色工具、在线设计工具、设计字体资源、设计软件工具、设计学习平台
【广告营销】广告营销资讯、创意视频平台、广告创意奖项、创意设计公司
【创意文案】文案创作平台、文案灵感网站、文案学习资源、创意文案社区、广告文案库
【数字营销】数字分析工具、社交媒体营销、邮件营销平台、SEO工具、内容营销、营销自动化、流量获取、用户增长
【法律资源】裁判案例、法律法规、市场主体信息、司法案件信息、网络司法拍卖、知识产权、资本证券、法律数据查询
【财经资讯】财经门户、财经媒体、投资交流、行业资讯、期货交易
【淘宝客】抖音验货、淘宝联盟、网红营销
【常用工具】搜索引擎、在线办公、设计与创意、程序开发、产品与运营、学习与知识、效率工具、电商工具、营销工具、社交娱乐、生活服务、新闻资讯、金融投资

【意图分析示例】
- 查询"AI绘画工具"
  用户意图: 使用工具 | 分类: AI图像工具 | 推荐专业AI绘画平台（Midjourney、Stable Diffusion等）而非通用AI平台
  
- 查询"跨境电商入门教程"
  用户意图: 学习教程 | 分类: 跨境电商 | 推荐专业培训机构、官方学院而非普通资讯站
  
- 查询"亚马逊选品工具"
  用户意图: 使用工具 | 分类: 跨境选品工具 | 推荐Helium10、Jungle Scout等专业工具而非综合门户
  
- 查询"最新财经新闻"
  用户意图: 获取信息 | 分类: 财经媒体 | 推荐财新、第一财经等专业财经媒体而非综合新闻网站
  
- 查询"法律法规查询"
  用户意图: 获取信息 | 分类: 法律法规 | 推荐专业法律数据库而非普通搜索引擎
  
- 查询"SEO优化社区"
  用户意图: 社区交流 | 分类: SEO工具 | 推荐专业SEO论坛、社区而非通用讨论平台
  
- 查询"UI设计灵感"
  用户意图: 获取信息+学习教程 | 分类: 设计灵感网站 | 推荐Dribbble、Behance等专业设计社区而非通用社交网络
  
- 查询"独立站建站"
  用户意图: 使用工具 | 分类: 跨境建站系统 | 推荐Shopify、SiteBuilder等建站工具而非域名注册商

【关键提示】
- 始终优先推荐垂直领域的专业平台而不是综合性门户
- 理解用户的真实需求，而不是字面意思
- 为不同用户意图提供最合适的资源类型
- 避免"万能"推荐，每个推荐都应该是精准的`
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
                content: `你是一个精准的网站推荐专家。根据用户的真实需求推荐最优质的网站。

【推荐原则】
1. **精准性优先** - 推荐必须直接服务于用户的具体需求，避免泛滥推荐
2. **高质量标准** - 只推荐业界公认的、用户众多的优质网站
3. **避免门户网站** - 不推荐过于宽泛的综合性网站，优先推荐专业化平台
4. **根据意图调整** - 根据用户意图类型（${intent.userIntent}）推荐合适的资源类型

【基于用户意图的推荐策略】
- 获取信息: 推荐权威信息源、专业媒体、数据库等
- 学习教程: 推荐学习平台、教学社区、培训机构等
- 使用工具: 推荐功能强大的专业工具和平台
- 购买商品: 推荐高信誉交易平台、官方渠道
- 社区交流: 推荐活跃的专业社群和论坛
- 其他需求: 根据具体需求推荐最相关资源

【返回格式】
返回JSON数组格式（不要markdown代码块），每项包含：
{
    "name": "网站名称",
    "url": "网站完整URL（必须以http或https开头）",
    "description": "网站功能描述（30-50字）",
    "category": "${intent.category}"
}

【具体要求】
1. 推荐3-5个最优质、最知名的专业网站
2. 不推荐：${existingNames}
3. URL必须真实有效、完整可访问
4. 描述要专业、简洁、突出核心价值
5. 避免重复和通用化推荐
6. 返回纯JSON数组，不要其他文字

【质量检查清单】
✓ 每个推荐都是该领域的TOP网站
✓ 没有不相关或边缘网站
✓ URL格式正确且来自官方渠道
✓ 描述准确反映网站功能`
            }, {
                role: "user",
                content: `用户需求：${intent.intent}
用户意图类型：${intent.userIntent}
搜索分类：${intent.category}
推荐3-5个最优质的相关网站，避免推荐已有的：${existingNames}
返回纯JSON数组`
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
        loadMoreContainer.classList.add('hidden');
        return;
    }
    
    // 保存所有搜索结果
    allSearchResults = searchResults;
    currentDisplayedCount = 0;
    
    // 显示初始结果
    results.classList.remove('hidden');
    resultsTitle.textContent = `为你找到 "${query}" 相关网站`;
    resultsCount.textContent = `${searchResults.length} 个结果`;
    
    // 显示第一批结果
    displayMore();
}

// 计算要显示的数量（确保是列数的倍数）
function calculateDisplayCount(columnsPerRow) {
    // 确保显示的数量是列数的倍数
    // 3列显示9个，12个等（3的倍数）
    // 4列显示12个，16个等（4的倍数）
    // 2列显示8个，10个等（2的倍数）
    // 1列显示任意数量
    
    if (columnsPerRow === 1) return 10;
    return Math.ceil(10 / columnsPerRow) * columnsPerRow;
}

// 显示更多结果
function handleLoadMore() {
    loadMoreBtn.disabled = true;
    loadMoreText.textContent = '加载中...';
    
    // 模拟异步加载
    setTimeout(() => {
        displayMore();
        loadMoreBtn.disabled = false;
    }, 300);
}

// 执行显示更多逻辑
function displayMore() {
    const toAdd = calculateDisplayCount(columnsPerRow);
    const startIndex = currentDisplayedCount;
    const endIndex = Math.min(currentDisplayedCount + toAdd, allSearchResults.length);
    
    // 将新结果添加到列表
    for (let i = startIndex; i < endIndex; i++) {
        const site = allSearchResults[i];
        const item = createResultElement(site);
        resultsList.appendChild(item);
    }
    
    currentDisplayedCount = endIndex;
    
    // 更新结果计数
    resultsCount.textContent = `${currentDisplayedCount}/${allSearchResults.length} 个结果`;
    
    // 检查是否还有更多结果
    if (currentDisplayedCount >= allSearchResults.length) {
        loadMoreContainer.classList.add('hidden');
    } else {
        loadMoreContainer.classList.remove('hidden');
        loadMoreText.textContent = `更多推荐 (剩余 ${allSearchResults.length - currentDisplayedCount} 个)`;
    }
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
