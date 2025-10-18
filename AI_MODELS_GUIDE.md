# AI 模型选择与配置指南

## 支持的 AI 模型

本应用现已支持两大 AI 模型提供商，可随时切换使用：

### 1. DeepSeek（深度求索）✅ 默认
- **API 地址**：`https://api.deepseek.com/chat/completions`
- **模型名**：`deepseek-chat`
- **优点**：
  - 速度快，响应延迟低
  - 内置 API Key，开箱即用
  - 理解中文能力强
  - 成本低

### 2. Qwen（阿里巴巴千问）
- **API 地址**：`https://api.siliconflow.cn/v1/chat/completions`
- **模型名**：`Qwen/Qwen3-32B`（可选择其他版本）
- **优点**：
  - 支持更多模型种类
  - 可选用 Qwen3 系列的多种模型
  - API 稳定性好
  - 功能完善

**可用的 Qwen 模型列表**：
- `Qwen/Qwen3-32B` - 均衡型（推荐）
- `Qwen/Qwen3-14B` - 轻量型
- `Qwen/Qwen3-8B` - 超轻量型
- `Qwen/Qwen2.5-72B-Instruct` - 性能型
- `Qwen/Qwen3-235B-A22B` - 超大型

## 如何切换模型

### 方法 1：通过浏览器控制台（开发者工具）

打开浏览器开发者工具（F12 或 Cmd+Option+I），在 Console 标签中输入：

```javascript
// 切换到 Qwen 模型
switchAIProvider('qwen');

// 切换回 DeepSeek 模型
switchAIProvider('deepseek');

// 查看当前使用的模型
getCurrentProvider();
```

### 方法 2：通过代码配置

在 `config.js` 中修改：

```javascript
// 修改默认提供商
CONFIG.CURRENT_PROVIDER = 'qwen';  // 'deepseek' 或 'qwen'
```

## API Key 配置

### DeepSeek API Key
```javascript
// 在浏览器控制台设置
saveApiKey('your-deepseek-api-key', 'deepseek');

// 或直接修改 config.js
CONFIG.DEEPSEEK_API_KEY = 'your-api-key';
```

### Qwen API Key
```javascript
// 在浏览器控制台设置
saveApiKey('your-qwen-api-key', 'qwen');

// 或直接修改 config.js
CONFIG.QWEN_API_KEY = 'your-api-key';
```

获取 API Key：
- **DeepSeek**：https://platform.deepseek.com/
- **Qwen/SiliconFlow**：https://cloud.siliconflow.cn/

## 模型对比

| 功能 | DeepSeek | Qwen |
|------|---------|------|
| 速度 | ⚡ 很快 | ⚡⚡ 一般 |
| 成本 | 💰 便宜 | 💰💰 中等 |
| 中文理解 | ✅ 优秀 | ✅ 优秀 |
| 模型选择 | 1 个 | 多个 |
| 开箱即用 | ✅ 是 | ❌ 需要API Key |
| 易用性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## 使用建议

### 快速开始
- 使用 **DeepSeek**（默认）
- 无需配置，立即可用

### 性能要求高
- 使用 **Qwen/Qwen3-235B-A22B**（最大模型）
- 更强的理解能力和推理能力

### 成本考虑
- 用于大量查询：**DeepSeek**（最便宜）
- 用于少量高质量查询：**Qwen3-32B**（成本效益最优）

### 快速响应
- 优先 **DeepSeek**
- 其次 **Qwen/Qwen3-8B**

## 故障排除

### 模型请求失败
1. 检查 API Key 是否正确
2. 确认互联网连接
3. 查看浏览器控制台错误信息

### 切换后仍然使用旧模型
- 浏览器刷新：`Cmd+Shift+R`（强制刷新）
- 清除缓存：打开开发者工具 → Storage → Clear All

### API 超配额
- 检查 API 配额使用情况
- 联系 API 提供商（DeepSeek / SiliconFlow）

## 代码集成

如果在代码中调用，使用以下 API 配置函数：

```javascript
// 获取当前 API 配置
const config = getAPIConfig();
console.log(config); 
// 返回: { apiUrl, model, apiKey, provider }

// 切换提供商
switchAIProvider('qwen');

// 获取/保存 API Key
const key = getApiKey();
saveApiKey('new-key', 'qwen');
```

## 常见问题

**Q：能否同时使用两个模型？**
A：目前不支持，但可以快速切换。我们未来可能支持模型对比功能。

**Q：哪个模型最准确？**
A：Qwen3-235B（超大模型）准确度最高，但速度较慢。DeepSeek 性价比最优。

**Q：需要付费吗？**
A：DeepSeek 有免费额度。Qwen 需要在 SiliconFlow 平台购买额度。

**Q：能否使用其他 AI 模型？**
A：可以！修改 `config.js` 中的 API 地址和模型名称即可支持兼容 OpenAI 协议的任何模型。
