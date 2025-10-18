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
let currentAIIndex = 0;       // AI结果当前加载位置
let totalAIResults = 0;       // AI总结果数（用于判断是否加载完成）
let aiSearchComplete = false; // AI搜索是否完成

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
        
        console.log('🌐 开始搜索（先本地后AI）...');
        
        // 重置全局搜索状态
        localResults = [];
        aiResults = [];
        currentAIIndex = 0;
        totalAIResults = 0;
        aiSearchComplete = false;
        
        const apiKey = getApiKey();
        
        // 1️⃣ 立即执行本地搜索
        console.log('1️⃣ 执行本地搜索...');
        localResults = searchLocalDatabase(query);
        console.log('✅ 本地搜索完成:', localResults.length, '个结果');
        
        // 2️⃣ 立即显示本地结果（不等 AI）
        loading.classList.add('hidden');
        results.classList.remove('hidden');
        resultsTitle.textContent = `为你找到 "${query}" 相关网站`;
        allSearchResults = localResults.map(r => ({...r, source: 'local'}));
        currentDisplayedCount = 0;
        resultsList.innerHTML = '';
        displayMore();
        
        // 3️⃣ 后台异步获取 AI 推荐（如果有 API Key）
        if (apiKey && localResults.length < 20) {
            console.log('🌐 后台加载 AI 推荐...');
            loadAIRecommendationsAsync(query, apiKey);
        } else {
            console.log('⏭️  跳过 AI 搜索（无 API 或本地结果充足）');
            aiSearchComplete = true;
        }
        
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

// 后台异步加载 AI 推荐
async function loadAIRecommendationsAsync(query, apiKey) {
    try {
        console.log('🔍 后台分析意图...');
        const intent = await analyzeIntent(query, apiKey);
        console.log('✅ 意图分析完成');
        
        console.log('📡 后台获取 AI 推荐...');
        const recommendations = await getAIRecommendations(intent, query, localResults, apiKey);
        console.log('✅ AI 推荐获取完成，共:', recommendations.length, '个');
        console.log('📊 AI 推荐长度:', recommendations.length, '个');
        
        // 保存所有 AI 结果
        aiResults = recommendations;
        totalAIResults = recommendations.length;
        currentAIIndex = 0;
        aiSearchComplete = true;
        
        // 流式推荐：立即显示第一批 AI 结果（5-10 个）
        if (aiResults.length > 0) {
            console.log('⚡ 流式推荐：立即显示第一批 AI 结果...');
            
            // 一次加 7 个 AI 结果
            const itemsPerBatch = 7;
            const endIndex = Math.min(currentAIIndex + itemsPerBatch, aiResults.length);
            
            for (let i = currentAIIndex; i < endIndex; i++) {
                const site = {...aiResults[i], source: 'ai'};
                allSearchResults.push(site);
            }
            currentAIIndex = endIndex;
            
            console.log(`✨ 已添加第一批 ${endIndex} 个 AI 结果到 allSearchResults，现在共 ${allSearchResults.length} 个`);
            
            // 立即显示这些结果，无需等待用户点击
            displayMore();
            
            // 继续推荐后续批次（如果有）
            if (currentAIIndex < aiResults.length) {
                console.log(`⏳ 后续还有 ${aiResults.length - currentAIIndex} 个 AI 结果，准备自动加载...`);
                // 延迟 1 秒后自动加载下一批，给用户时间查看当前结果
                setTimeout(() => {
                    continuouslyLoadAIResults();
                }, 1000);
            }
        } else {
            console.log('❌ AI 没有返回推荐 (aiResults.length = 0)');
            // AI 也没有结果，检查本地是否为空
            if (localResults.length === 0) {
                console.log('💔 本地和 AI 都没有结果');
                resultsTitle.textContent = '😢 没有找到相关网站';
                resultsList.innerHTML = '<p style="text-align:center;color:#666;padding:40px;">试试其他关键词吧<br><br>💡 试试搜索："抠图"、"去水印"、"AI绘画"</p>';
            }
        }
        
        // 更新"更多推荐"按钮
        console.log('🔄 更新按钮状态（AI 加载完成）');
        updateLoadMoreButton();
        
    } catch (error) {
        console.error('❌ AI 推荐加载失败:', error.message);
        aiSearchComplete = true;
        
        // 如果本地也没有结果，显示没有找到
        if (localResults.length === 0) {
            console.log('💔 本地和 AI 都没有结果（AI 出错）');
            resultsTitle.textContent = '😢 没有找到相关网站';
            resultsList.innerHTML = '<p style="text-align:center;color:#666;padding:40px;">试试其他关键词吧<br><br>💡 试试搜索："抠图"、"去水印"、"AI绘画"</p>';
        }
        
        updateLoadMoreButton();
    }
}

