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
let localResults = [];        // 本地搜索结果
let aiResults = [];           // AI搜索结果
let aiSearchComplete = false; // AI搜索是否完成
let isFetchingAI = false;     // 是否正在拉取AI结果
let currentQuery = '';
let analyzedIntent = null;
const AI_BATCH_LIMIT = 9;     // 每次AI仅返回最多9条

// 分类颜色映射缓存
const categoryColorCache = new Map();

// 预定义的颜色方案（渐变色）
const colorSchemes = [
    { bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', text: '#fff' },  // 紫色
    { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', text: '#fff' },  // 粉红
    { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', text: '#fff' },  // 青色
    { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', text: '#fff' },  // 绿色
    { bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', text: '#fff' },  // 橙粉
    { bg: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', text: '#fff' },  // 蓝紫
    { bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', text: '#333' },  // 浅色
    { bg: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)', text: '#fff' },  // 珊瑚
    { bg: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', text: '#333' },  // 桃色
    { bg: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)', text: '#fff' },  // 红蓝
    { bg: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)', text: '#333' },  // 淡紫蓝
    { bg: 'linear-gradient(135deg, #f77062 0%, #fe5196 100%)', text: '#fff' },  // 红粉
    { bg: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', text: '#333', border: '#999' },  // 浅灰
    { bg: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)', text: '#fff' },  // 天蓝
    { bg: 'linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)', text: '#333' },  // 暖黄
    { bg: 'linear-gradient(135deg, #9890e3 0%, #b1f4cf 100%)', text: '#333' },  // 紫绿
    { bg: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)', text: '#333' },  // 淡紫灰
    { bg: 'linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)', text: '#333' },  // 绿黄
    { bg: 'linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%)', text: '#333' },  // 金黄
    { bg: 'linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%)', text: '#fff' },  // 薄荷紫
];

// 为分类生成颜色
function getCategoryColor(category) {
    // AI推荐使用固定颜色
    if (category === 'AI推荐') {
        return { bg: 'linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)', text: '#fff' };
    }
    
    // 检查缓存
    if (categoryColorCache.has(category)) {
        return categoryColorCache.get(category);
    }
    
    // 使用分类名称的哈希值来分配颜色（确保相同分类总是相同颜色）
    let hash = 0;
    for (let i = 0; i < category.length; i++) {
        hash = ((hash << 5) - hash) + category.charCodeAt(i);
        hash = hash & hash;
    }
    
    const colorIndex = Math.abs(hash) % colorSchemes.length;
    const color = colorSchemes[colorIndex];
    
    // 缓存结果
    categoryColorCache.set(category, color);
    
    return color;
}

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
    // 确保 DOM 完全加载后再加载热门网站
    if (document.readyState === 'loading') {
        // 页面还在加载中，等待完成
        setTimeout(() => {
            loadHotSites();
            console.log('✅ 热门网站已加载');
        }, 100);
    } else {
        // 页面已加载完成
        loadHotSites();
        console.log('✅ 热门网站已加载');
    }
    
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
    
    // 模型选择器事件
    const deepseekBtn = document.getElementById('deepseekBtn');
    const qwenBtn = document.getElementById('qwenBtn');
    
    deepseekBtn.addEventListener('click', () => {
        switchAIProvider('deepseek');
        deepseekBtn.classList.add('active');
        qwenBtn.classList.remove('active');
        console.log('✅ 已切换到 DeepSeek 模型');
    });
    
    qwenBtn.addEventListener('click', () => {
        switchAIProvider('qwen');
        qwenBtn.classList.add('active');
        deepseekBtn.classList.remove('active');
        console.log('✅ 已切换到 Qwen 模型');
    });
    
    // 下载按钮事件
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', downloadAsExcel);
    
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
    
    // 最多显示8个热门网站
    const maxHotSites = 8;
    let count = 0;
    
    hotWebsites.forEach(siteUrl => {
        if (count >= maxHotSites) return;
        
        const site = websitesDatabase.find(s => s.url === siteUrl);
        if (site) {
            const item = createHotSiteElement(site);
            hotList.appendChild(item);
            count++;
        } else {
            console.warn(`Hot site with URL ${siteUrl} not found in database.`);
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
    
    console.log('🔎 用户搜索:', query);
    
    // 隐藏热门推荐，显示加载动画
    hotSites.classList.add('hidden');
    results.classList.add('hidden');
    loading.classList.remove('hidden');
    
    try {
        // 检查缓存
        const cached = getCache(query);
        if (cached) {
            // 缓存命中（只会是非空结果，因为 setCache 不缓存空结果）
            if (cached.length > 0) {
                console.log('💾 使用缓存结果，共', cached.length, '个');
                displayResults(cached, query);
                return;
            }
        }
        
        console.log('🌐 开始搜索（先本地，AI按需加载）...');
        
        // 重置全局搜索状态
        localResults = [];
        aiResults = [];
        aiSearchComplete = false;
        isFetchingAI = false;
        currentQuery = query;
        analyzedIntent = null;
        
        const apiKey = getApiKey();
        const provider = getCurrentProvider();
        
        // 1️⃣ 立即执行本地搜索
        console.log('1️⃣ 执行本地搜索...');
        localResults = searchLocalDatabase(query);
        console.log('✅ 本地搜索完成:', localResults.length, '个结果');
        
        // 2️⃣ 立即显示本地结果（不等 AI）
        loading.classList.add('hidden');
        results.classList.remove('hidden');
        resultsTitle.textContent = '';
        allSearchResults = [...localResults];
        currentDisplayedCount = 0;
        resultsList.innerHTML = '';
        displayMore();
        
        // 3️⃣ 记录 AI 状态（首次点击“更多推荐”时才调用）
        console.log(`🔑 API Key 检查 - 提供商: ${provider}, Key 存在: ${!!apiKey}, Key 前缀: ${apiKey ? apiKey.substring(0, 10) : '无'}`);
        if (!apiKey || !apiKey.trim()) {
            console.log('⏭️  跳过 AI 搜索（未配置 API Key）');
            aiSearchComplete = true;
        } else {
            console.log('🤖 AI 将在用户点击“更多推荐”后再触发');
        }
        
        updateLoadMoreButton();
        
    } catch (error) {
        console.error('❌ 搜索错误:', error);
        console.error('💥 完整错误信息:', {
            message: error.message,
            stack: error.stack,
            error: error
        });
        
        loading.classList.add('hidden');
        results.classList.remove('hidden');
        resultsTitle.textContent = '😢 搜索出错';
        resultsCount.textContent = '';
        resultsList.innerHTML = '<p style="text-align:center;color:#ff3b30;padding:40px;">搜索出错，请检查您的网络连接或稍后重试</p>';
        loadMoreContainer.classList.add('hidden');
    }
}

// 用户点击后按需加载 AI 推荐
async function loadNextAIBatch() {
    if (isFetchingAI) {
        console.log('⚠️ AI 搜索正在进行中，忽略重复请求');
        return;
    }
    
    if (aiSearchComplete) {
        console.log('ℹ️ AI 搜索已完成，无需再次请求');
        return;
    }
    
    const apiKey = getApiKey();
    if (!apiKey || !apiKey.trim()) {
        console.log('❌ 未检测到 API Key，无法进行 AI 搜索');
        aiSearchComplete = true;
        return;
    }
    
    isFetchingAI = true;
    updateLoadMoreButton();
    
    try {
        if (!analyzedIntent) {
            console.log('🔍 开始分析用户意图...');
            analyzedIntent = await analyzeIntent(currentQuery, apiKey);
            console.log('✅ 意图分析完成');
        }
        
        console.log('📡 请求 AI 推荐...');
        const existingResults = [...localResults, ...aiResults];
        const recommendations = await getAIRecommendations(
            analyzedIntent,
            currentQuery,
            existingResults,
            apiKey,
            AI_BATCH_LIMIT
        );
        const rawCount = Array.isArray(recommendations) ? recommendations.length : 0;
        console.log('✅ AI 推荐获取完成:', rawCount, '个原始结果');
        
        const prepared = prepareAIRecommendations(
            recommendations,
            analyzedIntent,
            currentQuery,
            existingResults
        );
        console.log('✅ 过滤后保留:', prepared.length, '个推荐');
        
        if (prepared.length === 0) {
            aiSearchComplete = true;
            console.log('ℹ️ 本轮 AI 未返回可用结果，标记为完成');
            return;
        }
        
        aiResults = aiResults.concat(prepared);
        allSearchResults = allSearchResults.concat(prepared);
        
        if (prepared.length < AI_BATCH_LIMIT) {
            aiSearchComplete = true;
            console.log('ℹ️ AI 返回结果不足上限，视为已无更多推荐');
        }
        
        displayMore();
    } catch (error) {
        console.error('❌ AI 推荐加载失败:', error);
        aiSearchComplete = true;
    } finally {
        isFetchingAI = false;
        updateLoadMoreButton();
    }
}

// 过滤并标准化 AI 推荐结果
function prepareAIRecommendations(recommendations, intent, query, existingResults) {
    if (!Array.isArray(recommendations)) {
        return [];
    }
    
    const normalized = [];
    const existingUrls = new Set();
    const existingNames = new Set();
    
    [...(existingResults || []), ...(allSearchResults || [])].forEach(item => {
        if (item?.url) {
            existingUrls.add(item.url.toLowerCase());
        }
        if (item?.name) {
            existingNames.add(item.name.toLowerCase());
        }
    });
    
    const keywords = buildKeywordList(query, intent);
    const fallbackCategory = intent?.category || 'AI推荐';
    
    for (const rec of recommendations) {
        if (!rec || typeof rec !== 'object') {
            continue;
        }
        
        const name = (rec.name || '').trim();
        const url = (rec.url || '').trim();
        const description = (rec.description || '').trim();
        
        if (!name || !url || !isHttpUrl(url)) {
            console.log('� 跳过字段缺失或URL非法的推荐:', rec);
            continue;
        }
        
        const matchText = `${name} ${description}`.toLowerCase();
        const isRelevant = keywords.some(keyword => keyword && matchText.includes(keyword));
        if (!isRelevant) {
            console.log('🚫 跳过与关键词无关的推荐:', name);
            continue;
        }
        
        const lowerUrl = url.toLowerCase();
        const lowerName = name.toLowerCase();
        if (existingUrls.has(lowerUrl) || existingNames.has(lowerName)) {
            console.log('🚫 跳过重复推荐:', name);
            continue;
        }
        
        existingUrls.add(lowerUrl);
        existingNames.add(lowerName);
        
        normalized.push({
            name,
            url,
            description,
            category: rec.category || fallbackCategory,
            type: rec.type || '其他',
            source: 'ai'
        });
        
        if (normalized.length >= AI_BATCH_LIMIT) {
            break;
        }
    }
    
    return normalized;
}

function buildKeywordList(query, intent) {
    const keywordSet = new Set();
    if (typeof query === 'string') {
        const lower = query.trim().toLowerCase();
        if (lower) {
            keywordSet.add(lower);
        }
        lower.split(/[\s,，、]+/).forEach(part => {
            const token = part.trim();
            if (token) {
                keywordSet.add(token.toLowerCase());
            }
        });
    }
    
    if (intent?.keywords && Array.isArray(intent.keywords)) {
        intent.keywords.forEach(keyword => {
            const token = (keyword || '').trim().toLowerCase();
            if (token) {
                keywordSet.add(token);
            }
        });
    }
    
    return Array.from(keywordSet).filter(Boolean);
}

function isHttpUrl(url) {
    return /^https?:\/\//i.test(url || '');
}

// 智能搜索主函数
async function intelligentSearch(query) {
    const apiKey = getApiKey();
    
    // 如果没有API Key，只搜索本地
    if (!apiKey) {
        console.log('❌ 无API Key，仅搜索本地数据库');
        const localResults = searchLocalDatabase(query);
        console.log('✓ 本地搜索结果:', localResults.length, '个');
        return localResults;
    }
    
    try {
        console.log('🔍 智能搜索开始，查询词:', query);
        
        // 1. 调用AI理解用户意图
        console.log('1️⃣ 分析用户意图...');
        const intent = await analyzeIntent(query, apiKey);
        console.log('✅ AI理解的意图:', intent);
        
        // 2. 根据意图匹配本地数据库
        console.log('2️⃣ 匹配本地数据库...');
        const localResults = matchLocalDatabase(intent, query);
        console.log('✅ 本地匹配结果:', localResults.length, '个');
        
        // 3. 总是调用AI推荐，补充更多相关网站
        console.log('3️⃣ 获取AI推荐...');
        const aiRecommendations = await getAIRecommendations(intent, query, localResults, apiKey);
        console.log('✅ AI推荐结果:', aiRecommendations.length, '个');
        
        // 4. 合并结果：本地优先，然后AI推荐
        const allResults = [
            ...localResults.map(r => ({...r, source: 'local'})),
            ...aiRecommendations.map(r => ({...r, source: 'ai'}))
        ];
        
        console.log('✅ 智能搜索完成，总共:', allResults.length, '个结果');
        return allResults;
        
    } catch (error) {
        console.error('❌ AI搜索失败:', error.message);
        console.error('📌 完整错误:', error);
        console.log('📌 回退到本地搜索...');
        // AI失败时回退到本地搜索
        const localResults = searchLocalDatabase(query);
        console.log('✓ 本地搜索返回:', localResults.length, '个结果');
        return localResults;
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
    try {
        const apiConfig = getAPIConfig();
        console.log(`📡 调用 ${apiConfig.provider.toUpperCase()} API 分析意图...`);
        
        const systemPrompt = '你是网站导航助手，分析用户意图。返回JSON格式：{userIntent, category, keywords[], intent, isBrandSearch}';
        
        const response = await fetch(apiConfig.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: apiConfig.model,
                messages: [{
                    role: "system",
                    content: systemPrompt
                }, {
                    role: "user",
                    content: `分析用户搜索意图："${query}"，返回JSON格式`
                }],
                temperature: 0.3,
                max_tokens: 500
            })
        });
        
        console.log(`✅ Fetch 已完成加载：${apiConfig.provider.toUpperCase()} API`);
        
        if (!response.ok) {
            throw new Error(`API 状态错误: ${response.status}`);
        }
        
        const data = await response.json();
        const content = data.choices[0].message.content;
        const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const intent = JSON.parse(jsonStr);
        
        console.log('✅ 意图分析成功:', intent);
        return intent;
        
    } catch (error) {
        console.error('❌ 意图分析失败:', error.message);
        return {
            userIntent: '其他',
            category: '常用工具',
            keywords: [query],
            intent: `搜索${query}相关内容`,
            isBrandSearch: false
        };
    }
}

// 根据意图匹配本地数据库
function matchLocalDatabase(intent, originalQuery) {
    const results = new Set();
    const lowerQuery = originalQuery.toLowerCase();
    const isBrandSearch = intent.isBrandSearch === true;
    
    websitesDatabase.forEach(site => {
        let score = 0;
        
        // 1. 完全匹配分类（高权重）
        if (site.category === intent.category) {
            score += 10;
        }
        
        // 2. 品牌名搜索 - 增强权重
        if (isBrandSearch) {
            // 品牌名精确匹配获得极高权重
            if (site.name.toLowerCase().includes(lowerQuery)) score += 50;
            if (site.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 30;
            if (site.description.toLowerCase().includes(lowerQuery)) score += 20;
        } else {
            // 3. 关键词匹配（非品牌搜索）
            intent.keywords.forEach(keyword => {
                const lowerKeyword = keyword.toLowerCase();
                
                if (site.name.toLowerCase().includes(lowerKeyword)) score += 5;
                if (site.description.toLowerCase().includes(lowerKeyword)) score += 3;
                if (site.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))) score += 4;
            });
            
            // 4. 原始查询匹配
            if (site.name.toLowerCase().includes(lowerQuery)) score += 6;
            if (site.description.toLowerCase().includes(lowerQuery)) score += 2;
            if (site.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) score += 3;
        }
        
        // 添加到结果集
        if (score > 0) {
            results.add({...site, score});
        }
    });
    
    // 按分数排序并返回
    return Array.from(results)
        .sort((a, b) => b.score - a.score)
        .slice(0, isBrandSearch ? 15 : 10);  // 品牌搜索时取更多结果
}

// AI推荐补充网站
async function getAIRecommendations(intent, query, existingResults, apiKey, limit = AI_BATCH_LIMIT) {
    const names = (existingResults || []).map(r => r && r.name).filter(Boolean);
    const urls = (existingResults || []).map(r => r && r.url).filter(Boolean);
    const existingNames = names.join('、');
    const existingUrls = urls.join('、');
    const isBrandSearch = intent?.isBrandSearch === true;
    const apiConfig = getAPIConfig();

    const systemPrompt = `你是一个专业的网站推荐助手。严格遵循以下规则：
1. 仅推荐与用户搜索主题高度相关的网站，不得推荐无关内容。
2. 每次返回的网站数量最多 ${limit} 个，不足则返回更少。
3. 每条推荐的“name”或“description”字段必须包含至少一个用户搜索关键字。
4. 不要推荐已经提供过的网站（名称或链接重复都视为重复）。
5. 输出必须为 JSON 数组，每项包含 name、url、description、category、type 字段。
6. category 使用 ${intent?.category || 'AI推荐'}，type 从 ["官方","工具","资讯","社区","教程","数据","其他"] 中选择最合适的一个。
7. JSON 外不允许出现任何额外文本。`;

    const keywordLine = Array.isArray(intent?.keywords) && intent.keywords.length > 0
        ? intent.keywords.join('、')
        : query;
    const userPrompt = `用户搜索词：${query}
意图说明：${intent?.intent || '未知'}
推荐分类：${intent?.category || 'AI推荐'}
关键词集合：${keywordLine}
已存在网站名称：${existingNames || '无'}
已存在网站链接：${existingUrls || '无'}
请推荐最多 ${limit} 个未出现过、与搜索需求强相关的网站。
请确保每条推荐的标题或描述中包含至少一个上述关键词，并严格使用 JSON 数组格式返回。`;

    const response = await fetch(apiConfig.apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: apiConfig.model,
            messages: [{
                role: "system",
                content: systemPrompt
            }, {
                role: "user",
                content: userPrompt
            }],
            temperature: isBrandSearch ? 0.4 : 0.6,
            top_p: 0.9
        })
    });
    
    console.log('🔄 AI 推荐 API 响应状态:', response.status);
    
    if (!response.ok) {
        throw new Error(`AI推荐 API 状态错误: ${response.status} ${response.statusText}`);
    }
    
    let data;
    try {
        data = await response.json();
        console.log('✅ JSON 解析完成');
    } catch (parseError) {
        console.error('❌ 响应 JSON 解析失败:', parseError.message);
        throw parseError;
    }
    
    console.log('📦 API 响应数据结构:', {
        hasChoices: !!data.choices,
        choicesLength: data.choices?.length,
        firstChoiceKeys: data.choices?.[0] ? Object.keys(data.choices[0]) : 'N/A',
        messageKeys: data.choices?.[0]?.message ? Object.keys(data.choices[0].message) : 'N/A'
    });
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        console.error('❌ API 响应格式错误，完整响应:', JSON.stringify(data).substring(0, 500));
        throw new Error('AI 推荐响应格式错误：缺少必需字段');
    }
    
    const content = data.choices[0].message.content;
    console.log('📝 AI 推荐原始响应长度:', content.length);
    console.log('📝 AI 推荐原始响应内容:', content.substring(0, 500));
    
    // 清理可能的markdown代码块
    const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    console.log('📌 清理后的 JSON 字符串:', jsonStr.substring(0, 500));
    
    let recommendations;
    try {
        recommendations = JSON.parse(jsonStr);
        console.log('✅ JSON 解析成功，类型:', typeof recommendations, '是否数组:', Array.isArray(recommendations));
        
        // 确保返回数组
        if (Array.isArray(recommendations)) {
            console.log(`✅ AI 为"${query}"推荐了 ${recommendations.length} 个网站`);
            if (recommendations.length > 0) {
                console.log('🎯 第一个推荐:', JSON.stringify(recommendations[0]).substring(0, 200));
            }
            return recommendations;
        } else {
            console.warn('⚠️  AI 推荐不是数组，类型为:', typeof recommendations);
            // 如果返回的是对象，尝试提取数组
            if (recommendations.websites && Array.isArray(recommendations.websites)) {
                console.log('✅ 从 recommendations.websites 提取数组，共', recommendations.websites.length, '个');
                return recommendations.websites;
            }
            if (recommendations.data && Array.isArray(recommendations.data)) {
                console.log('✅ 从 recommendations.data 提取数组，共', recommendations.data.length, '个');
                return recommendations.data;
            }
            console.warn('⚠️  无法从推荐对象中提取数组，返回空数组');
            return [];
        }
    } catch (e) {
        console.error('❌ 第一次 JSON 解析失败:', e.message);
        
        // 尝试修复策略 1：逐个提取有效的 JSON 对象
        try {
            console.log('🔧 尝试修复策略 1：逐个提取对象...');
            const results = [];
            let depth = 0;
            let currentObj = '';
            
            for (let i = 0; i < jsonStr.length; i++) {
                const char = jsonStr[i];
                
                if (char === '{') {
                    if (depth === 0) currentObj = '';
                    depth++;
                }
                
                currentObj += char;
                
                if (char === '}') {
                    depth--;
                    if (depth === 0 && currentObj.trim()) {
                        try {
                            const obj = JSON.parse(currentObj);
                            if (obj && typeof obj === 'object' && obj.name && obj.url) {
                                results.push(obj);
                            }
                        } catch (objError) {
                            // 忽略单个对象解析失败，继续
                        }
                        currentObj = '';
                    }
                }
            }
            
            if (results.length > 0) {
                console.log(`✅ 修复策略 1 成功：提取了 ${results.length} 个完整对象`);
                return results;
            }
        } catch (fixError) {
            console.error('❌ 修复策略 1 失败:', fixError.message);
        }
        
        // 尝试修复策略 2：查找所有类似 URL 的字段，推断对象边界
        try {
            console.log('🔧 尝试修复策略 2：通过 URL 推断对象边界...');
            const urlPattern = /"url"\s*:\s*"(https?:\/\/[^"]+)"/g;
            const matches = [...jsonStr.matchAll(urlPattern)];
            
            if (matches.length > 0) {
                const results = [];
                for (let i = 0; i < matches.length; i++) {
                    const match = matches[i];
                    const urlStart = match.index;
                    
                    // 从 URL 位置向后查找，找到下一个 URL 或字符串结尾
                    const nextUrlStart = matches[i + 1]?.index || jsonStr.length;
                    
                    // 向前查找 { 的开始位置
                    let objStart = urlStart;
                    let braceCount = 0;
                    for (let j = urlStart - 1; j >= 0; j--) {
                        if (jsonStr[j] === '{') braceCount++;
                        if (jsonStr[j] === '}') braceCount--;
                        if (braceCount === 1) {
                            objStart = j;
                            break;
                        }
                    }
                    
                    // 向后查找 } 的结束位置
                    let objEnd = urlStart;
                    braceCount = 0;
                    for (let j = nextUrlStart - 1; j >= urlStart; j--) {
                        if (jsonStr[j] === '}') {
                            objEnd = j;
                            braceCount++;
                            if (braceCount === 1) break;
                        }
                    }
                    
                    const objStr = jsonStr.substring(objStart, objEnd + 1);
                    try {
                        const obj = JSON.parse(objStr);
                        if (obj && obj.name && obj.url) {
                            results.push(obj);
                        }
                    } catch (objError) {
                        // 继续
                    }
                }
                
                if (results.length > 0) {
                    console.log(`✅ 修复策略 2 成功：通过 URL 推断提取了 ${results.length} 个对象`);
                    return results;
                }
            }
        } catch (fixError) {
            console.error('❌ 修复策略 2 失败:', fixError.message);
        }
        
        console.error('📌 所有修复策略均失败，返回空数组');
        return [];
    }
}

// 显示搜索结果
function displayResults(searchResults, query) {
    console.log('displayResults called with', searchResults.length, 'results');
    loading.classList.add('hidden');
    
    if (!Array.isArray(searchResults)) {
        console.error('searchResults 不是数组:', searchResults);
        results.classList.remove('hidden');
        resultsTitle.textContent = '😢 搜索出错';
        resultsCount.textContent = '';
        resultsList.innerHTML = '<p style="text-align:center;color:#666;padding:40px;">搜索过程中出现错误，请稍后重试</p>';
        loadMoreContainer.classList.add('hidden');
        return;
    }
    
    if (searchResults.length === 0) {
        results.classList.remove('hidden');
        resultsTitle.textContent = '😢 没有找到相关网站';
        resultsCount.textContent = '';
        resultsList.innerHTML = '<p style="text-align:center;color:#666;padding:40px;">试试其他关键词吧<br><br>💡 试试搜索："抠图"、"去水印"、"AI绘画"</p>';
        loadMoreContainer.classList.add('hidden');
        return;
    }
    
    console.log('显示', searchResults.length, '个结果');
    
    // 重置并保存所有搜索结果
    currentQuery = query;
    analyzedIntent = null;
    isFetchingAI = false;
    localResults = searchResults.filter(item => item && item.source === 'local');
    aiResults = searchResults.filter(item => item && item.source === 'ai');

    if (localResults.length === 0 && aiResults.length === 0) {
        localResults = searchResults.map(item => ({...item, source: item?.source || 'local'}));
        aiResults = [];
    }
    
    allSearchResults = [...localResults, ...aiResults];
    aiSearchComplete = false;
    currentDisplayedCount = 0;
    
    // 清空之前的结果
    resultsList.innerHTML = '';
    
    // 显示初始结果
    results.classList.remove('hidden');
    resultsTitle.textContent = '';
    resultsCount.textContent = `${allSearchResults.length} 个结果`;
    
    // 显示第一批结果
    displayMore();
}

// 计算要显示的数量（分批加载）
function calculateDisplayCount(columnsPerRow) {
    // 每次加载 10 个结果，让用户分批查看
    // 10个结果足够用户做出初步选择
    // 需要更多时再点击"更多推荐"
    return 10;
}

// 显示更多结果
async function handleLoadMore() {
    if (isFetchingAI) {
        console.log('⚠️ AI 搜索进行中，请稍候...');
        return;
    }
    
    loadMoreBtn.disabled = true;
    loadMoreText.textContent = '加载中...';
    
    try {
        if (currentDisplayedCount < allSearchResults.length) {
            console.log('⬇️ 展示缓冲中的更多结果');
            displayMore();
        } else if (currentDisplayedCount < localResults.length) {
            console.log('⬇️ 还有本地结果待展示');
            displayMore();
        } else {
            console.log('🤖 触发 AI 推荐批次加载');
            await loadNextAIBatch();
        }
    } finally {
        if (!isFetchingAI) {
            loadMoreBtn.disabled = false;
        }
        updateLoadMoreButton();
    }
}

// 执行显示更多逻辑
function displayMore() {
    // 防御性检查
    if (!Array.isArray(allSearchResults)) {
        console.error('displayMore: allSearchResults 无效');
        return;
    }
    
    // 如果本地结果为空，显示加载提示
    if (allSearchResults.length === 0) {
        console.log('⏳ 本地无结果，等待 AI 搜索...');
        resultsCount.textContent = '正在搜索中...';
        resultsList.innerHTML = '<p style="text-align:center;color:#999;padding:40px;">🔍 正在为您搜索中，请稍候...</p>';
        updateLoadMoreButton();
        return;
    }
    
    // 每次加载 10 个结果
    const itemsPerLoad = 10;
    const startIndex = currentDisplayedCount;
    const endIndex = Math.min(currentDisplayedCount + itemsPerLoad, allSearchResults.length);
    
    // 防止无效的索引范围
    if (startIndex >= endIndex) {
        console.log('⚠️ displayMore: 无效的索引范围，startIndex(' + startIndex + ') >= endIndex(' + endIndex + ')');
        console.log('📊 当前状态: 已显示 ' + currentDisplayedCount + '/' + allSearchResults.length);
        return;
    }
    
    console.log(`displayMore: 显示第 ${startIndex+1} 到 ${endIndex} 个，共 ${allSearchResults.length} 个`);
    
    // 将新结果添加到列表
    for (let i = startIndex; i < endIndex; i++) {
        try {
            const site = allSearchResults[i];
            if (!site) {
                console.error('site 为空:', i);
                continue;
            }
            const item = createResultElement(site);
            if (item) {
                resultsList.appendChild(item);
            }
        } catch (e) {
            console.error('创建结果元素失败:', e, i);
        }
    }
    
    currentDisplayedCount = endIndex;
    
    // 更新结果计数
    resultsCount.textContent = `${currentDisplayedCount} 个结果`;
    
    // 更新"更多推荐"按钮
    updateLoadMoreButton();
}

// 更新"更多推荐"按钮状态
function updateLoadMoreButton() {
    const remainingBuffered = allSearchResults.length - currentDisplayedCount;
    const apiKey = getApiKey();
    const canShowBuffered = remainingBuffered > 0;
    const providerLabel = getCurrentProvider() === 'deepseek' ? 'DeepSeek' : 'AI';
    const localRemaining = Math.max(localResults.length - currentDisplayedCount, 0);
    const canTriggerAI = apiKey && apiKey.trim() && !aiSearchComplete && currentDisplayedCount >= localResults.length;
    
    console.log('📍 按钮状态检查:', {
        currentDisplayed: currentDisplayedCount,
        totalResultsCached: allSearchResults.length,
        localRemaining,
        remainingBuffered,
        aiComplete: aiSearchComplete,
        isFetchingAI,
        canTriggerAI
    });
    
    if (canShowBuffered) {
        loadMoreContainer.classList.remove('hidden');
        loadMoreBtn.disabled = false;
        loadMoreText.textContent = `更多推荐 (剩余 ${remainingBuffered} 个)`;
        return;
    }
    
    if (isFetchingAI) {
        loadMoreContainer.classList.remove('hidden');
        loadMoreBtn.disabled = true;
        loadMoreText.textContent = `${providerLabel} 搜索中...`;
        return;
    }
    
    if (canTriggerAI) {
        loadMoreContainer.classList.remove('hidden');
        loadMoreBtn.disabled = false;
        loadMoreText.textContent = '更多推荐 (AI推荐)';
        return;
    }
    
    if (localRemaining > 0) {
        loadMoreContainer.classList.remove('hidden');
        loadMoreBtn.disabled = false;
        loadMoreText.textContent = `更多推荐 (剩余 ${localRemaining} 个)`;
        return;
    }
    
    loadMoreContainer.classList.add('hidden');
    loadMoreBtn.disabled = true;
    console.log('✅ 没有更多结果，隐藏按钮');
}

// 创建结果元素
function createResultElement(site) {
    const div = document.createElement('div');
    div.className = 'result-item';
    
    const isAI = site.source === 'ai';
    const tagText = isAI ? 'AI推荐' : site.category;
    
    // 获取分类颜色
    const colorScheme = getCategoryColor(tagText);
    
    // 创建标签样式
    const tagStyle = `background: ${colorScheme.bg}; color: ${colorScheme.text};`;
    
    div.innerHTML = `
        <span class="tag category-tag" style="${tagStyle}">${tagText}</span>
        <h3>${site.name}</h3>
        <div class="url">${site.url}</div>
        <p>${site.description}</p>
    `;
    
    div.addEventListener('click', () => {
        window.open(site.url, '_blank');
    });
    
    return div;
}

// 下载搜索结果为 Excel
function downloadAsExcel() {
    if (allSearchResults.length === 0) {
        alert('没有搜索结果可下载！');
        return;
    }
    
    // 检查 XLSX 库是否已加载
    if (typeof XLSX === 'undefined') {
        console.warn('⚠️  XLSX 库尚未加载，正在重新加载...');
        // 动态加载 XLSX
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
        script.onload = () => {
            console.log('✅ XLSX 库加载成功，重试下载...');
            downloadAsExcelInternal();
        };
        script.onerror = () => {
            console.error('❌ 无法加载 XLSX 库');
            alert('下载库加载失败，请检查网络连接后重试！');
        };
        document.head.appendChild(script);
        return;
    }
    
    downloadAsExcelInternal();
}

// 实际的下载逻辑
function downloadAsExcelInternal() {
    try {
        // 准备数据
        const data = allSearchResults.map((site, index) => ({
            '序号': index + 1,
            '网站名称': site.name || '',
            '网站链接': site.url || '',
            '描述': site.description || '',
            '分类': site.category || '',
            '来源': site.source === 'ai' ? 'AI 推荐' : '本地结果'
        }));
        
        // 创建工作簿
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, '搜索结果');
        
        // 设置列宽
        const colWidths = [
            { wch: 8 },      // 序号
            { wch: 20 },     // 网站名称
            { wch: 40 },     // 网站链接
            { wch: 30 },     // 描述
            { wch: 15 },     // 分类
            { wch: 12 }      // 来源
        ];
        ws['!cols'] = colWidths;
        
        // 生成文件名（包含搜索词和时间戳）
        const timestamp = new Date().toLocaleString('zh-CN').replace(/[/:]/g, '-');
        const query = searchInput.value || '搜索结果';
        const fileName = `${query}_${timestamp}.xlsx`;
        
        // 下载文件
        XLSX.writeFile(wb, fileName);
        
        console.log(`✅ 已下载 Excel 文件: ${fileName}，共 ${allSearchResults.length} 条结果`);
        
    } catch (error) {
        console.error('❌ 下载失败:', error);
        alert('下载失败，请重试！');
    }
}
