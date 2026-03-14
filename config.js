// API配置
const CONFIG = {
    // AI 代理配置（浏览器仅调用本地代理，避免暴露真实 API Key）
    AI_PROXY_URL: '/api/ai',

    // DeepSeek 配置
    DEEPSEEK_MODEL: 'deepseek-chat',

    // Qwen（阿里云 DashScope）配置
    QWEN_MODEL: 'qwen3.5-plus',

    // 当前选择的 AI 提供商（当前默认使用 deepseek）
    CURRENT_PROVIDER: 'deepseek',
    
    CACHE_DURATION: 3600000, // 缓存1小时
    MIN_LOCAL_RESULTS: 3 // 本地结果少于3个时才调用AI
};

// 获取当前 AI 提供商
function getCurrentProvider() {
    return localStorage.getItem('ai_provider') || CONFIG.CURRENT_PROVIDER;
}

// 切换 AI 提供商
function switchAIProvider(provider) {
    if (!['deepseek', 'qwen'].includes(provider)) {
        console.error('❌ 无效的 AI 提供商:', provider);
        return false;
    }
    localStorage.setItem('ai_provider', provider);
    console.log(`✅ 已切换到 ${provider.toUpperCase()} 模型`);
    return true;
}

// 获取 API Key（根据当前提供商）
function getApiKey() {
    return 'server-managed';
}

// 保存 API Key（根据提供商类型）
function saveApiKey(key, provider) {
    console.warn('⚠️ 当前版本由本地代理统一管理 API Key，浏览器端不会保存密钥。');
}

// 获取当前 API 配置
function getAPIConfig() {
    const provider = getCurrentProvider();
    return {
        apiUrl: CONFIG.AI_PROXY_URL,
        model: provider === 'deepseek' ? CONFIG.DEEPSEEK_MODEL : CONFIG.QWEN_MODEL,
        apiKey: getApiKey(),
        provider
    };
}

// 获取缓存
function getCache(query) {
    const cacheKey = `search_cache_${query.toLowerCase()}`;
    const cached = localStorage.getItem(cacheKey);
    
    if (cached) {
        const data = JSON.parse(cached);
        const now = Date.now();
        
        // 检查缓存是否过期
        if (now - data.timestamp < CONFIG.CACHE_DURATION) {
            return data.results;
        } else {
            localStorage.removeItem(cacheKey);
        }
    }
    
    return null;
}

// 设置缓存（只缓存非空结果）
function setCache(query, results) {
    // 只缓存有真实结果的查询
    if (!results || results.length === 0) {
        console.log('⏭️ 跳过缓存空结果');
        return;
    }
    
    const cacheKey = `search_cache_${query.toLowerCase()}`;
    const data = {
        timestamp: Date.now(),
        results: results
    };
    
    try {
        localStorage.setItem(cacheKey, JSON.stringify(data));
        console.log('💾 缓存已保存:', query, `(${results.length} 个结果)`);
    } catch (e) {
        // 缓存满了，清理旧缓存
        clearOldCache();
    }
}

// 清除特定查询的缓存
function clearCache(query) {
    const cacheKey = `search_cache_${query.toLowerCase()}`;
    localStorage.removeItem(cacheKey);
    console.log('🗑️ 已清除缓存:', query);
}

// 清理旧缓存
function clearOldCache() {
    const keys = Object.keys(localStorage);
    const cacheKeys = keys.filter(key => key.startsWith('search_cache_'));
    
    cacheKeys.forEach(key => {
        localStorage.removeItem(key);
    });
}

// 调试函数：查看当前配置
function checkConfig() {
    const provider = getCurrentProvider();
    const apiKey = getApiKey();
    const apiConfig = getAPIConfig();
    
    console.log('🔍 当前 AI 配置信息：');
    console.log(`  • 当前提供商: ${provider.toUpperCase()}`);
    console.log('  • API Key: ✅ 由本地代理管理');
    console.log(`  • API URL: ${apiConfig.apiUrl}`);
    console.log(`  • Model: ${apiConfig.model}`);
    console.log('');
    console.log('💡 快速切换命令:');
    console.log("  • switchAIProvider('deepseek'); // 默认模型 deepseek-chat");
    console.log("  • switchAIProvider('qwen'); // 可切换到 qwen3.5-plus");
    
    return {provider, apiKey, apiConfig};
}

