# AI导航 - 智能网站搜索

> 一个极简的AI驱动的导航网站，像Google一样简洁，但更智能。开箱即用，无需配置。

![演示](https://img.shields.io/badge/status-ready-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ 特点

- 🎯 **智能理解** - 使用DeepSeek AI理解用户真实意图
- 🔍 **混合搜索** - 本地数据库 + AI推荐，双重保障
- ⚡ **极速响应** - 智能缓存，相同搜索瞬间返回
- 🎨 **极简设计** - 仿Google首页，简洁优雅
- � **开箱即用** - API Key已内置，用户无需配置
- 📱 **响应式** - 完美支持手机、平板、电脑

## 🚀 快速开始

### 1. 克隆或下载项目

```bash
# 克隆项目（如果是从GitHub）
git clone <your-repo-url>
cd aidaohang

# 或者直接使用现有文件
```

### 2. 启动网站

**方法一：直接打开（最简单）**
```bash
# 直接双击 index.html 文件，或使用浏览器打开
open index.html  # macOS
start index.html # Windows
```

**方法二：本地服务器（推荐）**
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (需先安装 http-server: npm install -g http-server)
http-server -p 8000

# VS Code
# 安装 Live Server 插件，右键 index.html → Open with Live Server
```

然后访问：`http://localhost:8000`

**就这么简单！** API Key已内置，直接开始搜索 🎉

## 📖 使用方法

### 基础搜索
在搜索框输入关键词，例如：
- `抠图` - 自动找到Remove.bg、稿定抠图等工具
- `去水印` - 智能推荐水印去除工具
- `AI绘画` - 找到Midjourney、Stable Diffusion等
- `视频剪辑` - 推荐剪映、Runway等工具

### 自然语言搜索
AI能理解你的自然语言描述：
- `我想移除图片背景` → 推荐抠图工具
- `需要在线设计海报` → 推荐Canva、创客贴
- `找个免费的图片素材网站` → 推荐Unsplash、Pexels

### 搜索逻辑

```
用户输入查询
    ↓
检查缓存（1小时有效）
    ↓
DeepSeek AI理解意图
    ↓
匹配本地数据库（30+网站）
    ↓
本地结果 ≥ 3个？
    ├─ 是 → 直接返回（省API费用）
    └─ 否 → AI推荐补充 → 合并返回
```

## � 网站数据库

总共收录 **100+个精选网站**，覆盖 **16大分类**：

| 分类 | 代表网站 | 说明 |
|------|---------|------|
| 🔍 搜索引擎 | 百度、Google、必应 | 主流搜索工具 |
| 🤖 AI工具 | ChatGPT、Claude、文心一言 | AI对话和创作 |
| 🖼️ 图片编辑 | Remove.bg、Photopea | 抠图、修图工具 |
| 🎬 视频编辑 | 剪映、Runway | 视频制作平台 |
| 📄 在线办公 | 石墨、腾讯文档、飞书 | 协作办公工具 |
| 🎨 设计与创意 | Canva、站酷、Dribbble | 设计灵感与工具 |
| 💻 程序开发 | GitHub、掘金、LeetCode | 代码托管与学习 |
| 📈 产品与运营 | 36氪、虎嗅、人人PM | 行业资讯与学习 |
| 📚 学习与知识 | B站、知乎、Coursera | 在线学习平台 |
| ⚡ 效率工具 | Notion、语雀 | 笔记知识管理 |
| 🛒 电商工具 | 淘宝、京东、速卖通 | 购物与开店 |
| 🎭 社交娱乐 | 微信、抖音、小红书 | 社交与娱乐 |
| 🏠 生活服务 | 美团、携程、高德 | 本地生活服务 |
| 📰 新闻资讯 | 今日头条、澎湃新闻 | 实时新闻热点 |
| 💰 金融投资 | 同花顺、雪球、支付宝 | 理财投资工具 |
| 📣 营销工具 | AI智能推荐 | 根据需求推荐 |

**查看详细统计**: 访问 http://localhost:8000/stats.html

## �📁 项目结构

```
aidaohang/
├── index.html          # 主页面
├── style.css          # 样式文件
├── app.js             # 主要逻辑
├── config.js          # 配置和缓存管理
├── websites.js        # 本地网站数据库（100+网站）
├── stats.html         # 数据统计页面
├── clear-cache.html   # 缓存清理工具
├── test-api.html      # API测试页面
└── README.md          # 说明文档
```

## 🎨 自定义

### 添加网站到数据库

编辑 `websites.js` 文件，添加新网站：

```javascript
{
    name: "网站名称",
    url: "https://example.com",
    description: "网站功能描述",
    category: "分类", // AI工具、图片编辑、视频编辑等
    tags: ["标签1", "标签2", "标签3"]
}
```

### 修改热门推荐

编辑 `websites.js` 中的 `hotWebsites` 数组：

```javascript
const hotWebsites = [
    "Remove.bg",
    "ChatGPT",
    "你的网站名"
];
```

### 调整搜索策略

编辑 `config.js` 中的配置：

```javascript
const CONFIG = {
    CACHE_DURATION: 3600000,  // 缓存时长（毫秒）
    MIN_LOCAL_RESULTS: 3       // 本地结果少于此值时调用AI
};
```

## 💡 成本优化

- **智能缓存**：相同搜索1小时内直接返回缓存，不调用API
- **本地优先**：本地数据库有充足结果时，不调用AI
- **按需推荐**：只在本地结果不足时才请求AI推荐
- DeepSeek API成本极低：1000次搜索约¥1-2元

## 🔒 部署说明

**生产环境建议**：
- 将API Key移到后端服务器，避免暴露在前端代码中
- 使用环境变量管理API Key
- 添加请求频率限制，防止滥用
- 可以考虑使用API网关统一管理

## 🐛 常见问题

### 1. 搜索没有结果？
- 确认网络连接正常
- 查看浏览器控制台是否有错误
- 试试其他关键词，如："抠图"、"去水印"

### 2. API调用失败？
- 检查API Key是否有效（在 config.js 中）
- 确认账户余额充足
- 查看浏览器控制台的错误信息

### 3. 如何清除缓存？
打开浏览器控制台，执行：
```javascript
localStorage.clear();
location.reload();
```

### 4. 如何更换API Key？
编辑 `config.js` 文件，修改 `DEEPSEEK_API_KEY` 的值

## 🚀 部署到线上

### GitHub Pages（免费）
```bash
# 1. 创建GitHub仓库
# 2. 上传所有文件
# 3. 仓库设置 → Pages → Source 选择 main 分支
# 4. 访问 https://your-username.github.io/aidaohang
```

### Vercel（免费）
```bash
# 1. 访问 vercel.com
# 2. 导入GitHub仓库
# 3. 自动部署完成
```

### Netlify（免费）
```bash
# 1. 访问 netlify.com
# 2. 拖拽文件夹到部署区域
# 3. 获得访问链接
```

## 📝 开发计划

- [ ] 添加更多网站分类
- [ ] 支持多语言
- [ ] 添加网站收藏功能
- [ ] 搜索历史记录
- [ ] 支持其他AI模型（OpenAI、Claude等）
- [ ] 用户可自定义添加网站
- [ ] 深色模式

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📄 许可证

MIT License - 自由使用、修改和分发

## 💬 联系方式

如有问题或建议，欢迎联系！

---

⭐ 如果这个项目对你有帮助，请给个Star！
