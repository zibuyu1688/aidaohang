# 爱搜导航站

当前版本已将默认 AI 模型切换为阿里云 DashScope 的 `qwen3.5-plus`。

## 本地运行

1. 复制 `.env.example` 为 `.env`。
2. 在 `.env` 中设置 `DASHSCOPE_API_KEY`。
3. 安装依赖并启动本地服务。

## 说明

- 浏览器端不再保存或暴露真实 API Key。
- 前端通过本地代理 `/api/ai` 调用 DashScope。
- 默认模型为 `qwen3.5-plus`。
- 当前实现走服务端安全代理访问 DashScope 兼容模式接口，基地址为 `https://dashscope.aliyuncs.com/compatible-mode/v1`，具体请求路径为 `/chat/completions`。

## 安全提示

请不要把真实 `DASHSCOPE_API_KEY` 提交到仓库中。