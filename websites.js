// 本地网站数据库
const websitesDatabase = [
    // AI聊天助手
    {
        name: "ChatGPT",
        url: "https://chat.openai.com",
        description: "OpenAI开发的强大AI对话助手，可以回答问题、写作、编程等",
        category: "AI聊天助手",
        tags: ["AI", "对话", "聊天", "写作", "编程"]
    },
    {
        name: "Claude",
        url: "https://claude.ai",
        description: "Anthropic开发的AI助手，擅长长文本分析和深度对话",
        category: "AI聊天助手",
        tags: ["AI", "对话", "聊天", "分析", "写作"]
    },
    {
        name: "文心一言",
        url: "https://yiyan.baidu.com",
        description: "百度出品的AI对话助手，中文理解能力强",
        category: "AI聊天助手",
        tags: ["AI", "对话", "聊天", "百度", "中文"]
    },
    {
        name: "通义千问",
        url: "https://tongyi.aliyun.com",
        description: "阿里云AI助手，支持多种应用场景",
        category: "AI聊天助手",
        tags: ["AI", "对话", "聊天", "阿里", "通义"]
    },
    {
        name: "Kimi",
        url: "https://kimi.moonshot.cn",
        description: "月之暗面出品，擅长长文本处理的AI助手",
        category: "AI聊天助手",
        tags: ["AI", "对话", "聊天", "长文本", "Kimi"]
    },
    {
        name: "豆包",
        url: "https://www.doubao.com",
        description: "字节跳动AI助手，智能对话和创作",
        category: "AI聊天助手",
        tags: ["AI", "对话", "聊天", "字节", "豆包"]
    },
    
    // AI写作工具
    {
        name: "Notion AI",
        url: "https://www.notion.so/product/ai",
        description: "Notion内置AI写作助手，智能文档创作",
        category: "AI写作工具",
        tags: ["AI", "写作", "文档", "创作"]
    },
    {
        name: "秘塔写作猫",
        url: "https://xiezuocat.com",
        description: "AI写作助手，中文纠错、改写、续写",
        category: "AI写作工具",
        tags: ["AI", "写作", "纠错", "改写", "中文"]
    },
    {
        name: "Jasper AI",
        url: "https://www.jasper.ai",
        description: "专业AI内容创作平台，营销文案生成",
        category: "AI写作工具",
        tags: ["AI", "写作", "文案", "营销"]
    },
    
    // AI图像工具
    {
        name: "Midjourney",
        url: "https://www.midjourney.com",
        description: "强大的AI绘画工具，通过文字描述生成精美图片",
        category: "AI图像工具",
        tags: ["AI", "绘画", "作图", "图片生成"]
    },
    {
        name: "Stable Diffusion",
        url: "https://stablediffusionweb.com",
        description: "开源的AI图像生成工具，免费使用",
        category: "AI图像工具",
        tags: ["AI", "绘画", "作图", "开源", "图片生成"]
    },
    {
        name: "DALL-E",
        url: "https://openai.com/dall-e-3",
        description: "OpenAI的AI图像生成工具，高质量图片创作",
        category: "AI图像工具",
        tags: ["AI", "绘画", "图片生成", "OpenAI"]
    },
    {
        name: "文心一格",
        url: "https://yige.baidu.com",
        description: "百度AI绘画平台，中文提示词友好",
        category: "AI图像工具",
        tags: ["AI", "绘画", "图片生成", "百度"]
    },
    {
        name: "通义万相",
        url: "https://tongyi.aliyun.com/wanxiang",
        description: "阿里云AI图像生成工具",
        category: "AI图像工具",
        tags: ["AI", "绘画", "图片生成", "阿里"]
    },
    {
        name: "Remove.bg",
        url: "https://www.remove.bg",
        description: "AI自动抠图工具，一键去除图片背景",
        category: "AI图像工具",
        tags: ["抠图", "去背景", "图片处理", "AI", "背景移除"]
    },
    {
        name: "稿定抠图",
        url: "https://www.gaoding.com/koutu",
        description: "智能AI抠图工具，支持批量处理",
        category: "AI图像工具",
        tags: ["抠图", "去背景", "批量处理", "AI"]
    },
    {
        name: "Cleanup.pictures",
        url: "https://cleanup.pictures",
        description: "AI智能去除图片中不需要的物体和水印",
        category: "AI图像工具",
        tags: ["去水印", "物体擦除", "图片修复", "AI"]
    },
    {
        name: "Bigjpg",
        url: "https://bigjpg.com",
        description: "AI图片无损放大工具，提升图片分辨率",
        category: "AI图像工具",
        tags: ["图片放大", "无损", "AI", "高清"]
    },
    {
        name: "Photopea",
        url: "https://www.photopea.com",
        description: "在线版Photoshop，功能强大的图片编辑器",
        category: "AI图像工具",
        tags: ["图片编辑", "PS", "在线编辑"]
    },
    {
        name: "Leonardo AI",
        url: "https://leonardo.ai",
        description: "专业AI图像生成工具，游戏和设计资产创作",
        category: "AI图像工具",
        tags: ["AI", "绘画", "游戏设计", "图片生成"]
    },
    {
        name: "Ideogram",
        url: "https://ideogram.ai",
        description: "AI图像生成，特别擅长文字渲染",
        category: "AI图像工具",
        tags: ["AI", "绘画", "文字生成", "海报"]
    },
    {
        name: "Flux AI",
        url: "https://flux1.ai",
        description: "Black Forest Labs开发的新一代AI图像生成模型",
        category: "AI图像工具",
        tags: ["AI", "绘画", "图片生成", "开源"]
    },
    
    // AI视频工具
    {
        name: "剪映",
        url: "https://www.capcut.cn",
        description: "抖音官方视频剪辑工具，AI智能剪辑",
        category: "AI视频工具",
        tags: ["视频剪辑", "AI", "抖音", "短视频"]
    },
    {
        name: "Runway",
        url: "https://runwayml.com",
        description: "AI视频编辑平台，文字生成视频",
        category: "AI视频工具",
        tags: ["AI", "视频生成", "视频编辑", "创作"]
    },
    {
        name: "Sora",
        url: "https://openai.com/sora",
        description: "OpenAI文生视频模型，AI视频生成",
        category: "AI视频工具",
        tags: ["AI", "视频生成", "OpenAI", "文生视频"]
    },
    {
        name: "必剪",
        url: "https://bcut.bilibili.cn",
        description: "B站官方剪辑工具，智能字幕识别",
        category: "AI视频工具",
        tags: ["视频剪辑", "字幕", "B站"]
    },
    {
        name: "HeyGen",
        url: "https://www.heygen.com",
        description: "AI数字人视频生成平台，多语言配音",
        category: "AI视频工具",
        tags: ["AI", "数字人", "视频生成", "配音"]
    },
    {
        name: "D-ID",
        url: "https://www.d-id.com",
        description: "AI数字人视频制作，照片说话",
        category: "AI视频工具",
        tags: ["AI", "数字人", "视频生成", "照片说话"]
    },
    {
        name: "Pika Labs",
        url: "https://pika.art",
        description: "AI视频生成和编辑工具",
        category: "AI视频工具",
        tags: ["AI", "视频生成", "视频编辑"]
    },
    
    // AI音频工具
    {
        name: "Suno AI",
        url: "https://suno.ai",
        description: "AI音乐生成工具，文字生成音乐",
        category: "AI音频工具",
        tags: ["AI", "音乐生成", "作曲", "创作"]
    },
    {
        name: "剪映语音",
        url: "https://www.capcut.cn",
        description: "AI文字转语音，多种音色选择",
        category: "AI音频工具",
        tags: ["AI", "语音合成", "配音", "TTS"]
    },
    {
        name: "讯飞语音",
        url: "https://www.xfyun.cn",
        description: "科大讯飞语音识别和合成平台",
        category: "AI音频工具",
        tags: ["AI", "语音识别", "语音合成", "讯飞"]
    },
    {
        name: "Eleven Labs",
        url: "https://elevenlabs.io",
        description: "AI语音克隆和文本转语音，支持多语言",
        category: "AI音频工具",
        tags: ["AI", "语音克隆", "TTS", "配音"]
    },
    {
        name: "Murf AI",
        url: "https://murf.ai",
        description: "AI语音生成器，专业配音工具",
        category: "AI音频工具",
        tags: ["AI", "配音", "TTS", "语音生成"]
    },
    {
        name: "Udio",
        url: "https://www.udio.com",
        description: "AI音乐生成工具，创作原创音乐",
        category: "AI音频工具",
        tags: ["AI", "音乐生成", "作曲", "原创"]
    },
    
    // AI编程工具
    {
        name: "GitHub Copilot",
        url: "https://github.com/features/copilot",
        description: "GitHub AI代码助手，智能代码补全",
        category: "AI编程工具",
        tags: ["AI", "编程", "代码", "GitHub", "辅助"]
    },
    {
        name: "Cursor",
        url: "https://cursor.sh",
        description: "AI驱动的代码编辑器，智能编程助手",
        category: "AI编程工具",
        tags: ["AI", "编程", "IDE", "代码编辑"]
    },
    {
        name: "通义灵码",
        url: "https://tongyi.aliyun.com/lingma",
        description: "阿里云AI编程助手",
        category: "AI编程工具",
        tags: ["AI", "编程", "代码", "阿里"]
    },
    {
        name: "Replit AI",
        url: "https://replit.com",
        description: "在线AI编程平台，智能代码生成",
        category: "AI编程工具",
        tags: ["AI", "编程", "在线IDE", "代码生成"]
    },
    {
        name: "Codeium",
        url: "https://codeium.com",
        description: "免费AI代码助手，支持多种IDE",
        category: "AI编程工具",
        tags: ["AI", "编程", "代码补全", "免费"]
    },
    {
        name: "Tabnine",
        url: "https://www.tabnine.com",
        description: "AI代码补全工具，提升编程效率",
        category: "AI编程工具",
        tags: ["AI", "编程", "代码补全", "IDE插件"]
    },
    {
        name: "Bolt.new",
        url: "https://bolt.new",
        description: "AI全栈开发工具，快速构建Web应用",
        category: "AI编程工具",
        tags: ["AI", "全栈", "Web开发", "快速开发"]
    },
    
    // AI设计工具
    {
        name: "Canva AI",
        url: "https://www.canva.com",
        description: "AI设计工具，智能设计模板生成",
        category: "AI设计工具",
        tags: ["AI", "设计", "海报", "模板"]
    },
    {
        name: "Figma AI",
        url: "https://www.figma.com",
        description: "专业UI设计工具，AI辅助设计",
        category: "AI设计工具",
        tags: ["AI", "UI设计", "原型", "协作"]
    },
    {
        name: "即时设计",
        url: "https://js.design",
        description: "国产UI设计工具，AI设计助手",
        category: "AI设计工具",
        tags: ["AI", "UI设计", "原型", "协作", "国产"]
    },
    
    // AI办公工具
    {
        name: "WPS AI",
        url: "https://www.wps.cn",
        description: "WPS内置AI助手，智能文档处理",
        category: "AI办公工具",
        tags: ["AI", "办公", "文档", "WPS"]
    },
    {
        name: "ChatPPT",
        url: "https://chat-ppt.com",
        description: "AI生成PPT，一键创建演示文稿",
        category: "AI办公工具",
        tags: ["AI", "PPT", "演示", "自动生成"]
    },
    {
        name: "ChatExcel",
        url: "https://chatexcel.com",
        description: "AI表格处理助手，自然语言操作Excel",
        category: "AI办公工具",
        tags: ["AI", "Excel", "表格", "数据处理"]
    },
    {
        name: "讯飞听见",
        url: "https://www.iflyrec.com",
        description: "AI会议转写工具，实时语音转文字",
        category: "AI办公工具",
        tags: ["AI", "转写", "会议", "语音识别"]
    },
    {
        name: "DeepL",
        url: "https://www.deepl.com",
        description: "AI翻译工具，翻译质量高",
        category: "AI办公工具",
        tags: ["AI", "翻译", "多语言", "准确"]
    },
    {
        name: "彩云小译",
        url: "https://fanyi.caiyunapp.com",
        description: "AI翻译工具，支持网页实时翻译",
        category: "AI办公工具",
        tags: ["AI", "翻译", "网页翻译", "实时"]
    },
    
    // AI搜索引擎
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai",
        description: "AI搜索引擎，智能问答和信息检索",
        category: "AI搜索引擎",
        tags: ["AI", "搜索", "问答", "智能"]
    },
    {
        name: "秘塔AI搜索",
        url: "https://metaso.cn",
        description: "国产AI搜索引擎，无广告纯净搜索",
        category: "AI搜索引擎",
        tags: ["AI", "搜索", "无广告", "国产"]
    },
    {
        name: "天工AI",
        url: "https://www.tiangong.cn",
        description: "昆仑万维AI搜索和对话",
        category: "AI搜索引擎",
        tags: ["AI", "搜索", "对话", "国产"]
    },
    
    // 搜索引擎
    {
        name: "百度",
        url: "https://www.baidu.com",
        description: "中国最大的搜索引擎",
        category: "搜索引擎",
        tags: ["搜索", "百度", "查找"]
    },
    {
        name: "Google",
        url: "https://www.google.com",
        description: "全球最大的搜索引擎",
        category: "搜索引擎",
        tags: ["搜索", "谷歌", "Google"]
    },
    {
        name: "必应",
        url: "https://www.bing.com",
        description: "微软搜索引擎",
        category: "搜索引擎",
        tags: ["搜索", "必应", "Bing"]
    },
    {
        name: "搜狗搜索",
        url: "https://www.sogou.com",
        description: "搜狗搜索引擎，擅长微信搜索",
        category: "搜索引擎",
        tags: ["搜索", "搜狗", "微信"]
    },
    
    // 在线办公
    {
        name: "石墨文档",
        url: "https://shimo.im",
        description: "国内领先的在线协作文档工具",
        category: "在线办公",
        tags: ["文档", "协作", "办公"]
    },
    {
        name: "腾讯文档",
        url: "https://docs.qq.com",
        description: "腾讯出品的在线文档，支持多人协作",
        category: "在线办公",
        tags: ["文档", "协作", "办公", "表格"]
    },
    {
        name: "飞书文档",
        url: "https://www.feishu.cn",
        description: "字节跳动的协作平台，功能强大",
        category: "在线办公",
        tags: ["文档", "协作", "办公", "团队"]
    },
    {
        name: "钉钉",
        url: "https://www.dingtalk.com",
        description: "阿里巴巴企业协作平台，智能办公",
        category: "在线办公",
        tags: ["办公", "协作", "企业", "钉钉"]
    },
    {
        name: "企业微信",
        url: "https://work.weixin.qq.com",
        description: "微信官方企业办公平台",
        category: "在线办公",
        tags: ["办公", "企业微信", "协作", "微信"]
    },
    
    // 设计与创意
    {
        name: "Canva",
        url: "https://www.canva.com",
        description: "简单易用的在线设计工具，海量模板",
        category: "设计与创意",
        tags: ["设计", "海报", "模板", "作图"]
    },
    {
        name: "创客贴",
        url: "https://www.chuangkit.com",
        description: "国内优秀的平面设计工具，丰富模板",
        category: "设计与创意",
        tags: ["设计", "海报", "模板", "作图"]
    },
    {
        name: "Unsplash",
        url: "https://unsplash.com",
        description: "高质量免费图片素材库",
        category: "设计与创意",
        tags: ["图片", "素材", "免费", "高清"]
    },
    {
        name: "Pexels",
        url: "https://www.pexels.com",
        description: "免费高清图片和视频素材",
        category: "设计与创意",
        tags: ["图片", "视频", "素材", "免费"]
    },
    {
        name: "站酷",
        url: "https://www.zcool.com.cn",
        description: "中国设计师互动平台，作品展示与交流",
        category: "设计与创意",
        tags: ["设计", "作品", "灵感", "素材"]
    },
    {
        name: "Dribbble",
        url: "https://dribbble.com",
        description: "全球设计师作品展示平台，寻找灵感",
        category: "设计与创意",
        tags: ["设计", "灵感", "UI", "作品"]
    },
    {
        name: "Behance",
        url: "https://www.behance.net",
        description: "Adobe旗下创意作品展示平台",
        category: "设计与创意",
        tags: ["设计", "作品", "创意", "Adobe"]
    },
    {
        name: "花瓣网",
        url: "https://huaban.com",
        description: "图片采集工具，设计师灵感库",
        category: "设计与创意",
        tags: ["设计", "采集", "灵感", "素材"]
    },
    
    // 程序开发
    {
        name: "GitHub",
        url: "https://github.com",
        description: "全球最大的代码托管平台",
        category: "程序开发",
        tags: ["代码", "编程", "开源", "Git"]
    },
    {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "程序员问答社区",
        category: "程序开发",
        tags: ["编程", "问答", "开发"]
    },
    {
        name: "CodePen",
        url: "https://codepen.io",
        description: "在线前端代码编辑器和社区",
        category: "程序开发",
        tags: ["前端", "代码", "在线编辑"]
    },
    {
        name: "Gitee",
        url: "https://gitee.com",
        description: "国内代码托管平台，访问速度快",
        category: "程序开发",
        tags: ["代码", "Git", "开源", "国内"]
    },
    {
        name: "掘金",
        url: "https://juejin.cn",
        description: "技术社区，开发者成长平台",
        category: "程序开发",
        tags: ["技术", "社区", "文章", "前端"]
    },
    {
        name: "CSDN",
        url: "https://www.csdn.net",
        description: "中国最大的IT技术社区",
        category: "程序开发",
        tags: ["技术", "博客", "编程", "问答"]
    },
    {
        name: "LeetCode",
        url: "https://leetcode.cn",
        description: "算法题库，程序员刷题平台",
        category: "程序开发",
        tags: ["算法", "刷题", "面试", "编程"]
    },
    {
        name: "Replit",
        url: "https://replit.com",
        description: "在线编程IDE，支持多种语言",
        category: "程序开发",
        tags: ["在线编程", "IDE", "代码"]
    },
    
    // 产品与运营
    {
        name: "人人都是产品经理",
        url: "https://www.woshipm.com",
        description: "产品经理学习社区，行业资讯与经验分享",
        category: "产品与运营",
        tags: ["产品", "运营", "社区", "学习"]
    },
    {
        name: "36氪",
        url: "https://36kr.com",
        description: "科技创投媒体，关注创业与创新",
        category: "产品与运营",
        tags: ["科技", "创业", "资讯", "投资"]
    },
    {
        name: "虎嗅",
        url: "https://www.huxiu.com",
        description: "商业资讯平台，深度科技报道",
        category: "产品与运营",
        tags: ["商业", "科技", "资讯", "分析"]
    },
    {
        name: "Product Hunt",
        url: "https://www.producthunt.com",
        description: "发现全球最新产品和工具",
        category: "产品与运营",
        tags: ["产品", "工具", "发现", "国际"]
    },
    {
        name: "增长黑客",
        url: "https://growthhackers.com",
        description: "用户增长策略与案例分享",
        category: "产品与运营",
        tags: ["增长", "运营", "营销", "策略"]
    },
    
    // 学习与知识
    {
        name: "Coursera",
        url: "https://www.coursera.org",
        description: "全球顶尖大学在线课程平台",
        category: "学习与知识",
        tags: ["学习", "课程", "教育"]
    },
    {
        name: "B站",
        url: "https://www.bilibili.com",
        description: "学习娱乐两不误的视频平台",
        category: "学习与知识",
        tags: ["视频", "学习", "教程", "娱乐"]
    },
    {
        name: "知乎",
        url: "https://www.zhihu.com",
        description: "中文互联网高质量问答社区",
        category: "学习与知识",
        tags: ["问答", "知识", "社区", "学习"]
    },
    {
        name: "维基百科",
        url: "https://zh.wikipedia.org",
        description: "自由的百科全书，全球知识库",
        category: "学习与知识",
        tags: ["百科", "知识", "查询", "学习"]
    },
    {
        name: "中国大学MOOC",
        url: "https://www.icourse163.org",
        description: "国内优质大学课程在线学习平台",
        category: "学习与知识",
        tags: ["课程", "大学", "MOOC", "学习"]
    },
    {
        name: "得到",
        url: "https://www.igetget.com",
        description: "罗振宇创办的知识服务平台",
        category: "学习与知识",
        tags: ["知识", "课程", "听书", "学习"]
    },
    {
        name: "网易公开课",
        url: "https://open.163.com",
        description: "免费的国内外名校公开课",
        category: "学习与知识",
        tags: ["公开课", "大学", "免费", "学习"]
    },
    {
        name: "豆瓣",
        url: "https://www.douban.com",
        description: "书影音记录与评分平台",
        category: "学习与知识",
        tags: ["读书", "电影", "音乐", "评分"]
    },
    
    // 效率工具
    {
        name: "Notion",
        url: "https://www.notion.so",
        description: "全能笔记和协作工具",
        category: "效率工具",
        tags: ["笔记", "知识管理", "协作"]
    },
    {
        name: "语雀",
        url: "https://www.yuque.com",
        description: "阿里巴巴出品的文档与知识库工具",
        category: "效率工具",
        tags: ["文档", "知识库", "笔记"]
    },
    {
        name: "PDF.ai",
        url: "https://pdf.ai",
        description: "AI驱动的PDF阅读和对话工具",
        category: "效率工具",
        tags: ["PDF", "AI", "文档分析"]
    },
    
    // 电商工具
    {
        name: "淘宝",
        url: "https://www.taobao.com",
        description: "中国最大的网购平台，万能的淘宝",
        category: "电商工具",
        tags: ["淘宝", "购物", "网购", "电商"]
    },
    {
        name: "天猫",
        url: "https://www.tmall.com",
        description: "阿里巴巴B2C平台，品牌商城",
        category: "电商工具",
        tags: ["天猫", "购物", "品牌", "电商"]
    },
    {
        name: "京东",
        url: "https://www.jd.com",
        description: "综合性购物平台，自营物流快",
        category: "电商工具",
        tags: ["京东", "购物", "电商", "自营"]
    },
    {
        name: "速卖通",
        url: "https://www.aliexpress.com",
        description: "阿里巴巴旗下跨境电商平台，面向全球市场",
        category: "电商工具",
        tags: ["速卖通", "跨境电商", "电商平台", "阿里巴巴", "全球开店"]
    },
    {
        name: "亚马逊全球开店",
        url: "https://gs.amazon.cn",
        description: "亚马逊跨境电商卖家平台，进入全球市场",
        category: "电商工具",
        tags: ["亚马逊", "跨境电商", "电商平台", "全球开店", "Amazon"]
    },
    {
        name: "Shopify",
        url: "https://www.shopify.com",
        description: "全球领先的独立站建站平台，轻松搭建电商网站",
        category: "电商工具",
        tags: ["独立站", "建站", "电商平台", "Shopify", "跨境电商"]
    },
    {
        name: "1688",
        url: "https://www.1688.com",
        description: "阿里巴巴B2B批发平台，一件代发货源",
        category: "电商工具",
        tags: ["批发", "货源", "1688", "阿里巴巴", "一件代发"]
    },
    {
        name: "Wish商户平台",
        url: "https://merchant.wish.com",
        description: "移动电商平台Wish卖家后台",
        category: "电商工具",
        tags: ["Wish", "跨境电商", "移动电商", "电商平台"]
    },
    {
        name: "eBay",
        url: "https://www.ebay.com",
        description: "全球知名在线拍卖和购物网站",
        category: "电商工具",
        tags: ["eBay", "跨境电商", "拍卖", "电商平台"]
    },
    {
        name: "Etsy",
        url: "https://www.etsy.com",
        description: "手工艺品和复古商品交易平台",
        category: "电商工具",
        tags: ["Etsy", "手工", "创意", "电商平台", "跨境电商"]
    },
    {
        name: "拼多多商家版",
        url: "https://mms.pinduoduo.com",
        description: "拼多多商家管理后台",
        category: "电商工具",
        tags: ["拼多多", "电商", "社交电商", "开店"]
    },
    {
        name: "抖音电商",
        url: "https://fxg.jinritemai.com",
        description: "抖音电商创作者服务平台",
        category: "电商工具",
        tags: ["抖音", "电商", "直播带货", "短视频"]
    },
    
    // 社交娱乐
    {
        name: "微信",
        url: "https://weixin.qq.com",
        description: "腾讯即时通讯工具，社交必备",
        category: "社交娱乐",
        tags: ["微信", "社交", "聊天", "腾讯"]
    },
    {
        name: "QQ",
        url: "https://im.qq.com",
        description: "腾讯经典即时通讯软件",
        category: "社交娱乐",
        tags: ["QQ", "社交", "聊天", "腾讯"]
    },
    {
        name: "抖音",
        url: "https://www.douyin.com",
        description: "短视频社交平台，记录美好生活",
        category: "社交娱乐",
        tags: ["短视频", "抖音", "娱乐", "社交"]
    },
    {
        name: "小红书",
        url: "https://www.xiaohongshu.com",
        description: "生活方式分享平台，种草神器",
        category: "社交娱乐",
        tags: ["种草", "分享", "生活", "购物"]
    },
    {
        name: "微博",
        url: "https://weibo.com",
        description: "新浪微博，热点资讯聚集地",
        category: "社交娱乐",
        tags: ["微博", "社交", "热点", "资讯"]
    },
    {
        name: "网易云音乐",
        url: "https://music.163.com",
        description: "在线音乐平台，发现好音乐",
        category: "社交娱乐",
        tags: ["音乐", "歌曲", "听歌", "播放器"]
    },
    {
        name: "QQ音乐",
        url: "https://y.qq.com",
        description: "腾讯音乐娱乐平台",
        category: "社交娱乐",
        tags: ["音乐", "歌曲", "听歌", "腾讯"]
    },
    {
        name: "优酷",
        url: "https://www.youku.com",
        description: "综合视频平台，影视剧综艺",
        category: "社交娱乐",
        tags: ["视频", "影视", "综艺", "电影"]
    },
    {
        name: "爱奇艺",
        url: "https://www.iqiyi.com",
        description: "在线视频平台，热门影视剧",
        category: "社交娱乐",
        tags: ["视频", "影视", "电影", "综艺"]
    },
    
    // 生活服务
    {
        name: "美团",
        url: "https://www.meituan.com",
        description: "本地生活服务平台，吃喝玩乐全都有",
        category: "生活服务",
        tags: ["外卖", "团购", "生活", "服务"]
    },
    {
        name: "饿了么",
        url: "https://www.ele.me",
        description: "在线外卖订餐平台",
        category: "生活服务",
        tags: ["外卖", "订餐", "美食", "配送"]
    },
    {
        name: "大众点评",
        url: "https://www.dianping.com",
        description: "本地生活信息及交易平台",
        category: "生活服务",
        tags: ["点评", "美食", "生活", "团购"]
    },
    {
        name: "携程",
        url: "https://www.ctrip.com",
        description: "在线旅游服务平台，订票订酒店",
        category: "生活服务",
        tags: ["旅游", "酒店", "机票", "火车票"]
    },
    {
        name: "12306",
        url: "https://www.12306.cn",
        description: "中国铁路客户服务中心，火车票官网",
        category: "生活服务",
        tags: ["火车票", "高铁", "铁路", "购票"]
    },
    {
        name: "高德地图",
        url: "https://www.amap.com",
        description: "专业的手机地图，智能导航",
        category: "生活服务",
        tags: ["地图", "导航", "出行", "路线"]
    },
    {
        name: "百度地图",
        url: "https://map.baidu.com",
        description: "百度地图，出行好帮手",
        category: "生活服务",
        tags: ["地图", "导航", "出行", "百度"]
    },
    {
        name: "天气预报",
        url: "https://www.weather.com.cn",
        description: "中国天气网，权威天气预报",
        category: "生活服务",
        tags: ["天气", "预报", "气象", "查询"]
    },
    
    // 新闻资讯
    {
        name: "新华网",
        url: "https://www.xinhuanet.com",
        description: "新华通讯社官网，权威新闻",
        category: "新闻资讯",
        tags: ["新闻", "资讯", "时政", "权威"]
    },
    {
        name: "人民网",
        url: "https://www.people.com.cn",
        description: "人民日报官方网站",
        category: "新闻资讯",
        tags: ["新闻", "资讯", "时政", "权威"]
    },
    {
        name: "今日头条",
        url: "https://www.toutiao.com",
        description: "个性化推荐资讯平台",
        category: "新闻资讯",
        tags: ["新闻", "资讯", "热点", "推荐"]
    },
    {
        name: "澎湃新闻",
        url: "https://www.thepaper.cn",
        description: "专注时政与思想的新闻平台",
        category: "新闻资讯",
        tags: ["新闻", "时政", "深度", "资讯"]
    },
    {
        name: "腾讯新闻",
        url: "https://news.qq.com",
        description: "腾讯新闻客户端，实时热点",
        category: "新闻资讯",
        tags: ["新闻", "资讯", "腾讯", "热点"]
    },
    {
        name: "网易新闻",
        url: "https://news.163.com",
        description: "网易新闻中心，有态度的新闻",
        category: "新闻资讯",
        tags: ["新闻", "资讯", "网易", "热点"]
    },
    
    // 金融投资
    {
        name: "同花顺",
        url: "https://www.10jqka.com.cn",
        description: "专业股票软件，实时行情分析",
        category: "金融投资",
        tags: ["股票", "炒股", "行情", "分析"]
    },
    {
        name: "东方财富",
        url: "https://www.eastmoney.com",
        description: "财经资讯门户，股票行情查询",
        category: "金融投资",
        tags: ["财经", "股票", "基金", "行情"]
    },
    {
        name: "雪球",
        url: "https://xueqiu.com",
        description: "投资者社交网络，交流投资心得",
        category: "金融投资",
        tags: ["投资", "股票", "社区", "交流"]
    },
    {
        name: "天天基金",
        url: "https://fund.eastmoney.com",
        description: "基金交易平台，基金数据查询",
        category: "金融投资",
        tags: ["基金", "理财", "投资", "数据"]
    },
    {
        name: "支付宝",
        url: "https://www.alipay.com",
        description: "蚂蚁集团支付平台，生活缴费理财",
        category: "金融投资",
        tags: ["支付", "理财", "基金", "生活"]
    },
    {
        name: "微信支付",
        url: "https://pay.weixin.qq.com",
        description: "腾讯支付平台",
        category: "金融投资",
        tags: ["支付", "微信", "转账", "收款"]
    },
    {
        name: "银行汇率网",
        url: "https://www.chinamoney.com.cn",
        description: "外汇牌价查询，汇率转换",
        category: "金融投资",
        tags: ["汇率", "外汇", "银行", "查询"]
    },

    // 跨境电商-选品工具
    {
        name: "Jungle Scout",
        url: "https://www.junglescout.com",
        description: "亚马逊选品神器，销量预估和产品研究",
        category: "跨境选品工具",
        tags: ["亚马逊", "选品", "数据分析", "卖家工具"]
    },
    {
        name: "Helium 10",
        url: "https://www.helium10.com",
        description: "亚马逊卖家全能工具，选品、关键词、运营",
        category: "跨境选品工具",
        tags: ["亚马逊", "选品", "关键词", "运营"]
    },
    {
        name: "卖家精灵",
        url: "https://www.sellersprite.com",
        description: "亚马逊大数据选品工具，中文界面友好",
        category: "跨境选品工具",
        tags: ["亚马逊", "选品", "数据", "中文"]
    },
    {
        name: "AMZScout",
        url: "https://amzscout.net",
        description: "亚马逊产品研究和销量追踪工具",
        category: "跨境选品工具",
        tags: ["亚马逊", "选品", "销量", "追踪"]
    },
    {
        name: "Google Trends",
        url: "https://trends.google.com",
        description: "谷歌趋势分析，了解产品搜索热度",
        category: "跨境选品工具",
        tags: ["谷歌", "趋势", "搜索", "分析"]
    },

    // 跨境电商-关键词工具
    {
        name: "Ahrefs",
        url: "https://ahrefs.com",
        description: "专业SEO工具，关键词研究和竞品分析",
        category: "跨境关键词工具",
        tags: ["SEO", "关键词", "外链", "竞品"]
    },
    {
        name: "SEMrush",
        url: "https://www.semrush.com",
        description: "全能数字营销工具，SEO和广告分析",
        category: "跨境关键词工具",
        tags: ["SEO", "关键词", "广告", "营销"]
    },
    {
        name: "Ubersuggest",
        url: "https://neilpatel.com/ubersuggest",
        description: "免费关键词建议和SEO分析工具",
        category: "跨境关键词工具",
        tags: ["关键词", "SEO", "免费", "分析"]
    },
    {
        name: "Keyword Tool",
        url: "https://keywordtool.io",
        description: "基于Google自动补全的关键词工具",
        category: "跨境关键词工具",
        tags: ["关键词", "谷歌", "长尾词", "建议"]
    },

    // 跨境电商-广告平台
    {
        name: "Google Ads",
        url: "https://ads.google.com",
        description: "谷歌广告平台，搜索和展示广告",
        category: "跨境广告平台",
        tags: ["谷歌", "广告", "SEM", "投放"]
    },
    {
        name: "Facebook Ads",
        url: "https://www.facebook.com/business/ads",
        description: "Facebook广告管理平台，社交媒体营销",
        category: "跨境广告平台",
        tags: ["Facebook", "广告", "社交", "营销"]
    },
    {
        name: "TikTok Ads",
        url: "https://ads.tiktok.com",
        description: "TikTok广告平台，短视频营销",
        category: "跨境广告平台",
        tags: ["TikTok", "广告", "短视频", "营销"]
    },
    {
        name: "Pinterest Ads",
        url: "https://ads.pinterest.com",
        description: "Pinterest广告平台，视觉内容营销",
        category: "跨境广告平台",
        tags: ["Pinterest", "广告", "视觉", "营销"]
    },

    // 跨境电商-建站系统
    {
        name: "WooCommerce",
        url: "https://woocommerce.com",
        description: "WordPress电商插件，免费开源",
        category: "跨境建站系统",
        tags: ["WordPress", "电商", "开源", "插件"]
    },
    {
        name: "Wix",
        url: "https://www.wix.com",
        description: "拖拽式建站平台，简单易用",
        category: "跨境建站系统",
        tags: ["建站", "拖拽", "网站", "模板"]
    },
    {
        name: "Squarespace",
        url: "https://www.squarespace.com",
        description: "专业网站构建平台，设计精美",
        category: "跨境建站系统",
        tags: ["建站", "设计", "网站", "模板"]
    },
    {
        name: "Magento",
        url: "https://magento.com",
        description: "企业级开源电商平台",
        category: "跨境建站系统",
        tags: ["电商", "开源", "企业级", "Magento"]
    },

    // 跨境电商-支付收款
    {
        name: "PayPal",
        url: "https://www.paypal.com",
        description: "全球知名在线支付平台",
        category: "跨境支付收款",
        tags: ["支付", "收款", "PayPal", "国际"]
    },
    {
        name: "Stripe",
        url: "https://stripe.com",
        description: "强大的在线支付处理平台",
        category: "跨境支付收款",
        tags: ["支付", "收款", "Stripe", "API"]
    },
    {
        name: "Payoneer",
        url: "https://www.payoneer.com",
        description: "跨境收款平台，支持多币种",
        category: "跨境支付收款",
        tags: ["收款", "跨境", "多币种", "提现"]
    },
    {
        name: "万里汇",
        url: "https://www.worldfirst.com.cn",
        description: "蚂蚁集团跨境收款服务",
        category: "跨境支付收款",
        tags: ["收款", "跨境", "汇率", "结汇"]
    },
    {
        name: "连连支付",
        url: "https://www.lianlianpay.com",
        description: "跨境电商收款和支付解决方案",
        category: "跨境支付收款",
        tags: ["收款", "支付", "跨境", "电商"]
    },

    // 跨境电商-物流服务
    {
        name: "递四方",
        url: "https://www.4px.com",
        description: "跨境电商物流综合服务商",
        category: "跨境物流服务",
        tags: ["物流", "跨境", "仓储", "配送"]
    },
    {
        name: "燕文物流",
        url: "https://www.yw56.com.cn",
        description: "专业跨境电商物流服务",
        category: "跨境物流服务",
        tags: ["物流", "跨境", "专线", "小包"]
    },
    {
        name: "云途物流",
        url: "https://www.yunexpress.com",
        description: "跨境物流解决方案提供商",
        category: "跨境物流服务",
        tags: ["物流", "跨境", "云途", "专线"]
    },
    {
        name: "DHL",
        url: "https://www.dhl.com",
        description: "国际快递和物流服务",
        category: "跨境物流服务",
        tags: ["快递", "国际", "物流", "DHL"]
    },
    {
        name: "FedEx",
        url: "https://www.fedex.com",
        description: "全球快递物流服务",
        category: "跨境物流服务",
        tags: ["快递", "国际", "物流", "FedEx"]
    },

    // 跨境电商-网红营销
    {
        name: "AspireIQ",
        url: "https://aspireiq.com",
        description: "网红营销平台，连接品牌和创作者",
        category: "跨境网红营销",
        tags: ["网红", "营销", "合作", "创作者"]
    },
    {
        name: "Upfluence",
        url: "https://www.upfluence.com",
        description: "网红营销和联盟营销平台",
        category: "跨境网红营销",
        tags: ["网红", "营销", "联盟", "分析"]
    },
    {
        name: "Grin",
        url: "https://grin.co",
        description: "电商网红营销管理平台",
        category: "跨境网红营销",
        tags: ["网红", "电商", "管理", "营销"]
    },
    {
        name: "NoxInfluencer",
        url: "https://www.noxinfluencer.com",
        description: "YouTube网红数据分析平台",
        category: "跨境网红营销",
        tags: ["YouTube", "网红", "数据", "分析"]
    },

    // 跨境电商-数据分析
    {
        name: "SimilarWeb",
        url: "https://www.similarweb.com",
        description: "网站流量和竞品分析工具",
        category: "跨境数据分析",
        tags: ["流量", "分析", "竞品", "数据"]
    },
    {
        name: "Google Analytics",
        url: "https://analytics.google.com",
        description: "谷歌网站分析工具，追踪用户行为",
        category: "跨境数据分析",
        tags: ["分析", "谷歌", "流量", "用户"]
    },
    {
        name: "Hotjar",
        url: "https://www.hotjar.com",
        description: "用户行为分析和热力图工具",
        category: "跨境数据分析",
        tags: ["热力图", "录屏", "分析", "用户"]
    },
    {
        name: "Mixpanel",
        url: "https://mixpanel.com",
        description: "产品分析平台，追踪用户转化",
        category: "跨境数据分析",
        tags: ["分析", "转化", "用户", "产品"]
    },

    // 跨境电商-邮件营销
    {
        name: "Mailchimp",
        url: "https://mailchimp.com",
        description: "流行的邮件营销自动化平台",
        category: "跨境邮件营销",
        tags: ["邮件", "营销", "自动化", "EDM"]
    },
    {
        name: "Klaviyo",
        url: "https://www.klaviyo.com",
        description: "电商专用邮件和短信营销平台",
        category: "跨境邮件营销",
        tags: ["邮件", "短信", "电商", "营销"]
    },
    {
        name: "Omnisend",
        url: "https://www.omnisend.com",
        description: "多渠道营销自动化平台",
        category: "跨境邮件营销",
        tags: ["邮件", "营销", "自动化", "多渠道"]
    },
    {
        name: "SendGrid",
        url: "https://sendgrid.com",
        description: "邮件发送和营销平台",
        category: "跨境邮件营销",
        tags: ["邮件", "发送", "API", "营销"]
    },

    // 跨境电商-货源平台
    {
        name: "义乌购",
        url: "https://www.yiwugo.com",
        description: "义乌小商品批发市场",
        category: "跨境货源平台",
        tags: ["义乌", "批发", "小商品", "货源"]
    },
    {
        name: "Alibaba",
        url: "https://www.alibaba.com",
        description: "国际版阿里巴巴，B2B批发平台",
        category: "跨境货源平台",
        tags: ["批发", "B2B", "国际", "货源"]
    },
    {
        name: "AliExpress",
        url: "https://www.aliexpress.com",
        description: "速卖通，一件代发货源",
        category: "跨境货源平台",
        tags: ["速卖通", "代发", "货源", "零售"]
    },
    {
        name: "CJ Dropshipping",
        url: "https://cjdropshipping.com",
        description: "专业代发货平台",
        category: "跨境货源平台",
        tags: ["代发", "货源", "仓储", "物流"]
    },

    // 跨境资讯媒体
    {
        name: "雨果跨境",
        url: "https://www.cifnews.com",
        description: "跨境电商行业资讯和学习平台",
        category: "跨境资讯媒体",
        tags: ["资讯", "跨境", "学习", "行业"]
    },
    {
        name: "AMZ123",
        url: "https://www.amz123.com",
        description: "亚马逊卖家导航和资讯",
        category: "跨境资讯媒体",
        tags: ["亚马逊", "导航", "资讯", "工具"]
    },
    {
        name: "AMZ520",
        url: "https://amz520.com",
        description: "亚马逊工具导航网站",
        category: "跨境资讯媒体",
        tags: ["亚马逊", "导航", "工具", "网站"]
    },
    {
        name: "跨境电商鹰熊汇",
        url: "https://www.yingxionghui.com",
        description: "跨境电商知识分享社区",
        category: "跨境资讯媒体",
        tags: ["跨境", "知识", "社区", "分享"]
    },

    // 设计灵感网站
    {
        name: "Pinterest",
        url: "https://www.pinterest.com",
        description: "全世界的设计灵感都在这里",
        category: "设计灵感网站",
        tags: ["设计", "灵感", "图片", "收藏"]
    },
    {
        name: "Awwwards",
        url: "https://www.awwwards.com",
        description: "欧美网页设计欣赏和评选",
        category: "设计灵感网站",
        tags: ["网页", "设计", "欣赏", "获奖"]
    },
    {
        name: "UI中国",
        url: "https://www.ui.cn",
        description: "专业UI设计师交流平台",
        category: "设计灵感网站",
        tags: ["UI", "设计", "交流", "作品"]
    },

    // 设计素材下载
    {
        name: "Freepik",
        url: "https://www.freepik.com",
        description: "百万级矢量素材库",
        category: "设计素材下载",
        tags: ["矢量", "素材", "插画", "图标"]
    },
    {
        name: "Iconfinder",
        url: "https://www.iconfinder.com",
        description: "图标搜索引擎，海量图标资源",
        category: "设计素材下载",
        tags: ["图标", "icon", "搜索", "素材"]
    },
    {
        name: "Flaticon",
        url: "https://www.flaticon.com",
        description: "超900万枚免费图标素材",
        category: "设计素材下载",
        tags: ["图标", "扁平化", "免费", "矢量"]
    },
    {
        name: "阿里图标库",
        url: "https://www.iconfont.cn",
        description: "阿里巴巴矢量图标库",
        category: "设计素材下载",
        tags: ["图标", "矢量", "中文", "免费"]
    },

    // 配色工具
    {
        name: "Coolors",
        url: "https://coolors.co",
        description: "在线配色和配色方案生成",
        category: "设计配色工具",
        tags: ["配色", "颜色", "调色板", "生成"]
    },
    {
        name: "Adobe Color",
        url: "https://color.adobe.com",
        description: "Adobe官方配色工具",
        category: "设计配色工具",
        tags: ["配色", "颜色", "Adobe", "调色"]
    },
    {
        name: "中国传统色",
        url: "http://zhongguose.com",
        description: "中国传统色彩名称和色值",
        category: "设计配色工具",
        tags: ["配色", "中国", "传统", "颜色"]
    },
    {
        name: "日本传统色",
        url: "https://nipponcolors.com",
        description: "日本传统色系展示",
        category: "设计配色工具",
        tags: ["配色", "日本", "传统", "颜色"]
    },
    {
        name: "UI Gradients",
        url: "https://uigradients.com",
        description: "生成美丽的渐变颜色",
        category: "设计配色工具",
        tags: ["渐变", "配色", "颜色", "UI"]
    },

    // 在线设计工具
    {
        name: "稿定设计",
        url: "https://www.gaoding.com",
        description: "在线PS、抠图、作图神器",
        category: "在线设计工具",
        tags: ["设计", "在线", "PS", "抠图"]
    },
    {
        name: "摹客",
        url: "https://www.mockplus.cn",
        description: "产品设计协作平台",
        category: "在线设计工具",
        tags: ["原型", "设计", "协作", "标注"]
    },

    // 字体资源
    {
        name: "Google Fonts",
        url: "https://fonts.google.com",
        description: "谷歌开源字体库",
        category: "设计字体资源",
        tags: ["字体", "免费", "开源", "英文"]
    },
    {
        name: "字体家",
        url: "https://www.zitijia.com",
        description: "万款字体免费下载",
        category: "设计字体资源",
        tags: ["字体", "中文", "下载", "免费"]
    },
    {
        name: "求字体",
        url: "https://www.qiuziti.com",
        description: "通过图片识别字体",
        category: "设计字体资源",
        tags: ["字体", "识别", "搜索", "查找"]
    },
    {
        name: "DaFont",
        url: "https://www.dafont.com",
        description: "大量免费英文字体下载",
        category: "设计字体资源",
        tags: ["字体", "英文", "免费", "下载"]
    },

    // 设计工具软件
    {
        name: "Figma",
        url: "https://www.figma.com",
        description: "协作式界面设计工具",
        category: "设计软件工具",
        tags: ["设计", "协作", "UI", "原型"]
    },
    {
        name: "Sketch",
        url: "https://www.sketch.com",
        description: "Mac平台专业UI设计工具",
        category: "设计软件工具",
        tags: ["设计", "UI", "Mac", "矢量"]
    },
    {
        name: "蓝湖",
        url: "https://lanhuapp.com",
        description: "设计协作平台和标注工具",
        category: "设计软件工具",
        tags: ["协作", "标注", "设计", "团队"]
    },

    // 设计学习平台
    {
        name: "虎课网",
        url: "https://huke88.com",
        description: "设计视频教程学习平台",
        category: "设计学习平台",
        tags: ["教程", "学习", "设计", "视频"]
    },
    {
        name: "优设网",
        url: "https://www.uisdc.com",
        description: "设计师学习平台和资讯网站",
        category: "设计学习平台",
        tags: ["设计", "学习", "教程", "资讯"]
    },
    {
        name: "设计达人",
        url: "https://www.shejidaren.com",
        description: "设计资源和教程分享",
        category: "设计学习平台",
        tags: ["设计", "教程", "资源", "分享"]
    },
    
    // AI检测工具
    {
        name: "GPTZero",
        url: "https://gptzero.me",
        description: "AI内容检测工具，识别AI生成文本",
        category: "AI检测工具",
        tags: ["AI检测", "内容检测", "AI识别"]
    },
    {
        name: "ZeroGPT",
        url: "https://www.zerogpt.com",
        description: "免费AI文本检测器",
        category: "AI检测工具",
        tags: ["AI检测", "文本检测", "免费"]
    },
    {
        name: "Copyleaks",
        url: "https://copyleaks.com",
        description: "AI内容检测和抄袭检查",
        category: "AI检测工具",
        tags: ["AI检测", "抄袭检查", "原创性"]
    },
    
    // 提示词工程
    {
        name: "PromptBase",
        url: "https://promptbase.com",
        description: "AI提示词市场，买卖优质提示词",
        category: "提示词工程",
        tags: ["提示词", "Prompt", "市场", "交易"]
    },
    {
        name: "PromptHero",
        url: "https://prompthero.com",
        description: "AI提示词搜索和分享社区",
        category: "提示词工程",
        tags: ["提示词", "Prompt", "社区", "搜索"]
    },
    {
        name: "FlowGPT",
        url: "https://flowgpt.com",
        description: "AI提示词社区和工具",
        category: "提示词工程",
        tags: ["提示词", "Prompt", "社区", "工具"]
    },
    
    // AI营销工具
    {
        name: "Jasper",
        url: "https://www.jasper.ai",
        description: "AI营销文案生成工具",
        category: "AI营销工具",
        tags: ["AI", "营销", "文案", "广告"]
    },
    {
        name: "Copy.ai",
        url: "https://www.copy.ai",
        description: "AI文案创作和营销工具",
        category: "AI营销工具",
        tags: ["AI", "文案", "营销", "创作"]
    },
    {
        name: "Simplified",
        url: "https://simplified.com",
        description: "AI设计和营销一体化平台",
        category: "AI营销工具",
        tags: ["AI", "营销", "设计", "多合一"]
    },
    
    // AI数据分析
    {
        name: "Julius AI",
        url: "https://julius.ai",
        description: "AI数据分析助手，智能数据洞察",
        category: "AI数据分析",
        tags: ["AI", "数据分析", "商业智能", "洞察"]
    },
    {
        name: "DataRobot",
        url: "https://www.datarobot.com",
        description: "企业级AI和机器学习平台",
        category: "AI数据分析",
        tags: ["AI", "机器学习", "企业", "数据"]
    },
    {
        name: "Tableau",
        url: "https://www.tableau.com",
        description: "数据可视化和商业智能工具",
        category: "AI数据分析",
        tags: ["数据可视化", "商业智能", "分析"]
    },
    
    // AI客服
    {
        name: "Tidio",
        url: "https://www.tidio.com",
        description: "AI客服聊天机器人",
        category: "AI客服",
        tags: ["AI", "客服", "聊天机器人", "自动化"]
    },
    {
        name: "Intercom",
        url: "https://www.intercom.com",
        description: "智能客户服务平台",
        category: "AI客服",
        tags: ["AI", "客服", "CRM", "沟通"]
    },
    {
        name: "美洽",
        url: "https://meiqia.com",
        description: "国产智能客服系统",
        category: "AI客服",
        tags: ["AI", "客服", "国产", "智能"]
    },
    
    // AI教育
    {
        name: "Khan Academy",
        url: "https://www.khanacademy.org",
        description: "在线教育平台，AI个性化学习",
        category: "AI教育",
        tags: ["AI", "教育", "在线学习", "个性化"]
    },
    {
        name: "Duolingo",
        url: "https://www.duolingo.com",
        description: "AI语言学习应用",
        category: "AI教育",
        tags: ["AI", "语言学习", "教育", "应用"]
    },
    {
        name: "作业帮",
        url: "https://www.zybang.com",
        description: "在线作业辅导和学习工具",
        category: "AI教育",
        tags: ["AI", "教育", "作业", "辅导"]
    },
    
    // 3D建模
    {
        name: "Meshy",
        url: "https://www.meshy.ai",
        description: "AI文本生成3D模型",
        category: "3D建模",
        tags: ["AI", "3D", "建模", "生成"]
    },
    {
        name: "Spline",
        url: "https://spline.design",
        description: "在线3D设计工具",
        category: "3D建模",
        tags: ["3D", "设计", "在线", "建模"]
    },
    {
        name: "Luma AI",
        url: "https://lumalabs.ai",
        description: "AI 3D捕捉和生成",
        category: "3D建模",
        tags: ["AI", "3D", "扫描", "生成"]
    },

    // 广告营销资讯
    {
        name: "数英",
        url: "https://www.digitaling.com",
        description: "中国数字整合营销资讯平台",
        category: "广告营销资讯",
        tags: ["营销", "广告", "创意", "资讯"]
    },
    {
        name: "SocialBeta",
        url: "https://socialbeta.com",
        description: "领先的社交媒体和数字营销内容平台",
        category: "广告营销资讯",
        tags: ["社交媒体", "营销", "品牌", "案例"]
    },
    {
        name: "梅花网",
        url: "https://www.meihua.info",
        description: "营销者的信息中心",
        category: "广告营销资讯",
        tags: ["营销", "广告", "品牌", "电商"]
    },
    {
        name: "广告门",
        url: "https://www.adquan.com",
        description: "广告营销行业媒体平台",
        category: "广告营销资讯",
        tags: ["广告", "营销", "创意", "行业"]
    },
    {
        name: "TOPYS",
        url: "https://www.topys.cn",
        description: "全球顶尖创意分享平台",
        category: "广告营销资讯",
        tags: ["创意", "设计", "广告", "灵感"]
    },
    {
        name: "Campaign中国",
        url: "https://www.campaignchina.com",
        description: "致力于亚太地区的商业传播服务",
        category: "广告营销资讯",
        tags: ["广告", "营销", "品牌", "国际"]
    },

    // 创意视频平台
    {
        name: "V电影",
        url: "https://www.vmovier.com",
        description: "高品质短片分享平台",
        category: "创意视频平台",
        tags: ["视频", "短片", "创意", "广告"]
    },
    {
        name: "新片场",
        url: "https://www.xinpianchang.com",
        description: "专业的影视创作人社区",
        category: "创意视频平台",
        tags: ["视频", "影视", "创作", "社区"]
    },
    {
        name: "开眼",
        url: "https://www.kaiyanapp.com",
        description: "每日精选创意视频",
        category: "创意视频平台",
        tags: ["视频", "创意", "精选", "短片"]
    },

    // 广告创意奖项
    {
        name: "戛纳国际创意节",
        url: "https://www.canneslions.com",
        description: "广告界的奥斯卡，全球最高创意奖项",
        category: "广告创意奖项",
        tags: ["奖项", "创意", "广告", "国际"]
    },
    {
        name: "金投赏",
        url: "http://www.roifestival.com",
        description: "中国商业创意奖项",
        category: "广告创意奖项",
        tags: ["奖项", "创意", "商业", "中国"]
    },
    {
        name: "D&AD",
        url: "https://www.dandad.org",
        description: "全球创意广告设计协会",
        category: "广告创意奖项",
        tags: ["奖项", "设计", "广告", "黄铅笔"]
    },
    
    // 创意设计公司
    {
        name: "天与空",
        url: "http://www.tianyukong.com",
        description: "跨越一切沟通平台的创意公司",
        category: "创意设计公司",
        tags: ["广告", "创意", "设计", "传播"]
    },
    {
        name: "KARMA 颉摩广告",
        url: "http://www.karmais.me",
        description: "我们相信，创意就是影响世界的力量",
        category: "创意设计公司",
        tags: ["广告", "创意", "设计", "影响力"]
    },
    {
        name: "GOODZILLA 意类广告",
        url: "http://www.goodzilla.cn",
        description: "我们是互联网整合营销专家",
        category: "创意设计公司",
        tags: ["广告", "互联网", "营销", "整合"]
    },
    {
        name: "neone 有门互动",
        url: "http://www.neone.com.cn",
        description: "广告有门，创意无门",
        category: "创意设计公司",
        tags: ["广告", "创意", "互动", "设计"]
    },
    {
        name: "Ogilvy 奥美",
        url: "http://www.ogilvy.com.cn",
        description: "我们让品牌变得有意义",
        category: "创意设计公司",
        tags: ["广告", "品牌", "创意", "全球"]
    },
    {
        name: "胜加SG",
        url: "http://www.sgad.com.cn",
        description: "为胜利加分",
        category: "创意设计公司",
        tags: ["广告", "创意", "设计", "营销"]
    },
    {
        name: "SociaLab 环时互动",
        url: "http://www.socialab.com.cn/pc.html",
        description: "让想象力实现的传播机构",
        category: "创意设计公司",
        tags: ["广告", "互动", "传播", "创意"]
    },
    {
        name: "有氧 YOYA Digital",
        url: "http://www.cn-yoya.com",
        description: "有预算吗？我氧你",
        category: "创意设计公司",
        tags: ["广告", "创意", "数字", "营销"]
    },
    {
        name: "CubeRights 对立方",
        url: "http://www.cuberights.com",
        description: "创意力的探索者",
        category: "创意设计公司",
        tags: ["广告", "创意", "探索", "设计"]
    },
    {
        name: "北京鲸梦",
        url: "http://www.whaledream.com",
        description: "这里的创意'生态'很丰富！",
        category: "创意设计公司",
        tags: ["广告", "创意", "生态", "北京"]
    },
    {
        name: "SPES 神鸦社鼓",
        url: "https://www.digitaling.com/company/11767",
        description: "创作即是我们存在的意义",
        category: "创意设计公司",
        tags: ["广告", "创意", "创作", "设计"]
    },
    {
        name: "W",
        url: "http://www.wearewer.com",
        description: "不做创意人，只做创造者",
        category: "创意设计公司",
        tags: ["广告", "创意", "创造", "设计"]
    },
    {
        name: "LxU",
        url: "http://www.lxustudio.com",
        description: "让信息更动人",
        category: "创意设计公司",
        tags: ["广告", "信息", "设计", "创意"]
    },
    {
        name: "HAOMAI 好卖广告",
        url: "https://www.digitaling.com/company/11946",
        description: "创造美好的当下和未来",
        category: "创意设计公司",
        tags: ["广告", "创意", "创造", "设计"]
    },
    {
        name: "i2mago 原象",
        url: "http://www.i2mago.com",
        description: "寻找商业致胜点，解决重要营销问题",
        category: "创意设计公司",
        tags: ["广告", "创意", "商业", "营销"]
    },
    {
        name: "ONENINE",
        url: "http://www.onenine19.com",
        description: "不是在主动合作的过程中，就是在去往合作的路上",
        category: "创意设计公司",
        tags: ["广告", "创意", "合作", "设计"]
    },
    {
        name: "TOPic",
        url: "http://www.topicad.cn",
        description: "以创意解决生意之道，致力于认真做有趣的事",
        category: "创意设计公司",
        tags: ["广告", "创意", "生意", "有趣"]
    },
    {
        name: "芝麻西瓜",
        url: "http://www.sesamewatermelon.com",
        description: "为客户提供无界限的创意营销方案",
        category: "创意设计公司",
        tags: ["广告", "创意", "营销", "无界"]
    },
    {
        name: "treedom",
        url: "http://www.treedom.cn",
        description: "为颠覆而生",
        category: "创意设计公司",
        tags: ["广告", "创意", "颠覆", "设计"]
    },
    {
        name: "McCann 麦肯",
        url: "https://www.mccannworldgroup.com",
        description: "善诠涵意，巧传真实",
        category: "创意设计公司",
        tags: ["广告", "创意", "国际", "传播"]
    },
    {
        name: "FF佛海佛瑞",
        url: "https://www.ffcreative.com",
        description: "THINK WITH YOUR HEART",
        category: "创意设计公司",
        tags: ["广告", "创意", "设计", "思考"]
    },
    {
        name: "WMY 北京",
        url: "http://www.wmy-ad.com",
        description: "用4A的经典思维模式，找到SOCIAL时代新的营销方式",
        category: "创意设计公司",
        tags: ["广告", "创意", "社交", "营销"]
    },
    {
        name: "UID 北京",
        url: "http://www.uidworks.com",
        description: "在品牌和用户背后供给最有想象力的创意弹药",
        category: "创意设计公司",
        tags: ["广告", "创意", "品牌", "想象"]
    },
    {
        name: "Forsman & Bodenfors",
        url: "https://forsman.co",
        description: "瑞典创新技术全球代理商",
        category: "创意设计公司",
        tags: ["广告", "创意", "创新", "国际"]
    },
    {
        name: "Universal Everything",
        url: "https://universaleverything.com",
        description: "英国视觉/音效/体验设计数字艺术先锋",
        category: "创意设计公司",
        tags: ["广告", "设计", "数字", "艺术"]
    },
    {
        name: "PARTY",
        url: "https://prty.jp",
        description: "伊藤直树/清水干太等联合创意公司",
        category: "创意设计公司",
        tags: ["广告", "创意", "日本", "设计"]
    },
    {
        name: "Studio Swine",
        url: "https://www.studioswine.com",
        description: "跨雕塑/装置沉浸式艺术机构",
        category: "创意设计公司",
        tags: ["设计", "艺术", "沉浸", "雕塑"]
    },
    {
        name: "Johnson Banks",
        url: "https://www.johnsonbanks.co.uk",
        description: "混合设计顾问公司",
        category: "创意设计公司",
        tags: ["设计", "顾问", "广告", "创意"]
    },
    {
        name: "Folch",
        url: "https://www.folchstudio.com",
        description: "巴塞罗那摄影品牌零售战略咨询",
        category: "创意设计公司",
        tags: ["设计", "品牌", "战略", "摄影"]
    },
    {
        name: "Stefan Beckman Studio",
        url: "https://www.stefanbeckman.com",
        description: "设计/艺术/广告服务顾问公司",
        category: "创意设计公司",
        tags: ["设计", "艺术", "广告", "顾问"]
    },
    
    // 文案创作平台
    {
        name: "纽约客",
        url: "https://www.newyorker.com",
        description: "世界上最具影响力的杂志之一，提供优质文章和创意灵感",
        category: "文案创作平台",
        tags: ["文案", "杂志", "创意", "写作", "国际"]
    },
    {
        name: "Copy.ai",
        url: "https://www.copy.ai",
        description: "AI驱动的文案创作平台，能够生成各类营销文案和创意内容",
        category: "文案创作平台",
        tags: ["文案", "AI", "营销", "写作", "创意"]
    },
    {
        name: "Jasper",
        url: "https://www.jasper.ai",
        description: "专业的AI文案写作助手，为营销团队提供高质量内容创作服务",
        category: "文案创作平台",
        tags: ["文案", "AI", "内容创作", "营销", "博客"]
    },
    
    // 文案灵感网站
    {
        name: "It's Nice That",
        url: "https://www.itsnicethat.com",
        description: "随时了解创意世界正在发生的事，分享全球最新创意资讯",
        category: "文案灵感网站",
        tags: ["文案", "创意", "设计", "灵感", "趋势"]
    },
    {
        name: "Voicer",
        url: "http://www.voicer.me",
        description: "分享生活和设计美学，提供创意灵感和设计思路",
        category: "文案灵感网站",
        tags: ["文案", "美学", "设计", "生活方式", "创意"]
    },
    {
        name: "Fubiz Media",
        url: "http://www.fubiz.net",
        description: "发掘有创造力的人和独特项目的国际创意平台",
        category: "文案灵感网站",
        tags: ["文案", "创意", "艺术", "设计", "项目"]
    },
    {
        name: "Deck of Brilliance",
        url: "http://deckofbrilliance.com",
        description: "帮助创意专业人士产生创新点子的工具和方法",
        category: "文案灵感网站",
        tags: ["文案", "创意", "灵感", "思维工具", "创新"]
    },
    
    // 文案学习资源
    {
        name: "Copyblogger",
        url: "https://copyblogger.com",
        description: "提供高质量的内容营销和文案写作教程的专业网站",
        category: "文案学习资源",
        tags: ["文案", "学习", "营销", "写作", "教程"]
    },
    {
        name: "Copyhackers",
        url: "https://copyhackers.com",
        description: "专注于转化文案写作技巧的学习平台，帮助提升文案效果",
        category: "文案学习资源",
        tags: ["文案", "学习", "转化", "技巧", "策略"]
    },
    {
        name: "Hubspot学院",
        url: "https://academy.hubspot.com",
        description: "提供营销、销售和文案写作的免费课程和认证",
        category: "文案学习资源",
        tags: ["文案", "学习", "营销", "认证", "免费"]
    },
    
    // 创意文案社区
    {
        name: "CARGO",
        url: "https://cargocollective.com",
        description: "创建网络工具，帮助创意人才展示作品和获得曝光",
        category: "创意文案社区",
        tags: ["文案", "创意", "作品集", "展示", "社区"]
    },
    {
        name: "Behance",
        url: "https://www.behance.net/search/projects?search=%E6%96%87%E6%A1%88",
        description: "展示和发现创意作品的平台，汇集了大量优秀文案案例",
        category: "创意文案社区",
        tags: ["文案", "创意", "设计", "案例", "作品集"]
    },
    {
        name: "文案狗",
        url: "http://wenangou.com",
        description: "专为文案工作者提供灵感和素材的资源网站",
        category: "创意文案社区",
        tags: ["文案", "广告", "营销", "写作", "中文"]
    },
    
    // 广告文案库
    {
        name: "Luerzer's Archive",
        url: "https://www.luerzersarchive.com",
        description: "收集世界各地30多年来最优秀广告作品的资源库",
        category: "广告文案库",
        tags: ["文案", "广告", "创意", "案例", "经典"]
    },
    {
        name: "Comm Arts",
        url: "https://www.commarts.com/gallery",
        description: "展示优秀广告设计、插画和印刷作品的在线画廊",
        category: "广告文案库",
        tags: ["文案", "广告", "设计", "插画", "创意"]
    },
    {
        name: "文案迷",
        url: "http://www.wenanmi.com",
        description: "广告词、广告语集合网站，提供大量经典文案素材",
        category: "广告文案库",
        tags: ["文案", "广告", "标语", "创意", "中文"]
    },
    {
        name: "句易网",
        url: "http://www.ju1.cn",
        description: "在线广告禁用词查询平台，帮助优化广告文案",
        category: "广告文案库",
        tags: ["文案", "广告", "合规", "禁用词", "审核"]
    },
    
    // 数字分析工具
    {
        name: "Google Analytics 4",
        url: "https://analytics.google.com",
        description: "谷歌全新一代数据分析工具，支持跨平台分析",
        category: "数字分析工具",
        tags: ["分析", "数据", "谷歌", "流量", "指标"]
    },
    {
        name: "百度统计",
        url: "https://tongji.baidu.com",
        description: "百度提供的网站流量分析工具，适合中文网站",
        category: "数字分析工具",
        tags: ["分析", "数据", "百度", "流量", "中文"]
    },
    {
        name: "Hotjar",
        url: "https://www.hotjar.com",
        description: "热图分析工具，可视化用户行为和浏览路径",
        category: "数字分析工具",
        tags: ["热图", "用户行为", "分析", "可视化", "体验"]
    },
    {
        name: "Mixpanel",
        url: "https://mixpanel.com",
        description: "产品分析平台，专注用户行为分析和留存转化",
        category: "数字分析工具",
        tags: ["产品分析", "用户行为", "留存", "转化率", "漏斗"]
    },
    
    // 社交媒体营销
    {
        name: "Buffer",
        url: "https://buffer.com",
        description: "社交媒体营销平台，支持内容发布和数据分析",
        category: "社交媒体营销",
        tags: ["社交媒体", "营销", "内容", "排期", "分析"]
    },
    {
        name: "Hootsuite",
        url: "https://www.hootsuite.com",
        description: "社交媒体管理平台，支持多账号管理和团队协作",
        category: "社交媒体营销",
        tags: ["社交媒体", "管理", "团队", "排期", "分析"]
    },
    {
        name: "小红书助手",
        url: "https://creator.xiaohongshu.com",
        description: "小红书官方创作者平台，数据分析和内容管理",
        category: "社交媒体营销",
        tags: ["小红书", "社交媒体", "创作者", "数据", "营销"]
    },
    {
        name: "新媒体管家",
        url: "https://xmt.cn",
        description: "国内新媒体内容管理工具，支持多平台发布",
        category: "社交媒体营销",
        tags: ["新媒体", "内容", "管理", "排期", "多平台"]
    },
    
    // 邮件营销平台
    {
        name: "Mailchimp",
        url: "https://mailchimp.com",
        description: "全球知名邮件营销平台，支持自动化和数据分析",
        category: "邮件营销平台",
        tags: ["邮件", "营销", "自动化", "模板", "分析"]
    },
    {
        name: "SendCloud",
        url: "https://www.sendcloud.net",
        description: "国内专业的邮件推送服务，高送达率和稳定性",
        category: "邮件营销平台",
        tags: ["邮件", "营销", "推送", "触达", "中文"]
    },
    {
        name: "Substack",
        url: "https://substack.com",
        description: "新闻通讯平台，支持付费订阅和内容管理",
        category: "邮件营销平台",
        tags: ["通讯", "订阅", "内容", "变现", "创作者"]
    },
    
    // SEO工具
    {
        name: "Ahrefs",
        url: "https://ahrefs.com",
        description: "专业SEO工具，提供网站分析、关键词研究和竞争对手分析",
        category: "SEO工具",
        tags: ["SEO", "关键词", "外链", "排名", "分析"]
    },
    {
        name: "SEMrush",
        url: "https://www.semrush.com",
        description: "全方位营销工具套件，包含SEO、PPC、内容营销等功能",
        category: "SEO工具",
        tags: ["SEO", "营销", "关键词", "分析", "竞争"]
    },
    {
        name: "站长工具",
        url: "https://tool.chinaz.com",
        description: "国内综合站长工具，包含SEO查询、域名查询等功能",
        category: "SEO工具",
        tags: ["SEO", "站长", "工具", "查询", "中文"]
    },
    
    // 内容营销
    {
        name: "飞书妙记",
        url: "https://www.feishu.cn/product/minutes",
        description: "智能会议记录与内容整理工具，支持会议转文字",
        category: "内容营销",
        tags: ["会议", "记录", "内容", "转写", "整理"]
    },
    {
        name: "墨刀",
        url: "https://modao.cc",
        description: "产品原型设计工具，支持团队协作和交互设计",
        category: "内容营销",
        tags: ["原型", "设计", "协作", "产品", "交互"]
    },
    
    // 营销自动化
    {
        name: "HubSpot",
        url: "https://www.hubspot.com",
        description: "一体化营销、销售和客服平台，支持自动化和CRM",
        category: "营销自动化",
        tags: ["营销", "自动化", "CRM", "销售", "客服"]
    },
    {
        name: "Salesforce",
        url: "https://www.salesforce.com",
        description: "企业级CRM平台，支持营销自动化和客户管理",
        category: "营销自动化",
        tags: ["CRM", "营销", "自动化", "企业", "客户"]
    },
    
    // 流量获取
    {
        name: "知乎广告",
        url: "https://marketing.zhihu.com",
        description: "知乎官方广告投放平台，覆盖高质量用户群体",
        category: "流量获取",
        tags: ["广告", "知乎", "投放", "流量", "营销"]
    },
    {
        name: "巨量引擎",
        url: "https://www.oceanengine.com",
        description: "字节跳动旗下广告投放平台，覆盖抖音、今日头条等产品",
        category: "流量获取",
        tags: ["广告", "抖音", "头条", "投放", "流量"]
    },
    
    // 用户增长
    {
        name: "GrowingIO",
        url: "https://www.growingio.com",
        description: "用户行为分析和增长营销平台，支持全链路数据分析",
        category: "用户增长",
        tags: ["数据", "用户", "增长", "分析", "营销"]
    },
    {
        name: "神策数据",
        url: "https://www.sensorsdata.cn",
        description: "国内领先的用户行为分析平台，支持私有化部署",
        category: "用户增长",
        tags: ["数据", "用户", "分析", "增长", "行为"]
    },

    // 裁判案例
    {
        name: "中国裁判文书网",
        url: "https://wenshu.court.gov.cn",
        description: "最高人民法院建立的全国法院统一的裁判文书公开平台，提供检索和下载裁判文书",
        category: "裁判案例",
        tags: ["法院", "裁判", "文书", "判决", "司法"]
    },
    {
        name: "人民法院案例库",
        url: "https://anli.court.gov.cn",
        description: "由最高人民法院统一建设的案例资源库，收录指导性案例和参考案例",
        category: "裁判案例",
        tags: ["案例", "法院", "指导案例", "参考案例", "司法"]
    },
    {
        name: "最高人民法院公报",
        url: "https://www.court.gov.cn/fabu-gongbao-all.html",
        description: "最高人民法院的官方文献汇编，发布司法解释、司法文件、典型案例等重要司法信息",
        category: "裁判案例",
        tags: ["司法解释", "典型案例", "司法文件", "法院", "公报"]
    },
    {
        name: "最高人民法院指导性案例",
        url: "https://www.court.gov.cn/shenpan-xiangqing-382.html",
        description: "由最高人民法院公开发布，供审判类似案件时参照",
        category: "裁判案例",
        tags: ["指导性案例", "法院", "参照", "审判", "司法"]
    },
    {
        name: "最高人民法院典型案例",
        url: "https://www.court.gov.cn/zixun-anli-all.html",
        description: "由最高人民法院公开发布，为类似案件的审理提供了参考和借鉴",
        category: "裁判案例",
        tags: ["典型案例", "法院", "借鉴", "审理", "司法"]
    },
    {
        name: "中国法院案例报道",
        url: "http://www.chinacourt.org/article/case/",
        description: "中国法院网案例库，包括指导案例、典型案例、其他案例",
        category: "裁判案例",
        tags: ["案例", "法院", "报道", "司法", "裁判"]
    },
    {
        name: "最高人民检察院指导性案例",
        url: "https://www.spp.gov.cn/spp/zdal/index.shtml",
        description: "由最高人民检察院发布，供参照适用",
        category: "裁判案例",
        tags: ["案例", "检察院", "指导性", "参照", "司法"]
    },
    {
        name: "中国司法大数据服务网",
        url: "https://data.court.gov.cn",
        description: "基于司法大数据资源，推进司法大数据与国家数据资源的融合运用",
        category: "裁判案例",
        tags: ["大数据", "司法", "数据资源", "法院", "融合"]
    },
    {
        name: "中国市场监管行政处罚文书网",
        url: "https://cfws.samr.gov.cn",
        description: "由国家市场监督管理总局提供的行政处罚文书检索平台",
        category: "裁判案例",
        tags: ["行政处罚", "市场监管", "文书", "检索", "监督"]
    },
    {
        name: "威科先行·法律信息库",
        url: "https://law.wkinfo.com.cn",
        description: "集法规、案例、解读、工具、问答、法律速递、实务模块等为一体",
        category: "裁判案例",
        tags: ["法规", "案例", "解读", "工具", "问答"]
    },
    {
        name: "北大法宝",
        url: "http://www.pkulaw.cn",
        description: "包括法律法规、司法案例、法学期刊、律所实务、专题参考、检察文书、类案检索等",
        category: "裁判案例",
        tags: ["法律", "案例", "期刊", "实务", "专题"]
    },
    {
        name: "无讼案例",
        url: "https://www.itslaw.com",
        description: "提供精确、易用的案例检索工具",
        category: "裁判案例",
        tags: ["案例", "检索", "法律", "司法", "裁判"]
    },
    {
        name: "法信",
        url: "https://www.faxin.cn",
        description: "由人民法院电子音像出版社建立的法律、案例和法律知识文献资源平台",
        category: "裁判案例",
        tags: ["法律", "案例", "知识", "文献", "资源"]
    },
    {
        name: "元典智库",
        url: "https://www.chineselaw.com",
        description: "对法规、案例、工商信息、专家观点等内容的检索",
        category: "裁判案例",
        tags: ["法规", "案例", "工商", "专家", "检索"]
    },

    // 法律法规
    {
        name: "国家法律法规数据库",
        url: "https://flk.npc.gov.cn",
        description: "全国人大常委会联合国家机关共同组建运行，提供宪法、法律、行政法规等电子文本",
        category: "法律法规",
        tags: ["法律", "法规", "宪法", "人大", "条例"]
    },
    {
        name: "最高人民法院权威发布",
        url: "https://www.court.gov.cn/fabu-ft-new.html",
        description: "由最高人民法院公开发布司法解释、司法文件等",
        category: "法律法规",
        tags: ["司法解释", "法院", "文件", "权威", "发布"]
    },
    {
        name: "中国法院网-法律文库",
        url: "http://www.chinacourt.org/law.shtml",
        description: "包括立法追踪、国家法律、行政法规、司法解释、政策参考",
        category: "法律法规",
        tags: ["立法", "法律", "法规", "司法解释", "政策"]
    },
    {
        name: "检察法律法规库",
        url: "https://www.spp.gov.cn/spp/flfgk/index.shtml",
        description: "由最高人民检察院主办，包括宪法、法律、司法解释、规范文件、内部规章",
        category: "法律法规",
        tags: ["法律", "法规", "检察院", "司法解释", "规范"]
    },
    {
        name: "证券期货法规数据库系统",
        url: "http://www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml",
        description: "由中国证券监督管理委员会主办",
        category: "法律法规",
        tags: ["证券", "期货", "法规", "数据库", "监管"]
    },
    {
        name: "全国标准信息公共服务平台",
        url: "https://std.samr.gov.cn",
        description: "由国家市场监督管理总局国家标准技术审评中心主办，包括各类标准",
        category: "法律法规",
        tags: ["标准", "国家标准", "行业标准", "团体标准", "企业标准"]
    },
    {
        name: "国家标准全文公开系统",
        url: "https://openstd.samr.gov.cn",
        description: "由国家标准委发布，包括强制性国家标准、推荐性国家标准、指导性技术文件",
        category: "法律法规",
        tags: ["国家标准", "强制性", "推荐性", "技术", "文件"]
    },
    {
        name: "生态环境标准",
        url: "https://www.mee.gov.cn/ywgz/fgbz/bz",
        description: "包括标准发布、标准解读、标准文本等",
        category: "法律法规",
        tags: ["环境", "标准", "生态", "解读", "文本"]
    },

    // 市场主体信息
    {
        name: "国家企业信用信息公示系统",
        url: "https://www.gsxt.gov.cn",
        description: "政府部门用于公示市场主体的信用信息及相关事项的平台",
        category: "市场主体信息",
        tags: ["企业", "信用", "公示", "市场主体", "信息"]
    },
    {
        name: "中国社会组织政务服务平台",
        url: "https://www.chinanpo.gov.cn",
        description: "由民政部社会组织管理局主办，查询全国社会组织信用信息等",
        category: "市场主体信息",
        tags: ["社会组织", "信用", "政务", "民政", "组织"]
    },
    {
        name: "全国组织机构统一社会信用代码数据服务中心",
        url: "https://www.cods.org.cn",
        description: "提供境内法人和其他组织统一社会信用代码信息的实名制查询平台",
        category: "市场主体信息",
        tags: ["信用代码", "组织机构", "查询", "法人", "实名制"]
    },
    {
        name: "信用中国",
        url: "https://www.creditchina.gov.cn",
        description: "由国家公共信用中心主办，查询主体基础信息及信用报告",
        category: "市场主体信息",
        tags: ["信用", "报告", "公共", "查询", "市场主体"]
    },
    {
        name: "全国企业破产重整案件信息网",
        url: "https://pccz.court.gov.cn",
        description: "查询债务人信息、公开案件、公开公告、公开文书、债权人会议预告等信息",
        category: "市场主体信息",
        tags: ["破产", "重整", "债务", "案件", "债权"]
    },
    {
        name: "政府采购严重违法失信行为记录名单",
        url: "http://www.ccgp.gov.cn/cr/list",
        description: "由财政部国库司主办，查询政府采购严重违法失信行为信息记录",
        category: "市场主体信息",
        tags: ["政府采购", "违法", "失信", "记录", "名单"]
    },
    {
        name: "企查查",
        url: "https://www.qcc.com",
        description: "查询企业工商信息、关联企业信息、法律诉讼、知识产权信息等",
        category: "市场主体信息",
        tags: ["企业", "工商", "诉讼", "知识产权", "查询"]
    },
    {
        name: "天眼查",
        url: "https://www.tianyancha.com",
        description: "提供公司查询、工商信息查询、企业查询、工商查询、企业信用信息查询等",
        category: "市场主体信息",
        tags: ["公司", "工商", "企业", "信用", "查询"]
    },
    {
        name: "启信宝",
        url: "https://www.qixin.com",
        description: "提供企业工商信息、法院判决、关联企业、司法拍卖、失信信息等服务",
        category: "市场主体信息",
        tags: ["企业", "工商", "判决", "关联", "失信"]
    },

    // 司法案件信息
    {
        name: "中国审判流程信息公开网",
        url: "https://splcgk.court.gov.cn",
        description: "查看案件信息、接受电子送达、使用联系法官、投诉建议等功能",
        category: "司法案件信息",
        tags: ["审判", "流程", "案件", "法官", "送达"]
    },
    {
        name: "中国执行信息公开网",
        url: "http://zxgk.court.gov.cn",
        description: "查询失信被执行人、限制消费人员、被执行人信息等",
        category: "司法案件信息",
        tags: ["执行", "失信", "限制消费", "被执行人", "查询"]
    },
    {
        name: "人民法院调解平台",
        url: "https://tiaojie.court.gov.cn",
        description: "最高人民法院建立的全流程一站式解纷服务平台",
        category: "司法案件信息",
        tags: ["调解", "解纷", "服务", "法院", "一站式"]
    },
    {
        name: "中国庭审公开网",
        url: "https://tingshen.court.gov.cn",
        description: "由最高人民法院建设的庭审公开网，提供庭审直播、庭审回顾等服务",
        category: "司法案件信息",
        tags: ["庭审", "直播", "回顾", "案件", "公开"]
    },
    {
        name: "人民法院公告网",
        url: "https://rmfygg.court.gov.cn",
        description: "由最高人民法院主办，提供公告查询、公告办理等服务",
        category: "司法案件信息",
        tags: ["公告", "查询", "办理", "法院", "服务"]
    },
    {
        name: "人民法院送达平台",
        url: "https://sdpt.court.gov.cn",
        description: "查看相关案件诉讼活动通知、电子送达、邮寄送达、公告送达记录等",
        category: "司法案件信息",
        tags: ["送达", "诉讼", "通知", "电子", "邮寄"]
    },
    {
        name: "12309中国检察网",
        url: "https://www.12309.gov.cn",
        description: "由最高人民检察院主办，提供'一站式'检察服务",
        category: "司法案件信息",
        tags: ["检察", "服务", "投诉", "举报", "查询"]
    },

    // 网络司法拍卖
    {
        name: "人民法院诉讼资产网",
        url: "https://www.rmfysszc.gov.cn",
        description: "面向全国各级法院、社会辅助机构和竞买人的诉讼资产综合信息发布和司法拍卖平台",
        category: "网络司法拍卖",
        tags: ["诉讼", "资产", "拍卖", "法院", "竞买"]
    },
    {
        name: "阿里资产 · 司法拍卖",
        url: "https://sf.taobao.com",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        category: "网络司法拍卖",
        tags: ["阿里", "资产", "拍卖", "司法", "服务"]
    },
    {
        name: "京东资产交易平台 · 司法拍卖",
        url: "https://auction.jd.com/sifa.html",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        category: "网络司法拍卖",
        tags: ["京东", "资产", "交易", "司法", "拍卖"]
    },
    {
        name: "公拍网 · 司法拍卖",
        url: "https://www.gpai.net",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        category: "网络司法拍卖",
        tags: ["公拍", "司法", "拍卖", "竞拍", "资产"]
    },
    {
        name: "中拍平台 · 司法拍卖",
        url: "https://www.caa123.org.cn",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        category: "网络司法拍卖",
        tags: ["中拍", "平台", "司法", "拍卖", "竞买"]
    },
    {
        name: "北京产权交易所 · 司法拍卖",
        url: "https://www.cbex.com.cn",
        description: "最高人民法院选定的全国各级法院网络司法拍卖平台",
        category: "网络司法拍卖",
        tags: ["北京", "产权", "交易", "司法", "拍卖"]
    },

    // 知识产权业务
    {
        name: "国家知识产权局",
        url: "https://www.cnipa.gov.cn",
        description: "由国家知识产权局主办，提供知识产权方面的政务服务",
        category: "知识产权业务",
        tags: ["知识产权", "政务", "服务", "专利", "商标"]
    },
    {
        name: "专利业务办理系统",
        url: "https://cponline.cnipa.gov.cn",
        description: "提供专利申请及手续办理、专利事务服务、专利缴费服务、专利审查信息查询服务等",
        category: "知识产权业务",
        tags: ["专利", "申请", "缴费", "审查", "查询"]
    },
    {
        name: "专利检索及分析",
        url: "https://pss-system.cnipa.gov.cn",
        description: "由国家知识产权局主办，提供专利检索及分析服务",
        category: "知识产权业务",
        tags: ["专利", "检索", "分析", "服务", "知识产权"]
    },
    {
        name: "专利之星检索系统",
        url: "http://www.patentstar.cn",
        description: "由国家知识产权局中国专利信息中心主办，提供多种检索方式",
        category: "知识产权业务",
        tags: ["专利", "检索", "智能", "专家", "分类"]
    },
    {
        name: "专利代理管理系统",
        url: "https://dlgl.cnipa.gov.cn",
        description: "由国家知识产权局主办，提供专利代理师公示、专利代理机构公示等",
        category: "知识产权业务",
        tags: ["专利", "代理", "管理", "公示", "机构"]
    },
    {
        name: "商标局 中国商标网",
        url: "https://sbj.cnipa.gov.cn",
        description: "由国家知识产权局商标局主办，提供商标网上申请、查询、证明公示、公告等",
        category: "知识产权业务",
        tags: ["商标", "申请", "查询", "公示", "公告"]
    },
    {
        name: "中国版权保护中心",
        url: "https://www.ccopyright.com.cn",
        description: "承担各类作品和计算机软件版权登记职责，是我国唯一的软件版权登记机构",
        category: "知识产权业务",
        tags: ["版权", "登记", "软件", "作品", "保护"]
    },

    // 资本证券
    {
        name: "北京证券交易所",
        url: "https://www.bse.cn",
        description: "为证券集中交易提供场所和设施、组织和监督证券交易及市场管理服务",
        category: "资本证券",
        tags: ["证券", "交易", "北京", "资本", "市场"]
    },
    {
        name: "上海证券交易所",
        url: "https://www.sse.com.cn",
        description: "为证券集中交易提供场所和设施、组织和监督证券交易",
        category: "资本证券",
        tags: ["证券", "交易", "上海", "股票", "债券"]
    },
    {
        name: "深圳证券交易所",
        url: "https://www.szse.cn",
        description: "提供证券交易的场所、设施和服务，审核证券发行上市申请等",
        category: "资本证券",
        tags: ["证券", "交易", "深圳", "上市", "监管"]
    },
    {
        name: "全国中小企业股份转让系统",
        url: "https://www.neeq.com.cn",
        description: "我国第一家公司制运营的证券交易场所，为新三板市场提供服务",
        category: "资本证券",
        tags: ["新三板", "股份", "转让", "中小企业", "市场"]
    },
    {
        name: "中国证券投资基金业协会 · 信息公示",
        url: "https://www.amac.org.cn",
        description: "查询基金从业人员资格、基金产品、私募基金管理人信息等",
        category: "资本证券",
        tags: ["基金", "投资", "私募", "资格", "管理人"]
    },
    {
        name: "证券期货市场失信记录查询平台",
        url: "https://neris.csrc.gov.cn/shixinchaxun",
        description: "可通过查询平台了解相关市场主体违法违规失信信息",
        category: "资本证券",
        tags: ["证券", "期货", "失信", "违法", "查询"]
    },

    // 法律数据查询
    {
        name: "国家统计局及地方统计网站",
        url: "https://www.stats.gov.cn",
        description: "可查询居民人均可支配收入及消费支出、各类型平均工资等",
        category: "法律数据查询",
        tags: ["统计", "收入", "工资", "消费", "数据"]
    },
    {
        name: "国家统计局 · 国家数据",
        url: "https://data.stats.gov.cn",
        description: "提供详实的月度、季度、年度数据以及普查、地区、部门、国际数据",
        category: "法律数据查询",
        tags: ["统计", "数据", "月度", "年度", "普查"]
    },
    {
        name: "人社部及地方人社部门网站",
        url: "https://www.mohrss.gov.cn",
        description: "可查询各类型平均工资、社保缴费基数、工伤待遇相关数据等",
        category: "法律数据查询",
        tags: ["人社", "工资", "社保", "工伤", "缴费"]
    },
    {
        name: "121法律助手",
        url: "https://www.121fa.com",
        description: "计算诉讼费、LPR利息、违约金、迟延履行利息、民间借贷利息、日期期间等",
        category: "法律数据查询",
        tags: ["诉讼费", "利息", "违约金", "计算", "工具"]
    },
    // 财经门户
    {
        name: "东方财富网",
        url: "http://www.eastmoney.com",
        description: "中国领先的互联网金融服务平台，提供财经资讯、证券行情、数据分析等服务",
        category: "财经门户",
        tags: ["财经", "股票", "行情", "证券", "投资"]
    },
    {
        name: "新浪财经",
        url: "http://finance.sina.com.cn",
        description: "新浪财经频道，提供全球财经新闻和金融证券行情数据",
        category: "财经门户",
        tags: ["财经", "新闻", "股票", "行情", "数据"]
    },
    {
        name: "凤凰财经",
        url: "http://finance.ifeng.com",
        description: "凤凰网旗下财经频道，关注全球经济动态、市场行情和投资机会",
        category: "财经门户",
        tags: ["财经", "全球", "市场", "投资", "经济"]
    },
    {
        name: "和讯网",
        url: "http://www.hexun.com",
        description: "中国最大财经门户之一，提供实时行情、财经资讯、理财服务和互动社区",
        category: "财经门户",
        tags: ["财经", "行情", "资讯", "理财", "投资"]
    },
    {
        name: "金融界",
        url: "http://www.jrj.com.cn",
        description: "中国知名财经网站，提供金融资讯、股票、基金、期货等投资信息",
        category: "财经门户",
        tags: ["金融", "股票", "基金", "期货", "投资"]
    },
    {
        name: "华尔街见闻",
        url: "http://wallstreetcn.com",
        description: "专业的财经新媒体，专注于全球资讯，提供专业、实时、深度的全球金融市场资讯",
        category: "财经门户",
        tags: ["全球", "金融", "市场", "资讯", "华尔街"]
    },
    // 财经媒体
    {
        name: "FT中文网",
        url: "http://www.ftchinese.com",
        description: "英国《金融时报》集团旗下的中文商业财经网站，提供全球财经资讯",
        category: "财经媒体",
        tags: ["金融时报", "全球", "商业", "财经", "资讯"]
    },
    {
        name: "财新网",
        url: "http://www.caixin.com",
        description: "中国最有影响力的财经媒体之一，提供深度财经新闻与分析",
        category: "财经媒体",
        tags: ["财经", "新闻", "分析", "经济", "深度"]
    },
    {
        name: "21世纪经济报道",
        url: "https://www.21jingji.com",
        description: "专注于经济、产业与管理的财经媒体，提供专业财经新闻报道",
        category: "财经媒体",
        tags: ["财经", "经济", "产业", "管理", "报道"]
    },
    {
        name: "第一财经",
        url: "http://www.yicai.com",
        description: "上海文广新闻传媒集团旗下的财经媒体，提供实时财经新闻",
        category: "财经媒体",
        tags: ["财经", "新闻", "资讯", "实时", "经济"]
    },
    {
        name: "华尔街日报中文网",
        url: "http://cn.wsj.com/gb",
        description: "美国著名财经媒体《华尔街日报》的中文网站，关注全球财经动态",
        category: "财经媒体",
        tags: ["华尔街", "全球", "财经", "美国", "国际"]
    },
    {
        name: "彭博中文网",
        url: "https://www.bloombergchina.com",
        description: "全球知名商业和金融信息提供商彭博社的中文网站",
        category: "财经媒体",
        tags: ["彭博", "全球", "商业", "金融", "资讯"]
    },
    // 投资交流
    {
        name: "雪球",
        url: "https://xueqiu.com",
        description: "中国领先的投资者社交网络，用户可以交流投资想法、跟踪股票组合",
        category: "投资交流",
        tags: ["投资", "社交", "股票", "交流", "组合"]
    },
    {
        name: "集思录",
        url: "https://www.jisilu.cn",
        description: "专注于债券、基金等固定收益投资的社区，提供数据分析和用户交流",
        category: "投资交流",
        tags: ["债券", "基金", "固定收益", "投资", "分析"]
    },
    {
        name: "淘股吧",
        url: "https://www.taoguba.com.cn",
        description: "活跃的股票投资者交流社区，提供股票讨论、大户动态和投资观点",
        category: "投资交流",
        tags: ["股票", "投资", "交流", "讨论", "观点"]
    },
    {
        name: "人大经济论坛",
        url: "http://bbs.pinggu.org",
        description: "中国知名的经济、金融和统计学术交流平台，提供专业讨论和资料分享",
        category: "投资交流",
        tags: ["经济", "金融", "统计", "学术", "交流"]
    },
    {
        name: "股吧",
        url: "http://guba.eastmoney.com",
        description: "东方财富网旗下的股票讨论社区，用户可以讨论个股、大盘和投资策略",
        category: "投资交流",
        tags: ["股票", "讨论", "投资", "个股", "策略"]
    },
    // 行业资讯
    {
        name: "钢铁网",
        url: "http://www.mysteel.com",
        description: "国内专业的钢铁信息服务平台，提供钢材价格、资讯和数据分析",
        category: "行业资讯",
        tags: ["钢铁", "价格", "行情", "资讯", "分析"]
    },
    {
        name: "生意社",
        url: "http://www.100ppi.com",
        description: "商品行情服务平台，提供大宗商品价格、行情分析和供求信息",
        category: "行业资讯",
        tags: ["商品", "价格", "行情", "分析", "大宗"]
    },
    {
        name: "中国化工网",
        url: "http://china.chemnet.com",
        description: "化工行业门户网站，提供化工产品、价格行情和供求信息",
        category: "行业资讯",
        tags: ["化工", "产品", "行情", "价格", "供求"]
    },
    {
        name: "中国能源网",
        url: "http://www.china5e.com",
        description: "能源行业门户网站，提供能源政策、市场分析和行业动态",
        category: "行业资讯",
        tags: ["能源", "政策", "市场", "分析", "动态"]
    },
    {
        name: "慧聪网",
        url: "http://www.hc360.com",
        description: "B2B电子商务平台，覆盖多个行业的商业信息和产品交易",
        category: "行业资讯",
        tags: ["B2B", "电子商务", "行业", "交易", "信息"]
    },
    // 期货交易
    {
        name: "英为财情",
        url: "https://cn.investing.com",
        description: "全球金融门户网站，提供股票、期货、外汇等多元化行情数据",
        category: "期货交易",
        tags: ["全球", "金融", "期货", "行情", "数据"]
    },
    {
        name: "和讯期货",
        url: "http://futures.hexun.com",
        description: "和讯网旗下期货频道，提供期货行情、资讯和分析工具",
        category: "期货交易",
        tags: ["期货", "行情", "资讯", "分析", "工具"]
    },
    {
        name: "99期货",
        url: "http://www.99qh.com",
        description: "期货门户网站，提供期货行情、价格走势和市场分析",
        category: "期货交易",
        tags: ["期货", "行情", "价格", "走势", "分析"]
    },
    {
        name: "期货日报",
        url: "http://www.qhrb.com.cn",
        description: "中国期货业权威媒体，提供期货市场新闻和分析报道",
        category: "期货交易",
        tags: ["期货", "市场", "新闻", "分析", "报道"]
    },
    // 抖音验货
    {
        name: "飞如红人",
        url: "http://www.feelpro.cn",
        description: "为商家和网红达人提供高效资源对接平台，精选全球高佣好物，提供优质的选品渠道，专注为短视频、直播达人提供优质高佣商品",
        category: "抖音验货",
        tags: ["抖音", "短视频", "带货", "红人", "验货"]
    },
    {
        name: "种草之家",
        url: "https://www.zhongcao.cn",
        description: "种草之家的抖音验货平台，抖音热门商品都在这里，欢迎抖音带货达人挑选商品，商家免费赠送样品",
        category: "抖音验货",
        tags: ["抖音", "种草", "验货", "样品", "带货"]
    },
    {
        name: "搜淘客",
        url: "http://www.tkw1688.com/trill/index.html",
        description: "商家提供高佣金，推广周期长的产品，每个产品提供多份样品给抖音淘客，抖音淘客免费领取，赚取佣金的验货平台",
        category: "抖音验货",
        tags: ["淘客", "抖音", "样品", "佣金", "验货"]
    },
    {
        name: "达人推",
        url: "https://www.darentui.com",
        description: "专业的短视频带货平台，专注优质商品内容打造，为达人提供优质的选品渠道，并有大量优质商家dou+支持",
        category: "抖音验货",
        tags: ["短视频", "带货", "达人", "选品", "dou+"]
    },
    {
        name: "AK抖客联盟",
        url: "http://daren.akdklm.com",
        description: "抖音淘客，致力于商家抖音带货，抖音淘客种草达人原创视频生产,视频生产者变现平台，颠覆传统抖音带货模式",
        category: "抖音验货",
        tags: ["抖客", "联盟", "短视频", "带货", "变现"]
    },
    {
        name: "带货网",
        url: "http://www.daihw.com/material",
        description: "抖音快手达人带货，免费拿样品，短视频分发平台",
        category: "抖音验货",
        tags: ["带货", "样品", "达人", "短视频", "抖音"]
    },
    {
        name: "嘀嘀红人",
        url: "https://www.ddhongren.com",
        description: "短视频网红商家自动派单带货平台，10000个网红全天在线选品，纯佣金带货，抖音、快手、小红书全渠道网红帮你卖货",
        category: "抖音验货",
        tags: ["红人", "带货", "网红", "短视频", "佣金"]
    },
    {
        name: "带货圈",
        url: "https://www.daihuo360.com",
        description: "专注为抖音短视频、直播达人提供优质高佣商品，免费提供验货样品并发放视频创作补贴",
        category: "抖音验货",
        tags: ["带货", "抖音", "样品", "补贴", "短视频"]
    },
    {
        name: "全五分",
        url: "http://www.quan5fen.com",
        description: "专业的短视频数据分析平台，抖音验货产品有很多，但是像全五分这样的靠谱抖音验货平台却不多见",
        category: "抖音验货",
        tags: ["短视频", "数据分析", "抖音", "验货", "产品"]
    },
    {
        name: "悟空带货",
        url: "https://www.daihuo.com",
        description: "抖音数据实时检测分分析淘客推广、流量变现、一站式解决方案，各行业类型的热门、飙升榜单，实时数据监测",
        category: "抖音验货",
        tags: ["抖音", "数据", "淘客", "推广", "变现"]
    },
    {
        name: "飞瓜数据",
        url: "https://dy.feigua.cn",
        description: "致力提供专业的实时抖音直播与商品带货数据，热门主播排行榜，热门抖音音乐与视频排行，抖音小店排行",
        category: "抖音验货",
        tags: ["飞瓜", "数据", "抖音", "直播", "带货"]
    },
    {
        name: "抖商眼",
        url: "https://doushangyan.com",
        description: "专业的抖音电商工具分析工具，提供抖音热门商品排行榜，抖音热门预测，达人与商品的监控分析等功能",
        category: "抖音验货",
        tags: ["抖音", "电商", "分析", "监控", "商品"]
    },
    // 淘宝联盟
    {
        name: "淘宝联盟",
        url: "https://pub.alimama.com",
        description: "淘宝联盟官方网站，阿里巴巴集团旗下淘宝客推广平台，连接商家与内容创作者的桥梁",
        category: "淘宝联盟",
        tags: ["淘宝", "联盟", "淘客", "推广", "佣金"]
    },
    {
        name: "淘宝联盟规则中心",
        url: "https://rule.alimama.com",
        description: "淘宝联盟常见规则，淘宝推广必须遵守的各项规章制度和政策",
        category: "淘宝联盟",
        tags: ["规则", "淘宝", "联盟", "政策", "推广"]
    },
    {
        name: "阿里创作平台",
        url: "https://we.taobao.com/creator/login-intro",
        description: "在人工智能将替代一切的未来，唯有内容的创作无可替代，阿里巴巴提供的内容创作平台",
        category: "淘宝联盟",
        tags: ["创作", "内容", "平台", "淘宝", "推广"]
    },
    {
        name: "淘宝联盟官方论坛",
        url: "https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html",
        description: "淘宝联盟官方千牛号，面向广大淘宝客伙伴们，进行各种信息的互动平台",
        category: "淘宝联盟",
        tags: ["论坛", "淘宝", "联盟", "互动", "交流"]
    },
    {
        name: "联盟学院",
        url: "https://pub.alimama.com/fourth/school/index.htm",
        description: "淘宝联盟官方学院，汇集各类淘客课程，大佬分享，帮助淘宝客提升推广技巧",
        category: "淘宝联盟",
        tags: ["学院", "淘宝", "联盟", "课程", "淘客"]
    },
    {
        name: "万堂书院",
        url: "https://shuyuan.taobao.com",
        description: "阿里妈妈万堂书院小二讲解直钻淘产品功能动向以及内容运营玩法，行业小二带来的不同类目推广技巧",
        category: "淘宝联盟",
        tags: ["书院", "阿里", "妈妈", "推广", "运营"]
    },
    {
        name: "联盟商家中心",
        url: "https://ad.alimama.com/index.htm",
        description: "淘宝客官方动态发布，商家管理推广计划的平台",
        category: "淘宝联盟",
        tags: ["商家", "联盟", "淘宝", "推广", "计划"]
    },
    {
        name: "淘宝联盟开发者中心",
        url: "https://open.alimama.com",
        description: "淘宝联盟电商生态开发者服务平台，提供API接口和开发文档",
        category: "淘宝联盟",
        tags: ["开发", "API", "联盟", "淘宝", "接口"]
    },
    // 网红营销
    {
        name: "速推客",
        url: "https://www.stkfanli.com",
        description: "速推客返利机器人 – 集淘宝、京东、拼多多、唯品会、抖音多合一的返利机器人",
        category: "网红营销",
        tags: ["返利", "机器人", "淘宝客", "推广", "佣金"]
    },
    {
        name: "腾促",
        url: "http://www.tengcu.com/home/goods",
        description: "腾促抖音达人，快手达人，免费拿样品验货平台，连接商家与网红",
        category: "网红营销",
        tags: ["抖音", "达人", "快手", "样品", "验货"]
    },
    {
        name: "大淘客抖音验货",
        url: "http://dh.dataoke.com/rank_goods",
        description: "大淘客联盟旗下带货短视频专业数据分析平台，让短视频带货更轻松",
        category: "网红营销",
        tags: ["大淘客", "抖音", "验货", "短视频", "数据"]
    },
    {
        name: "顶咖网",
        url: "http://www.dingka.com/trillInspection/caicai",
        description: "专注为电商人创业提供一站式的企业服务，在淘宝、天猫网店的转让交易服务领域深耕多年",
        category: "网红营销",
        tags: ["电商", "创业", "淘宝", "网店", "交易"]
    },
    {
        name: "打榜社区",
        url: "http://wangwuhaoping.com/dabang/daihuoindex",
        description: "依托打榜参谋大数据及人工智能技术，为品牌客户提供基于短视频生态的创作和投放服务",
        category: "网红营销",
        tags: ["打榜", "短视频", "创作", "投放", "数据"]
    },
    {
        name: "抖老板",
        url: "https://www.doulaoban.com",
        description: "集联盟订单同步，抖音带货数据分析，抖音运营团队管理于一体的一站式数据管理平台",
        category: "网红营销",
        tags: ["抖音", "带货", "数据", "运营", "管理"]
    },
    {
        name: "带货助手",
        url: "https://tools.daihuo.com",
        description: "实时监控商品的佣金计划，更有图表展示商品30天佣金走势、商品销量情况等",
        category: "网红营销",
        tags: ["带货", "佣金", "监控", "销量", "数据"]
    }
];

// 热门推荐（首页展示）
const hotWebsites = [
    "ChatGPT",
    "Claude",
    "Midjourney",
    "Suno AI",
    "HeyGen",
    "Runway",
    "Google Analytics 4",
    "Ahrefs",
    "东方财富网",
    "雪球",
    "淘宝联盟",
    "飞瓜数据"
];
