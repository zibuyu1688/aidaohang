// API配置
const CONFIG = {
    // DeepSeek 配置
    DEEPSEEK_API_URL: 'https://api.deepseek.com/chat/completions',
    DEEPSEEK_MODEL: 'deepseek-chat',
    DEEPSEEK_API_KEY: 'sk-996f4ede1cc449f9a0380ec3f17e563f',
    
    // Qwen（阿里巴巴）配置
    QWEN_API_URL: 'https://api.siliconflow.cn/v1/chat/completions',
    QWEN_MODEL: 'Qwen/Qwen3-VL-30B-A3B-Instruct',
    QWEN_API_KEY: 'sk-kbiiqhzvpjlrrhswwpzvnkuxljhovjrqrhlscvfpnyukxqrj',
    
    // 当前选择的 AI 提供商 ('deepseek' 或 'qwen')
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
    const provider = getCurrentProvider();
    let key = '';
    
    if (provider === 'qwen') {
        key = localStorage.getItem('qwen_api_key') || CONFIG.QWEN_API_KEY;
    } else {
        key = localStorage.getItem('deepseek_api_key') || CONFIG.DEEPSEEK_API_KEY;
    }
    
    if (!key || key.trim() === '') {
        console.warn(`⚠️  ${provider.toUpperCase()} API Key 为空！`);
    }
    
    return key;
}

// 保存 API Key（根据提供商类型）
function saveApiKey(key, provider) {
    provider = provider || getCurrentProvider();
    
    if (provider === 'qwen') {
        localStorage.setItem('qwen_api_key', key);
        console.log('✅ Qwen API Key 已保存');
    } else {
        localStorage.setItem('deepseek_api_key', key);
        console.log('✅ DeepSeek API Key 已保存');
    }
}

// 获取当前 API 配置
function getAPIConfig() {
    const provider = getCurrentProvider();
    
    if (provider === 'qwen') {
        return {
            apiUrl: CONFIG.QWEN_API_URL,
            model: CONFIG.QWEN_MODEL,
            apiKey: getApiKey(),
            provider: 'qwen'
        };
    } else {
        return {
            apiUrl: CONFIG.DEEPSEEK_API_URL,
            model: CONFIG.DEEPSEEK_MODEL,
            apiKey: getApiKey(),
            provider: 'deepseek'
        };
    }
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
    console.log(`  • API Key: ${apiKey ? '✅ 已设置 (' + apiKey.substring(0, 10) + '...)' : '❌ 未设置'}`);
    console.log(`  • API URL: ${apiConfig.apiUrl}`);
    console.log(`  • Model: ${apiConfig.model}`);
    console.log('');
    console.log('💡 快速切换命令:');
    console.log("  • switchAIProvider('qwen');     // 切换到 Qwen");
    console.log("  • switchAIProvider('deepseek'); // 切换到 DeepSeek");
    
    return {provider, apiKey, apiConfig};
}

