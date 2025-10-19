#!/bin/bash

# 诊断脚本：检查爱搜 AISearch 应用的配置和代码

echo "🔍 === 爱搜 AISearch 应用诊断脚本 === 🔍"
echo ""

# 1. 检查必需的文件
echo "1️⃣  检查必需的文件..."
files=("app.js" "websites.js" "config.js" "index.html" "style.css")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        size=$(wc -c < "$file")
        echo "  ✓ $file ($size 字节)"
    else
        echo "  ❌ $file 缺失"
    fi
done

echo ""

# 2. 检查关键函数是否存在
echo "2️⃣  检查关键函数..."
functions=("handleSearch" "intelligentSearch" "displayResults" "analyzeIntent" "getAIRecommendations" "getCache" "setCache" "searchLocalDatabase" "matchLocalDatabase")

for func in "${functions[@]}"; do
    if grep -q "function $func\|async function $func" app.js config.js 2>/dev/null; then
        echo "  ✓ $func 已定义"
    else
        echo "  ❌ $func 未找到"
    fi
done

echo ""

# 3. 检查网站数据库
echo "3️⃣  检查网站数据库..."
if [ -f "websites.js" ]; then
    count=$(grep -c "name: \"" websites.js)
    echo "  ✓ 网站数据库包含约 $count 个网站"
    
    # 检查热门网站
    if grep -q "hotWebsites" websites.js; then
        echo "  ✓ 热门网站数组已定义"
    else
        echo "  ❌ 热门网站数组缺失"
    fi
fi

echo ""

# 4. 检查 API 配置
echo "4️⃣  检查 API 配置..."
if grep -q "DEEPSEEK_API_URL" config.js; then
    echo "  ✓ DeepSeek API URL 已配置"
fi
if grep -q "DEEPSEEK_API_KEY" config.js; then
    echo "  ✓ DeepSeek API Key 已配置"
fi

echo ""

# 5. 检查缓存机制
echo "5️⃣  检查缓存机制..."
if grep -q "localStorage" config.js; then
    echo "  ✓ localStorage 缓存已实现"
fi

echo ""

# 6. 检查错误处理
echo "6️⃣  检查错误处理..."
error_handling_count=$(grep -c "try\|catch" app.js)
console_log_count=$(grep -c "console.log\|console.error" app.js)
echo "  ✓ Try-catch 块: $error_handling_count"
echo "  ✓ 日志语句: $console_log_count"

echo ""

# 7. 检查搜索逻辑
echo "7️⃣  检查搜索逻辑..."
if grep -q "matchLocalDatabase" app.js; then
    echo "  ✓ 本地数据库匹配已实现"
fi
if grep -q "getAIRecommendations" app.js; then
    echo "  ✓ AI 推荐已实现"
fi

echo ""
echo "✅ 诊断完成"
