// API配置
const CONFIG = {
    DEEPSEEK_API_URL: 'https://api.deepseek.com/chat/completions',
    DEEPSEEK_MODEL: 'deepseek-chat',
    DEEPSEEK_API_KEY: 'sk-996f4ede1cc449f9a0380ec3f17e563f', // 内置API Key
    CACHE_DURATION: 3600000, // 缓存1小时
    MIN_LOCAL_RESULTS: 3 // 本地结果少于3个时才调用AI
};

// 获取API Key（优先使用内置的，如果用户配置了则使用用户的）
function getApiKey() {
    return localStorage.getItem('deepseek_api_key') || CONFIG.DEEPSEEK_API_KEY;
}

// 保存API Key
function saveApiKey(key) {
    localStorage.setItem('deepseek_api_key', key);
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

// 设置缓存
function setCache(query, results) {
    const cacheKey = `search_cache_${query.toLowerCase()}`;
    const data = {
        timestamp: Date.now(),
        results: results
    };
    
    try {
        localStorage.setItem(cacheKey, JSON.stringify(data));
    } catch (e) {
        // 缓存满了，清理旧缓存
        clearOldCache();
    }
}

// 清理旧缓存
function clearOldCache() {
    const keys = Object.keys(localStorage);
    const cacheKeys = keys.filter(key => key.startsWith('search_cache_'));
    
    cacheKeys.forEach(key => {
        localStorage.removeItem(key);
    });
}
