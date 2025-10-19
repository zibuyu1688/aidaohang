// 本地网站数据库
const websitesDatabase = [
    {
        name: "ChatGPT",
        description: "OpenAI开发的强大AI对话助手，可以回答问题、写作、编程等",
        url: "https://chat.openai.com",
        category: "AI聊天助手",
        tags: ["AI","对话","聊天","写作","编程"]
    },
    {
        name: "Claude",
        description: "Anthropic开发的AI助手，擅长长文本分析和深度对话",
        url: "https://claude.ai",
        category: "AI聊天助手",
        tags: ["AI","对话","聊天","分析","写作"]
    },
    {
        name: "文心一言",
        description: "百度出品的AI对话助手，中文理解能力强",
        url: "https://yiyan.baidu.com",
        category: "AI聊天助手",
        tags: ["AI","对话","聊天","百度","中文"]
    },
    {
        name: "通义千问",
        description: "阿里云AI助手，支持多种应用场景",
        url: "https://tongyi.aliyun.com",
        category: "AI聊天助手",
        tags: ["AI","对话","聊天","阿里","通义"]
    },
    {
        name: "Kimi",
        description: "月之暗面出品，擅长长文本处理的AI助手",
        url: "https://kimi.moonshot.cn",
        category: "AI聊天助手",
        tags: ["AI","对话","聊天","长文本","Kimi"]
    },
    {
        name: "豆包",
        description: "字节跳动AI助手，智能对话和创作",
        url: "https://www.doubao.com",
        category: "AI聊天助手",
        tags: ["AI","对话","聊天","字节","豆包"]
    },
    {
        name: "Notion AI",
        description: "Notion内置AI写作助手，智能文档创作",
        url: "https://www.notion.so/product/ai",
        category: "AI写作工具",
        tags: ["AI","写作","文档","创作"]
    },
    {
        name: "秘塔写作猫",
        description: "AI写作助手，中文纠错、改写、续写",
        url: "https://xiezuocat.com",
        category: "AI写作工具",
        tags: ["AI","写作","纠错","改写","中文"]
    },
    {
        name: "Jasper AI",
        description: "专业AI内容创作平台，营销文案生成",
        url: "https://www.jasper.ai",
        category: "AI写作工具",
        tags: ["AI","写作","文案","营销"]
    },
    {
        name: "Midjourney",
        description: "强大的AI绘画工具，通过文字描述生成精美图片",
        url: "https://www.midjourney.com",
        category: "AI图像工具",
        tags: ["AI","绘画","作图","图片生成"]
    },
    {
        name: "Stable Diffusion",
        description: "开源的AI图像生成工具，免费使用",
        url: "https://stablediffusionweb.com",
        category: "AI图像工具",
        tags: ["AI","绘画","作图","开源","图片生成"]
    },
    {
        name: "DALL-E",
        description: "OpenAI的AI图像生成工具，高质量图片创作",
        url: "https://openai.com/dall-e-3",
        category: "AI图像工具",
        tags: ["AI","绘画","图片生成","OpenAI"]
    },
    {
        name: "文心一格",
        description: "百度AI绘画平台，中文提示词友好",
        url: "https://yige.baidu.com",
        category: "AI图像工具",
        tags: ["AI","绘画","图片生成","百度"]
    },
    {
        name: "通义万相",
        description: "阿里云AI图像生成工具",
        url: "https://tongyi.aliyun.com/wanxiang",
        category: "AI图像工具",
        tags: ["AI","绘画","图片生成","阿里"]
    },
    {
        name: "Remove.bg",
        description: "AI自动抠图工具，一键去除图片背景",
        url: "https://www.remove.bg",
        category: "AI图像工具",
        tags: ["抠图","去背景","图片处理","AI","背景移除"]
    },
    {
        name: "稿定抠图",
        description: "智能AI抠图工具，支持批量处理",
        url: "https://www.gaoding.com/koutu",
        category: "AI图像工具",
        tags: ["抠图","去背景","批量处理","AI"]
    },
    {
        name: "Cleanup.pictures",
        description: "AI智能去除图片中不需要的物体和水印",
        url: "https://cleanup.pictures",
        category: "AI图像工具",
        tags: ["去水印","物体擦除","图片修复","AI"]
    },
    {
        name: "Bigjpg",
        description: "AI图片无损放大工具，提升图片分辨率",
        url: "https://bigjpg.com",
        category: "AI图像工具",
        tags: ["图片放大","无损","AI","高清"]
    },
    {
        name: "Photopea",
        description: "在线版Photoshop，功能强大的图片编辑器",
        url: "https://www.photopea.com",
        category: "AI图像工具",
        tags: ["图片编辑","PS","在线编辑"]
    },
    {
        name: "Leonardo AI",
        description: "专业AI图像生成工具，游戏和设计资产创作",
        url: "https://leonardo.ai",
        category: "AI图像工具",
        tags: ["AI","绘画","游戏设计","图片生成"]
    },
    {
        name: "Ideogram",
        description: "AI图像生成，特别擅长文字渲染",
        url: "https://ideogram.ai",
        category: "AI图像工具",
        tags: ["AI","绘画","文字生成","海报"]
    },
    {
        name: "Flux AI",
        description: "Black Forest Labs开发的新一代AI图像生成模型",
        url: "https://flux1.ai",
        category: "AI图像工具",
        tags: ["AI","绘画","图片生成","开源"]
    },
    {
        name: "剪映",
        description: "抖音官方视频剪辑工具，AI智能剪辑",
        url: "https://www.capcut.cn",
        category: "AI视频工具",
        tags: ["视频剪辑","AI","抖音","短视频"]
    },
    {
        name: "Runway",
        description: "AI视频编辑平台，文字生成视频",
        url: "https://runwayml.com",
        category: "AI视频工具",
        tags: ["AI","视频生成","视频编辑","创作"]
    },
    {
        name: "Sora",
        description: "OpenAI文生视频模型，AI视频生成",
        url: "https://openai.com/sora",
        category: "AI视频工具",
        tags: ["AI","视频生成","OpenAI","文生视频"]
    },
    {
        name: "必剪",
        description: "B站官方剪辑工具，智能字幕识别",
        url: "https://bcut.bilibili.cn",
        category: "AI视频工具",
        tags: ["视频剪辑","字幕","B站"]
    },
    {
        name: "HeyGen",
        description: "AI数字人视频生成平台，多语言配音",
        url: "https://www.heygen.com",
        category: "AI视频工具",
        tags: ["AI","数字人","视频生成","配音"]
    },
    {
        name: "D-ID",
        description: "AI数字人视频制作，照片说话",
        url: "https://www.d-id.com",
        category: "AI视频工具",
        tags: ["AI","数字人","视频生成","照片说话"]
    },
    {
        name: "Pika Labs",
        description: "AI视频生成和编辑工具",
        url: "https://pika.art",
        category: "AI视频工具",
        tags: ["AI","视频生成","视频编辑"]
    },
    {
        name: "Suno AI",
        description: "AI音乐生成工具，文字生成音乐",
        url: "https://suno.ai",
        category: "AI音频工具",
        tags: ["AI","音乐生成","作曲","创作"]
    },
    {
        name: "剪映语音",
        description: "AI文字转语音，多种音色选择",
        url: "https://www.capcut.cn",
        category: "AI音频工具",
        tags: ["AI","语音合成","配音","TTS"]
    },
    {
        name: "讯飞语音",
        description: "科大讯飞语音识别和合成平台",
        url: "https://www.xfyun.cn",
        category: "AI音频工具",
        tags: ["AI","语音识别","语音合成","讯飞"]
    },
    {
        name: "Eleven Labs",
        description: "AI语音克隆和文本转语音，支持多语言",
        url: "https://elevenlabs.io",
        category: "AI音频工具",
        tags: ["AI","语音克隆","TTS","配音"]
    },
    {
        name: "Murf AI",
        description: "AI语音生成器，专业配音工具",
        url: "https://murf.ai",
        category: "AI音频工具",
        tags: ["AI","配音","TTS","语音生成"]
    },
    {
        name: "Udio",
        description: "AI音乐生成工具，创作原创音乐",
        url: "https://www.udio.com",
        category: "AI音频工具",
        tags: ["AI","音乐生成","作曲","原创"]
    },
    {
        name: "GitHub Copilot",
        description: "GitHub AI代码助手，智能代码补全",
        url: "https://github.com/features/copilot",
        category: "AI编程工具",
        tags: ["AI","编程","代码","GitHub","辅助"]
    },
    {
        name: "Cursor",
        description: "AI驱动的代码编辑器，智能编程助手",
        url: "https://cursor.sh",
        category: "AI编程工具",
        tags: ["AI","编程","IDE","代码编辑"]
    },
    {
        name: "通义灵码",
        description: "阿里云AI编程助手",
        url: "https://tongyi.aliyun.com/lingma",
        category: "AI编程工具",
        tags: ["AI","编程","代码","阿里"]
    },
    {
        name: "Replit AI",
        description: "在线AI编程平台，智能代码生成",
        url: "https://replit.com",
        category: "AI编程工具",
        tags: ["AI","编程","在线IDE","代码生成"]
    },
    {
        name: "Codeium",
        description: "免费AI代码助手，支持多种IDE",
        url: "https://codeium.com",
        category: "AI编程工具",
        tags: ["AI","编程","代码补全","免费"]
    },
    {
        name: "Tabnine",
        description: "AI代码补全工具，提升编程效率",
        url: "https://www.tabnine.com",
        category: "AI编程工具",
        tags: ["AI","编程","代码补全","IDE插件"]
    },
    {
        name: "Bolt.new",
        description: "AI全栈开发工具，快速构建Web应用",
        url: "https://bolt.new",
        category: "AI编程工具",
        tags: ["AI","全栈","Web开发","快速开发"]
    },
    {
        name: "Canva AI",
        description: "AI设计工具，智能设计模板生成",
        url: "https://www.canva.com",
        category: "AI设计工具",
        tags: ["AI","设计","海报","模板"]
    },
    {
        name: "Figma AI",
        description: "专业UI设计工具，AI辅助设计",
        url: "https://www.figma.com",
        category: "AI设计工具",
        tags: ["AI","UI设计","原型","协作"]
    },
    {
        name: "即时设计",
        description: "国产UI设计工具，AI设计助手",
        url: "https://js.design",
        category: "AI设计工具",
        tags: ["AI","UI设计","原型","协作","国产"]
    },
    {
        name: "WPS AI",
        description: "WPS内置AI助手，智能文档处理",
        url: "https://www.wps.cn",
        category: "AI办公工具",
        tags: ["AI","办公","文档","WPS"]
    },
    {
        name: "ChatPPT",
        description: "AI生成PPT，一键创建演示文稿",
        url: "https://chat-ppt.com",
        category: "AI办公工具",
        tags: ["AI","PPT","演示","自动生成"]
    },
    {
        name: "ChatExcel",
        description: "AI表格处理助手，自然语言操作Excel",
        url: "https://chatexcel.com",
        category: "AI办公工具",
        tags: ["AI","Excel","表格","数据处理"]
    },
    {
        name: "讯飞听见",
        description: "AI会议转写工具，实时语音转文字",
        url: "https://www.iflyrec.com",
        category: "AI办公工具",
        tags: ["AI","转写","会议","语音识别"]
    },
    {
        name: "DeepL",
        description: "AI翻译工具，翻译质量高",
        url: "https://www.deepl.com",
        category: "AI办公工具",
        tags: ["AI","翻译","多语言","准确"]
    },
    {
        name: "彩云小译",
        description: "AI翻译工具，支持网页实时翻译",
        url: "https://fanyi.caiyunapp.com",
        category: "AI办公工具",
        tags: ["AI","翻译","网页翻译","实时"]
    },
    {
        name: "Perplexity",
        description: "AI搜索引擎，智能问答和信息检索",
        url: "https://www.perplexity.ai",
        category: "AI搜索引擎",
        tags: ["AI","搜索","问答","智能"]
    },
    {
        name: "秘塔AI搜索",
        description: "国产AI搜索引擎，无广告纯净搜索",
        url: "https://metaso.cn",
        category: "AI搜索引擎",
        tags: ["AI","搜索","无广告","国产"]
    },
    {
        name: "天工AI",
        description: "昆仑万维AI搜索和对话",
        url: "https://www.tiangong.cn",
        category: "AI搜索引擎",
        tags: ["AI","搜索","对话","国产"]
    },
    {
        name: "百度",
        description: "中国最大的搜索引擎",
        url: "https://www.baidu.com",
        category: "搜索引擎",
        tags: ["搜索","百度","查找"]
    },
    {
        name: "Google",
        description: "全球最大的搜索引擎",
        url: "https://www.google.com",
        category: "搜索引擎",
        tags: ["搜索","谷歌","Google"]
    },
    {
        name: "必应",
        description: "微软搜索引擎",
        url: "https://www.bing.com",
        category: "搜索引擎",
        tags: ["搜索","必应","Bing"]
    },
    {
        name: "搜狗搜索",
        description: "搜狗搜索引擎，擅长微信搜索",
        url: "https://www.sogou.com",
        category: "搜索引擎",
        tags: ["搜索","搜狗","微信"]
    },
    {
        name: "石墨文档",
        description: "国内领先的在线协作文档工具",
        url: "https://shimo.im",
        category: "在线办公",
        tags: ["文档","协作","办公"]
    },
    {
        name: "腾讯文档",
        description: "腾讯出品的在线文档，支持多人协作",
        url: "https://docs.qq.com",
        category: "在线办公",
        tags: ["文档","协作","办公","表格"]
    },
    {
        name: "飞书文档",
        description: "字节跳动的协作平台，功能强大",
        url: "https://www.feishu.cn",
        category: "在线办公",
        tags: ["文档","协作","办公","团队"]
    },
    {
        name: "钉钉",
        description: "阿里巴巴企业协作平台，智能办公",
        url: "https://www.dingtalk.com",
        category: "在线办公",
        tags: ["办公","协作","企业","钉钉"]
    },
    {
        name: "企业微信",
        description: "微信官方企业办公平台",
        url: "https://work.weixin.qq.com",
        category: "在线办公",
        tags: ["办公","企业微信","协作","微信"]
    },
    {
        name: "Canva",
        description: "简单易用的在线设计工具，海量模板",
        url: "https://www.canva.com",
        category: "设计与创意",
        tags: ["设计","海报","模板","作图"]
    },
    {
        name: "创客贴",
        description: "国内优秀的平面设计工具，丰富模板",
        url: "https://www.chuangkit.com",
        category: "设计与创意",
        tags: ["设计","海报","模板","作图"]
    },
    {
        name: "Unsplash",
        description: "高质量免费图片素材库",
        url: "https://unsplash.com",
        category: "设计与创意",
        tags: ["图片","素材","免费","高清"]
    },
    {
        name: "Pexels",
        description: "免费高清图片和视频素材",
        url: "https://www.pexels.com",
        category: "设计与创意",
        tags: ["图片","视频","素材","免费"]
    },
    {
        name: "站酷",
        description: "中国设计师互动平台，作品展示与交流",
        url: "https://www.zcool.com.cn",
        category: "设计与创意",
        tags: ["设计","作品","灵感","素材"]
    },
    {
        name: "Dribbble",
        description: "全球设计师作品展示平台，寻找灵感",
        url: "https://dribbble.com",
        category: "设计与创意",
        tags: ["设计","灵感","UI","作品"]
    },
    {
        name: "Behance",
        description: "Adobe旗下创意作品展示平台",
        url: "https://www.behance.net",
        category: "设计与创意",
        tags: ["设计","作品","创意","Adobe"]
    },
    {
        name: "花瓣网",
        description: "图片采集工具，设计师灵感库",
        url: "https://huaban.com",
        category: "设计与创意",
        tags: ["设计","采集","灵感","素材"]
    },
    {
        name: "GitHub",
        description: "全球最大的代码托管平台",
        url: "https://github.com",
        category: "程序开发",
        tags: ["代码","编程","开源","Git"]
    },
    {
        name: "Stack Overflow",
        description: "程序员问答社区",
        url: "https://stackoverflow.com",
        category: "程序开发",
        tags: ["编程","问答","开发"]
    },
    {
        name: "CodePen",
        description: "在线前端代码编辑器和社区",
        url: "https://codepen.io",
        category: "程序开发",
        tags: ["前端","代码","在线编辑"]
    },
    {
        name: "Gitee",
        description: "国内代码托管平台，访问速度快",
        url: "https://gitee.com",
        category: "程序开发",
        tags: ["代码","Git","开源","国内"]
    },
    {
        name: "掘金",
        description: "技术社区，开发者成长平台",
        url: "https://juejin.cn",
        category: "程序开发",
        tags: ["技术","社区","文章","前端"]
    },
    {
        name: "CSDN",
        description: "中国最大的IT技术社区",
        url: "https://www.csdn.net",
        category: "程序开发",
        tags: ["技术","博客","编程","问答"]
    },
    {
        name: "LeetCode",
        description: "算法题库，程序员刷题平台",
        url: "https://leetcode.cn",
        category: "程序开发",
        tags: ["算法","刷题","面试","编程"]
    },
    {
        name: "Replit",
        description: "在线编程IDE，支持多种语言",
        url: "https://replit.com",
        category: "程序开发",
        tags: ["在线编程","IDE","代码"]
    },
    {
        name: "人人都是产品经理",
        description: "产品经理学习社区，行业资讯与经验分享",
        url: "https://www.woshipm.com",
        category: "产品与运营",
        tags: ["产品","运营","社区","学习"]
    },
    {
        name: "36氪",
        description: "科技创投媒体，关注创业与创新",
        url: "https://36kr.com",
        category: "产品与运营",
        tags: ["科技","创业","资讯","投资"]
    },
    {
        name: "虎嗅",
        description: "商业资讯平台，深度科技报道",
        url: "https://www.huxiu.com",
        category: "产品与运营",
        tags: ["商业","科技","资讯","分析"]
    },
    {
        name: "Product Hunt",
        description: "发现全球最新产品和工具",
        url: "https://www.producthunt.com",
        category: "产品与运营",
        tags: ["产品","工具","发现","国际"]
    },
    {
        name: "增长黑客",
        description: "用户增长策略与案例分享",
        url: "https://growthhackers.com",
        category: "产品与运营",
        tags: ["增长","运营","营销","策略"]
    },
    {
        name: "Coursera",
        description: "全球顶尖大学在线课程平台",
        url: "https://www.coursera.org",
        category: "学习与知识",
        tags: ["学习","课程","教育"]
    },
    {
        name: "B站",
        description: "学习娱乐两不误的视频平台",
        url: "https://www.bilibili.com",
        category: "学习与知识",
        tags: ["视频","学习","教程","娱乐"]
    },
    {
        name: "知乎",
        description: "中文互联网高质量问答社区",
        url: "https://www.zhihu.com",
        category: "学习与知识",
        tags: ["问答","知识","社区","学习"]
    },
    {
        name: "维基百科",
        description: "自由的百科全书，全球知识库",
        url: "https://zh.wikipedia.org",
        category: "学习与知识",
        tags: ["百科","知识","查询","学习"]
    },
    {
        name: "中国大学MOOC",
        description: "国内优质大学课程在线学习平台",
        url: "https://www.icourse163.org",
        category: "学习与知识",
        tags: ["课程","大学","MOOC","学习"]
    },
    {
        name: "得到",
        description: "罗振宇创办的知识服务平台",
        url: "https://www.igetget.com",
        category: "学习与知识",
        tags: ["知识","课程","听书","学习"]
    },
    {
        name: "网易公开课",
        description: "免费的国内外名校公开课",
        url: "https://open.163.com",
        category: "学习与知识",
        tags: ["公开课","大学","免费","学习"]
    },
    {
        name: "豆瓣",
        description: "书影音记录与评分平台",
        url: "https://www.douban.com",
        category: "学习与知识",
        tags: ["读书","电影","音乐","评分"]
    },
    {
        name: "Notion",
        description: "全能笔记和协作工具",
        url: "https://www.notion.so",
        category: "效率工具",
        tags: ["笔记","知识管理","协作"]
    },
    {
        name: "语雀",
        description: "阿里巴巴出品的文档与知识库工具",
        url: "https://www.yuque.com",
        category: "效率工具",
        tags: ["文档","知识库","笔记"]
    },
    {
        name: "PDF.ai",
        description: "AI驱动的PDF阅读和对话工具",
        url: "https://pdf.ai",
        category: "效率工具",
        tags: ["PDF","AI","文档分析"]
    },
    {
        name: "淘宝",
        description: "中国最大的网购平台，万能的淘宝",
        url: "https://www.taobao.com",
        category: "电商工具",
        tags: ["淘宝","购物","网购","电商"]
    },
    {
        name: "天猫",
        description: "阿里巴巴B2C平台，品牌商城",
        url: "https://www.tmall.com",
        category: "电商工具",
        tags: ["天猫","购物","品牌","电商"]
    },
    {
        name: "京东",
        description: "综合性购物平台，自营物流快",
        url: "https://www.jd.com",
        category: "电商工具",
        tags: ["京东","购物","电商","自营"]
    },
    {
        name: "Amazon美国站",
        description: "亚马逊美国官网购物平台，北美最大电商平台",
        url: "https://www.amazon.com",
        category: "亚马逊官方平台",
        tags: ["亚马逊","美国","购物","电商","Amazon","北美"]
    },
    {
        name: "Amazon英国站",
        description: "亚马逊英国官网，欧洲主要电商平台",
        url: "https://www.amazon.co.uk",
        category: "亚马逊官方平台",
        tags: ["亚马逊","英国","欧洲","购物","Amazon"]
    },
    {
        name: "Amazon日本站",
        description: "亚马逊日本官网，亚洲主要电商平台",
        url: "https://www.amazon.co.jp",
        category: "亚马逊官方平台",
        tags: ["亚马逊","日本","亚洲","购物","Amazon"]
    },
    {
        name: "Amazon德国站",
        description: "亚马逊德国官网，欧洲主要电商平台",
        url: "https://www.amazon.de",
        category: "亚马逊官方平台",
        tags: ["亚马逊","德国","欧洲","购物","Amazon"]
    },
    {
        name: "Amazon法国站",
        description: "亚马逊法国官网，欧洲主要电商平台",
        url: "https://www.amazon.fr",
        category: "亚马逊官方平台",
        tags: ["亚马逊","法国","欧洲","购物","Amazon"]
    },
    {
        name: "Amazon加拿大站",
        description: "亚马逊加拿大官网，北美电商平台",
        url: "https://www.amazon.ca",
        category: "亚马逊官方平台",
        tags: ["亚马逊","加拿大","北美","购物","Amazon"]
    },
    {
        name: "Amazon买家服务",
        description: "亚马逊官方买家服务中心，订单查询和售后服务",
        url: "https://www.amazon.com/gp/help/customer/display.html",
        category: "亚马逊官方平台",
        tags: ["亚马逊","买家","服务","售后","订单"]
    },
    {
        name: "亚马逊全球开店",
        description: "亚马逊跨境电商卖家平台，中国卖家进入全球市场",
        url: "https://gs.amazon.cn",
        category: "亚马逊官方平台",
        tags: ["亚马逊","卖家","跨境电商","全球开店","Amazon"]
    },
    {
        name: "Amazon卖家中央",
        description: "亚马逊官方卖家后台，管理产品、订单和店铺",
        url: "https://sellercentral.amazon.com",
        category: "亚马逊官方平台",
        tags: ["亚马逊","卖家","后台","店铺","Amazon"]
    },
    {
        name: "Amazon品牌备案",
        description: "亚马逊品牌备案和商标保护平台",
        url: "https://brandservices.amazon.com",
        category: "亚马逊官方平台",
        tags: ["亚马逊","品牌","备案","商标","Amazon"]
    },
    {
        name: "Jungle Scout",
        description: "亚马逊选品神器，销量预估和产品研究工具",
        url: "https://www.junglescout.com",
        category: "亚马逊卖家工具",
        tags: ["亚马逊","选品","数据分析","卖家工具","Amazon"]
    },
    {
        name: "Helium 10",
        description: "亚马逊卖家全能工具，选品、关键词、运营一体化",
        url: "https://www.helium10.com",
        category: "亚马逊卖家工具",
        tags: ["亚马逊","选品","关键词","运营","Amazon"]
    },
    {
        name: "卖家精灵",
        description: "亚马逊大数据选品工具，中文界面友好",
        url: "https://www.sellersprite.com",
        category: "亚马逊卖家工具",
        tags: ["亚马逊","选品","数据","中文","Amazon"]
    },
    {
        name: "AMZScout",
        description: "亚马逊产品研究和销量追踪工具",
        url: "https://amzscout.net",
        category: "亚马逊卖家工具",
        tags: ["亚马逊","选品","销量","追踪","Amazon"]
    },
    {
        name: "AMZ520",
        description: "亚马逊工具导航网站，汇集各类卖家工具",
        url: "https://amz520.com",
        category: "亚马逊卖家工具",
        tags: ["亚马逊","导航","工具","Amazon"]
    },
    {
        name: "Amalyze",
        description: "亚马逊竞品分析和关键词研究工具",
        url: "https://www.amalyze.com",
        category: "亚马逊卖家工具",
        tags: ["亚马逊","竞品","关键词","分析","Amazon"]
    },
    {
        name: "速卖通",
        description: "阿里巴巴旗下跨境电商平台，面向全球市场",
        url: "https://www.aliexpress.com",
        category: "电商工具",
        tags: ["速卖通","跨境电商","电商平台","阿里巴巴","全球开店"]
    },
    {
        name: "Shopify",
        description: "全球领先的独立站建站平台，轻松搭建电商网站",
        url: "https://www.shopify.com",
        category: "电商工具",
        tags: ["独立站","建站","电商平台","Shopify","跨境电商"]
    },
    {
        name: "1688",
        description: "阿里巴巴B2B批发平台，一件代发货源",
        url: "https://www.1688.com",
        category: "电商工具",
        tags: ["批发","货源","1688","阿里巴巴","一件代发"]
    },
    {
        name: "Wish商户平台",
        description: "移动电商平台Wish卖家后台",
        url: "https://merchant.wish.com",
        category: "电商工具",
        tags: ["Wish","跨境电商","移动电商","电商平台"]
    },
    {
        name: "eBay",
        description: "全球知名在线拍卖和购物网站",
        url: "https://www.ebay.com",
        category: "电商工具",
        tags: ["eBay","跨境电商","拍卖","电商平台"]
    },
    {
        name: "Etsy",
        description: "手工艺品和复古商品交易平台",
        url: "https://www.etsy.com",
        category: "电商工具",
        tags: ["Etsy","手工","创意","电商平台","跨境电商"]
    },
    {
        name: "拼多多商家版",
        description: "拼多多商家管理后台",
        url: "https://mms.pinduoduo.com",
        category: "电商工具",
        tags: ["拼多多","电商","社交电商","开店"]
    },
    {
        name: "抖音电商",
        description: "抖音电商创作者服务平台",
        url: "https://fxg.jinritemai.com",
        category: "电商工具",
        tags: ["抖音","电商","直播带货","短视频"]
    },
    {
        name: "微信",
        description: "腾讯即时通讯工具，社交必备",
        url: "https://weixin.qq.com",
        category: "社交娱乐",
        tags: ["微信","社交","聊天","腾讯"]
    },
    {
        name: "QQ",
        description: "腾讯经典即时通讯软件",
        url: "https://im.qq.com",
        category: "社交娱乐",
        tags: ["QQ","社交","聊天","腾讯"]
    },
    {
        name: "抖音",
        description: "短视频社交平台，记录美好生活",
        url: "https://www.douyin.com",
        category: "社交娱乐",
        tags: ["短视频","抖音","娱乐","社交"]
    },
    {
        name: "小红书",
        description: "生活方式分享平台，种草神器",
        url: "https://www.xiaohongshu.com",
        category: "社交娱乐",
        tags: ["种草","分享","生活","购物"]
    },
    {
        name: "微博",
        description: "新浪微博，热点资讯聚集地",
        url: "https://weibo.com",
        category: "社交娱乐",
        tags: ["微博","社交","热点","资讯"]
    },
    {
        name: "网易云音乐",
        description: "在线音乐平台，发现好音乐",
        url: "https://music.163.com",
        category: "社交娱乐",
        tags: ["音乐","歌曲","听歌","播放器"]
    },
    {
        name: "QQ音乐",
        description: "腾讯音乐娱乐平台",
        url: "https://y.qq.com",
        category: "社交娱乐",
        tags: ["音乐","歌曲","听歌","腾讯"]
    },
    {
        name: "优酷",
        description: "综合视频平台，影视剧综艺",
        url: "https://www.youku.com",
        category: "社交娱乐",
        tags: ["视频","影视","综艺","电影"]
    },
    {
        name: "爱奇艺",
        description: "在线视频平台，热门影视剧",
        url: "https://www.iqiyi.com",
        category: "社交娱乐",
        tags: ["视频","影视","电影","综艺"]
    },
    {
        name: "美团",
        description: "本地生活服务平台，吃喝玩乐全都有",
        url: "https://www.meituan.com",
        category: "生活服务",
        tags: ["外卖","团购","生活","服务"]
    },
    {
        name: "饿了么",
        description: "在线外卖订餐平台",
        url: "https://www.ele.me",
        category: "生活服务",
        tags: ["外卖","订餐","美食","配送"]
    },
    {
        name: "大众点评",
        description: "本地生活信息及交易平台",
        url: "https://www.dianping.com",
        category: "生活服务",
        tags: ["点评","美食","生活","团购"]
    },
    {
        name: "携程",
        description: "在线旅游服务平台，订票订酒店",
        url: "https://www.ctrip.com",
        category: "生活服务",
        tags: ["旅游","酒店","机票","火车票"]
    },
    {
        name: "12306",
        description: "中国铁路客户服务中心，火车票官网",
        url: "https://www.12306.cn",
        category: "生活服务",
        tags: ["火车票","高铁","铁路","购票"]
    },
    {
        name: "高德地图",
        description: "专业的手机地图，智能导航",
        url: "https://www.amap.com",
        category: "生活服务",
        tags: ["地图","导航","出行","路线"]
    },
    {
        name: "百度地图",
        description: "百度地图，出行好帮手",
        url: "https://map.baidu.com",
        category: "生活服务",
        tags: ["地图","导航","出行","百度"]
    },
    {
        name: "天气预报",
        description: "中国天气网，权威天气预报",
        url: "https://www.weather.com.cn",
        category: "生活服务",
        tags: ["天气","预报","气象","查询"]
    },
    {
        name: "新华网",
        description: "新华通讯社官网，权威新闻",
        url: "https://www.xinhuanet.com",
        category: "新闻资讯",
        tags: ["新闻","资讯","时政","权威"]
    },
    {
        name: "人民网",
        description: "人民日报官方网站",
        url: "https://www.people.com.cn",
        category: "新闻资讯",
        tags: ["新闻","资讯","时政","权威"]
    },
    {
        name: "今日头条",
        description: "个性化推荐资讯平台",
        url: "https://www.toutiao.com",
        category: "新闻资讯",
        tags: ["新闻","资讯","热点","推荐"]
    },
    {
        name: "澎湃新闻",
        description: "专注时政与思想的新闻平台",
        url: "https://www.thepaper.cn",
        category: "新闻资讯",
        tags: ["新闻","时政","深度","资讯"]
    },
    {
        name: "腾讯新闻",
        description: "腾讯新闻客户端，实时热点",
        url: "https://news.qq.com",
        category: "新闻资讯",
        tags: ["新闻","资讯","腾讯","热点"]
    },
    {
        name: "网易新闻",
        description: "网易新闻中心，有态度的新闻",
        url: "https://news.163.com",
        category: "新闻资讯",
        tags: ["新闻","资讯","网易","热点"]
    },
    {
        name: "同花顺",
        description: "专业股票软件，实时行情分析",
        url: "https://www.10jqka.com.cn",
        category: "金融投资",
        tags: ["股票","炒股","行情","分析"]
    },
    {
        name: "东方财富",
        description: "财经资讯门户，股票行情查询",
        url: "https://www.eastmoney.com",
        category: "金融投资",
        tags: ["财经","股票","基金","行情"]
    },
    {
        name: "雪球",
        description: "投资者社交网络，交流投资心得",
        url: "https://xueqiu.com",
        category: "金融投资",
        tags: ["投资","股票","社区","交流"]
    },
    {
        name: "天天基金",
        description: "基金交易平台，基金数据查询",
        url: "https://fund.eastmoney.com",
        category: "金融投资",
        tags: ["基金","理财","投资","数据"]
    },
    {
        name: "支付宝",
        description: "蚂蚁集团支付平台，生活缴费理财",
        url: "https://www.alipay.com",
        category: "金融投资",
        tags: ["支付","理财","基金","生活"]
    },
    {
        name: "微信支付",
        description: "腾讯支付平台",
        url: "https://pay.weixin.qq.com",
        category: "金融投资",
        tags: ["支付","微信","转账","收款"]
    },
    {
        name: "银行汇率网",
        description: "外汇牌价查询，汇率转换",
        url: "https://www.chinamoney.com.cn",
        category: "金融投资",
        tags: ["汇率","外汇","银行","查询"]
    },
    {
        name: "Google Trends",
        description: "谷歌趋势分析，了解产品搜索热度和市场趋势",
        url: "https://trends.google.com",
        category: "跨境选品工具",
        tags: ["谷歌","趋势","搜索","分析","选品"]
    },
    {
        name: "Ahrefs",
        description: "专业SEO工具，关键词研究和竞品分析",
        url: "https://ahrefs.com",
        category: "跨境关键词工具",
        tags: ["SEO","关键词","外链","竞品"]
    },
    {
        name: "SEMrush",
        description: "全能数字营销工具，SEO和广告分析",
        url: "https://www.semrush.com",
        category: "跨境关键词工具",
        tags: ["SEO","关键词","广告","营销"]
    },
    {
        name: "Ubersuggest",
        description: "免费关键词建议和SEO分析工具",
        url: "https://neilpatel.com/ubersuggest",
        category: "跨境关键词工具",
        tags: ["关键词","SEO","免费","分析"]
    },
    {
        name: "Keyword Tool",
        description: "基于Google自动补全的关键词工具",
        url: "https://keywordtool.io",
        category: "跨境关键词工具",
        tags: ["关键词","谷歌","长尾词","建议"]
    },
    {
        name: "Google Ads",
        description: "谷歌广告平台，搜索和展示广告",
        url: "https://ads.google.com",
        category: "跨境广告平台",
        tags: ["谷歌","广告","SEM","投放"]
    },
    {
        name: "Facebook Ads",
        description: "Facebook广告管理平台，社交媒体营销",
        url: "https://www.facebook.com/business/ads",
        category: "跨境广告平台",
        tags: ["Facebook","广告","社交","营销"]
    },
    {
        name: "TikTok Ads",
        description: "TikTok广告平台，短视频营销",
        url: "https://ads.tiktok.com",
        category: "跨境广告平台",
        tags: ["TikTok","广告","短视频","营销"]
    },
    {
        name: "Pinterest Ads",
        description: "Pinterest广告平台，视觉内容营销",
        url: "https://ads.pinterest.com",
        category: "跨境广告平台",
        tags: ["Pinterest","广告","视觉","营销"]
    },
    {
        name: "WooCommerce",
        description: "WordPress电商插件，免费开源",
        url: "https://woocommerce.com",
        category: "跨境建站系统",
        tags: ["WordPress","电商","开源","插件"]
    },
    {
        name: "Wix",
        description: "拖拽式建站平台，简单易用",
        url: "https://www.wix.com",
        category: "跨境建站系统",
        tags: ["建站","拖拽","网站","模板"]
    },
    {
        name: "Squarespace",
        description: "专业网站构建平台，设计精美",
        url: "https://www.squarespace.com",
        category: "跨境建站系统",
        tags: ["建站","设计","网站","模板"]
    },
    {
        name: "Magento",
        description: "企业级开源电商平台",
        url: "https://magento.com",
        category: "跨境建站系统",
        tags: ["电商","开源","企业级","Magento"]
    },
    {
        name: "PayPal",
        description: "全球知名在线支付平台",
        url: "https://www.paypal.com",
        category: "跨境支付收款",
        tags: ["支付","收款","PayPal","国际"]
    },
    {
        name: "Stripe",
        description: "强大的在线支付处理平台",
        url: "https://stripe.com",
        category: "跨境支付收款",
        tags: ["支付","收款","Stripe","API"]
    },
    {
        name: "Payoneer",
        description: "跨境收款平台，支持多币种",
        url: "https://www.payoneer.com",
        category: "跨境支付收款",
        tags: ["收款","跨境","多币种","提现"]
    },
    {
        name: "万里汇",
        description: "蚂蚁集团跨境收款服务",
        url: "https://www.worldfirst.com.cn",
        category: "跨境支付收款",
        tags: ["收款","跨境","汇率","结汇"]
    },
    {
        name: "连连支付",
        description: "跨境电商收款和支付解决方案",
        url: "https://www.lianlianpay.com",
        category: "跨境支付收款",
        tags: ["收款","支付","跨境","电商"]
    },
    {
        name: "递四方",
        description: "跨境电商物流综合服务商",
        url: "https://www.4px.com",
        category: "跨境物流服务",
        tags: ["物流","跨境","仓储","配送"]
    },
    {
        name: "燕文物流",
        description: "专业跨境电商物流服务",
        url: "https://www.yw56.com.cn",
        category: "跨境物流服务",
        tags: ["物流","跨境","专线","小包"]
    },
    {
        name: "云途物流",
        description: "跨境物流解决方案提供商",
        url: "https://www.yunexpress.com",
        category: "跨境物流服务",
        tags: ["物流","跨境","云途","专线"]
    },
    {
        name: "DHL",
        description: "国际快递和物流服务",
        url: "https://www.dhl.com",
        category: "跨境物流服务",
        tags: ["快递","国际","物流","DHL"]
    },
    {
        name: "FedEx",
        description: "全球快递物流服务",
        url: "https://www.fedex.com",
        category: "跨境物流服务",
        tags: ["快递","国际","物流","FedEx"]
    },
    {
        name: "AspireIQ",
        description: "网红营销平台，连接品牌和创作者",
        url: "https://aspireiq.com",
        category: "跨境网红营销",
        tags: ["网红","营销","合作","创作者"]
    },
    {
        name: "Upfluence",
        description: "网红营销和联盟营销平台",
        url: "https://www.upfluence.com",
        category: "跨境网红营销",
        tags: ["网红","营销","联盟","分析"]
    },
    {
        name: "Grin",
        description: "电商网红营销管理平台",
        url: "https://grin.co",
        category: "跨境网红营销",
        tags: ["网红","电商","管理","营销"]
    },
    {
        name: "NoxInfluencer",
        description: "YouTube网红数据分析平台",
        url: "https://www.noxinfluencer.com",
        category: "跨境网红营销",
        tags: ["YouTube","网红","数据","分析"]
    },
    {
        name: "SimilarWeb",
        description: "网站流量和竞品分析工具",
        url: "https://www.similarweb.com",
        category: "跨境数据分析",
        tags: ["流量","分析","竞品","数据"]
    },
    {
        name: "Google Analytics",
        description: "谷歌网站分析工具，追踪用户行为",
        url: "https://analytics.google.com",
        category: "跨境数据分析",
        tags: ["分析","谷歌","流量","用户"]
    },
    {
        name: "Hotjar",
        description: "用户行为分析和热力图工具",
        url: "https://www.hotjar.com",
        category: "跨境数据分析",
        tags: ["热力图","录屏","分析","用户"]
    },
    {
        name: "Mixpanel",
        description: "产品分析平台，追踪用户转化",
        url: "https://mixpanel.com",
        category: "跨境数据分析",
        tags: ["分析","转化","用户","产品"]
    },
    {
        name: "Mailchimp",
        description: "流行的邮件营销自动化平台",
        url: "https://mailchimp.com",
        category: "跨境邮件营销",
        tags: ["邮件","营销","自动化","EDM"]
    },
    {
        name: "Klaviyo",
        description: "电商专用邮件和短信营销平台",
        url: "https://www.klaviyo.com",
        category: "跨境邮件营销",
        tags: ["邮件","短信","电商","营销"]
    },
    {
        name: "Omnisend",
        description: "多渠道营销自动化平台",
        url: "https://www.omnisend.com",
        category: "跨境邮件营销",
        tags: ["邮件","营销","自动化","多渠道"]
    },
    {
        name: "SendGrid",
        description: "邮件发送和营销平台",
        url: "https://sendgrid.com",
        category: "跨境邮件营销",
        tags: ["邮件","发送","API","营销"]
    },
    {
        name: "义乌购",
        description: "义乌小商品批发市场",
        url: "https://www.yiwugo.com",
        category: "跨境货源平台",
        tags: ["义乌","批发","小商品","货源"]
    },
    {
        name: "Alibaba",
        description: "国际版阿里巴巴，B2B批发平台",
        url: "https://www.alibaba.com",
        category: "跨境货源平台",
        tags: ["批发","B2B","国际","货源"]
    },
    {
        name: "AliExpress",
        description: "速卖通，一件代发货源",
        url: "https://www.aliexpress.com",
        category: "跨境货源平台",
        tags: ["速卖通","代发","货源","零售"]
    },
    {
        name: "CJ Dropshipping",
        description: "专业代发货平台",
        url: "https://cjdropshipping.com",
        category: "跨境货源平台",
        tags: ["代发","货源","仓储","物流"]
    },
    {
        name: "雨果跨境",
        description: "跨境电商行业资讯和学习平台",
        url: "https://www.cifnews.com",
        category: "跨境资讯媒体",
        tags: ["资讯","跨境","学习","行业"]
    },
    {
        name: "AMZ123",
        description: "亚马逊卖家导航和资讯",
        url: "https://www.amz123.com",
        category: "跨境资讯媒体",
        tags: ["亚马逊","导航","资讯","工具"]
    },
    {
        name: "跨境电商鹰熊汇",
        description: "跨境电商知识分享社区",
        url: "https://www.yingxionghui.com",
        category: "跨境资讯媒体",
        tags: ["跨境","知识","社区","分享"]
    },
    {
        name: "Pinterest",
        description: "全世界的设计灵感都在这里",
        url: "https://www.pinterest.com",
        category: "设计灵感网站",
        tags: ["设计","灵感","图片","收藏"]
    },
    {
        name: "Awwwards",
        description: "欧美网页设计欣赏和评选",
        url: "https://www.awwwards.com",
        category: "设计灵感网站",
        tags: ["网页","设计","欣赏","获奖"]
    },
    {
        name: "UI中国",
        description: "专业UI设计师交流平台",
        url: "https://www.ui.cn",
        category: "设计灵感网站",
        tags: ["UI","设计","交流","作品"]
    },
    {
        name: "Freepik",
        description: "百万级矢量素材库",
        url: "https://www.freepik.com",
        category: "设计素材下载",
        tags: ["矢量","素材","插画","图标"]
    },
    {
        name: "Iconfinder",
        description: "图标搜索引擎，海量图标资源",
        url: "https://www.iconfinder.com",
        category: "设计素材下载",
        tags: ["图标","icon","搜索","素材"]
    },
    {
        name: "Flaticon",
        description: "超900万枚免费图标素材",
        url: "https://www.flaticon.com",
        category: "设计素材下载",
        tags: ["图标","扁平化","免费","矢量"]
    },
    {
        name: "阿里图标库",
        description: "阿里巴巴矢量图标库",
        url: "https://www.iconfont.cn",
        category: "设计素材下载",
        tags: ["图标","矢量","中文","免费"]
    },
    {
        name: "Coolors",
        description: "在线配色和配色方案生成",
        url: "https://coolors.co",
        category: "设计配色工具",
        tags: ["配色","颜色","调色板","生成"]
    },
    {
        name: "Adobe Color",
        description: "Adobe官方配色工具",
        url: "https://color.adobe.com",
        category: "设计配色工具",
        tags: ["配色","颜色","Adobe","调色"]
    },
    {
        name: "中国传统色",
        description: "中国传统色彩名称和色值",
        url: "http://zhongguose.com",
        category: "设计配色工具",
        tags: ["配色","中国","传统","颜色"]
    },
    {
        name: "日本传统色",
        description: "日本传统色系展示",
        url: "https://nipponcolors.com",
        category: "设计配色工具",
        tags: ["配色","日本","传统","颜色"]
    },
    {
        name: "UI Gradients",
        description: "生成美丽的渐变颜色",
        url: "https://uigradients.com",
        category: "设计配色工具",
        tags: ["渐变","配色","颜色","UI"]
    },
    {
        name: "稿定设计",
        description: "在线PS、抠图、作图神器",
        url: "https://www.gaoding.com",
        category: "在线设计工具",
        tags: ["设计","在线","PS","抠图"]
    },
    {
        name: "摹客",
        description: "产品设计协作平台",
        url: "https://www.mockplus.cn",
        category: "在线设计工具",
        tags: ["原型","设计","协作","标注"]
    },
    {
        name: "Google Fonts",
        description: "谷歌开源字体库",
        url: "https://fonts.google.com",
        category: "设计字体资源",
        tags: ["字体","免费","开源","英文"]
    },
    {
        name: "字体家",
        description: "万款字体免费下载",
        url: "https://www.zitijia.com",
        category: "设计字体资源",
        tags: ["字体","中文","下载","免费"]
    },
    {
        name: "求字体",
        description: "通过图片识别字体",
        url: "https://www.qiuziti.com",
        category: "设计字体资源",
        tags: ["字体","识别","搜索","查找"]
    },
    {
        name: "DaFont",
        description: "大量免费英文字体下载",
        url: "https://www.dafont.com",
        category: "设计字体资源",
        tags: ["字体","英文","免费","下载"]
    },
    {
        name: "Figma",
        description: "协作式界面设计工具",
        url: "https://www.figma.com",
        category: "设计软件工具",
        tags: ["设计","协作","UI","原型"]
    },
    {
        name: "Sketch",
        description: "Mac平台专业UI设计工具",
        url: "https://www.sketch.com",
        category: "设计软件工具",
        tags: ["设计","UI","Mac","矢量"]
    },
    {
        name: "蓝湖",
        description: "设计协作平台和标注工具",
        url: "https://lanhuapp.com",
        category: "设计软件工具",
        tags: ["协作","标注","设计","团队"]
    },
    {
        name: "虎课网",
        description: "设计视频教程学习平台",
        url: "https://huke88.com",
        category: "设计学习平台",
        tags: ["教程","学习","设计","视频"]
    },
    {
        name: "优设网",
        description: "设计师学习平台和资讯网站",
        url: "https://www.uisdc.com",
        category: "设计学习平台",
        tags: ["设计","学习","教程","资讯"]
    },
    {
        name: "设计达人",
        description: "设计资源和教程分享",
        url: "https://www.shejidaren.com",
        category: "设计学习平台",
        tags: ["设计","教程","资源","分享"]
    },
    {
        name: "GPTZero",
        description: "AI内容检测工具，识别AI生成文本",
        url: "https://gptzero.me",
        category: "AI检测工具",
        tags: ["AI检测","内容检测","AI识别"]
    },
    {
        name: "ZeroGPT",
        description: "免费AI文本检测器",
        url: "https://www.zerogpt.com",
        category: "AI检测工具",
        tags: ["AI检测","文本检测","免费"]
    },
    {
        name: "Copyleaks",
        description: "AI内容检测和抄袭检查",
        url: "https://copyleaks.com",
        category: "AI检测工具",
        tags: ["AI检测","抄袭检查","原创性"]
    },
    {
        name: "PromptBase",
        description: "AI提示词市场，买卖优质提示词",
        url: "https://promptbase.com",
        category: "提示词工程",
        tags: ["提示词","Prompt","市场","交易"]
    },
    {
        name: "PromptHero",
        description: "AI提示词搜索和分享社区",
        url: "https://prompthero.com",
        category: "提示词工程",
        tags: ["提示词","Prompt","社区","搜索"]
    },
    {
        name: "FlowGPT",
        description: "AI提示词社区和工具",
        url: "https://flowgpt.com",
        category: "提示词工程",
        tags: ["提示词","Prompt","社区","工具"]
    },
    {
        name: "Jasper",
        description: "AI营销文案生成工具",
        url: "https://www.jasper.ai",
        category: "AI营销工具",
        tags: ["AI","营销","文案","广告"]
    },
    {
        name: "Copy.ai",
        description: "AI文案创作和营销工具",
        url: "https://www.copy.ai",
        category: "AI营销工具",
        tags: ["AI","文案","营销","创作"]
    },
    {
        name: "Simplified",
        description: "AI设计和营销一体化平台",
        url: "https://simplified.com",
        category: "AI营销工具",
        tags: ["AI","营销","设计","多合一"]
    },
    {
        name: "Julius AI",
        description: "AI数据分析助手，智能数据洞察",
        url: "https://julius.ai",
        category: "AI数据分析",
        tags: ["AI","数据分析","商业智能","洞察"]
    },
    {
        name: "DataRobot",
        description: "企业级AI和机器学习平台",
        url: "https://www.datarobot.com",
        category: "AI数据分析",
        tags: ["AI","机器学习","企业","数据"]
    },
    {
        name: "Tableau",
        description: "数据可视化和商业智能工具",
        url: "https://www.tableau.com",
        category: "AI数据分析",
        tags: ["数据可视化","商业智能","分析"]
    },
    {
        name: "Tidio",
        description: "AI客服聊天机器人",
        url: "https://www.tidio.com",
        category: "AI客服",
        tags: ["AI","客服","聊天机器人","自动化"]
    },
    {
        name: "Intercom",
        description: "智能客户服务平台",
        url: "https://www.intercom.com",
        category: "AI客服",
        tags: ["AI","客服","CRM","沟通"]
    },
    {
        name: "美洽",
        description: "国产智能客服系统",
        url: "https://meiqia.com",
        category: "AI客服",
        tags: ["AI","客服","国产","智能"]
    },
    {
        name: "Khan Academy",
        description: "在线教育平台，AI个性化学习",
        url: "https://www.khanacademy.org",
        category: "AI教育",
        tags: ["AI","教育","在线学习","个性化"]
    },
    {
        name: "Duolingo",
        description: "AI语言学习应用",
        url: "https://www.duolingo.com",
        category: "AI教育",
        tags: ["AI","语言学习","教育","应用"]
    },
    {
        name: "作业帮",
        description: "在线作业辅导和学习工具",
        url: "https://www.zybang.com",
        category: "AI教育",
        tags: ["AI","教育","作业","辅导"]
    },
    {
        name: "Meshy",
        description: "AI文本生成3D模型",
        url: "https://www.meshy.ai",
        category: "3D建模",
        tags: ["AI","3D","建模","生成"]
    },
    {
        name: "Spline",
        description: "在线3D设计工具",
        url: "https://spline.design",
        category: "3D建模",
        tags: ["3D","设计","在线","建模"]
    },
    {
        name: "Luma AI",
        description: "AI 3D捕捉和生成",
        url: "https://lumalabs.ai",
        category: "3D建模",
        tags: ["AI","3D","扫描","生成"]
    },
    {
        name: "数英",
        description: "中国数字整合营销资讯平台",
        url: "https://www.digitaling.com",
        category: "广告营销资讯",
        tags: ["营销","广告","创意","资讯"]
    },
    {
        name: "SocialBeta",
        description: "领先的社交媒体和数字营销内容平台",
        url: "https://socialbeta.com",
        category: "广告营销资讯",
        tags: ["社交媒体","营销","品牌","案例"]
    },
    {
        name: "梅花网",
        description: "营销者的信息中心",
        url: "https://www.meihua.info",
        category: "广告营销资讯",
        tags: ["营销","广告","品牌","电商"]
    },
    {
        name: "广告门",
        description: "广告营销行业媒体平台",
        url: "https://www.adquan.com",
        category: "广告营销资讯",
        tags: ["广告","营销","创意","行业"]
    },
    {
        name: "TOPYS",
        description: "全球顶尖创意分享平台",
        url: "https://www.topys.cn",
        category: "广告营销资讯",
        tags: ["创意","设计","广告","灵感"]
    },
    {
        name: "Campaign中国",
        description: "致力于亚太地区的商业传播服务",
        url: "https://www.campaignchina.com",
        category: "广告营销资讯",
        tags: ["广告","营销","品牌","国际"]
    },
    {
        name: "V电影",
        description: "高品质短片分享平台",
        url: "https://www.vmovier.com",
        category: "创意视频平台",
        tags: ["视频","短片","创意","广告"]
    },
    {
        name: "新片场",
        description: "专业的影视创作人社区",
        url: "https://www.xinpianchang.com",
        category: "创意视频平台",
        tags: ["视频","影视","创作","社区"]
    },
    {
        name: "开眼",
        description: "每日精选创意视频",
        url: "https://www.kaiyanapp.com",
        category: "创意视频平台",
        tags: ["视频","创意","精选","短片"]
    },
    {
        name: "戛纳国际创意节",
        description: "广告界的奥斯卡，全球最高创意奖项",
        url: "https://www.canneslions.com",
        category: "广告创意奖项",
        tags: ["奖项","创意","广告","国际"]
    },
    {
        name: "金投赏",
        description: "中国商业创意奖项",
        url: "http://www.roifestival.com",
        category: "广告创意奖项",
        tags: ["奖项","创意","商业","中国"]
    },
    {
        name: "D&AD",
        description: "全球创意广告设计协会",
        url: "https://www.dandad.org",
        category: "广告创意奖项",
        tags: ["奖项","设计","广告","黄铅笔"]
    },
    {
        name: "天与空",
        description: "跨越一切沟通平台的创意公司",
        url: "http://www.tianyukong.com",
        category: "创意设计公司",
        tags: ["广告","创意","设计","传播"]
    },
    {
        name: "KARMA 颉摩广告",
        description: "我们相信，创意就是影响世界的力量",
        url: "http://www.karmais.me",
        category: "创意设计公司",
        tags: ["广告","创意","设计","影响力"]
    },
    {
        name: "GOODZILLA 意类广告",
        description: "我们是互联网整合营销专家",
        url: "http://www.goodzilla.cn",
        category: "创意设计公司",
        tags: ["广告","互联网","营销","整合"]
    },
    {
        name: "neone 有门互动",
        description: "广告有门，创意无门",
        url: "http://www.neone.com.cn",
        category: "创意设计公司",
        tags: ["广告","创意","互动","设计"]
    },
    {
        name: "Ogilvy 奥美",
        description: "我们让品牌变得有意义",
        url: "http://www.ogilvy.com.cn",
        category: "创意设计公司",
        tags: ["广告","品牌","创意","全球"]
    },
    {
        name: "胜加SG",
        description: "为胜利加分",
        url: "http://www.sgad.com.cn",
        category: "创意设计公司",
        tags: ["广告","创意","设计","营销"]
    },
    {
        name: "SociaLab 环时互动",
        description: "让想象力实现的传播机构",
        url: "http://www.socialab.com.cn/pc.html",
        category: "创意设计公司",
        tags: ["广告","互动","传播","创意"]
    },
    {
        name: "有氧 YOYA Digital",
        description: "有预算吗？我氧你",
        url: "http://www.cn-yoya.com",
        category: "创意设计公司",
        tags: ["广告","创意","数字","营销"]
    },
    {
        name: "CubeRights 对立方",
        description: "创意力的探索者",
        url: "http://www.cuberights.com",
        category: "创意设计公司",
        tags: ["广告","创意","探索","设计"]
    },
    {
        name: "北京鲸梦",
        description: "这里的创意'生态'很丰富！",
        url: "http://www.whaledream.com",
        category: "创意设计公司",
        tags: ["广告","创意","生态","北京"]
    },
    {
        name: "SPES 神鸦社鼓",
        description: "创作即是我们存在的意义",
        url: "https://www.digitaling.com/company/11767",
        category: "创意设计公司",
        tags: ["广告","创意","创作","设计"]
    },
    {
        name: "W",
        description: "不做创意人，只做创造者",
        url: "http://www.wearewer.com",
        category: "创意设计公司",
        tags: ["广告","创意","创造","设计"]
    },
    {
        name: "LxU",
        description: "让信息更动人",
        url: "http://www.lxustudio.com",
        category: "创意设计公司",
        tags: ["广告","信息","设计","创意"]
    },
    {
        name: "HAOMAI 好卖广告",
        description: "创造美好的当下和未来",
        url: "https://www.digitaling.com/company/11946",
        category: "创意设计公司",
        tags: ["广告","创意","创造","设计"]
    },
    {
        name: "i2mago 原象",
        description: "寻找商业致胜点，解决重要营销问题",
        url: "http://www.i2mago.com",
        category: "创意设计公司",
        tags: ["广告","创意","商业","营销"]
    },
    {
        name: "ONENINE",
        description: "不是在主动合作的过程中，就是在去往合作的路上",
        url: "http://www.onenine19.com",
        category: "创意设计公司",
        tags: ["广告","创意","合作","设计"]
    },
    {
        name: "TOPic",
        description: "以创意解决生意之道，致力于认真做有趣的事",
        url: "http://www.topicad.cn",
        category: "创意设计公司",
        tags: ["广告","创意","生意","有趣"]
    },
    {
        name: "芝麻西瓜",
        description: "为客户提供无界限的创意营销方案",
        url: "http://www.sesamewatermelon.com",
        category: "创意设计公司",
        tags: ["广告","创意","营销","无界"]
    },
    {
        name: "treedom",
        description: "为颠覆而生",
        url: "http://www.treedom.cn",
        category: "创意设计公司",
        tags: ["广告","创意","颠覆","设计"]
    },
    {
        name: "McCann 麦肯",
        description: "善诠涵意，巧传真实",
        url: "https://www.mccannworldgroup.com",
        category: "创意设计公司",
        tags: ["广告","创意","国际","传播"]
    },
    {
        name: "FF佛海佛瑞",
        description: "THINK WITH YOUR HEART",
        url: "https://www.ffcreative.com",
        category: "创意设计公司",
        tags: ["广告","创意","设计","思考"]
    },
    {
        name: "WMY 北京",
        description: "用4A的经典思维模式，找到SOCIAL时代新的营销方式",
        url: "http://www.wmy-ad.com",
        category: "创意设计公司",
        tags: ["广告","创意","社交","营销"]
    },
    {
        name: "UID 北京",
        description: "在品牌和用户背后供给最有想象力的创意弹药",
        url: "http://www.uidworks.com",
        category: "创意设计公司",
        tags: ["广告","创意","品牌","想象"]
    },
    {
        name: "Forsman & Bodenfors",
        description: "瑞典创新技术全球代理商",
        url: "https://forsman.co",
        category: "创意设计公司",
        tags: ["广告","创意","创新","国际"]
    },
    {
        name: "Universal Everything",
        description: "英国视觉/音效/体验设计数字艺术先锋",
        url: "https://universaleverything.com",
        category: "创意设计公司",
        tags: ["广告","设计","数字","艺术"]
    },
    {
        name: "PARTY",
        description: "伊藤直树/清水干太等联合创意公司",
        url: "https://prty.jp",
        category: "创意设计公司",
        tags: ["广告","创意","日本","设计"]
    },
    {
        name: "Studio Swine",
        description: "跨雕塑/装置沉浸式艺术机构",
        url: "https://www.studioswine.com",
        category: "创意设计公司",
        tags: ["设计","艺术","沉浸","雕塑"]
    },
    {
        name: "Johnson Banks",
        description: "混合设计顾问公司",
        url: "https://www.johnsonbanks.co.uk",
        category: "创意设计公司",
        tags: ["设计","顾问","广告","创意"]
    },
    {
        name: "Folch",
        description: "巴塞罗那摄影品牌零售战略咨询",
        url: "https://www.folchstudio.com",
        category: "创意设计公司",
        tags: ["设计","品牌","战略","摄影"]
    },
    {
        name: "Stefan Beckman Studio",
        description: "设计/艺术/广告服务顾问公司",
        url: "https://www.stefanbeckman.com",
        category: "创意设计公司",
        tags: ["设计","艺术","广告","顾问"]
    },
    {
        name: "纽约客",
        description: "世界上最具影响力的杂志之一，提供优质文章和创意灵感",
        url: "https://www.newyorker.com",
        category: "文案创作平台",
        tags: ["文案","杂志","创意","写作","国际"]
    },
    {
        name: "It's Nice That",
        description: "随时了解创意世界正在发生的事，分享全球最新创意资讯",
        url: "https://www.itsnicethat.com",
        category: "文案灵感网站",
        tags: ["文案","创意","设计","灵感","趋势"]
    },
    {
        name: "Voicer",
        description: "分享生活和设计美学，提供创意灵感和设计思路",
        url: "http://www.voicer.me",
        category: "文案灵感网站",
        tags: ["文案","美学","设计","生活方式","创意"]
    },
    {
        name: "Fubiz Media",
        description: "发掘有创造力的人和独特项目的国际创意平台",
        url: "http://www.fubiz.net",
        category: "文案灵感网站",
        tags: ["文案","创意","艺术","设计","项目"]
    },
    {
        name: "Deck of Brilliance",
        description: "帮助创意专业人士产生创新点子的工具和方法",
        url: "http://deckofbrilliance.com",
        category: "文案灵感网站",
        tags: ["文案","创意","灵感","思维工具","创新"]
    },
    {
        name: "Copyblogger",
        description: "提供高质量的内容营销和文案写作教程的专业网站",
        url: "https://copyblogger.com",
        category: "文案学习资源",
        tags: ["文案","学习","营销","写作","教程"]
    },
    {
        name: "Copyhackers",
        description: "专注于转化文案写作技巧的学习平台，帮助提升文案效果",
        url: "https://copyhackers.com",
        category: "文案学习资源",
        tags: ["文案","学习","转化","技巧","策略"]
    },
    {
        name: "Hubspot学院",
        description: "提供营销、销售和文案写作的免费课程和认证",
        url: "https://academy.hubspot.com",
        category: "文案学习资源",
        tags: ["文案","学习","营销","认证","免费"]
    },
    {
        name: "CARGO",
        description: "创建网络工具，帮助创意人才展示作品和获得曝光",
        url: "https://cargocollective.com",
        category: "创意文案社区",
        tags: ["文案","创意","作品集","展示","社区"]
    },
    {
        name: "文案狗",
        description: "专为文案工作者提供灵感和素材的资源网站",
        url: "http://wenangou.com",
        category: "创意文案社区",
        tags: ["文案","广告","营销","写作","中文"]
    },
    {
        name: "Luerzer's Archive",
        description: "收集世界各地30多年来最优秀广告作品的资源库",
        url: "https://www.luerzersarchive.com",
        category: "广告文案库",
        tags: ["文案","广告","创意","案例","经典"]
    },
    {
        name: "Comm Arts",
        description: "展示优秀广告设计、插画和印刷作品的在线画廊",
        url: "https://www.commarts.com/gallery",
        category: "广告文案库",
        tags: ["文案","广告","设计","插画","创意"]
    },
    {
        name: "文案迷",
        description: "广告词、广告语集合网站，提供大量经典文案素材",
        url: "http://www.wenanmi.com",
        category: "广告文案库",
        tags: ["文案","广告","标语","创意","中文"]
    },
    {
        name: "句易网",
        description: "在线广告禁用词查询平台，帮助优化广告文案",
        url: "http://www.ju1.cn",
        category: "广告文案库",
        tags: ["文案","广告","合规","禁用词","审核"]
    },
    {
        name: "Google Analytics 4",
        description: "谷歌全新一代数据分析工具，支持跨平台分析",
        url: "https://analytics.google.com",
        category: "数字分析工具",
        tags: ["分析","数据","谷歌","流量","指标"]
    },
    {
        name: "百度统计",
        description: "百度提供的网站流量分析工具，适合中文网站",
        url: "https://tongji.baidu.com",
        category: "数字分析工具",
        tags: ["分析","数据","百度","流量","中文"]
    },
    {
        name: "Buffer",
        description: "社交媒体营销平台，支持内容发布和数据分析",
        url: "https://buffer.com",
        category: "社交媒体营销",
        tags: ["社交媒体","营销","内容","排期","分析"]
    },
    {
        name: "Hootsuite",
        description: "社交媒体管理平台，支持多账号管理和团队协作",
        url: "https://www.hootsuite.com",
        category: "社交媒体营销",
        tags: ["社交媒体","管理","团队","排期","分析"]
    },
    {
        name: "小红书助手",
        description: "小红书官方创作者平台，数据分析和内容管理",
        url: "https://creator.xiaohongshu.com",
        category: "社交媒体营销",
        tags: ["小红书","社交媒体","创作者","数据","营销"]
    },
    {
        name: "新媒体管家",
        description: "国内新媒体内容管理工具，支持多平台发布",
        url: "https://xmt.cn",
        category: "社交媒体营销",
        tags: ["新媒体","内容","管理","排期","多平台"]
    },
    {
        name: "SendCloud",
        description: "国内专业的邮件推送服务，高送达率和稳定性",
        url: "https://www.sendcloud.net",
        category: "邮件营销平台",
        tags: ["邮件","营销","推送","触达","中文"]
    },
    {
        name: "Substack",
        description: "新闻通讯平台，支持付费订阅和内容管理",
        url: "https://substack.com",
        category: "邮件营销平台",
        tags: ["通讯","订阅","内容","变现","创作者"]
    },
    {
        name: "站长工具",
        description: "国内综合站长工具，包含SEO查询、域名查询等功能",
        url: "https://tool.chinaz.com",
        category: "SEO工具",
        tags: ["SEO","站长","工具","查询","中文"]
    },
    {
        name: "Ahrefs Keyword Explorer",
        description: "Ahrefs提供的关键词研究工具，支持搜索量、难度和趋势分析。",
        url: "https://ahrefs.com/keyword-explorer",
        category: "SEO工具",
        tags: ["关键词研究","搜索量","难度分析"]
    },
    {
        name: "Keyword Tool Dominator",
        description: "基于Google、YouTube等平台的关键词挖掘工具，适合内容策划。",
        url: "https://keywordtool.io",
        category: "SEO工具",
        tags: ["关键词挖掘","Google","YouTube","内容策划"]
    },
    {
        name: "Ahrefs Site Explorer",
        description: "用于分析竞争对手网站的反向链接、流量和内容表现。",
        url: "https://ahrefs.com/site-explorer",
        category: "SEO工具",
        tags: ["竞争分析","反向链接","流量","内容"]
    },
    {
        name: "Moz Link Explorer",
        description: "分析网站外部链接、链接质量、页面权威等SEO指标。",
        url: "https://moz.com/link-explorer",
        category: "SEO工具",
        tags: ["链接分析","链接质量","页面权威"]
    },
    {
        name: "SEMrush Site Audit",
        description: "自动检测网站的技术SEO问题，如爬取错误、页面速度等。",
        url: "https://www.semrush.com/site-audit/",
        category: "SEO工具",
        tags: ["网站审计","技术SEO","爬取错误","页面速度"]
    },
    {
        name: "Screaming Frog SEO Tool",
        description: "用于网站全面爬取和SEO审计的桌面工具，支持HTML、HTTP状态码检查。",
        url: "https://www.screamingfrog.co.uk/seo-spider/",
        category: "SEO工具",
        tags: ["网站爬取","SEO审计","桌面工具"]
    },
    {
        name: "Rank Math",
        description: "WordPress插件，提供完整的SEO优化功能，包括标题优化、XML站点地图等。",
        url: "https://rankmath.com",
        category: "SEO工具",
        tags: ["WordPress","SEO优化","标题优化","站点地图"]
    },
    {
        name: "All-in-One SEO",
        description: "功能强大的WordPress SEO插件，支持关键词分析、元标签管理。",
        url: "https://allinoneseo.com",
        category: "SEO工具",
        tags: ["WordPress","SEO插件","关键词分析","元标签"]
    },
    {
        name: "SISTRIX Toolbox",
        description: "德国领先的SEO工具，提供关键词监控、流量分析和竞争研究。",
        url: "https://www.sistrix.com/tools",
        category: "SEO工具",
        tags: ["关键词监控","流量分析","竞争研究"]
    },
    {
        name: "SpyFu",
        description: "竞争对手SEO分析工具，提供关键词、广告和反向链接分析。",
        url: "https://www.spyfu.com",
        category: "SEO工具",
        tags: ["竞争分析","关键词","广告","反向链接"]
    },
    {
        name: "AccuRanker",
        description: "专注于关键词排名跟踪的SEO工具，支持实时监控和报告生成。",
        url: "https://www.accuranker.com",
        category: "SEO工具",
        tags: ["关键词排名","实时监控","报告生成"]
    },
    {
        name: "Rank Tracker",
        description: "全面的关键词排名跟踪和SEO分析工具，适合中小型企业。",
        url: "https://www.ranktracker.com",
        category: "SEO工具",
        tags: ["排名跟踪","SEO分析","中小型企业"]
    },
    {
        name: "SE Ranking",
        description: "SEO管理平台，提供关键词排名、反向链接和网站审计功能。",
        url: "https://seranking.com",
        category: "SEO工具",
        tags: ["SEO管理","关键词排名","反向链接","网站审计"]
    },
    {
        name: "Sitechecker",
        description: "在线SEO审计工具，帮助检查网站技术问题和内容优化。",
        url: "https://sitechecker.pro",
        category: "SEO工具",
        tags: ["SEO审计","技术问题","内容优化"]
    },
    {
        name: "飞书妙记",
        description: "智能会议记录与内容整理工具，支持会议转文字",
        url: "https://www.feishu.cn/product/minutes",
        category: "内容营销",
        tags: ["会议","记录","内容","转写","整理"]
    },
    {
        name: "墨刀",
        description: "产品原型设计工具，支持团队协作和交互设计",
        url: "https://modao.cc",
        category: "内容营销",
        tags: ["原型","设计","协作","产品","交互"]
    },
    {
        name: "HubSpot",
        description: "一体化营销、销售和客服平台，支持自动化和CRM",
        url: "https://www.hubspot.com",
        category: "营销自动化",
        tags: ["营销","自动化","CRM","销售","客服"]
    },
    {
        name: "Salesforce",
        description: "企业级CRM平台，支持营销自动化和客户管理",
        url: "https://www.salesforce.com",
        category: "营销自动化",
        tags: ["CRM","营销","自动化","企业","客户"]
    },
    {
        name: "知乎广告",
        description: "知乎官方广告投放平台，覆盖高质量用户群体",
        url: "https://marketing.zhihu.com",
        category: "流量获取",
        tags: ["广告","知乎","投放","流量","营销"]
    },
    {
        name: "巨量引擎",
        description: "字节跳动旗下广告投放平台，覆盖抖音、今日头条等产品",
        url: "https://www.oceanengine.com",
        category: "流量获取",
        tags: ["广告","抖音","头条","投放","流量"]
    },
    {
        name: "GrowingIO",
        description: "用户行为分析和增长营销平台，支持全链路数据分析",
        url: "https://www.growingio.com",
        category: "用户增长",
        tags: ["数据","用户","增长","分析","营销"]
    },
    {
        name: "神策数据",
        description: "国内领先的用户行为分析平台，支持私有化部署",
        url: "https://www.sensorsdata.cn",
        category: "用户增长",
        tags: ["数据","用户","分析","增长","行为"]
    },
    {
        name: "中国裁判文书网",
        description: "最高人民法院建立的全国法院统一的裁判文书公开平台，提供检索和下载裁判文书",
        url: "https://wenshu.court.gov.cn",
        category: "裁判案例",
        tags: ["法院","裁判","文书","判决","司法"]
    },
    {
        name: "人民法院案例库",
        description: "由最高人民法院统一建设的案例资源库，收录指导性案例和参考案例",
        url: "https://anli.court.gov.cn",
        category: "裁判案例",
        tags: ["案例","法院","指导案例","参考案例","司法"]
    },
    {
        name: "最高人民法院公报",
        description: "最高人民法院的官方文献汇编，发布司法解释、司法文件、典型案例等重要司法信息",
        url: "https://www.court.gov.cn/fabu-gongbao-all.html",
        category: "裁判案例",
        tags: ["司法解释","典型案例","司法文件","法院","公报"]
    },
    {
        name: "最高人民法院指导性案例",
        description: "由最高人民法院公开发布，供审判类似案件时参照",
        url: "https://www.court.gov.cn/shenpan-xiangqing-382.html",
        category: "裁判案例",
        tags: ["指导性案例","法院","参照","审判","司法"]
    },
    {
        name: "最高人民法院典型案例",
        description: "由最高人民法院公开发布，为类似案件的审理提供了参考和借鉴",
        url: "https://www.court.gov.cn/zixun-anli-all.html",
        category: "裁判案例",
        tags: ["典型案例","法院","借鉴","审理","司法"]
    },
    {
        name: "中国法院案例报道",
        description: "中国法院网案例库，包括指导案例、典型案例、其他案例",
        url: "http://www.chinacourt.org/article/case/",
        category: "裁判案例",
        tags: ["案例","法院","报道","司法","裁判"]
    },
    {
        name: "最高人民检察院指导性案例",
        description: "由最高人民检察院发布，供参照适用",
        url: "https://www.spp.gov.cn/spp/zdal/index.shtml",
        category: "裁判案例",
        tags: ["案例","检察院","指导性","参照","司法"]
    },
    {
        name: "中国司法大数据服务网",
        description: "基于司法大数据资源，推进司法大数据与国家数据资源的融合运用",
        url: "https://data.court.gov.cn",
        category: "裁判案例",
        tags: ["大数据","司法","数据资源","法院","融合"]
    },
    {
        name: "中国市场监管行政处罚文书网",
        description: "由国家市场监督管理总局提供的行政处罚文书检索平台",
        url: "https://cfws.samr.gov.cn",
        category: "裁判案例",
        tags: ["行政处罚","市场监管","文书","检索","监督"]
    },
    {
        name: "威科先行·法律信息库",
        description: "集法规、案例、解读、工具、问答、法律速递、实务模块等为一体",
        url: "https://law.wkinfo.com.cn",
        category: "裁判案例",
        tags: ["法规","案例","解读","工具","问答"]
    },
    {
        name: "北大法宝",
        description: "包括法律法规、司法案例、法学期刊、律所实务、专题参考、检察文书、类案检索等",
        url: "http://www.pkulaw.cn",
        category: "裁判案例",
        tags: ["法律","案例","期刊","实务","专题"]
    },
    {
        name: "无讼案例",
        description: "提供精确、易用的案例检索工具",
        url: "https://www.itslaw.com",
        category: "裁判案例",
        tags: ["案例","检索","法律","司法","裁判"]
    },
    {
        name: "法信",
        description: "由人民法院电子音像出版社建立的法律、案例和法律知识文献资源平台",
        url: "https://www.faxin.cn",
        category: "裁判案例",
        tags: ["法律","案例","知识","文献","资源"]
    },
    {
        name: "元典智库",
        description: "对法规、案例、工商信息、专家观点等内容的检索",
        url: "https://www.chineselaw.com",
        category: "裁判案例",
        tags: ["法规","案例","工商","专家","检索"]
    },
    {
        name: "国家法律法规数据库",
        description: "全国人大常委会联合国家机关共同组建运行，提供宪法、法律、行政法规等电子文本",
        url: "https://flk.npc.gov.cn",
        category: "法律法规",
        tags: ["法律","法规","宪法","人大","条例"]
    },
    {
        name: "最高人民法院权威发布",
        description: "由最高人民法院公开发布司法解释、司法文件等",
        url: "https://www.court.gov.cn/fabu-ft-new.html",
        category: "法律法规",
        tags: ["司法解释","法院","文件","权威","发布"]
    },
    {
        name: "中国法院网-法律文库",
        description: "包括立法追踪、国家法律、行政法规、司法解释、政策参考",
        url: "http://www.chinacourt.org/law.shtml",
        category: "法律法规",
        tags: ["立法","法律","法规","司法解释","政策"]
    },
    {
        name: "检察法律法规库",
        description: "由最高人民检察院主办，包括宪法、法律、司法解释、规范文件、内部规章",
        url: "https://www.spp.gov.cn/spp/flfgk/index.shtml",
        category: "法律法规",
        tags: ["法律","法规","检察院","司法解释","规范"]
    },
    {
        name: "证券期货法规数据库系统",
        description: "由中国证券监督管理委员会主办",
        url: "http://www.csrc.gov.cn/csrc/c101925/zfxxgk_zdgk.shtml",
        category: "法律法规",
        tags: ["证券","期货","法规","数据库","监管"]
    },
    {
        name: "全国标准信息公共服务平台",
        description: "由国家市场监督管理总局国家标准技术审评中心主办，包括各类标准",
        url: "https://std.samr.gov.cn",
        category: "法律法规",
        tags: ["标准","国家标准","行业标准","团体标准","企业标准"]
    },
    {
        name: "国家标准全文公开系统",
        description: "由国家标准委发布，包括强制性国家标准、推荐性国家标准、指导性技术文件",
        url: "https://openstd.samr.gov.cn",
        category: "法律法规",
        tags: ["国家标准","强制性","推荐性","技术","文件"]
    },
    {
        name: "生态环境标准",
        description: "包括标准发布、标准解读、标准文本等",
        url: "https://www.mee.gov.cn/ywgz/fgbz/bz",
        category: "法律法规",
        tags: ["环境","标准","生态","解读","文本"]
    },
    {
        name: "国家企业信用信息公示系统",
        description: "政府部门用于公示市场主体的信用信息及相关事项的平台",
        url: "https://www.gsxt.gov.cn",
        category: "市场主体信息",
        tags: ["企业","信用","公示","市场主体","信息"]
    },
    {
        name: "中国社会组织政务服务平台",
        description: "由民政部社会组织管理局主办，查询全国社会组织信用信息等",
        url: "https://www.chinanpo.gov.cn",
        category: "市场主体信息",
        tags: ["社会组织","信用","政务","民政","组织"]
    },
    {
        name: "全国组织机构统一社会信用代码数据服务中心",
        description: "提供境内法人和其他组织统一社会信用代码信息的实名制查询平台",
        url: "https://www.cods.org.cn",
        category: "市场主体信息",
        tags: ["信用代码","组织机构","查询","法人","实名制"]
    },
    {
        name: "信用中国",
        description: "由国家公共信用中心主办，查询主体基础信息及信用报告",
        url: "https://www.creditchina.gov.cn",
        category: "市场主体信息",
        tags: ["信用","报告","公共","查询","市场主体"]
    },
    {
        name: "全国企业破产重整案件信息网",
        description: "查询债务人信息、公开案件、公开公告、公开文书、债权人会议预告等信息",
        url: "https://pccz.court.gov.cn",
        category: "市场主体信息",
        tags: ["破产","重整","债务","案件","债权"]
    },
    {
        name: "政府采购严重违法失信行为记录名单",
        description: "由财政部国库司主办，查询政府采购严重违法失信行为信息记录",
        url: "http://www.ccgp.gov.cn/cr/list",
        category: "市场主体信息",
        tags: ["政府采购","违法","失信","记录","名单"]
    },
    {
        name: "企查查",
        description: "查询企业工商信息、关联企业信息、法律诉讼、知识产权信息等",
        url: "https://www.qcc.com",
        category: "市场主体信息",
        tags: ["企业","工商","诉讼","知识产权","查询"]
    },
    {
        name: "天眼查",
        description: "提供公司查询、工商信息查询、企业查询、工商查询、企业信用信息查询等",
        url: "https://www.tianyancha.com",
        category: "市场主体信息",
        tags: ["公司","工商","企业","信用","查询"]
    },
    {
        name: "启信宝",
        description: "提供企业工商信息、法院判决、关联企业、司法拍卖、失信信息等服务",
        url: "https://www.qixin.com",
        category: "市场主体信息",
        tags: ["企业","工商","判决","关联","失信"]
    },
    {
        name: "中国审判流程信息公开网",
        description: "查看案件信息、接受电子送达、使用联系法官、投诉建议等功能",
        url: "https://splcgk.court.gov.cn",
        category: "司法案件信息",
        tags: ["审判","流程","案件","法官","送达"]
    },
    {
        name: "中国执行信息公开网",
        description: "查询失信被执行人、限制消费人员、被执行人信息等",
        url: "http://zxgk.court.gov.cn",
        category: "司法案件信息",
        tags: ["执行","失信","限制消费","被执行人","查询"]
    },
    {
        name: "人民法院调解平台",
        description: "最高人民法院建立的全流程一站式解纷服务平台",
        url: "https://tiaojie.court.gov.cn",
        category: "司法案件信息",
        tags: ["调解","解纷","服务","法院","一站式"]
    },
    {
        name: "中国庭审公开网",
        description: "由最高人民法院建设的庭审公开网，提供庭审直播、庭审回顾等服务",
        url: "https://tingshen.court.gov.cn",
        category: "司法案件信息",
        tags: ["庭审","直播","回顾","案件","公开"]
    },
    {
        name: "人民法院公告网",
        description: "由最高人民法院主办，提供公告查询、公告办理等服务",
        url: "https://rmfygg.court.gov.cn",
        category: "司法案件信息",
        tags: ["公告","查询","办理","法院","服务"]
    },
    {
        name: "人民法院送达平台",
        description: "查看相关案件诉讼活动通知、电子送达、邮寄送达、公告送达记录等",
        url: "https://sdpt.court.gov.cn",
        category: "司法案件信息",
        tags: ["送达","诉讼","通知","电子","邮寄"]
    },
    {
        name: "12309中国检察网",
        description: "由最高人民检察院主办，提供'一站式'检察服务",
        url: "https://www.12309.gov.cn",
        category: "司法案件信息",
        tags: ["检察","服务","投诉","举报","查询"]
    },
    {
        name: "人民法院诉讼资产网",
        description: "面向全国各级法院、社会辅助机构和竞买人的诉讼资产综合信息发布和司法拍卖平台",
        url: "https://www.rmfysszc.gov.cn",
        category: "网络司法拍卖",
        tags: ["诉讼","资产","拍卖","法院","竞买"]
    },
    {
        name: "阿里资产 · 司法拍卖",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        url: "https://sf.taobao.com",
        category: "网络司法拍卖",
        tags: ["阿里","资产","拍卖","司法","服务"]
    },
    {
        name: "京东资产交易平台 · 司法拍卖",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        url: "https://auction.jd.com/sifa.html",
        category: "网络司法拍卖",
        tags: ["京东","资产","交易","司法","拍卖"]
    },
    {
        name: "公拍网 · 司法拍卖",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        url: "https://www.gpai.net",
        category: "网络司法拍卖",
        tags: ["公拍","司法","拍卖","竞拍","资产"]
    },
    {
        name: "中拍平台 · 司法拍卖",
        description: "纳入最高人民法院司法拍卖网络服务提供者名单库",
        url: "https://www.caa123.org.cn",
        category: "网络司法拍卖",
        tags: ["中拍","平台","司法","拍卖","竞买"]
    },
    {
        name: "北京产权交易所 · 司法拍卖",
        description: "最高人民法院选定的全国各级法院网络司法拍卖平台",
        url: "https://www.cbex.com.cn",
        category: "网络司法拍卖",
        tags: ["北京","产权","交易","司法","拍卖"]
    },
    {
        name: "国家知识产权局",
        description: "由国家知识产权局主办，提供知识产权方面的政务服务",
        url: "https://www.cnipa.gov.cn",
        category: "知识产权业务",
        tags: ["知识产权","政务","服务","专利","商标"]
    },
    {
        name: "专利业务办理系统",
        description: "提供专利申请及手续办理、专利事务服务、专利缴费服务、专利审查信息查询服务等",
        url: "https://cponline.cnipa.gov.cn",
        category: "知识产权业务",
        tags: ["专利","申请","缴费","审查","查询"]
    },
    {
        name: "专利检索及分析",
        description: "由国家知识产权局主办，提供专利检索及分析服务",
        url: "https://pss-system.cnipa.gov.cn",
        category: "知识产权业务",
        tags: ["专利","检索","分析","服务","知识产权"]
    },
    {
        name: "专利之星检索系统",
        description: "由国家知识产权局中国专利信息中心主办，提供多种检索方式",
        url: "http://www.patentstar.cn",
        category: "知识产权业务",
        tags: ["专利","检索","智能","专家","分类"]
    },
    {
        name: "专利代理管理系统",
        description: "由国家知识产权局主办，提供专利代理师公示、专利代理机构公示等",
        url: "https://dlgl.cnipa.gov.cn",
        category: "知识产权业务",
        tags: ["专利","代理","管理","公示","机构"]
    },
    {
        name: "商标局 中国商标网",
        description: "由国家知识产权局商标局主办，提供商标网上申请、查询、证明公示、公告等",
        url: "https://sbj.cnipa.gov.cn",
        category: "知识产权业务",
        tags: ["商标","申请","查询","公示","公告"]
    },
    {
        name: "中国版权保护中心",
        description: "承担各类作品和计算机软件版权登记职责，是我国唯一的软件版权登记机构",
        url: "https://www.ccopyright.com.cn",
        category: "知识产权业务",
        tags: ["版权","登记","软件","作品","保护"]
    },
    {
        name: "北京证券交易所",
        description: "为证券集中交易提供场所和设施、组织和监督证券交易及市场管理服务",
        url: "https://www.bse.cn",
        category: "资本证券",
        tags: ["证券","交易","北京","资本","市场"]
    },
    {
        name: "上海证券交易所",
        description: "为证券集中交易提供场所和设施、组织和监督证券交易",
        url: "https://www.sse.com.cn",
        category: "资本证券",
        tags: ["证券","交易","上海","股票","债券"]
    },
    {
        name: "深圳证券交易所",
        description: "提供证券交易的场所、设施和服务，审核证券发行上市申请等",
        url: "https://www.szse.cn",
        category: "资本证券",
        tags: ["证券","交易","深圳","上市","监管"]
    },
    {
        name: "全国中小企业股份转让系统",
        description: "我国第一家公司制运营的证券交易场所，为新三板市场提供服务",
        url: "https://www.neeq.com.cn",
        category: "资本证券",
        tags: ["新三板","股份","转让","中小企业","市场"]
    },
    {
        name: "中国证券投资基金业协会 · 信息公示",
        description: "查询基金从业人员资格、基金产品、私募基金管理人信息等",
        url: "https://www.amac.org.cn",
        category: "资本证券",
        tags: ["基金","投资","私募","资格","管理人"]
    },
    {
        name: "证券期货市场失信记录查询平台",
        description: "可通过查询平台了解相关市场主体违法违规失信信息",
        url: "https://neris.csrc.gov.cn/shixinchaxun",
        category: "资本证券",
        tags: ["证券","期货","失信","违法","查询"]
    },
    {
        name: "国家统计局及地方统计网站",
        description: "可查询居民人均可支配收入及消费支出、各类型平均工资等",
        url: "https://www.stats.gov.cn",
        category: "法律数据查询",
        tags: ["统计","收入","工资","消费","数据"]
    },
    {
        name: "国家统计局 · 国家数据",
        description: "提供详实的月度、季度、年度数据以及普查、地区、部门、国际数据",
        url: "https://data.stats.gov.cn",
        category: "法律数据查询",
        tags: ["统计","数据","月度","年度","普查"]
    },
    {
        name: "人社部及地方人社部门网站",
        description: "可查询各类型平均工资、社保缴费基数、工伤待遇相关数据等",
        url: "https://www.mohrss.gov.cn",
        category: "法律数据查询",
        tags: ["人社","工资","社保","工伤","缴费"]
    },
    {
        name: "121法律助手",
        description: "计算诉讼费、LPR利息、违约金、迟延履行利息、民间借贷利息、日期期间等",
        url: "https://www.121fa.com",
        category: "法律数据查询",
        tags: ["诉讼费","利息","违约金","计算","工具"]
    },
    {
        name: "东方财富网",
        description: "中国领先的互联网金融服务平台，提供财经资讯、证券行情、数据分析等服务",
        url: "http://www.eastmoney.com",
        category: "财经门户",
        tags: ["财经","股票","行情","证券","投资"]
    },
    {
        name: "新浪财经",
        description: "新浪财经频道，提供全球财经新闻和金融证券行情数据",
        url: "http://finance.sina.com.cn",
        category: "财经门户",
        tags: ["财经","新闻","股票","行情","数据"]
    },
    {
        name: "凤凰财经",
        description: "凤凰网旗下财经频道，关注全球经济动态、市场行情和投资机会",
        url: "http://finance.ifeng.com",
        category: "财经门户",
        tags: ["财经","全球","市场","投资","经济"]
    },
    {
        name: "和讯网",
        description: "中国最大财经门户之一，提供实时行情、财经资讯、理财服务和互动社区",
        url: "http://www.hexun.com",
        category: "财经门户",
        tags: ["财经","行情","资讯","理财","投资"]
    },
    {
        name: "金融界",
        description: "中国知名财经网站，提供金融资讯、股票、基金、期货等投资信息",
        url: "http://www.jrj.com.cn",
        category: "财经门户",
        tags: ["金融","股票","基金","期货","投资"]
    },
    {
        name: "华尔街见闻",
        description: "专业的财经新媒体，专注于全球资讯，提供专业、实时、深度的全球金融市场资讯",
        url: "http://wallstreetcn.com",
        category: "财经门户",
        tags: ["全球","金融","市场","资讯","华尔街"]
    },
    {
        name: "FT中文网",
        description: "英国《金融时报》集团旗下的中文商业财经网站，提供全球财经资讯",
        url: "http://www.ftchinese.com",
        category: "财经媒体",
        tags: ["金融时报","全球","商业","财经","资讯"]
    },
    {
        name: "财新网",
        description: "中国最有影响力的财经媒体之一，提供深度财经新闻与分析",
        url: "http://www.caixin.com",
        category: "财经媒体",
        tags: ["财经","新闻","分析","经济","深度"]
    },
    {
        name: "21世纪经济报道",
        description: "专注于经济、产业与管理的财经媒体，提供专业财经新闻报道",
        url: "https://www.21jingji.com",
        category: "财经媒体",
        tags: ["财经","经济","产业","管理","报道"]
    },
    {
        name: "第一财经",
        description: "上海文广新闻传媒集团旗下的财经媒体，提供实时财经新闻",
        url: "http://www.yicai.com",
        category: "财经媒体",
        tags: ["财经","新闻","资讯","实时","经济"]
    },
    {
        name: "华尔街日报中文网",
        description: "美国著名财经媒体《华尔街日报》的中文网站，关注全球财经动态",
        url: "http://cn.wsj.com/gb",
        category: "财经媒体",
        tags: ["华尔街","全球","财经","美国","国际"]
    },
    {
        name: "彭博中文网",
        description: "全球知名商业和金融信息提供商彭博社的中文网站",
        url: "https://www.bloombergchina.com",
        category: "财经媒体",
        tags: ["彭博","全球","商业","金融","资讯"]
    },
    {
        name: "集思录",
        description: "专注于债券、基金等固定收益投资的社区，提供数据分析和用户交流",
        url: "https://www.jisilu.cn",
        category: "投资交流",
        tags: ["债券","基金","固定收益","投资","分析"]
    },
    {
        name: "淘股吧",
        description: "活跃的股票投资者交流社区，提供股票讨论、大户动态和投资观点",
        url: "https://www.taoguba.com.cn",
        category: "投资交流",
        tags: ["股票","投资","交流","讨论","观点"]
    },
    {
        name: "人大经济论坛",
        description: "中国知名的经济、金融和统计学术交流平台，提供专业讨论和资料分享",
        url: "http://bbs.pinggu.org",
        category: "投资交流",
        tags: ["经济","金融","统计","学术","交流"]
    },
    {
        name: "股吧",
        description: "东方财富网旗下的股票讨论社区，用户可以讨论个股、大盘和投资策略",
        url: "http://guba.eastmoney.com",
        category: "投资交流",
        tags: ["股票","讨论","投资","个股","策略"]
    },
    {
        name: "钢铁网",
        description: "国内专业的钢铁信息服务平台，提供钢材价格、资讯和数据分析",
        url: "http://www.mysteel.com",
        category: "行业资讯",
        tags: ["钢铁","价格","行情","资讯","分析"]
    },
    {
        name: "生意社",
        description: "商品行情服务平台，提供大宗商品价格、行情分析和供求信息",
        url: "http://www.100ppi.com",
        category: "行业资讯",
        tags: ["商品","价格","行情","分析","大宗"]
    },
    {
        name: "中国化工网",
        description: "化工行业门户网站，提供化工产品、价格行情和供求信息",
        url: "http://china.chemnet.com",
        category: "行业资讯",
        tags: ["化工","产品","行情","价格","供求"]
    },
    {
        name: "中国能源网",
        description: "能源行业门户网站，提供能源政策、市场分析和行业动态",
        url: "http://www.china5e.com",
        category: "行业资讯",
        tags: ["能源","政策","市场","分析","动态"]
    },
    {
        name: "慧聪网",
        description: "B2B电子商务平台，覆盖多个行业的商业信息和产品交易",
        url: "http://www.hc360.com",
        category: "行业资讯",
        tags: ["B2B","电子商务","行业","交易","信息"]
    },
    {
        name: "英为财情",
        description: "全球金融门户网站，提供股票、期货、外汇等多元化行情数据",
        url: "https://cn.investing.com",
        category: "期货交易",
        tags: ["全球","金融","期货","行情","数据"]
    },
    {
        name: "和讯期货",
        description: "和讯网旗下期货频道，提供期货行情、资讯和分析工具",
        url: "http://futures.hexun.com",
        category: "期货交易",
        tags: ["期货","行情","资讯","分析","工具"]
    },
    {
        name: "99期货",
        description: "期货门户网站，提供期货行情、价格走势和市场分析",
        url: "http://www.99qh.com",
        category: "期货交易",
        tags: ["期货","行情","价格","走势","分析"]
    },
    {
        name: "期货日报",
        description: "中国期货业权威媒体，提供期货市场新闻和分析报道",
        url: "http://www.qhrb.com.cn",
        category: "期货交易",
        tags: ["期货","市场","新闻","分析","报道"]
    },
    {
        name: "飞如红人",
        description: "为商家和网红达人提供高效资源对接平台，精选全球高佣好物，提供优质的选品渠道，专注为短视频、直播达人提供优质高佣商品",
        url: "http://www.feelpro.cn",
        category: "抖音验货",
        tags: ["抖音","短视频","带货","红人","验货"]
    },
    {
        name: "种草之家",
        description: "种草之家的抖音验货平台，抖音热门商品都在这里，欢迎抖音带货达人挑选商品，商家免费赠送样品",
        url: "https://www.zhongcao.cn",
        category: "抖音验货",
        tags: ["抖音","种草","验货","样品","带货"]
    },
    {
        name: "搜淘客",
        description: "商家提供高佣金，推广周期长的产品，每个产品提供多份样品给抖音淘客，抖音淘客免费领取，赚取佣金的验货平台",
        url: "http://www.tkw1688.com/trill/index.html",
        category: "抖音验货",
        tags: ["淘客","抖音","样品","佣金","验货"]
    },
    {
        name: "达人推",
        description: "专业的短视频带货平台，专注优质商品内容打造，为达人提供优质的选品渠道，并有大量优质商家dou+支持",
        url: "https://www.darentui.com",
        category: "抖音验货",
        tags: ["短视频","带货","达人","选品","dou+"]
    },
    {
        name: "AK抖客联盟",
        description: "抖音淘客，致力于商家抖音带货，抖音淘客种草达人原创视频生产,视频生产者变现平台，颠覆传统抖音带货模式",
        url: "http://daren.akdklm.com",
        category: "抖音验货",
        tags: ["抖客","联盟","短视频","带货","变现"]
    },
    {
        name: "带货网",
        description: "抖音快手达人带货，免费拿样品，短视频分发平台",
        url: "http://www.daihw.com/material",
        category: "抖音验货",
        tags: ["带货","样品","达人","短视频","抖音"]
    },
    {
        name: "嘀嘀红人",
        description: "短视频网红商家自动派单带货平台，10000个网红全天在线选品，纯佣金带货，抖音、快手、小红书全渠道网红帮你卖货",
        url: "https://www.ddhongren.com",
        category: "抖音验货",
        tags: ["红人","带货","网红","短视频","佣金"]
    },
    {
        name: "带货圈",
        description: "专注为抖音短视频、直播达人提供优质高佣商品，免费提供验货样品并发放视频创作补贴",
        url: "https://www.daihuo360.com",
        category: "抖音验货",
        tags: ["带货","抖音","样品","补贴","短视频"]
    },
    {
        name: "全五分",
        description: "专业的短视频数据分析平台，抖音验货产品有很多，但是像全五分这样的靠谱抖音验货平台却不多见",
        url: "http://www.quan5fen.com",
        category: "抖音验货",
        tags: ["短视频","数据分析","抖音","验货","产品"]
    },
    {
        name: "悟空带货",
        description: "抖音数据实时检测分分析淘客推广、流量变现、一站式解决方案，各行业类型的热门、飙升榜单，实时数据监测",
        url: "https://www.daihuo.com",
        category: "抖音验货",
        tags: ["抖音","数据","淘客","推广","变现"]
    },
    {
        name: "飞瓜数据",
        description: "致力提供专业的实时抖音直播与商品带货数据，热门主播排行榜，热门抖音音乐与视频排行，抖音小店排行",
        url: "https://dy.feigua.cn",
        category: "抖音验货",
        tags: ["飞瓜","数据","抖音","直播","带货"]
    },
    {
        name: "抖商眼",
        description: "专业的抖音电商工具分析工具，提供抖音热门商品排行榜，抖音热门预测，达人与商品的监控分析等功能",
        url: "https://doushangyan.com",
        category: "抖音验货",
        tags: ["抖音","电商","分析","监控","商品"]
    },
    {
        name: "淘宝联盟",
        description: "淘宝联盟官方网站，阿里巴巴集团旗下淘宝客推广平台，连接商家与内容创作者的桥梁",
        url: "https://pub.alimama.com",
        category: "淘宝联盟",
        tags: ["淘宝","联盟","淘客","推广","佣金"]
    },
    {
        name: "淘宝联盟规则中心",
        description: "淘宝联盟常见规则，淘宝推广必须遵守的各项规章制度和政策",
        url: "https://rule.alimama.com",
        category: "淘宝联盟",
        tags: ["规则","淘宝","联盟","政策","推广"]
    },
    {
        name: "阿里创作平台",
        description: "在人工智能将替代一切的未来，唯有内容的创作无可替代，阿里巴巴提供的内容创作平台",
        url: "https://we.taobao.com/creator/login-intro",
        category: "淘宝联盟",
        tags: ["创作","内容","平台","淘宝","推广"]
    },
    {
        name: "淘宝联盟官方论坛",
        description: "淘宝联盟官方千牛号，面向广大淘宝客伙伴们，进行各种信息的互动平台",
        url: "https://market.m.taobao.com/app/qn/toutiao-new/index-pc.html",
        category: "淘宝联盟",
        tags: ["论坛","淘宝","联盟","互动","交流"]
    },
    {
        name: "联盟学院",
        description: "淘宝联盟官方学院，汇集各类淘客课程，大佬分享，帮助淘宝客提升推广技巧",
        url: "https://pub.alimama.com/fourth/school/index.htm",
        category: "淘宝联盟",
        tags: ["学院","淘宝","联盟","课程","淘客"]
    },
    {
        name: "万堂书院",
        description: "阿里妈妈万堂书院小二讲解直钻淘产品功能动向以及内容运营玩法，行业小二带来的不同类目推广技巧",
        url: "https://shuyuan.taobao.com",
        category: "淘宝联盟",
        tags: ["书院","阿里","妈妈","推广","运营"]
    },
    {
        name: "联盟商家中心",
        description: "淘宝客官方动态发布，商家管理推广计划的平台",
        url: "https://ad.alimama.com/index.htm",
        category: "淘宝联盟",
        tags: ["商家","联盟","淘宝","推广","计划"]
    },
    {
        name: "淘宝联盟开发者中心",
        description: "淘宝联盟电商生态开发者服务平台，提供API接口和开发文档",
        url: "https://open.alimama.com",
        category: "淘宝联盟",
        tags: ["开发","API","联盟","淘宝","接口"]
    },
    {
        name: "速推客",
        description: "速推客返利机器人 – 集淘宝、京东、拼多多、唯品会、抖音多合一的返利机器人",
        url: "https://www.stkfanli.com",
        category: "网红营销",
        tags: ["返利","机器人","淘宝客","推广","佣金"]
    },
    {
        name: "腾促",
        description: "腾促抖音达人，快手达人，免费拿样品验货平台，连接商家与网红",
        url: "http://www.tengcu.com/home/goods",
        category: "网红营销",
        tags: ["抖音","达人","快手","样品","验货"]
    },
    {
        name: "大淘客抖音验货",
        description: "大淘客联盟旗下带货短视频专业数据分析平台，让短视频带货更轻松",
        url: "http://dh.dataoke.com/rank_goods",
        category: "网红营销",
        tags: ["大淘客","抖音","验货","短视频","数据"]
    },
    {
        name: "顶咖网",
        description: "专注为电商人创业提供一站式的企业服务，在淘宝、天猫网店的转让交易服务领域深耕多年",
        url: "http://www.dingka.com/trillInspection/caicai",
        category: "网红营销",
        tags: ["电商","创业","淘宝","网店","交易"]
    },
    {
        name: "打榜社区",
        description: "依托打榜参谋大数据及人工智能技术，为品牌客户提供基于短视频生态的创作和投放服务",
        url: "http://wangwuhaoping.com/dabang/daihuoindex",
        category: "网红营销",
        tags: ["打榜","短视频","创作","投放","数据"]
    },
    {
        name: "抖老板",
        description: "集联盟订单同步，抖音带货数据分析，抖音运营团队管理于一体的一站式数据管理平台",
        url: "https://www.doulaoban.com",
        category: "网红营销",
        tags: ["抖音","带货","数据","运营","管理"]
    },
    {
        name: "带货助手",
        description: "实时监控商品的佣金计划，更有图表展示商品30天佣金走势、商品销量情况等",
        url: "https://tools.daihuo.com",
        category: "网红营销",
        tags: ["带货","佣金","监控","销量","数据"]
    },
    {
        name: "Inpaint",
        description: "在线图片编辑工具，智能擦除不需要的物体和水印",
        url: "https://inpaint.app",
        category: "图片处理与去水印",
        tags: ["去水印","物体擦除","图片修复","在线编辑","AI"]
    },
    {
        name: "PhotoScissors",
        description: "在线去除图片背景和不需要的对象，支持自动和手动模式",
        url: "https://photoscissors.com",
        category: "图片处理与去水印",
        tags: ["去背景","去水印","在线工具","图片处理"]
    },
    {
        name: "Pixlr",
        description: "在线PS编辑器，支持图片处理、去水印、去背景等功能",
        url: "https://pixlr.com",
        category: "图片处理与去水印",
        tags: ["在线PS","去水印","图片编辑","设计工具"]
    },
    {
        name: "Fotor",
        description: "免费在线图片编辑器和设计工具，包含去水印功能",
        url: "https://www.fotor.com",
        category: "图片处理与去水印",
        tags: ["图片编辑","去水印","设计","滤镜","效果"]
    },
    {
        name: "BentoClip",
        description: "视频水印移除工具，可快速去除视频和图片的水印",
        url: "https://www.bentoclip.com",
        category: "图片处理与去水印",
        tags: ["去水印","视频处理","视频编辑","在线工具"]
    },
    {
        name: "Recraft AI",
        description: "生成矢量、3D和图标的智能设计工具，提供多样化创意素材",
        url: "https://www.recraft.ai/",
        category: "AI设计工具",
        tags: ["矢量生成","3D设计","图标创作"]
    },
    {
        name: "Ilus AI",
        description: "风格化插画生成工具，创建独特艺术风格的插图",
        url: "https://ilus.ai/",
        category: "AI设计工具",
        tags: ["风格化","插画生成","艺术风格"]
    },
    {
        name: "Pictographic",
        description: "AI插图资源库，提供多样化的插画和图形素材",
        url: "https://pictographic.ai/",
        category: "AI设计工具",
        tags: ["资源库","插画素材","多样化"]
    },
    {
        name: "Illustroke",
        description: "SVG矢量插画生成工具，创建可缩放的矢量图形",
        url: "https://illustroke.com/",
        category: "AI设计工具",
        tags: ["SVG","矢量插画","可缩放"]
    },
    {
        name: "illostrationAI",
        description: "多风格插画生成平台，支持各种艺术风格的创作",
        url: "https://illostration.com/",
        category: "AI设计工具",
        tags: ["多风格","插画生成","艺术创作"]
    },
    {
        name: "Vectorizer.AI",
        description: "位图转矢量工具，将像素图像转换为可缩放的矢量格式",
        url: "https://vectorizer.ai/",
        category: "AI设计工具",
        tags: ["位图转矢量","图像转换","可缩放"]
    },
    {
        name: "IconifyAI",
        description: "App图标生成工具，创建一致风格的应用图标集",
        url: "https://iconify.ai/",
        category: "AI设计工具",
        tags: ["App图标","风格一致","图标集"]
    },
    {
        name: "Appicons AI",
        description: "精美图标设计工具，为应用和网站创建专业图标",
        url: "https://appicons.ai/",
        category: "AI设计工具",
        tags: ["精美图标","应用设计","专业图标"]
    },
    {
        name: "Magician",
        description: "Figma图标插件，自动生成符合设计系统的图标",
        url: "https://magician.design/",
        category: "AI设计工具",
        tags: ["Figma插件","图标生成","设计系统"]
    },
    {
        name: "VoxCraft",
        description: "AI生成3D模型工具，通过文本描述创建三维物体",
        url: "https://voxcraft.ai/",
        category: "AI建模工具",
        tags: ["生成3D","文本描述","三维物体"]
    },
    {
        name: "Spline AI",
        description: "3D物体和动画生成工具，创建交互式3D内容",
        url: "https://spline.design/",
        category: "AI建模工具",
        tags: ["3D物体","动画生成","交互式"]
    },
    {
        name: "Realibox AI",
        description: "草图转3D渲染图工具，快速将2D设计转为3D展示",
        url: "https://www.realibox.com/",
        category: "AI建模工具",
        tags: ["草图转3D","渲染图","快速转换"]
    },
    {
        name: "Dora AI",
        description: "3D动画生成平台，创建沉浸式体验和交互内容",
        url: "https://www.dora.run/",
        category: "AI建模工具",
        tags: ["3D动画","沉浸式","交互内容"]
    },
    {
        name: "酷家乐AI",
        description: "智能家居设计平台，提供一站式室内设计解决方案",
        url: "https://www.kujiale.com/ai",
        category: "AI设计工具",
        tags: ["家居设计","室内设计","一站式"]
    },
    {
        name: "模袋云AI",
        description: "建筑和景观设计平台，提供专业的设计辅助工具",
        url: "https://www.modaiyun.com/",
        category: "AI设计工具",
        tags: ["建筑设计","景观设计","专业工具"]
    },
    {
        name: "Collov AI",
        description: "室内家居设计生成工具，创建个性化家居空间",
        url: "https://collov.com/",
        category: "AI设计工具",
        tags: ["室内设计","家居生成","个性化"]
    },
    {
        name: "Vizcom",
        description: "手绘图转产品设计图工具，将概念草图转为精细渲染",
        url: "https://www.vizcom.ai/",
        category: "AI设计工具",
        tags: ["手绘转换","产品设计","精细渲染"]
    },
    {
        name: "笔魂AI",
        description: "智能抠图和无损放大工具，提升图片编辑效率",
        url: "https://bishen.ink/",
        category: "AI图像工具",
        tags: ["抠图","无损放大","图片编辑"]
    },
    {
        name: "简单设计",
        description: "在线图片处理工具，提供多种图像编辑和优化功能",
        url: "https://www.ijiantu.com/",
        category: "AI图像工具",
        tags: ["在线处理","图片编辑","多功能"]
    },
    {
        name: "笔格设计",
        description: "智能消除和文生图工具，简化图像编辑流程",
        url: "https://bigesj.com/",
        category: "AI图像工具",
        tags: ["智能消除","文生图","编辑流程"]
    },
    {
        name: "Eva Design System",
        description: "智能色彩生成系统，为设计提供和谐的色彩方案",
        url: "https://colors.eva.design/",
        category: "设计工具",
        tags: ["色彩生成","设计系统","和谐方案"]
    },
    {
        name: "Khroma",
        description: "AI调色盘工具，学习用户偏好生成个性化配色",
        url: "https://www.khroma.co/",
        category: "AI设计工具",
        tags: ["AI调色","个性化","用户偏好"]
    },
    {
        name: "ColorMagic",
        description: "调色板生成工具，创建协调一致的色彩组合",
        url: "https://colormagic.app/",
        category: "AI设计工具",
        tags: ["调色板","色彩组合","协调一致"]
    },
    {
        name: "135 AI排版",
        description: "公众号图文排版工具，提供智能化的内容布局服务",
        url: "https://www.135editor.com/ai_editor",
        category: "AI排版工具",
        tags: ["公众号","图文排版","内容布局"]
    },
    {
        name: "ColorHunter",
        description: "AI调色工具，学习用户偏好生成个性化配色",
        url: "https://colorhunter.ai/",
        category: "AI设计工具",
        tags: ["AI调色","个性化","用户偏好"]
    },
    {
        name: "千图网",
        description: "设计素材平台，提供丰富的AI生成和设计资源",
        url: "https://www.58pic.com/",
        category: "素材资源",
        tags: ["设计素材","资源平台","AI生成"]
    },
    {
        name: "包图网AI素材库",
        description: "AI生成素材库，提供多样化的设计元素和模板",
        url: "https://ibaotu.com/",
        category: "素材资源",
        tags: ["AI素材","设计元素","模板库"]
    },
    {
        name: "Fable Prism",
        description: "AI驱动的动效设计工具，简化动画创作流程",
        url: "https://fable.app/prism",
        category: "AI动画工具",
        tags: ["动效设计","AI驱动","动画创作"]
    },
    {
        name: "Framer AI",
        description: "基于AI的网站设计和动效创作平台，支持快速原型开发",
        url: "https://www.framer.com/ai",
        category: "AI设计工具",
        tags: ["网站设计","动效创作","原型开发"]
    },
    {
        name: "Wegic",
        description: "AI建站平台，通过文本描述快速创建专业网站",
        url: "https://wegic.com/",
        category: "AI建站工具",
        tags: ["AI建站","文本描述","快速创建"]
    },
    {
        name: "Pimento",
        description: "创意参考平台，提供设计灵感和创意源泉",
        url: "https://pimento.ai/",
        category: "设计资源",
        tags: ["创意参考","设计灵感","创意源泉"]
    },
    {
        name: "Motiff 妙多",
        description: "猿辅导UI工具，提供低代码设计和开发解决方案",
        url: "https://motiff.yuanfudao.com/",
        category: "低代码平台",
        tags: ["猿辅导","UI工具","低代码"]
    },
    {
        name: "CodeWhisperer",
        description: "亚马逊推出的AI代码生成工具，提供智能代码补全",
        url: "https://aws.amazon.com/codewhisperer/",
        category: "AI编程工具",
        tags: ["亚马逊","代码生成","AWS"]
    },
    {
        name: "aiXcoder",
        description: "自然语言到代码生成工具，支持多种编程语言",
        url: "https://www.aixcoder.com/",
        category: "AI编程工具",
        tags: ["代码生成","自然语言","多语言支持"]
    },
    {
        name: "豆包MarsCode",
        description: "字节跳动推出的AI编程助手，提供代码生成与补全功能",
        url: "https://www.doubao.com/marscode",
        category: "AI编程工具",
        tags: ["字节跳动","代码生成","AI编程"]
    },
    {
        name: "Devin",
        description: "首个全自主AI工程师，能独立完成软件开发项目",
        url: "https://www.cognition.ai/devin",
        category: "AI编程工具",
        tags: ["AI工程师","全栈开发","自主编程"]
    },
    {
        name: "码上飞",
        description: "AI驱动的应用自动生成平台，提升开发效率",
        url: "https://www.mashangfei.com/",
        category: "AI编程工具",
        tags: ["应用生成","开发效率","AI编程"]
    },
    {
        name: "MarsX",
        description: "无代码开发平台，通过AI快速构建应用",
        url: "https://marsx.dev/",
        category: "低代码平台",
        tags: ["无代码开发","应用构建","AI辅助"]
    },
    {
        name: "Sketch2Code",
        description: "微软开发的工具，将手绘草图转换为HTML代码",
        url: "https://www.microsoft.com/en-us/ai/ai-lab-sketch2code",
        category: "AI编程工具",
        tags: ["微软","草图转HTML","设计转代码"]
    },
    {
        name: "Imgcook",
        description: "阿里开发的设计稿转前端代码工具，提高开发效率",
        url: "https://www.imgcook.com/",
        category: "AI编程工具",
        tags: ["阿里","设计转代码","前端开发"]
    },
    {
        name: "Deco",
        description: "京东开发的设计稿转多端代码工具，支持多平台",
        url: "https://deco-preview.jd.com/",
        category: "AI编程工具",
        tags: ["京东","设计转代码","多端开发"]
    },
    {
        name: "Quest AI",
        description: "将设计稿自动转换为React代码的AI工具",
        url: "https://www.quest.ai/",
        category: "AI编程工具",
        tags: ["设计转代码","React","AI转换"]
    },
    {
        name: "Locofy",
        description: "将Figma或Sketch设计稿转换为代码的平台",
        url: "https://www.locofy.ai/",
        category: "AI编程工具",
        tags: ["Figma","Sketch","代码转换"]
    },
    {
        name: "CodeRabbit",
        description: "AI驱动的代码审查工具，提高代码质量",
        url: "https://coderabbit.ai/",
        category: "AI编程工具",
        tags: ["代码审查","AI分析","质量控制"]
    },
    {
        name: "CodiumAI",
        description: "代码测试分析工具，自动生成测试用例",
        url: "https://www.codium.ai/",
        category: "AI编程工具",
        tags: ["代码测试","测试生成","AI分析"]
    },
    {
        name: "Codiga",
        description: "实时代码分析工具，提供即时的代码质量反馈",
        url: "https://www.codiga.io/",
        category: "AI编程工具",
        tags: ["实时分析","代码质量","即时反馈"]
    },
    {
        name: "Lovable",
        description: "对话式Web开发工具，通过自然语言创建网站",
        url: "https://www.lovable.ai/",
        category: "AI编程工具",
        tags: ["对话式开发","Web开发","自然语言"]
    },
    {
        name: "Plandex",
        description: "终端AI编程引擎，通过自然语言执行开发任务",
        url: "https://www.plandex.dev/",
        category: "AI编程工具",
        tags: ["终端编程","AI引擎","自然语言"]
    },
    {
        name: "HeyCLI",
        description: "将自然语言转换为命令行指令的AI工具",
        url: "https://www.heycli.com/",
        category: "AI编程工具",
        tags: ["命令行","自然语言","AI转换"]
    },
    {
        name: "Solo",
        description: "Mozilla开发的无代码建站平台，简化网站创建过程",
        url: "https://solo.build/",
        category: "低代码平台",
        tags: ["Mozilla","无代码","建站平台"]
    },
    {
        name: "Hocoos",
        description: "AI驱动的网站构建平台，快速创建专业网站",
        url: "https://www.hocoos.com/",
        category: "低代码平台",
        tags: ["AI建站","网站构建","专业设计"]
    },
    {
        name: "Debuild",
        description: "低代码网页开发平台，简化Web应用创建",
        url: "https://debuild.co/",
        category: "低代码平台",
        tags: ["低代码","网页开发","Web应用"]
    },
    {
        name: "Project IDX",
        description: "谷歌开发的云端IDE，支持多种编程语言和框架",
        url: "https://developers.google.com/idx",
        category: "AI编程工具",
        tags: ["谷歌","云端IDE","多语言支持"]
    },
    {
        name: "Replit Agent",
        description: "Replit推出的AI编程助手，帮助开发者快速编码",
        url: "https://replit.com/ai",
        category: "AI编程工具",
        tags: ["Replit","AI助手","快速编码"]
    },
    {
        name: "PromptPerfect",
        description: "专业提示词优化工具，支持多模型（如GPT、Stable Diffusion等），可自动优化提示结构",
        url: "https://promptperfect.jina.ai",
        category: "AI提示词工具",
        tags: ["提示词优化","多模型支持","自动优化"]
    },
    {
        name: "Stable Diffusion Prompt Book",
        description: "官方提示词手册，包含风格模板和参数详解",
        url: "https://github.com/search?q=Stable-Diffusion-Prompt-Book",
        category: "AI提示词工具",
        tags: ["提示词手册","风格模板","参数详解"]
    },
    {
        name: "PublicPrompts",
        description: "开源提示词库，适合艺术创作和设计灵感",
        url: "https://publicprompts.art",
        category: "AI提示词工具",
        tags: ["开源提示词","艺术创作","设计灵感"]
    },
    {
        name: "MJ Prompt Tool",
        description: "MidJourney专用提示生成器，支持风格、灯光等参数调节",
        url: "https://mjprompttool.com",
        category: "AI提示词工具",
        tags: ["MidJourney","提示生成器","参数调节"]
    },
    {
        name: "Awesome ChatGPT Prompts",
        description: "GitHub开源项目，提供可直接复用的对话模板（如模拟Linux终端、编剧助手）",
        url: "https://github.com/search?q=awesome-chatgpt-prompts",
        category: "AI提示词工具",
        tags: ["开源项目","对话模板","ChatGPT"]
    },
    {
        name: "ChatGPT Shortcut",
        description: "中文快捷指令库，分类明确（写作、营销、编程等），一键调用",
        url: "https://newzone.top/chatgpt-shortcuts",
        category: "AI提示词工具",
        tags: ["中文指令库","快捷调用","分类明确"]
    },
    {
        name: "AIPRM",
        description: "ChatGPT浏览器插件，内置数百个预设提示词（SEO、数据分析等）",
        url: "https://aiprm.com",
        category: "AI提示词工具",
        tags: ["浏览器插件","预设提示词","SEO"]
    },
    {
        name: "Visual Prompt Builder",
        description: "通过拖拽生成复杂提示词，适合图像生成模型",
        url: "https://viaualpromptbuilder.com",
        category: "AI提示词工具",
        tags: ["拖拽生成","复杂提示词","图像生成"]
    },
    {
        name: "Generrated",
        description: "DALL·E 2提示词设计指南，附案例解析",
        url: "https://generrated.com/guides",
        category: "AI提示词工具",
        tags: ["DALL·E 2","提示词设计","案例解析"]
    },
    {
        name: "词魂",
        description: "中文AIGC提示词库，聚焦本土化场景（如电商文案、短视频脚本）",
        url: "https://cihun.com",
        category: "AI提示词工具",
        tags: ["中文提示词","本土化场景","电商文案"]
    },
    {
        name: "AI Short",
        description: "中文精简提示词生成器，输入关键词快速输出优化指令",
        url: "https://aishort.top",
        category: "AI提示词工具",
        tags: ["中文生成器","精简提示词","关键词优化"]
    },
    {
        name: "LangGPT",
        description: "针对中文大模型的提示工程技术指南，含角色设定模板",
        url: "https://github.com/search?q=LangGPT",
        category: "AI提示词工具",
        tags: ["中文大模型","提示工程","角色设定"]
    },
    {
        name: "ClickPrompt",
        description: "可视化提示词工作流工具，支持团队协作",
        url: "https://clickprompt.org",
        category: "AI提示词工具",
        tags: ["工作流工具","团队协作","可视化"]
    },
    {
        name: "Snack Prompt",
        description: "极简提示词生成器，适合快速实验",
        url: "https://snackprompt.com",
        category: "AI提示词工具",
        tags: ["极简生成器","快速实验","提示词"]
    },
    {
        name: "PromptVine",
        description: "用户共享的提示词库，含评分系统",
        url: "https://promptvine.com",
        category: "AI提示词工具",
        tags: ["用户共享","提示词库","评分系统"]
    },
    {
        name: "Base44",
        description: "让我们现在就让你的梦想成真。 (Original: Let's make your dream a reality. Right now.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/base44.svg?height=207",
        url: "https://base44.pxf.io/c/6560143/2477538/25619?trafcat=hp",
        category: "Vibe Coding",
        tags: ["AI","开发","梦想实现","快速"]
    },
    {
        name: "Jason AI",
        description: "AI驱动的B2B销售外联助手。 (Original: AI-powered assistant for B2B sales outreach)",
        iconUrl: "https://media.theresanaiforthat.com/icons/jason-ai.png?height=207",
        url: "https://jasonai.tech/",
        category: "销售",
        tags: ["AI","销售","B2B","外联"]
    },
    {
        name: "Speechmatics | AI Voice Agents",
        description: "使用最佳语音识别技术构建更智能的AI语音代理。 (Original: Build smarter AI voice agents with the best speech recognition technology)",
        iconUrl: "https://media.theresanaiforthat.com/icons/speechmatics-ai-voice-agents.svg?height=207",
        url: "https://www.speechmatics.com/use-cases/ai-voice-agents/",
        category: "语音代理",
        tags: ["AI","语音","代理","识别"]
    },
    {
        name: "Averi AI",
        description: "AI营销工作空间：策略、内容、团队一体。 (Original: The AI Marketing Workspace: Strategy, Content, Team in One)",
        iconUrl: "https://media.theresanaiforthat.com/icons/averi-ai.png?height=207",
        url: "https://www.averi.ai/",
        category: "营销",
        tags: ["AI","营销","策略","内容"]
    },
    {
        name: "Kick",
        description: "为你完成工作的会计软件。 (Original: Accounting software that does the work for you)",
        iconUrl: "https://media.theresanaiforthat.com/icons/kick-co.svg?height=207",
        url: "https://kick.co/",
        category: "会计",
        tags: ["会计","软件","自动化"]
    },
    {
        name: "BodhiGPT | Podcasts",
        description: "你的个性化播客播放器，带有AI洞察。 (Original: Your personalized podcast player with AI insights.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/bodhigpt-podcasts.svg?height=207",
        url: "https://www.bodhigpt.com/tools/podcasts",
        category: "播客摘要",
        tags: ["播客","AI","个性化","洞察"]
    },
    {
        name: "Support Flow",
        description: "AI助手主动提供最佳技术内容、数据和行动。 (Original: AI assistant that proactively surfaces the best technical content, data, and actions.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/pixiebrix-support-flow.svg?height=207",
        url: "https://www.pixiebrix.com/product/support-flow-taaft/",
        category: "商业",
        tags: ["AI","助手","技术支持","数据"]
    },
    {
        name: "Remove Background by Picsart",
        description: "即时移除背景，获得干净、透明的图像——完美用于产品、设计和创意。 (Original: Instantly remove backgrounds for clean, transparent images—perfect for products, designs, and creative)",
        iconUrl: "https://media.theresanaiforthat.com/icons/picsart-s-remove-background-api.svg?height=207",
        url: "https://picsart.io/remove-background/?gclid=taaft_ppc_rbg",
        category: "背景移除",
        tags: ["图像","背景移除","编辑"]
    },
    {
        name: "TheLibrarian.io",
        description: "使用WhatsApp AI助手增强你的日常生活。 (Original: Supercharge your day with a WhatsApp AI Assistant)",
        iconUrl: "https://media.theresanaiforthat.com/icons/the-librarian.svg?height=207",
        url: "https://thelibrarian.io/",
        category: "生产力",
        tags: ["AI","助手","WhatsApp","日常"]
    },
    {
        name: "Fundraising with Evalyze Ai",
        description: "AI自动化初创公司筹资，从推销到投资者匹配。 (Original: AI automates startup fundraising from pitch to investor match.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/evalyze.png?height=207",
        url: "https://www.evalyze.ai/",
        category: "筹资",
        tags: ["AI","筹资","初创","自动化"]
    },
    {
        name: "Candidate Screening - AI-Powered Hiring & Assessment Platform",
        description: "AI驱动的候选人筛选，即时结果。 (Original: AI-powered candidate screening with instant results.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/candidate-screenings.svg?height=207",
        url: "https://candidatescreenings.com/",
        category: "候选人筛选",
        tags: ["AI","招聘","筛选","评估"]
    },
    {
        name: "Atai - Automated Testing AI",
        description: "AI驱动的基于视觉的自动化测试编写。 (Original: AI-powered vision-based automated test writing.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/atai-automated-testing.svg?height=207",
        url: "https://automatedtesting.ai/",
        category: "测试自动化",
        tags: ["AI","测试","自动化","视觉"]
    },
    {
        name: "Thinkfill AI – AI Procurement Platform",
        description: "更快实施正确的AI。 (Original: Implement the Right AI, Faster.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/thinkfill-ai.svg?height=207",
        url: "https://thinkfill.ai/",
        category: "采购",
        tags: ["AI","采购","平台","实施"]
    },
    {
        name: "Decory AI",
        description: "艺术遇见算法 - 你的空间，重新定义！ (Original: Art Meets Algorithm - Your Space, Redefined!)",
        iconUrl: "https://media.theresanaiforthat.com/icons/decory-ai.svg?height=207",
        url: "https://www.decory.ai/",
        category: "室内设计",
        tags: ["AI","室内设计","艺术","算法"]
    },
    {
        name: "BriefNest",
        description: "用于策略、创意和内容简报的AI工具，支持英文和西班牙文。 (Original: AI tool for strategic, creative, and content briefs in English & Spanish)",
        iconUrl: "https://media.theresanaiforthat.com/icons/briefnest.svg?height=207",
        url: "https://briefnest-ai.up.railway.app/",
        category: "生产力",
        tags: ["AI","简报","策略","创意"]
    },
    {
        name: "Whimsey: The AI Shared Inbox for Your Business",
        description: "将你的共享收件箱转变为自动化收入引擎。 (Original: Turn your shared inbox into an automated revenue engine)",
        iconUrl: "https://media.theresanaiforthat.com/icons/whimsey.svg?height=207",
        url: "https://whimsey.ai/",
        category: "电子邮件管理",
        tags: ["AI","电子邮件","共享","自动化"]
    },
    {
        name: "illumi",
        description: "上下文感知的AI团队白板。 (Original: Context-aware AI whiteboard for teams.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/illumi-one.svg?height=207",
        url: "https://www.illumi.one/",
        category: "团队协作",
        tags: ["AI","白板","团队","上下文"]
    },
    {
        name: "FirstSign AI",
        description: "自动生成的访谈 + 你今天可以行动的ICP。 (Original: Auto-generated interviews + ICPs you can act on today.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/firstsign-ai.png?height=207",
        url: "https://firstsign.ai/",
        category: "商业",
        tags: ["AI","访谈","ICP","自动生成"]
    },
    {
        name: "Tecmate",
        description: "数字转型工作流的AI推荐。 (Original: AI recommendations for digital transformation workflows.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/tecmate.svg?height=207",
        url: "https://tecmate.lovable.app/",
        category: "软件推荐",
        tags: ["AI","推荐","数字转型","工作流"]
    },
    {
        name: "CoeFont Interpreter",
        description: "AI驱动的多语言团队语音解释。 (Original: AI-powered voice interpretation for multilingual teams)",
        iconUrl: "https://media.theresanaiforthat.com/icons/coefont-interpreter.svg?height=207",
        url: "https://coefont.cloud/cir/en",
        category: "实时翻译",
        tags: ["AI","语音","解释","多语言"]
    },
    {
        name: "RambleFix",
        description: "⚡ 通过大声思考写作 - 电子邮件、笔记、文章，以你的风格。 (Original: ⚡ Write by thinking aloud - emails, notes, articles, in your style.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/ramblefix.png?height=207",
        url: "https://ramblefix.com/",
        category: "转录",
        tags: ["写作","转录","电子邮件","笔记"]
    },
    {
        name: "remio: Your Personal AI Assistant",
        description: "你的AI驱动的个人知识中心，适用于专业人士。 (Original: Your AI-powered personal knowledge hub for professionals.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/remio.svg?height=207",
        url: "https://www.remio.ai/",
        category: "笔记",
        tags: ["AI","助手","知识","专业"]
    },
    {
        name: "ForumScout - Free social listening tool",
        description: "使用AI驱动的社交监听免费跟踪在线品牌提及。 (Original: Track online brand mentions with AI-powered social listening, for free.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/forumscout.svg?height=207",
        url: "https://forumscout.app/",
        category: "品牌监控",
        tags: ["社交监听","品牌","跟踪","免费"]
    },
    {
        name: "Radiant",
        description: "从每次对话中获得不可阻挡的动力。 (Original: Unstoppable momentum from every conversation)",
        iconUrl: "https://media.theresanaiforthat.com/icons/radiant-app.svg?height=207",
        url: "https://radiantapp.com/",
        category: "生产力",
        tags: ["对话","动力","生产力"]
    },
    {
        name: "Hyperbrowser",
        description: "AI代理和应用的云浏览器。 (Original: Cloud browsers for AI agents and apps.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/hyperbrowser.svg?height=207",
        url: "https://www.hyperbrowser.ai/",
        category: "网页浏览",
        tags: ["云浏览器","AI代理","应用"]
    },
    {
        name: "Nebius AI Studio",
        description: "托管开源模型以实现更快、更便宜的AI推理。 (Original: Host open-source models for faster, cheaper AI inference.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/nebius-ai-studio.svg?height=207",
        url: "https://nebius.com/services/studio-inference-service",
        category: "AI推理",
        tags: ["AI","推理","开源","托管"]
    },
    {
        name: "Explee",
        description: "使用完整网页数据和AI丰富找到3倍多的B2B潜在客户。 (Original: Find 3X more B2B leads with full web data and AI enrichment)",
        iconUrl: "https://media.theresanaiforthat.com/icons/explee.svg?height=207",
        url: "https://explee.com/",
        category: "潜在客户开发",
        tags: ["B2B","潜在客户","数据","AI"]
    },
    {
        name: "NewPic.io",
        description: "一键专业照片编辑。 (Original: Professional photo editing in one click.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/newpic-io.svg?height=207",
        url: "https://newpic.io/",
        category: "图像编辑",
        tags: ["照片","编辑","专业","一键"]
    },
    {
        name: "Clientli",
        description: "使用你的提案副驾驶10倍你的客户；针对数字转型顾问。 (Original: 10X Your Clients with Your Proposal Copilot; for digital transformation consultants)",
        iconUrl: "https://media.theresanaiforthat.com/icons/clientli.png?height=207",
        url: "https://clientli.lovable.app/",
        category: "客户提案",
        tags: ["提案","顾问","数字转型"]
    },
    {
        name: "Changify",
        description: "使用你的变更管理副驾驶10倍AI采用；针对数字转型顾问。 (Original: 10X AI Adoption with Your Change Management Copilot; for digital transformation consultants)",
        iconUrl: "https://media.theresanaiforthat.com/icons/changify-app.png?height=207",
        url: "https://changify.lovable.app/",
        category: "变更管理",
        tags: ["变更管理","AI采用","顾问"]
    },
    {
        name: "Stackify",
        description: "优化你的SaaS堆栈的AI副驾驶。 (Original: AI copilot that optimizes your SaaS stack.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/stackify-app.png?height=207",
        url: "https://stackify.lovable.app/",
        category: "SaaS管理",
        tags: ["SaaS","优化","AI副驾驶"]
    },
    {
        name: "Leanify.app",
        description: "即时优化你的操作的AI副驾驶。 (Original: AI Co-Pilot that optimizes your operations instantly.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/leanify-app.png?height=207",
        url: "https://leanify.lovable.app/",
        category: "业务分析",
        tags: ["操作优化","AI副驾驶","即时"]
    },
    {
        name: "AutoFlo",
        description: "发现要自动化的内容，即时部署。 (Original: Discover what to automate, deploy instantly.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/autoflo.svg?height=207",
        url: "https://autoflo.lovable.app/",
        category: "流程自动化",
        tags: ["自动化","部署","发现"]
    },
    {
        name: "Creative Arena by Contra",
        description: "比较。投票。推进创意AI。 (Original: Compare. Vote. Advance Creative AI.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/contra-creative-arena.svg?height=207",
        url: "https://contra.com/creative-arena",
        category: "LLM比较",
        tags: ["创意AI","比较","投票"]
    },
    {
        name: "Apex - X Reply AI",
        description: "在几分钟内构建品牌，而不是几小时。 (Original: Build brand in minutes, not hours.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/apex-x-reply-ai.svg?height=207",
        url: "https://www.apexagents.ai/",
        category: "推特",
        tags: ["品牌构建","快速","AI"]
    },
    {
        name: "Thea",
        description: "AI学习工具，帮助掌握材料，而不仅仅是记忆。 (Original: AI study tools to master material, not just memorize it.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/thea.png?height=207",
        url: "https://www.theastudy.com/home?referralCode=taaft-ppc",
        category: "学习",
        tags: ["AI","学习","掌握","工具"]
    },
    {
        name: "Cimphony AI",
        description: "为中小企业和初创公司提供法律服务、建议、文件起草和合同。 (Original: Legal services, advice, documents drafting, & contracts for SMBs and startups)",
        iconUrl: "https://media.theresanaiforthat.com/icons/cimphony.svg?height=207",
        url: "https://www.cimphony.ai/",
        category: "法律咨询",
        tags: ["法律","服务","中小企业","初创"]
    },
    {
        name: "KinesteX AI Personal Trainer in your Digital Health Platform",
        description: "你的AI驱动的个人健身教练。 (Original: Your AI-powered personal fitness trainer.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/kinestex.png?height=207",
        url: "https://www.kinestex.com/",
        category: "物理疗法",
        tags: ["AI","健身","教练","健康"]
    },
    {
        name: "Discord NotesBot",
        description: "记录、转录和AI总结Discord通话。 (Original: Record, Transcribe, and AI Summarize Discord Calls)",
        iconUrl: "https://media.theresanaiforthat.com/icons/notesbot.svg?height=207",
        url: "https://www.notesbot.io/",
        category: "会议笔记",
        tags: ["Discord","转录","总结","记录"]
    },
    {
        name: "Organize with AI",
        description: "说你的语言的AI照片组织器。 (Original: AI photo organizer that speaks your language)",
        iconUrl: "https://media.theresanaiforthat.com/icons/organize-with-ai.svg?height=207",
        url: "https://organizewith.ai/",
        category: "图像组织",
        tags: ["AI","照片","组织","语言"]
    },
    {
        name: "Verify by TaiLR Made AI",
        description: "不要因为更好的骗子而失去伟大的雇员！ (Original: Don't loose a great hire to a better liar!)",
        iconUrl: "https://media.theresanaiforthat.com/icons/verify-by-tailr-made-ai.svg?height=207",
        url: "https://tailrmadeai.com/verify-spot-resume-red-flags-before-the-interview-seeksuite/",
        category: "简历分析",
        tags: ["验证","简历","招聘","红旗"]
    },
    {
        name: "Rendera AI",
        description: "用AI在几秒钟内重新设计任何空间。 (Original: Redesign Any Space with AI in Seconds)",
        iconUrl: "https://media.theresanaiforthat.com/icons/rendera-ai.svg?height=207",
        url: "https://www.rendera.ai/",
        category: "室内设计",
        tags: ["AI","重新设计","空间","快速"]
    },
    {
        name: "Yooz AI",
        description: "根据顶级创作者训练的AI LinkedIn帖子生成器。 (Original: AI LinkedIn post generator trained on top creators.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/yooz-ai.svg?height=207",
        url: "https://www.yooz.ai/",
        category: "LinkedIn",
        tags: ["AI","LinkedIn","帖子","生成器"]
    },
    {
        name: "AI Phone Number | ChatOdyssey",
        description: "唯一可以拨打和接听的AI电话号码。 (Original: The only AI phone number that can call and pick up.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/chat-odyssey-ai-phone-number.svg?height=207",
        url: "https://www.chatodyssey.com/ai-phone-number",
        category: "通话",
        tags: ["AI","电话","拨打","接听"]
    },
    {
        name: "byliner.ai",
        description: "记者的不公平优势。 (Original: The Unfair Advantage for Journalists.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/byliner-ai.svg?height=207",
        url: "https://byliner.ai/",
        category: "日志记录",
        tags: ["记者","优势","AI"]
    },
    {
        name: "devlo",
        description: "AI软件平台。 (Original: AI Software Platform)",
        iconUrl: "https://media.theresanaiforthat.com/icons/devlo.png?height=207",
        url: "https://devlo.ai/",
        category: "氛围编码",
        tags: ["AI","软件","平台"]
    },
    {
        name: "Nano Banana.org",
        description: "通过自然聊天对话创建和编辑图像。 (Original: Create and edit images through natural chat conversations.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/nano-banana-ai-image-generator.svg?height=207",
        url: "https://nanobanana.org/",
        category: "图像编辑",
        tags: ["图像","创建","编辑","聊天"]
    },
    {
        name: "CodeAsk",
        description: "AI读取你的代码，回答团队问题。 (Original: AI reads your code, answers team questions.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/codeask.svg?height=207",
        url: "https://www.codeask.ai/",
        category: "代码解释",
        tags: ["代码","AI","问题","团队"]
    },
    {
        name: "dbrief",
        description: "大规模自动化专家访谈用于内容。 (Original: Automate expert interviews for content at scale.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/dbrief.svg?height=207",
        url: "https://www.dbrief.io/",
        category: "中小企业访谈",
        tags: ["访谈","自动化","内容","规模"]
    },
    {
        name: "Fortellar | Cybersecurity Compliance Assessment",
        description: "赋能组织实现合规准备。 (Original: Empowering Organizations to Achieve Compliance Readiness)",
        iconUrl: "https://media.theresanaiforthat.com/icons/fortellar-cybersecurity-compliance-assessment.svg?height=207",
        url: "https://assessment.fortellar.com/",
        category: "合规",
        tags: ["网络安全","合规","评估"]
    },
    {
        name: "Talo",
        description: "使用实时AI翻译打破视频通话中的语言障碍。 (Original: Break language barriers in video calls with real-time AI translation.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/talo.svg?height=207",
        url: "https://www.taloai.com/",
        category: "实时翻译",
        tags: ["翻译","视频通话","语言障碍"]
    },
    {
        name: "Questie AI",
        description: "使用语音聊天和实时屏幕共享创建自定义AI游戏伴侣。 (Original: Create custom AI gaming companions with voice chat and live screenshare.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/questie-ai.svg?height=207",
        url: "https://www.questie.ai/",
        category: "虚拟伴侣",
        tags: ["AI","游戏","伴侣","语音"]
    },
    {
        name: "MyCareerKarma",
        description: "你的AI驱动的更好职业指南。 (Original: Your AI-Powered Guide to a Better Career.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/mycareerkarma.png?height=207",
        url: "https://mycareerkarma.app/",
        category: "职业",
        tags: ["AI","职业","指南"]
    },
    {
        name: "one.email",
        description: "使用AI将电子邮件混乱转变为清晰。 (Original: Turn email chaos into clarity with AI)",
        iconUrl: "https://media.theresanaiforthat.com/icons/one-email.svg?height=207",
        url: "https://www.one.email/",
        category: "电子邮件管理",
        tags: ["电子邮件","AI","清晰","管理"]
    },
    {
        name: "PhoneCaseAI",
        description: "使用AI即时将你的想法转变为惊人的自定义手机壳。 (Original: Turn your ideas into stunning, custom phone cases - instantly, with AI.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/phonecaseai.svg?height=207",
        url: "https://phonecaseai.com/",
        category: "手机壳设计",
        tags: ["手机壳","设计","AI","自定义"]
    },
    {
        name: "Polymer Runtime Data Security",
        description: "使用实时风险管理防止AI数据泄露。 (Original: Prevent AI data breaches with real-time risk management.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/polymer-dspm-for-ai.png?height=207",
        url: "https://www.polymerhq.io/",
        category: "网络安全",
        tags: ["数据安全","AI","风险管理"]
    },
    {
        name: "Marblism",
        description: "为你的业务工作的AI员工。 (Original: AI Employees who Work for Your Business)",
        iconUrl: "https://media.theresanaiforthat.com/icons/marblism.png?height=207",
        url: "https://www.marblism.com/",
        category: "虚拟员工",
        tags: ["AI","员工","业务"]
    },
    {
        name: "LiftKit",
        description: "将ChatGPT转变为你的整个营销团队。 (Original: Turn ChatGPT into your entire marketing team.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/liftkit.svg?height=207",
        url: "https://www.getliftkit.com/",
        category: "营销",
        tags: ["ChatGPT","营销","团队"]
    },
    {
        name: "Wizardly",
        description: "神奇地为销售代表创建AI驱动的入职向导。 (Original: Magically create AI-powered onboarding wizards for sales reps.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/wizardly.svg?height=207",
        url: "https://trywizardly.com/",
        category: "入职教程",
        tags: ["AI","入职","向导","销售"]
    },
    {
        name: "Overcut.ai",
        description: "使用连续AI构建你的自治团队。 (Original: Build your autonomous team with continuous AI)",
        iconUrl: "https://media.theresanaiforthat.com/icons/overcut-ai.svg?height=207",
        url: "https://overcut.ai/",
        category: "工作流",
        tags: ["AI","团队","自治","连续"]
    },
    {
        name: "LPagery AI Rank Tracker",
        description: "在AI聊天机器人中跟踪你的业务排名。 (Original: Track your business rankings in AI chatbots.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/lpagery-ai-rank-tracker.svg?height=207",
        url: "https://lpagery.io/tools/ai-rank-tracker/",
        category: "答案引擎优化",
        tags: ["排名跟踪","AI聊天","业务"]
    },
    {
        name: "Stunning",
        description: "在几秒钟内构建AI驱动的网站。 (Original: Build AI-powered websites in seconds)",
        iconUrl: "https://media.theresanaiforthat.com/icons/stunning.svg?height=207",
        url: "https://www.stunning.so/",
        category: "网站",
        tags: ["AI","网站构建","快速"]
    },
    {
        name: "ChatFeatured",
        description: "在ChatGPT和AI搜索结果中被突出显示。 (Original: Get featured in ChatGPT & AI search results.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/chatfeatured.svg?height=207",
        url: "https://chatfeatured.com/",
        category: "答案引擎优化",
        tags: ["ChatGPT","AI搜索","突出"]
    },
    {
        name: "Guideless",
        description: "在几分钟内将任何浏览器工作流转变为精炼的、AI叙述的视频指南。 (Original: Turn any browser workflow into a polished, AI-narrated video guide in minutes.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/guideless-ai.svg?height=207",
        url: "https://guideless.ai/",
        category: "指南",
        tags: ["浏览器","工作流","视频指南","AI"]
    },
    {
        name: "Oh My Images",
        description: "使用AI即时创建惊人的Nano banana图像。 (Original: Create stunning Nano banana images instantly with AI.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/oh-my-images.svg?height=207",
        url: "https://ohmyimages.com/",
        category: "图像",
        tags: ["图像创建","AI","即时"]
    },
    {
        name: "ChatNode",
        description: "感觉像人类的客户服务AI代理。 (Original: AI Agents for customer service that feel human)",
        iconUrl: "https://media.theresanaiforthat.com/icons/chatnode.png?height=207",
        url: "https://www.chatnode.ai/",
        category: "代理",
        tags: ["AI代理","客户服务","人性化"]
    },
    {
        name: "AutoQA",
        description: "用纯英语描述测试，在真实浏览器中执行它们。 (Original: Describe Tests in Plain English, Execute Them in Real Browsers)",
        iconUrl: "https://media.theresanaiforthat.com/icons/autoqa-io.svg?height=207",
        url: "https://auto-qa.io/",
        category: "测试自动化",
        tags: ["测试","自动化","浏览器","英语"]
    },
    {
        name: "ACE ESSAY",
        description: "以学术严谨性创作个人、引人入胜的文章。 (Original: Craft personal, engaging essays with academic rigor.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/ace-essay.svg?height=207",
        url: "https://aceessay.ai/essay-humanizer",
        category: "AI文本人性化",
        tags: ["文章","创作","学术","引人入胜"]
    },
    {
        name: "Limecube",
        description: "使用AI改变网站创建的方式。 (Original: Transforming the way websites are created with AI.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/limecube.svg?height=207",
        url: "https://limecube.co/",
        category: "网站",
        tags: ["AI","网站创建","转变"]
    },
    {
        name: "Social Intents",
        description: "通过消息平台提供实时支持和销售。 (Original: Real-time support & sales via messaging platforms.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/social-intents.png?height=207",
        url: "https://www.socialintents.com/",
        category: "客户支持聊天机器人",
        tags: ["支持","销售","消息平台"]
    },
    {
        name: "Model Playground AI",
        description: "并排比较AI模型，无麻烦。 (Original: Compare AI models side by side, hassle-free.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/model-playground-ai.svg?height=207",
        url: "https://modelplayground.ai/",
        category: "内容",
        tags: ["AI模型","比较","无麻烦"]
    },
    {
        name: "APOB",
        description: "通过创建自己的个性化AI影响者赚钱。 (Original: Earn money by creating your own personalized AI influencer.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/apob.svg?height=207",
        url: "https://mega.apob.ai/taaftp",
        category: "视频",
        tags: ["AI影响者","赚钱","个性化"]
    },
    {
        name: "Canopy API",
        description: "通过直观的API访问实时亚马逊数据。 (Original: Access real-time Amazon data through intuitive APIs)",
        iconUrl: "https://media.theresanaiforthat.com/icons/canopy-api.svg?height=207",
        url: "https://www.canopyapi.co/",
        category: "亚马逊数据提取",
        tags: ["亚马逊","数据","API","实时"]
    },
    {
        name: "Amino: Supplement Scanner",
        description: "扫描、分析和跟踪补充剂的安全性。 (Original: Scan, analyze, and track supplements for safety.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/amino-supplement-scanner.svg?height=207",
        url: "https://apps.apple.com/us/app/supplement-scanner-amino/id6744544982",
        category: "补充剂扫描",
        tags: ["补充剂","扫描","分析","安全"]
    },
    {
        name: "Nano-Banana.com",
        description: "使用AI在几秒钟内创建和编辑图像。 (Original: Create and edit images in seconds with AI.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/nano-banana-com.svg?height=207",
        url: "https://www.nano-banana.com/",
        category: "图像编辑",
        tags: ["图像","创建","编辑","AI"]
    },
    {
        name: "TextMusic.net",
        description: "即时将文本转变为美丽的音乐。 (Original: Transform text into beautiful music instantly.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/textmusic-net.svg?height=207",
        url: "https://www.textmusic.net/",
        category: "音乐",
        tags: ["文本转音乐","即时","美丽"]
    },
    {
        name: "PACT | Free Compliance Audit",
        description: "100%免费的AI驱动网站合规审计，在几分钟内完成。 (Original: 100% Free AI-powered website compliance audits in minutes.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/ai-pact.png?height=207",
        url: "https://ai-pact.com/",
        category: "网站合规",
        tags: ["合规审计","网站","免费","AI"]
    },
    {
        name: "AI Humanizer Text",
        description: "将机器人AI文本转变为自然写作。 (Original: Transform robotic AI text into natural writing.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/ai-humanizer-text.svg?height=207",
        url: "https://aihumanizertext.com/",
        category: "文本人性化",
        tags: ["AI文本","人性化","自然写作"]
    },
    {
        name: "eBookColoring",
        description: "使用AI创建美丽的着色书。 (Original: Create Beautiful Coloring Books with AI)",
        iconUrl: "https://media.theresanaiforthat.com/icons/ebookcoloring.svg?height=207",
        url: "https://ebookcoloring.com/",
        category: "着色页",
        tags: ["着色书","AI","创建"]
    },
    {
        name: "AIVideoMaker - Free AI Video Maker",
        description: "即时将静态图像转变为动画视频。 (Original: Transform static images into animated videos instantly.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/aivideomaker-free-ai-video-maker.svg?height=207",
        url: "https://aivideomaker.ai/image-to-video",
        category: "图像转视频",
        tags: ["图像","视频","动画","免费"]
    },
    {
        name: "RemoveMark",
        description: "在线即时移除Sora水印。 (Original: Remove Sora watermarks instantly online.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/sora-watermark-remover.svg?height=207",
        url: "https://removemark.io/",
        category: "水印移除",
        tags: ["水印","移除","在线","即时"]
    },
    {
        name: "IconCraft",
        description: "在几秒钟内生成设计师级应用图标。 (Original: Generate designer-grade app icons in seconds)",
        iconUrl: "https://media.theresanaiforthat.com/icons/iconcraft-1760686821.svg?height=207",
        url: "https://iconcraft.app/",
        category: "图标",
        tags: ["图标生成","应用","设计师级"]
    },
    {
        name: "Banana AI.org",
        description: "使用AI轻松编辑、重塑、转换和重新创建图像。 (Original: Edit, restyle, transform, and recreate images effortlessly with AI.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/banana-ai-org.png?height=207",
        url: "https://banana-ai.org/",
        category: "图像编辑",
        tags: ["图像","编辑","AI","轻松"]
    },
    {
        name: "Slidely AI",
        description: "使用AI一键创建惊人的、符合品牌的幻灯片。 (Original: Create stunning, on-brand slides in one click with AI)",
        iconUrl: "https://media.theresanaiforthat.com/icons/slidely-ai.svg?height=207",
        url: "https://slidely.ai/",
        category: "演示文稿",
        tags: ["幻灯片","AI","一键","品牌"]
    },
    {
        name: "Banana Nano AI",
        description: "使用AI驱动的生成转变图像。 (Original: Transform images with AI-powered generation.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/banana-nano-ai.svg?height=207",
        url: "https://bananananoai.net/ai-image-to-image-generator",
        category: "图像编辑",
        tags: ["图像转变","AI","生成"]
    },
    {
        name: "MusicGeneratorAI",
        description: "无需音乐技能，将灵感转化为旋律。 (Original: Transform inspiration into melodies without musical skills.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/musicgeneratorai.svg?height=207",
        url: "https://musicgeneratorai.io/",
        category: "音乐",
        tags: ["音乐生成","AI","旋律","灵感"]
    },
    {
        name: "Transor",
        description: "一键打破语言障碍。 (Original: Break language barriers with one click.)",
        iconUrl: "https://media.theresanaiforthat.com/icons/transor.svg?height=207",
        url: "https://transor.ai/",
        category: "翻译",
        tags: ["翻译","语言障碍","一键"]
    },
    {
        name: "Semrush",
        description: "综合性SEO和数字营销工具，支持关键词研究、竞争对手分析和网站审计。",
        url: "https://www.semrush.com",
        category: "SEO工具",
        tags: ["SEO","数字营销","竞争分析","网站审计"]
    },
    {
        name: "Moz",
        description: "提供SEO工具、教程和博客，涵盖关键词排名、链接建设、网站健康度分析等。",
        url: "https://moz.com",
        category: "SEO工具",
        tags: ["SEO工具","教程","博客","链接建设"]
    },
    {
        name: "Google Search Console",
        description: "谷歌官方提供的SEO监控工具，帮助网站管理员监控索引状态、搜索流量和错误报告。",
        url: "https://search.google.com/search-console",
        category: "SEO工具",
        tags: ["SEO监控","谷歌","索引状态","搜索流量"]
    },
    {
        name: "Bing Webmaster Tools",
        description: "微软官方网站管理工具，用于监控网站在Bing搜索引擎中的表现和索引情况。",
        url: "https://www.bing.com/webmasters",
        category: "SEO工具",
        tags: ["网站管理","Bing","搜索引擎","索引"]
    },
    {
        name: "Screaming Frog SEO Spider",
        description: "桌面级网站爬虫工具，用于分析网站结构、元标签和内部链接。",
        url: "https://www.screamingfrog.co.uk/seo-spider/",
        category: "SEO工具",
        tags: ["网站爬虫","结构分析","元标签","内部链接"]
    },
    {
        name: "Yoast SEO",
        description: "WordPress插件，帮助优化网站内容SEO，提供可读性和技术SEO建议。",
        url: "https://yoast.com/wordpress/plugins/seo/",
        category: "SEO工具",
        tags: ["WordPress","SEO插件","内容优化","技术SEO"]
    },
    {
        name: "Search Engine Journal",
        description: "权威SEO资讯网站，提供最新行业动态、案例研究和SEO策略。",
        url: "https://www.searchenginejournal.com",
        category: "SEO博客",
        tags: ["SEO资讯","行业动态","案例研究","策略"]
    },
    {
        name: "Moz Blog",
        description: "Moz官方博客，分享SEO最佳实践、工具更新和行业趋势。",
        url: "https://moz.com/blog",
        category: "SEO博客",
        tags: ["SEO博客","最佳实践","工具更新","行业趋势"]
    },
    {
        name: "Search Engine Land",
        description: "专注于搜索引擎优化、数字营销和广告技术的权威新闻网站。",
        url: "https://www.searchengineland.com",
        category: "SEO博客",
        tags: ["搜索引擎优化","数字营销","广告技术","新闻"]
    },
    {
        name: "Backlinko",
        description: "由Brian Dean创立的SEO博客，提供深入的SEO策略和数据驱动的优化建议。",
        url: "https://backlinko.com",
        category: "SEO博客",
        tags: ["SEO策略","数据驱动","优化建议"]
    },
    {
        name: "Neil Patel",
        description: "知名数字营销专家Neil Patel的网站，提供SEO教程、工具和行业洞察。",
        url: "https://neilpatel.com",
        category: "SEO博客",
        tags: ["数字营销","SEO教程","工具","行业洞察"]
    },
    {
        name: "HubSpot SEO Blog",
        description: "HubSpot官方营销博客，涵盖SEO、内容营销和用户体验优化。",
        url: "https://blog.hubspot.com/marketing/seo",
        category: "SEO博客",
        tags: ["SEO","内容营销","用户体验","优化"]
    },
    {
        name: "Ahrefs Blog",
        description: "Ahrefs官方博客，发布SEO技巧、工具更新和案例研究。",
        url: "https://ahrefs.com/blog",
        category: "SEO博客",
        tags: ["SEO技巧","工具更新","案例研究"]
    },
    {
        name: "Moz Community",
        description: "Moz官方社区，供SEO从业者交流经验、提问和分享资源。",
        url: "https://moz.com/community",
        category: "SEO社区",
        tags: ["SEO社区","交流","经验分享","资源"]
    },
    {
        name: "Reddit SEO",
        description: "Reddit上的SEO讨论社区，涵盖技术SEO、内容策略和行业趋势。",
        url: "https://www.reddit.com/r/SEO/",
        category: "SEO社区",
        tags: ["SEO讨论","技术SEO","内容策略","趋势"]
    },
    {
        name: "SEO Stack Exchange",
        description: "技术问答社区，用户可提问和回答关于SEO优化的技术问题。",
        url: "https://stackoverflow.com/questions/tagged/seo",
        category: "SEO社区",
        tags: ["SEO问答","技术问题","优化"]
    },
    {
        name: "Webmaster World",
        description: "历史悠久的SEO和网站优化论坛，涵盖技术、链接建设等话题。",
        url: "https://www.webmasterworld.com",
        category: "SEO社区",
        tags: ["SEO论坛","网站优化","链接建设","技术"]
    },
    {
        name: "SEMrush Academy",
        description: "Semrush官方免费学习平台，提供SEO、内容营销和广告课程。",
        url: "https://www.semrush.com/academy/",
        category: "SEO课程",
        tags: ["SEO学习","内容营销","广告课程","免费"]
    },
    {
        name: "Moz Academy",
        description: "Moz提供的免费SEO学习平台，涵盖初学者到高级的课程内容。",
        url: "https://moz.com/academy",
        category: "SEO课程",
        tags: ["SEO学习","初学者","高级课程","免费"]
    },
    {
        name: "Udemy SEO Courses",
        description: "提供大量付费和免费的SEO课程，适合不同水平的学习者。",
        url: "https://www.udemy.com/topic/seo/",
        category: "SEO课程",
        tags: ["SEO课程","付费免费","不同水平"]
    },
    {
        name: "Coursera SEO Courses",
        description: "提供由大学和机构认证的SEO和数字营销课程。",
        url: "https://www.coursera.org/search?query=seo",
        category: "SEO课程",
        tags: ["SEO课程","认证","数字营销"]
    },
    {
        name: "Skillshare SEO Courses",
        description: "提供实践导向的SEO课程，适合内容创作者和营销人员。",
        url: "https://www.skillshare.com/search?query=seo",
        category: "SEO课程",
        tags: ["实践导向","SEO课程","内容创作者"]
    },
    {
        name: "Google Developers SEO Guide",
        description: "谷歌官方技术文档，指导网站如何优化搜索引擎可见性。",
        url: "https://developers.google.com/search/docs",
        category: "SEO指南",
        tags: ["SEO指南","谷歌官方","搜索引擎优化"]
    },
    {
        name: "SEMrush Keyword Magic Tool",
        description: "关键词研究工具，提供长尾关键词、搜索量和竞争度分析。",
        url: "https://www.semrush.com/keyword-magic-tool/",
        category: "SEO工具",
        tags: ["关键词研究","长尾关键词","竞争分析"]
    },
    {
        name: "美国商标局",
        description: "美国官方商标注册和查询平台，提供商标搜索、申请和保护服务。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf163552.jpg/icon52",
        url: "https://www.uspto.gov/trademarks",
        category: "商标专利",
        tags: ["商标查询","美国","注册","保护"]
    },
    {
        name: "WIPO商标查询",
        description: "世界知识产权组织提供的全球商标数据库，支持国际商标搜索。",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717689750107858_wipo.png",
        url: "https://branddb.wipo.int/zh/",
        category: "商标专利",
        tags: ["全球商标","WIPO","国际搜索"]
    },
    {
        name: "欧洲商标局",
        description: "欧盟知识产权局，提供欧洲商标注册、搜索和保护服务。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf18d875.jpg/icon52",
        url: "https://www.euipo.europa.eu/en",
        category: "商标专利",
        tags: ["欧洲商标","注册","保护"]
    },
    {
        name: "英国商标局",
        description: "英国知识产权局，提供商标注册、搜索和知识产权保护。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf1b5513.jpg/icon52",
        url: "https://www.gov.uk/government/organisations/intellectual-property-office",
        category: "商标专利",
        tags: ["英国商标","知识产权","注册"]
    },
    {
        name: "日本商标局",
        description: "日本专利局，提供商标注册和查询服务。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf1dfc2b.jpg/icon52",
        url: "http://www.jpo.go.jp/",
        category: "商标专利",
        tags: ["日本商标","注册","查询"]
    },
    {
        name: "TradeMarkia",
        description: "全球商标搜索引擎，提供商标注册、监控和法律服务。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf20d25c.jpg/icon52",
        url: "http://www.trademarkia.com/",
        category: "商标专利",
        tags: ["全球商标","搜索引擎","注册"]
    },
    {
        name: "商标分类表",
        description: "商标分类查询工具，帮助了解国际商标分类标准。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f87e653da.png/icon52",
        url: "https://www.amz123.com/shangbiao.htm",
        category: "商标专利",
        tags: ["商标分类","查询","标准"]
    },
    {
        name: "美国专利局",
        description: "美国专利和商标局，提供专利搜索和申请服务。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf13c8e8.jpg/icon52",
        url: "https://ppubs.uspto.gov/pubwebapp/static/pages/landing.html",
        category: "商标专利",
        tags: ["美国专利","搜索","申请"]
    },
    {
        name: "WIPO专利查询",
        description: "世界知识产权组织专利数据库，支持全球专利搜索。",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717689750107858_wipo.png",
        url: "https://designdb.wipo.int/designdb/en/index.jsp",
        category: "商标专利",
        tags: ["全球专利","WIPO","搜索"]
    },
    {
        name: "欧洲专利局",
        description: "欧洲专利组织，提供专利申请、搜索和保护服务。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf108cf6.jpg/icon52",
        url: "https://www.epo.org/en/searching-for-patents",
        category: "商标专利",
        tags: ["欧洲专利","申请","保护"]
    },
    {
        name: "卓特视觉",
        description: "Adobe Stock正版商用素材库，低至6元",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717379409248258_lQLPKGbpjO9LGJXMyMzIsBao3h0Tg4mYBkiPeyCF6QA_200_200.png",
        url: "https://www.droitstock.com/?utm_source=amz123&utm_term=gqtk-gw-droitstock",
        category: "付费图库",
        tags: ["正版素材","商用","Adobe Stock","低价"]
    },
    {
        name: "图虫创意",
        description: "国内领先的正版图片和视频交易平台，拥有2亿高清资源，涵盖创意素材、新闻图片和插画矢量图等，一次购买永久使用，版权保障，性价比高",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648%E5%9B%BE%E8%99%AB%E5%88%9B%E6%84%8F.png",
        url: "https://tuchong.com/",
        category: "付费图库",
        tags: ["正版图片","视频交易","高清资源","永久使用"]
    },
    {
        name: "Veer图库",
        description: "一家国际化的版权内容提供商，内容来自全球微利图库鼻祖iStock，拥有亿级优质图片资源。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649Veer%E5%9B%BE%E5%BA%93.png",
        url: "https://www.veer.com/",
        category: "付费图库",
        tags: ["版权内容","优质图片","国际","iStock"]
    },
    {
        name: "拍信创意",
        description: "推荐！一元嗨购版权图片，有版权全网可商用",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648%E6%8B%8D%E4%BF%A1%E5%88%9B%E6%84%8F.png",
        url: "https://v.paixin.com/",
        category: "付费图库",
        tags: ["版权图片","低价购买","全网商用"]
    },
    {
        name: "邑石网Yestone",
        description: "全部正版商用授权，品质高到挑花眼",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648%E9%82%91%E7%9F%B3%E7%BD%91Yestone.png",
        url: "https://www.yestone.com/",
        category: "付费图库",
        tags: ["正版授权","高品质","商用"]
    },
    {
        name: "视觉中国",
        description: "先进的视觉影像内容和整合营销传播服务提供商，一个致力于设计作品分享、发现、售卖的专业平台。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648VCG.jpeg",
        url: "https://www.vcg.com/",
        category: "付费图库",
        tags: ["视觉影像","营销传播","设计作品"]
    },
    {
        name: "全景网",
        description: "国内领先的图片库和正版图片素材网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648%E5%85%A8%E6%99%AF%E7%BD%91.png",
        url: "https://www.quanjing.com/",
        category: "付费图库",
        tags: ["图片库","正版素材","国内领先"]
    },
    {
        name: "站酷海洛",
        description: "站酷网旗下的正版图片在线交易平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648%E7%AB%99%E9%85%B7%E6%B5%B7%E6%B4%9B.jpeg",
        url: "https://www.hellorf.com/",
        category: "付费图库",
        tags: ["正版图片","在线交易","站酷"]
    },
    {
        name: "锐景创意",
        description: "提供免费收费图片、插画等可以商用版权的素材",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648%E9%94%90%E6%99%AF%E5%88%9B%E6%84%8F.png",
        url: "https://www.originoo.com/",
        category: "付费图库",
        tags: ["商用素材","图片插画","版权"]
    },
    {
        name: "千库网",
        description: "国内设计师喜欢的图片素材库，找素材就上千库网。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649%E5%8D%83%E5%BA%93%E7%BD%91.png",
        url: "https://588ku.com/",
        category: "付费图库",
        tags: ["图片素材","设计师","国内"]
    },
    {
        name: "摄图网",
        description: "一家专注于正版摄影高清图片素材免费下载的图库作品网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649%E6%91%84%E5%9B%BE%E7%BD%91.png",
        url: "http://699pic.com/",
        category: "付费图库",
        tags: ["摄影图片","高清素材","免费下载"]
    },
    {
        name: "汇图网",
        description: "国内领先的正版商业图库,原创作品交易平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649%E6%B1%87%E5%9B%BE%E7%BD%91.png",
        url: "http://www.huitu.com/",
        category: "付费图库",
        tags: ["商业图库","原创作品","交易平台"]
    },
    {
        name: "Bigstockphoto",
        description: "数百万张绝佳的免版税库存照片、图像和矢量图",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649Bigstockphoto.png",
        url: "https://www.bigstockphoto.com/zh/",
        category: "付费图库",
        tags: ["免版税","库存照片","矢量图"]
    },
    {
        name: "1X",
        description: "国内访问很不稳定，格调很高的照片图库，图片很精美",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/16788756491X.png",
        url: "https://1x.com/photos",
        category: "付费图库",
        tags: ["高质量","精美图片","格调高"]
    },
    {
        name: "万素网",
        description: "海量可商用图片免费下载，全站700万免抠元素、psd源文件、商用摄影图等注册即可每日免费下载。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649%E4%B8%87%E7%B4%A0%E7%BD%91.png",
        url: "https://669pic.com/photo/",
        category: "付费图库",
        tags: ["商用图片","免抠元素","PSD源文件"]
    },
    {
        name: "卓特精选",
        description: "电商专用素材，优质正版",
        iconUrl: "https://img.amz123.com/image_cloud/202308/1691546380406_1678875608%E5%8D%93%E7%89%B9%E8%A7%86%E8%A7%89.png",
        url: "https://www.droitstock.com/i/amz123",
        category: "付费图库",
        tags: ["电商素材","优质正版","专用"]
    },
    {
        name: "包图网",
        description: "专注原创可商用设计图片下载，1.5亿设计素材图库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875612%E5%8C%85%E5%9B%BE%E7%BD%91.png",
        url: "https://ibaotu.com/",
        category: "付费图库",
        tags: ["原创设计","商用图片","设计素材"]
    },
    {
        name: "FreePik",
        description: "知名设计素材站！PSD、矢量图、图库应有尽有",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281578FreePik.png",
        url: "https://www.freepik.com/",
        category: "付费图库",
        tags: ["设计素材","PSD","矢量图","知名"]
    },
    {
        name: "觅知网",
        description: "专注于优质实用的设计资源下载",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647%E8%A7%85%E7%9F%A5%E7%BD%91.jpeg",
        url: "https://www.51miz.com/tupian/",
        category: "付费图库",
        tags: ["设计资源","优质实用","下载"]
    },
    {
        name: "500px",
        description: "打造专业摄影社区中文网站，有着世界上最好的照片分享",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875649500px.png",
        url: "https://500px.com.cn/",
        category: "摄影美图",
        tags: ["专业摄影","社区","照片分享","中文"]
    },
    {
        name: "35photo",
        description: "一个高质量图片分享平台，张张精品",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/167887564935photo.png",
        url: "https://35photo.pro/new/actual/",
        category: "摄影美图",
        tags: ["高质量","图片分享","精品"]
    },
    {
        name: "美空",
        description: "设计P图累的时候，不妨到这里看看美女吧",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650%E7%BE%8E%E7%A9%BA.png",
        url: "http://www.moko.cc/",
        category: "摄影美图",
        tags: ["美女","人像","设计灵感"]
    },
    {
        name: "POCO",
        description: "领先的时尚摄影平台，分享作品和技巧首选",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650POCO.png",
        url: "https://www.poco.cn/",
        category: "摄影美图",
        tags: ["时尚摄影","作品分享","技巧"]
    },
    {
        name: "蜂鸟网",
        description: "摄影爱好者分享摄影技巧和作品的中国影像门户",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650%E8%9C%82%E9%B8%9F%E7%BD%91.png",
        url: "http://www.fengniao.com/",
        category: "摄影美图",
        tags: ["摄影技巧","作品分享","影像门户"]
    },
    {
        name: "无忌视界",
        description: "国内外优秀摄影师的线上展览平台，开阔眼界",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650%E6%97%A0%E5%BF%8C%E8%A7%86%E7%95%8C.png",
        url: "http://vision.xitek.com/sight/",
        category: "摄影美图",
        tags: ["摄影师","线上展览","开阔眼界"]
    },
    {
        name: "天空之城SkyPixel",
        description: "全球航拍爱好者和专业摄影师的作品社区",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8ESkyPixel.png",
        url: "https://www.skypixel.com/",
        category: "摄影美图",
        tags: ["航拍","专业摄影","作品社区","全球"]
    },
    // 电商平台
    {
        name: "亚马逊企业购",
        description: "亚马逊企业采购平台，为企业和机构提供B2B采购服务",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1718339371937412_%E4%BA%9A%E9%A9%AC%E9%80%8A%E4%BC%81%E4%B8%9A%E8%B4%AD.png",
        url: "https://ma.globalsellingcommunity.cn/page/landing-page/index?pf_uid=23802_1984&id=11055&channel=27829",
        category: "电商平台",
        tags: ["亚马逊", "企业采购", "B2B", "全球"]
    },
    {
        name: "Wayfair",
        description: "美国家居和装饰品电商平台，专注于家具和家居用品",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a3fc103e86.png/viewthumb",
        url: "https://www.wayfair.com/",
        category: "电商平台",
        tags: ["家居", "家具", "装饰品", "美国"]
    },
    {
        name: "Cdiscount",
        description: "法国领先的电商平台，提供电子产品、家居用品等商品",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a33d301f66.png/viewthumb",
        url: "https://www.cdiscount.com/",
        category: "电商平台",
        tags: ["法国", "电子产品", "家居用品", "欧洲"]
    },
    {
        name: "OTTO",
        description: "德国最大的电商平台之一，提供时尚、家居、电子产品等",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a35049ae94.jpeg/viewthumb",
        url: "https://www.otto.de/",
        category: "电商平台",
        tags: ["德国", "时尚", "家居", "电子产品"]
    },
    {
        name: "Allegro",
        description: "波兰最大的电商平台，提供各类商品和服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a3452cfc72.png/viewthumb",
        url: "https://allegro.pl/",
        category: "电商平台",
        tags: ["波兰", "最大平台", "各类商品", "东欧"]
    },
    {
        name: "eMAG",
        description: "罗马尼亚和东欧地区的主要电商平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a345e2546c.png/viewthumb",
        url: "https://www.emag.ro/",
        category: "电商平台",
        tags: ["罗马尼亚", "东欧", "主要平台"]
    },
    {
        name: "Miravia",
        description: "阿里巴巴在西班牙推出的电商平台",
        iconUrl: "https://img.amz123.com/image_cloud/202306/1687673920473_miravia.png",
        url: "https://www.miravia.es/",
        category: "电商平台",
        tags: ["阿里巴巴", "西班牙", "新兴平台"]
    },
    {
        name: "法国乐天",
        description: "乐天在法国的电商平台，提供各类商品",
        iconUrl: "https://img.amz123.com/image_cloud/202302/1677046347372_Rakuten.png",
        url: "https://fr.shopping.rakuten.com/",
        category: "电商平台",
        tags: ["乐天", "法国", "各类商品"]
    },
    {
        name: "Fruugo",
        description: "全球电商平台，连接卖家和全球消费者",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1681907937838_fruugo.png",
        url: "https://www.amz123.com/eu#fruugo",
        category: "电商平台",
        tags: ["全球平台", "跨境", "连接卖家"]
    },
    {
        name: "Kaufland",
        description: "德国连锁超市的在线电商平台",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1682041985448_Kaufland.jpg",
        url: "https://www.kaufland.de/",
        category: "电商平台",
        tags: ["德国", "连锁超市", "在线平台"]
    },
    {
        name: "ManoMano",
        description: "欧洲领先的家居装修和园艺电商平台",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202311/1701134073980151_mano.png",
        url: "https://www.manomano.fr/",
        category: "电商平台",
        tags: ["欧洲", "家居装修", "园艺", "DIY"]
    },
    {
        name: "BOL",
        description: "荷兰和比利时的主要电商平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a35105126c.png/viewthumb",
        url: "https://www.bol.com/",
        category: "电商平台",
        tags: ["荷兰", "比利时", "主要平台"]
    },
    {
        name: "Tokopedia",
        description: "印尼最大的电商平台，提供各类商品和服务",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202404/1712827466106527_Tokopedia.png",
        url: "https://www.tokopedia.com/",
        category: "电商平台",
        tags: ["印尼", "最大平台", "各类商品", "东南亚"]
    },
    {
        name: "Shopee",
        description: "东南亚领先的电商平台，覆盖多个国家和地区",
        iconUrl: "https://img.amz123.com/image_cloud/202310/1697012293892_60f043f7d3c8b.png",
        url: "https://shopee.ph/",
        category: "电商平台",
        tags: ["东南亚", "多国覆盖", "移动优先", "社交电商"]
    },
    {
        name: "Lazada",
        description: "阿里巴巴旗下的东南亚电商平台",
        iconUrl: "https://img.amz123.com/image_cloud/202303/1679580461014_Lazada.png",
        url: "https://www.lazada.com.ph/",
        category: "电商平台",
        tags: ["阿里巴巴", "东南亚", "多国平台"]
    },
    {
        name: "Blibli",
        description: "印尼知名的电商平台，提供各类商品",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202401/1706146843156738_blibli.jpg",
        url: "https://www.blibli.com/",
        category: "电商平台",
        tags: ["印尼", "知名平台", "各类商品"]
    },
    {
        name: "Noon",
        description: "中东地区领先的电商平台",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202404/1712828836702371_noon1.png",
        url: "https://www.noon.com/uae-en/",
        category: "电商平台",
        tags: ["中东", "领先平台", "阿联酋"]
    },
    {
        name: "美国煤炉",
        description: "美国二手商品交易平台Mercari",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a5b68765b8.png/viewthumb",
        url: "https://www.mercari.com/",
        category: "电商平台",
        tags: ["美国", "二手交易", "Mercari"]
    },
    {
        name: "日本煤炉",
        description: "日本二手商品交易平台Mercari",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220331/6245317b866cb.png/viewthumb",
        url: "https://jp.mercari.com/",
        category: "电商平台",
        tags: ["日本", "二手交易", "Mercari"]
    },
    {
        name: "贺佰狮",
        description: "土耳其领先的电商平台Hepsiburada",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202404/1712828569494464_Hepsiburada.png",
        url: "https://www.hepsiburada.com/",
        category: "电商平台",
        tags: ["土耳其", "领先平台", "Hepsiburada"]
    },
    {
        name: "Jumia",
        description: "非洲最大的电商平台，覆盖多个非洲国家",
        iconUrl: "https://img.amz123.com/upload/202310/1698487980418998_jumia.png",
        url: "https://www.jumia.com.ng/",
        category: "电商平台",
        tags: ["非洲", "最大平台", "多国覆盖"]
    },
    {
        name: "Takealot",
        description: "南非最大的电商平台",
        iconUrl: "https://img.amz123.com/upload/202310/1698489156312258_takealot.png",
        url: "https://www.takealot.com/",
        category: "电商平台",
        tags: ["南非", "最大平台", "电商"]
    },
    {
        name: "敦煌网",
        description: "中国领先的B2B跨境电商平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/wm/202303/1678799122%E6%95%A6%E7%85%8C%E7%BD%91.png",
        url: "https://www.dhgate.com/",
        category: "电商平台",
        tags: ["中国", "B2B", "跨境电商", "批发"]
    },
    {
        name: "阿里巴巴",
        description: "全球领先的B2B电商平台，连接全球买家和卖家",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202311/1701096518901095_%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4.png",
        url: "https://www.alibaba.com/",
        category: "电商平台",
        tags: ["全球", "B2B", "批发", "制造商"]
    },
    {
        name: "新蛋",
        description: "美国知名的电子产品电商平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a3fe274c85.png/viewthumb",
        url: "https://www.newegg.com/",
        category: "电商平台",
        tags: ["美国", "电子产品", "科技", "Newegg"]
    },
    {
        name: "Wish",
        description: "移动优先的全球电商平台，以低价商品著称",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220416/625a5df88120a.png/viewthumb",
        url: "https://www.wish.com/",
        category: "电商平台",
        tags: ["移动优先", "全球", "低价商品", "移动电商"]
    },
    // 收款支付
    {
        name: "Airwallex空中云汇",
        description: "120天电商收款提现0费率",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202408/1724377127655439_logo%E9%8D%A5%E7%82%AC%E7%88%A3%E7%81%9E%E6%9B%A0%E3%81%9A200x200_%E9%90%A2%E7%BB%98%E6%BE%981%E9%8D%93%EE%88%9B%E6%B9%B0.jpg",
        url: "https://www.airwallex.com/cn/2023landingpage/gtpn?utm_source=affiliate_direct&utm_medium=affiliates&utm_campaign=v01_cn_cn_ib_dg_prtmk_bofu_2025_amz123_online_shoukuanzhifu",
        category: "收款支付",
        tags: ["跨境收款", "0费率", "多币种", "企业账户"]
    },
    {
        name: "网易支付",
        description: "网易官方出品，亚马逊收款首选，0汇损所见所得",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201230/5fec488114623.png/icon52",
        url: "http://163.lu/TnuFjG",
        category: "收款支付",
        tags: ["网易官方", "亚马逊收款", "0汇损", "新用户优惠"]
    },
    {
        name: "万里汇WorldFirst",
        description: "蚂蚁集团品牌，费率千三封顶，闪速到账！",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f87f729c8.jpeg/icon52",
        url: "https://www.worldfirst.com.cn/cn/?affiliate_id=3493&utm_medium=partnership&utm_source=amz123&utm_term=frontpage",
        category: "收款支付",
        tags: ["蚂蚁集团", "安全合规", "0汇损", "一键直付"]
    },
    {
        name: "PingPong",
        description: "多平台多币种收付款，支持14国vat缴费，快速到账",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf3c413b.jpg/icon52",
        url: "https://www.pingpongx.com/?channel=amzhd",
        category: "收款支付",
        tags: ["多平台", "多币种", "VAT缴费", "快速到账"]
    },
    {
        name: "美元借贷 当天到",
        description: "港司港户直开，3分钟申请，2千-1千万美元",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202506/1749547459424079_%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20250610172348.png",
        url: "https://www.fundpark.cn/financing/credit/hook?cpid=75bba351-3084-33c5-c8f0-2d3357bd3fc7&tpid=2506blue",
        category: "收款支付",
        tags: ["美元借贷", "港司港户", "快速申请", "大额资金"]
    },
    {
        name: "PhotonPay光子易",
        description: "领先的全球支付平台及数字金融基础设施提供商",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202504/1745310868595998_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250422163301.png",
        url: "https://www.photonpay.com/hk/?utm_source=amz123&utm_medium=partner&utm_campaign=tools&utm_term=20250110",
        category: "收款支付",
        tags: ["全球支付", "数字金融", "基础设施", "专业服务"]
    },
    {
        name: "亚马逊卖家钱包",
        description: "灵活收付，自由掌控，0费率以美元支付美国当地供应商，付款无需换汇",
        iconUrl: "https://img.amz123.com/image_cloud/202307/1689038176063_%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%8D%96%E5%AE%B6%E9%92%B1%E5%8C%85.png",
        url: "https://sellercentral.amazon.com/sellerwallet?ref=amz123us_sw_3pp_all_pgp",
        category: "收款支付",
        tags: ["亚马逊官方", "0费率", "美元支付", "供应商付款"]
    },
    {
        name: "iPayLinks艾贝盈",
        description: "新客注册享好礼，多平台福利大放送，多、快、好、省！",
        iconUrl: "https://img.amz123.com/image_cloud/202305/1683680488714_ipaylink%E5%9B%BE%E6%A0%87.png",
        url: "https://www.ipaylinks.com/?recommendCode=10173",
        category: "收款支付",
        tags: ["新客福利", "多平台", "快速便捷", "优惠活动"]
    },
    {
        name: "空中云汇注册教程",
        description: "10万美金以内收款提现0费率，限时优惠！",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220930/633650a0df6c4.png/icon52",
        url: "https://www.amz123.com/t/HKJjH6S0",
        category: "收款支付",
        tags: ["注册教程", "0费率", "限时优惠", "教程指导"]
    },
    {
        name: "Worldfirst注册教程",
        description: "蚂蚁旗下品牌，安全合规，费率0到0.3%，无汇损",
        iconUrl: "https://img.amz123.com/upload/index_icon/20221012/634616a49fe44.png/icon52",
        url: "https://www.amz123.com/t/z17GTx69",
        category: "收款支付",
        tags: ["注册教程", "蚂蚁旗下", "安全合规", "低费率"]
    },
    {
        name: "连连支付",
        description: "AMZ收款0～0.4%，绑店和入账都可享免费提现额度，换汇返现最高5000元，更多收单、贷款免额等你领取",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf39ca3f.jpg/icon52",
        url: "https://global.lianlianpay.com/register?invitecode=3C20HW",
        category: "收款支付",
        tags: ["AMZ收款", "免费提现", "换汇返现", "收单贷款"]
    },
    {
        name: "Payoneer派安盈",
        description: "本地账号免汇损，多币种转换，灵活银行提现，采购费随心付",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220308/6227204bf1078.png/icon52",
        url: "https://tracking.payoneer.com/SH356",
        category: "收款支付",
        tags: ["本地账号", "免汇损", "多币种", "灵活提现"]
    },
    // 选品分析
    {
        name: "卖家精灵",
        description: "覆盖多维度选品视角，挖掘隐藏机会市场",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202412/1735175268947245_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20241226090713.jpg",
        url: "https://www.sellersprite.com/?utm_source=amz123&utm_medium=xuanpinfenxi",
        category: "选品分析",
        tags: ["多维度选品", "机会市场", "数据分析", "专业工具"]
    },
    {
        name: "美亚销售榜",
        description: "美国亚马逊销量排行榜",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf6351b1.jpg/icon52",
        url: "https://www.amazon.com/gp/bestsellers",
        category: "选品分析",
        tags: ["美国亚马逊", "销量排行", "热销产品", "市场趋势"]
    },
    {
        name: "美亚新品榜",
        description: "美国亚马逊新品排行榜",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf60da64.jpg/icon52",
        url: "https://www.amazon.com/gp/new-releases",
        category: "选品分析",
        tags: ["美国亚马逊", "新品排行", "最新趋势", "创新产品"]
    },
    {
        name: "美亚飙升榜",
        description: "美国亚马逊销售飙升榜",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf5bfae6.jpg/icon52",
        url: "https://www.amazon.com/gp/movers-and-shakers",
        category: "选品分析",
        tags: ["美国亚马逊", "飙升榜", "快速增长", "热门趋势"]
    },
    {
        name: "Temu Bestsellers",
        description: "每日更新Temu最受欢迎榜单",
        iconUrl: "https://img.amz123.com/image_cloud/202302/1676868321659_temuapp.png",
        url: "https://www.temu.com/channel/best-sellers.html",
        category: "选品分析",
        tags: ["Temu", "最受欢迎", "每日更新", "热销榜单"]
    },
    {
        name: "谷歌趋势",
        description: "查看关键词在Google的搜索次数及变化趋势",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f88065f65.png/icon52",
        url: "https://trends.google.com/",
        category: "选品分析",
        tags: ["谷歌趋势", "关键词搜索", "趋势分析", "市场洞察"]
    },
    {
        name: "英亚销售榜",
        description: "英国亚马逊销量排行榜",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf5715a3.jpg/icon52",
        url: "https://www.amazon.co.uk/gp/bestsellers",
        category: "选品分析",
        tags: ["英国亚马逊", "销量排行", "欧洲市场", "热销产品"]
    },
    {
        name: "德亚销售榜",
        description: "德国亚马逊销量排行榜",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf59c01c.jpg/icon52",
        url: "https://www.amazon.de/gp/bestsellers",
        category: "选品分析",
        tags: ["德国亚马逊", "销量排行", "欧洲市场", "德国热销"]
    },
    {
        name: "法国销售榜",
        description: "法国亚马逊销量排行榜",
        iconUrl: "https://img.amz123.com/image_cloud/202212/1669884101829_%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%B3%95%E5%9B%BD.jpg",
        url: "https://www.amazon.fr/bestsellers",
        category: "选品分析",
        tags: ["法国亚马逊", "销量排行", "欧洲市场", "法国热销"]
    },
    {
        name: "日亚销售榜",
        description: "日本亚马逊销量排行榜 （需翻墙）",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f87fd558a.png/icon52",
        url: "https://www.amazon.co.jp/gp/bestsellers",
        category: "选品分析",
        tags: ["日本亚马逊", "销量排行", "亚洲市场", "日本热销"]
    },
    {
        name: "加拿大销售榜",
        description: "加拿大亚马逊销量排行榜",
        iconUrl: "https://img.amz123.com/upload/202310/1698219118490689_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231025152951.png",
        url: "https://www.amazon.ca/gp/bestsellers",
        category: "选品分析",
        tags: ["加拿大亚马逊", "销量排行", "北美市场", "加拿大热销"]
    },
    {
        name: "Walmart Bestsellers",
        description: "沃尔玛平台最受欢迎产品榜单",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202401/1706087048146972_walmart.ca.png",
        url: "https://www.walmart.com/shop/best-sellers",
        category: "选品分析",
        tags: ["沃尔玛", "最受欢迎", "零售平台", "热销榜单"]
    },
    {
        name: "谷歌商机洞察",
        description: "查看产品品类在全球每一个国家的具体市场需求和容量",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201226/5fe7484192789.png/icon52",
        url: "https://marketfinder.thinkwithgoogle.com/intl/en_us/",
        category: "选品分析",
        tags: ["谷歌商机", "全球市场", "需求分析", "市场容量"]
    },
    {
        name: "Most Wished For",
        description: "亚马逊买家愿望清单",
        iconUrl: "https://img.amz123.com/upload/index_icon/20221026/6358ac531a11c.jpeg/icon52",
        url: "https://www.amazon.com/gp/most-wished-for/",
        category: "选品分析",
        tags: ["亚马逊", "愿望清单", "买家需求", "潜在市场"]
    },
    {
        name: "Today's Deals",
        description: "美国亚马逊每日促销",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220930/63364df421bf6.jpeg/icon52",
        url: "https://www.amazon.com/gp/goldbox",
        category: "选品分析",
        tags: ["亚马逊", "每日促销", "折扣商品", "促销趋势"]
    },
    {
        name: "Ebay Daily",
        description: "Ebay 平台每日促销商品",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220930/63364fbfbdd7a.jpeg/icon52",
        url: "http://www.ebay.com/rpp/globaldeals",
        category: "选品分析",
        tags: ["Ebay", "每日促销", "全球交易", "促销商品"]
    },
    {
        name: "Indiegogo",
        description: "美国第二大的众筹网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220119/61e7b12f5fb2a.png/icon52",
        url: "https://www.indiegogo.com/",
        category: "选品分析",
        tags: ["众筹平台", "创新产品", "市场验证", "新兴趋势"]
    },
    {
        name: "Kickstarter",
        description: "美国最大的众筹网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf4969c1.jpg/icon52",
        url: "https://www.kickstarter.com/",
        category: "选品分析",
        tags: ["众筹平台", "创新产品", "市场验证", "创意项目"]
    },
    // 免费图库
    {
        name: "Pexels",
        description: "提供高清尺寸且品质优良的免费照片网站（无版权）",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875645Pexels.png",
        url: "https://www.pexels.com",
        category: "免费图库",
        tags: ["高清照片", "无版权", "免费商用", "品质优良"]
    },
    {
        name: "Pixabay",
        description: "百万张免费高清图片，高质量可商用（无版权）",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875645Pixabay.png",
        url: "https://pixabay.com/",
        category: "免费图库",
        tags: ["百万图片", "高清", "可商用", "无版权"]
    },
    {
        name: "Unsplash",
        description: "免费高质量照片下载网站，可商用，每日更新十张图（无版权）",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875645Unsplash.png",
        url: "https://unsplash.com/",
        category: "免费图库",
        tags: ["高质量", "每日更新", "可商用", "无版权"]
    },
    {
        name: "SplitShire",
        description: "分类精确，提供1000+张免费可商用的图片素材",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875645SplitShire.png",
        url: "https://www.splitshire.com/",
        category: "免费图库",
        tags: ["分类精确", "1000+张", "可商用", "图片素材"]
    },
    {
        name: "StockSnap",
        description: "号称第一的免费精美图片分享站，可商用，完全免费",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875645StockSnap.png",
        url: "https://stocksnap.io/",
        category: "免费图库",
        tags: ["精美图片", "可商用", "完全免费", "分享站"]
    },
    {
        name: "高图网",
        description: "一个免费无版权高清图片下载平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646%E9%AB%98%E5%9B%BE%E7%BD%91.png",
        url: "http://www.gaoimg.com/",
        category: "免费图库",
        tags: ["免费", "无版权", "高清", "下载平台"]
    },
    {
        name: "泼辣有图",
        description: "泼辣修图出的开源摄影网站，全部是无版权的摄影作品，所有图片可以用于任何用途。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646%E6%B3%BC%E8%BE%A3%E6%9C%89%E5%9B%BE.png",
        url: "http://www.polayoutu.com/collections",
        category: "免费图库",
        tags: ["开源摄影", "无版权", "任何用途", "泼辣修图"]
    },
    {
        name: "Wallhaven",
        description: "国外高清的壁纸网站分享平台，在这里可以发现很多高质量的素材，会有很多惊喜，免版权。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646Wallhaven.png",
        url: "https://wallhaven.cc/",
        category: "免费图库",
        tags: ["高清壁纸", "高质量", "免版权", "分享平台"]
    },
    {
        name: "Visual Hunt",
        description: "国外高清照片共享平台，100％免费高品质照片",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646Visual%20Hunt.png",
        url: "https://visualhunt.com/",
        category: "免费图库",
        tags: ["高清照片", "100%免费", "高品质", "共享平台"]
    },
    {
        name: "Foter",
        description: "3.35亿张免费图片素材，优质免版税库存照片。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646Foter.png",
        url: "https://foter.com/",
        category: "免费图库",
        tags: ["3.35亿张", "免版税", "库存照片", "优质"]
    },
    {
        name: "Kaboompics",
        description: "支持分类和颜色筛选，图片质量非常高",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646Kaboompics.png",
        url: "https://kaboompics.com/",
        category: "免费图库",
        tags: ["分类筛选", "颜色筛选", "高质量", "专业"]
    },
    {
        name: "FreeImages",
        description: "拥有超过300,000张免费图片，快速找到完美的免版税图片。 下载免费的，高质量的图像，每天或商业用途。 无需购买。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646FreeImages.png",
        url: "https://cn.freeimages.com/",
        category: "免费图库",
        tags: ["30万张", "免版税", "商业用途", "无需购买"]
    },
    {
        name: "Foodiesfeed",
        description: "食物图片网站，可免费下载免费用于商业用途",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646Foodiesfeed.png",
        url: "https://www.foodiesfeed.com/",
        category: "免费图库",
        tags: ["食物图片", "免费下载", "商业用途", "专业摄影"]
    },
    {
        name: "Picjumbo",
        description: "个人和商业用途的免费照片。 高分辨率图像，无需归属。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646Picjumbo.png",
        url: "https://picjumbo.com/",
        category: "免费图库",
        tags: ["个人商用", "高分辨率", "无需归属", "免费"]
    },
    {
        name: "ISO Republic",
        description: "为创意专业人士提供CC0照片。所有图像均可免费用于个人和商业用途。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875646ISO%20Republic.png",
        url: "https://isorepublic.com/",
        category: "免费图库",
        tags: ["CC0照片", "创意专业", "个人商用", "免费"]
    },
    {
        name: "Burst",
        description: "由Shopify提供支持的免费图片平台。免费的，可用于商业用途.",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647Burst.png",
        url: "https://burst.shopify.com/",
        category: "免费图库",
        tags: ["Shopify", "免费平台", "商业用途", "电商"]
    },
    {
        name: "PNG img",
        description: "推荐！最知名的PNG优质素材库。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647PNG%20img.png",
        url: "http://pngimg.com/",
        category: "免费图库",
        tags: ["PNG素材", "优质", "知名", "推荐"]
    },
    {
        name: "Pngtree",
        description: "数以百万计的PNG图像，背景和矢量图片均可免费下载。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647Pngtree.png",
        url: "https://pngtree.com/",
        category: "免费图库",
        tags: ["百万PNG", "背景", "矢量图", "免费下载"]
    },
    {
        name: "Barn Images",
        description: "由专业摄影师拍摄，图片质量非常高，均可免费下载，可商用",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647Barn%20Images.png",
        url: "https://barnimages.com/free-images/",
        category: "免费图库",
        tags: ["专业摄影", "高质量", "免费下载", "可商用"]
    },
    {
        name: "Gratisography",
        description: "网站每周都会上传新的免费高清大图，适合个人与商用",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647Gratisography.png",
        url: "https://gratisography.com/",
        category: "免费图库",
        tags: ["每周更新", "高清大图", "个人商用", "免费"]
    },
    {
        name: "Moose",
        description: "可以免费商用，但是要标注来源",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647Moose.png",
        url: "https://photos.icons8.cn/",
        category: "免费图库",
        tags: ["免费商用", "标注来源", "Icons8", "专业"]
    },
    {
        name: "Magdeleine",
        description: "精选的免费照片，点燃你的灵感火花。可以通过颜色检索。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875647Magdeleine.png",
        url: "https://magdeleine.co/browse/",
        category: "免费图库",
        tags: ["精选照片", "灵感", "颜色检索", "免费"]
    },
    {
        name: "Wunderstock",
        description: "人物自然风光建筑美景！图片质量高，可花点时间另存。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875648Wunderstock.png",
        url: "https://wunderstock.com/",
        category: "免费图库",
        tags: ["人物风光", "建筑美景", "高质量", "另存"]
    },
    {
        name: "1001FreeDownloads",
        description: "免费下载矢量、照片、图标、字体、壁纸等等。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/16788756481001FreeDownloads.png",
        url: "https://www.1001freedownloads.com/",
        category: "免费图库",
        tags: ["矢量", "照片", "图标", "字体", "壁纸"]
    },
    {
        name: "DesignersPics",
        description: "免费的高清照片供您个人和商业使用",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875606DesignersPics.png",
        url: "http://www.designerspics.com/",
        category: "免费图库",
        tags: ["高清照片", "个人商用", "设计师", "免费"]
    },
    {
        name: "Streetwill",
        description: "免费高分辨率照片",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875607Streetwill.png",
        url: "http://streetwill.co/",
        category: "免费图库",
        tags: ["高分辨率", "免费", "照片", "专业"]
    },
    {
        name: "365PSD",
        description: "免费的PSD、图形和矢量文件",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875613365PSD.png",
        url: "https://cn.365psd.com/",
        category: "免费图库",
        tags: ["PSD", "图形", "矢量文件", "免费"]
    },
    // 灵感创意
    {
        name: "花瓣",
        description: "采集你喜欢的美好事物，发现新知，启发设计灵感",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650%E8%8A%B1%E7%93%A3.png",
        url: "https://huaban.com",
        category: "灵感创意",
        tags: ["采集", "美好事物", "设计灵感", "发现新知"]
    },
    {
        name: "Pinterest",
        description: "全球最大的创意灵感图片分享网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650Pinterest.png",
        url: "https://www.pinterest.com",
        category: "灵感创意",
        tags: ["全球最大", "创意灵感", "图片分享", "设计"]
    },
    {
        name: "Dribbble",
        description: "国际知名设计站点！资深设计师必备",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650Dribbble.png",
        url: "https://dribbble.com/",
        category: "灵感创意",
        tags: ["国际知名", "设计站点", "资深设计师", "必备"]
    },
    {
        name: "Behance",
        description: "全球领先的创意设计类聚合平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875650Behance.png",
        url: "https://www.behance.net/",
        category: "灵感创意",
        tags: ["全球领先", "创意设计", "聚合平台", "Adobe"]
    },
    {
        name: "堆糖",
        description: "美图壁纸兴趣社区",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651%E5%A0%86%E7%B3%96.png",
        url: "https://www.duitang.com/",
        category: "灵感创意",
        tags: ["美图", "壁纸", "兴趣社区", "图片分享"]
    },
    {
        name: "站酷",
        description: "综合性设计分享网站，原创设计交流平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651%E7%AB%99%E9%85%B7.png",
        url: "https://www.zcool.com.cn/",
        category: "灵感创意",
        tags: ["设计分享", "原创设计", "交流平台", "综合性"]
    },
    {
        name: "全画作",
        description: "强烈推荐！几十万张超高分辨率艺术作品欣赏",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651%E5%85%A8%E7%94%BB%E4%BD%9C.png",
        url: "https://www.allhistory.com/painting",
        category: "灵感创意",
        tags: ["艺术作品", "超高分辨率", "几十万张", "强烈推荐"]
    },
    {
        name: "UI中国",
        description: "中国最专业的UI设计交流平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651UI%E4%B8%AD%E5%9B%BD.png",
        url: "https://www.ui.cn/list.html",
        category: "灵感创意",
        tags: ["UI设计", "最专业", "交流平台", "中国"]
    },
    {
        name: "优创意",
        description: "优创意ycyUi设计师创意平台,汇聚全球更多原创设计",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651%E4%BC%98%E5%88%9B%E6%84%8F.png",
        url: "https://www.ycyui.com/",
        category: "灵感创意",
        tags: ["设计师", "创意平台", "原创设计", "全球"]
    },
    {
        name: "DOOOOR",
        description: "国外设计欣赏网站，全球设计行业精品收录与素材分享",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651DOOOOR.png",
        url: "https://www.doooor.com/",
        category: "灵感创意",
        tags: ["国外设计", "设计欣赏", "精品收录", "素材分享"]
    },
    {
        name: "Color Hunt",
        description: "一个免费开放的色彩灵感平台，拥有数千种时尚的手工挑选调色板",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651Color%20Hunt.png",
        url: "https://colorhunt.co/",
        category: "灵感创意",
        tags: ["色彩灵感", "调色板", "免费开放", "时尚"]
    },
    {
        name: "纵长的设计画廊",
        description: "非营利性的日本网页设计门户网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875609%E7%BA%B5%E9%95%BF%E7%9A%84%E8%AE%BE%E8%AE%A1%E7%94%BB%E5%BB%8A.png",
        url: "http://muuuuu.org/",
        category: "灵感创意",
        tags: ["日本", "网页设计", "门户网站", "非营利"]
    },
    {
        name: "Pttrns",
        description: "设计模式、资源和灵感的最佳集合",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875610Pttrns.png",
        url: "https://pttrns.com",
        category: "灵感创意",
        tags: ["设计模式", "资源", "灵感", "最佳集合"]
    },
    {
        name: "Reeoo",
        description: "网页设计、app设计灵感库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875610Reeoo.png",
        url: "http://reeoo.com/",
        category: "灵感创意",
        tags: ["网页设计", "app设计", "灵感库", "设计参考"]
    },
    {
        name: "UI Movement",
        description: "每天更新用户界面设计灵感",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875611UI%20Movement.png",
        url: "https://uimovement.com/",
        category: "灵感创意",
        tags: ["每天更新", "用户界面", "设计灵感", "UI"]
    },
    {
        name: "Niklas Alm",
        description: "优秀的创意合成图片与视频社区",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875611niklasalm.png",
        url: "https://www.niklasalm.se/",
        category: "灵感创意",
        tags: ["创意合成", "图片", "视频", "社区"]
    },
    {
        name: "UI8",
        description: "用户界面设计资源工具包，线框，图标",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875611UI8.png",
        url: "https://ui8.net/",
        category: "灵感创意",
        tags: ["用户界面", "设计资源", "工具包", "线框", "图标"]
    },
    {
        name: "CollectUI",
        description: "UI设计必备！100多个分类，不用发愁没灵感了",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281581CollectUI.png",
        url: "https://collectui.com/",
        category: "灵感创意",
        tags: ["UI设计", "100多个分类", "必备", "灵感"]
    },
    {
        name: "Pixeden",
        description: "赞！免费优质界面设计源文件及有网站模板",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281581Pixeden.png",
        url: "https://www.pixeden.com/",
        category: "灵感创意",
        tags: ["免费", "优质", "界面设计", "源文件", "网站模板"]
    },
    {
        name: "Site Inspire",
        description: "致力于分享推荐优秀网页及交互设计案例",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281581Site%20Inspire.png",
        url: "https://www.siteinspire.com/",
        category: "灵感创意",
        tags: ["网页设计", "交互设计", "设计案例", "分享推荐"]
    },
    {
        name: "Designmodo",
        description: "所有高质量UI工具包都在这里可以找到，部分免费下载",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281581Designmodo.png",
        url: "https://designmodo.com/",
        category: "灵感创意",
        tags: ["高质量", "UI工具包", "免费下载", "设计资源"]
    },
    {
        name: "Designspiration",
        description: "提供设计灵感、插画摄影、时尚以及艺术相关的一切",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582Designspiration.png",
        url: "https://www.designspiration.com/",
        category: "灵感创意",
        tags: ["设计灵感", "插画摄影", "时尚", "艺术"]
    },
    {
        name: "Product Hunt",
        description: "每天发现有趣的创新产品，离硅谷最近的眼睛",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582Product%20Hunt.png",
        url: "https://www.producthunt.com/",
        category: "灵感创意",
        tags: ["创新产品", "硅谷", "每天发现", "有趣"]
    },
    {
        name: "幻觉",
        description: "展示最惊人的创作，涵盖艺术、设计、摄影和视频",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582%E5%B9%BB%E8%A7%89.png",
        url: "https://scene360.com/",
        category: "灵感创意",
        tags: ["惊人创作", "艺术", "设计", "摄影", "视频"]
    },
    {
        name: "BOOOOOOOM",
        description: "发人深省的创意图片，博客设计简约但内容丰富",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582BOOOOOOOM.png",
        url: "https://www.booooooom.com/",
        category: "灵感创意",
        tags: ["创意图片", "发人深省", "简约设计", "内容丰富"]
    },
    {
        name: "灵感网络",
        description: "推荐！聚合来自世界各地的创意人才，每天汲取灵感",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582%E7%81%B5%E6%84%9F%E7%BD%91%E7%BB%9C.png",
        url: "https://theinspirationgrid.com/",
        category: "灵感创意",
        tags: ["推荐", "创意人才", "世界各地", "每天汲取灵感"]
    },
    {
        name: "Lapa网页灵感图库",
        description: "设计网站前，推荐来这里找灵感，有贴心全屏预览图",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582Lapa%E7%BD%91%E9%A1%B5%E7%81%B5%E6%84%9F%E5%9B%BE%E5%BA%93.png",
        url: "https://www.lapa.ninja/",
        category: "灵感创意",
        tags: ["网页灵感", "设计网站", "全屏预览", "推荐"]
    },
    {
        name: "迷你单页狂热者",
        description: "流行的网页趋势！不可不知的迷你站点大全",
        iconUrl: "https://img.amz123.com/upload/diy_page/ui/202303/1678281582%E8%BF%B7%E4%BD%A0%E5%8D%95%E9%A1%B5%E7%8B%82%E7%83%AD%E8%80%85.png",
        url: "https://www.onepagemania.com/",
        category: "灵感创意",
        tags: ["网页趋势", "迷你站点", "单页设计", "流行"]
    },
    // 漫画插画
    {
        name: "涂鸦王国",
        description: "中国优秀的插画师、漫画家、画家的聚集地",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652%E6%B6%82%E9%B8%A6%E7%8E%8B%E5%9B%BD.jpeg",
        url: "https://www.gracg.com/",
        category: "漫画插画",
        tags: ["插画师", "漫画家", "画家", "聚集地"]
    },
    {
        name: "插画艺术家",
        description: "一个历史悠久的提供可靠插画家及插画资源的平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652%E6%8F%92%E7%94%BB%E8%89%BA%E6%9C%AF%E5%AE%B6.png",
        url: "https://www.illustrationx.com/cn",
        category: "漫画插画",
        tags: ["历史悠久", "插画家", "插画资源", "可靠平台"]
    },
    {
        name: "优优网",
        description: "插画绘画，设计教程自学网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652%E4%BC%98%E8%B4%A8%E6%95%99%E7%A8%8B.png",
        url: "https://uiiiuiii.com/inspirations/illustrations",
        category: "漫画插画",
        tags: ["插画绘画", "设计教程", "自学网站", "教程"]
    },
    {
        name: "插画中国",
        description: "中国职业插画师、漫画家的主要聚集地，原创CG插画与手绘插画作品展",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652%E6%8F%92%E7%94%BB%E4%B8%AD%E5%9B%BD.png",
        url: "http://www.chahua.org/drawn/new.php?hid=3",
        category: "漫画插画",
        tags: ["职业插画师", "漫画家", "CG插画", "手绘插画"]
    },
    {
        name: "Artand",
        description: "一家沉浸式重度垂直线上艺术品社交电商平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652Artand.png",
        url: "https://artand.cn/",
        category: "漫画插画",
        tags: ["艺术品", "社交电商", "垂直平台", "沉浸式"]
    },
    {
        name: "VEER",
        description: "Veer图库通过插画栏目分享丰富的插画图片大全，内容涵盖：插画手绘,插画设计,插图图片等;需求正版商业插画下载网站就到Veer图库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652VEER.png",
        url: "https://www.veer.com/illustration/",
        category: "漫画插画",
        tags: ["插画图片", "插画手绘", "插画设计", "正版商业"]
    },
    {
        name: "绘萌芽",
        description: "专业的插画师、转手绘/插画爱好者的聚集地",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652%E7%BB%98%E8%90%8C%E8%8A%BD.png",
        url: "https://www.huimengya.com/",
        category: "漫画插画",
        tags: ["专业插画师", "转手绘", "插画爱好者", "聚集地"]
    },
    {
        name: "Baubauhaus",
        description: "提供设计灵感、插画摄影、时尚以及艺术相关的一切",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875653Baubauhaus.png",
        url: "http://www.baubauhaus.com/",
        category: "漫画插画",
        tags: ["设计灵感", "插画摄影", "时尚", "艺术"]
    },
    {
        name: "DeviantART",
        description: "每天发表约20万个新作品！国际化在线艺术社区",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875653deviantART.png",
        url: "https://www.deviantart.com/",
        category: "漫画插画",
        tags: ["20万个作品", "国际化", "在线艺术", "社区"]
    },
    {
        name: "ArtStation",
        description: "强烈推荐！一个收录世界顶级插画作品的社区",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875653ArtStation.png",
        url: "https://www.artstation.com/",
        category: "漫画插画",
        tags: ["强烈推荐", "世界顶级", "插画作品", "社区"]
    },
    {
        name: "插画世界",
        description: "一个聚集世界各地优秀插画家及作品的网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875653%E6%8F%92%E7%94%BB%E4%B8%96%E7%95%8C.png",
        url: "https://www.n8w.com/",
        category: "漫画插画",
        tags: ["世界各地", "优秀插画家", "作品", "聚集"]
    },
    {
        name: "Folioart",
        description: "推荐！英国插画师作品及灵感展示网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875653Folioart.png",
        url: "https://folioart.co.uk/",
        category: "漫画插画",
        tags: ["推荐", "英国插画师", "作品展示", "灵感"]
    },
    {
        name: "unDraw",
        description: "非常漂亮的免费插图网站，为您能想象和创建的每个项目提供开源插图。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875653unDraw.png",
        url: "https://undraw.co/illustrations",
        category: "漫画插画",
        tags: ["免费插图", "开源", "项目", "漂亮"]
    },
    {
        name: "Pixiv插画世界",
        description: "一个分享由p站(pixiv)的插画图片、游戏原画等作品，并提供自由交流的平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875597%E6%8F%92%E7%94%BB%E4%B8%96%E7%95%8C.jpg",
        url: "https://www.vilipix.com/",
        category: "漫画插画",
        tags: ["Pixiv", "插画图片", "游戏原画", "自由交流"]
    },
    {
        name: "Pixiv",
        description: "插图、漫画和小说艺术为中心的社交网络服务里的虚拟社区",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875620pixiv.png",
        url: "https://www.pixiv.net/",
        category: "漫画插画",
        tags: ["插图", "漫画", "小说艺术", "社交网络"]
    },
    {
        name: "CoolVibe",
        description: "数字艺术画廊，特色艺术和壁纸",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875621CoolVibe.png",
        url: "http://coolvibe.com/",
        category: "漫画插画",
        tags: ["数字艺术", "画廊", "特色艺术", "壁纸"]
    },
    {
        name: "OpenPeeps",
        description: "一个手绘插图库，用于创建人物场景",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875621OpenPeeps.png",
        url: "https://www.openpeeps.com/",
        category: "漫画插画",
        tags: ["手绘插图", "人物场景", "插图库", "创建"]
    },
    {
        name: "OpenDoodles",
        description: "免费的开源插画集可以任意复制共享",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875621OpenDoodles.png",
        url: "https://www.opendoodles.com/",
        category: "漫画插画",
        tags: ["免费", "开源", "插画集", "复制共享"]
    },
    {
        name: "DrawKit",
        description: "漂亮的矢量插图",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875621DrawKit.png",
        url: "https://www.drawkit.io/",
        category: "漫画插画",
        tags: ["矢量插图", "漂亮", "设计"]
    },
    {
        name: "Leave a Story",
        description: "用漫画讲述故事交换",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875621Leave%20a%20Story.png",
        url: "https://leaveastory.com/",
        category: "漫画插画",
        tags: ["漫画", "故事", "交换", "讲述"]
    },
    {
        name: "Poolga",
        description: "优秀插画家创作的手绘风格壁纸",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875621Poolga.png",
        url: "http://poolga.com/",
        category: "漫画插画",
        tags: ["插画家", "手绘风格", "壁纸", "创作"]
    },
    {
        name: "ILLUSTRATION AGE",
        description: "插图画家的终极资源",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622ILLUSTRATION%20AGE.png",
        url: "https://illustrationage.com/",
        category: "漫画插画",
        tags: ["插画画家", "终极资源", "专业"]
    },
    {
        name: "Petalica paint",
        description: "线稿在线自动上色服务",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622Petalica%20paint.png",
        url: "https://petalica-paint.pixiv.dev/index_zh.html",
        category: "漫画插画",
        tags: ["线稿", "自动上色", "在线服务", "AI"]
    },
    {
        name: "VIZ",
        description: "漫画、动漫和全球娱乐界的佼佼者",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622VIZ.png",
        url: "https://www.viz.com/",
        category: "漫画插画",
        tags: ["漫画", "动漫", "全球娱乐", "佼佼者"]
    },
    {
        name: "Donna Adi",
        description: "艺术与时尚结合的作品",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622Donna%20Adi.png",
        url: "https://donnadi.com/",
        category: "漫画插画",
        tags: ["艺术", "时尚", "结合", "作品"]
    },
    {
        name: "builder",
        description: "自定义矢量艺术插图，免费下载",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622builder.png",
        url: "https://app.itg.digital/",
        category: "漫画插画",
        tags: ["自定义", "矢量艺术", "免费下载", "插图"]
    },
    {
        name: "woobro",
        description: "用于商业用途的免费矢量图像",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622woobro.png",
        url: "https://woobro.design/",
        category: "漫画插画",
        tags: ["商业用途", "免费", "矢量图像", "设计"]
    },
    {
        name: "AbsurdDesign",
        description: "免费的超现实主义插图和矢量艺术",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875622AbsurdDesign.png",
        url: "https://absurd.design/",
        category: "漫画插画",
        tags: ["免费", "超现实主义", "插图", "矢量艺术"]
    },
    {
        name: "IRADesign",
        description: "创建自己的插图",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623IRADesign.png",
        url: "https://iradesign.io/",
        category: "漫画插画",
        tags: ["创建", "自己的插图", "自定义", "设计"]
    },
    {
        name: "Fresh Folk",
        description: "人物和物体的插图库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623Fresh%20Folk.png",
        url: "https://fresh-folk.com/",
        category: "漫画插画",
        tags: ["人物", "物体", "插图库", "设计"]
    },
    {
        name: "ManyPixels",
        description: "致力于使设计更出色",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623ManyPixels.png",
        url: "https://www.manypixels.co/gallery/",
        category: "漫画插画",
        tags: ["设计", "更出色", "专业", "服务"]
    },
    {
        name: "Delesign",
        description: "获取很酷的设计",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623Delesign.png",
        url: "https://delesign.com/free-designs/graphics",
        category: "漫画插画",
        tags: ["很酷", "设计", "获取", "创意"]
    },
    {
        name: "Mark Conlan",
        description: "一个独特的艺术家，异想天开的插画风格既独特又俏皮",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623Mark%20Conlan.png",
        url: "https://markconlan.com/",
        category: "漫画插画",
        tags: ["独特艺术家", "异想天开", "插画风格", "俏皮"]
    },
    {
        name: "Agent002",
        description: "精选幽默、时尚和新的插画趋势",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623Agent002.png",
        url: "https://www.agent002.com/",
        category: "漫画插画",
        tags: ["幽默", "时尚", "插画趋势", "精选"]
    },
    {
        name: "Get illustrations",
        description: "获取免费的插图矢量包，该库提供您需要的所有设计格式",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875623Get%20illustrations.png",
        url: "https://www.getillustrations.com/",
        category: "漫画插画",
        tags: ["免费", "插图矢量包", "设计格式", "库"]
    },
    {
        name: "Humaaans",
        description: "提供的可免费用于商业或个人的插画图库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875617Humaaans.png",
        url: "https://www.humaaans.com/",
        category: "漫画插画",
        tags: ["免费", "商业", "个人", "插画图库"]
    },
    // 配色方案
    {
        name: "ColorHunt",
        description: "一个免费开放的色彩灵感平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875583ColorHunt.png",
        url: "https://colorhunt.co/",
        category: "配色方案",
        tags: ["免费开放", "色彩灵感", "调色板", "配色"]
    },
    {
        name: "AdobeColor",
        description: "可以轻松地创建和发现可访问的独特颜色主题,将其用于所有创意项目中",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875583AdobeColor.png",
        url: "https://color.adobe.com/zh/",
        category: "配色方案",
        tags: ["Adobe", "颜色主题", "创意项目", "可访问"]
    },
    {
        name: "COLOURlovers",
        description: "专业配色站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875583COLOURlovers.png",
        url: "https://www.colourlovers.com/",
        category: "配色方案",
        tags: ["专业配色", "调色板", "色彩社区", "设计"]
    },
    {
        name: "Coolors",
        description: "一个在线生成数千种配色方案的调色板",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875583Coolors.jpg",
        url: "https://coolors.co/browser/latest/1",
        category: "配色方案",
        tags: ["在线生成", "数千种", "配色方案", "调色板"]
    },
    {
        name: "漂亮的渐变颜色",
        description: "渐变色，可转成CSS代码",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584%E6%BC%82%E4%BA%AE%E7%9A%84%E6%B8%90%E5%8F%98%E9%A2%9C%E8%89%B2.png",
        url: "https://uigradients.com/",
        category: "配色方案",
        tags: ["渐变色", "CSS代码", "网页设计", "背景"]
    },
    {
        name: "CssWinner",
        description: "网页色彩分类,CSS画廊",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584CssWinner.png",
        url: "https://www.csswinner.com/colorsearch/blue",
        category: "配色方案",
        tags: ["网页色彩", "分类", "CSS画廊", "设计参考"]
    },
    {
        name: "色彩搭配",
        description: "推荐色彩搭配方案",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584%E8%89%B2%E5%BD%A9%E6%90%AD%E9%85%8D.png",
        url: "https://colorhunt.co/",
        category: "配色方案",
        tags: ["色彩搭配", "推荐方案", "配色参考", "设计"]
    },
    {
        name: "DopelyColors",
        description: "超级在线调色板神器，一组渐变色彩配色方案",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584DopelyColors.png",
        url: "https://colorhunt.co/",
        category: "配色方案",
        tags: ["调色板神器", "渐变色彩", "配色方案", "在线工具"]
    },
    {
        name: "MaterialUI",
        description: "能快速选到配色方案",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584MaterialUI.png",
        url: "https://www.materialui.co/",
        category: "配色方案",
        tags: ["Material Design", "快速选择", "配色方案", "UI设计"]
    },
    {
        name: "ColorDrop",
        description: "在线颜色组合调试工具",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584ColorDrop.jpg",
        url: "https://colordrop.io/",
        category: "配色方案",
        tags: ["颜色组合", "调试工具", "在线", "配色测试"]
    },
    {
        name: "Fashion Trendsetter",
        description: "关注每年最流行的颜色搭配",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584FashionTrendsetter.png",
        url: "https://www.fashiontrendsetter.com/",
        category: "配色方案",
        tags: ["流行颜色", "时尚趋势", "颜色搭配", "年度流行"]
    },
    {
        name: "好看的背景渐变色",
        description: "一个集合180种免费的线性渐变网站，可在任何网站使用",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875584%E5%A5%BD%E7%9C%8B%E7%9A%84%E8%83%8C%E6%99%AF%E6%B8%90%E5%8F%98%E8%89%B2.png",
        url: "https://colorhunt.co/",
        category: "配色方案",
        tags: ["背景渐变", "180种", "免费", "线性渐变"]
    },
    {
        name: "ColorSpace",
        description: "输入主色调就可以生成漂亮的调色板",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875630ColorSpace.png",
        url: "https://mycolor.space",
        category: "配色方案",
        tags: ["主色调", "生成调色板", "自动配色", "智能配色"]
    },
    {
        name: "中国色",
        description: "提供各种中国的传统颜色的名称",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875630%E4%B8%AD%E5%9B%BD%E8%89%B2.png",
        url: "http://zhongguose.com/",
        category: "配色方案",
        tags: ["中国传统色", "颜色名称", "文化色彩", "传统配色"]
    },
    {
        name: "WebGradients",
        description: "线性渐变背景合集",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875630itemo.png",
        url: "https://webgradients.com/",
        category: "配色方案",
        tags: ["线性渐变", "背景合集", "网页设计", "渐变效果"]
    },
    {
        name: "flatuicolorpicker",
        description: "在线配色网站，拥有154种漂亮的配色方案",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875630flatuicolorpicker.png",
        url: "http://www.flatuicolorpicker.com/",
        category: "配色方案",
        tags: ["154种", "配色方案", "扁平化", "在线配色"]
    },
    {
        name: "uiGradients",
        description: "精心挑选漂亮的彩色渐变集合",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875631uiGradients.png",
        url: "https://uigradients.com/#Vanusa",
        category: "配色方案",
        tags: ["彩色渐变", "精心挑选", "UI设计", "渐变集合"]
    },
    {
        name: "ShapeFactory",
        description: "简单设计工具包含配色、渐变、logo、插画、滤镜等功能",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875631ShapeFactory.png",
        url: "https://shapefactory.co/",
        category: "配色方案",
        tags: ["设计工具", "配色", "渐变", "logo", "插画", "滤镜"]
    },
    {
        name: "Colors",
        description: "一个更好的网页调色板",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875631Colors.png",
        url: "http://clrs.cc/",
        category: "配色方案",
        tags: ["网页调色板", "更好", "配色工具", "网页设计"]
    },
    {
        name: "Colormind",
        description: "AI驱动的调色板生成器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875631Colormind.png",
        url: "http://colormind.io/",
        category: "配色方案",
        tags: ["AI驱动", "调色板生成器", "智能配色", "机器学习"]
    },
    {
        name: "Color Tool",
        description: "测量任何颜色组合的可访问性级别",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875632Color%20Tool.png",
        url: "https://material.io/resources/color/#!/",
        category: "配色方案",
        tags: ["可访问性", "颜色组合", "测量工具", "无障碍设计"]
    },
    {
        name: "MaterialPalette",
        description: "生成并下载您的调色板",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875632MaterialPalette.png",
        url: "https://www.materialpalette.com",
        category: "配色方案",
        tags: ["生成调色板", "下载", "Material Design", "配色工具"]
    },
    // 图标下载
    {
        name: "阿里图标库",
        description: "国内功能很强大且图标内容很丰富的矢量图标库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875585%E9%98%BF%E9%87%8C%E5%9B%BE%E6%A0%87%E5%BA%93.png",
        url: "http://www.iconfont.cn",
        category: "图标下载",
        tags: ["阿里", "矢量图标", "功能强大", "内容丰富"]
    },
    {
        name: "IconPark",
        description: "字节跳动旗下开源图标库收录超过1400个图标",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875627IconPark.png",
        url: "https://iconpark.bytedance.com/",
        category: "图标下载",
        tags: ["字节跳动", "开源", "1400个图标", "图标库"]
    },
    {
        name: "Flaticon",
        description: "提供SVG，PSD，PNG，EPS和图标字体,数千个免费图标",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875628Free%20icons.png",
        url: "https://www.flaticon.com/",
        category: "图标下载",
        tags: ["SVG", "PSD", "PNG", "EPS", "图标字体", "免费"]
    },
    {
        name: "Iconfinder",
        description: "矢量图标搜索引擎SVG、PNG、CSH和AI格式",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875585Iconfinder.png",
        url: "https://www.iconfinder.com/",
        category: "图标下载",
        tags: ["矢量图标", "搜索引擎", "SVG", "PNG", "CSH", "AI格式"]
    },
    {
        name: "iconmonstr",
        description: "巨大且不断增长的简单图标网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875628iconmonstr.png",
        url: "https://iconmonstr.com/",
        category: "图标下载",
        tags: ["巨大", "不断增长", "简单图标", "免费"]
    },
    {
        name: "Icon Archive",
        description: "超过735000个免费图标",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875628Icon%20Archive.png",
        url: "http://www.iconarchive.com/",
        category: "图标下载",
        tags: ["735000个", "免费图标", "海量", "图标库"]
    },
    {
        name: "IcoMoon",
        description: "图标字体和SVG图标集",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875628icomoon.png",
        url: "https://icomoon.io/",
        category: "图标下载",
        tags: ["图标字体", "SVG图标集", "字体图标", "自定义"]
    },
    {
        name: "FreeImages",
        description: "图标搜索引擎，可帮助您找到免费的图标",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875628findicons.png",
        url: "https://www.freeimages.com/icon?ref=findicons",
        category: "图标下载",
        tags: ["图标搜索", "免费图标", "搜索引擎", "帮助查找"]
    },
    {
        name: "DryIcons",
        description: "高质量的插画和矢量图标下载",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875628DryIcons.png",
        url: "https://dryicons.com/",
        category: "图标下载",
        tags: ["高质量", "插画", "矢量图标", "下载"]
    },
    {
        name: "iOS Icon",
        description: "精选IOS应用商店漂亮的图片设计",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875629iOS%20Icon.png",
        url: "https://www.iosicongallery.com",
        category: "图标下载",
        tags: ["iOS", "应用商店", "图片设计", "精选"]
    },
    {
        name: "Iconshock",
        description: "200万个图标和800个图标集",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875629Iconshock.png",
        url: "https://www.iconshock.com/",
        category: "图标下载",
        tags: ["200万个", "800个图标集", "海量", "专业"]
    },
    {
        name: "Streamline",
        description: "设计师的首选｜简化图标和插图",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875629Streamline.png",
        url: "https://www.streamlinehq.com/",
        category: "图标下载",
        tags: ["设计师首选", "简化图标", "插图", "专业"]
    },
    {
        name: "FontAwesome",
        description: "一套绝佳的图标字体库和CSS框架",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875586FontAwesome.jpg",
        url: "https://fontawesome.com/icons",
        category: "图标下载",
        tags: ["图标字体库", "CSS框架", "绝佳", "字体图标"]
    },
    {
        name: "BootstrapIcons",
        description: "专门为著名的前端开发UI框架Bootstrap的组件和文档定制开发的图标库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875586BootstrapIcons.png",
        url: "https://icons.getbootstrap.com/",
        category: "图标下载",
        tags: ["Bootstrap", "前端开发", "UI框架", "定制开发"]
    },
    {
        name: "Ailogo",
        description: "腾讯自研的智能设计平台，免费在线生成品牌logo、企业VI",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875586Ailogo.png",
        url: "https://ailogo.qq.com/guide/brandname",
        category: "图标下载",
        tags: ["腾讯", "智能设计", "品牌logo", "企业VI", "AI"]
    },
    {
        name: "Brandmark",
        description: "最先进的AI徽标设计工具",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875586Brandmark.png",
        url: "https://brandmark.io/",
        category: "图标下载",
        tags: ["AI", "徽标设计", "最先进", "智能工具"]
    },
    {
        name: "MaterialDesignIcons",
        description: "一个图标集合，能提供各种需求的格式、颜色和大小。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875587MaterialDesignIcons.png",
        url: "https://pictogrammers.com/library/mdi/",
        category: "图标下载",
        tags: ["Material Design", "图标集合", "多种格式", "颜色大小"]
    },
    {
        name: "Logopond",
        description: "高端LOGO集萃，全球著名的LOGO",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875651Logopond.png",
        url: "https://logopond.com/",
        category: "图标下载",
        tags: ["高端LOGO", "集萃", "全球著名", "设计灵感"]
    },
    {
        name: "Dryicons",
        description: "推荐！提供精度很高的图标、包含了一些不错的矢量icon",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652Dryicons.png",
        url: "https://dryicons.com/free-icons",
        category: "图标下载",
        tags: ["推荐", "高精度", "矢量icon", "免费"]
    },
    {
        name: "LogoMoose",
        description: "国外logo设计灵感画廊",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875652LogoMoose.png",
        url: "https://www.logomoose.com/featured/",
        category: "图标下载",
        tags: ["国外", "logo设计", "灵感画廊", "设计参考"]
    },
    {
        name: "Worldvectorlogo",
        description: "免费下载各种品牌logo",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875609Worldvectorlogo.png",
        url: "https://worldvectorlogo.com/",
        category: "图标下载",
        tags: ["免费下载", "品牌logo", "矢量", "商业"]
    },
    // 在线设计
    {
        name: "稿定设计",
        description: "30w高质量可商用模版，9000万海量版权资源",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875617%E7%A8%BF%E5%AE%9A%E8%AE%BE%E8%AE%A1.png",
        url: "https://www.gaoding.com/",
        category: "在线设计",
        tags: ["30万模版", "高质量", "可商用", "9000万资源"]
    },
    {
        name: "图怪兽",
        description: "一个极简的在线做图工具，搞定设计不求人",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875617%E5%9B%BE%E6%80%AA%E5%85%BD.png",
        url: "https://818ps.com",
        category: "在线设计",
        tags: ["极简", "在线做图", "设计工具", "不求人"]
    },
    {
        name: "创客贴",
        description: "海量设计模板，分分钟搞定美图设计",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875617%E5%88%9B%E5%AE%A2%E8%B4%B4.png",
        url: "https://www.chuangkit.com/",
        category: "在线设计",
        tags: ["海量模板", "美图设计", "分分钟", "设计工具"]
    },
    {
        name: "Fotor懒设计",
        description: "全球最受欢迎的平面设计工具和在线平面设计网站之一",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875618Fotor%E6%87%92%E8%AE%BE%E8%AE%A1.png",
        url: "https://www.fotor.com.cn",
        category: "在线设计",
        tags: ["全球最受欢迎", "平面设计", "在线设计", "设计工具"]
    },
    {
        name: "Ps智能参考",
        description: "可以快速生成参考线、构图、版式，帮你开启高效设计",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875618Ps%E6%99%BA%E8%83%BD%E5%8F%82%E8%80%83.png",
        url: "https://ck.pszhuli.com/",
        category: "在线设计",
        tags: ["智能参考", "参考线", "构图", "版式", "高效设计"]
    },
    {
        name: "Photopea",
        description: "免费还用的在线PS工具",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875618Photopea.png",
        url: "https://www.photopea.com/",
        category: "在线设计",
        tags: ["免费", "在线PS", "图像处理", "专业工具"]
    },
    {
        name: "即时设计",
        description: "专业级UI设计工具，可云端协作的Sketch",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875618%E5%8D%B3%E6%97%B6%E8%AE%BE%E8%AE%A1.png",
        url: "https://js.design/",
        category: "在线设计",
        tags: ["专业级", "UI设计", "云端协作", "Sketch"]
    },
    {
        name: "即时工具",
        description: "在线图片处理、音视频处理、图表生成工具箱",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875618%E5%8D%B3%E6%97%B6%E5%B7%A5%E5%85%B7.png",
        url: "https://www.67tool.com/",
        category: "在线设计",
        tags: ["图片处理", "音视频处理", "图表生成", "工具箱"]
    },
    {
        name: "Canva",
        description: "在线设计软件提供了海量的免设计模板",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875619Canva.png",
        url: "https://www.canva.cn/",
        category: "在线设计",
        tags: ["在线设计软件", "海量模板", "免设计", "设计工具"]
    },
    {
        name: "Clipping Magic",
        description: "在线智能抠图，可直接去除背景或者改变背景颜色",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875619Clipping%20Magic.png",
        url: "https://zh.clippingmagic.com/",
        category: "在线设计",
        tags: ["智能抠图", "去除背景", "改变背景", "在线工具"]
    },
    {
        name: "Remove",
        description: "在线抠图网站，5秒抠除背景",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875617Remove.png",
        url: "https://www.remove.bg/",
        category: "在线设计",
        tags: ["在线抠图", "5秒", "抠除背景", "快速"]
    },
    {
        name: "TinyPNG",
        description: "免费压缩PNG图像",
        iconUrl: "https://img.amz123.com/upload/diy_page/tk/202303/1678875619tinypng.png",
        url: "https://tinypng.com/",
        category: "在线设计",
        tags: ["免费压缩", "PNG图像", "图片优化", "在线工具"]
    },
    // 商标专利
    {
        name: "美国商标局",
        description: "美国专利商标局官方网站，提供商标注册和查询服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf163552.jpg/icon52",
        url: "https://www.uspto.gov/trademarks",
        category: "商标专利",
        tags: ["美国", "商标局", "商标注册", "商标查询"]
    },
    {
        name: "WIPO商标查询",
        description: "全球品牌数据库，世界知识产权组织商标查询平台",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717689750107858_wipo.png",
        url: "https://branddb.wipo.int/zh/",
        category: "商标专利",
        tags: ["WIPO", "全球品牌", "商标查询", "知识产权"]
    },
    {
        name: "欧洲商标局",
        description: "欧盟知识产权局，提供欧洲商标注册和查询服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf18d875.jpg/icon52",
        url: "https://www.euipo.europa.eu/en",
        category: "商标专利",
        tags: ["欧洲", "商标局", "欧盟", "商标注册"]
    },
    {
        name: "英国商标局",
        description: "英国知识产权局，提供商标和专利相关服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf1b5513.jpg/icon52",
        url: "https://www.gov.uk/government/organisations/intellectual-property-office",
        category: "商标专利",
        tags: ["英国", "商标局", "知识产权", "专利"]
    },
    {
        name: "日本商标局",
        description: "日本特许厅，提供商标和专利注册查询服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf1dfc2b.jpg/icon52",
        url: "http://www.jpo.go.jp/",
        category: "商标专利",
        tags: ["日本", "商标局", "特许厅", "专利查询"]
    },
    {
        name: "TradeMarkia",
        description: "全球商标搜索引擎，提供商标查询和注册服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf20d25c.jpg/icon52",
        url: "http://www.trademarkia.com/",
        category: "商标专利",
        tags: ["商标搜索", "全球", "商标注册", "搜索引擎"]
    },
    {
        name: "商标分类表",
        description: "商标注册分类表，帮助了解商标分类标准",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f87e653da.png/icon52",
        url: "https://www.amz123.com/shangbiao.htm",
        category: "商标专利",
        tags: ["商标分类", "分类表", "注册标准", "参考工具"]
    },
    {
        name: "美国专利局",
        description: "美国专利商标局专利查询系统，提供专利检索服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf13c8e8.jpg/icon52",
        url: "https://ppubs.uspto.gov/pubwebapp/static/pages/landing.html",
        category: "商标专利",
        tags: ["美国", "专利局", "专利查询", "专利检索"]
    },
    {
        name: "WIPO专利查询",
        description: "全球外观设计数据库，世界知识产权组织专利查询平台",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717689750107858_wipo.png",
        url: "https://designdb.wipo.int/designdb/en/index.jsp",
        category: "商标专利",
        tags: ["WIPO", "专利查询", "外观设计", "全球数据库"]
    },
    {
        name: "欧洲专利局",
        description: "欧洲专利局官方网站，提供专利检索和申请服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf108cf6.jpg/icon52",
        url: "https://www.epo.org/en/searching-for-patents",
        category: "商标专利",
        tags: ["欧洲", "专利局", "专利检索", "专利申请"]
    },
    {
        name: "英国专利局",
        description: "英国知识产权局专利查询系统",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1719643691942614_%E8%8B%B1%E5%9B%BD%E4%B8%93%E5%88%A9%E5%B1%80.png",
        url: "https://www.gov.uk/search-for-patent",
        category: "商标专利",
        tags: ["英国", "专利局", "专利查询", "知识产权"]
    },
    {
        name: "日本专利局",
        description: "日本特许厅专利信息平台J-PlatPat",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1719643967714036_J-PlatPat.png",
        url: "https://www.j-platpat.inpit.go.jp/",
        category: "商标专利",
        tags: ["日本", "专利局", "J-PlatPat", "专利信息"]
    },
    {
        name: "谷歌专利搜索",
        description: "Google专利搜索引擎，提供全球专利检索服务",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf0d6ee6.jpg/icon52",
        url: "https://patents.google.com/",
        category: "商标专利",
        tags: ["谷歌", "专利搜索", "全球检索", "搜索引擎"]
    },
    {
        name: "Espacenet专利搜索",
        description: "欧洲专利局全球专利数据库，提供专利检索服务",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717692770570279_espacenet.jpeg",
        url: "https://worldwide.espacenet.com/",
        category: "商标专利",
        tags: ["Espacenet", "专利搜索", "全球数据库", "欧洲专利局"]
    },
    {
        name: "专利检索教程",
        description: "专利检索方法和技巧教程，帮助掌握专利查询技能",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf07c3af.jpg/icon52",
        url: "https://www.amz123.com/t/ntm1xPQx",
        category: "商标专利",
        tags: ["专利检索", "教程", "方法技巧", "学习资源"]
    },
    {
        name: "商标检索教程",
        description: "商标检索方法和技巧教程，帮助掌握商标查询技能",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf0af379.jpg/icon52",
        url: "https://www.amz123.com/t/Vjmf4fIW",
        category: "商标专利",
        tags: ["商标检索", "教程", "方法技巧", "学习资源"]
    },
    {
        name: "世界知识产权组织",
        description: "联合国专门机构，负责知识产权事务的全球协调",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717689750107858_wipo.png",
        url: "https://www.wipo.int/portal/zh/",
        category: "商标专利",
        tags: ["WIPO", "世界知识产权", "联合国", "全球协调"]
    },
    {
        name: "美国版权局",
        description: "美国版权局官方网站，提供版权注册和查询服务",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717692463414900_%E7%BE%8E%E5%9B%BD%E7%89%88%E6%9D%83%E5%B1%80.png",
        url: "https://www.copyright.gov/",
        category: "商标专利",
        tags: ["美国", "版权局", "版权注册", "版权查询"]
    },
    {
        name: "中国商标局",
        description: "中国国家知识产权局商标局，提供商标注册和查询服务",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717692995637112_%E4%B8%93%E5%88%A9.png",
        url: "https://sbj.cnipa.gov.cn/sbj/index.html",
        category: "商标专利",
        tags: ["中国", "商标局", "国家知识产权局", "商标注册"]
    },
    {
        name: "中国专利检索",
        description: "中国专利检索及分析系统，提供专利查询和分析服务",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202406/1717692995637112_%E4%B8%93%E5%88%A9.png",
        url: "https://pss-system.cponline.cnipa.gov.cn/conventionalSearch",
        category: "商标专利",
        tags: ["中国", "专利检索", "专利分析", "国家知识产权局"]
    },
    // 浏览器插件
    {
        name: "卖家精灵插件",
        description: "日用户10万+的亚马逊插件，替代Keepa、查产品销量、关键词",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201231/5fed724e2be8a.png/icon52",
        url: "https://www.sellersprite.com/?utm_source=amz123&utm_medium=tuijianchajian",
        category: "浏览器插件",
        tags: ["亚马逊", "产品分析", "销量查询", "关键词", "替代Keepa"]
    },
    {
        name: "西柚找词插件",
        description: "专业的亚马逊关键词挖掘和分析工具",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202410/1729844631669827_%E5%9B%BE%E7%89%871.png",
        url: "https://knowledge.xiyouzhaoci.com/extension/?chan=amz123_extension",
        category: "浏览器插件",
        tags: ["关键词挖掘", "亚马逊", "SEO工具", "关键词分析"]
    },
    {
        name: "LastPass",
        description: "屡获殊荣的密码管理器，自动保存并记录你的密码，多终端同步",
        iconUrl: "https://img.amz123.com/image_cloud/202301/1673418987090_lastpass.png",
        url: "https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd?hl=zh-CN",
        category: "浏览器插件",
        tags: ["密码管理", "多终端同步", "自动保存", "安全"]
    },
    {
        name: "Bitly",
        description: "专业的链接缩短和管理工具",
        iconUrl: "https://img.amz123.com/image_cloud/202302/1675325357074_1675320577122.png",
        url: "https://chrome.google.com/webstore/detail/bitly-unleash-the-power-o/iabeihobmhlgpkcgjiloemdbofjbdcic",
        category: "浏览器插件",
        tags: ["链接缩短", "链接管理", "数据分析", "营销工具"]
    },
    {
        name: "Sellerise",
        description: "亚马逊卖家工具插件",
        iconUrl: "https://img.amz123.com/image_cloud/202306/1688024120276_sellerise.png",
        url: "https://sellerise.com/",
        category: "浏览器插件",
        tags: ["亚马逊", "卖家工具", "产品分析", "运营工具"]
    },
    {
        name: "图片下载插件",
        description: "一键下载亚马逊高清大图和评论买家秀图片的插件，免费！",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220930/6336525c85abf.png/icon52",
        url: "https://extpose.com/ext/ojbcpmfpndggkkpaggbkjipbdlipcaeb",
        category: "浏览器插件",
        tags: ["图片下载", "亚马逊", "高清大图", "买家秀", "免费"]
    },
    {
        name: "Amazon图搜",
        description: "AliPrice以图搜同款, 支持搜Amazon 1688 淘宝 拼多多 Alibaba AliExpress Shopee Ebay, 免费!",
        iconUrl: "https://img.amz123.com/upload/202310/1698746390011586_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20231031175933.png",
        url: "https://www.aliprice.com/information/alibabaCnInformation.html?z=CIS65Uxjq3&extension=1688",
        category: "浏览器插件",
        tags: ["以图搜图", "多平台", "免费", "产品搜索", "比价"]
    },
    {
        name: "OneTab",
        description: "把多开的浏览器窗口转换成一个列表，节省高达95％内存",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faef23c12.jpg/icon52",
        url: "https://chrome.google.com/webstore/detail/onetab/chphlpgkkbolifaimnlloiipkdnihall",
        category: "浏览器插件",
        tags: ["内存优化", "标签管理", "浏览器优化", "效率工具"]
    },
    {
        name: "AMZScout",
        description: "amzscout 插件终身版279$(官网原价299$) ,包月版 34.99 $(官网原价44.99$) ",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f87e3eb04.png/icon52",
        url: "https://amzscout.idevaffiliate.com/idevaffiliate.php?id=658&url=1135",
        category: "浏览器插件",
        tags: ["亚马逊", "产品分析", "市场研究", "选品工具", "付费"]
    },
    {
        name: "Helium 10",
        description: "功能强大的一款产品分析插件",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202403/1709607290259462_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240305105430.jpg",
        url: "https://crushtrk.com/?a=6843&c=284&p=r&s4=CNDIA1YAMZ&s5=PURL-001901",
        category: "浏览器插件",
        tags: ["产品分析", "亚马逊", "功能强大", "选品工具", "付费"]
    },
    {
        name: "CrowdTangle",
        description: "Facebook插件，竞争对手的Facebook专页内容分析、产品落地页的推广分析",
        iconUrl: "https://img.amz123.com/upload/index_icon/20210824/CrowdTangle%20Link%20Checker.png/icon52",
        url: "https://chrome.google.com/webstore/detail/crowdtangle-link-checker/klakndphagmmfkpelfkgjbkimjihpmkh?hl=en",
        category: "浏览器插件",
        tags: ["Facebook", "竞争对手分析", "推广分析", "社交媒体"]
    },
    {
        name: "TubeBuddy",
        description: "Youtube插件，超级强大的youtube工具",
        iconUrl: "https://img.amz123.com/upload/index_icon/20210824/tubebuddy.png/icon52",
        url: "https://chrome.google.com/webstore/detail/tubebuddy-for-youtube/mhkhmbddkmdggbhaaaodilponhnccicb",
        category: "浏览器插件",
        tags: ["YouTube", "视频工具", "SEO优化", "频道管理"]
    },
    {
        name: "vidIQ",
        description: "Youtube插件，可以分析相关视频的相关内容是什么？视频如何在搜索中排名？推荐视频来自哪里？好的YouTube SEO关键词。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20210824/vidIQ.png/icon52",
        url: "https://chrome.google.com/webstore/detail/ds-amazon-quick-view/jkompbllimaoekaogchhkmkdogpkhojg",
        category: "浏览器插件",
        tags: ["YouTube", "SEO分析", "关键词研究", "视频优化"]
    },
    {
        name: "Social Blade",
        description: "Youtube红人质量鉴定插件，检测你联系的Youtube红人频道的数据表现",
        iconUrl: "https://img.amz123.com/upload/index_icon/20210824/socialblade.png/icon52",
        url: "https://chrome.google.com/webstore/detail/social-blade/cfidkbgamfhdgmedldkagjopnbobdmdn?hl=en",
        category: "浏览器插件",
        tags: ["YouTube", "红人分析", "数据检测", "质量鉴定"]
    },
    {
        name: "Grammarly",
        description: "检查你英文文章的拼写、语法和单词使用是否正确，堪称神器",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faeeae746.jpg/icon52",
        url: "https://chrome.google.com/webstore/detail/grammarly-for-chrome/kbfnbcaeplbcioakkpcpgfkobkghlhen?hl=en",
        category: "浏览器插件",
        tags: ["语法检查", "拼写检查", "英文写作", "写作助手"]
    },
    {
        name: "Keepa",
        description: "（必备）可以查看亚马逊商品历史价格和BSR变化",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faefabdc8.jpg/icon52",
        url: "https://keepa.com/",
        category: "浏览器插件",
        tags: ["价格追踪", "BSR变化", "亚马逊", "历史数据", "必备"]
    },
    {
        name: "AMZDataStudio插件",
        description: "Amazon KW Index and Rank Tracker，关键词排名定位追踪。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f818adb4d.png/icon52",
        url: "https://amzdatastudio.com/user/chrome-extension/3b1e3ab0-a1cb-11e8-a9c9-59ecb47d42ce",
        category: "浏览器插件",
        tags: ["关键词追踪", "排名监控", "亚马逊", "SEO工具"]
    },
    {
        name: "SellerApp插件",
        description: "一键免费生成大量亚马逊建议关键字，可提取数百个长尾关键字。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f8187c8be.png/icon52",
        url: "https://chrome.google.com/webstore/detail/amazon-keyword-tool-for-f/lebpbmopodkmcadehlkmghfcfmgnacdm",
        category: "浏览器插件",
        tags: ["关键词生成", "长尾关键词", "亚马逊", "免费", "SEO"]
    },
    {
        name: "EarData",
        description: "可以轻松的在 Amazon 页面上进行产品比较，或者将他们一键导出到 Excel 来归类汇总。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f7fb65105.png/icon52",
        url: "https://chrome.google.com/webstore/detail/eardata-%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%8D%96%E5%AE%B6%E5%8A%A9%E6%89%8B/leamnhmoommgnllbfchimmjblecjgoad",
        category: "浏览器插件",
        tags: ["产品比较", "Excel导出", "亚马逊", "数据分析"]
    },
    {
        name: "Fakespot",
        description: "亚马逊虚假评论分析插件",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f7fb49f42.png/icon52",
        url: "https://chrome.google.com/webstore/detail/fakespot-analyze-fake-ama/nakplnnackehceedgkgkokbgbmfghain",
        category: "浏览器插件",
        tags: ["评论分析", "虚假评论", "亚马逊", "质量检测"]
    },
    {
        name: "Instant Data Scraper",
        description: "网页数据爬取插件，亚马逊商品评论采集。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f7fb2c30a.png/icon52",
        url: "https://chrome.google.com/webstore/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah",
        category: "浏览器插件",
        tags: ["数据爬取", "评论采集", "网页抓取", "亚马逊"]
    },
    {
        name: "FBA计算器",
        description: "在产品页上一键获取FBA费用的插件。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f7fb09a8f.png/icon52",
        url: "https://chrome.google.com/webstore/detail/fba-calculator-free-exten/dkgjopcolgcafhnicdahjemapkniikeh",
        category: "浏览器插件",
        tags: ["FBA计算", "费用计算", "亚马逊", "免费"]
    },
    {
        name: "Wordtracker Scout",
        description: "直接分析任意一个页面的关键字，并形成关键字云图。",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202404/1711938676864895_wordtracker-scout.png",
        url: "https://www.wordtracker.com/",
        category: "浏览器插件",
        tags: ["关键词分析", "关键词云图", "页面分析", "SEO工具"]
    },
    {
        name: "Fatkun图片批量下载",
        description: "找出当前页面的所有图片，提供按分辨率、链接等筛选图片。",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f7fa8cbb1.png/icon52",
        url: "https://chrome.google.com/webstore/detail/fatkun-batch-download-ima/nnjjahlikiabnchcpehcpkdeckfgnohf",
        category: "浏览器插件",
        tags: ["图片下载", "批量下载", "图片筛选", "免费"]
    },
    {
        name: "DS Quick View",
        description: "（免费，必备）好处是不需要点到Listing中就能查看排名",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faef823dc.jpg/icon52",
        url: "https://chrome.google.com/webstore/detail/ds-amazon-quick-view/jkompbllimaoekaogchhkmkdogpkhojg",
        category: "浏览器插件",
        tags: ["排名查看", "免费", "必备", "亚马逊", "快速查看"]
    },
    {
        name: "ReviewMeta",
        description: "亚马逊评论分析插件",
        iconUrl: "https://img.amz123.com/image_cloud/202302/1675328866155_fe5a044caac380f3b41547e73.png",
        url: "https://chrome.google.com/webstore/detail/reviewmetacom-review-anal/fjifglfkcaipnmhngbigdebkoikioend",
        category: "浏览器插件",
        tags: ["评论分析", "亚马逊", "质量检测", "数据分析"]
    },
    // Deals平台
    {
        name: "SlickDeals",
        description: "美国最大的促销导购网站，比较适合做电子类产品",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4e1bd5cb9.jpeg/icon52",
        url: "https://slickdeals.net/",
        category: "Deals平台",
        tags: ["美国最大", "促销导购", "电子产品", "折扣网站"]
    },
    {
        name: "Vipon",
        description: "站外促销平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc50132ffba.png/icon52",
        url: "https://affiliate.blhltd.com/api/Transitshipment/index?code_num=aipqsCLPUY",
        category: "Deals平台",
        tags: ["站外促销", "促销平台", "亚马逊", "推广"]
    },
    {
        name: "Dealsplus",
        description: "不是很挑产品，可以自己发帖，发帖被顶的多了编辑会审核一下，然后进入首页",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4f3d54afc.png/icon52",
        url: "https://www.dealsplus.com/",
        category: "Deals平台",
        tags: ["自助发帖", "编辑审核", "首页推荐", "促销平台"]
    },
    {
        name: "Deal News",
        description: "美国网店折扣，促销，特价以及比价信息交流平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4ebc34070.png/icon52",
        url: "https://www.dealnews.com/",
        category: "Deals平台",
        tags: ["美国网店", "折扣促销", "特价比价", "信息交流"]
    },
    {
        name: "Reddit",
        description: "全球最大的新闻网站，下设Freebies，Deal，Coupon等版块",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4e5f0cf07.png/icon52",
        url: "https://www.reddit.com/r/freebies",
        category: "Deals平台",
        tags: ["全球最大", "新闻网站", "Freebies", "Deal", "Coupon"]
    },
    {
        name: "SD's Forums",
        description: "SlickDeals的论坛版块",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4e2d99c0a.jpeg/icon52",
        url: "https://slickdeals.net/forums/",
        category: "Deals平台",
        tags: ["SlickDeals", "论坛版块", "社区讨论", "促销信息"]
    },
    {
        name: "Dealsea",
        description: "美国前十的折扣商品网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4d8570ca8.jpeg/icon52",
        url: "http://dealsea.com/",
        category: "Deals平台",
        tags: ["美国前十", "折扣商品", "促销网站", "排名靠前"]
    },
    {
        name: "Jumpsend",
        description: "JungleScout旗下站外促销平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4cd9ec016.jpeg/icon52",
        url: "https://www.jumpsend.com/",
        category: "Deals平台",
        tags: ["JungleScout", "站外促销", "促销平台", "亚马逊"]
    },
    {
        name: "ReatailMeNot",
        description: "偏食品服装家居类，电子产品在上面热卖的成功率不太高",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4c7218e4c.png/icon52",
        url: "https://www.retailmenot.com/",
        category: "Deals平台",
        tags: ["食品服装", "家居类", "电子产品", "成功率低"]
    },
    {
        name: "Snagshout",
        description: "美国领先的亚马逊产品测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4c2ce5fa6.png/icon52",
        url: "https://www.snagshout.com/",
        category: "Deals平台",
        tags: ["美国领先", "亚马逊", "产品测评", "测评网站"]
    },
    {
        name: "Kinja",
        description: "流量大，最好找编辑给你发帖，他们会回复一个链接让你填表格，联系邮箱：deals@gawker.com shane@gawker.com studio@gawker.com",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4c00c10cb.jpeg/icon52",
        url: "http://deals.kinja.com/",
        category: "Deals平台",
        tags: ["流量大", "编辑发帖", "填表格", "联系邮箱"]
    },
    {
        name: "Tomoson",
        description: "美国红人平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4b541e46a.jpeg/icon52",
        url: "https://www.tomoson.com/",
        category: "Deals平台",
        tags: ["美国", "红人平台", "网红营销", "KOL"]
    },
    {
        name: "Giveaway",
        description: "美国测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4b2f1eb23.png/icon52",
        url: "https://www.giveawayservice.com/",
        category: "Deals平台",
        tags: ["美国", "测评网站", "产品测评", "免费试用"]
    },
    {
        name: "Dealmoon",
        description: "北美省钱快报，面向北美市场的中英双语折扣信息网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4a5749cfe.png/icon52",
        url: "http://www.dealmoon.com/",
        category: "Deals平台",
        tags: ["北美省钱快报", "中英双语", "折扣信息", "北美市场"]
    },
    {
        name: "iReviewHome",
        description: "美国测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc49d412590.jpeg/icon52",
        url: "https://www.ilovetoreview.com/",
        category: "Deals平台",
        tags: ["美国", "测评网站", "产品测评", "免费试用"]
    },
    {
        name: "Techbargains",
        description: "美国前10折扣商品促销信息发布网站，主要是数码、电子产品",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4a32e579b.png/icon52",
        url: "http://www.techbargains.com/",
        category: "Deals平台",
        tags: ["美国前10", "折扣商品", "数码产品", "电子产品"]
    },
    {
        name: "Offers",
        description: "服装食品休闲类的产品比较火爆，电子类产品也有，需要把deal发给编辑审核",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc492967fa9.png/icon52",
        url: "http://www.offers.com/",
        category: "Deals平台",
        tags: ["服装食品", "休闲类", "电子类", "编辑审核"]
    },
    {
        name: "Hotukdeals",
        description: "英国最大的促销导购网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc48da72de0.png/icon52",
        url: "http://www.hotukdeals.com/",
        category: "Deals平台",
        tags: ["英国最大", "促销导购", "折扣网站", "英国市场"]
    },
    {
        name: "Lifehacker",
        description: "美国著名的生活、软件类效率博客",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4867371e0.png/icon52",
        url: "http://lifehacker.com/",
        category: "Deals平台",
        tags: ["美国著名", "生活软件", "效率博客", "科技资讯"]
    },
    {
        name: "GoldLeaf",
        description: "美国测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc47d00d321.jpeg/icon52",
        url: "http://gold-leaf-group.com/",
        category: "Deals平台",
        tags: ["美国", "测评网站", "产品测评", "免费试用"]
    },
    {
        name: "iLoveToReview",
        description: "美国测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc47358dac4.png/icon52",
        url: "https://www.ilovetoreview.com/",
        category: "Deals平台",
        tags: ["美国", "测评网站", "产品测评", "免费试用"]
    },
    {
        name: "Elitedealclub",
        description: "美国测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc46c82d977.jpeg/icon52",
        url: "https://elitedealclub.com/",
        category: "Deals平台",
        tags: ["美国", "测评网站", "产品测评", "免费试用"]
    },
    {
        name: "Bizrate",
        description: "美国著名的购物比较搜索引擎",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4663c65c9.png/icon52",
        url: "http://www.bizrate.com/",
        category: "Deals平台",
        tags: ["美国著名", "购物比较", "搜索引擎", "比价网站"]
    },
    {
        name: "Mydealz",
        description: "德国最大的促销导购网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc45aaa49ab.jpeg/icon52",
        url: "http://www.mydealz.de/",
        category: "Deals平台",
        tags: ["德国最大", "促销导购", "折扣网站", "德国市场"]
    },
    {
        name: "UberZonClub",
        description: "美国测评网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc455e4e641.jpeg/icon52",
        url: "http://www.uberzonclub.com/",
        category: "Deals平台",
        tags: ["美国", "测评网站", "产品测评", "免费试用"]
    },
    {
        name: "Dealabs",
        description: "法国最大的促销导购网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4500e5084.jpeg/icon52",
        url: "http://www.dealabs.com/",
        category: "Deals平台",
        tags: ["法国最大", "促销导购", "折扣网站", "法国市场"]
    },
    {
        name: "Redflagdeals",
        description: "加拿大最大的促销导购网站",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201218/5fdc4435cfc2c.jpeg/icon52",
        url: "http://www.redflagdeals.com/",
        category: "Deals平台",
        tags: ["加拿大最大", "促销导购", "折扣网站", "加拿大市场"]
    },
    {
        name: "网红推广",
        description: "海量站外推广途径，上易推宝，自助下单！",
        iconUrl: "https://img.amz123.com/image_cloud/202303/1678090806475_ee14182e042ae52e143fca6ab30458a.png",
        url: "https://www.ytbao.com/?e=KdT",
        category: "Deals平台",
        tags: ["海量推广", "站外推广", "易推宝", "自助下单", "网红营销"]
    },
    // 虚拟信用卡
    {
        name: "环球通汇",
        description: "以引领合规的跨境支付方案链接中国和世界的交易场景",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798560GP%20transfer%20visa%E5%8D%A1.png",
        url: "https://www.gptransfer.com",
        category: "虚拟信用卡",
        tags: ["跨境支付", "合规", "中国", "世界", "交易场景"]
    },
    {
        name: "空中云汇",
        description: "跨境企业全景支付优选",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798560%E7%A9%BA%E4%B8%AD%E4%BA%91%E6%B1%87.png",
        url: "https://www.airwallex.com/cn/business-account/cards",
        category: "虚拟信用卡",
        tags: ["跨境企业", "全景支付", "优选", "企业服务"]
    },
    {
        name: "QBIT",
        description: "打通企业全球资金流转链路。",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798560QBIT.png",
        url: "https://www.qbitnetwork.com/",
        category: "虚拟信用卡",
        tags: ["企业", "全球资金", "流转链路", "资金管理"]
    },
    {
        name: "Payoneer派安盈",
        description: "Payoneer派安盈的创新型跨境支付解决方案专为全球创业者、跨境商务企业及专业人士设计，让您无论身在何处，都能如同人在当地一般轻松收，随心付，安心盈，加油赚。",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798561Payoneer%E6%B4%BE%E5%AE%89%E7%9B%88.jpg",
        url: "http://tracking.payoneer.com/SH3ze",
        category: "虚拟信用卡",
        tags: ["跨境支付", "全球创业者", "跨境商务", "专业人士", "轻松收付"]
    },
    {
        name: "Virtualcards",
        description: "50美元起充,支持支付宝充值",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798561Virtualcards.png",
        url: "https://www.virtualcards.us/",
        category: "虚拟信用卡",
        tags: ["50美元起充", "支付宝充值", "虚拟卡", "充值"]
    },
    {
        name: "VMcard",
        description: "VMcard 国际预付卡，用于海外电商购物、服务订阅、账户注册、会员储值等场景",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798561VMcard.png",
        url: "https://vmcardio.com/",
        category: "虚拟信用卡",
        tags: ["国际预付卡", "海外电商", "服务订阅", "账户注册", "会员储值"]
    },
    {
        name: "Advcash",
        description: "目前需要用欧洲国家的资料注册",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798562Advcash.png",
        url: "https://wallet.advcash.com/",
        category: "虚拟信用卡",
        tags: ["欧洲国家", "资料注册", "虚拟卡", "注册要求"]
    },
    {
        name: "Amzkeys",
        description: "支持后台在线管理申请，同时无限开卡，实时查明细，多种币种支持，安全便捷。",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798010Amzkeys.png",
        url: "https://amzkeys.com/",
        category: "虚拟信用卡",
        tags: ["在线管理", "无限开卡", "实时查明细", "多币种", "安全便捷"]
    },
    {
        name: "芥末卡",
        description: "支付管理解决方案，为你提供你所需要的信贷和管理软件，免费使用",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798010Divvy.png",
        url: "https://wasabicard.com/zh-CN/signup?ref=gaaf7nn1c0",
        category: "虚拟信用卡",
        tags: ["支付管理", "信贷", "管理软件", "免费使用"]
    },
    {
        name: "Tap&Go拍住赏",
        description: "由香港电讯的全资附属公司 HKT Payment Ltd 于2015年推出的电子钱包",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798010Tap&Go%E6%8B%8D%E4%BD%8F%E8%B5%8F.png",
        url: "https://www.tapngo.com.hk/chi/index.html",
        category: "虚拟信用卡",
        tags: ["香港电讯", "HKT Payment", "电子钱包", "2015年推出"]
    },
    {
        name: "世界之极",
        description: "世界之极，海外VISA，万事达虚拟卡",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798011%E4%B8%96%E7%95%8C%E4%B9%8B%E6%9E%81.png",
        url: "https://www.worldest.us",
        category: "虚拟信用卡",
        tags: ["海外VISA", "万事达", "虚拟卡", "世界之极"]
    },
    {
        name: "Bento",
        description: "直观的、基于借记卡的商业支出管理平台，可帮助客户省钱",
        iconUrl: "https://img.amz123.com/image_cloud/202303/1679990063793_1679990025860.jpg",
        url: "https://bentoforbusiness.com/",
        category: "虚拟信用卡",
        tags: ["借记卡", "商业支出", "管理平台", "省钱"]
    },
    {
        name: "007虚拟卡",
        description: "免费开户，无限开卡，拥有VISA、MASTER多个国家多个币种卡BIN，广告投放、电商租金、游戏等多元场景消费全球",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493619007%E8%99%9A%E6%8B%9F%E5%8D%A1.png",
        url: "https://pay007.cc",
        category: "虚拟信用卡",
        tags: ["免费开户", "无限开卡", "VISA", "MASTER", "多国家", "多币种", "广告投放", "电商", "游戏"]
    },
    {
        name: "全球付",
        description: "0费用轻松申请，国际在线购物新体验",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493620%E5%85%A8%E7%90%83%E4%BB%98.png",
        url: "http://www.globalcash.hk/",
        category: "虚拟信用卡",
        tags: ["0费用", "轻松申请", "国际在线购物", "新体验"]
    },
    {
        name: "爱汇旅支卡",
        description: "最容易适合中国用户申请的mastercard电子旅支卡",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493625%E7%88%B1%E6%B1%87%E6%97%85%E6%94%AF%E5%8D%A1.png",
        url: "https://www.ihui.com/alliance/card/da3f0a2eff374ba5b2e73cac3185d38f.html",
        category: "虚拟信用卡",
        tags: ["中国用户", "mastercard", "电子旅支卡", "容易申请"]
    },
    {
        name: "Emburse",
        description: "一家提供企业级支出管理解决方案的软件公司",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493627Emburse.png",
        url: "https://www.emburse.com/",
        category: "虚拟信用卡",
        tags: ["企业级", "支出管理", "解决方案", "软件公司"]
    },
    {
        name: "Privacy",
        description: "使用隐私保护，用自动生成的虚拟卡屏蔽你的真实卡信息。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493628Privacy.png",
        url: "https://privacy.com/",
        category: "虚拟信用卡",
        tags: ["隐私保护", "自动生成", "虚拟卡", "屏蔽真实卡信息"]
    },
    {
        name: "Revolut",
        description: "更智能地发送、消费和储蓄，把所有的钱放在一个地方，使日常开支变得轻而易举",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493628Revolut.png",
        url: "https://www.revolut.com/",
        category: "虚拟信用卡",
        tags: ["智能发送", "消费储蓄", "统一管理", "日常开支"]
    },
    {
        name: "Wirego",
        description: "支付场景全面覆盖，支持美元、英镑、欧元、澳元、港币等 10 个主流币种的支付与结算",
        iconUrl: "https://img.amz123.com/upload/image_cloud/202404/1712711182713957_70c36b0e89e0ac7ce6c34f37134a2cef_.png",
        url: "https://wiregotech.com/",
        category: "虚拟信用卡",
        tags: ["支付场景", "全面覆盖", "10个主流币种", "支付结算"]
    },
    {
        name: "信用卡号码生成器",
        description: "Namso-gen信用卡号码生成器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493628%E4%BF%A1%E7%94%A8%E5%8D%A1%E5%8F%B7%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8.png",
        url: "https://namso-gen.com/",
        category: "虚拟信用卡",
        tags: ["信用卡号码", "生成器", "Namso-gen", "工具"]
    },
    {
        name: "信用卡检测",
        description: "免费的信用卡号码检查工具",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493628%E4%BF%A1%E7%94%A8%E5%8D%A1%E6%A3%80%E6%B5%8B.png",
        url: "https://www.mrchecker.net/card-checker//ccn2/",
        category: "虚拟信用卡",
        tags: ["免费", "信用卡号码", "检查工具", "检测"]
    },
    {
        name: "PST",
        description: "用于广告帐户和个人购买的虚拟卡",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752487548_PST.jpg",
        url: "https://pst.net/",
        category: "虚拟信用卡",
        tags: ["广告帐户", "个人购买", "虚拟卡", "广告投放"]
    },
    {
        name: "VIABUY",
        description: "使用个人IBAN和预付万事达卡的在线账户",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752913449_VIABUY.png",
        url: "https://www.viabuy.com/",
        category: "虚拟信用卡",
        tags: ["个人IBAN", "预付万事达卡", "在线账户", "个人账户"]
    },
    {
        name: "Dupay",
        description: "支持USDT充值到VISA卡和Master卡",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680759611243_depay.jpg",
        url: "https://dupay.one/web-app/register-h5?invitCode=xmCZlL&lang=zh-cn",
        category: "虚拟信用卡",
        tags: ["USDT充值", "VISA卡", "Master卡", "加密货币"]
    },
    {
        name: "e.pn",
        description: "致力于为跨境从业者提供优质的国内外Card",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798560%E6%80%AA%E7%9F%B3%E6%B5%B7%E5%A4%96%E5%95%86%E5%8A%A1Card.png",
        url: "https://e.pn/?ref=86aoEE8Q",
        category: "虚拟信用卡",
        tags: ["跨境从业者", "优质", "国内外Card", "跨境服务"]
    },
    {
        name: "三三金融",
        description: "适合所有人的一站式购物礼品解決方案",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680759802904_%E4%B8%89%E4%B8%89%E9%87%91%E8%9E%8D.jpg",
        url: "https://www.33finance.com/?lang=zh-hant",
        category: "虚拟信用卡",
        tags: ["一站式", "购物礼品", "解决方案", "适合所有人"]
    },
    {
        name: "NobePay",
        description: "覆盖多种支付场景，满足您商旅、购物、应用、游戏、广告等消费管理需求",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680760128379_NobePay.jpg",
        url: "https://www.nobepay.com/",
        category: "虚拟信用卡",
        tags: ["多种支付场景", "商旅", "购物", "应用", "游戏", "广告", "消费管理"]
    },
    {
        name: "PayTrades",
        description: "为中小外贸企业提供快捷、 安全、一站式的收款结汇服务",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680760227137_PayTrades.jpg",
        url: "https://www.paytrades.cn/register?inviterCode=U20250311004567",
        category: "虚拟信用卡",
        tags: ["中小外贸企业", "快捷", "安全", "一站式", "收款结汇"]
    },
    {
        name: "Pyvio",
        description: "为跨境企业实现更安全、更快速、更便捷的全球收付服务",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680766527067_Pyvio.jpg",
        url: "https://pyvio.com/pyCard",
        category: "虚拟信用卡",
        tags: ["跨境企业", "安全", "快速", "便捷", "全球收付"]
    },
    {
        name: "TransferEasy",
        description: "为客户提供安全、便捷、高效的多币种、跨地域、跨平台的国际汇款金融服务",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680766637695_TransferEasy.png",
        url: "https://www.transfereasy.com/",
        category: "虚拟信用卡",
        tags: ["安全", "便捷", "高效", "多币种", "跨地域", "跨平台", "国际汇款"]
    },
    {
        name: "网易支付",
        description: "网易官方出品，亚马逊收款首选，0汇损所见所得",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201230/5fec488114623.png/icon52",
        url: "https://globalpay.163.com/customhome?promotional_id=26146&utm_source=AMZ123&utm_campaign=渠道定制页&utm_medium=支付板块&utm_content=点击&utm_term=PC&inviteCode=7130",
        category: "虚拟信用卡",
        tags: ["网易官方", "亚马逊收款", "0汇损", "所见所得"]
    },
    {
        name: "Worldfirst万里汇",
        description: "蚂蚁集团旗下，费率0.3%封顶，支持提款至支付宝",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8f87f729c8.jpeg/icon52",
        url: "https://www.worldfirst.com.cn/cn/?ID=3493&utm_medium=mkt3rdparty&utm_source=amz123&utm_term=frontpage",
        category: "虚拟信用卡",
        tags: ["蚂蚁集团", "费率0.3%", "提款至支付宝", "万里汇"]
    },
    {
        name: "连连支付",
        description: " 全牌照，无汇损，费率0.7%封顶，5分钟内到账 ",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf39ca3f.jpg/icon52",
        url: "https://global.lianlianpay.com/register?invitecode=3C20HW",
        category: "虚拟信用卡",
        tags: ["全牌照", "无汇损", "费率0.7%", "5分钟内到账"]
    },
    {
        name: "PingPong Card",
        description: "多平台多币种速到账；支持11国VAT，出口退税，虚拟信用卡",
        iconUrl: "https://img.amz123.com/upload/index_icon/20201203/5fc8faf3c413b.jpg/icon52",
        url: "https://www.pingpongx.com/zh/products/card",
        category: "虚拟信用卡",
        tags: ["多平台", "多币种", "速到账", "11国VAT", "出口退税", "虚拟信用卡"]
    },
    {
        name: "Skyee",
        description: "费率0.2%封顶，注册即享90天0费率，人民币提现秒到账，安全一定省",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220216/620ccb9350dec.jpeg/icon52",
        url: "https://www.skyee360.com/vcc-main.html",
        category: "虚拟信用卡",
        tags: ["费率0.2%", "90天0费率", "人民币提现", "秒到账", "安全省"]
    },
    {
        name: "iPayLinks",
        description: "多平台多币种快速回款，超低费率0汇损，多国持牌安全合规",
        iconUrl: "https://img.amz123.com/upload/index_icon/20210310/6048aad5c4aba.jpeg/icon52",
        url: "https://www.ipaylinks.com/",
        category: "虚拟信用卡",
        tags: ["多平台", "多币种", "快速回款", "超低费率", "0汇损", "多国持牌", "安全合规"]
    },
    {
        name: "寻汇SUNRATE",
        description: "费率0-0.5%,支持多平台本土店铺,安全合规多牌照",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220304/6221702d5f6ea.png/icon52",
        url: "https://www.sunrate.com/product/corporateCards",
        category: "虚拟信用卡",
        tags: ["费率0-0.5%", "多平台本土店铺", "安全合规", "多牌照"]
    },
    {
        name: "宝付国际",
        description: "Tiktok东南亚本地收款上线，六大站点直收！",
        iconUrl: "https://img.amz123.com/image_cloud/202211/1668502654672_6b77081c23bf9c8eef43c7394e10586.jpg",
        url: "https://exchange.gepholding.com/register/2j280o",
        category: "虚拟信用卡",
        tags: ["Tiktok", "东南亚", "本地收款", "六大站点", "直收"]
    },
    {
        name: "HyperPay",
        description: "全球化加密数字货币支付聚合解决方案服务商",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680767547942_HyperPay.jpg",
        url: "https://www.hyperpay.io/",
        category: "虚拟信用卡",
        tags: ["全球化", "加密数字货币", "支付聚合", "解决方案", "服务商"]
    },
    {
        name: "Global E-Payment",
        description: "提供定制化的全球收款、全球付款、换汇、虚拟卡服务，覆盖客户生态链业务需求",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680767667751_Global%20E-Payment.jpg",
        url: "https://www.gepholding.com/virtual-credit-card.html",
        category: "虚拟信用卡",
        tags: ["定制化", "全球收款", "全球付款", "换汇", "虚拟卡", "生态链"]
    },
    {
        name: "4399Pay",
        description: "支持USDT直接充值使用，系统自动换汇成美金,整体费率低",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680767868158_logo.66627bad.png",
        url: "https://4399pay.com/",
        category: "虚拟信用卡",
        tags: ["USDT充值", "自动换汇", "美金", "整体费率低"]
    },
    {
        name: "Windpayer",
        description: "为跨境卖家提供多平台、多币种、安全快捷的收款服务",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680768562250_Windpayer.jpg",
        url: "https://windpayer.com/",
        category: "虚拟信用卡",
        tags: ["跨境卖家", "多平台", "多币种", "安全快捷", "收款服务"]
    },
    {
        name: "MXKPay",
        description: "开卡无限量，一个账户管理全部卡片",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680769366469_MXKPay.jpg",
        url: "https://www.mxkpay.com/",
        category: "虚拟信用卡",
        tags: ["开卡无限量", "一个账户", "管理全部卡片", "统一管理"]
    },
    {
        name: "Foton Card",
        description: "提供安全、便捷、灵活的虚拟卡服务，覆盖多种消费场景",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680769546676_foton%20card.jpg",
        url: "https://dashboard.fotoncard.com/#/pages/login",
        category: "虚拟信用卡",
        tags: ["安全", "便捷", "灵活", "虚拟卡服务", "多种消费场景"]
    },
    {
        name: "US Unlocked",
        description: "我们的虚拟预付卡允许您在您最喜爱的零售商处进行无限制购物",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680769681898_US%20Unlocked.jpg",
        url: "https://www.usunlocked.com/",
        category: "虚拟信用卡",
        tags: ["虚拟预付卡", "零售商", "无限制购物", "美国"]
    },
    {
        name: "VccPay",
        description: "0开户费，透明费率。超多卡段、消费场景全覆盖，与美国银行深度合作",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680770529334_VccPay.jpg",
        url: "https://vcc.joycart.cn/#/signup",
        category: "虚拟信用卡",
        tags: ["0开户费", "透明费率", "超多卡段", "消费场景全覆盖", "美国银行"]
    },
    {
        name: "ePayServices",
        description: "面向个人企业和IT专业人员的多功能支付解决方案",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680770648262_ePayServices.jpg",
        url: "https://epayservices.com/en/index.html",
        category: "虚拟信用卡",
        tags: ["个人企业", "IT专业人员", "多功能", "支付解决方案"]
    },
    {
        name: "光子易Photonpay",
        description: "一家高度融合跨境支付及国际金融技术的全球化创新型平台",
        iconUrl: "https://img.amz123.com/upload/index_icon/20220314/622f0bb1846e0.jpeg/icon52",
        url: "https://www.photonpay.com/issuing",
        category: "虚拟信用卡",
        tags: ["跨境支付", "国际金融技术", "全球化", "创新型平台"]
    },
    {
        name: "狸猫",
        description: "无需实名，安全便携，卡段多样。",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798561%E8%B4%9D%E5%8D%A1%E5%B8%AEBkbpay.png",
        url: "https://www.limaopay.com/register/#/register?codes=yDYLbnO8",
        category: "虚拟信用卡",
        tags: ["无需实名", "安全便携", "卡段多样", "匿名"]
    },
    {
        name: "皮卡宝",
        description: "",
        iconUrl: "https://img.amz123.com/upload/upload/avatar/202504/17447954675678514615199_1744795467.png",
        url: "https://www.pikabao.com/#/register?inviteCode=CH0767",
        category: "虚拟信用卡",
        tags: ["虚拟卡", "支付服务", "皮卡宝"]
    },
    // 指纹浏览器
    {
        name: "Hubstudio",
        description: "一款功能强大的网络浏览器",
        iconUrl: "https://img.amz123.com/image_cloud/202303/1679900492438_hubstudio.png",
        url: "https://www.hubstudio.cn/?hub=amz123",
        category: "指纹浏览器",
        tags: ["功能强大", "网络浏览器", "指纹管理"]
    },
    {
        name: "AdsPower",
        description: "一款为跨境业务提供多账号营销管理专用防关联指纹浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781905AdsPower%E6%8C%87%E7%BA%B9%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://www.adspower.net/",
        category: "指纹浏览器",
        tags: ["跨境业务", "多账号营销", "防关联", "指纹浏览器"]
    },
    {
        name: "VMlogin",
        description: "国内功能最强的虚拟多登防关联超级浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493758VMlogin%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://vmlogin.cc/",
        category: "指纹浏览器",
        tags: ["国内最强", "虚拟多登", "防关联", "超级浏览器"]
    },
    {
        name: "比特浏览器",
        description: "功能强大的免费指纹浏览器！",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493761%E6%AF%94%E7%89%B9%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://www.bitbrowser.cn/",
        category: "指纹浏览器",
        tags: ["功能强大", "免费", "指纹浏览器"]
    },
    {
        name: "Zennolab",
        description: "Zennolab自动化程序浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493762Zennolab.png",
        url: "https://zennolab.com/zh/",
        category: "指纹浏览器",
        tags: ["自动化程序", "浏览器", "Zennolab"]
    },
    {
        name: "Antbrowser",
        description: "蚂蚁浏览器，战斗民族俄罗斯出品",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493763Antbrowser.png",
        url: "https://antbrowser.pro/en/",
        category: "指纹浏览器",
        tags: ["蚂蚁浏览器", "俄罗斯", "战斗民族"]
    },
    {
        name: "Multilogin",
        description: "有着多年业内专家指导和协作，立足于国内，服务于全球用户",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493766Multilogin%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://multilogin.com/zh/",
        category: "指纹浏览器",
        tags: ["业内专家", "国内", "全球用户", "协作"]
    },
    {
        name: "飞跨浏览器",
        description: "多品牌运营工具/账密安全/加速访问/团队协同",
        iconUrl: "https://img.amz123.com/image_cloud/202307/1689123813356_64d5c1e395d5e721f23e57edf9c9057.png",
        url: "https://www.feikua.net/?source=AMZ123&keyword=AMZ123",
        category: "指纹浏览器",
        tags: ["多品牌运营", "账密安全", "加速访问", "团队协同"]
    },
    {
        name: "跨境卫士",
        description: "独享固定环境+固定IP，解决跨境电商运营账号安全问题",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493768%E8%B7%A8%E5%A2%83%E5%8D%AB%E5%A3%AB%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://www.kuajingvs.com/",
        category: "指纹浏览器",
        tags: ["独享固定环境", "固定IP", "跨境电商", "账号安全"]
    },
    {
        name: "Kameleo",
        description: "一款功能强大的网络浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493768NewKameleo%E6%8C%87%E7%BA%B9%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://kameleo.io/",
        category: "指纹浏览器",
        tags: ["功能强大", "网络浏览器", "指纹管理"]
    },
    {
        name: "Gologin",
        description: "一款多功能、非常实用的网络浏览工具",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493769NewGologin%E6%8C%87%E7%BA%B9%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://gologin.com/cn/",
        category: "指纹浏览器",
        tags: ["多功能", "实用", "网络浏览工具"]
    },
    {
        name: "Incogniton",
        description: "一款基于网络的跨平台浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493799NewIncogniton%E6%8C%87%E7%BA%B9%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://incogniton.com/zh-hans/",
        category: "指纹浏览器",
        tags: ["基于网络", "跨平台", "浏览器"]
    },
    {
        name: "快兔浏览器",
        description: "一款基于网络的跨平台浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493799New%E5%BF%AB%E5%85%94%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://kuaitux.com/",
        category: "指纹浏览器",
        tags: ["基于网络", "跨平台", "浏览器"]
    },
    {
        name: "候鸟浏览器",
        description: "一款基于网络的跨平台浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493799New%E5%80%99%E9%B8%9F%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://www.ehouniao.com/",
        category: "指纹浏览器",
        tags: ["基于网络", "跨平台", "浏览器"]
    },
    {
        name: "Tiger AI指纹浏览器",
        description: "Tiger AI根据不同的风控标准，进行账号防关联。",
        iconUrl: "https://img.amz123.com/image_cloud/202309/1695348805284_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230922101302.jpg",
        url: "https://www.tiger.top/register.html?code=001",
        category: "指纹浏览器",
        tags: ["Tiger AI", "风控标准", "账号防关联", "AI技术"]
    },
    {
        name: "Sphere",
        description: "俄罗斯大神开发的免费超级浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798053Sphere%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://sphere.tenebris.cc",
        category: "指纹浏览器",
        tags: ["俄罗斯", "免费", "超级浏览器", "大神开发"]
    },
    {
        name: "拉力猫",
        description: "一台电脑即可实现同时多开浏览器",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752606322_lalimao.png",
        url: "https://www.lalimao.com/",
        category: "指纹浏览器",
        tags: ["一台电脑", "同时多开", "浏览器", "多开管理"]
    },
    {
        name: "ClonBrowser",
        description: "永久免费的反侦测指纹浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781905ClonBrowser.png",
        url: "https://www.clonbrowser.net/",
        category: "指纹浏览器",
        tags: ["永久免费", "反侦测", "指纹浏览器"]
    },
    {
        name: "快洋淘浏览器",
        description: "一款跨境电商卖家安全多账号管理工具",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781905%E6%B4%8B%E6%B7%98%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://www.yangtao.com/",
        category: "指纹浏览器",
        tags: ["跨境电商", "卖家", "安全多账号", "管理工具"]
    },
    {
        name: "Maskfog",
        description: "一款为跨境业务提供多账号营销管理专用防关联指纹浏览器",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781906Maskfog%E6%8C%87%E7%BA%B9%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://www.maskfog.com",
        category: "指纹浏览器",
        tags: ["跨境业务", "多账号营销", "防关联", "指纹浏览器"]
    },
    {
        name: "MuLogin",
        description: "一款多登防关联指纹浏览器。安全登录管理多个平台帐号,独立分开的浏览器指纹环境,防止同时登录被关联,安全,高效,快速发展您的在线业务。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752633253_mulogin.png",
        url: "https://www.mulogin.com/",
        category: "指纹浏览器",
        tags: ["多登防关联", "安全登录", "多平台帐号", "独立指纹环境", "防止关联"]
    },
    {
        name: "VMMask",
        description: "一款全新的虚拟网络技术,它结合了以太网和虚拟机技术,实现了高安全性和更加灵活的高效网络环境。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752655832_vmmask.png",
        url: "https://vmmask.net/",
        category: "指纹浏览器",
        tags: ["虚拟网络技术", "以太网", "虚拟机技术", "高安全性", "灵活高效"]
    },
    {
        name: "阿拉鱼",
        description: "首个独立站专业级运营系统,专注于独立站运营痛点解决方案。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752686544_%E9%98%BF%E6%8B%89%E9%B1%BC.png",
        url: "https://alayu.com/about",
        category: "指纹浏览器",
        tags: ["独立站", "专业级运营系统", "运营痛点", "解决方案"]
    },
    {
        name: "Mologin指纹浏览器",
        description: "款基于Chromium开发的指纹浏览器，通过对Chromium底层代码加以改进，实现在一台电脑创建多个独立指纹浏览器，用于管理多个帐号。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752733347_mologin.png",
        url: "https://www.mologin.com/",
        category: "指纹浏览器",
        tags: ["Chromium开发", "指纹浏览器", "底层代码改进", "多独立指纹", "多帐号管理"]
    },
    {
        name: "蜂巢浏览器",
        description: "一款软件, 自定义所有参数来隐藏和控制您的数字指纹。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752801478_%E8%9C%82%E5%B7%A2.png",
        url: "https://nestbrowser.com/",
        category: "指纹浏览器",
        tags: ["自定义参数", "隐藏控制", "数字指纹", "指纹管理"]
    },
    {
        name: "花漾浏览器",
        description: "业界领先的防关联多重分身指纹浏览器,致力于解决多账号安全运营问题。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752830566_%E8%8A%B1%E6%BC%BE.png",
        url: "https://www.szdamai.com/",
        category: "指纹浏览器",
        tags: ["业界领先", "防关联", "多重分身", "指纹浏览器", "多账号安全运营"]
    },
    {
        name: "Ghost Browser",
        description: "一款基于 Chromium 的浏览器,它最大的特点就是支持「账号多开」。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752949173_ghostbrowser.png",
        url: "https://ghostbrowser.com/",
        category: "指纹浏览器",
        tags: ["Chromium", "浏览器", "账号多开", "多开支持"]
    },
    {
        name: "MarketerBrowser",
        description: "MarketerBrowser团队开发的一款浏览器软件,帮助网络营销人员处理同一个网站的多个账号,安全高效地进行推广。您可以查看各种页面并为页面绑定不同的代理和用户代理,因此在一个网站上运行多个帐户是安全的。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680752984618_marketerbrowser.png",
        url: "https://www.marketerbrowser.com/",
        category: "指纹浏览器",
        tags: ["网络营销", "多账号处理", "安全高效", "推广", "代理绑定", "用户代理"]
    },
    {
        name: "Che Browser",
        description: "创建和成功管理各种网站上的多个帐户所需的:脸谱、宾、雅虎、谷歌、博彩、赌博和任何其他帐户。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753017694_chebrowser.png",
        url: "https://chebrowser.site/",
        category: "指纹浏览器",
        tags: ["多帐户管理", "脸谱", "宾", "雅虎", "谷歌", "博彩", "赌博"]
    },
    {
        name: "Surfinite",
        description: "反检测浏览器，管理多个广告柜、社交媒体账户、投注店和加密货币交易所。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753058512_surfinite.png",
        url: "https://surfinite.com/cn/",
        category: "指纹浏览器",
        tags: ["反检测浏览器", "广告柜", "社交媒体账户", "投注店", "加密货币交易所"]
    },
    {
        name: "Undetectable",
        description: "一种基于设备替换地理位置、地址和硬件打印(显示器分辨率、设备型号、语言、连接)的浏览器。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753128870_undetectable.png",
        url: "https://undetectable.io/zh-cn",
        category: "指纹浏览器",
        tags: ["设备替换", "地理位置", "硬件打印", "显示器分辨率", "设备型号", "语言连接"]
    },
    {
        name: "MoreLogin",
        description: "反检测浏览器的多帐户管理，安全管理帐户，防止检测或堵塞。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753141238_morelogin.png",
        url: "https://www.morelogin.com/",
        category: "指纹浏览器",
        tags: ["反检测浏览器", "多帐户管理", "安全管理", "防止检测", "防止堵塞"]
    },
    {
        name: "Xlogin",
        description: "创建安全的浏览器配置文件与不同的指纹运行无限的帐户。 XLogin提供多种指纹保护。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753308388_xlogin.png",
        url: "https://xlogin.us/",
        category: "指纹浏览器",
        tags: ["安全浏览器", "配置文件", "不同指纹", "无限帐户", "指纹保护"]
    },
    {
        name: "MultiBrowser",
        description: "防关联指纹浏览器，用于跨境电商多店铺，多账号管理。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753358384_multibrowser.png",
        url: "https://www.multibrowser.com/",
        category: "指纹浏览器",
        tags: ["防关联", "指纹浏览器", "跨境电商", "多店铺", "多账号管理"]
    },
    {
        name: "Accovod",
        description: "一个可以轻松管理多个帐户，从一个窗口安全方便地访问浏览器配置文件的软件。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753461755_accovod.png",
        url: "https://accovod.com/",
        category: "指纹浏览器",
        tags: ["多帐户管理", "一个窗口", "安全方便", "浏览器配置文件"]
    },
    {
        name: "AEZAKMI",
        description: "一种反检测浏览器，用于安全操作多帐户，流量套利，投注叉以及上下文广告和SMM。  使用AEZAKMI，您可以用一个程序替换虚拟多台计算机，而不会被反欺诈系统所注意。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680753580956_cn.aezakmi.png",
        url: "https://cn.aezakmi.run/",
        category: "指纹浏览器",
        tags: ["反检测浏览器", "安全操作", "多帐户", "流量套利", "投注叉", "上下文广告", "SMM", "反欺诈系统"]
    },
    {
        name: "Indigo Browser",
        description: "可用于管理多个帐户,而不会被检测到的多个环境窗口的浏览器之一,使用此浏览器,您可以高效地为每个帐户设置单独的浏览环境。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680759429535_indigobrowser.png",
        url: "https://indigobrowser.com/?ref=xasolazy88",
        category: "指纹浏览器",
        tags: ["多帐户管理", "不被检测", "多环境窗口", "单独浏览环境", "高效设置"]
    },
    {
        name: "SMLOGIN",
        description: "基于全球最流行的浏览器内核深度开发，允许在不同的浏览器配置文件之间快速切换，同时通过数据多重加密，SSL/HTTPS传输，加速防干扰等多项技术，解决了这些问题。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680759481180_smlogin.png",
        url: "https://www.smlogin.cn/",
        category: "指纹浏览器",
        tags: ["浏览器内核", "深度开发", "快速切换", "数据多重加密", "SSL/HTTPS", "加速防干扰"]
    },
    {
        name: "Yunlark",
        description: "为每个账户提供安全、防关联、独立环境的工具多账户多店铺的安全管理专家。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680759563328_yunlark.png",
        url: "https://www.yunlark.com/",
        category: "指纹浏览器",
        tags: ["安全", "防关联", "独立环境", "多账户", "多店铺", "安全管理专家"]
    },
    {
        name: "Proxyrack",
        description: "IP代理，获得可靠、快速、高质量的代理。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680759594822_proxyrack.png",
        url: "https://www.proxyrack.com/",
        category: "指纹浏览器",
        tags: ["IP代理", "可靠", "快速", "高质量", "代理服务"]
    },
    {
        name: "ixBrowser",
        description: "一站式解决多账号管理问题，并让团队协作更加灵活高效。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1681299717452_WechatIMG213.jpeg",
        url: "https://www.ixbrowser.com/zh",
        category: "指纹浏览器",
        tags: ["一站式", "多账号管理", "团队协作", "灵活高效"]
    },
    {
        name: "海豚浏览器",
        description: "俄罗斯出品海豚指纹浏览器，可以管理多个Facebook账号",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798053%E6%B5%B7%E8%B1%9A%E6%B5%8F%E8%A7%88%E5%99%A8.png",
        url: "https://panel.dolphin.ru.com/?c=auth&m=register&a=43872",
        category: "指纹浏览器",
        tags: ["俄罗斯出品", "海豚", "指纹浏览器", "Facebook账号", "多账号管理"]
    },
    // 指纹检测
    {
        name: "IP查询检测",
        description: "AMZ123免费的在线查询IP，浏览器信息查询，安全检测工具",
        iconUrl: "https://img.amz123.com/image_cloud/202308/1693319559742_IP.png",
        url: "https://www.amz123.com/tools-ip",
        category: "指纹检测",
        tags: ["AMZ123", "免费", "在线查询", "IP查询", "浏览器信息", "安全检测"]
    },
    {
        name: "Pixelscan",
        description: "浏览器环境检测网站，一个检测互联网机器人的一次性解决方案",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798542Pixelscan.jpg",
        url: "https://pixelscan.net/",
        category: "指纹检测",
        tags: ["浏览器环境检测", "互联网机器人", "一次性解决方案", "检测网站"]
    },
    {
        name: "BrowserLeaks",
        description: "指纹检测王牌网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798542BrowserLeaks.png",
        url: "https://browserleaks.com/",
        category: "指纹检测",
        tags: ["指纹检测", "王牌网站", "浏览器泄露", "检测工具"]
    },
    {
        name: "Fingerprint",
        description: "指纹查看网站",
        iconUrl: "https://img.amz123.com/image_cloud/202303/1679971038749_BrowserLeaks.jpg",
        url: "https://fingerprintjs.com/demo/",
        category: "指纹检测",
        tags: ["指纹查看", "指纹检测", "指纹识别"]
    },
    {
        name: "WhatLeaks",
        description: "提供匿名和欺骗服务,它适用于验证与机器相关联的IP地址的场景,能够提供一个简单的方案。",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781906WhatLeaks%E7%BD%91%E7%BB%9C%E6%A3%80%E6%9F%A5.png",
        url: "https://whatleaks.com/",
        category: "指纹检测",
        tags: ["匿名", "欺骗服务", "IP地址验证", "机器关联", "简单方案"]
    },
    {
        name: "Iphey",
        description: "环境检测网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781906iphey.png",
        url: "https://iphey.com/",
        category: "指纹检测",
        tags: ["环境检测", "检测网站", "环境分析"]
    },
    {
        name: "原生IP查询",
        description: "面向整个互联网的互联网分析网站",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781907%E5%8E%9F%E7%94%9FIP%E6%9F%A5%E8%AF%A2.png",
        url: "https://bgp.he.net/",
        category: "指纹检测",
        tags: ["原生IP", "互联网分析", "IP查询", "网络分析"]
    },
    {
        name: "IP干净程度",
        description: "IP位置与干净程度查询",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/1678781907IP%E5%B9%B2%E5%87%80%E7%A8%8B%E5%BA%A6.png",
        url: "https://whatismyiplookup.com/",
        category: "指纹检测",
        tags: ["IP位置", "干净程度", "IP查询", "质量检测"]
    },
    {
        name: "Speedtest",
        description: "强大而知名的全球宽带网络速度测试网站，采用Flash载入界面，Alexa世界排名非常高，Speedtest.net在全球有数百个测试节点，国内有测速节点几十个。作为一款在线并且可视化的网速测试工具。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/1678718915Speedtest.png",
        url: "https://www.speedtest.net/",
        category: "指纹检测",
        tags: ["网络速度测试", "全球宽带", "Flash界面", "Alexa排名", "测试节点", "可视化工具"]
    },
    {
        name: "Yalala",
        description: "浏览器指纹在线检测",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/1678718915Yalala.png",
        url: "https://www.yalala.com/",
        category: "指纹检测",
        tags: ["浏览器指纹", "在线检测", "指纹分析"]
    },
    {
        name: "Whoer",
        description: "查询网络环境匹配度，检查您自己的IP地址以及DNS地址",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/1678718915Whoer.png",
        url: "https://whoer.net/",
        category: "指纹检测",
        tags: ["网络环境匹配度", "IP地址检查", "DNS地址", "环境检测"]
    },
    {
        name: "IPinfo",
        description: "IP种类查询，通过对IP信息的的挖掘, 发现滥用IP的行为以及各种类型的机器行为, 区分正常访问和非正常访问, 构建干净的互联网环境, 为站长或者系统管理员提供准确的业务决策。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/1678718915IPinfo.png",
        url: "https://ipinfo.io/",
        category: "指纹检测",
        tags: ["IP种类查询", "IP信息挖掘", "滥用IP检测", "机器行为", "正常访问", "业务决策"]
    },
    {
        name: "IPIP",
        description: "基于实时BGP/ASN数据分析的IP数据库",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/1678718915IPIP.png",
        url: "https://www.ipip.net/ip.html",
        category: "指纹检测",
        tags: ["实时BGP", "ASN数据分析", "IP数据库", "网络分析"]
    },
    {
        name: "2IP",
        description: "IP地址检测",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/16787189152IP.png",
        url: "https://2ip.io/",
        category: "指纹检测",
        tags: ["IP地址检测", "IP查询", "网络检测"]
    },
    {
        name: "Scamalytics",
        description: "IP洁净度查询，国外一个提供IP欺诈评分的网站。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt/202303/1678718916Scamalytics.png",
        url: "https://scamalytics.com/",
        category: "指纹检测",
        tags: ["IP洁净度", "欺诈评分", "国外网站", "IP质量"]
    },
    {
        name: "FAKE VISION",
        description: "更全面的检测信息",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798544FAKE%20VISION.png",
        url: "http://f.vision/",
        category: "指纹检测",
        tags: ["全面检测", "检测信息", "详细信息"]
    },
    {
        name: "Ipdata",
        description: "一种低延迟API,可根据IP地址(IPv4和IPv6)为网站所有者提供有关其访问者的各种信息。 将其视为IP地理位置和威胁情报API。",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798544ipdata.png",
        url: "https://ipdata.co/",
        category: "指纹检测",
        tags: ["低延迟API", "IPv4", "IPv6", "访问者信息", "地理位置", "威胁情报"]
    },
    {
        name: "IP2LOCATION",
        description: "准确的地理位置",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680748601348_ip2location.png",
        url: "https://www.ip2location.com/",
        category: "指纹检测",
        tags: ["准确地理位置", "位置定位", "IP定位"]
    },
    {
        name: "IPHub.info",
        description: "检测你购买的代理是否是住宅代理IP",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680748571012_iphub.jpg",
        url: "https://iphub.info/",
        category: "指纹检测",
        tags: ["代理检测", "住宅代理IP", "代理验证", "IP类型检测"]
    },
    {
        name: "IP2Proxy",
        description: "一种匿名代理服务器，它能够隐藏用户的真实IP地址，并代表用户向互联网发送请求。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680748475007_ip2proxy.png",
        url: "https://www.ip2proxy.com/",
        category: "指纹检测",
        tags: ["匿名代理", "隐藏真实IP", "代理服务器", "互联网请求"]
    },
    {
        name: "IPinfodb",
        description: "一个免费IP地址地理位置定位工具。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680748584231_ipinfodb.png",
        url: "https://www.ipinfodb.com/",
        category: "指纹检测",
        tags: ["免费", "IP地址", "地理位置定位", "定位工具"]
    },
    {
        name: "IPqualityscore",
        description: "IP质量检测网站",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680748593486_ipqualityscore.png",
        url: "https://www.ipqualityscore.com/",
        category: "指纹检测",
        tags: ["IP质量检测", "质量评估", "IP分析"]
    },
    {
        name: "Whatismyipaddress",
        description: "一个提供互联网协议地址查询和设置的网站。该网站提供的服务有IP查找、黑名单检查、电子邮件追踪、互联网速率测验、隐藏IP和改变IP等等。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1681874338851_whatismyipaddress.png",
        url: "https://whatismyipaddress.com/  ",
        category: "指纹检测",
        tags: ["IP地址查询", "IP设置", "黑名单检查", "电子邮件追踪", "速率测验", "隐藏IP", "改变IP"]
    },
    {
        name: "IPleak",
        description: "可以查询网站、个人的IP、DNS及位置等信息。可以将客户的IP地址输入到搜索框进行搜索，从而查询客户在哪个国家。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1681874400486_ipleak.png",
        url: "https://ipleak.net/",
        category: "指纹检测",
        tags: ["IP查询", "DNS查询", "位置信息", "国家查询", "网站查询", "个人信息"]
    },
    // 短信接码
    {
        name: "Sms-Activate",
        description: "$1起充，提供50多个国家的虚拟号码让您接收短信和来电",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493582Sms-Activate.png",
        url: "https://sms-activate.org/cn",
        category: "短信接码",
        tags: ["$1起充", "50多个国家", "虚拟号码", "接收短信", "来电"]
    },
    {
        name: "5sim.net",
        description: "有超级便宜的国家短信码",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/16787980005sim.net.png",
        url: "https://5sim.net",
        category: "短信接码",
        tags: ["超级便宜", "国家短信码", "接码服务"]
    },
    {
        name: "Sms-Man",
        description: "您可以轻松地以低廉的价格获得短信虚拟号码。",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798000Sms-man.png",
        url: "https://sms-man.com/",
        category: "短信接码",
        tags: ["低廉价格", "短信虚拟号码", "轻松获得"]
    },
    {
        name: "CheapSms",
        description: "便宜的在线SMS服务商",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798001CheapSms.png",
        url: "https://cheapsms.ru/cn",
        category: "短信接码",
        tags: ["便宜", "在线SMS", "服务商"]
    },
    {
        name: "Smspva",
        description: "起价0.1美元,也就是最便宜的70美分起",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798000Smspva.png",
        url: "https://www.smspva.com",
        category: "短信接码",
        tags: ["起价0.1美元", "70美分起", "最便宜"]
    },
    {
        name: "SMSHUB",
        description: "以最低价格进行帐户验证的虚拟号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680829792270_SMSHUB.jpg",
        url: "https://smshub.org/en/main",
        category: "短信接码",
        tags: ["最低价格", "帐户验证", "虚拟号码"]
    },
    {
        name: "OnlineSIM",
        description: "接收消息、确认和短信激活到临时和一次性号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680830074779_OnlineSIM.png",
        url: "https://onlinesim.io/zh",
        category: "短信接码",
        tags: ["接收消息", "确认", "短信激活", "临时号码", "一次性号码"]
    },
    {
        name: "Receive SMS",
        description: "通过保留你的真实电话号码来保护你的隐私",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680830507985_Receive%20SMS.jpg",
        url: "https://receive-sms.com/",
        category: "短信接码",
        tags: ["保护隐私", "真实电话号码", "隐私保护"]
    },
    {
        name: "Sonetel",
        description: "企业家的本地电话号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680830687770_Sonetel.jpg",
        url: "https://sonetel.com/zh-hans/",
        category: "短信接码",
        tags: ["企业家", "本地电话号码", "商业服务"]
    },
    {
        name: "VAK SMS",
        description: "始终可用的临时、一次性虚拟号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680830763369_VAK%20SMS.png",
        url: "https://vak-sms.com/",
        category: "短信接码",
        tags: ["始终可用", "临时号码", "一次性", "虚拟号码"]
    },
    {
        name: "Sms-Pro",
        description: "用户现在可以阻止垃圾短信、设置自动回复、进行短信转发",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798001Sms-Pro.png",
        url: "https://sms-pro.cn",
        category: "短信接码",
        tags: ["阻止垃圾短信", "自动回复", "短信转发", "高级功能"]
    },
    {
        name: "SmsPlaza",
        description: "使用临时号码在线接收短信，用我们的临时号码绕过任何在线短信验证",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680830864824_SmsPlaza.png",
        url: "https://smsplaza.io/",
        category: "短信接码",
        tags: ["临时号码", "在线接收短信", "绕过验证", "短信验证"]
    },
    {
        name: "Sms Bus",
        description: "为Telegram, WhatsApp, TikTok, Google, Yahoo, AOL, Microsoft, Vinted等批量注册账户",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680831151332_Sms%20Bus.jpg",
        url: "https://sms-bus.com/",
        category: "短信接码",
        tags: ["Telegram", "WhatsApp", "TikTok", "Google", "Yahoo", "AOL", "Microsoft", "Vinted", "批量注册"]
    },
    {
        name: "Richpva",
        description: "验证码接收平台，允许您在美国、英国、印度、德国、澳大利亚等多个国家购买真实的SIM卡号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680831303572_Richpva.jpg",
        url: "https://richpva.com/?lang=1",
        category: "短信接码",
        tags: ["验证码接收", "美国", "英国", "印度", "德国", "澳大利亚", "真实SIM卡"]
    },
    {
        name: "SMSPool",
        description: "网络上 最便宜、最快的在线短信验证",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680831494983_SMSPool.jpg",
        url: "https://www.smspool.net/",
        category: "短信接码",
        tags: ["最便宜", "最快", "在线短信验证", "网络服务"]
    },
    {
        name: "GetSMS.ONLINE",
        description: "GetSMS.ONLINE在线接收短信，短信激活",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798000GetSMS.ONLINE.png",
        url: "https://getsms.online/en/",
        category: "短信接码",
        tags: ["在线接收短信", "短信激活", "GetSMS"]
    },
    {
        name: "1s2u",
        description: "通过遍布全球的分布式 SMSC 提供快速可靠的 SMS 流量",
        iconUrl: "https://img.amz123.com/upload/diy_page/dl/202303/16787819111s2u.png",
        url: "https://1s2u.com/",
        category: "短信接码",
        tags: ["全球分布式", "SMSC", "快速可靠", "SMS流量"]
    },
    {
        name: "Tiger SMS",
        description: "世界上最抢手的接码平台，每天10万多新增！",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493579Tiger%20SMS.png",
        url: "https://tiger-sms.com/cn",
        category: "短信接码",
        tags: ["最抢手", "接码平台", "每天10万多新增", "热门平台"]
    },
    {
        name: "火狐狸平台",
        description: "提供一次性使用电话号码在几分钟内获取验证码。 支持各种服务Discord、Tinder、Gmail、Telegram、WhatsApp、Line、Nike、OpenAi",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493581Firefox.fun.jpg",
        url: "https://firefox.fun/",
        category: "短信接码",
        tags: ["一次性使用", "几分钟内", "验证码", "Discord", "Tinder", "Gmail", "Telegram", "WhatsApp", "Line", "Nike", "OpenAi"]
    },
    {
        name: "Textverified",
        description: "绕过语音，短信和文本验证",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680831801700_Textverified.jpg",
        url: "https://www.textverified.com/",
        category: "短信接码",
        tags: ["绕过验证", "语音", "短信", "文本验证"]
    },
    {
        name: "Google Voice",
        description: "谷歌虚拟手机号，可永久使用",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798000Google%20Voice.png",
        url: "https://voice.google.com",
        category: "短信接码",
        tags: ["谷歌", "虚拟手机号", "永久使用", "Google服务"]
    },
    {
        name: "Grizzly SMS",
        description: "用来接码的虚拟手机号的价格很低，所有供应的手机号都有效并能够接码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680832074713_Grizzly%20SMS.jpg",
        url: "https://grizzlysms.com/cn",
        category: "短信接码",
        tags: ["价格很低", "虚拟手机号", "有效", "接码"]
    },
    {
        name: "Uomsg",
        description: "接码平台，接码网站，接码APP，虚拟手机号",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680832385558_Uomsg1.jpg",
        url: "http://www.uomsg.com/appweb/signUp.html?inviter=10l9qrgj",
        category: "短信接码",
        tags: ["接码平台", "接码网站", "接码APP", "虚拟手机号"]
    },
    {
        name: "SMSCodes",
        description: "提供真实的SIM卡号供您创建和验证您的帐户",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680832585329_SMSCodes.png",
        url: "https://www.smscodes.io/",
        category: "短信接码",
        tags: ["真实SIM卡", "创建帐户", "验证帐户", "SIM卡号"]
    },
    {
        name: "SMS REG",
        description: "接收 SMS 消息的激活服务。提供用于短信或租用个人虚拟电话号码的单个号码。",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680832926389_SMS%20REG.jpg",
        url: "https://sms-reg.com/",
        category: "短信接码",
        tags: ["SMS消息", "激活服务", "个人虚拟电话号码", "单个号码"]
    },
    {
        name: "SMS Acktiwator",
        description: "虚拟短信号码激活服务，以最低的价格接收短信到虚拟号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680833186034_SMS%20Acktiwator.png",
        url: "https://sms-acktiwator.ru/",
        category: "短信接码",
        tags: ["虚拟短信号码", "激活服务", "最低价格", "接收短信", "虚拟号码"]
    },
    // 免费接码
    {
        name: "Receive-sms-online",
        description: "免费在线接收短信，无需注册，无需使用您的个人电话号码。",
        iconUrl: "https://img.amz123.com/upload/diy_page/tt1/202303/1679493586Receive-sms-online.png",
        url: "http://receive-sms-online.info/",
        category: "免费接码",
        tags: ["免费", "在线接收短信", "无需注册", "无需个人电话号码"]
    },
    {
        name: "Rreceive-SMS",
        description: "在线免费接收短信有200多个免费的临时电话号码或虚拟电话号码",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798002Rreceive-SMS.png",
        url: "https://receive-sms-free.cc",
        category: "免费接码",
        tags: ["在线免费", "200多个", "临时电话号码", "虚拟电话号码"]
    },
    {
        name: "云短信",
        description: "免费接短信，在线接收短信验证码",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798002%E4%BA%91%E7%9F%AD%E4%BF%A1.png",
        url: "https://yunduanxin.net",
        category: "免费接码",
        tags: ["免费接短信", "在线接收", "短信验证码", "云短信"]
    },
    {
        name: "Sms-online",
        description: "免费在线接收短信，无需注册，甚至无需拥有电话",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798001Sms-online.png",
        url: "https://sms-online.co/receive-free-sms",
        category: "免费接码",
        tags: ["免费在线", "无需注册", "无需拥有电话", "接收短信"]
    },
    {
        name: "Us-Phone-Number",
        description: "在线免费接收短信，即时在线接收短信",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798001Us-Phone-Number.png",
        url: "https://us-phone-number.com",
        category: "免费接码",
        tags: ["在线免费", "即时接收", "美国电话号码", "接收短信"]
    },
    {
        name: "Lothelper",
        description: "提供免费手机号和免费短信验证码服务的免费接码平台",
        iconUrl: "https://img.amz123.com/upload/diy_page/aff/202303/1678798001Lothelper.png",
        url: "https://www.lothelper.com/cn",
        category: "免费接码",
        tags: ["免费手机号", "免费短信验证码", "免费接码平台", "Lothelper"]
    },
    {
        name: "RVSO",
        description: "免费在线接收短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680833615877_RVSO.jpg",
        url: "https://www.rvso.com/",
        category: "免费接码",
        tags: ["免费在线", "接收短信", "RVSO"]
    },
    {
        name: "Receive SMS Online",
        description: "在线接收短信，语音通话验证",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680833936473_Receive%20SMS%20Online.jpg",
        url: "https://sms.sellaite.com/",
        category: "免费接码",
        tags: ["在线接收短信", "语音通话验证", "SMS Online"]
    },
    {
        name: "Receive a Sms",
        description: "保持你的个人号码的私密性，在网上或通过电子邮件接收你的信息",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680834286696_Receive%20a%20Sms.jpg",
        url: "https://www.receiveasms.com/",
        category: "免费接码",
        tags: ["个人号码私密性", "网上接收", "电子邮件接收", "信息接收"]
    },
    {
        name: "Receive-Sms.CC",
        description: "在线接收短信，免费接收短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680834784144_Receive-Sms.CC.jpg",
        url: "https://receive-sms.cc/",
        category: "免费接码",
        tags: ["在线接收短信", "免费接收短信", "SMS.CC"]
    },
    {
        name: "GetFreeSMSNumber",
        description: "获取免费短信，在线即时接收短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680835432283_GetFreeSMSNumber.jpg",
        url: "https://getfreesmsnumber.com/",
        category: "免费接码",
        tags: ["获取免费短信", "在线即时接收", "FreeSMSNumber"]
    },
    {
        name: "ReceiveSMS.org",
        description: "免费在线接收短信，可以使用任意数量的电话号码，并且可以接收任意数量的短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680836553405_ReceiveSMS.org.jpg",
        url: "https://receivesms.org/",
        category: "免费接码",
        tags: ["免费在线", "任意数量电话号码", "任意数量短信", "ReceiveSMS.org"]
    },
    {
        name: "Free Online Phone",
        description: "免费在线电话",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680837089156_Free%20Online%20Phone.jpg",
        url: "https://www.freeonlinephone.org/",
        category: "免费接码",
        tags: ["免费在线电话", "电话服务", "Free Online Phone"]
    },
    {
        name: "Online-sms.org",
        description: "免费在线接收短信到一个新的临时电话号码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680837399908_Online-sms.org.jpg",
        url: "https://online-sms.org/zh",
        category: "免费接码",
        tags: ["免费在线", "临时电话号码", "接收短信", "Online-sms.org"]
    },
    {
        name: "ReceiveFreeSMS",
        description: "免费在线接收短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680837626086_ReceiveFreeSMS.jpg",
        url: "https://receivefreesms.net/",
        category: "免费接码",
        tags: ["免费在线", "接收短信", "ReceiveFreeSMS"]
    },
    {
        name: "ReceiveSMSS.com",
        description: "接收短信的免费服务和在线语音邮件，无需注册",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680837902145_ReceiveSMSS.com.jpg",
        url: "https://receive-smss.com/",
        category: "免费接码",
        tags: ["免费服务", "在线语音邮件", "无需注册", "ReceiveSMSS.com"]
    },
    {
        name: "ReceiveSMS",
        description: "免费电话号码，让每个人都可以在线接收短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680837997933_ReceiveSMS.jpg",
        url: "https://receivesms.co/",
        category: "免费接码",
        tags: ["免费电话号码", "每个人都可以", "在线接收短信", "ReceiveSMS"]
    },
    {
        name: "Free-SMS-Receive.com",
        description: "一项免费在线接收短信服务，用于在线接收手机短信验证码",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680838653319_1680838260322.png",
        url: "https://www.free-sms-receive.com/",
        category: "免费接码",
        tags: ["免费在线", "手机短信验证码", "接收短信服务", "Free-SMS-Receive.com"]
    },
    {
        name: "SMS-Receive.net",
        description: "提供公共电话号码的免费服务，您可以在各种社交网站或论坛上在线接收短信",
        iconUrl: "https://img.amz123.com/image_cloud/202304/1680838113104_SMS-Receive.net.jpg",
        url: "https://sms-receive.net/",
        category: "免费接码",
        tags: ["公共电话号码", "免费服务", "社交网站", "论坛", "在线接收短信", "SMS-Receive.net"]
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

];