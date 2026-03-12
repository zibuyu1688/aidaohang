// Vercel Serverless Function — 代理浏览器请求到 DashScope
// 环境变量 DASHSCOPE_API_KEY 在 Vercel 控制台配置，不会暴露给浏览器

const DASHSCOPE_API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';
const MODEL = process.env.DASHSCOPE_MODEL || 'qwen3.5-plus';

export default async function handler(req, res) {
    // 支持跨域预检
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(204).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: '只支持 POST 请求' });
    }

    const API_KEY = process.env.DASHSCOPE_API_KEY;
    if (!API_KEY) {
        return res.status(500).json({ error: 'DASHSCOPE_API_KEY 未配置，请在 Vercel 控制台添加环境变量' });
    }

    try {
        const { task, query, systemPrompt, userPrompt, temperature, top_p } = req.body || {};

        if (!task || !query) {
            return res.status(400).json({ error: '缺少 task 或 query 参数' });
        }

        const messages = [
            { role: 'system', content: systemPrompt || '你是一个有帮助的 AI 助手。' },
            { role: 'user', content: userPrompt || `请处理这个请求：${query}` }
        ];

        const dashRes = await fetch(DASHSCOPE_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: MODEL,
                messages,
                temperature: temperature ?? 0.4,
                top_p: top_p ?? 0.9
            })
        });

        if (!dashRes.ok) {
            const errorText = await dashRes.text();
            return res.status(dashRes.status).json({ error: `DashScope 请求失败: ${dashRes.status} ${errorText}` });
        }

        const data = await dashRes.json();
        const content = data?.choices?.[0]?.message?.content || '';

        return res.status(200).json({ task, model: MODEL, content });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'AI 代理请求失败' });
    }
}