// 持续加载 AI 结果（流式推荐）
function continuouslyLoadAIResults() {
    if (currentAIIndex >= aiResults.length) {
        console.log('✅ 所有 AI 结果已加载完成');
        return;
    }
    
    const itemsPerBatch = 7;
    const endIndex = Math.min(currentAIIndex + itemsPerBatch, aiResults.length);
    
    console.log(`🌊 流式加载下一批: 第 ${currentAIIndex + 1} 到 ${endIndex} 个（共 ${aiResults.length} 个 AI 结果）`);
    
    for (let i = currentAIIndex; i < endIndex; i++) {
        const site = {...aiResults[i], source: 'ai'};
        allSearchResults.push(site);
    }
    currentAIIndex = endIndex;
    
    console.log(`✨ 已添加到 allSearchResults，现在共 ${allSearchResults.length} 个`);
    
    // 立即显示新加载的结果
    displayMore();
    
    // 继续加载下一批（递归）
    if (currentAIIndex < aiResults.length) {
        setTimeout(() => {
            continuouslyLoadAIResults();
        }, 800);  // 每 800ms 加载一批，给用户时间适应
    } else {
        console.log('✅ 所有 AI 结果已完成流式推荐');
    }
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
        console.log('📡 调用 DeepSeek API 分析意图...');
        
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
2. **识别品牌搜索** - 当用户搜索品牌名时，直接返回该品牌的官网和相关平台
3. **精准分类匹配** - 将用户需求映射到最相关的网站分类
4. **推荐高质量资源** - 只推荐公认的、专业的、直接服务于用户意图的网站

【品牌名识别】
如果用户搜索的是品牌名（如亚马逊、Amazon、沃尔玛、eBay等），应该：
- 直接识别为"品牌搜索"意图
- 返回该品牌的官方网站和官方平台
- 推荐该品牌的买家服务和卖家平台
- 避免推荐竞争对手或无关平台

【品牌分类示例】
- 亚马逊 / Amazon：亚马逊官方平台、各国站点、买家服务、卖家中央、卖家工具
- eBay / ebay：eBay官方平台
- Shopify：Shopify官方平台
- 沃尔玛 / Walmart：沃尔玛官方平台
- 速卖通 / AliExpress：速卖通官方平台
- Wish：Wish官方平台

【用户意图分类】
必须首先判断用户的搜索属于以下哪一类：
- **品牌搜索**: 搜索特定品牌的官网、平台、服务
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
✓ 品牌搜索时，优先官方渠道 - 避免推荐竞争对手

【返回格式】
返回JSON格式（不要markdown代码块）：
{
    "userIntent": "品牌搜索|获取信息|学习教程|使用工具|购买商品|社区交流|其他",
    "category": "最相关的分类",
    "keywords": ["关键词1", "关键词2", "关键词3"],
    "intent": "用户想做什么的简短描述",
    "isBrandSearch": true|false
}

【可能的分类及推荐场景】
【亚马逊相关】亚马逊官方平台、亚马逊买家服务、亚马逊卖家中央、亚马逊卖家工具、亚马逊品牌备案
【eBay相关】eBay官方平台、eBay卖家平台、eBay买家服务
【Shopify相关】Shopify官方平台、Shopify模板市场、Shopify应用
【速卖通相关】速卖通官方平台、速卖通卖家平台
【Wish相关】Wish官方平台、Wish卖家平台
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
- 查询"亚马逊"
  用户意图: 品牌搜索 | 分类: 亚马逊官方平台 | 推荐亚马逊美国站、英国站、日本站、卖家中央、买家服务等官方渠道，不推荐Wish、速卖通等竞争平台
  
- 查询"Amazon开店"
  用户意图: 品牌搜索 | 分类: 亚马逊官方平台 | 推荐亚马逊全球开店、卖家中央等官方卖家渠道
  
- 查询"亚马逊选品工具"
  用户意图: 使用工具 | 分类: 亚马逊卖家工具 | 推荐Jungle Scout、Helium 10、卖家精灵等专业工具
  
- 查询"AI绘画工具"
  用户意图: 使用工具 | 分类: AI图像工具 | 推荐Midjourney、Stable Diffusion等专业AI绘画平台而非通用AI平台
  
- 查询"跨境电商入门教程"
  用户意图: 学习教程 | 分类: 跨境电商 | 推荐专业培训机构、官方学院而非普通资讯站
  
- 查询"最新财经新闻"
  用户意图: 获取信息 | 分类: 财经媒体 | 推荐财新、第一财经等专业财经媒体而非综合新闻网站
  
- 查询"SEO优化社区"
  用户意图: 社区交流 | 分类: SEO工具 | 推荐专业SEO论坛、社区而非通用讨论平台

【关键提示】
- 始终优先推荐垂直领域的专业平台而不是综合性门户
- 理解用户的真实需求，而不是字面意思
- 为不同用户意图提供最合适的资源类型
- 避免"万能"推荐，每个推荐都应该是精准的
- **品牌搜索时，严格只推荐该品牌的官方和相关正式渠道**
- **绝对避免在品牌搜索中推荐竞争对手**`
                }, {
                    role: "user",
                    content: query
                }],
                temperature: 0.3
            })
        });
        
        if (!response.ok) {
            throw new Error(`API 状态错误: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            throw new Error('API 响应格式错误：缺少必需字段');
        }
        
        const content = data.choices[0].message.content;
        
        // 清理可能的markdown代码块
        const jsonStr = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        
        const parsed = JSON.parse(jsonStr);
        console.log('✅ 意图分析成功:', parsed);
        return parsed;
        
    } catch (error) {
        console.error('❌ 意图分析失败:', error.message);
        console.error('📋 详细错误:', error);
        throw error;
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
async function getAIRecommendations(intent, query, existingResults, apiKey) {
    const existingNames = existingResults.map(r => r.name).join('、');
    const isBrandSearch = intent.isBrandSearch === true;
    
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
                content: `你是一个全面的网站推荐专家。你的核心职责是：
1. **深入理解用户需求** - 分析用户搜索背后的真实意图和全面需求
2. **全面推荐相关网站** - 推荐所有可能对用户有帮助的网站和平台，不设数量限制
3. **多维度思考** - 从不同角度（官方、第三方工具、资讯、社区、教程等）推荐
4. **质量和多样性平衡** - 既要高质量，也要覆盖广泛的相关领域

【推荐原则】
1. **全面性优先** - 推荐尽可能多的相关优质网站，用户可以选择
2. **不限制数量** - 没有数量上限，推荐所有你认为相关的网站
3. **多维度覆盖** - 包括官方网站、工具平台、资讯媒体、社区论坛、教程网站等
4. **高质量标准** - 只推荐业界公认的、用户众多的优质网站
5. **避免重复** - 不推荐已经在本地数据库中的网站
6. **相关性优先** - 推荐与用户搜索主题密切相关的网站

【搜索主题深度分析】
对于用户搜索的主题，应该从多个维度推荐：
- **官方和一级渠道** - 该领域的官方网站和主要平台
- **专业工具和应用** - 针对该领域的专业工具和SaaS应用
- **信息和资讯** - 该领域的新闻、资讯、研究报告网站
- **社区和论坛** - 该领域的用户社区、讨论论坛
- **学习和培训** - 该领域的教程、课程、培训网站
- **数据和分析** - 该领域的数据查询、分析工具
- **辅助工具** - 帮助用户完成该领域任务的相关工具

【示例：用户搜索"亚马逊"时应推荐】
1. 官方网站：各国Amazon站点（美国、英国、日本等）
2. 卖家工具：Jungle Scout、Helium10、卖家精灵等
3. 买家服务：Amazon买家服务中心、退货政策等
4. 资讯媒体：Amazon相关新闻、政策更新
5. 社区论坛：Amazon卖家论坛、买家评价社区
6. 学习资源：Amazon销售教程、FBA指南
7. 相关平台：eBay、Wish等其他电商平台（作为对比选项）

【返回格式】
返回JSON数组格式（不要markdown代码块），每项包含：
{
    "name": "网站名称",
    "url": "网站完整URL（必须以http或https开头）",
    "description": "网站功能描述（30-60字）",
    "category": "${intent.category}",
    "type": "官方|工具|资讯|社区|教程|数据|其他"
}

【具体要求】
1. 推荐尽可能多的相关网站 - 没有数量上限
2. 不推荐已有的网站：${existingNames}
3. URL必须真实有效、完整可访问
4. 描述要专业、简洁、突出核心价值
5. 避免重复，但可以推荐不同类型的同一领域网站
6. 返回纯JSON数组，不要其他文字
7. 如果知道该领域有其他优质网站，都应该推荐
8. 宁可多推荐，不要遗漏重要的相关网站

【质量检查清单】
✓ 每个推荐都是该领域的相关网站
✓ 没有明显不相关的网站
✓ URL格式正确且来自官方或权威渠道
✓ 描述准确反映网站功能
✓ 推荐了足够多的相关网站（至少5个以上）
✓ 覆盖了多个维度（官方、工具、资讯、社区等）

【用户意图信息】
- 意图类型：${intent.userIntent}
- 主题分类：${intent.category}
- 真实需求：${intent.intent}
- 关键词：${intent.keywords.join('、')}

${isBrandSearch ? `【品牌搜索策略】
这是一个品牌搜索查询：${query}
- 优先推荐该品牌的官方网站和官方平台
- 推荐该品牌的专业工具和相关服务
- 可以推荐该品牌的竞争对手或替代品作为对比选项
- 推荐与该品牌相关的资讯、论坛、教程等` : ''}

【提示】
- 这个搜索可能返回10-50个或更多相关网站，这是正常的
- 用户需要尽可能全面的选项，让他们自己选择
- 不用担心数量过多，完整性比简洁性更重要`
            }, {
                role: "user",
                content: `用户搜索：${query}
意图类型：${intent.userIntent}
主题分类：${intent.category}
真实需求：${intent.intent}

请推荐所有你认为与这个搜索相关的优质网站，没有数量限制。
要么深入分析这个主题，从多个维度（官方、工具、资讯、社区、教程、数据等）推荐相关网站。
尽可能多地推荐有价值的网站。

已有的网站（不用重复推荐）：${existingNames || '无'}

返回纯JSON数组`
            }],
            temperature: isBrandSearch ? 0.4 : 0.8,
            top_p: 0.95
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
    
    // 保存所有搜索结果
    allSearchResults = searchResults;
    currentDisplayedCount = 0;
    
    // 清空之前的结果
    resultsList.innerHTML = '';
    
    // 显示初始结果
    results.classList.remove('hidden');
    resultsTitle.textContent = `为你找到 "${query}" 相关网站`;
    resultsCount.textContent = `${searchResults.length} 个结果`;
    
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
function handleLoadMore() {
    loadMoreBtn.disabled = true;
    const originalText = loadMoreText.textContent;
    loadMoreText.textContent = '加载中...';
    
    // 模拟异步加载
    setTimeout(() => {
        // 首先检查是否需要添加 AI 结果
        if (currentAIIndex < aiResults.length) {
            console.log('⬇️ 加载更多 AI 推荐...');
            addMoreAIResults();
        } else {
            // 否则加载本地或已有的 allSearchResults
            console.log('⬇️ 加载更多结果...');
            displayMore();
        }
        
        loadMoreBtn.disabled = false;
    }, 300);
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

// 添加更多 AI 结果
// 旧的 addMoreAIResults 函数已被流式推荐替代
// function addMoreAIResults() { ... }

// 更新"更多推荐"按钮状态
function updateLoadMoreButton() {
    const totalCombined = localResults.length + aiResults.length;
    const hasMoreLocal = currentDisplayedCount < localResults.length;
    const hasMoreAI = currentAIIndex < aiResults.length;
    const hasMoreUnloaded = currentDisplayedCount < allSearchResults.length;
    
    console.log('📍 按钮状态检查:', {
        currentDisplayed: currentDisplayedCount,
        allResults: allSearchResults.length,
        hasMoreLocal,
        hasMoreAI,
        hasMoreUnloaded,
        aiComplete: aiSearchComplete
    });
    
    // 如果还有未加载的本地或 AI 结果
    if (hasMoreLocal || hasMoreUnloaded) {
        loadMoreContainer.classList.remove('hidden');
        const remainingCount = allSearchResults.length - currentDisplayedCount + (aiResults.length - currentAIIndex);
        loadMoreText.textContent = `更多推荐 (剩余 ${remainingCount} 个)`;
        console.log(`⬇️ 显示"更多推荐"按钮，剩余: ${remainingCount}`);
    } else if (hasMoreAI && aiSearchComplete) {
        // AI 搜索完成，还有 AI 结果未加载
        loadMoreContainer.classList.remove('hidden');
        const remainingAI = aiResults.length - currentAIIndex;
        loadMoreText.textContent = `更多推荐 (剩余 ${remainingAI} 个 AI 推荐)`;
        console.log(`⬇️ 显示"更多推荐"按钮（AI），剩余: ${remainingAI}`);
    } else if (!aiSearchComplete) {
        // AI 仍在加载中
        loadMoreContainer.classList.remove('hidden');
        loadMoreText.textContent = `更多推荐 (加载中...)`;
        console.log(`⏳ AI 仍在加载中`);
    } else {
        // 所有结果都已显示
        loadMoreContainer.classList.add('hidden');
        console.log(`✅ 所有结果已显示`);
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
