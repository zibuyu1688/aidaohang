// Vercel Serverless Function — 代理浏览器请求到 DashScope
// 环境变量 DASHSCOPE_API_KEY 在 Vercel 控制台配置，不会暴露给浏览器

const DASHSCOPE_API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions';
const MODEL = process.env.DASHSCOPE_MODEL || 'qwen3.5-plus';

function extractJson(content) {
    const text = String(content || '').replace(/```json\n?/gi, '').replace(/```\n?/g, '').trim();
    if (!text) {
        throw new Error('AI 返回内容为空');
    }

    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1 || lastBrace < firstBrace) {
        throw new Error('AI 未返回有效 JSON');
    }

    return JSON.parse(text.slice(firstBrace, lastBrace + 1));
}

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
    const { task, query, systemPrompt, userPrompt, temperature, top_p, limit } = req.body || {};

        if (!task || !query) {
            return res.status(400).json({ error: '缺少 task 或 query 参数' });
        }

                const finalTask = task || 'search-assistant';
                const normalizedLimit = Math.min(Math.max(Number(limit) || 6, 1), 10);
                const mergedSystemPrompt = systemPrompt || `你是网站导航助手，请根据用户搜索词识别意图并推荐网站。
必须严格返回 JSON 对象，不允许 Markdown，不允许额外解释，不允许代码块。
返回格式固定为：
{
    "intent": {
        "userIntent": "",
        "category": "",
        "keywords": [""],
        "intent": "",
        "isBrandSearch": false
    },
    "recommendations": [
        {
            "name": "",
            "url": "https://...",
            "description": "不超过28个字",
            "category": "",
            "type": "官方|工具|资讯|社区|教程|数据|其他"
        }
    ]
}
规则：
1. recommendations 最多 ${normalizedLimit} 条；
2. description 必须短，不超过 28 个字；
3. 只返回与搜索词高度相关的网站；
4. URL 必须是完整 https/http 地址；
5. 如果不确定，就少返回，不要凑数。`;
                const mergedUserPrompt = userPrompt || `用户搜索词：${query}\n请直接完成意图分析和网站推荐，一次性返回 JSON。`;

                const messages = [
                        { role: 'system', content: mergedSystemPrompt },
                        { role: 'user', content: mergedUserPrompt }
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
                temperature: temperature ?? 0.2,
                top_p: top_p ?? 0.9
            })
        });

        if (!dashRes.ok) {
            const errorText = await dashRes.text();
            return res.status(dashRes.status).json({ error: `DashScope 请求失败: ${dashRes.status} ${errorText}` });
        }

        const data = await dashRes.json();
        const content = data?.choices?.[0]?.message?.content || '';
        const parsed = extractJson(content);

        return res.status(200).json({ task: finalTask, model: MODEL, data: parsed });
    } catch (error) {
        return res.status(500).json({ error: error.message || 'AI 代理请求失败' });
    }
}
