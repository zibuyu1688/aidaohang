const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

function loadEnvFile(filePath) {
    if (!fs.existsSync(filePath)) {
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    content.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) {
            return;
        }

        const separatorIndex = trimmed.indexOf('=');
        if (separatorIndex === -1) {
            return;
        }

        const key = trimmed.slice(0, separatorIndex).trim();
        let value = trimmed.slice(separatorIndex + 1).trim();

        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
        }

        if (!(key in process.env)) {
            process.env[key] = value;
        }
    });
}

// 优先从当前工作目录加载，再从脚本所在目录加载
loadEnvFile(path.join(process.cwd(), '.env'));
loadEnvFile(path.join(__dirname, '.env'));

const PORT = process.env.PORT || 3000;
const MODEL = process.env.DASHSCOPE_MODEL || 'qwen3.5-plus';
const ROOT_DIR = __dirname;
const DASHSCOPE_BASE_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1';
const DASHSCOPE_API_URL = `${DASHSCOPE_BASE_URL}/chat/completions`;

if (!process.env.DASHSCOPE_API_KEY) {
    console.warn('⚠️ 未检测到 DASHSCOPE_API_KEY，AI 代理请求将失败。');
} else {
    console.log('✅ DASHSCOPE_API_KEY 已加载');
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end(JSON.stringify(payload));
}

function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const types = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon'
    };
    return types[ext] || 'text/plain; charset=utf-8';
}

async function callDashScope(messages, options = {}) {
    const API_KEY = process.env.DASHSCOPE_API_KEY;
    if (!API_KEY) {
        throw new Error('DASHSCOPE_API_KEY 未配置，请检查 .env 文件');
    }

    console.log(`📡 调用 DashScope，模型: ${MODEL}，地址: ${DASHSCOPE_API_URL}`);

    const response = await fetch(DASHSCOPE_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: MODEL,
            messages,
            temperature: options.temperature ?? 0.4,
            top_p: options.topP ?? 0.9
        })
    });

    console.log(`📬 DashScope 响应状态: ${response.status}`);

    if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ DashScope 返回错误: ${response.status} ${errorText}`);
        throw new Error(`DashScope 请求失败: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content || '';
    console.log(`✅ DashScope 返回内容长度: ${content.length}`);
    return content;
}

async function handleAIRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', async () => {
        try {
            const payload = JSON.parse(body || '{}');
            const { task, query, systemPrompt, userPrompt, temperature, top_p } = payload;

            if (!task || !query) {
                sendJson(res, 400, { error: '缺少 task 或 query 参数' });
                return;
            }

            const messages = [
                { role: 'system', content: systemPrompt || '你是一个有帮助的 AI 助手。' },
                {
                    role: 'user',
                    content: userPrompt || `请处理这个请求：${query}`
                }
            ];

            const content = await callDashScope(messages, {
                temperature,
                topP: top_p
            });

            sendJson(res, 200, {
                task,
                model: MODEL,
                content
            });
        } catch (error) {
            console.error('❌ AI 代理请求失败:', error);
            sendJson(res, 500, {
                error: error.message || 'AI 代理请求失败'
            });
        }
    });
}

function serveStaticFile(req, res) {
    const parsedUrl = url.parse(req.url);
    let pathname = decodeURIComponent(parsedUrl.pathname || '/');

    if (pathname === '/') {
        pathname = '/index.html';
    }

    const safePath = path.normalize(path.join(ROOT_DIR, pathname));
    if (!safePath.startsWith(ROOT_DIR)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(safePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Not Found');
            return;
        }

        res.writeHead(200, { 'Content-Type': getContentType(safePath) });
        res.end(data);
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        res.writeHead(204, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        });
        res.end();
        return;
    }

    if (req.url === '/api/ai' && req.method === 'POST') {
        handleAIRequest(req, res);
        return;
    }

    serveStaticFile(req, res);
});

server.listen(PORT, () => {
    console.log(`✅ 本地服务已启动：http://localhost:${PORT}`);
    console.log(`🤖 默认模型：${MODEL}`);
});