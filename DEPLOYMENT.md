# 生产环境部署指南

## ⚠️ 安全警告

当前版本API Key是硬编码在前端代码中的，**适合演示和测试**。

**生产环境强烈建议**：将API调用移到后端，避免API Key泄露。

---

## 🚀 快速部署（前端直接部署）

### 选项1: Vercel（推荐）

1. 在GitHub上fork或上传代码
2. 访问 [vercel.com](https://vercel.com)
3. 导入GitHub仓库
4. 点击部署
5. 完成！获得 `https://your-app.vercel.app`

### 选项2: Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 拖拽整个项目文件夹
3. 自动部署
4. 完成！

### 选项3: GitHub Pages

```bash
# 1. 创建GitHub仓库并推送代码
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/aidaohang.git
git push -u origin main

# 2. 在仓库设置中启用GitHub Pages
# Settings → Pages → Source: main branch
# 访问: https://your-username.github.io/aidaohang
```

---

## 🔒 生产环境最佳实践（推荐）

### 方案：前端 + 后端代理

**架构**：
```
用户 → 前端页面 → 后端API代理 → DeepSeek API
```

**优点**：
- ✅ API Key安全存储在后端
- ✅ 可以添加请求频率限制
- ✅ 可以监控API使用情况
- ✅ 可以缓存结果到数据库

### 后端实现示例

#### Node.js + Express

```javascript
// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // 前端静态文件

// API代理端点
app.post('/api/search', async (req, res) => {
    try {
        const { query } = req.body;
        
        // 调用DeepSeek API
        const response = await fetch('https://api.deepseek.com/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: req.body.messages,
                temperature: req.body.temperature || 0.3
            })
        });
        
        const data = await response.json();
        res.json(data);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

```bash
# .env
DEEPSEEK_API_KEY=sk-996f4ede1cc449f9a0380ec3f17e563f
```

```bash
# 安装依赖
npm install express cors dotenv node-fetch

# 启动服务器
node server.js
```

#### 修改前端代码

```javascript
// config.js - 修改API URL为后端代理
const CONFIG = {
    DEEPSEEK_API_URL: '/api/search', // 使用后端代理
    DEEPSEEK_MODEL: 'deepseek-chat',
    DEEPSEEK_API_KEY: '', // 不需要前端API Key
    CACHE_DURATION: 3600000,
    MIN_LOCAL_RESULTS: 3
};

// 修改fetch调用，不需要Authorization header
// app.js - analyzeIntent和getAIRecommendations函数中
fetch(CONFIG.DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        // 不需要Authorization
    },
    body: JSON.stringify({
        messages: [...],
        temperature: 0.3
    })
});
```

---

## 🛡️ 安全增强

### 1. 添加请求频率限制

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分钟
    max: 100 // 最多100个请求
});

app.use('/api/', limiter);
```

### 2. 添加请求验证

```javascript
app.post('/api/search', (req, res, next) => {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Invalid request' });
    }
    
    next();
});
```

### 3. 使用环境变量

```javascript
// 生产环境
DEEPSEEK_API_KEY=your-production-key
NODE_ENV=production

// 开发环境
DEEPSEEK_API_KEY=your-dev-key
NODE_ENV=development
```

---

## 📊 监控和日志

### 添加日志记录

```javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

app.post('/api/search', async (req, res) => {
    logger.info('Search request', { 
        query: req.body.query,
        ip: req.ip,
        timestamp: new Date()
    });
    
    // ... API调用
});
```

---

## 💰 成本控制

### 1. 缓存到数据库

```javascript
const redis = require('redis');
const client = redis.createClient();

app.post('/api/search', async (req, res) => {
    const cacheKey = `search:${req.body.query}`;
    
    // 检查缓存
    const cached = await client.get(cacheKey);
    if (cached) {
        return res.json(JSON.parse(cached));
    }
    
    // 调用API
    const result = await callDeepSeekAPI(req.body);
    
    // 缓存1小时
    await client.setex(cacheKey, 3600, JSON.stringify(result));
    
    res.json(result);
});
```

### 2. 设置使用配额

```javascript
let dailyUsage = 0;
const DAILY_LIMIT = 1000;

app.post('/api/search', (req, res, next) => {
    if (dailyUsage >= DAILY_LIMIT) {
        return res.status(429).json({ 
            error: 'Daily quota exceeded' 
        });
    }
    
    dailyUsage++;
    next();
});
```

---

## 🔧 推荐部署方案

### 小型项目（<1000用户/天）
- 前端：Vercel/Netlify
- 后端：Vercel Serverless Functions
- 数据库：Vercel KV（Redis）

### 中型项目（1000-10000用户/天）
- 前端：Vercel/Netlify
- 后端：Railway/Render
- 数据库：Upstash Redis
- CDN：Cloudflare

### 大型项目（>10000用户/天）
- 前端：Cloudflare Pages
- 后端：AWS Lambda + API Gateway
- 数据库：AWS ElastiCache
- CDN：Cloudflare
- 监控：Datadog/New Relic

---

## 📝 总结

**当前版本（演示）**：
- ✅ 简单快速
- ✅ 无需后端
- ⚠️ API Key暴露

**生产版本（推荐）**：
- ✅ 安全可靠
- ✅ 可控制成本
- ✅ 可监控使用
- ❗ 需要后端服务器

根据你的需求选择合适的部署方案！
