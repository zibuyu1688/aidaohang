// 网站数据库
const websitesDatabase = [
    {
        "name": "ChatGPT",
        "description": "OpenAI开发的强大AI对话助手，可以回答问题、写作、编程等",
        "url": "https://chat.openai.com",
        "category": "AI聊天助手",
        "tags": ["AI","对话","聊天","写作","编程"]
    },
    {
        "name": "Claude",
        "description": "Anthropic开发的AI助手，擅长长文本分析和深度对话",
        "url": "https://learning.google.com",
        "category": "AI聊天助手",
        "tags": ["智能"]
    },
    {
        "name": "To Teach AI",
        "description": "在人工智能的帮助下，在几秒...",
        "url": "https://www.to-teach.ai",
        "category": "AI教育与学习",
        "tags": ["AI","智能"]
    },
    {
        "name": "明思灵境",
        "description": "结合了最新AI和自然语言处理技术的智慧教育平台，它通过i+1教学模式、数字人AI助教和实时语音互动等功能",
        "url": "https://www.meansedu.com",
        "category": "AI教育与学习",
        "tags": ["AI"]
    },
    {
        "name": "波波熊学伴",
        "description": "波波熊学伴作为一款AI学习辅助工具，通过智能化的方式帮助孩子更有效地学习和理解新知识。它不仅激发孩子的好奇心和自驱力，还为家长提供了一个安心的解决方案，以支持孩子在AI时代的学习需求。",
        "url": "https://bearbobo.com",
        "category": "AI教育与学习",
        "tags": ["AI","工具","智能","辅助"]
    },
    {
        "name": "AI面试高分训练",
        "description": "AI面试一对一训练，轻轻松松找工作。",
        "url": "https://www.aigfms.com",
        "category": "AI职业发展",
        "tags": ["AI"]
    },
    {
        "name": "善利AI高考备考系统",
        "description": "善利AI高考备考系统的独特之处在于其智能化教学模式，系统通过运用先进的人工智能算法，能够根据学生的学习进度和能力水平进行个性化的学习指导，当学生在解答数学题目时遇到困难，系统会智能分析错误的根源，并提供相应的解题建议，这种个性化的辅导方式有利于帮助学生充分理解和掌握数学知识。",
        "url": "https://www.sunrayai.cn",
        "category": "AI教育与学习",
        "tags": ["AI","智能","分析"]
    },
    {
        "name": "AI教师助手",
        "description": "AI教师助手是北京外研在线数字科技有限公司推出的一款多功能教学辅助工具，它通过智能化技术帮助教师提高教学效率，同时也为学生提供个性化的学习体验。",
        "url": "https://aigc.unipus.cn",
        "category": "AI聊天助手",
        "tags": ["AI","工具","效率","智能","助手","在线","辅助"]
    },
    {
        "name": "英语教练",
        "description": "English Coach 是一个个性化的英语学习辅导应用，旨在帮助用户提高英语能力。",
        "url": "https://www.englishcoach.ai",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "识典古籍",
        "description": "识典古籍是抖音公益与北大合作共建的古籍阅读平台。致力于为用户提供免费公开、稳定、快速、方便的...",
        "url": "https://www.shidianguji.com",
        "category": "AI文化传承",
        "tags": ["阅读"]
    },
    {
        "name": "Talk To Books",
        "description": "一种探索想法和发现书籍的新...",
        "url": "https://books.google.com",
        "category": "AI知识工具",
        "tags": []
    },
    {
        "name": "Lablab.ai",
        "description": "创客社区，使用最先进的现代...",
        "url": "https://lablab.ai",
        "category": "AI开发社区",
        "tags": []
    },
    {
        "name": "CheggMate",
        "description": "CheggMate作为一个基于人工智能的学习伴侣，通过结合GPT-4的智能技术和Chegg丰富的知识库，为学生提供了一个高效、个性化的学习辅导平台。",
        "url": "https://www.chegg.com",
        "category": "AI教育与学习",
        "tags": ["智能"]
    },
    {
        "name": "Liner",
        "description": "Liner是一个强大的AI工具，它通过集成到用户的工作环境中，提供了一系列功能，以提高工作效率和学习速度。",
        "url": "https://getliner.com",
        "category": "AI教育与学习",
        "tags": ["AI","工具","效率"]
    },
    {
        "name": "Khanmigo",
        "description": "Khanmigo是由知名非营利教育组织Khan Academy开发的人工智能个人辅导和教学助手。它提供引人入胜、主题相关且有效的学习体验，并且在设计上将安全性和学习效果作为首要考虑。",
        "url": "https://www.khanmigo.ai",
        "category": "AI聊天助手",
        "tags": ["智能","助手","设计"]
    },
    {
        "name": "DataCamp",
        "description": "一个全球性的在线教育平台，服务于超过1500万的学习者，提供从基础到高级的数据科学和分析技能培训",
        "url": "https://www.datacamp.com",
        "category": "AI教育与学习",
        "tags": ["分析","在线"]
    },
    {
        "name": "WolframAlpha",
        "description": "一个强大的计算知识引擎，它通过自然语言处理和广泛的数据知识库，为用户提供快速、准确的计算和信息查询服务",
        "url": "https://zh.wolframalpha.com",
        "category": "AI知识工具",
        "tags": []
    },
    {
        "name": "Q-Chat",
        "description": "QChat 是一个创新的AI辅导工具，通过个性化的学习体验帮助学习者更有效地掌握知识。它利用人工智能技术提供智能问答、学习计划定制、进度跟踪和资源推荐等功能，使学习过程更加高效和有趣。",
        "url": "https://quizlet.com",
        "category": "AI聊天助手",
        "tags": ["AI","工具","智能"]
    },
    {
        "name": "Study Buddy",
        "description": "Study Buddy 旨在帮助学生提高学习效率，通过即时提供答案和解释，支持他们在学习过程中遇到的各种挑战。",
        "url": "https://studybuddy.gg",
        "category": "AI教育与学习",
        "tags": ["效率"]
    },
    {
        "name": "Homeworkifyy",
        "description": "作业轻松完成是一个利用人工智能技术的在线学习辅助工具，旨在帮助学生高效地完成作业。",
        "url": "https://homeworkifyy.net",
        "category": "AI教育与学习",
        "tags": ["工具","智能","在线","辅助"]
    },
    {
        "name": "Teacher AI",
        "description": "Teacher AI 是一个创新的在线语言学习平台，它利用人工智能技术提供个性化的语言学习体验。",
        "url": "https://yourteacher.ai",
        "category": "AI教育与学习",
        "tags": ["AI","智能","在线"]
    },
    {
        "name": "MagicSchool.ai",
        "description": "MagicSchool.ai 是一个面向教师和教育工作者的在线平台，利用人工智能技术来提升教学效率和质量。它被设计成一个教师的魔法助手，帮助教师节省时间和精力，使他们能够更加专注于教学本身。",
        "url": "https://www.magicschool.ai",
        "category": "AI教育与学习",
        "tags": ["效率","智能","助手","设计","在线"]
    },
    {
        "name": "智慧手语",
        "description": "智慧手语是一个基于高质量多类型手语语料库、全链路高精度手语翻译算法及跨模态拟人生成技术的平台。该平台致力于打造高逼真的手语播报数字人生成模型，目的是为了使听障人群能够无障碍地共享世界。",
        "url": "https://vip.aminer.cn",
        "category": "AI无障碍辅助",
        "tags": ["翻译"]
    },
    {
        "name": "在问",
        "description": "在问|全能又免费的人工智能网站。宗旨：让知识无界,智能触手可及",
        "url": "https://www.zaiwen.top",
        "category": "AI问答工具",
        "tags": ["智能"]
    },
    {
        "name": "Be My Eyes虚拟志愿者",
        "description": "可以替代或补充人类志愿者的工作",
        "url": "https://www.bemyeyes.com",
        "category": "AI无障碍辅助",
        "tags": []
    },
    {
        "name": "稿定抠图",
        "description": "智能AI抠图工具，支持批量处理",
        "url": "https://www.gaoding.com",
        "category": "AI图像工具",
        "tags": ["抠图","去背景","批量处理","AI"]
    },
    {
        "name": "Cleanup.pictures",
        "description": "AI智能去除图片中不需要的物体和水印",
        "url": "https://cleanup.pictures",
        "category": "AI图像工具",
        "tags": ["去水印","物体擦除","图片修复","AI"]
    },
    {
        "name": "Bigjpg",
        "description": "AI图片无损放大工具，提升图片分辨率",
        "url": "https://bigjpg.com",
        "category": "AI图像工具",
        "tags": ["图片放大","无损","AI","高清"]
    },
    {
        "name": "Photopea",
        "description": "在线版Photoshop，功能强大的图片编辑器",
        "url": "https://www.photopea.com",
        "category": "AI图像工具",
        "tags": ["图片编辑","PS","在线编辑"]
    },
    {
        "name": "Leonardo AI",
        "description": "专业AI图像生成工具，游戏和设计资产创作",
        "url": "https://leonardo.ai",
        "category": "AI图像工具",
        "tags": ["AI","绘画","游戏设计","图片生成"]
    },
    {
        "name": "Ideogram",
        "description": "AI图像生成，特别擅长文字渲染",
        "url": "https://ideogram.ai",
        "category": "AI图像工具",
        "tags": ["AI","绘画","文字生成","海报"]
    },
    {
        "name": "Flux AI",
        "description": "Black Forest Labs开发的新一代AI图像生成模型",
        "url": "https://flux1.ai",
        "category": "AI图像工具",
        "tags": ["AI","绘画","图片生成","开源"]
    },
    {
        "name": "剪映",
        "description": "抖音官方视频剪辑工具，AI智能剪辑",
        "url": "https://www.capcut.cn",
        "category": "AI视频工具",
        "tags": ["视频剪辑","AI","抖音","短视频"]
    },
    {
        "name": "Runway",
        "description": "AI视频编辑平台，文字生成视频",
        "url": "https://runwayml.com",
        "category": "AI视频工具",
        "tags": ["AI","视频生成","视频编辑","创作"]
    },
    {
        "name": "Sora",
        "description": "OpenAI文生视频模型，AI视频生成",
        "url": "https://openai.com",
        "category": "AI视频工具",
        "tags": ["AI","视频生成","OpenAI","文生视频"]
    },
    {
        "name": "必剪",
        "description": "B站官方剪辑工具，智能字幕识别",
        "url": "https://bcut.bilibili.cn",
        "category": "AI视频工具",
        "tags": ["视频剪辑","字幕","B站"]
    },
    {
        "name": "HeyGen",
        "description": "AI数字人视频生成平台，多语言配音",
        "url": "https://www.heygen.com",
        "category": "AI视频工具",
        "tags": ["AI","数字人","视频生成","配音"]
    },
    {
        "name": "D-ID",
        "description": "AI数字人视频制作，照片说话",
        "url": "https://www.d-id.com",
        "category": "AI视频工具",
        "tags": ["AI","数字人","视频生成","照片说话"]
    },
    {
        "name": "Pika Labs",
        "description": "AI视频生成和编辑工具",
        "url": "https://pika.art",
        "category": "AI视频工具",
        "tags": ["AI","视频生成","视频编辑"]
    },
    {
        "name": "Suno AI",
        "description": "AI音乐生成工具，文字生成音乐",
        "url": "https://suno.ai",
        "category": "AI音频工具",
        "tags": ["AI","音乐生成","作曲","创作"]
    },
    {
        "name": "讯飞语音",
        "description": "科大讯飞语音识别和合成平台",
        "url": "https://www.xfyun.cn",
        "category": "AI音频工具",
        "tags": ["AI","语音识别","语音合成","讯飞"]
    },
    {
        "name": "Eleven Labs",
        "description": "AI语音克隆和文本转语音，支持多语言",
        "url": "https://elevenlabs.io",
        "category": "AI音频工具",
        "tags": ["AI","语音克隆","TTS","配音"]
    },
    {
        "name": "Murf AI",
        "description": "AI语音生成器，专业配音工具",
        "url": "https://murf.ai",
        "category": "AI音频工具",
        "tags": ["AI","配音","TTS","语音生成"]
    },
    {
        "name": "Udio",
        "description": "AI音乐生成工具，创作原创音乐",
        "url": "https://www.udio.com",
        "category": "AI音频工具",
        "tags": ["AI","音乐生成","作曲","原创"]
    },
    {
        "name": "GitHub Copilot",
        "description": "GitHub AI代码助手，智能代码补全",
        "url": "https://github.com",
        "category": "AI编程工具",
        "tags": ["AI","编程","代码","GitHub","辅助"]
    },
    {
        "name": "Cursor",
        "description": "AI驱动的代码编辑器，智能编程助手",
        "url": "https://cursor.sh",
        "category": "AI编程工具",
        "tags": ["AI","编程","IDE","代码编辑"]
    },
    {
        "name": "通义灵码",
        "description": "阿里云AI编程助手",
        "url": "https://tongyi.aliyun.com",
        "category": "AI编程工具",
        "tags": ["AI","编程","代码","阿里"]
    },
    {
        "name": "Replit AI",
        "description": "在线AI编程平台，智能代码生成",
        "url": "https://replit.com",
        "category": "AI编程工具",
        "tags": ["AI","编程","在线IDE","代码生成"]
    },
    {
        "name": "Codeium",
        "description": "免费AI代码助手，支持多种IDE",
        "url": "https://codeium.com",
        "category": "AI编程工具",
        "tags": ["AI","编程","代码补全","免费"]
    },
    {
        "name": "Tabnine",
        "description": "AI代码补全工具，提升编程效率",
        "url": "https://www.tabnine.com",
        "category": "AI编程工具",
        "tags": ["AI","编程","代码补全","IDE插件"]
    },
    {
        "name": "Bolt.new",
        "description": "AI全栈开发工具，快速构建Web应用",
        "url": "https://bolt.new",
        "category": "AI编程工具",
        "tags": ["AI","全栈","Web开发","快速开发"]
    },
    {
        "name": "Canva AI",
        "description": "AI设计工具，智能设计模板生成",
        "url": "https://www.canva.com",
        "category": "AI设计工具",
        "tags": ["AI","设计","海报","模板"]
    },
    {
        "name": "Figma AI",
        "description": "专业UI设计工具，AI辅助设计",
        "url": "https://www.figma.com",
        "category": "AI设计工具",
        "tags": ["AI","UI设计","原型","协作"]
    },
    {
        "name": "即时设计",
        "description": "国产UI设计工具，AI设计助手",
        "url": "https://js.design",
        "category": "AI设计工具",
        "tags": ["AI","UI设计","原型","协作","国产"]
    },
    {
        "name": "WPS AI",
        "description": "WPS内置AI助手，智能文档处理",
        "url": "https://www.wps.cn",
        "category": "AI办公工具",
        "tags": ["AI","办公","文档","WPS"]
    },
    {
        "name": "ChatPPT",
        "description": "AI生成PPT，一键创建演示文稿",
        "url": "https://chat-ppt.com",
        "category": "AI办公工具",
        "tags": ["AI","PPT","演示","自动生成"]
    },
    {
        "name": "ChatExcel",
        "description": "AI表格处理助手，自然语言操作Excel",
        "url": "https://chatexcel.com",
        "category": "AI办公工具",
        "tags": ["AI","Excel","表格","数据处理"]
    },
    {
        "name": "讯飞听见",
        "description": "AI会议转写工具，实时语音转文字",
        "url": "https://www.iflyrec.com",
        "category": "AI办公工具",
        "tags": ["AI","转写","会议","语音识别"]
    },
    {
        "name": "DeepL",
        "description": "AI翻译工具，翻译质量高",
        "url": "https://www.deepl.com",
        "category": "AI办公工具",
        "tags": ["AI","翻译","多语言","准确"]
    },
    {
        "name": "彩云小译",
        "description": "AI翻译工具，支持网页实时翻译",
        "url": "https://fanyi.caiyunapp.com",
        "category": "AI办公工具",
        "tags": ["AI","翻译","网页翻译","实时"]
    },
    {
        "name": "Perplexity",
        "description": "AI搜索引擎，智能问答和信息检索",
        "url": "https://www.perplexity.ai",
        "category": "AI搜索引擎",
        "tags": ["AI","搜索","问答","智能"]
    },
    {
        "name": "秘塔AI搜索",
        "description": "国产AI搜索引擎，无广告纯净搜索",
        "url": "https://metaso.cn",
        "category": "AI搜索引擎",
        "tags": ["AI","搜索","无广告","国产"]
    },
    {
        "name": "天工AI",
        "description": "昆仑万维AI搜索和对话",
        "url": "https://www.tiangong.cn",
        "category": "AI搜索引擎",
        "tags": ["AI","搜索","对话","国产"]
    },
    {
        "name": "百度",
        "description": "中国最大的搜索引擎",
        "url": "https://www.baidu.com",
        "category": "搜索引擎",
        "tags": ["搜索","百度","查找"]
    },
    {
        "name": "Google",
        "description": "全球最大的搜索引擎",
        "url": "https://www.google.com",
        "category": "搜索引擎",
        "tags": ["搜索","谷歌","Google"]
    },
    {
        "name": "必应",
        "description": "微软搜索引擎",
        "url": "https://www.bing.com",
        "category": "搜索引擎",
        "tags": ["搜索","必应","Bing"]
    },
    {
        "name": "搜狗搜索",
        "description": "搜狗搜索引擎，擅长微信搜索",
        "url": "https://www.sogou.com",
        "category": "搜索引擎",
        "tags": ["搜索","搜狗","微信"]
    },
    {
        "name": "石墨文档",
        "description": "国内领先的在线协作文档工具",
        "url": "https://shimo.im",
        "category": "AI办公工具",
        "tags": ["文档","协作","办公"]
    },
    {
        "name": "腾讯文档",
        "description": "腾讯出品的在线文档，支持多人协作",
        "url": "https://docs.qq.com",
        "category": "AI办公工具",
        "tags": ["文档","协作","办公","表格"]
    },
    {
        "name": "飞书文档",
        "description": "字节跳动的协作平台，功能强大",
        "url": "https://www.feishu.cn",
        "category": "AI办公工具",
        "tags": ["文档","协作","办公","团队"]
    },
    {
        "name": "钉钉",
        "description": "阿里巴巴企业协作平台，智能办公",
        "url": "https://www.dingtalk.com",
        "category": "AI办公工具",
        "tags": ["办公","协作","企业","钉钉"]
    },
    {
        "name": "企业微信",
        "description": "微信官方企业办公平台",
        "url": "https://work.weixin.qq.com",
        "category": "AI办公工具",
        "tags": ["办公","企业微信","协作","微信"]
    },
    {
        "name": "创客贴",
        "description": "国内优秀的平面设计工具，丰富模板",
        "url": "https://www.chuangkit.com",
        "category": "设计与创意",
        "tags": ["设计","海报","模板","作图"]
    },
    {
        "name": "Unsplash",
        "description": "高质量免费图片素材库",
        "url": "https://unsplash.com",
        "category": "设计与创意",
        "tags": ["图片","素材","免费","高清"]
    },
    {
        "name": "Pexels",
        "description": "免费高清图片和视频素材",
        "url": "https://www.pexels.com",
        "category": "设计与创意",
        "tags": ["图片","视频","素材","免费"]
    },
    {
        "name": "站酷",
        "description": "中国设计师互动平台，作品展示与交流",
        "url": "https://www.zcool.com.cn",
        "category": "设计与创意",
        "tags": ["设计","作品","灵感","素材"]
    },
    {
        "name": "Dribbble",
        "description": "全球设计师作品展示平台，寻找灵感",
        "url": "https://dribbble.com",
        "category": "设计与创意",
        "tags": ["设计","灵感","UI","作品"]
    },
    {
        "name": "Behance",
        "description": "Adobe旗下创意作品展示平台",
        "url": "https://www.behance.net",
        "category": "设计与创意",
        "tags": ["设计","作品","创意","Adobe"]
    },
    {
        "name": "花瓣网",
        "description": "图片采集工具，设计师灵感库",
        "url": "https://huaban.com",
        "category": "设计与创意",
        "tags": ["设计","采集","灵感","素材"]
    },
    {
        "name": "Stack Overflow",
        "description": "程序员问答社区",
        "url": "https://stackoverflow.com",
        "category": "程序开发",
        "tags": ["编程","问答","开发"]
    },
    {
        "name": "CodePen",
        "description": "在线前端代码编辑器和社区",
        "url": "https://codepen.io",
        "category": "AI编程工具",
        "tags": ["前端","代码","在线编辑"]
    },
    {
        "name": "Gitee",
        "description": "国内代码托管平台，访问速度快",
        "url": "https://gitee.com",
        "category": "AI编程工具",
        "tags": ["代码","Git","开源","国内"]
    },
    {
        "name": "掘金",
        "description": "技术社区，开发者成长平台",
        "url": "https://juejin.cn",
        "category": "AI编程工具",
        "tags": ["技术","社区","文章","前端"]
    },
    {
        "name": "CSDN",
        "description": "中国最大的IT技术社区",
        "url": "https://www.csdn.net",
        "category": "程序开发",
        "tags": ["技术","博客","编程","问答"]
    },
    {
        "name": "LeetCode",
        "description": "算法题库，程序员刷题平台",
        "url": "https://leetcode.cn",
        "category": "AI编程工具",
        "tags": ["算法","刷题","面试","编程"]
    },
    {
        "name": "人人都是产品经理",
        "description": "产品经理学习社区，行业资讯与经验分享",
        "url": "https://www.woshipm.com",
        "category": "AI教育与学习",
        "tags": ["产品","运营","社区","学习"]
    },
    {
        "name": "36氪",
        "description": "科技创投媒体，关注创业与创新",
        "url": "https://36kr.com",
        "category": "产品与运营",
        "tags": ["科技","创业","资讯","投资"]
    },
    {
        "name": "虎嗅",
        "description": "商业资讯平台，深度科技报道",
        "url": "https://www.huxiu.com",
        "category": "产品与运营",
        "tags": ["商业","科技","资讯","分析"]
    },
    {
        "name": "Product Hunt",
        "description": "发现全球最新产品和工具",
        "url": "https://www.producthunt.com",
        "category": "产品与运营",
        "tags": ["产品","工具","发现","国际"]
    },
    {
        "name": "增长黑客",
        "description": "用户增长策略与案例分享",
        "url": "https://growthhackers.com",
        "category": "产品与运营",
        "tags": ["增长","运营","营销","策略"]
    },
    {
        "name": "Coursera",
        "description": "全球顶尖大学在线课程平台",
        "url": "https://www.coursera.org",
        "category": "AI教育与学习",
        "tags": ["学习","课程","教育"]
    },
    {
        "name": "B站",
        "description": "学习娱乐两不误的视频平台",
        "url": "https://www.bilibili.com",
        "category": "AI教育与学习",
        "tags": ["视频","学习","教程","娱乐"]
    },
    {
        "name": "知乎",
        "description": "中文互联网高质量问答社区",
        "url": "https://www.zhihu.com",
        "category": "学习与知识",
        "tags": ["问答","知识","社区","学习"]
    },
    {
        "name": "维基百科",
        "description": "自由的百科全书，全球知识库",
        "url": "https://zh.wikipedia.org",
        "category": "学习与知识",
        "tags": ["百科","知识","查询","学习"]
    },
    {
        "name": "中国大学MOOC",
        "description": "国内优质大学课程在线学习平台",
        "url": "https://www.icourse163.org",
        "category": "AI教育与学习",
        "tags": ["课程","大学","MOOC","学习"]
    },
    {
        "name": "得到",
        "description": "罗振宇创办的知识服务平台",
        "url": "https://www.igetget.com",
        "category": "学习与知识",
        "tags": ["知识","课程","听书","学习"]
    },
    {
        "name": "网易公开课",
        "description": "免费的国内外名校公开课",
        "url": "https://open.163.com",
        "category": "学习与知识",
        "tags": ["公开课","大学","免费","学习"]
    },
    {
        "name": "豆瓣",
        "description": "书影音记录与评分平台",
        "url": "https://www.douban.com",
        "category": "学习与知识",
        "tags": ["读书","电影","音乐","评分"]
    },
    {
        "name": "Notion",
        "description": "全能笔记和协作工具",
        "url": "https://www.notion.so",
        "category": "效率工具",
        "tags": ["笔记","知识管理","协作"]
    },
    {
        "name": "语雀",
        "description": "阿里巴巴出品的文档与知识库工具",
        "url": "https://www.yuque.com",
        "category": "AI办公工具",
        "tags": ["文档","知识库","笔记"]
    },
    {
        "name": "PDF.ai",
        "description": "AI驱动的PDF阅读和对话工具",
        "url": "https://pdf.ai",
        "category": "AI聊天助手",
        "tags": ["PDF","AI","文档分析"]
    },
    {
        "name": "淘宝",
        "description": "中国最大的网购平台，万能的淘宝",
        "url": "https://www.taobao.com",
        "category": "电商工具",
        "tags": ["淘宝","购物","网购","电商"]
    },
    {
        "name": "天猫",
        "description": "阿里巴巴B2C平台，品牌商城",
        "url": "https://www.tmall.com",
        "category": "电商工具",
        "tags": ["天猫","购物","品牌","电商"]
    },
    {
        "name": "京东",
        "description": "综合性购物平台，自营物流快",
        "url": "https://www.jd.com",
        "category": "电商工具",
        "tags": ["京东","购物","电商","自营"]
    },
    {
        "name": "Amazon美国站",
        "description": "亚马逊美国官网购物平台，北美最大电商平台",
        "url": "https://www.amazon.com",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","美国","购物","电商","Amazon","北美"]
    },
    {
        "name": "Amazon英国站",
        "description": "亚马逊英国官网，欧洲主要电商平台",
        "url": "https://www.amazon.co.uk",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","英国","欧洲","购物","Amazon"]
    },
    {
        "name": "Amazon日本站",
        "description": "亚马逊日本官网，亚洲主要电商平台",
        "url": "https://www.amazon.co.jp",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","日本","亚洲","购物","Amazon"]
    },
    {
        "name": "Amazon德国站",
        "description": "亚马逊德国官网，欧洲主要电商平台",
        "url": "https://www.amazon.de",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","德国","欧洲","购物","Amazon"]
    },
    {
        "name": "Amazon法国站",
        "description": "亚马逊法国官网，欧洲主要电商平台",
        "url": "https://www.amazon.fr",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","法国","欧洲","购物","Amazon"]
    },
    {
        "name": "Amazon加拿大站",
        "description": "亚马逊加拿大官网，北美电商平台",
        "url": "https://www.amazon.ca",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","加拿大","北美","购物","Amazon"]
    },
    {
        "name": "亚马逊全球开店",
        "description": "亚马逊跨境电商卖家平台，中国卖家进入全球市场",
        "url": "https://gs.amazon.cn",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","卖家","跨境电商","全球开店","Amazon"]
    },
    {
        "name": "Amazon卖家中央",
        "description": "亚马逊官方卖家后台，管理产品、订单和店铺",
        "url": "https://sellercentral.amazon.com",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","卖家","后台","店铺","Amazon"]
    },
    {
        "name": "Amazon品牌备案",
        "description": "亚马逊品牌备案和商标保护平台",
        "url": "https://brandservices.amazon.com",
        "category": "亚马逊官方平台",
        "tags": ["亚马逊","品牌","备案","商标","Amazon"]
    },
    {
        "name": "Jungle Scout",
        "description": "亚马逊选品神器，销量预估和产品研究工具",
        "url": "https://www.junglescout.com",
        "category": "亚马逊卖家工具",
        "tags": ["亚马逊","选品","数据分析","卖家工具","Amazon"]
    },
    {
        "name": "Helium 10",
        "description": "亚马逊卖家全能工具，选品、关键词、运营一体化",
        "url": "https://www.helium10.com",
        "category": "亚马逊卖家工具",
        "tags": ["亚马逊","选品","关键词","运营","Amazon"]
    },
    {
        "name": "卖家精灵",
        "description": "亚马逊大数据选品工具，中文界面友好",
        "url": "https://www.sellersprite.com",
        "category": "亚马逊卖家工具",
        "tags": ["亚马逊","选品","数据","中文","Amazon"]
    },
    {
        "name": "AMZScout",
        "description": "亚马逊产品研究和销量追踪工具",
        "url": "https://amzscout.net",
        "category": "亚马逊卖家工具",
        "tags": ["亚马逊","选品","销量","追踪","Amazon"]
    },
    {
        "name": "AMZ520",
        "description": "亚马逊工具导航网站，汇集各类卖家工具",
        "url": "https://amz520.com",
        "category": "亚马逊卖家工具",
        "tags": ["亚马逊","导航","工具","Amazon"]
    },
    {
        "name": "Amalyze",
        "description": "亚马逊竞品分析和关键词研究工具",
        "url": "https://www.amalyze.com",
        "category": "亚马逊卖家工具",
        "tags": ["亚马逊","竞品","关键词","分析","Amazon"]
    },
    {
        "name": "速卖通",
        "description": "阿里巴巴旗下跨境电商平台，面向全球市场",
        "url": "https://www.aliexpress.com",
        "category": "电商工具",
        "tags": ["速卖通","跨境电商","电商平台","阿里巴巴","全球开店"]
    },
    {
        "name": "Shopify",
        "description": "全球领先的独立站建站平台，轻松搭建电商网站",
        "url": "https://www.shopify.com",
        "category": "电商工具",
        "tags": ["独立站","建站","电商平台","Shopify","跨境电商"]
    },
    {
        "name": "1688",
        "description": "阿里巴巴B2B批发平台，一件代发货源",
        "url": "https://www.1688.com",
        "category": "电商工具",
        "tags": ["批发","货源","1688","阿里巴巴","一件代发"]
    },
    {
        "name": "Wish商户平台",
        "description": "移动电商平台Wish卖家后台",
        "url": "https://merchant.wish.com",
        "category": "电商工具",
        "tags": ["Wish","跨境电商","移动电商","电商平台"]
    },
    {
        "name": "eBay",
        "description": "全球知名在线拍卖和购物网站",
        "url": "https://www.ebay.com",
        "category": "电商工具",
        "tags": ["eBay","跨境电商","拍卖","电商平台"]
    },
    {
        "name": "Etsy",
        "description": "手工艺品和复古商品交易平台",
        "url": "https://www.etsy.com",
        "category": "电商工具",
        "tags": ["Etsy","手工","创意","电商平台","跨境电商"]
    },
    {
        "name": "拼多多商家版",
        "description": "拼多多商家管理后台",
        "url": "https://mms.pinduoduo.com",
        "category": "电商工具",
        "tags": ["拼多多","电商","社交电商","开店"]
    },
    {
        "name": "抖音电商",
        "description": "抖音电商创作者服务平台",
        "url": "https://fxg.jinritemai.com",
        "category": "电商工具",
        "tags": ["抖音","电商","直播带货","短视频"]
    },
    {
        "name": "微信",
        "description": "腾讯即时通讯工具，社交必备",
        "url": "https://weixin.qq.com",
        "category": "社交娱乐",
        "tags": ["微信","社交","聊天","腾讯"]
    },
    {
        "name": "QQ",
        "description": "腾讯经典即时通讯软件",
        "url": "https://im.qq.com",
        "category": "社交娱乐",
        "tags": ["QQ","社交","聊天","腾讯"]
    },
    {
        "name": "抖音",
        "description": "短视频社交平台，记录美好生活",
        "url": "https://www.douyin.com",
        "category": "社交娱乐",
        "tags": ["短视频","抖音","娱乐","社交"]
    },
    {
        "name": "小红书",
        "description": "生活方式分享平台，种草神器",
        "url": "https://www.xiaohongshu.com",
        "category": "社交娱乐",
        "tags": ["种草","分享","生活","购物"]
    },
    {
        "name": "微博",
        "description": "新浪微博，热点资讯聚集地",
        "url": "https://weibo.com",
        "category": "社交娱乐",
        "tags": ["微博","社交","热点","资讯"]
    },
    {
        "name": "网易云音乐",
        "description": "在线音乐平台，发现好音乐",
        "url": "https://music.163.com",
        "category": "AI音频工具",
        "tags": ["音乐","歌曲","听歌","播放器"]
    },
    {
        "name": "QQ音乐",
        "description": "腾讯音乐娱乐平台",
        "url": "https://y.qq.com",
        "category": "AI音频工具",
        "tags": ["音乐","歌曲","听歌","腾讯"]
    },
    {
        "name": "优酷",
        "description": "综合视频平台，影视剧综艺",
        "url": "https://www.youku.com",
        "category": "社交娱乐",
        "tags": ["视频","影视","综艺","电影"]
    },
    {
        "name": "爱奇艺",
        "description": "在线视频平台，热门影视剧",
        "url": "https://www.iqiyi.com",
        "category": "社交娱乐",
        "tags": ["视频","影视","电影","综艺"]
    },
    {
        "name": "美团",
        "description": "本地生活服务平台，吃喝玩乐全都有",
        "url": "https://www.meituan.com",
        "category": "生活服务",
        "tags": ["外卖","团购","生活","服务"]
    },
    {
        "name": "饿了么",
        "description": "在线外卖订餐平台",
        "url": "https://www.ele.me",
        "category": "生活服务",
        "tags": ["外卖","订餐","美食","配送"]
    },
    {
        "name": "大众点评",
        "description": "本地生活信息及交易平台",
        "url": "https://www.dianping.com",
        "category": "生活服务",
        "tags": ["点评","美食","生活","团购"]
    },
    {
        "name": "携程",
        "description": "在线旅游服务平台，订票订酒店",
        "url": "https://www.ctrip.com",
        "category": "生活服务",
        "tags": ["旅游","酒店","机票","火车票"]
    },
    {
        "name": "12306",
        "description": "中国铁路客户服务中心，火车票官网",
        "url": "https://www.12306.cn",
        "category": "生活服务",
        "tags": ["火车票","高铁","铁路","购票"]
    },
    {
        "name": "高德地图",
        "description": "专业的手机地图，智能导航",
        "url": "https://www.amap.com",
        "category": "生活服务",
        "tags": ["地图","导航","出行","路线"]
    },
    {
        "name": "百度地图",
        "description": "百度地图，出行好帮手",
        "url": "https://map.baidu.com",
        "category": "生活服务",
        "tags": ["地图","导航","出行","百度"]
    },
    {
        "name": "天气预报",
        "description": "中国天气网，权威天气预报",
        "url": "https://www.weather.com.cn",
        "category": "生活服务",
        "tags": ["天气","预报","气象","查询"]
    },
    {
        "name": "新华网",
        "description": "新华通讯社官网，权威新闻",
        "url": "https://www.xinhuanet.com",
        "category": "资讯与媒体",
        "tags": ["新闻","资讯","时政","权威"]
    },
    {
        "name": "人民网",
        "description": "人民日报官方网站",
        "url": "https://www.people.com.cn",
        "category": "资讯与媒体",
        "tags": ["新闻","资讯","时政","权威"]
    },
    {
        "name": "今日头条",
        "description": "个性化推荐资讯平台",
        "url": "https://www.toutiao.com",
        "category": "资讯与媒体",
        "tags": ["新闻","资讯","热点","推荐"]
    },
    {
        "name": "澎湃新闻",
        "description": "专注时政与思想的新闻平台",
        "url": "https://www.thepaper.cn",
        "category": "资讯与媒体",
        "tags": ["新闻","时政","深度","资讯"]
    },
    {
        "name": "腾讯新闻",
        "description": "腾讯新闻客户端，实时热点",
        "url": "https://news.qq.com",
        "category": "资讯与媒体",
        "tags": ["新闻","资讯","腾讯","热点"]
    },
    {
        "name": "网易新闻",
        "description": "网易新闻中心，有态度的新闻",
        "url": "https://news.163.com",
        "category": "资讯与媒体",
        "tags": ["新闻","资讯","网易","热点"]
    },
    {
        "name": "同花顺",
        "description": "专业股票软件，实时行情分析",
        "url": "https://www.10jqka.com.cn",
        "category": "金融投资",
        "tags": ["股票","炒股","行情","分析"]
    },
    {
        "name": "东方财富",
        "description": "财经资讯门户，股票行情查询",
        "url": "https://www.eastmoney.com",
        "category": "金融投资",
        "tags": ["财经","股票","基金","行情"]
    },
    {
        "name": "雪球",
        "description": "投资者社交网络，交流投资心得",
        "url": "https://xueqiu.com",
        "category": "金融投资",
        "tags": ["投资","股票","社区","交流"]
    },
    {
        "name": "天天基金",
        "description": "基金交易平台，基金数据查询",
        "url": "https://fund.eastmoney.com",
        "category": "金融投资",
        "tags": ["基金","理财","投资","数据"]
    },
    {
        "name": "支付宝",
        "description": "蚂蚁集团支付平台，生活缴费理财",
        "url": "https://www.alipay.com",
        "category": "金融投资",
        "tags": ["支付","理财","基金","生活"]
    },
    {
        "name": "微信支付",
        "description": "腾讯支付平台",
        "url": "https://pay.weixin.qq.com",
        "category": "金融投资",
        "tags": ["支付","微信","转账","收款"]
    },
    {
        "name": "银行汇率网",
        "description": "外汇牌价查询，汇率转换",
        "url": "https://www.chinamoney.com.cn",
        "category": "金融投资",
        "tags": ["汇率","外汇","银行","查询"]
    },
    {
        "name": "Google Trends",
        "description": "谷歌趋势分析，了解产品搜索热度和市场趋势",
        "url": "https://trends.google.com",
        "category": "跨境选品工具",
        "tags": ["谷歌","趋势","搜索","分析","选品"]
    },
    {
        "name": "Ahrefs",
        "description": "专业SEO工具，关键词研究和竞品分析",
        "url": "https://ahrefs.com",
        "category": "跨境关键词工具",
        "tags": ["SEO","关键词","外链","竞品"]
    },
    {
        "name": "SEMrush",
        "description": "全能数字营销工具，SEO和广告分析",
        "url": "https://www.semrush.com",
        "category": "跨境关键词工具",
        "tags": ["SEO","关键词","广告","营销"]
    },
    {
        "name": "Ubersuggest",
        "description": "免费关键词建议和SEO分析工具",
        "url": "https://neilpatel.com",
        "category": "跨境关键词工具",
        "tags": ["关键词","SEO","免费","分析"]
    },
    {
        "name": "Keyword Tool",
        "description": "基于Google自动补全的关键词工具",
        "url": "https://keywordtool.io",
        "category": "AI办公工具",
        "tags": ["关键词","谷歌","长尾词","建议"]
    },
    {
        "name": "Google Ads",
        "description": "谷歌广告平台，搜索和展示广告",
        "url": "https://ads.google.com",
        "category": "跨境广告平台",
        "tags": ["谷歌","广告","SEM","投放"]
    },
    {
        "name": "Facebook Ads",
        "description": "Facebook广告管理平台，社交媒体营销",
        "url": "https://www.facebook.com",
        "category": "跨境广告平台",
        "tags": ["Facebook","广告","社交","营销"]
    },
    {
        "name": "TikTok Ads",
        "description": "TikTok广告平台，短视频营销",
        "url": "https://ads.tiktok.com",
        "category": "跨境广告平台",
        "tags": ["TikTok","广告","短视频","营销"]
    },
    {
        "name": "Pinterest Ads",
        "description": "Pinterest广告平台，视觉内容营销",
        "url": "https://ads.pinterest.com",
        "category": "跨境广告平台",
        "tags": ["Pinterest","广告","视觉","营销"]
    },
    {
        "name": "WooCommerce",
        "description": "WordPress电商插件，免费开源",
        "url": "https://woocommerce.com",
        "category": "AI办公工具",
        "tags": ["WordPress","电商","开源","插件"]
    },
    {
        "name": "Wix",
        "description": "拖拽式建站平台，简单易用",
        "url": "https://www.wix.com",
        "category": "跨境建站系统",
        "tags": ["建站","拖拽","网站","模板"]
    },
    {
        "name": "Squarespace",
        "description": "专业网站构建平台，设计精美",
        "url": "https://www.squarespace.com",
        "category": "跨境建站系统",
        "tags": ["建站","设计","网站","模板"]
    },
    {
        "name": "Magento",
        "description": "企业级开源电商平台",
        "url": "https://magento.com",
        "category": "跨境建站系统",
        "tags": ["电商","开源","企业级","Magento"]
    },
    {
        "name": "PayPal",
        "description": "全球知名在线支付平台",
        "url": "https://www.paypal.com",
        "category": "跨境支付收款",
        "tags": ["支付","收款","PayPal","国际"]
    },
    {
        "name": "Stripe",
        "description": "强大的在线支付处理平台",
        "url": "https://stripe.com",
        "category": "跨境支付收款",
        "tags": ["支付","收款","Stripe","API"]
    },
    {
        "name": "Payoneer",
        "description": "跨境收款平台，支持多币种",
        "url": "https://www.payoneer.com",
        "category": "跨境支付收款",
        "tags": ["收款","跨境","多币种","提现"]
    },
    {
        "name": "万里汇",
        "description": "蚂蚁集团跨境收款服务",
        "url": "https://www.worldfirst.com.cn",
        "category": "跨境支付收款",
        "tags": ["收款","跨境","汇率","结汇"]
    },
    {
        "name": "连连支付",
        "description": "跨境电商收款和支付解决方案",
        "url": "https://www.lianlianpay.com",
        "category": "跨境支付收款",
        "tags": ["收款","支付","跨境","电商"]
    },
    {
        "name": "递四方",
        "description": "跨境电商物流综合服务商",
        "url": "https://www.4px.com",
        "category": "跨境物流服务",
        "tags": ["物流","跨境","仓储","配送"]
    },
    {
        "name": "燕文物流",
        "description": "专业跨境电商物流服务",
        "url": "https://www.yw56.com.cn",
        "category": "跨境物流服务",
        "tags": ["物流","跨境","专线","小包"]
    },
    {
        "name": "云途物流",
        "description": "跨境物流解决方案提供商",
        "url": "https://www.yunexpress.com",
        "category": "跨境物流服务",
        "tags": ["物流","跨境","云途","专线"]
    },
    {
        "name": "DHL",
        "description": "国际快递和物流服务",
        "url": "https://www.dhl.com",
        "category": "跨境物流服务",
        "tags": ["快递","国际","物流","DHL"]
    },
    {
        "name": "FedEx",
        "description": "全球快递物流服务",
        "url": "https://www.fedex.com",
        "category": "跨境物流服务",
        "tags": ["快递","国际","物流","FedEx"]
    },
    {
        "name": "AspireIQ",
        "description": "网红营销平台，连接品牌和创作者",
        "url": "https://aspireiq.com",
        "category": "跨境网红营销",
        "tags": ["网红","营销","合作","创作者"]
    },
    {
        "name": "Upfluence",
        "description": "网红营销和联盟营销平台",
        "url": "https://www.upfluence.com",
        "category": "跨境网红营销",
        "tags": ["网红","营销","联盟","分析"]
    },
    {
        "name": "Grin",
        "description": "电商网红营销管理平台",
        "url": "https://grin.co",
        "category": "跨境网红营销",
        "tags": ["网红","电商","管理","营销"]
    },
    {
        "name": "NoxInfluencer",
        "description": "YouTube网红数据分析平台",
        "url": "https://www.noxinfluencer.com",
        "category": "跨境网红营销",
        "tags": ["YouTube","网红","数据","分析"]
    },
    {
        "name": "SimilarWeb",
        "description": "网站流量和竞品分析工具",
        "url": "https://www.similarweb.com",
        "category": "跨境数据分析",
        "tags": ["流量","分析","竞品","数据"]
    },
    {
        "name": "Google Analytics",
        "description": "谷歌网站分析工具，追踪用户行为",
        "url": "https://analytics.google.com",
        "category": "跨境数据分析",
        "tags": ["分析","谷歌","流量","用户"]
    },
    {
        "name": "Hotjar",
        "description": "用户行为分析和热力图工具",
        "url": "https://www.hotjar.com",
        "category": "跨境数据分析",
        "tags": ["热力图","录屏","分析","用户"]
    },
    {
        "name": "Mixpanel",
        "description": "产品分析平台，追踪用户转化",
        "url": "https://mixpanel.com",
        "category": "跨境数据分析",
        "tags": ["分析","转化","用户","产品"]
    },
    {
        "name": "Mailchimp",
        "description": "流行的邮件营销自动化平台",
        "url": "https://mailchimp.com",
        "category": "跨境邮件营销",
        "tags": ["邮件","营销","自动化","EDM"]
    },
    {
        "name": "Klaviyo",
        "description": "电商专用邮件和短信营销平台",
        "url": "https://www.klaviyo.com",
        "category": "跨境邮件营销",
        "tags": ["邮件","短信","电商","营销"]
    },
    {
        "name": "Omnisend",
        "description": "多渠道营销自动化平台",
        "url": "https://www.omnisend.com",
        "category": "跨境邮件营销",
        "tags": ["邮件","营销","自动化","多渠道"]
    },
    {
        "name": "SendGrid",
        "description": "邮件发送和营销平台",
        "url": "https://sendgrid.com",
        "category": "跨境邮件营销",
        "tags": ["邮件","发送","API","营销"]
    },
    {
        "name": "义乌购",
        "description": "义乌小商品批发市场",
        "url": "https://www.yiwugo.com",
        "category": "跨境货源平台",
        "tags": ["义乌","批发","小商品","货源"]
    },
    {
        "name": "Alibaba",
        "description": "国际版阿里巴巴，B2B批发平台",
        "url": "https://www.alibaba.com",
        "category": "跨境货源平台",
        "tags": ["批发","B2B","国际","货源"]
    },
    {
        "name": "CJ Dropshipping",
        "description": "专业代发货平台",
        "url": "https://cjdropshipping.com",
        "category": "跨境货源平台",
        "tags": ["代发","货源","仓储","物流"]
    },
    {
        "name": "雨果跨境",
        "description": "跨境电商行业资讯和学习平台",
        "url": "https://www.cifnews.com",
        "category": "AI教育与学习",
        "tags": ["资讯","跨境","学习","行业"]
    },
    {
        "name": "AMZ123",
        "description": "亚马逊卖家导航和资讯",
        "url": "https://www.amz123.com",
        "category": "跨境资讯媒体",
        "tags": ["亚马逊","导航","资讯","工具"]
    },
    {
        "name": "跨境电商鹰熊汇",
        "description": "跨境电商知识分享社区",
        "url": "https://www.yingxionghui.com",
        "category": "跨境资讯媒体",
        "tags": ["跨境","知识","社区","分享"]
    },
    {
        "name": "Pinterest",
        "description": "全世界的设计灵感都在这里",
        "url": "https://www.pinterest.com",
        "category": "设计灵感网站",
        "tags": ["设计","灵感","图片","收藏"]
    },
    {
        "name": "Awwwards",
        "description": "欧美网页设计欣赏和评选",
        "url": "https://www.awwwards.com",
        "category": "设计灵感网站",
        "tags": ["网页","设计","欣赏","获奖"]
    },
    {
        "name": "UI中国",
        "description": "专业UI设计师交流平台",
        "url": "https://www.ui.cn",
        "category": "设计灵感网站",
        "tags": ["UI","设计","交流","作品"]
    },
    {
        "name": "Freepik",
        "description": "百万级矢量素材库",
        "url": "https://www.freepik.com",
        "category": "设计素材下载",
        "tags": ["矢量","素材","插画","图标"]
    },
    {
        "name": "Iconfinder",
        "description": "图标搜索引擎，海量图标资源",
        "url": "https://www.iconfinder.com",
        "category": "设计素材下载",
        "tags": ["图标","icon","搜索","素材"]
    },
    {
        "name": "Flaticon",
        "description": "超900万枚免费图标素材",
        "url": "https://www.flaticon.com",
        "category": "设计素材下载",
        "tags": ["图标","扁平化","免费","矢量"]
    },
    {
        "name": "阿里图标库",
        "description": "阿里巴巴矢量图标库",
        "url": "https://www.iconfont.cn",
        "category": "设计素材下载",
        "tags": ["图标","矢量","中文","免费"]
    },
    {
        "name": "Coolors",
        "description": "在线配色和配色方案生成",
        "url": "https://coolors.co",
        "category": "设计配色工具",
        "tags": ["配色","颜色","调色板","生成"]
    },
    {
        "name": "Adobe Color",
        "description": "Adobe官方配色工具",
        "url": "https://color.adobe.com",
        "category": "设计配色工具",
        "tags": ["配色","颜色","Adobe","调色"]
    },
    {
        "name": "中国传统色",
        "description": "中国传统色彩名称和色值",
        "url": "http://zhongguose.com",
        "category": "设计配色工具",
        "tags": ["配色","中国","传统","颜色"]
    },
    {
        "name": "日本传统色",
        "description": "日本传统色系展示",
        "url": "https://nipponcolors.com",
        "category": "设计配色工具",
        "tags": ["配色","日本","传统","颜色"]
    },
    {
        "name": "UI Gradients",
        "description": "生成美丽的渐变颜色",
        "url": "https://uigradients.com",
        "category": "设计配色工具",
        "tags": ["渐变","配色","颜色","UI"]
    },
    {
        "name": "摹客",
        "description": "产品设计协作平台",
        "url": "https://www.mockplus.cn",
        "category": "在线设计工具",
        "tags": ["原型","设计","协作","标注"]
    },
    {
        "name": "Google Fonts",
        "description": "谷歌开源字体库",
        "url": "https://fonts.google.com",
        "category": "设计字体资源",
        "tags": ["字体","免费","开源","英文"]
    },
    {
        "name": "字体家",
        "description": "万款字体免费下载",
        "url": "https://www.zitijia.com",
        "category": "设计字体资源",
        "tags": ["字体","中文","下载","免费"]
    },
    {
        "name": "求字体",
        "description": "通过图片识别字体",
        "url": "https://www.qiuziti.com",
        "category": "设计字体资源",
        "tags": ["字体","识别","搜索","查找"]
    },
    {
        "name": "DaFont",
        "description": "大量免费英文字体下载",
        "url": "https://www.dafont.com",
        "category": "设计字体资源",
        "tags": ["字体","英文","免费","下载"]
    },
    {
        "name": "Sketch",
        "description": "Mac平台专业UI设计工具",
        "url": "https://www.sketch.com",
        "category": "设计软件工具",
        "tags": ["设计","UI","Mac","矢量"]
    },
    {
        "name": "蓝湖",
        "description": "设计协作平台和标注工具",
        "url": "https://lanhuapp.com",
        "category": "设计软件工具",
        "tags": ["协作","标注","设计","团队"]
    },
    {
        "name": "虎课网",
        "description": "设计视频教程学习平台",
        "url": "https://huke88.com",
        "category": "AI教育与学习",
        "tags": ["教程","学习","设计","视频"]
    },
    {
        "name": "优设网",
        "description": "设计师学习平台和资讯网站",
        "url": "https://www.uisdc.com",
        "category": "AI教育与学习",
        "tags": ["设计","学习","教程","资讯"]
    },
    {
        "name": "设计达人",
        "description": "设计资源和教程分享",
        "url": "https://www.shejidaren.com",
        "category": "设计学习平台",
        "tags": ["设计","教程","资源","分享"]
    },
    {
        "name": "GPTZero",
        "description": "AI内容检测工具，识别AI生成文本",
        "url": "https://gptzero.me",
        "category": "AI检测工具",
        "tags": ["AI检测","内容检测","AI识别"]
    },
    {
        "name": "ZeroGPT",
        "description": "免费AI文本检测器",
        "url": "https://www.zerogpt.com",
        "category": "AI检测工具",
        "tags": ["AI检测","文本检测","免费"]
    },
    {
        "name": "Copyleaks",
        "description": "AI内容检测和抄袭检查",
        "url": "https://copyleaks.com",
        "category": "AI检测工具",
        "tags": ["AI检测","抄袭检查","原创性"]
    },
    {
        "name": "PromptBase",
        "description": "AI提示词市场，买卖优质提示词",
        "url": "https://promptbase.com",
        "category": "提示词工程",
        "tags": ["提示词","Prompt","市场","交易"]
    },
    {
        "name": "PromptHero",
        "description": "AI提示词搜索和分享社区",
        "url": "https://prompthero.com",
        "category": "提示词工程",
        "tags": ["提示词","Prompt","社区","搜索"]
    },
    {
        "name": "FlowGPT",
        "description": "AI提示词社区和工具",
        "url": "https://flowgpt.com",
        "category": "AI聊天助手",
        "tags": ["提示词","Prompt","社区","工具"]
    },
    {
        "name": "Copy.ai",
        "description": "AI文案创作和营销工具",
        "url": "https://www.copy.ai",
        "category": "AI营销工具",
        "tags": ["AI","文案","营销","创作"]
    },
    {
        "name": "Simplified",
        "description": "AI设计和营销一体化平台",
        "url": "https://simplified.com",
        "category": "AI营销工具",
        "tags": ["AI","营销","设计","多合一"]
    },
    {
        "name": "Julius AI",
        "description": "AI数据分析助手，智能数据洞察",
        "url": "https://julius.ai",
        "category": "AI数据分析",
        "tags": ["AI","数据分析","商业智能","洞察"]
    },
    {
        "name": "DataRobot",
        "description": "企业级AI和机器学习平台",
        "url": "https://www.datarobot.com",
        "category": "AI数据分析",
        "tags": ["AI","机器学习","企业","数据"]
    },
    {
        "name": "Tableau",
        "description": "数据可视化和商业智能工具",
        "url": "https://www.tableau.com",
        "category": "AI数据分析",
        "tags": ["数据可视化","商业智能","分析"]
    },
    {
        "name": "Tidio",
        "description": "AI客服聊天机器人",
        "url": "https://www.tidio.com",
        "category": "AI客服",
        "tags": ["AI","客服","聊天机器人","自动化"]
    },
    {
        "name": "Intercom",
        "description": "智能客户服务平台",
        "url": "https://www.intercom.com",
        "category": "AI客服",
        "tags": ["AI","客服","CRM","沟通"]
    },
    {
        "name": "美洽",
        "description": "国产智能客服系统",
        "url": "https://meiqia.com",
        "category": "AI客服",
        "tags": ["AI","客服","国产","智能"]
    },
    {
        "name": "Khan Academy",
        "description": "在线教育平台，AI个性化学习",
        "url": "https://www.khanacademy.org",
        "category": "AI教育",
        "tags": ["AI","教育","在线学习","个性化"]
    },
    {
        "name": "Duolingo",
        "description": "AI语言学习应用",
        "url": "https://www.duolingo.com",
        "category": "AI教育",
        "tags": ["AI","语言学习","教育","应用"]
    },
    {
        "name": "作业帮",
        "description": "在线作业辅导和学习工具",
        "url": "https://www.zybang.com",
        "category": "AI教育",
        "tags": ["AI","教育","作业","辅导"]
    },
    {
        "name": "Meshy",
        "description": "AI文本生成3D模型",
        "url": "https://www.meshy.ai",
        "category": "3D建模",
        "tags": ["AI","3D","建模","生成"]
    },
    {
        "name": "Spline",
        "description": "在线3D设计工具",
        "url": "https://spline.design",
        "category": "3D建模",
        "tags": ["3D","设计","在线","建模"]
    },
    {
        "name": "Luma AI",
        "description": "AI 3D捕捉和生成",
        "url": "https://lumalabs.ai",
        "category": "3D建模",
        "tags": ["AI","3D","扫描","生成"]
    },
    {
        "name": "数英",
        "description": "中国数字整合营销资讯平台",
        "url": "https://www.digitaling.com",
        "category": "广告营销资讯",
        "tags": ["营销","广告","创意","资讯"]
    },
    {
        "name": "SocialBeta",
        "description": "领先的社交媒体和数字营销内容平台",
        "url": "https://socialbeta.com",
        "category": "广告营销资讯",
        "tags": ["社交媒体","营销","品牌","案例"]
    },
    {
        "name": "梅花网",
        "description": "营销者的信息中心",
        "url": "https://www.meihua.info",
        "category": "广告营销资讯",
        "tags": ["营销","广告","品牌","电商"]
    },
    {
        "name": "广告门",
        "description": "广告营销行业媒体平台",
        "url": "https://www.adquan.com",
        "category": "广告营销资讯",
        "tags": ["广告","营销","创意","行业"]
    },
    {
        "name": "TOPYS",
        "description": "全球顶尖创意分享平台",
        "url": "https://www.topys.cn",
        "category": "广告营销资讯",
        "tags": ["创意","设计","广告","灵感"]
    },
    {
        "name": "Campaign中国",
        "description": "致力于亚太地区的商业传播服务",
        "url": "https://www.campaignchina.com",
        "category": "广告营销资讯",
        "tags": ["广告","营销","品牌","国际"]
    },
    {
        "name": "V电影",
        "description": "高品质短片分享平台",
        "url": "https://www.vmovier.com",
        "category": "创意视频平台",
        "tags": ["视频","短片","创意","广告"]
    },
    {
        "name": "新片场",
        "description": "专业的影视创作人社区",
        "url": "https://www.xinpianchang.com",
        "category": "创意视频平台",
        "tags": ["视频","影视","创作","社区"]
    },
    {
        "name": "开眼",
        "description": "每日精选创意视频",
        "url": "https://www.kaiyanapp.com",
        "category": "创意视频平台",
        "tags": ["视频","创意","精选","短片"]
    },
    {
        "name": "戛纳国际创意节",
        "description": "广告界的奥斯卡，全球最高创意奖项",
        "url": "https://www.canneslions.com",
        "category": "广告创意奖项",
        "tags": ["奖项","创意","广告","国际"]
    },
    {
        "name": "金投赏",
        "description": "中国商业创意奖项",
        "url": "http://www.roifestival.com",
        "category": "广告创意奖项",
        "tags": ["奖项","创意","商业","中国"]
    },
    {
        "name": "D&AD",
        "description": "全球创意广告设计协会",
        "url": "https://www.dandad.org",
        "category": "广告创意奖项",
        "tags": ["奖项","设计","广告","黄铅笔"]
    },
    {
        "name": "天与空",
        "description": "跨越一切沟通平台的创意公司",
        "url": "http://www.tianyukong.com",
        "category": "创意灵感",
        "tags": ["广告","创意","设计","传播"]
    },
    {
        "name": "KARMA 颉摩广告",
        "description": "我们相信，创意就是影响世界的力量",
        "url": "http://www.karmais.me",
        "category": "创意灵感",
        "tags": ["广告","创意","设计","影响力"]
    },
    {
        "name": "GOODZILLA 意类广告",
        "description": "我们是互联网整合营销专家",
        "url": "http://www.goodzilla.cn",
        "category": "创意灵感",
        "tags": ["广告","互联网","营销","整合"]
    },
    {
        "name": "neone 有门互动",
        "description": "广告有门，创意无门",
        "url": "http://www.neone.com.cn",
        "category": "创意灵感",
        "tags": ["广告","创意","互动","设计"]
    },
    {
        "name": "Ogilvy 奥美",
        "description": "我们让品牌变得有意义",
        "url": "http://www.ogilvy.com.cn",
        "category": "创意灵感",
        "tags": ["广告","品牌","创意","全球"]
    },
    {
        "name": "胜加SG",
        "description": "为胜利加分",
        "url": "http://www.sgad.com.cn",
        "category": "创意灵感",
        "tags": ["广告","创意","设计","营销"]
    },
    {
        "name": "SociaLab 环时互动",
        "description": "让想象力实现的传播机构",
        "url": "http://www.socialab.com.cn",
        "category": "创意灵感",
        "tags": ["广告","互动","传播","创意"]
    },
    {
        "name": "有氧 YOYA Digital",
        "description": "有预算吗？我氧你",
        "url": "http://www.cn-yoya.com",
        "category": "创意灵感",
        "tags": ["广告","创意","数字","营销"]
    },
    {
        "name": "CubeRights 对立方",
        "description": "创意力的探索者",
        "url": "http://www.cuberights.com",
        "category": "创意灵感",
        "tags": ["广告","创意","探索","设计"]
    },
    {
        "name": "北京鲸梦",
        "description": "这里的创意'生态'很丰富！",
        "url": "http://www.whaledream.com",
        "category": "创意灵感",
        "tags": ["广告","创意","生态","北京"]
    },
    {
        "name": "W",
        "description": "不做创意人，只做创造者",
        "url": "http://www.wearewer.com",
        "category": "创意灵感",
        "tags": ["广告","创意","创造","设计"]
    },
    {
        "name": "LxU",
        "description": "让信息更动人",
        "url": "http://www.lxustudio.com",
        "category": "创意灵感",
        "tags": ["广告","信息","设计","创意"]
    },
    {
        "name": "i2mago 原象",
        "description": "寻找商业致胜点，解决重要营销问题",
        "url": "http://www.i2mago.com",
        "category": "创意灵感",
        "tags": ["广告","创意","商业","营销"]
    },
    {
        "name": "ONENINE",
        "description": "不是在主动合作的过程中，就是在去往合作的路上",
        "url": "http://www.onenine19.com",
        "category": "创意灵感",
        "tags": ["广告","创意","合作","设计"]
    },
    {
        "name": "TOPic",
        "description": "以创意解决生意之道，致力于认真做有趣的事",
        "url": "http://www.topicad.cn",
        "category": "创意灵感",
        "tags": ["广告","创意","生意","有趣"]
    },
    {
        "name": "芝麻西瓜",
        "description": "为客户提供无界限的创意营销方案",
        "url": "http://www.sesamewatermelon.com",
        "category": "创意灵感",
        "tags": ["广告","创意","营销","无界"]
    },
    {
        "name": "treedom",
        "description": "为颠覆而生",
        "url": "http://www.treedom.cn",
        "category": "创意灵感",
        "tags": ["广告","创意","颠覆","设计"]
    },
    {
        "name": "McCann 麦肯",
        "description": "善诠涵意，巧传真实",
        "url": "https://www.mccannworldgroup.com",
        "category": "创意灵感",
        "tags": ["广告","创意","国际","传播"]
    },
    {
        "name": "FF佛海佛瑞",
        "description": "THINK WITH YOUR HEART",
        "url": "https://www.ffcreative.com",
        "category": "创意灵感",
        "tags": ["广告","创意","设计","思考"]
    },
    {
        "name": "WMY 北京",
        "description": "用4A的经典思维模式，找到SOCIAL时代新的营销方式",
        "url": "http://www.wmy-ad.com",
        "category": "创意灵感",
        "tags": ["广告","创意","社交","营销"]
    },
    {
        "name": "UID 北京",
        "description": "在品牌和用户背后供给最有想象力的创意弹药",
        "url": "http://www.uidworks.com",
        "category": "创意灵感",
        "tags": ["广告","创意","品牌","想象"]
    },
    {
        "name": "Forsman & Bodenfors",
        "description": "瑞典创新技术全球代理商",
        "url": "https://forsman.co",
        "category": "创意灵感",
        "tags": ["广告","创意","创新","国际"]
    },
    {
        "name": "Universal Everything",
        "description": "英国视觉/音效/体验设计数字艺术先锋",
        "url": "https://universaleverything.com",
        "category": "创意灵感",
        "tags": ["广告","设计","数字","艺术"]
    },
    {
        "name": "PARTY",
        "description": "伊藤直树/清水干太等联合创意公司",
        "url": "https://prty.jp",
        "category": "创意灵感",
        "tags": ["广告","创意","日本","设计"]
    },
    {
        "name": "Studio Swine",
        "description": "跨雕塑/装置沉浸式艺术机构",
        "url": "https://www.studioswine.com",
        "category": "创意灵感",
        "tags": ["设计","艺术","沉浸","雕塑"]
    },
    {
        "name": "Johnson Banks",
        "description": "混合设计顾问公司",
        "url": "https://www.johnsonbanks.co.uk",
        "category": "创意灵感",
        "tags": ["设计","顾问","广告","创意"]
    },
    {
        "name": "Folch",
        "description": "巴塞罗那摄影品牌零售战略咨询",
        "url": "https://www.folchstudio.com",
        "category": "创意灵感",
        "tags": ["设计","品牌","战略","摄影"]
    },
    {
        "name": "Stefan Beckman Studio",
        "description": "设计/艺术/广告服务顾问公司",
        "url": "https://www.stefanbeckman.com",
        "category": "创意灵感",
        "tags": ["设计","艺术","广告","顾问"]
    },
    {
        "name": "纽约客",
        "description": "世界上最具影响力的杂志之一，提供优质文章和创意灵感",
        "url": "https://www.newyorker.com",
        "category": "AI写作工具",
        "tags": ["文案","杂志","创意","写作","国际"]
    },
    {
        "name": "It's Nice That",
        "description": "随时了解创意世界正在发生的事，分享全球最新创意资讯",
        "url": "https://www.itsnicethat.com",
        "category": "文案灵感网站",
        "tags": ["文案","创意","设计","灵感","趋势"]
    },
    {
        "name": "Voicer",
        "description": "分享生活和设计美学，提供创意灵感和设计思路",
        "url": "http://www.voicer.me",
        "category": "文案灵感网站",
        "tags": ["文案","美学","设计","生活方式","创意"]
    },
    {
        "name": "Fubiz Media",
        "description": "发掘有创造力的人和独特项目的国际创意平台",
        "url": "http://www.fubiz.net",
        "category": "文案灵感网站",
        "tags": ["文案","创意","艺术","设计","项目"]
    },
    {
        "name": "Deck of Brilliance",
        "description": "帮助创意专业人士产生创新点子的工具和方法",
        "url": "http://deckofbrilliance.com",
        "category": "文案灵感网站",
        "tags": ["文案","创意","灵感","思维工具","创新"]
    },
    {
        "name": "Copyblogger",
        "description": "提供高质量的内容营销和文案写作教程的专业网站",
        "url": "https://copyblogger.com",
        "category": "AI写作工具",
        "tags": ["文案","学习","营销","写作","教程"]
    },
    {
        "name": "Copyhackers",
        "description": "专注于转化文案写作技巧的学习平台，帮助提升文案效果",
        "url": "https://copyhackers.com",
        "category": "AI写作工具",
        "tags": ["文案","学习","转化","技巧","策略"]
    },
    {
        "name": "Hubspot学院",
        "description": "提供营销、销售和文案写作的免费课程和认证",
        "url": "https://academy.hubspot.com",
        "category": "AI写作工具",
        "tags": ["文案","学习","营销","认证","免费"]
    },
    {
        "name": "CARGO",
        "description": "创建网络工具，帮助创意人才展示作品和获得曝光",
        "url": "https://cargocollective.com",
        "category": "创意文案社区",
        "tags": ["文案","创意","作品集","展示","社区"]
    },
    {
        "name": "文案狗",
        "description": "专为文案工作者提供灵感和素材的资源网站",
        "url": "http://wenangou.com",
        "category": "AI写作工具",
        "tags": ["文案","广告","营销","写作","中文"]
    },
    {
        "name": "Luerzer's Archive",
        "description": "收集世界各地30多年来最优秀广告作品的资源库",
        "url": "https://www.luerzersarchive.com",
        "category": "广告文案库",
        "tags": ["文案","广告","创意","案例","经典"]
    },
    {
        "name": "Comm Arts",
        "description": "展示优秀广告设计、插画和印刷作品的在线画廊",
        "url": "https://www.commarts.com",
        "category": "广告文案库",
        "tags": ["文案","广告","设计","插画","创意"]
    },
    {
        "name": "文案迷",
        "description": "广告词、广告语集合网站，提供大量经典文案素材",
        "url": "http://www.wenanmi.com",
        "category": "AI写作工具",
        "tags": ["文案","广告","标语","创意","中文"]
    },
    {
        "name": "句易网",
        "description": "在线广告禁用词查询平台，帮助优化广告文案",
        "url": "http://www.ju1.cn",
        "category": "AI写作工具",
        "tags": ["文案","广告","合规","禁用词","审核"]
    },
    {
        "name": "百度统计",
        "description": "百度提供的网站流量分析工具，适合中文网站",
        "url": "https://tongji.baidu.com",
        "category": "数字分析工具",
        "tags": ["分析","数据","百度","流量","中文"]
    },
    {
        "name": "Buffer",
        "description": "社交媒体营销平台，支持内容发布和数据分析",
        "url": "https://buffer.com",
        "category": "社交媒体营销",
        "tags": ["社交媒体","营销","内容","排期","分析"]
    },
    {
        "name": "Hootsuite",
        "description": "社交媒体管理平台，支持多账号管理和团队协作",
        "url": "https://www.hootsuite.com",
        "category": "社交媒体营销",
        "tags": ["社交媒体","管理","团队","排期","分析"]
    },
    {
        "name": "小红书助手",
        "description": "小红书官方创作者平台，数据分析和内容管理",
        "url": "https://creator.xiaohongshu.com",
        "category": "AI聊天助手",
        "tags": ["小红书","社交媒体","创作者","数据","营销"]
    },
    {
        "name": "新媒体管家",
        "description": "国内新媒体内容管理工具，支持多平台发布",
        "url": "https://xmt.cn",
        "category": "社交媒体营销",
        "tags": ["新媒体","内容","管理","排期","多平台"]
    },
    {
        "name": "SendCloud",
        "description": "国内专业的邮件推送服务，高送达率和稳定性",
        "url": "https://www.sendcloud.net",
        "category": "邮件营销平台",
        "tags": ["邮件","营销","推送","触达","中文"]
    },
    {
        "name": "Substack",
        "description": "新闻通讯平台，支持付费订阅和内容管理",
        "url": "https://substack.com",
        "category": "邮件营销平台",
        "tags": ["通讯","订阅","内容","变现","创作者"]
    },
    {
        "name": "站长工具",
        "description": "国内综合站长工具，包含SEO查询、域名查询等功能",
        "url": "https://tool.chinaz.com",
        "category": "营销推广",
        "tags": ["SEO","站长","工具","查询","中文"]
    },
    {
        "name": "Moz Link Explorer",
        "description": "分析网站外部链接、链接质量、页面权威等SEO指标。",
        "url": "https://moz.com",
        "category": "营销推广",
        "tags": ["链接分析","链接质量","页面权威"]
    },
    {
        "name": "Screaming Frog SEO Tool",
        "description": "用于网站全面爬取和SEO审计的桌面工具，支持HTML、HTTP状态码检查。",
        "url": "https://www.screamingfrog.co.uk",
        "category": "营销推广",
        "tags": ["网站爬取","SEO审计","桌面工具"]
    },
    {
        "name": "Rank Math",
        "description": "WordPress插件，提供完整的SEO优化功能，包括标题优化、XML站点地图等。",
        "url": "https://rankmath.com",
        "category": "AI办公工具",
        "tags": ["WordPress","SEO优化","标题优化","站点地图"]
    },
    {
        "name": "All-in-One SEO",
        "description": "功能强大的WordPress SEO插件，支持关键词分析、元标签管理。",
        "url": "https://allinoneseo.com",
        "category": "AI办公工具",
        "tags": ["WordPress","SEO插件","关键词分析","元标签"]
    },
    {
        "name": "SISTRIX Toolbox",
        "description": "德国领先的SEO工具，提供关键词监控、流量分析和竞争研究。",
        "url": "https://www.sistrix.com",
        "category": "营销推广",
        "tags": ["关键词监控","流量分析","竞争研究"]
    },
    {
        "name": "SpyFu",
        "description": "竞争对手SEO分析工具，提供关键词、广告和反向链接分析。",
        "url": "https://www.spyfu.com",
        "category": "营销推广",
        "tags": ["竞争分析","关键词","广告","反向链接"]
    },
    {
        "name": "AccuRanker",
        "description": "专注于关键词排名跟踪的SEO工具，支持实时监控和报告生成。",
        "url": "https://www.accuranker.com",
        "category": "营销推广",
        "tags": ["关键词排名","实时监控","报告生成"]
    },
    {
        "name": "Rank Tracker",
        "description": "全面的关键词排名跟踪和SEO分析工具，适合中小型企业。",
        "url": "https://www.ranktracker.com",
        "category": "营销推广",
        "tags": ["排名跟踪","SEO分析","中小型企业"]
    },
    {
        "name": "SE Ranking",
        "description": "SEO管理平台，提供关键词排名、反向链接和网站审计功能。",
        "url": "https://seranking.com",
        "category": "营销推广",
        "tags": ["SEO管理","关键词排名","反向链接","网站审计"]
    },
    {
        "name": "Sitechecker",
        "description": "在线SEO审计工具，帮助检查网站技术问题和内容优化。",
        "url": "https://sitechecker.pro",
        "category": "营销推广",
        "tags": ["SEO审计","技术问题","内容优化"]
    },
    {
        "name": "墨刀",
        "description": "产品原型设计工具，支持团队协作和交互设计",
        "url": "https://modao.cc",
        "category": "内容营销",
        "tags": ["原型","设计","协作","产品","交互"]
    },
    {
        "name": "HubSpot",
        "description": "一体化营销、销售和客服平台，支持自动化和CRM",
        "url": "https://www.hubspot.com",
        "category": "营销自动化",
        "tags": ["营销","自动化","CRM","销售","客服"]
    },
    {
        "name": "Salesforce",
        "description": "企业级CRM平台，支持营销自动化和客户管理",
        "url": "https://www.salesforce.com",
        "category": "营销自动化",
        "tags": ["CRM","营销","自动化","企业","客户"]
    },
    {
        "name": "知乎广告",
        "description": "知乎官方广告投放平台，覆盖高质量用户群体",
        "url": "https://marketing.zhihu.com",
        "category": "流量获取",
        "tags": ["广告","知乎","投放","流量","营销"]
    },
    {
        "name": "巨量引擎",
        "description": "字节跳动旗下广告投放平台，覆盖抖音、今日头条等产品",
        "url": "https://www.oceanengine.com",
        "category": "流量获取",
        "tags": ["广告","抖音","头条","投放","流量"]
    },
    {
        "name": "GrowingIO",
        "description": "用户行为分析和增长营销平台，支持全链路数据分析",
        "url": "https://www.growingio.com",
        "category": "用户增长",
        "tags": ["数据","用户","增长","分析","营销"]
    },
    {
        "name": "神策数据",
        "description": "国内领先的用户行为分析平台，支持私有化部署",
        "url": "https://www.sensorsdata.cn",
        "category": "用户增长",
        "tags": ["数据","用户","分析","增长","行为"]
    },
    {
        "name": "中国裁判文书网",
        "description": "最高人民法院建立的全国法院统一的裁判文书公开平台，提供检索和下载裁判文书",
        "url": "https://wenshu.court.gov.cn",
        "category": "裁判案例",
        "tags": ["法院","裁判","文书","判决","司法"]
    },
    {
        "name": "人民法院案例库",
        "description": "由最高人民法院统一建设的案例资源库，收录指导性案例和参考案例",
        "url": "https://anli.court.gov.cn",
        "category": "裁判案例",
        "tags": ["案例","法院","指导案例","参考案例","司法"]
    },
    {
        "name": "最高人民法院公报",
        "description": "最高人民法院的官方文献汇编，发布司法解释、司法文件、典型案例等重要司法信息",
        "url": "https://www.court.gov.cn",
        "category": "裁判案例",
        "tags": ["司法解释","典型案例","司法文件","法院","公报"]
    },
    {
        "name": "中国法院案例报道",
        "description": "中国法院网案例库，包括指导案例、典型案例、其他案例",
        "url": "http://www.chinacourt.org",
        "category": "裁判案例",
        "tags": ["案例","法院","报道","司法","裁判"]
    },
    {
        "name": "最高人民检察院指导性案例",
        "description": "由最高人民检察院发布，供参照适用",
        "url": "https://www.spp.gov.cn",
        "category": "裁判案例",
        "tags": ["案例","检察院","指导性","参照","司法"]
    },
    {
        "name": "中国司法大数据服务网",
        "description": "基于司法大数据资源，推进司法大数据与国家数据资源的融合运用",
        "url": "https://data.court.gov.cn",
        "category": "裁判案例",
        "tags": ["大数据","司法","数据资源","法院","融合"]
    },
    {
        "name": "中国市场监管行政处罚文书网",
        "description": "由国家市场监督管理总局提供的行政处罚文书检索平台",
        "url": "https://cfws.samr.gov.cn",
        "category": "裁判案例",
        "tags": ["行政处罚","市场监管","文书","检索","监督"]
    },
    {
        "name": "威科先行·法律信息库",
        "description": "集法规、案例、解读、工具、问答、法律速递、实务模块等为一体",
        "url": "https://law.wkinfo.com.cn",
        "category": "裁判案例",
        "tags": ["法规","案例","解读","工具","问答"]
    },
    {
        "name": "北大法宝",
        "description": "包括法律法规、司法案例、法学期刊、律所实务、专题参考、检察文书、类案检索等",
        "url": "http://www.pkulaw.cn",
        "category": "裁判案例",
        "tags": ["法律","案例","期刊","实务","专题"]
    },
    {
        "name": "无讼案例",
        "description": "提供精确、易用的案例检索工具",
        "url": "https://www.itslaw.com",
        "category": "裁判案例",
        "tags": ["案例","检索","法律","司法","裁判"]
    },
    {
        "name": "法信",
        "description": "由人民法院电子音像出版社建立的法律、案例和法律知识文献资源平台",
        "url": "https://www.faxin.cn",
        "category": "裁判案例",
        "tags": ["法律","案例","知识","文献","资源"]
    },
    {
        "name": "元典智库",
        "description": "对法规、案例、工商信息、专家观点等内容的检索",
        "url": "https://www.chineselaw.com",
        "category": "裁判案例",
        "tags": ["法规","案例","工商","专家","检索"]
    },
    {
        "name": "国家法律法规数据库",
        "description": "全国人大常委会联合国家机关共同组建运行，提供宪法、法律、行政法规等电子文本",
        "url": "https://flk.npc.gov.cn",
        "category": "法律法规",
        "tags": ["法律","法规","宪法","人大","条例"]
    },
    {
        "name": "证券期货法规数据库系统",
        "description": "由中国证券监督管理委员会主办",
        "url": "http://www.csrc.gov.cn",
        "category": "法律法规",
        "tags": ["证券","期货","法规","数据库","监管"]
    },
    {
        "name": "全国标准信息公共服务平台",
        "description": "由国家市场监督管理总局国家标准技术审评中心主办，包括各类标准",
        "url": "https://std.samr.gov.cn",
        "category": "法律法规",
        "tags": ["标准","国家标准","行业标准","团体标准","企业标准"]
    },
    {
        "name": "国家标准全文公开系统",
        "description": "由国家标准委发布，包括强制性国家标准、推荐性国家标准、指导性技术文件",
        "url": "https://openstd.samr.gov.cn",
        "category": "法律法规",
        "tags": ["国家标准","强制性","推荐性","技术","文件"]
    },
    {
        "name": "生态环境标准",
        "description": "包括标准发布、标准解读、标准文本等",
        "url": "https://www.mee.gov.cn",
        "category": "法律法规",
        "tags": ["环境","标准","生态","解读","文本"]
    },
    {
        "name": "国家企业信用信息公示系统",
        "description": "政府部门用于公示市场主体的信用信息及相关事项的平台",
        "url": "https://www.gsxt.gov.cn",
        "category": "市场主体信息",
        "tags": ["企业","信用","公示","市场主体","信息"]
    },
    {
        "name": "中国社会组织政务服务平台",
        "description": "由民政部社会组织管理局主办，查询全国社会组织信用信息等",
        "url": "https://www.chinanpo.gov.cn",
        "category": "市场主体信息",
        "tags": ["社会组织","信用","政务","民政","组织"]
    },
    {
        "name": "全国组织机构统一社会信用代码数据服务中心",
        "description": "提供境内法人和其他组织统一社会信用代码信息的实名制查询平台",
        "url": "https://www.cods.org.cn",
        "category": "AI编程工具",
        "tags": ["信用代码","组织机构","查询","法人","实名制"]
    },
    {
        "name": "信用中国",
        "description": "由国家公共信用中心主办，查询主体基础信息及信用报告",
        "url": "https://www.creditchina.gov.cn",
        "category": "市场主体信息",
        "tags": ["信用","报告","公共","查询","市场主体"]
    },
    {
        "name": "全国企业破产重整案件信息网",
        "description": "查询债务人信息、公开案件、公开公告、公开文书、债权人会议预告等信息",
        "url": "https://pccz.court.gov.cn",
        "category": "市场主体信息",
        "tags": ["破产","重整","债务","案件","债权"]
    },
    {
        "name": "政府采购严重违法失信行为记录名单",
        "description": "由财政部国库司主办，查询政府采购严重违法失信行为信息记录",
        "url": "http://www.ccgp.gov.cn",
        "category": "市场主体信息",
        "tags": ["政府采购","违法","失信","记录","名单"]
    },
    {
        "name": "企查查",
        "description": "查询企业工商信息、关联企业信息、法律诉讼、知识产权信息等",
        "url": "https://www.qcc.com",
        "category": "市场主体信息",
        "tags": ["企业","工商","诉讼","知识产权","查询"]
    },
    {
        "name": "天眼查",
        "description": "提供公司查询、工商信息查询、企业查询、工商查询、企业信用信息查询等",
        "url": "https://www.tianyancha.com",
        "category": "市场主体信息",
        "tags": ["公司","工商","企业","信用","查询"]
    },
    {
        "name": "启信宝",
        "description": "提供企业工商信息、法院判决、关联企业、司法拍卖、失信信息等服务",
        "url": "https://www.qixin.com",
        "category": "市场主体信息",
        "tags": ["企业","工商","判决","关联","失信"]
    },
    {
        "name": "中国审判流程信息公开网",
        "description": "查看案件信息、接受电子送达、使用联系法官、投诉建议等功能",
        "url": "https://splcgk.court.gov.cn",
        "category": "司法案件信息",
        "tags": ["审判","流程","案件","法官","送达"]
    },
    {
        "name": "中国执行信息公开网",
        "description": "查询失信被执行人、限制消费人员、被执行人信息等",
        "url": "http://zxgk.court.gov.cn",
        "category": "司法案件信息",
        "tags": ["执行","失信","限制消费","被执行人","查询"]
    },
    {
        "name": "人民法院调解平台",
        "description": "最高人民法院建立的全流程一站式解纷服务平台",
        "url": "https://tiaojie.court.gov.cn",
        "category": "司法案件信息",
        "tags": ["调解","解纷","服务","法院","一站式"]
    },
    {
        "name": "中国庭审公开网",
        "description": "由最高人民法院建设的庭审公开网，提供庭审直播、庭审回顾等服务",
        "url": "https://tingshen.court.gov.cn",
        "category": "司法案件信息",
        "tags": ["庭审","直播","回顾","案件","公开"]
    },
    {
        "name": "人民法院公告网",
        "description": "由最高人民法院主办，提供公告查询、公告办理等服务",
        "url": "https://rmfygg.court.gov.cn",
        "category": "司法案件信息",
        "tags": ["公告","查询","办理","法院","服务"]
    },
    {
        "name": "人民法院送达平台",
        "description": "查看相关案件诉讼活动通知、电子送达、邮寄送达、公告送达记录等",
        "url": "https://sdpt.court.gov.cn",
        "category": "司法案件信息",
        "tags": ["送达","诉讼","通知","电子","邮寄"]
    },
    {
        "name": "12309中国检察网",
        "description": "由最高人民检察院主办，提供'一站式'检察服务",
        "url": "https://www.12309.gov.cn",
        "category": "司法案件信息",
        "tags": ["检察","服务","投诉","举报","查询"]
    },
    {
        "name": "人民法院诉讼资产网",
        "description": "面向全国各级法院、社会辅助机构和竞买人的诉讼资产综合信息发布和司法拍卖平台",
        "url": "https://www.rmfysszc.gov.cn",
        "category": "网络司法拍卖",
        "tags": ["诉讼","资产","拍卖","法院","竞买"]
    },
    {
        "name": "阿里资产 · 司法拍卖",
        "description": "纳入最高人民法院司法拍卖网络服务提供者名单库",
        "url": "https://sf.taobao.com",
        "category": "网络司法拍卖",
        "tags": ["阿里","资产","拍卖","司法","服务"]
    },
    {
        "name": "京东资产交易平台 · 司法拍卖",
        "description": "纳入最高人民法院司法拍卖网络服务提供者名单库",
        "url": "https://auction.jd.com",
        "category": "网络司法拍卖",
        "tags": ["京东","资产","交易","司法","拍卖"]
    },
    {
        "name": "公拍网 · 司法拍卖",
        "description": "纳入最高人民法院司法拍卖网络服务提供者名单库",
        "url": "https://www.gpai.net",
        "category": "网络司法拍卖",
        "tags": ["公拍","司法","拍卖","竞拍","资产"]
    },
    {
        "name": "中拍平台 · 司法拍卖",
        "description": "纳入最高人民法院司法拍卖网络服务提供者名单库",
        "url": "https://www.caa123.org.cn",
        "category": "网络司法拍卖",
        "tags": ["中拍","平台","司法","拍卖","竞买"]
    },
    {
        "name": "北京产权交易所 · 司法拍卖",
        "description": "最高人民法院选定的全国各级法院网络司法拍卖平台",
        "url": "https://www.cbex.com.cn",
        "category": "网络司法拍卖",
        "tags": ["北京","产权","交易","司法","拍卖"]
    },
    {
        "name": "国家知识产权局",
        "description": "由国家知识产权局主办，提供知识产权方面的政务服务",
        "url": "https://www.cnipa.gov.cn",
        "category": "知识产权服务",
        "tags": ["知识产权","政务","服务","专利","商标"]
    },
    {
        "name": "专利业务办理系统",
        "description": "提供专利申请及手续办理、专利事务服务、专利缴费服务、专利审查信息查询服务等",
        "url": "https://cponline.cnipa.gov.cn",
        "category": "知识产权服务",
        "tags": ["专利","申请","缴费","审查","查询"]
    },
    {
        "name": "专利检索及分析",
        "description": "由国家知识产权局主办，提供专利检索及分析服务",
        "url": "https://pss-system.cnipa.gov.cn",
        "category": "知识产权服务",
        "tags": ["专利","检索","分析","服务","知识产权"]
    },
    {
        "name": "专利之星检索系统",
        "description": "由国家知识产权局中国专利信息中心主办，提供多种检索方式",
        "url": "http://www.patentstar.cn",
        "category": "知识产权服务",
        "tags": ["专利","检索","智能","专家","分类"]
    },
    {
        "name": "专利代理管理系统",
        "description": "由国家知识产权局主办，提供专利代理师公示、专利代理机构公示等",
        "url": "https://dlgl.cnipa.gov.cn",
        "category": "知识产权服务",
        "tags": ["专利","代理","管理","公示","机构"]
    },
    {
        "name": "商标局 中国商标网",
        "description": "由国家知识产权局商标局主办，提供商标网上申请、查询、证明公示、公告等",
        "url": "https://sbj.cnipa.gov.cn",
        "category": "知识产权服务",
        "tags": ["商标","申请","查询","公示","公告"]
    },
    {
        "name": "中国版权保护中心",
        "description": "承担各类作品和计算机软件版权登记职责，是我国唯一的软件版权登记机构",
        "url": "https://www.ccopyright.com.cn",
        "category": "知识产权服务",
        "tags": ["版权","登记","软件","作品","保护"]
    },
    {
        "name": "北京证券交易所",
        "description": "为证券集中交易提供场所和设施、组织和监督证券交易及市场管理服务",
        "url": "https://www.bse.cn",
        "category": "资本证券",
        "tags": ["证券","交易","北京","资本","市场"]
    },
    {
        "name": "上海证券交易所",
        "description": "为证券集中交易提供场所和设施、组织和监督证券交易",
        "url": "https://www.sse.com.cn",
        "category": "资本证券",
        "tags": ["证券","交易","上海","股票","债券"]
    },
    {
        "name": "深圳证券交易所",
        "description": "提供证券交易的场所、设施和服务，审核证券发行上市申请等",
        "url": "https://www.szse.cn",
        "category": "资本证券",
        "tags": ["证券","交易","深圳","上市","监管"]
    },
    {
        "name": "全国中小企业股份转让系统",
        "description": "我国第一家公司制运营的证券交易场所，为新三板市场提供服务",
        "url": "https://www.neeq.com.cn",
        "category": "资本证券",
        "tags": ["新三板","股份","转让","中小企业","市场"]
    },
    {
        "name": "中国证券投资基金业协会 · 信息公示",
        "description": "查询基金从业人员资格、基金产品、私募基金管理人信息等",
        "url": "https://www.amac.org.cn",
        "category": "资本证券",
        "tags": ["基金","投资","私募","资格","管理人"]
    },
    {
        "name": "证券期货市场失信记录查询平台",
        "description": "可通过查询平台了解相关市场主体违法违规失信信息",
        "url": "https://neris.csrc.gov.cn",
        "category": "资本证券",
        "tags": ["证券","期货","失信","违法","查询"]
    },
    {
        "name": "国家统计局及地方统计网站",
        "description": "可查询居民人均可支配收入及消费支出、各类型平均工资等",
        "url": "https://www.stats.gov.cn",
        "category": "法律数据查询",
        "tags": ["统计","收入","工资","消费","数据"]
    },
    {
        "name": "国家统计局 · 国家数据",
        "description": "提供详实的月度、季度、年度数据以及普查、地区、部门、国际数据",
        "url": "https://data.stats.gov.cn",
        "category": "法律数据查询",
        "tags": ["统计","数据","月度","年度","普查"]
    },
    {
        "name": "人社部及地方人社部门网站",
        "description": "可查询各类型平均工资、社保缴费基数、工伤待遇相关数据等",
        "url": "https://www.mohrss.gov.cn",
        "category": "法律数据查询",
        "tags": ["人社","工资","社保","工伤","缴费"]
    },
    {
        "name": "121法律助手",
        "description": "计算诉讼费、LPR利息、违约金、迟延履行利息、民间借贷利息、日期期间等",
        "url": "https://www.121fa.com",
        "category": "AI聊天助手",
        "tags": ["诉讼费","利息","违约金","计算","工具"]
    },
    {
        "name": "东方财富网",
        "description": "中国领先的互联网金融服务平台，提供财经资讯、证券行情、数据分析等服务",
        "url": "http://www.eastmoney.com",
        "category": "财经门户",
        "tags": ["财经","股票","行情","证券","投资"]
    },
    {
        "name": "新浪财经",
        "description": "新浪财经频道，提供全球财经新闻和金融证券行情数据",
        "url": "http://finance.sina.com.cn",
        "category": "财经门户",
        "tags": ["财经","新闻","股票","行情","数据"]
    },
    {
        "name": "凤凰财经",
        "description": "凤凰网旗下财经频道，关注全球经济动态、市场行情和投资机会",
        "url": "http://finance.ifeng.com",
        "category": "财经门户",
        "tags": ["财经","全球","市场","投资","经济"]
    },
    {
        "name": "和讯网",
        "description": "中国最大财经门户之一，提供实时行情、财经资讯、理财服务和互动社区",
        "url": "http://www.hexun.com",
        "category": "财经门户",
        "tags": ["财经","行情","资讯","理财","投资"]
    },
    {
        "name": "金融界",
        "description": "中国知名财经网站，提供金融资讯、股票、基金、期货等投资信息",
        "url": "http://www.jrj.com.cn",
        "category": "财经门户",
        "tags": ["金融","股票","基金","期货","投资"]
    },
    {
        "name": "华尔街见闻",
        "description": "专业的财经新媒体，专注于全球资讯，提供专业、实时、深度的全球金融市场资讯",
        "url": "http://wallstreetcn.com",
        "category": "财经门户",
        "tags": ["全球","金融","市场","资讯","华尔街"]
    },
    {
        "name": "FT中文网",
        "description": "英国《金融时报》集团旗下的中文商业财经网站，提供全球财经资讯",
        "url": "http://www.ftchinese.com",
        "category": "财经媒体",
        "tags": ["金融时报","全球","商业","财经","资讯"]
    },
    {
        "name": "财新网",
        "description": "中国最有影响力的财经媒体之一，提供深度财经新闻与分析",
        "url": "http://www.caixin.com",
        "category": "财经媒体",
        "tags": ["财经","新闻","分析","经济","深度"]
    },
    {
        "name": "21世纪经济报道",
        "description": "专注于经济、产业与管理的财经媒体，提供专业财经新闻报道",
        "url": "https://www.21jingji.com",
        "category": "财经媒体",
        "tags": ["财经","经济","产业","管理","报道"]
    },
    {
        "name": "第一财经",
        "description": "上海文广新闻传媒集团旗下的财经媒体，提供实时财经新闻",
        "url": "http://www.yicai.com",
        "category": "财经媒体",
        "tags": ["财经","新闻","资讯","实时","经济"]
    },
    {
        "name": "华尔街日报中文网",
        "description": "美国著名财经媒体《华尔街日报》的中文网站，关注全球财经动态",
        "url": "http://cn.wsj.com",
        "category": "财经媒体",
        "tags": ["华尔街","全球","财经","美国","国际"]
    },
    {
        "name": "彭博中文网",
        "description": "全球知名商业和金融信息提供商彭博社的中文网站",
        "url": "https://www.bloombergchina.com",
        "category": "财经媒体",
        "tags": ["彭博","全球","商业","金融","资讯"]
    },
    {
        "name": "集思录",
        "description": "专注于债券、基金等固定收益投资的社区，提供数据分析和用户交流",
        "url": "https://www.jisilu.cn",
        "category": "投资交流",
        "tags": ["债券","基金","固定收益","投资","分析"]
    },
    {
        "name": "淘股吧",
        "description": "活跃的股票投资者交流社区，提供股票讨论、大户动态和投资观点",
        "url": "https://www.taoguba.com.cn",
        "category": "投资交流",
        "tags": ["股票","投资","交流","讨论","观点"]
    },
    {
        "name": "人大经济论坛",
        "description": "中国知名的经济、金融和统计学术交流平台，提供专业讨论和资料分享",
        "url": "http://bbs.pinggu.org",
        "category": "投资交流",
        "tags": ["经济","金融","统计","学术","交流"]
    },
    {
        "name": "股吧",
        "description": "东方财富网旗下的股票讨论社区，用户可以讨论个股、大盘和投资策略",
        "url": "http://guba.eastmoney.com",
        "category": "投资交流",
        "tags": ["股票","讨论","投资","个股","策略"]
    },
    {
        "name": "钢铁网",
        "description": "国内专业的钢铁信息服务平台，提供钢材价格、资讯和数据分析",
        "url": "http://www.mysteel.com",
        "category": "行业资讯",
        "tags": ["钢铁","价格","行情","资讯","分析"]
    },
    {
        "name": "生意社",
        "description": "商品行情服务平台，提供大宗商品价格、行情分析和供求信息",
        "url": "http://www.100ppi.com",
        "category": "行业资讯",
        "tags": ["商品","价格","行情","分析","大宗"]
    },
    {
        "name": "中国化工网",
        "description": "化工行业门户网站，提供化工产品、价格行情和供求信息",
        "url": "http://china.chemnet.com",
        "category": "行业资讯",
        "tags": ["化工","产品","行情","价格","供求"]
    },
    {
        "name": "中国能源网",
        "description": "能源行业门户网站，提供能源政策、市场分析和行业动态",
        "url": "http://www.china5e.com",
        "category": "行业资讯",
        "tags": ["能源","政策","市场","分析","动态"]
    },
    {
        "name": "慧聪网",
        "description": "B2B电子商务平台，覆盖多个行业的商业信息和产品交易",
        "url": "http://www.hc360.com",
        "category": "行业资讯",
        "tags": ["B2B","电子商务","行业","交易","信息"]
    },
    {
        "name": "英为财情",
        "description": "全球金融门户网站，提供股票、期货、外汇等多元化行情数据",
        "url": "https://cn.investing.com",
        "category": "期货交易",
        "tags": ["全球","金融","期货","行情","数据"]
    },
    {
        "name": "和讯期货",
        "description": "和讯网旗下期货频道，提供期货行情、资讯和分析工具",
        "url": "http://futures.hexun.com",
        "category": "期货交易",
        "tags": ["期货","行情","资讯","分析","工具"]
    },
    {
        "name": "99期货",
        "description": "期货门户网站，提供期货行情、价格走势和市场分析",
        "url": "http://www.99qh.com",
        "category": "期货交易",
        "tags": ["期货","行情","价格","走势","分析"]
    },
    {
        "name": "期货日报",
        "description": "中国期货业权威媒体，提供期货市场新闻和分析报道",
        "url": "http://www.qhrb.com.cn",
        "category": "期货交易",
        "tags": ["期货","市场","新闻","分析","报道"]
    },
    {
        "name": "飞如红人",
        "description": "为商家和网红达人提供高效资源对接平台，精选全球高佣好物，提供优质的选品渠道，专注为短视频、直播达人提供优质高佣商品",
        "url": "http://www.feelpro.cn",
        "category": "抖音验货",
        "tags": ["抖音","短视频","带货","红人","验货"]
    },
    {
        "name": "种草之家",
        "description": "种草之家的抖音验货平台，抖音热门商品都在这里，欢迎抖音带货达人挑选商品，商家免费赠送样品",
        "url": "https://www.zhongcao.cn",
        "category": "抖音验货",
        "tags": ["抖音","种草","验货","样品","带货"]
    },
    {
        "name": "搜淘客",
        "description": "商家提供高佣金，推广周期长的产品，每个产品提供多份样品给抖音淘客，抖音淘客免费领取，赚取佣金的验货平台",
        "url": "http://www.tkw1688.com",
        "category": "抖音验货",
        "tags": ["淘客","抖音","样品","佣金","验货"]
    },
    {
        "name": "达人推",
        "description": "专业的短视频带货平台，专注优质商品内容打造，为达人提供优质的选品渠道，并有大量优质商家dou+支持",
        "url": "https://www.darentui.com",
        "category": "抖音验货",
        "tags": ["短视频","带货","达人","选品","dou+"]
    },
    {
        "name": "AK抖客联盟",
        "description": "抖音淘客，致力于商家抖音带货，抖音淘客种草达人原创视频生产,视频生产者变现平台，颠覆传统抖音带货模式",
        "url": "http://daren.akdklm.com",
        "category": "抖音验货",
        "tags": ["抖客","联盟","短视频","带货","变现"]
    },
    {
        "name": "带货网",
        "description": "抖音快手达人带货，免费拿样品，短视频分发平台",
        "url": "http://www.daihw.com",
        "category": "抖音验货",
        "tags": ["带货","样品","达人","短视频","抖音"]
    },
    {
        "name": "嘀嘀红人",
        "description": "短视频网红商家自动派单带货平台，10000个网红全天在线选品，纯佣金带货，抖音、快手、小红书全渠道网红帮你卖货",
        "url": "https://www.ddhongren.com",
        "category": "抖音验货",
        "tags": ["红人","带货","网红","短视频","佣金"]
    },
    {
        "name": "带货圈",
        "description": "专注为抖音短视频、直播达人提供优质高佣商品，免费提供验货样品并发放视频创作补贴",
        "url": "https://www.daihuo360.com",
        "category": "AI视频工具",
        "tags": ["带货","抖音","样品","补贴","短视频"]
    },
    {
        "name": "全五分",
        "description": "专业的短视频数据分析平台，抖音验货产品有很多，但是像全五分这样的靠谱抖音验货平台却不多见",
        "url": "http://www.quan5fen.com",
        "category": "抖音验货",
        "tags": ["短视频","数据分析","抖音","验货","产品"]
    },
    {
        "name": "悟空带货",
        "description": "抖音数据实时检测分分析淘客推广、流量变现、一站式解决方案，各行业类型的热门、飙升榜单，实时数据监测",
        "url": "https://www.daihuo.com",
        "category": "抖音验货",
        "tags": ["抖音","数据","淘客","推广","变现"]
    },
    {
        "name": "飞瓜数据",
        "description": "致力提供专业的实时抖音直播与商品带货数据，热门主播排行榜，热门抖音音乐与视频排行，抖音小店排行",
        "url": "https://dy.feigua.cn",
        "category": "AI音频工具",
        "tags": ["飞瓜","数据","抖音","直播","带货"]
    },
    {
        "name": "抖商眼",
        "description": "专业的抖音电商工具分析工具，提供抖音热门商品排行榜，抖音热门预测，达人与商品的监控分析等功能",
        "url": "https://doushangyan.com",
        "category": "抖音验货",
        "tags": ["抖音","电商","分析","监控","商品"]
    },
    {
        "name": "淘宝联盟",
        "description": "淘宝联盟官方网站，阿里巴巴集团旗下淘宝客推广平台，连接商家与内容创作者的桥梁",
        "url": "https://pub.alimama.com",
        "category": "AI写作工具",
        "tags": ["淘宝","联盟","淘客","推广","佣金"]
    },
    {
        "name": "淘宝联盟规则中心",
        "description": "淘宝联盟常见规则，淘宝推广必须遵守的各项规章制度和政策",
        "url": "https://rule.alimama.com",
        "category": "淘宝联盟",
        "tags": ["规则","淘宝","联盟","政策","推广"]
    },
    {
        "name": "阿里创作平台",
        "description": "在人工智能将替代一切的未来，唯有内容的创作无可替代，阿里巴巴提供的内容创作平台",
        "url": "https://we.taobao.com",
        "category": "AI写作工具",
        "tags": ["创作","内容","平台","淘宝","推广"]
    },
    {
        "name": "淘宝联盟官方论坛",
        "description": "淘宝联盟官方千牛号，面向广大淘宝客伙伴们，进行各种信息的互动平台",
        "url": "https://market.m.taobao.com",
        "category": "淘宝联盟",
        "tags": ["论坛","淘宝","联盟","互动","交流"]
    },
    {
        "name": "万堂书院",
        "description": "阿里妈妈万堂书院小二讲解直钻淘产品功能动向以及内容运营玩法，行业小二带来的不同类目推广技巧",
        "url": "https://shuyuan.taobao.com",
        "category": "淘宝联盟",
        "tags": ["书院","阿里","妈妈","推广","运营"]
    },
    {
        "name": "联盟商家中心",
        "description": "淘宝客官方动态发布，商家管理推广计划的平台",
        "url": "https://ad.alimama.com",
        "category": "淘宝联盟",
        "tags": ["商家","联盟","淘宝","推广","计划"]
    },
    {
        "name": "淘宝联盟开发者中心",
        "description": "淘宝联盟电商生态开发者服务平台，提供API接口和开发文档",
        "url": "https://open.alimama.com",
        "category": "AI编程工具",
        "tags": ["开发","API","联盟","淘宝","接口"]
    },
    {
        "name": "速推客",
        "description": "速推客返利机器人 – 集淘宝、京东、拼多多、唯品会、抖音多合一的返利机器人",
        "url": "https://www.stkfanli.com",
        "category": "网红营销",
        "tags": ["返利","机器人","淘宝客","推广","佣金"]
    },
    {
        "name": "腾促",
        "description": "腾促抖音达人，快手达人，免费拿样品验货平台，连接商家与网红",
        "url": "http://www.tengcu.com",
        "category": "网红营销",
        "tags": ["抖音","达人","快手","样品","验货"]
    },
    {
        "name": "大淘客抖音验货",
        "description": "大淘客联盟旗下带货短视频专业数据分析平台，让短视频带货更轻松",
        "url": "http://dh.dataoke.com",
        "category": "网红营销",
        "tags": ["大淘客","抖音","验货","短视频","数据"]
    },
    {
        "name": "顶咖网",
        "description": "专注为电商人创业提供一站式的企业服务，在淘宝、天猫网店的转让交易服务领域深耕多年",
        "url": "http://www.dingka.com",
        "category": "网红营销",
        "tags": ["电商","创业","淘宝","网店","交易"]
    },
    {
        "name": "打榜社区",
        "description": "依托打榜参谋大数据及人工智能技术，为品牌客户提供基于短视频生态的创作和投放服务",
        "url": "http://wangwuhaoping.com",
        "category": "网红营销",
        "tags": ["打榜","短视频","创作","投放","数据"]
    },
    {
        "name": "抖老板",
        "description": "集联盟订单同步，抖音带货数据分析，抖音运营团队管理于一体的一站式数据管理平台",
        "url": "https://www.doulaoban.com",
        "category": "网红营销",
        "tags": ["抖音","带货","数据","运营","管理"]
    },
    {
        "name": "带货助手",
        "description": "实时监控商品的佣金计划，更有图表展示商品30天佣金走势、商品销量情况等",
        "url": "https://tools.daihuo.com",
        "category": "AI聊天助手",
        "tags": ["带货","佣金","监控","销量","数据"]
    },
    {
        "name": "Inpaint",
        "description": "在线图片编辑工具，智能擦除不需要的物体和水印",
        "url": "https://inpaint.app",
        "category": "图片处理与去水印",
        "tags": ["去水印","物体擦除","图片修复","在线编辑","AI"]
    },
    {
        "name": "PhotoScissors",
        "description": "在线去除图片背景和不需要的对象，支持自动和手动模式",
        "url": "https://photoscissors.com",
        "category": "图片处理与去水印",
        "tags": ["去背景","去水印","在线工具","图片处理"]
    },
    {
        "name": "Pixlr",
        "description": "在线PS编辑器，支持图片处理、去水印、去背景等功能",
        "url": "https://pixlr.com",
        "category": "图像处理",
        "tags": ["在线PS","去水印","图片编辑","设计工具"]
    },
    {
        "name": "Fotor",
        "description": "免费在线图片编辑器和设计工具，包含去水印功能",
        "url": "https://www.fotor.com",
        "category": "图片处理与去水印",
        "tags": ["图片编辑","去水印","设计","滤镜","效果"]
    },
    {
        "name": "BentoClip",
        "description": "视频水印移除工具，可快速去除视频和图片的水印",
        "url": "https://www.bentoclip.com",
        "category": "图片处理与去水印",
        "tags": ["去水印","视频处理","视频编辑","在线工具"]
    },
    {
        "name": "Recraft AI",
        "description": "生成矢量、3D和图标的智能设计工具，提供多样化创意素材",
        "url": "https://www.recraft.ai",
        "category": "AI设计工具",
        "tags": ["矢量生成","3D设计","图标创作"]
    },
    {
        "name": "Ilus AI",
        "description": "风格化插画生成工具，创建独特艺术风格的插图",
        "url": "https://ilus.ai",
        "category": "AI设计工具",
        "tags": ["风格化","插画生成","艺术风格"]
    },
    {
        "name": "Pictographic",
        "description": "AI插图资源库，提供多样化的插画和图形素材",
        "url": "https://pictographic.ai",
        "category": "AI设计工具",
        "tags": ["资源库","插画素材","多样化"]
    },
    {
        "name": "Illustroke",
        "description": "SVG矢量插画生成工具，创建可缩放的矢量图形",
        "url": "https://illustroke.com",
        "category": "AI设计工具",
        "tags": ["SVG","矢量插画","可缩放"]
    },
    {
        "name": "illostrationAI",
        "description": "多风格插画生成平台，支持各种艺术风格的创作",
        "url": "https://illostration.com",
        "category": "AI设计工具",
        "tags": ["多风格","插画生成","艺术创作"]
    },
    {
        "name": "Vectorizer.AI",
        "description": "位图转矢量工具，将像素图像转换为可缩放的矢量格式",
        "url": "https://vectorizer.ai",
        "category": "AI设计工具",
        "tags": ["位图转矢量","图像转换","可缩放"]
    },
    {
        "name": "IconifyAI",
        "description": "App图标生成工具，创建一致风格的应用图标集",
        "url": "https://iconify.ai",
        "category": "AI设计工具",
        "tags": ["App图标","风格一致","图标集"]
    },
    {
        "name": "Appicons AI",
        "description": "精美图标设计工具，为应用和网站创建专业图标",
        "url": "https://appicons.ai",
        "category": "AI设计工具",
        "tags": ["精美图标","应用设计","专业图标"]
    },
    {
        "name": "Magician",
        "description": "Figma图标插件，自动生成符合设计系统的图标",
        "url": "https://magician.design",
        "category": "AI设计工具",
        "tags": ["Figma插件","图标生成","设计系统"]
    },
    {
        "name": "VoxCraft",
        "description": "AI生成3D模型工具，通过文本描述创建三维物体",
        "url": "https://voxcraft.ai",
        "category": "AI建模工具",
        "tags": ["生成3D","文本描述","三维物体"]
    },
    {
        "name": "Realibox AI",
        "description": "草图转3D渲染图工具，快速将2D设计转为3D展示",
        "url": "https://www.realibox.com",
        "category": "AI建模工具",
        "tags": ["草图转3D","渲染图","快速转换"]
    },
    {
        "name": "Dora AI",
        "description": "3D动画生成平台，创建沉浸式体验和交互内容",
        "url": "https://www.dora.run",
        "category": "AI建模工具",
        "tags": ["3D动画","沉浸式","交互内容"]
    },
    {
        "name": "酷家乐AI",
        "description": "智能家居设计平台，提供一站式室内设计解决方案",
        "url": "https://www.kujiale.com",
        "category": "AI设计工具",
        "tags": ["家居设计","室内设计","一站式"]
    },
    {
        "name": "模袋云AI",
        "description": "建筑和景观设计平台，提供专业的设计辅助工具",
        "url": "https://www.modaiyun.com",
        "category": "AI设计工具",
        "tags": ["建筑设计","景观设计","专业工具"]
    },
    {
        "name": "Collov AI",
        "description": "室内家居设计生成工具，创建个性化家居空间",
        "url": "https://collov.com",
        "category": "AI设计工具",
        "tags": ["室内设计","家居生成","个性化"]
    },
    {
        "name": "Vizcom",
        "description": "手绘图转产品设计图工具，将概念草图转为精细渲染",
        "url": "https://www.vizcom.ai",
        "category": "AI设计工具",
        "tags": ["手绘转换","产品设计","精细渲染"]
    },
    {
        "name": "笔魂AI",
        "description": "智能抠图和无损放大工具，提升图片编辑效率",
        "url": "https://bishen.ink",
        "category": "AI图像工具",
        "tags": ["抠图","无损放大","图片编辑"]
    },
    {
        "name": "简单设计",
        "description": "在线图片处理工具，提供多种图像编辑和优化功能",
        "url": "https://www.ijiantu.com",
        "category": "AI图像工具",
        "tags": ["在线处理","图片编辑","多功能"]
    },
    {
        "name": "笔格设计",
        "description": "智能消除和文生图工具，简化图像编辑流程",
        "url": "https://bigesj.com",
        "category": "AI图像工具",
        "tags": ["智能消除","文生图","编辑流程"]
    },
    {
        "name": "Eva Design System",
        "description": "智能色彩生成系统，为设计提供和谐的色彩方案",
        "url": "https://colors.eva.design",
        "category": "设计工具",
        "tags": ["色彩生成","设计系统","和谐方案"]
    },
    {
        "name": "Khroma",
        "description": "AI调色盘工具，学习用户偏好生成个性化配色",
        "url": "https://www.khroma.co",
        "category": "AI设计工具",
        "tags": ["AI调色","个性化","用户偏好"]
    },
    {
        "name": "ColorMagic",
        "description": "调色板生成工具，创建协调一致的色彩组合",
        "url": "https://colormagic.app",
        "category": "AI设计工具",
        "tags": ["调色板","色彩组合","协调一致"]
    },
    {
        "name": "135 AI排版",
        "description": "公众号图文排版工具，提供智能化的内容布局服务",
        "url": "https://www.135editor.com",
        "category": "AI排版工具",
        "tags": ["公众号","图文排版","内容布局"]
    },
    {
        "name": "ColorHunter",
        "description": "AI调色工具，学习用户偏好生成个性化配色",
        "url": "https://colorhunter.ai",
        "category": "AI设计工具",
        "tags": ["AI调色","个性化","用户偏好"]
    },
    {
        "name": "千图网",
        "description": "设计素材平台，提供丰富的AI生成和设计资源",
        "url": "https://www.58pic.com",
        "category": "素材资源",
        "tags": ["设计素材","资源平台","AI生成"]
    },
    {
        "name": "包图网AI素材库",
        "description": "AI生成素材库，提供多样化的设计元素和模板",
        "url": "https://ibaotu.com",
        "category": "素材资源",
        "tags": ["AI素材","设计元素","模板库"]
    },
    {
        "name": "Fable Prism",
        "description": "AI驱动的动效设计工具，简化动画创作流程",
        "url": "https://fable.app",
        "category": "AI动画工具",
        "tags": ["动效设计","AI驱动","动画创作"]
    },
    {
        "name": "Framer AI",
        "description": "基于AI的网站设计和动效创作平台，支持快速原型开发",
        "url": "https://www.framer.com",
        "category": "AI设计工具",
        "tags": ["网站设计","动效创作","原型开发"]
    },
    {
        "name": "Wegic",
        "description": "AI建站平台，通过文本描述快速创建专业网站",
        "url": "https://wegic.com",
        "category": "AI建站工具",
        "tags": ["AI建站","文本描述","快速创建"]
    },
    {
        "name": "Pimento",
        "description": "创意参考平台，提供设计灵感和创意源泉",
        "url": "https://pimento.ai",
        "category": "设计资源",
        "tags": ["创意参考","设计灵感","创意源泉"]
    },
    {
        "name": "Motiff 妙多",
        "description": "猿辅导UI工具，提供低代码设计和开发解决方案",
        "url": "https://motiff.yuanfudao.com",
        "category": "AI编程工具",
        "tags": ["猿辅导","UI工具","低代码"]
    },
    {
        "name": "CodeWhisperer",
        "description": "亚马逊推出的AI代码生成工具，提供智能代码补全",
        "url": "https://aws.amazon.com",
        "category": "AI编程工具",
        "tags": ["亚马逊","代码生成","AWS"]
    },
    {
        "name": "aiXcoder",
        "description": "自然语言到代码生成工具，支持多种编程语言",
        "url": "https://www.aixcoder.com",
        "category": "AI编程工具",
        "tags": ["代码生成","自然语言","多语言支持"]
    },
    {
        "name": "豆包MarsCode",
        "description": "字节跳动推出的AI编程助手，提供代码生成与补全功能",
        "url": "https://www.doubao.com",
        "category": "AI编程工具",
        "tags": ["字节跳动","代码生成","AI编程"]
    },
    {
        "name": "Devin",
        "description": "首个全自主AI工程师，能独立完成软件开发项目",
        "url": "https://www.cognition.ai",
        "category": "AI编程工具",
        "tags": ["AI工程师","全栈开发","自主编程"]
    },
    {
        "name": "码上飞",
        "description": "AI驱动的应用自动生成平台，提升开发效率",
        "url": "https://www.mashangfei.com",
        "category": "AI编程工具",
        "tags": ["应用生成","开发效率","AI编程"]
    },
    {
        "name": "MarsX",
        "description": "无代码开发平台，通过AI快速构建应用",
        "url": "https://marsx.dev",
        "category": "AI编程工具",
        "tags": ["无代码开发","应用构建","AI辅助"]
    },
    {
        "name": "Sketch2Code",
        "description": "微软开发的工具，将手绘草图转换为HTML代码",
        "url": "https://www.microsoft.com",
        "category": "AI编程工具",
        "tags": ["微软","草图转HTML","设计转代码"]
    },
    {
        "name": "Imgcook",
        "description": "阿里开发的设计稿转前端代码工具，提高开发效率",
        "url": "https://www.imgcook.com",
        "category": "AI编程工具",
        "tags": ["阿里","设计转代码","前端开发"]
    },
    {
        "name": "Deco",
        "description": "京东开发的设计稿转多端代码工具，支持多平台",
        "url": "https://deco-preview.jd.com",
        "category": "AI编程工具",
        "tags": ["京东","设计转代码","多端开发"]
    },
    {
        "name": "Quest AI",
        "description": "将设计稿自动转换为React代码的AI工具",
        "url": "https://www.quest.ai",
        "category": "AI编程工具",
        "tags": ["设计转代码","React","AI转换"]
    },
    {
        "name": "Locofy",
        "description": "将Figma或Sketch设计稿转换为代码的平台",
        "url": "https://www.locofy.ai",
        "category": "AI编程工具",
        "tags": ["Figma","Sketch","代码转换"]
    },
    {
        "name": "CodeRabbit",
        "description": "AI驱动的代码审查工具，提高代码质量",
        "url": "https://coderabbit.ai",
        "category": "AI编程工具",
        "tags": ["代码审查","AI分析","质量控制"]
    },
    {
        "name": "CodiumAI",
        "description": "代码测试分析工具，自动生成测试用例",
        "url": "https://www.codium.ai",
        "category": "AI编程工具",
        "tags": ["代码测试","测试生成","AI分析"]
    },
    {
        "name": "Codiga",
        "description": "实时代码分析工具，提供即时的代码质量反馈",
        "url": "https://www.codiga.io",
        "category": "AI编程工具",
        "tags": ["实时分析","代码质量","即时反馈"]
    },
    {
        "name": "Lovable",
        "description": "对话式Web开发工具，通过自然语言创建网站",
        "url": "https://www.lovable.ai",
        "category": "AI编程工具",
        "tags": ["对话式开发","Web开发","自然语言"]
    },
    {
        "name": "Plandex",
        "description": "终端AI编程引擎，通过自然语言执行开发任务",
        "url": "https://www.plandex.dev",
        "category": "AI编程工具",
        "tags": ["终端编程","AI引擎","自然语言"]
    },
    {
        "name": "HeyCLI",
        "description": "将自然语言转换为命令行指令的AI工具",
        "url": "https://www.heycli.com",
        "category": "AI编程工具",
        "tags": ["命令行","自然语言","AI转换"]
    },
    {
        "name": "Solo",
        "description": "Mozilla开发的无代码建站平台，简化网站创建过程",
        "url": "https://solo.build",
        "category": "AI编程工具",
        "tags": ["Mozilla","无代码","建站平台"]
    },
    {
        "name": "Hocoos",
        "description": "AI驱动的网站构建平台，快速创建专业网站",
        "url": "https://www.hocoos.com",
        "category": "低代码平台",
        "tags": ["AI建站","网站构建","专业设计"]
    },
    {
        "name": "Debuild",
        "description": "低代码网页开发平台，简化Web应用创建",
        "url": "https://debuild.co",
        "category": "AI编程工具",
        "tags": ["低代码","网页开发","Web应用"]
    },
    {
        "name": "Project IDX",
        "description": "谷歌开发的云端IDE，支持多种编程语言和框架",
        "url": "https://developers.google.com",
        "category": "AI编程工具",
        "tags": ["谷歌","云端IDE","多语言支持"]
    },
    {
        "name": "PromptPerfect",
        "description": "专业提示词优化工具，支持多模型（如GPT、Stable Diffusion等），可自动优化提示结构",
        "url": "https://promptperfect.jina.ai",
        "category": "AI提示词工具",
        "tags": ["提示词优化","多模型支持","自动优化"]
    },
    {
        "name": "PublicPrompts",
        "description": "开源提示词库，适合艺术创作和设计灵感",
        "url": "https://publicprompts.art",
        "category": "AI提示词工具",
        "tags": ["开源提示词","艺术创作","设计灵感"]
    },
    {
        "name": "MJ Prompt Tool",
        "description": "MidJourney专用提示生成器，支持风格、灯光等参数调节",
        "url": "https://mjprompttool.com",
        "category": "AI提示词工具",
        "tags": ["MidJourney","提示生成器","参数调节"]
    },
    {
        "name": "ChatGPT Shortcut",
        "description": "中文快捷指令库，分类明确（写作、营销、编程等），一键调用",
        "url": "https://newzone.top",
        "category": "AI提示词工具",
        "tags": ["中文指令库","快捷调用","分类明确"]
    },
    {
        "name": "AIPRM",
        "description": "ChatGPT浏览器插件，内置数百个预设提示词（SEO、数据分析等）",
        "url": "https://aiprm.com",
        "category": "AI提示词工具",
        "tags": ["浏览器插件","预设提示词","SEO"]
    },
    {
        "name": "Visual Prompt Builder",
        "description": "通过拖拽生成复杂提示词，适合图像生成模型",
        "url": "https://viaualpromptbuilder.com",
        "category": "AI提示词工具",
        "tags": ["拖拽生成","复杂提示词","图像生成"]
    },
    {
        "name": "Generrated",
        "description": "DALL·E 2提示词设计指南，附案例解析",
        "url": "https://generrated.com",
        "category": "AI提示词工具",
        "tags": ["DALL·E 2","提示词设计","案例解析"]
    },
    {
        "name": "词魂",
        "description": "中文AIGC提示词库，聚焦本土化场景（如电商文案、短视频脚本）",
        "url": "https://cihun.com",
        "category": "AI提示词工具",
        "tags": ["中文提示词","本土化场景","电商文案"]
    },
    {
        "name": "AI Short",
        "description": "中文精简提示词生成器，输入关键词快速输出优化指令",
        "url": "https://aishort.top",
        "category": "AI提示词工具",
        "tags": ["中文生成器","精简提示词","关键词优化"]
    },
    {
        "name": "ClickPrompt",
        "description": "可视化提示词工作流工具，支持团队协作",
        "url": "https://clickprompt.org",
        "category": "AI提示词工具",
        "tags": ["工作流工具","团队协作","可视化"]
    },
    {
        "name": "Snack Prompt",
        "description": "极简提示词生成器，适合快速实验",
        "url": "https://snackprompt.com",
        "category": "AI提示词工具",
        "tags": ["极简生成器","快速实验","提示词"]
    },
    {
        "name": "PromptVine",
        "description": "用户共享的提示词库，含评分系统",
        "url": "https://promptvine.com",
        "category": "AI提示词工具",
        "tags": ["用户共享","提示词库","评分系统"]
    },
    {
        "name": "Base44",
        "description": "让我们现在就让你的梦想成真。 (Original: Let's make your dream a reality. Right now.)",
        "url": "https://base44.pxf.io",
        "category": "Vibe Coding",
        "tags": ["AI","开发","梦想实现","快速"]
    },
    {
        "name": "Jason AI",
        "description": "AI驱动的B2B销售外联助手。 (Original: AI-powered assistant for B2B sales outreach)",
        "url": "https://jasonai.tech",
        "category": "AI聊天助手",
        "tags": ["AI","销售","B2B","外联"]
    },
    {
        "name": "Speechmatics | AI Voice Agents",
        "description": "使用最佳语音识别技术构建更智能的AI语音代理。 (Original: Build smarter AI voice agents with the best speech recognition technology)",
        "url": "https://www.speechmatics.com",
        "category": "AI音频工具",
        "tags": ["AI","语音","代理","识别"]
    },
    {
        "name": "Averi AI",
        "description": "AI营销工作空间：策略、内容、团队一体。 (Original: The AI Marketing Workspace: Strategy, Content, Team in One)",
        "url": "https://www.averi.ai",
        "category": "营销",
        "tags": ["AI","营销","策略","内容"]
    },
    {
        "name": "Kick",
        "description": "为你完成工作的会计软件。 (Original: Accounting software that does the work for you)",
        "url": "https://kick.co",
        "category": "会计",
        "tags": ["会计","软件","自动化"]
    },
    {
        "name": "BodhiGPT | Podcasts",
        "description": "你的个性化播客播放器，带有AI洞察。 (Original: Your personalized podcast player with AI insights.)",
        "url": "https://www.bodhigpt.com",
        "category": "AI聊天助手",
        "tags": ["播客","AI","个性化","洞察"]
    },
    {
        "name": "Support Flow",
        "description": "AI助手主动提供最佳技术内容、数据和行动。 (Original: AI assistant that proactively surfaces the best technical content, data, and actions.)",
        "url": "https://www.pixiebrix.com",
        "category": "AI聊天助手",
        "tags": ["AI","助手","技术支持","数据"]
    },
    {
        "name": "Remove Background by Picsart",
        "description": "即时移除背景，获得干净、透明的图像——完美用于产品、设计和创意。 (Original: Instantly remove backgrounds for clean, transparent images—perfect for products, designs, and creative)",
        "url": "https://picsart.io",
        "category": "图像处理",
        "tags": ["图像","背景移除","编辑"]
    },
    {
        "name": "TheLibrarian.io",
        "description": "使用WhatsApp AI助手增强你的日常生活。 (Original: Supercharge your day with a WhatsApp AI Assistant)",
        "url": "https://thelibrarian.io",
        "category": "AI聊天助手",
        "tags": ["AI","助手","WhatsApp","日常"]
    },
    {
        "name": "Fundraising with Evalyze Ai",
        "description": "AI自动化初创公司筹资，从推销到投资者匹配。 (Original: AI automates startup fundraising from pitch to investor match.)",
        "url": "https://www.evalyze.ai",
        "category": "筹资",
        "tags": ["AI","筹资","初创","自动化"]
    },
    {
        "name": "Candidate Screening - AI-Powered Hiring & Assessment Platform",
        "description": "AI驱动的候选人筛选，即时结果。 (Original: AI-powered candidate screening with instant results.)",
        "url": "https://candidatescreenings.com",
        "category": "候选人筛选",
        "tags": ["AI","招聘","筛选","评估"]
    },
    {
        "name": "Atai - Automated Testing AI",
        "description": "AI驱动的基于视觉的自动化测试编写。 (Original: AI-powered vision-based automated test writing.)",
        "url": "https://automatedtesting.ai",
        "category": "AI写作工具",
        "tags": ["AI","测试","自动化","视觉"]
    },
    {
        "name": "Thinkfill AI – AI Procurement Platform",
        "description": "更快实施正确的AI。 (Original: Implement the Right AI, Faster.)",
        "url": "https://thinkfill.ai",
        "category": "采购",
        "tags": ["AI","采购","平台","实施"]
    },
    {
        "name": "Decory AI",
        "description": "艺术遇见算法 - 你的空间，重新定义！ (Original: Art Meets Algorithm - Your Space, Redefined!)",
        "url": "https://www.decory.ai",
        "category": "室内设计",
        "tags": ["AI","室内设计","艺术","算法"]
    },
    {
        "name": "BriefNest",
        "description": "用于策略、创意和内容简报的AI工具，支持英文和西班牙文。 (Original: AI tool for strategic, creative, and content briefs in English & Spanish)",
        "url": "https://briefnest-ai.up.railway.app",
        "category": "生产力",
        "tags": ["AI","简报","策略","创意"]
    },
    {
        "name": "Whimsey: The AI Shared Inbox for Your Business",
        "description": "将你的共享收件箱转变为自动化收入引擎。 (Original: Turn your shared inbox into an automated revenue engine)",
        "url": "https://whimsey.ai",
        "category": "电子邮件管理",
        "tags": ["AI","电子邮件","共享","自动化"]
    },
    {
        "name": "illumi",
        "description": "上下文感知的AI团队白板。 (Original: Context-aware AI whiteboard for teams.)",
        "url": "https://www.illumi.one",
        "category": "团队协作",
        "tags": ["AI","白板","团队","上下文"]
    },
    {
        "name": "FirstSign AI",
        "description": "自动生成的访谈 + 你今天可以行动的ICP。 (Original: Auto-generated interviews + ICPs you can act on today.)",
        "url": "https://firstsign.ai",
        "category": "商业",
        "tags": ["AI","访谈","ICP","自动生成"]
    },
    {
        "name": "Tecmate",
        "description": "数字转型工作流的AI推荐。 (Original: AI recommendations for digital transformation workflows.)",
        "url": "https://tecmate.lovable.app",
        "category": "软件推荐",
        "tags": ["AI","推荐","数字转型","工作流"]
    },
    {
        "name": "CoeFont Interpreter",
        "description": "AI驱动的多语言团队语音解释。 (Original: AI-powered voice interpretation for multilingual teams)",
        "url": "https://coefont.cloud",
        "category": "AI音频工具",
        "tags": ["AI","语音","解释","多语言"]
    },
    {
        "name": "RambleFix",
        "description": "⚡ 通过大声思考写作 - 电子邮件、笔记、文章，以你的风格。 (Original: ⚡ Write by thinking aloud - emails, notes, articles, in your style.)",
        "url": "https://ramblefix.com",
        "category": "AI写作工具",
        "tags": ["写作","转录","电子邮件","笔记"]
    },
    {
        "name": "remio: Your Personal AI Assistant",
        "description": "你的AI驱动的个人知识中心，适用于专业人士。 (Original: Your AI-powered personal knowledge hub for professionals.)",
        "url": "https://www.remio.ai",
        "category": "笔记",
        "tags": ["AI","助手","知识","专业"]
    },
    {
        "name": "ForumScout - Free social listening tool",
        "description": "使用AI驱动的社交监听免费跟踪在线品牌提及。 (Original: Track online brand mentions with AI-powered social listening, for free.)",
        "url": "https://forumscout.app",
        "category": "品牌监控",
        "tags": ["社交监听","品牌","跟踪","免费"]
    },
    {
        "name": "Radiant",
        "description": "从每次对话中获得不可阻挡的动力。 (Original: Unstoppable momentum from every conversation)",
        "url": "https://radiantapp.com",
        "category": "AI聊天助手",
        "tags": ["对话","动力","生产力"]
    },
    {
        "name": "Hyperbrowser",
        "description": "AI代理和应用的云浏览器。 (Original: Cloud browsers for AI agents and apps.)",
        "url": "https://www.hyperbrowser.ai",
        "category": "网页浏览",
        "tags": ["云浏览器","AI代理","应用"]
    },
    {
        "name": "Nebius AI Studio",
        "description": "托管开源模型以实现更快、更便宜的AI推理。 (Original: Host open-source models for faster, cheaper AI inference.)",
        "url": "https://nebius.com",
        "category": "AI推理",
        "tags": ["AI","推理","开源","托管"]
    },
    {
        "name": "Explee",
        "description": "使用完整网页数据和AI丰富找到3倍多的B2B潜在客户。 (Original: Find 3X more B2B leads with full web data and AI enrichment)",
        "url": "https://explee.com",
        "category": "潜在客户开发",
        "tags": ["B2B","潜在客户","数据","AI"]
    },
    {
        "name": "NewPic.io",
        "description": "一键专业照片编辑。 (Original: Professional photo editing in one click.)",
        "url": "https://newpic.io",
        "category": "图像编辑",
        "tags": ["照片","编辑","专业","一键"]
    },
    {
        "name": "Clientli",
        "description": "使用你的提案副驾驶10倍你的客户；针对数字转型顾问。 (Original: 10X Your Clients with Your Proposal Copilot; for digital transformation consultants)",
        "url": "https://clientli.lovable.app",
        "category": "AI编程工具",
        "tags": ["提案","顾问","数字转型"]
    },
    {
        "name": "Changify",
        "description": "使用你的变更管理副驾驶10倍AI采用；针对数字转型顾问。 (Original: 10X AI Adoption with Your Change Management Copilot; for digital transformation consultants)",
        "url": "https://changify.lovable.app",
        "category": "AI编程工具",
        "tags": ["变更管理","AI采用","顾问"]
    },
    {
        "name": "Stackify",
        "description": "优化你的SaaS堆栈的AI副驾驶。 (Original: AI copilot that optimizes your SaaS stack.)",
        "url": "https://stackify.lovable.app",
        "category": "AI编程工具",
        "tags": ["SaaS","优化","AI副驾驶"]
    },
    {
        "name": "Leanify.app",
        "description": "即时优化你的操作的AI副驾驶。 (Original: AI Co-Pilot that optimizes your operations instantly.)",
        "url": "https://leanify.lovable.app",
        "category": "业务分析",
        "tags": ["操作优化","AI副驾驶","即时"]
    },
    {
        "name": "AutoFlo",
        "description": "发现要自动化的内容，即时部署。 (Original: Discover what to automate, deploy instantly.)",
        "url": "https://autoflo.lovable.app",
        "category": "流程自动化",
        "tags": ["自动化","部署","发现"]
    },
    {
        "name": "Creative Arena by Contra",
        "description": "比较。投票。推进创意AI。 (Original: Compare. Vote. Advance Creative AI.)",
        "url": "https://contra.com",
        "category": "LLM比较",
        "tags": ["创意AI","比较","投票"]
    },
    {
        "name": "Apex - X Reply AI",
        "description": "在几分钟内构建品牌，而不是几小时。 (Original: Build brand in minutes, not hours.)",
        "url": "https://www.apexagents.ai",
        "category": "推特",
        "tags": ["品牌构建","快速","AI"]
    },
    {
        "name": "Thea",
        "description": "AI学习工具，帮助掌握材料，而不仅仅是记忆。 (Original: AI study tools to master material, not just memorize it.)",
        "url": "https://www.theastudy.com",
        "category": "AI教育与学习",
        "tags": ["AI","学习","掌握","工具"]
    },
    {
        "name": "Cimphony AI",
        "description": "为中小企业和初创公司提供法律服务、建议、文件起草和合同。 (Original: Legal services, advice, documents drafting, & contracts for SMBs and startups)",
        "url": "https://www.cimphony.ai",
        "category": "法律咨询",
        "tags": ["法律","服务","中小企业","初创"]
    },
    {
        "name": "KinesteX AI Personal Trainer in your Digital Health Platform",
        "description": "你的AI驱动的个人健身教练。 (Original: Your AI-powered personal fitness trainer.)",
        "url": "https://www.kinestex.com",
        "category": "物理疗法",
        "tags": ["AI","健身","教练","健康"]
    },
    {
        "name": "Discord NotesBot",
        "description": "记录、转录和AI总结Discord通话。 (Original: Record, Transcribe, and AI Summarize Discord Calls)",
        "url": "https://www.notesbot.io",
        "category": "会议笔记",
        "tags": ["Discord","转录","总结","记录"]
    },
    {
        "name": "Organize with AI",
        "description": "说你的语言的AI照片组织器。 (Original: AI photo organizer that speaks your language)",
        "url": "https://organizewith.ai",
        "category": "图像组织",
        "tags": ["AI","照片","组织","语言"]
    },
    {
        "name": "Verify by TaiLR Made AI",
        "description": "不要因为更好的骗子而失去伟大的雇员！ (Original: Don't loose a great hire to a better liar!)",
        "url": "https://tailrmadeai.com",
        "category": "简历分析",
        "tags": ["验证","简历","招聘","红旗"]
    },
    {
        "name": "Rendera AI",
        "description": "用AI在几秒钟内重新设计任何空间。 (Original: Redesign Any Space with AI in Seconds)",
        "url": "https://www.rendera.ai",
        "category": "室内设计",
        "tags": ["AI","重新设计","空间","快速"]
    },
    {
        "name": "Yooz AI",
        "description": "根据顶级创作者训练的AI LinkedIn帖子生成器。 (Original: AI LinkedIn post generator trained on top creators.)",
        "url": "https://www.yooz.ai",
        "category": "LinkedIn",
        "tags": ["AI","LinkedIn","帖子","生成器"]
    },
    {
        "name": "AI Phone Number | ChatOdyssey",
        "description": "唯一可以拨打和接听的AI电话号码。 (Original: The only AI phone number that can call and pick up.)",
        "url": "https://www.chatodyssey.com",
        "category": "通话",
        "tags": ["AI","电话","拨打","接听"]
    },
    {
        "name": "byliner.ai",
        "description": "记者的不公平优势。 (Original: The Unfair Advantage for Journalists.)",
        "url": "https://byliner.ai",
        "category": "日志记录",
        "tags": ["记者","优势","AI"]
    },
    {
        "name": "devlo",
        "description": "AI软件平台。 (Original: AI Software Platform)",
        "url": "https://devlo.ai",
        "category": "氛围编码",
        "tags": ["AI","软件","平台"]
    },
    {
        "name": "Nano Banana.org",
        "description": "通过自然聊天对话创建和编辑图像。 (Original: Create and edit images through natural chat conversations.)",
        "url": "https://nanobanana.org",
        "category": "AI聊天助手",
        "tags": ["图像","创建","编辑","聊天"]
    },
    {
        "name": "CodeAsk",
        "description": "AI读取你的代码，回答团队问题。 (Original: AI reads your code, answers team questions.)",
        "url": "https://www.codeask.ai",
        "category": "AI编程工具",
        "tags": ["代码","AI","问题","团队"]
    },
    {
        "name": "dbrief",
        "description": "大规模自动化专家访谈用于内容。 (Original: Automate expert interviews for content at scale.)",
        "url": "https://www.dbrief.io",
        "category": "中小企业访谈",
        "tags": ["访谈","自动化","内容","规模"]
    },
    {
        "name": "Fortellar | Cybersecurity Compliance Assessment",
        "description": "赋能组织实现合规准备。 (Original: Empowering Organizations to Achieve Compliance Readiness)",
        "url": "https://assessment.fortellar.com",
        "category": "合规",
        "tags": ["网络安全","合规","评估"]
    },
    {
        "name": "Talo",
        "description": "使用实时AI翻译打破视频通话中的语言障碍。 (Original: Break language barriers in video calls with real-time AI translation.)",
        "url": "https://www.taloai.com",
        "category": "AI视频工具",
        "tags": ["翻译","视频通话","语言障碍"]
    },
    {
        "name": "Questie AI",
        "description": "使用语音聊天和实时屏幕共享创建自定义AI游戏伴侣。 (Original: Create custom AI gaming companions with voice chat and live screenshare.)",
        "url": "https://www.questie.ai",
        "category": "AI音频工具",
        "tags": ["AI","游戏","伴侣","语音"]
    },
    {
        "name": "MyCareerKarma",
        "description": "你的AI驱动的更好职业指南。 (Original: Your AI-Powered Guide to a Better Career.)",
        "url": "https://mycareerkarma.app",
        "category": "职业",
        "tags": ["AI","职业","指南"]
    },
    {
        "name": "one.email",
        "description": "使用AI将电子邮件混乱转变为清晰。 (Original: Turn email chaos into clarity with AI)",
        "url": "https://www.one.email",
        "category": "电子邮件管理",
        "tags": ["电子邮件","AI","清晰","管理"]
    },
    {
        "name": "PhoneCaseAI",
        "description": "使用AI即时将你的想法转变为惊人的自定义手机壳。 (Original: Turn your ideas into stunning, custom phone cases - instantly, with AI.)",
        "url": "https://phonecaseai.com",
        "category": "手机壳设计",
        "tags": ["手机壳","设计","AI","自定义"]
    },
    {
        "name": "Polymer Runtime Data Security",
        "description": "使用实时风险管理防止AI数据泄露。 (Original: Prevent AI data breaches with real-time risk management.)",
        "url": "https://www.polymerhq.io",
        "category": "网络安全",
        "tags": ["数据安全","AI","风险管理"]
    },
    {
        "name": "Marblism",
        "description": "为你的业务工作的AI员工。 (Original: AI Employees who Work for Your Business)",
        "url": "https://www.marblism.com",
        "category": "虚拟员工",
        "tags": ["AI","员工","业务"]
    },
    {
        "name": "LiftKit",
        "description": "将ChatGPT转变为你的整个营销团队。 (Original: Turn ChatGPT into your entire marketing team.)",
        "url": "https://www.getliftkit.com",
        "category": "AI聊天助手",
        "tags": ["ChatGPT","营销","团队"]
    },
    {
        "name": "Wizardly",
        "description": "神奇地为销售代表创建AI驱动的入职向导。 (Original: Magically create AI-powered onboarding wizards for sales reps.)",
        "url": "https://trywizardly.com",
        "category": "入职教程",
        "tags": ["AI","入职","向导","销售"]
    },
    {
        "name": "Overcut.ai",
        "description": "使用连续AI构建你的自治团队。 (Original: Build your autonomous team with continuous AI)",
        "url": "https://overcut.ai",
        "category": "工作流",
        "tags": ["AI","团队","自治","连续"]
    },
    {
        "name": "LPagery AI Rank Tracker",
        "description": "在AI聊天机器人中跟踪你的业务排名。 (Original: Track your business rankings in AI chatbots.)",
        "url": "https://lpagery.io",
        "category": "AI聊天助手",
        "tags": ["排名跟踪","AI聊天","业务"]
    },
    {
        "name": "Stunning",
        "description": "在几秒钟内构建AI驱动的网站。 (Original: Build AI-powered websites in seconds)",
        "url": "https://www.stunning.so",
        "category": "网站",
        "tags": ["AI","网站构建","快速"]
    },
    {
        "name": "ChatFeatured",
        "description": "在ChatGPT和AI搜索结果中被突出显示。 (Original: Get featured in ChatGPT & AI search results.)",
        "url": "https://chatfeatured.com",
        "category": "AI聊天助手",
        "tags": ["ChatGPT","AI搜索","突出"]
    },
    {
        "name": "Guideless",
        "description": "在几分钟内将任何浏览器工作流转变为精炼的、AI叙述的视频指南。 (Original: Turn any browser workflow into a polished, AI-narrated video guide in minutes.)",
        "url": "https://guideless.ai",
        "category": "AI视频工具",
        "tags": ["浏览器","工作流","视频指南","AI"]
    },
    {
        "name": "Oh My Images",
        "description": "使用AI即时创建惊人的Nano banana图像。 (Original: Create stunning Nano banana images instantly with AI.)",
        "url": "https://ohmyimages.com",
        "category": "图像",
        "tags": ["图像创建","AI","即时"]
    },
    {
        "name": "ChatNode",
        "description": "感觉像人类的客户服务AI代理。 (Original: AI Agents for customer service that feel human)",
        "url": "https://www.chatnode.ai",
        "category": "代理",
        "tags": ["AI代理","客户服务","人性化"]
    },
    {
        "name": "AutoQA",
        "description": "用纯英语描述测试，在真实浏览器中执行它们。 (Original: Describe Tests in Plain English, Execute Them in Real Browsers)",
        "url": "https://auto-qa.io",
        "category": "测试自动化",
        "tags": ["测试","自动化","浏览器","英语"]
    },
    {
        "name": "ACE ESSAY",
        "description": "以学术严谨性创作个人、引人入胜的文章。 (Original: Craft personal, engaging essays with academic rigor.)",
        "url": "https://aceessay.ai",
        "category": "AI文本人性化",
        "tags": ["文章","创作","学术","引人入胜"]
    },
    {
        "name": "Limecube",
        "description": "使用AI改变网站创建的方式。 (Original: Transforming the way websites are created with AI.)",
        "url": "https://limecube.co",
        "category": "网站",
        "tags": ["AI","网站创建","转变"]
    },
    {
        "name": "Social Intents",
        "description": "通过消息平台提供实时支持和销售。 (Original: Real-time support & sales via messaging platforms.)",
        "url": "https://www.socialintents.com",
        "category": "客户支持聊天机器人",
        "tags": ["支持","销售","消息平台"]
    },
    {
        "name": "Model Playground AI",
        "description": "并排比较AI模型，无麻烦。 (Original: Compare AI models side by side, hassle-free.)",
        "url": "https://modelplayground.ai",
        "category": "内容",
        "tags": ["AI模型","比较","无麻烦"]
    },
    {
        "name": "APOB",
        "description": "通过创建自己的个性化AI影响者赚钱。 (Original: Earn money by creating your own personalized AI influencer.)",
        "url": "https://mega.apob.ai",
        "category": "视频",
        "tags": ["AI影响者","赚钱","个性化"]
    },
    {
        "name": "Canopy API",
        "description": "通过直观的API访问实时亚马逊数据。 (Original: Access real-time Amazon data through intuitive APIs)",
        "url": "https://www.canopyapi.co",
        "category": "亚马逊数据提取",
        "tags": ["亚马逊","数据","API","实时"]
    },
    {
        "name": "Amino: Supplement Scanner",
        "description": "扫描、分析和跟踪补充剂的安全性。 (Original: Scan, analyze, and track supplements for safety.)",
        "url": "https://apps.apple.com",
        "category": "补充剂扫描",
        "tags": ["补充剂","扫描","分析","安全"]
    },
    {
        "name": "Nano-Banana.com",
        "description": "使用AI在几秒钟内创建和编辑图像。 (Original: Create and edit images in seconds with AI.)",
        "url": "https://www.nano-banana.com",
        "category": "图像编辑",
        "tags": ["图像","创建","编辑","AI"]
    },
    {
        "name": "TextMusic.net",
        "description": "即时将文本转变为美丽的音乐。 (Original: Transform text into beautiful music instantly.)",
        "url": "https://www.textmusic.net",
        "category": "AI音频工具",
        "tags": ["文本转音乐","即时","美丽"]
    },
    {
        "name": "PACT | Free Compliance Audit",
        "description": "100%免费的AI驱动网站合规审计，在几分钟内完成。 (Original: 100% Free AI-powered website compliance audits in minutes.)",
        "url": "https://ai-pact.com",
        "category": "网站合规",
        "tags": ["合规审计","网站","免费","AI"]
    },
    {
        "name": "AI Humanizer Text",
        "description": "将机器人AI文本转变为自然写作。 (Original: Transform robotic AI text into natural writing.)",
        "url": "https://aihumanizertext.com",
        "category": "AI写作工具",
        "tags": ["AI文本","人性化","自然写作"]
    },
    {
        "name": "eBookColoring",
        "description": "使用AI创建美丽的着色书。 (Original: Create Beautiful Coloring Books with AI)",
        "url": "https://ebookcoloring.com",
        "category": "着色页",
        "tags": ["着色书","AI","创建"]
    },
    {
        "name": "AIVideoMaker - Free AI Video Maker",
        "description": "即时将静态图像转变为动画视频。 (Original: Transform static images into animated videos instantly.)",
        "url": "https://aivideomaker.ai",
        "category": "AI视频工具",
        "tags": ["图像","视频","动画","免费"]
    },
    {
        "name": "RemoveMark",
        "description": "在线即时移除Sora水印。 (Original: Remove Sora watermarks instantly online.)",
        "url": "https://removemark.io",
        "category": "AI视频工具",
        "tags": ["水印","移除","在线","即时"]
    },
    {
        "name": "IconCraft",
        "description": "在几秒钟内生成设计师级应用图标。 (Original: Generate designer-grade app icons in seconds)",
        "url": "https://iconcraft.app",
        "category": "图标",
        "tags": ["图标生成","应用","设计师级"]
    },
    {
        "name": "Banana AI.org",
        "description": "使用AI轻松编辑、重塑、转换和重新创建图像。 (Original: Edit, restyle, transform, and recreate images effortlessly with AI.)",
        "url": "https://banana-ai.org",
        "category": "图像编辑",
        "tags": ["图像","编辑","AI","轻松"]
    },
    {
        "name": "Slidely AI",
        "description": "使用AI一键创建惊人的、符合品牌的幻灯片。 (Original: Create stunning, on-brand slides in one click with AI)",
        "url": "https://slidely.ai",
        "category": "演示文稿",
        "tags": ["幻灯片","AI","一键","品牌"]
    },
    {
        "name": "Banana Nano AI",
        "description": "使用AI驱动的生成转变图像。 (Original: Transform images with AI-powered generation.)",
        "url": "https://bananananoai.net",
        "category": "图像编辑",
        "tags": ["图像转变","AI","生成"]
    },
    {
        "name": "MusicGeneratorAI",
        "description": "无需音乐技能，将灵感转化为旋律。 (Original: Transform inspiration into melodies without musical skills.)",
        "url": "https://musicgeneratorai.io",
        "category": "AI音频工具",
        "tags": ["音乐生成","AI","旋律","灵感"]
    },
    {
        "name": "Transor",
        "description": "一键打破语言障碍。 (Original: Break language barriers with one click.)",
        "url": "https://transor.ai",
        "category": "翻译",
        "tags": ["翻译","语言障碍","一键"]
    },
    {
        "name": "Google Search Console",
        "description": "谷歌官方提供的SEO监控工具，帮助网站管理员监控索引状态、搜索流量和错误报告。",
        "url": "https://search.google.com",
        "category": "营销推广",
        "tags": ["SEO监控","谷歌","索引状态","搜索流量"]
    },
    {
        "name": "Yoast SEO",
        "description": "WordPress插件，帮助优化网站内容SEO，提供可读性和技术SEO建议。",
        "url": "https://yoast.com",
        "category": "AI办公工具",
        "tags": ["WordPress","SEO插件","内容优化","技术SEO"]
    },
    {
        "name": "Search Engine Journal",
        "description": "权威SEO资讯网站，提供最新行业动态、案例研究和SEO策略。",
        "url": "https://www.searchenginejournal.com",
        "category": "SEO博客",
        "tags": ["SEO资讯","行业动态","案例研究","策略"]
    },
    {
        "name": "Search Engine Land",
        "description": "专注于搜索引擎优化、数字营销和广告技术的权威新闻网站。",
        "url": "https://www.searchengineland.com",
        "category": "SEO博客",
        "tags": ["搜索引擎优化","数字营销","广告技术","新闻"]
    },
    {
        "name": "Backlinko",
        "description": "由Brian Dean创立的SEO博客，提供深入的SEO策略和数据驱动的优化建议。",
        "url": "https://backlinko.com",
        "category": "SEO博客",
        "tags": ["SEO策略","数据驱动","优化建议"]
    },
    {
        "name": "HubSpot SEO Blog",
        "description": "HubSpot官方营销博客，涵盖SEO、内容营销和用户体验优化。",
        "url": "https://blog.hubspot.com",
        "category": "SEO博客",
        "tags": ["SEO","内容营销","用户体验","优化"]
    },
    {
        "name": "Reddit SEO",
        "description": "Reddit上的SEO讨论社区，涵盖技术SEO、内容策略和行业趋势。",
        "url": "https://www.reddit.com",
        "category": "SEO社区",
        "tags": ["SEO讨论","技术SEO","内容策略","趋势"]
    },
    {
        "name": "Webmaster World",
        "description": "历史悠久的SEO和网站优化论坛，涵盖技术、链接建设等话题。",
        "url": "https://www.webmasterworld.com",
        "category": "SEO社区",
        "tags": ["SEO论坛","网站优化","链接建设","技术"]
    },
    {
        "name": "Udemy SEO Courses",
        "description": "提供大量付费和免费的SEO课程，适合不同水平的学习者。",
        "url": "https://www.udemy.com",
        "category": "AI教育与学习",
        "tags": ["SEO课程","付费免费","不同水平"]
    },
    {
        "name": "Skillshare SEO Courses",
        "description": "提供实践导向的SEO课程，适合内容创作者和营销人员。",
        "url": "https://www.skillshare.com",
        "category": "AI写作工具",
        "tags": ["实践导向","SEO课程","内容创作者"]
    },
    {
        "name": "美国商标局",
        "description": "美国官方商标注册和查询平台，提供商标搜索、申请和保护服务。",
        "url": "https://www.uspto.gov",
        "category": "知识产权服务",
        "tags": ["商标查询","美国","注册","保护"]
    },
    {
        "name": "WIPO商标查询",
        "description": "世界知识产权组织提供的全球商标数据库，支持国际商标搜索。",
        "url": "https://branddb.wipo.int",
        "category": "知识产权服务",
        "tags": ["全球商标","WIPO","国际搜索"]
    },
    {
        "name": "欧洲商标局",
        "description": "欧盟知识产权局，提供欧洲商标注册、搜索和保护服务。",
        "url": "https://www.euipo.europa.eu",
        "category": "知识产权服务",
        "tags": ["欧洲商标","注册","保护"]
    },
    {
        "name": "英国商标局",
        "description": "英国知识产权局，提供商标注册、搜索和知识产权保护。",
        "url": "https://www.gov.uk",
        "category": "知识产权服务",
        "tags": ["英国商标","知识产权","注册"]
    },
    {
        "name": "日本商标局",
        "description": "日本专利局，提供商标注册和查询服务。",
        "url": "http://www.jpo.go.jp",
        "category": "知识产权服务",
        "tags": ["日本商标","注册","查询"]
    },
    {
        "name": "TradeMarkia",
        "description": "全球商标搜索引擎，提供商标注册、监控和法律服务。",
        "url": "http://www.trademarkia.com",
        "category": "知识产权服务",
        "tags": ["全球商标","搜索引擎","注册"]
    },
    {
        "name": "美国专利局",
        "description": "美国专利和商标局，提供专利搜索和申请服务。",
        "url": "https://ppubs.uspto.gov",
        "category": "知识产权服务",
        "tags": ["美国专利","搜索","申请"]
    },
    {
        "name": "WIPO专利查询",
        "description": "世界知识产权组织专利数据库，支持全球专利搜索。",
        "url": "https://designdb.wipo.int",
        "category": "知识产权服务",
        "tags": ["全球专利","WIPO","搜索"]
    },
    {
        "name": "欧洲专利局",
        "description": "欧洲专利组织，提供专利申请、搜索和保护服务。",
        "url": "https://www.epo.org",
        "category": "知识产权服务",
        "tags": ["欧洲专利","申请","保护"]
    },
    {
        "name": "卓特视觉",
        "description": "Adobe Stock正版商用素材库，低至6元",
        "url": "https://www.droitstock.com",
        "category": "设计资源",
        "tags": ["正版素材","商用","Adobe Stock","低价"]
    },
    {
        "name": "图虫创意",
        "description": "国内领先的正版图片和视频交易平台，拥有2亿高清资源，涵盖创意素材、新闻图片和插画矢量图等，一次购买永久使用，版权保障，性价比高",
        "url": "https://tuchong.com",
        "category": "设计资源",
        "tags": ["正版图片","视频交易","高清资源","永久使用"]
    },
    {
        "name": "Veer图库",
        "description": "一家国际化的版权内容提供商，内容来自全球微利图库鼻祖iStock，拥有亿级优质图片资源。",
        "url": "https://www.veer.com",
        "category": "设计资源",
        "tags": ["版权内容","优质图片","国际","iStock"]
    },
    {
        "name": "拍信创意",
        "description": "推荐！一元嗨购版权图片，有版权全网可商用",
        "url": "https://v.paixin.com",
        "category": "设计资源",
        "tags": ["版权图片","低价购买","全网商用"]
    },
    {
        "name": "邑石网Yestone",
        "description": "全部正版商用授权，品质高到挑花眼",
        "url": "https://www.yestone.com",
        "category": "设计资源",
        "tags": ["正版授权","高品质","商用"]
    },
    {
        "name": "视觉中国",
        "description": "先进的视觉影像内容和整合营销传播服务提供商，一个致力于设计作品分享、发现、售卖的专业平台。",
        "url": "https://www.vcg.com",
        "category": "设计资源",
        "tags": ["视觉影像","营销传播","设计作品"]
    },
    {
        "name": "全景网",
        "description": "国内领先的图片库和正版图片素材网站",
        "url": "https://www.quanjing.com",
        "category": "设计资源",
        "tags": ["图片库","正版素材","国内领先"]
    },
    {
        "name": "站酷海洛",
        "description": "站酷网旗下的正版图片在线交易平台",
        "url": "https://www.hellorf.com",
        "category": "设计资源",
        "tags": ["正版图片","在线交易","站酷"]
    },
    {
        "name": "锐景创意",
        "description": "提供免费收费图片、插画等可以商用版权的素材",
        "url": "https://www.originoo.com",
        "category": "设计资源",
        "tags": ["商用素材","图片插画","版权"]
    },
    {
        "name": "千库网",
        "description": "国内设计师喜欢的图片素材库，找素材就上千库网。",
        "url": "https://588ku.com",
        "category": "设计资源",
        "tags": ["图片素材","设计师","国内"]
    },
    {
        "name": "摄图网",
        "description": "一家专注于正版摄影高清图片素材免费下载的图库作品网站",
        "url": "http://699pic.com",
        "category": "设计资源",
        "tags": ["摄影图片","高清素材","免费下载"]
    },
    {
        "name": "汇图网",
        "description": "国内领先的正版商业图库,原创作品交易平台",
        "url": "http://www.huitu.com",
        "category": "设计资源",
        "tags": ["商业图库","原创作品","交易平台"]
    },
    {
        "name": "Bigstockphoto",
        "description": "数百万张绝佳的免版税库存照片、图像和矢量图",
        "url": "https://www.bigstockphoto.com",
        "category": "设计资源",
        "tags": ["免版税","库存照片","矢量图"]
    },
    {
        "name": "1X",
        "description": "国内访问很不稳定，格调很高的照片图库，图片很精美",
        "url": "https://1x.com",
        "category": "设计资源",
        "tags": ["高质量","精美图片","格调高"]
    },
    {
        "name": "万素网",
        "description": "海量可商用图片免费下载，全站700万免抠元素、psd源文件、商用摄影图等注册即可每日免费下载。",
        "url": "https://669pic.com",
        "category": "设计资源",
        "tags": ["商用图片","免抠元素","PSD源文件"]
    },
    {
        "name": "觅知网",
        "description": "专注于优质实用的设计资源下载",
        "url": "https://www.51miz.com",
        "category": "设计资源",
        "tags": ["设计资源","优质实用","下载"]
    },
    {
        "name": "500px",
        "description": "打造专业摄影社区中文网站，有着世界上最好的照片分享",
        "url": "https://500px.com.cn",
        "category": "摄影美图",
        "tags": ["专业摄影","社区","照片分享","中文"]
    },
    {
        "name": "35photo",
        "description": "一个高质量图片分享平台，张张精品",
        "url": "https://35photo.pro",
        "category": "摄影美图",
        "tags": ["高质量","图片分享","精品"]
    },
    {
        "name": "美空",
        "description": "设计P图累的时候，不妨到这里看看美女吧",
        "url": "http://www.moko.cc",
        "category": "摄影美图",
        "tags": ["美女","人像","设计灵感"]
    },
    {
        "name": "POCO",
        "description": "领先的时尚摄影平台，分享作品和技巧首选",
        "url": "https://www.poco.cn",
        "category": "摄影美图",
        "tags": ["时尚摄影","作品分享","技巧"]
    },
    {
        "name": "蜂鸟网",
        "description": "摄影爱好者分享摄影技巧和作品的中国影像门户",
        "url": "http://www.fengniao.com",
        "category": "摄影美图",
        "tags": ["摄影技巧","作品分享","影像门户"]
    },
    {
        "name": "无忌视界",
        "description": "国内外优秀摄影师的线上展览平台，开阔眼界",
        "url": "http://vision.xitek.com",
        "category": "摄影美图",
        "tags": ["摄影师","线上展览","开阔眼界"]
    },
    {
        "name": "天空之城SkyPixel",
        "description": "全球航拍爱好者和专业摄影师的作品社区",
        "url": "https://www.skypixel.com",
        "category": "摄影美图",
        "tags": ["航拍","专业摄影","作品社区","全球"]
    },
    {
        "name": "亚马逊企业购",
        "description": "亚马逊企业采购平台，为企业和机构提供B2B采购服务",
        "url": "https://ma.globalsellingcommunity.cn",
        "category": "电商平台",
        "tags": ["亚马逊","企业采购","B2B","全球"]
    },
    {
        "name": "Wayfair",
        "description": "美国家居和装饰品电商平台，专注于家具和家居用品",
        "url": "https://www.wayfair.com",
        "category": "电商平台",
        "tags": ["家居","家具","装饰品","美国"]
    },
    {
        "name": "Cdiscount",
        "description": "法国领先的电商平台，提供电子产品、家居用品等商品",
        "url": "https://www.cdiscount.com",
        "category": "电商平台",
        "tags": ["法国","电子产品","家居用品","欧洲"]
    },
    {
        "name": "OTTO",
        "description": "德国最大的电商平台之一，提供时尚、家居、电子产品等",
        "url": "https://www.otto.de",
        "category": "电商平台",
        "tags": ["德国","时尚","家居","电子产品"]
    },
    {
        "name": "Allegro",
        "description": "波兰最大的电商平台，提供各类商品和服务",
        "url": "https://allegro.pl",
        "category": "电商平台",
        "tags": ["波兰","最大平台","各类商品","东欧"]
    },
    {
        "name": "eMAG",
        "description": "罗马尼亚和东欧地区的主要电商平台",
        "url": "https://www.emag.ro",
        "category": "电商平台",
        "tags": ["罗马尼亚","东欧","主要平台"]
    },
    {
        "name": "Miravia",
        "description": "阿里巴巴在西班牙推出的电商平台",
        "url": "https://www.miravia.es",
        "category": "电商平台",
        "tags": ["阿里巴巴","西班牙","新兴平台"]
    },
    {
        "name": "法国乐天",
        "description": "乐天在法国的电商平台，提供各类商品",
        "url": "https://fr.shopping.rakuten.com",
        "category": "电商平台",
        "tags": ["乐天","法国","各类商品"]
    },
    {
        "name": "Kaufland",
        "description": "德国连锁超市的在线电商平台",
        "url": "https://www.kaufland.de",
        "category": "电商平台",
        "tags": ["德国","连锁超市","在线平台"]
    },
    {
        "name": "ManoMano",
        "description": "欧洲领先的家居装修和园艺电商平台",
        "url": "https://www.manomano.fr",
        "category": "电商平台",
        "tags": ["欧洲","家居装修","园艺","DIY"]
    },
    {
        "name": "BOL",
        "description": "荷兰和比利时的主要电商平台",
        "url": "https://www.bol.com",
        "category": "电商平台",
        "tags": ["荷兰","比利时","主要平台"]
    },
    {
        "name": "Tokopedia",
        "description": "印尼最大的电商平台，提供各类商品和服务",
        "url": "https://www.tokopedia.com",
        "category": "电商平台",
        "tags": ["印尼","最大平台","各类商品","东南亚"]
    },
    {
        "name": "Shopee",
        "description": "东南亚领先的电商平台，覆盖多个国家和地区",
        "url": "https://shopee.ph",
        "category": "电商平台",
        "tags": ["东南亚","多国覆盖","移动优先","社交电商"]
    },
    {
        "name": "Lazada",
        "description": "阿里巴巴旗下的东南亚电商平台",
        "url": "https://www.lazada.com.ph",
        "category": "电商平台",
        "tags": ["阿里巴巴","东南亚","多国平台"]
    },
    {
        "name": "Blibli",
        "description": "印尼知名的电商平台，提供各类商品",
        "url": "https://www.blibli.com",
        "category": "电商平台",
        "tags": ["印尼","知名平台","各类商品"]
    },
    {
        "name": "Noon",
        "description": "中东地区领先的电商平台",
        "url": "https://www.noon.com",
        "category": "电商平台",
        "tags": ["中东","领先平台","阿联酋"]
    },
    {
        "name": "美国煤炉",
        "description": "美国二手商品交易平台Mercari",
        "url": "https://www.mercari.com",
        "category": "电商平台",
        "tags": ["美国","二手交易","Mercari"]
    },
    {
        "name": "日本煤炉",
        "description": "日本二手商品交易平台Mercari",
        "url": "https://jp.mercari.com",
        "category": "电商平台",
        "tags": ["日本","二手交易","Mercari"]
    },
    {
        "name": "贺佰狮",
        "description": "土耳其领先的电商平台Hepsiburada",
        "url": "https://www.hepsiburada.com",
        "category": "电商平台",
        "tags": ["土耳其","领先平台","Hepsiburada"]
    },
    {
        "name": "Jumia",
        "description": "非洲最大的电商平台，覆盖多个非洲国家",
        "url": "https://www.jumia.com.ng",
        "category": "电商平台",
        "tags": ["非洲","最大平台","多国覆盖"]
    },
    {
        "name": "Takealot",
        "description": "南非最大的电商平台",
        "url": "https://www.takealot.com",
        "category": "电商平台",
        "tags": ["南非","最大平台","电商"]
    },
    {
        "name": "敦煌网",
        "description": "中国领先的B2B跨境电商平台",
        "url": "https://www.dhgate.com",
        "category": "电商平台",
        "tags": ["中国","B2B","跨境电商","批发"]
    },
    {
        "name": "新蛋",
        "description": "美国知名的电子产品电商平台",
        "url": "https://www.newegg.com",
        "category": "电商平台",
        "tags": ["美国","电子产品","科技","Newegg"]
    },
    {
        "name": "Wish",
        "description": "移动优先的全球电商平台，以低价商品著称",
        "url": "https://www.wish.com",
        "category": "电商平台",
        "tags": ["移动优先","全球","低价商品","移动电商"]
    },
    {
        "name": "Airwallex空中云汇",
        "description": "120天电商收款提现0费率",
        "url": "https://www.airwallex.com",
        "category": "收款支付",
        "tags": ["跨境收款","0费率","多币种","企业账户"]
    },
    {
        "name": "网易支付",
        "description": "网易官方出品，亚马逊收款首选，0汇损所见所得",
        "url": "http://163.lu",
        "category": "收款支付",
        "tags": ["网易官方","亚马逊收款","0汇损","新用户优惠"]
    },
    {
        "name": "PingPong",
        "description": "多平台多币种收付款，支持14国vat缴费，快速到账",
        "url": "https://www.pingpongx.com",
        "category": "收款支付",
        "tags": ["多平台","多币种","VAT缴费","快速到账"]
    },
    {
        "name": "美元借贷 当天到",
        "description": "港司港户直开，3分钟申请，2千-1千万美元",
        "url": "https://www.fundpark.cn",
        "category": "收款支付",
        "tags": ["美元借贷","港司港户","快速申请","大额资金"]
    },
    {
        "name": "PhotonPay光子易",
        "description": "领先的全球支付平台及数字金融基础设施提供商",
        "url": "https://www.photonpay.com",
        "category": "收款支付",
        "tags": ["全球支付","数字金融","基础设施","专业服务"]
    },
    {
        "name": "iPayLinks艾贝盈",
        "description": "新客注册享好礼，多平台福利大放送，多、快、好、省！",
        "url": "https://www.ipaylinks.com",
        "category": "收款支付",
        "tags": ["新客福利","多平台","快速便捷","优惠活动"]
    },
    {
        "name": "Payoneer派安盈",
        "description": "本地账号免汇损，多币种转换，灵活银行提现，采购费随心付",
        "url": "https://tracking.payoneer.com",
        "category": "收款支付",
        "tags": ["本地账号","免汇损","多币种","灵活提现"]
    },
    {
        "name": "Temu Bestsellers",
        "description": "每日更新Temu最受欢迎榜单",
        "url": "https://www.temu.com",
        "category": "跨境电商工具",
        "tags": ["Temu","最受欢迎","每日更新","热销榜单"]
    },
    {
        "name": "Walmart Bestsellers",
        "description": "沃尔玛平台最受欢迎产品榜单",
        "url": "https://www.walmart.com",
        "category": "跨境电商工具",
        "tags": ["沃尔玛","最受欢迎","零售平台","热销榜单"]
    },
    {
        "name": "谷歌商机洞察",
        "description": "查看产品品类在全球每一个国家的具体市场需求和容量",
        "url": "https://marketfinder.thinkwithgoogle.com",
        "category": "跨境电商工具",
        "tags": ["谷歌商机","全球市场","需求分析","市场容量"]
    },
    {
        "name": "Ebay Daily",
        "description": "Ebay 平台每日促销商品",
        "url": "http://www.ebay.com",
        "category": "跨境电商工具",
        "tags": ["Ebay","每日促销","全球交易","促销商品"]
    },
    {
        "name": "Indiegogo",
        "description": "美国第二大的众筹网站",
        "url": "https://www.indiegogo.com",
        "category": "跨境电商工具",
        "tags": ["众筹平台","创新产品","市场验证","新兴趋势"]
    },
    {
        "name": "Kickstarter",
        "description": "美国最大的众筹网站",
        "url": "https://www.kickstarter.com",
        "category": "跨境电商工具",
        "tags": ["众筹平台","创新产品","市场验证","创意项目"]
    },
    {
        "name": "Pixabay",
        "description": "百万张免费高清图片，高质量可商用（无版权）",
        "url": "https://pixabay.com",
        "category": "设计资源",
        "tags": ["百万图片","高清","可商用","无版权"]
    },
    {
        "name": "SplitShire",
        "description": "分类精确，提供1000+张免费可商用的图片素材",
        "url": "https://www.splitshire.com",
        "category": "设计资源",
        "tags": ["分类精确","1000+张","可商用","图片素材"]
    },
    {
        "name": "StockSnap",
        "description": "号称第一的免费精美图片分享站，可商用，完全免费",
        "url": "https://stocksnap.io",
        "category": "设计资源",
        "tags": ["精美图片","可商用","完全免费","分享站"]
    },
    {
        "name": "高图网",
        "description": "一个免费无版权高清图片下载平台",
        "url": "http://www.gaoimg.com",
        "category": "设计资源",
        "tags": ["免费","无版权","高清","下载平台"]
    },
    {
        "name": "泼辣有图",
        "description": "泼辣修图出的开源摄影网站，全部是无版权的摄影作品，所有图片可以用于任何用途。",
        "url": "http://www.polayoutu.com",
        "category": "设计资源",
        "tags": ["开源摄影","无版权","任何用途","泼辣修图"]
    },
    {
        "name": "Wallhaven",
        "description": "国外高清的壁纸网站分享平台，在这里可以发现很多高质量的素材，会有很多惊喜，免版权。",
        "url": "https://wallhaven.cc",
        "category": "设计资源",
        "tags": ["高清壁纸","高质量","免版权","分享平台"]
    },
    {
        "name": "Visual Hunt",
        "description": "国外高清照片共享平台，100％免费高品质照片",
        "url": "https://visualhunt.com",
        "category": "设计资源",
        "tags": ["高清照片","100%免费","高品质","共享平台"]
    },
    {
        "name": "Foter",
        "description": "3.35亿张免费图片素材，优质免版税库存照片。",
        "url": "https://foter.com",
        "category": "设计资源",
        "tags": ["3.35亿张","免版税","库存照片","优质"]
    },
    {
        "name": "Kaboompics",
        "description": "支持分类和颜色筛选，图片质量非常高",
        "url": "https://kaboompics.com",
        "category": "设计资源",
        "tags": ["分类筛选","颜色筛选","高质量","专业"]
    },
    {
        "name": "FreeImages",
        "description": "拥有超过300,000张免费图片，快速找到完美的免版税图片。 下载免费的，高质量的图像，每天或商业用途。 无需购买。",
        "url": "https://cn.freeimages.com",
        "category": "设计资源",
        "tags": ["30万张","免版税","商业用途","无需购买"]
    },
    {
        "name": "Foodiesfeed",
        "description": "食物图片网站，可免费下载免费用于商业用途",
        "url": "https://www.foodiesfeed.com",
        "category": "设计资源",
        "tags": ["食物图片","免费下载","商业用途","专业摄影"]
    },
    {
        "name": "Picjumbo",
        "description": "个人和商业用途的免费照片。 高分辨率图像，无需归属。",
        "url": "https://picjumbo.com",
        "category": "设计资源",
        "tags": ["个人商用","高分辨率","无需归属","免费"]
    },
    {
        "name": "ISO Republic",
        "description": "为创意专业人士提供CC0照片。所有图像均可免费用于个人和商业用途。",
        "url": "https://isorepublic.com",
        "category": "设计资源",
        "tags": ["CC0照片","创意专业","个人商用","免费"]
    },
    {
        "name": "Burst",
        "description": "由Shopify提供支持的免费图片平台。免费的，可用于商业用途.",
        "url": "https://burst.shopify.com",
        "category": "设计资源",
        "tags": ["Shopify","免费平台","商业用途","电商"]
    },
    {
        "name": "PNG img",
        "description": "推荐！最知名的PNG优质素材库。",
        "url": "http://pngimg.com",
        "category": "设计资源",
        "tags": ["PNG素材","优质","知名","推荐"]
    },
    {
        "name": "Pngtree",
        "description": "数以百万计的PNG图像，背景和矢量图片均可免费下载。",
        "url": "https://pngtree.com",
        "category": "设计资源",
        "tags": ["百万PNG","背景","矢量图","免费下载"]
    },
    {
        "name": "Barn Images",
        "description": "由专业摄影师拍摄，图片质量非常高，均可免费下载，可商用",
        "url": "https://barnimages.com",
        "category": "设计资源",
        "tags": ["专业摄影","高质量","免费下载","可商用"]
    },
    {
        "name": "Gratisography",
        "description": "网站每周都会上传新的免费高清大图，适合个人与商用",
        "url": "https://gratisography.com",
        "category": "设计资源",
        "tags": ["每周更新","高清大图","个人商用","免费"]
    },
    {
        "name": "Moose",
        "description": "可以免费商用，但是要标注来源",
        "url": "https://photos.icons8.cn",
        "category": "设计资源",
        "tags": ["免费商用","标注来源","Icons8","专业"]
    },
    {
        "name": "Magdeleine",
        "description": "精选的免费照片，点燃你的灵感火花。可以通过颜色检索。",
        "url": "https://magdeleine.co",
        "category": "设计资源",
        "tags": ["精选照片","灵感","颜色检索","免费"]
    },
    {
        "name": "Wunderstock",
        "description": "人物自然风光建筑美景！图片质量高，可花点时间另存。",
        "url": "https://wunderstock.com",
        "category": "设计资源",
        "tags": ["人物风光","建筑美景","高质量","另存"]
    },
    {
        "name": "1001FreeDownloads",
        "description": "免费下载矢量、照片、图标、字体、壁纸等等。",
        "url": "https://www.1001freedownloads.com",
        "category": "设计资源",
        "tags": ["矢量","照片","图标","字体","壁纸"]
    },
    {
        "name": "DesignersPics",
        "description": "免费的高清照片供您个人和商业使用",
        "url": "http://www.designerspics.com",
        "category": "设计资源",
        "tags": ["高清照片","个人商用","设计师","免费"]
    },
    {
        "name": "Streetwill",
        "description": "免费高分辨率照片",
        "url": "http://streetwill.co",
        "category": "设计资源",
        "tags": ["高分辨率","免费","照片","专业"]
    },
    {
        "name": "365PSD",
        "description": "免费的PSD、图形和矢量文件",
        "url": "https://cn.365psd.com",
        "category": "设计资源",
        "tags": ["PSD","图形","矢量文件","免费"]
    },
    {
        "name": "堆糖",
        "description": "美图壁纸兴趣社区",
        "url": "https://www.duitang.com",
        "category": "创意灵感",
        "tags": ["美图","壁纸","兴趣社区","图片分享"]
    },
    {
        "name": "全画作",
        "description": "强烈推荐！几十万张超高分辨率艺术作品欣赏",
        "url": "https://www.allhistory.com",
        "category": "创意灵感",
        "tags": ["艺术作品","超高分辨率","几十万张","强烈推荐"]
    },
    {
        "name": "优创意",
        "description": "优创意ycyUi设计师创意平台,汇聚全球更多原创设计",
        "url": "https://www.ycyui.com",
        "category": "创意灵感",
        "tags": ["设计师","创意平台","原创设计","全球"]
    },
    {
        "name": "DOOOOR",
        "description": "国外设计欣赏网站，全球设计行业精品收录与素材分享",
        "url": "https://www.doooor.com",
        "category": "创意灵感",
        "tags": ["国外设计","设计欣赏","精品收录","素材分享"]
    },
    {
        "name": "Color Hunt",
        "description": "一个免费开放的色彩灵感平台，拥有数千种时尚的手工挑选调色板",
        "url": "https://colorhunt.co",
        "category": "创意灵感",
        "tags": ["色彩灵感","调色板","免费开放","时尚"]
    },
    {
        "name": "纵长的设计画廊",
        "description": "非营利性的日本网页设计门户网站",
        "url": "http://muuuuu.org",
        "category": "创意灵感",
        "tags": ["日本","网页设计","门户网站","非营利"]
    },
    {
        "name": "Pttrns",
        "description": "设计模式、资源和灵感的最佳集合",
        "url": "https://pttrns.com",
        "category": "创意灵感",
        "tags": ["设计模式","资源","灵感","最佳集合"]
    },
    {
        "name": "Reeoo",
        "description": "网页设计、app设计灵感库",
        "url": "http://reeoo.com",
        "category": "创意灵感",
        "tags": ["网页设计","app设计","灵感库","设计参考"]
    },
    {
        "name": "UI Movement",
        "description": "每天更新用户界面设计灵感",
        "url": "https://uimovement.com",
        "category": "创意灵感",
        "tags": ["每天更新","用户界面","设计灵感","UI"]
    },
    {
        "name": "Niklas Alm",
        "description": "优秀的创意合成图片与视频社区",
        "url": "https://www.niklasalm.se",
        "category": "创意灵感",
        "tags": ["创意合成","图片","视频","社区"]
    },
    {
        "name": "UI8",
        "description": "用户界面设计资源工具包，线框，图标",
        "url": "https://ui8.net",
        "category": "创意灵感",
        "tags": ["用户界面","设计资源","工具包","线框","图标"]
    },
    {
        "name": "CollectUI",
        "description": "UI设计必备！100多个分类，不用发愁没灵感了",
        "url": "https://collectui.com",
        "category": "创意灵感",
        "tags": ["UI设计","100多个分类","必备","灵感"]
    },
    {
        "name": "Pixeden",
        "description": "赞！免费优质界面设计源文件及有网站模板",
        "url": "https://www.pixeden.com",
        "category": "创意灵感",
        "tags": ["免费","优质","界面设计","源文件","网站模板"]
    },
    {
        "name": "Site Inspire",
        "description": "致力于分享推荐优秀网页及交互设计案例",
        "url": "https://www.siteinspire.com",
        "category": "创意灵感",
        "tags": ["网页设计","交互设计","设计案例","分享推荐"]
    },
    {
        "name": "Designmodo",
        "description": "所有高质量UI工具包都在这里可以找到，部分免费下载",
        "url": "https://designmodo.com",
        "category": "创意灵感",
        "tags": ["高质量","UI工具包","免费下载","设计资源"]
    },
    {
        "name": "Designspiration",
        "description": "提供设计灵感、插画摄影、时尚以及艺术相关的一切",
        "url": "https://www.designspiration.com",
        "category": "创意灵感",
        "tags": ["设计灵感","插画摄影","时尚","艺术"]
    },
    {
        "name": "幻觉",
        "description": "展示最惊人的创作，涵盖艺术、设计、摄影和视频",
        "url": "https://scene360.com",
        "category": "创意灵感",
        "tags": ["惊人创作","艺术","设计","摄影","视频"]
    },
    {
        "name": "BOOOOOOOM",
        "description": "发人深省的创意图片，博客设计简约但内容丰富",
        "url": "https://www.booooooom.com",
        "category": "创意灵感",
        "tags": ["创意图片","发人深省","简约设计","内容丰富"]
    },
    {
        "name": "灵感网络",
        "description": "推荐！聚合来自世界各地的创意人才，每天汲取灵感",
        "url": "https://theinspirationgrid.com",
        "category": "创意灵感",
        "tags": ["推荐","创意人才","世界各地","每天汲取灵感"]
    },
    {
        "name": "Lapa网页灵感图库",
        "description": "设计网站前，推荐来这里找灵感，有贴心全屏预览图",
        "url": "https://www.lapa.ninja",
        "category": "创意灵感",
        "tags": ["网页灵感","设计网站","全屏预览","推荐"]
    },
    {
        "name": "迷你单页狂热者",
        "description": "流行的网页趋势！不可不知的迷你站点大全",
        "url": "https://www.onepagemania.com",
        "category": "创意灵感",
        "tags": ["网页趋势","迷你站点","单页设计","流行"]
    },
    {
        "name": "涂鸦王国",
        "description": "中国优秀的插画师、漫画家、画家的聚集地",
        "url": "https://www.gracg.com",
        "category": "插画与漫画",
        "tags": ["插画师","漫画家","画家","聚集地"]
    },
    {
        "name": "插画艺术家",
        "description": "一个历史悠久的提供可靠插画家及插画资源的平台",
        "url": "https://www.illustrationx.com",
        "category": "插画与漫画",
        "tags": ["历史悠久","插画家","插画资源","可靠平台"]
    },
    {
        "name": "优优网",
        "description": "插画绘画，设计教程自学网站",
        "url": "https://uiiiuiii.com",
        "category": "AI图像工具",
        "tags": ["插画绘画","设计教程","自学网站","教程"]
    },
    {
        "name": "插画中国",
        "description": "中国职业插画师、漫画家的主要聚集地，原创CG插画与手绘插画作品展",
        "url": "http://www.chahua.org",
        "category": "插画与漫画",
        "tags": ["职业插画师","漫画家","CG插画","手绘插画"]
    },
    {
        "name": "Artand",
        "description": "一家沉浸式重度垂直线上艺术品社交电商平台",
        "url": "https://artand.cn",
        "category": "插画与漫画",
        "tags": ["艺术品","社交电商","垂直平台","沉浸式"]
    },
    {
        "name": "绘萌芽",
        "description": "专业的插画师、转手绘/插画爱好者的聚集地",
        "url": "https://www.huimengya.com",
        "category": "插画与漫画",
        "tags": ["专业插画师","转手绘","插画爱好者","聚集地"]
    },
    {
        "name": "Baubauhaus",
        "description": "提供设计灵感、插画摄影、时尚以及艺术相关的一切",
        "url": "http://www.baubauhaus.com",
        "category": "插画与漫画",
        "tags": ["设计灵感","插画摄影","时尚","艺术"]
    },
    {
        "name": "DeviantART",
        "description": "每天发表约20万个新作品！国际化在线艺术社区",
        "url": "https://www.deviantart.com",
        "category": "插画与漫画",
        "tags": ["20万个作品","国际化","在线艺术","社区"]
    },
    {
        "name": "ArtStation",
        "description": "强烈推荐！一个收录世界顶级插画作品的社区",
        "url": "https://www.artstation.com",
        "category": "插画与漫画",
        "tags": ["强烈推荐","世界顶级","插画作品","社区"]
    },
    {
        "name": "插画世界",
        "description": "一个聚集世界各地优秀插画家及作品的网站",
        "url": "https://www.n8w.com",
        "category": "插画与漫画",
        "tags": ["世界各地","优秀插画家","作品","聚集"]
    },
    {
        "name": "Folioart",
        "description": "推荐！英国插画师作品及灵感展示网站",
        "url": "https://folioart.co.uk",
        "category": "插画与漫画",
        "tags": ["推荐","英国插画师","作品展示","灵感"]
    },
    {
        "name": "unDraw",
        "description": "非常漂亮的免费插图网站，为您能想象和创建的每个项目提供开源插图。",
        "url": "https://undraw.co",
        "category": "插画与漫画",
        "tags": ["免费插图","开源","项目","漂亮"]
    },
    {
        "name": "Pixiv插画世界",
        "description": "一个分享由p站(pixiv)的插画图片、游戏原画等作品，并提供自由交流的平台",
        "url": "https://www.vilipix.com",
        "category": "AI图像工具",
        "tags": ["Pixiv","插画图片","游戏原画","自由交流"]
    },
    {
        "name": "Pixiv",
        "description": "插图、漫画和小说艺术为中心的社交网络服务里的虚拟社区",
        "url": "https://www.pixiv.net",
        "category": "插画与漫画",
        "tags": ["插图","漫画","小说艺术","社交网络"]
    },
    {
        "name": "CoolVibe",
        "description": "数字艺术画廊，特色艺术和壁纸",
        "url": "http://coolvibe.com",
        "category": "插画与漫画",
        "tags": ["数字艺术","画廊","特色艺术","壁纸"]
    },
    {
        "name": "OpenPeeps",
        "description": "一个手绘插图库，用于创建人物场景",
        "url": "https://www.openpeeps.com",
        "category": "插画与漫画",
        "tags": ["手绘插图","人物场景","插图库","创建"]
    },
    {
        "name": "OpenDoodles",
        "description": "免费的开源插画集可以任意复制共享",
        "url": "https://www.opendoodles.com",
        "category": "插画与漫画",
        "tags": ["免费","开源","插画集","复制共享"]
    },
    {
        "name": "DrawKit",
        "description": "漂亮的矢量插图",
        "url": "https://www.drawkit.io",
        "category": "插画与漫画",
        "tags": ["矢量插图","漂亮","设计"]
    },
    {
        "name": "Leave a Story",
        "description": "用漫画讲述故事交换",
        "url": "https://leaveastory.com",
        "category": "插画与漫画",
        "tags": ["漫画","故事","交换","讲述"]
    },
    {
        "name": "Poolga",
        "description": "优秀插画家创作的手绘风格壁纸",
        "url": "http://poolga.com",
        "category": "插画与漫画",
        "tags": ["插画家","手绘风格","壁纸","创作"]
    },
    {
        "name": "ILLUSTRATION AGE",
        "description": "插图画家的终极资源",
        "url": "https://illustrationage.com",
        "category": "插画与漫画",
        "tags": ["插画画家","终极资源","专业"]
    },
    {
        "name": "Petalica paint",
        "description": "线稿在线自动上色服务",
        "url": "https://petalica-paint.pixiv.dev",
        "category": "插画与漫画",
        "tags": ["线稿","自动上色","在线服务","AI"]
    },
    {
        "name": "VIZ",
        "description": "漫画、动漫和全球娱乐界的佼佼者",
        "url": "https://www.viz.com",
        "category": "插画与漫画",
        "tags": ["漫画","动漫","全球娱乐","佼佼者"]
    },
    {
        "name": "Donna Adi",
        "description": "艺术与时尚结合的作品",
        "url": "https://donnadi.com",
        "category": "插画与漫画",
        "tags": ["艺术","时尚","结合","作品"]
    },
    {
        "name": "builder",
        "description": "自定义矢量艺术插图，免费下载",
        "url": "https://app.itg.digital",
        "category": "插画与漫画",
        "tags": ["自定义","矢量艺术","免费下载","插图"]
    },
    {
        "name": "woobro",
        "description": "用于商业用途的免费矢量图像",
        "url": "https://woobro.design",
        "category": "插画与漫画",
        "tags": ["商业用途","免费","矢量图像","设计"]
    },
    {
        "name": "AbsurdDesign",
        "description": "免费的超现实主义插图和矢量艺术",
        "url": "https://absurd.design",
        "category": "插画与漫画",
        "tags": ["免费","超现实主义","插图","矢量艺术"]
    },
    {
        "name": "IRADesign",
        "description": "创建自己的插图",
        "url": "https://iradesign.io",
        "category": "插画与漫画",
        "tags": ["创建","自己的插图","自定义","设计"]
    },
    {
        "name": "Fresh Folk",
        "description": "人物和物体的插图库",
        "url": "https://fresh-folk.com",
        "category": "插画与漫画",
        "tags": ["人物","物体","插图库","设计"]
    },
    {
        "name": "ManyPixels",
        "description": "致力于使设计更出色",
        "url": "https://www.manypixels.co",
        "category": "插画与漫画",
        "tags": ["设计","更出色","专业","服务"]
    },
    {
        "name": "Delesign",
        "description": "获取很酷的设计",
        "url": "https://delesign.com",
        "category": "插画与漫画",
        "tags": ["很酷","设计","获取","创意"]
    },
    {
        "name": "Mark Conlan",
        "description": "一个独特的艺术家，异想天开的插画风格既独特又俏皮",
        "url": "https://markconlan.com",
        "category": "插画与漫画",
        "tags": ["独特艺术家","异想天开","插画风格","俏皮"]
    },
    {
        "name": "Agent002",
        "description": "精选幽默、时尚和新的插画趋势",
        "url": "https://www.agent002.com",
        "category": "插画与漫画",
        "tags": ["幽默","时尚","插画趋势","精选"]
    },
    {
        "name": "Get illustrations",
        "description": "获取免费的插图矢量包，该库提供您需要的所有设计格式",
        "url": "https://www.getillustrations.com",
        "category": "插画与漫画",
        "tags": ["免费","插图矢量包","设计格式","库"]
    },
    {
        "name": "Humaaans",
        "description": "提供的可免费用于商业或个人的插画图库",
        "url": "https://www.humaaans.com",
        "category": "AI图像工具",
        "tags": ["免费","商业","个人","插画图库"]
    },
    {
        "name": "COLOURlovers",
        "description": "专业配色站",
        "url": "https://www.colourlovers.com",
        "category": "设计资源",
        "tags": ["专业配色","调色板","色彩社区","设计"]
    },
    {
        "name": "CssWinner",
        "description": "网页色彩分类,CSS画廊",
        "url": "https://www.csswinner.com",
        "category": "设计资源",
        "tags": ["网页色彩","分类","CSS画廊","设计参考"]
    },
    {
        "name": "MaterialUI",
        "description": "能快速选到配色方案",
        "url": "https://www.materialui.co",
        "category": "设计资源",
        "tags": ["Material Design","快速选择","配色方案","UI设计"]
    },
    {
        "name": "ColorDrop",
        "description": "在线颜色组合调试工具",
        "url": "https://colordrop.io",
        "category": "设计资源",
        "tags": ["颜色组合","调试工具","在线","配色测试"]
    },
    {
        "name": "Fashion Trendsetter",
        "description": "关注每年最流行的颜色搭配",
        "url": "https://www.fashiontrendsetter.com",
        "category": "设计资源",
        "tags": ["流行颜色","时尚趋势","颜色搭配","年度流行"]
    },
    {
        "name": "ColorSpace",
        "description": "输入主色调就可以生成漂亮的调色板",
        "url": "https://mycolor.space",
        "category": "设计资源",
        "tags": ["主色调","生成调色板","自动配色","智能配色"]
    },
    {
        "name": "WebGradients",
        "description": "线性渐变背景合集",
        "url": "https://webgradients.com",
        "category": "设计资源",
        "tags": ["线性渐变","背景合集","网页设计","渐变效果"]
    },
    {
        "name": "flatuicolorpicker",
        "description": "在线配色网站，拥有154种漂亮的配色方案",
        "url": "http://www.flatuicolorpicker.com",
        "category": "设计资源",
        "tags": ["154种","配色方案","扁平化","在线配色"]
    },
    {
        "name": "ShapeFactory",
        "description": "简单设计工具包含配色、渐变、logo、插画、滤镜等功能",
        "url": "https://shapefactory.co",
        "category": "设计资源",
        "tags": ["设计工具","配色","渐变","logo","插画","滤镜"]
    },
    {
        "name": "Colors",
        "description": "一个更好的网页调色板",
        "url": "http://clrs.cc",
        "category": "设计资源",
        "tags": ["网页调色板","更好","配色工具","网页设计"]
    },
    {
        "name": "Colormind",
        "description": "AI驱动的调色板生成器",
        "url": "http://colormind.io",
        "category": "设计资源",
        "tags": ["AI驱动","调色板生成器","智能配色","机器学习"]
    },
    {
        "name": "Color Tool",
        "description": "测量任何颜色组合的可访问性级别",
        "url": "https://material.io",
        "category": "设计资源",
        "tags": ["可访问性","颜色组合","测量工具","无障碍设计"]
    },
    {
        "name": "MaterialPalette",
        "description": "生成并下载您的调色板",
        "url": "https://www.materialpalette.com",
        "category": "设计资源",
        "tags": ["生成调色板","下载","Material Design","配色工具"]
    },
    {
        "name": "IconPark",
        "description": "字节跳动旗下开源图标库收录超过1400个图标",
        "url": "https://iconpark.bytedance.com",
        "category": "设计资源",
        "tags": ["字节跳动","开源","1400个图标","图标库"]
    },
    {
        "name": "iconmonstr",
        "description": "巨大且不断增长的简单图标网站",
        "url": "https://iconmonstr.com",
        "category": "设计资源",
        "tags": ["巨大","不断增长","简单图标","免费"]
    },
    {
        "name": "Icon Archive",
        "description": "超过735000个免费图标",
        "url": "http://www.iconarchive.com",
        "category": "设计资源",
        "tags": ["735000个","免费图标","海量","图标库"]
    },
    {
        "name": "IcoMoon",
        "description": "图标字体和SVG图标集",
        "url": "https://icomoon.io",
        "category": "设计资源",
        "tags": ["图标字体","SVG图标集","字体图标","自定义"]
    },
    {
        "name": "DryIcons",
        "description": "高质量的插画和矢量图标下载",
        "url": "https://dryicons.com",
        "category": "设计资源",
        "tags": ["高质量","插画","矢量图标","下载"]
    },
    {
        "name": "iOS Icon",
        "description": "精选IOS应用商店漂亮的图片设计",
        "url": "https://www.iosicongallery.com",
        "category": "设计资源",
        "tags": ["iOS","应用商店","图片设计","精选"]
    },
    {
        "name": "Iconshock",
        "description": "200万个图标和800个图标集",
        "url": "https://www.iconshock.com",
        "category": "设计资源",
        "tags": ["200万个","800个图标集","海量","专业"]
    },
    {
        "name": "Streamline",
        "description": "设计师的首选｜简化图标和插图",
        "url": "https://www.streamlinehq.com",
        "category": "设计资源",
        "tags": ["设计师首选","简化图标","插图","专业"]
    },
    {
        "name": "FontAwesome",
        "description": "一套绝佳的图标字体库和CSS框架",
        "url": "https://fontawesome.com",
        "category": "设计资源",
        "tags": ["图标字体库","CSS框架","绝佳","字体图标"]
    },
    {
        "name": "BootstrapIcons",
        "description": "专门为著名的前端开发UI框架Bootstrap的组件和文档定制开发的图标库",
        "url": "https://icons.getbootstrap.com",
        "category": "AI编程工具",
        "tags": ["Bootstrap","前端开发","UI框架","定制开发"]
    },
    {
        "name": "Ailogo",
        "description": "腾讯自研的智能设计平台，免费在线生成品牌logo、企业VI",
        "url": "https://ailogo.qq.com",
        "category": "设计资源",
        "tags": ["腾讯","智能设计","品牌logo","企业VI","AI"]
    },
    {
        "name": "Brandmark",
        "description": "最先进的AI徽标设计工具",
        "url": "https://brandmark.io",
        "category": "设计资源",
        "tags": ["AI","徽标设计","最先进","智能工具"]
    },
    {
        "name": "MaterialDesignIcons",
        "description": "一个图标集合，能提供各种需求的格式、颜色和大小。",
        "url": "https://pictogrammers.com",
        "category": "设计资源",
        "tags": ["Material Design","图标集合","多种格式","颜色大小"]
    },
    {
        "name": "Logopond",
        "description": "高端LOGO集萃，全球著名的LOGO",
        "url": "https://logopond.com",
        "category": "设计资源",
        "tags": ["高端LOGO","集萃","全球著名","设计灵感"]
    },
    {
        "name": "LogoMoose",
        "description": "国外logo设计灵感画廊",
        "url": "https://www.logomoose.com",
        "category": "设计资源",
        "tags": ["国外","logo设计","灵感画廊","设计参考"]
    },
    {
        "name": "Worldvectorlogo",
        "description": "免费下载各种品牌logo",
        "url": "https://worldvectorlogo.com",
        "category": "设计资源",
        "tags": ["免费下载","品牌logo","矢量","商业"]
    },
    {
        "name": "图怪兽",
        "description": "一个极简的在线做图工具，搞定设计不求人",
        "url": "https://818ps.com",
        "category": "在线设计",
        "tags": ["极简","在线做图","设计工具","不求人"]
    },
    {
        "name": "Fotor懒设计",
        "description": "全球最受欢迎的平面设计工具和在线平面设计网站之一",
        "url": "https://www.fotor.com.cn",
        "category": "在线设计",
        "tags": ["全球最受欢迎","平面设计","在线设计","设计工具"]
    },
    {
        "name": "Ps智能参考",
        "description": "可以快速生成参考线、构图、版式，帮你开启高效设计",
        "url": "https://ck.pszhuli.com",
        "category": "在线设计",
        "tags": ["智能参考","参考线","构图","版式","高效设计"]
    },
    {
        "name": "即时工具",
        "description": "在线图片处理、音视频处理、图表生成工具箱",
        "url": "https://www.67tool.com",
        "category": "在线设计",
        "tags": ["图片处理","音视频处理","图表生成","工具箱"]
    },
    {
        "name": "Canva",
        "description": "在线设计软件提供了海量的免设计模板",
        "url": "https://www.canva.cn",
        "category": "在线设计",
        "tags": ["在线设计软件","海量模板","免设计","设计工具"]
    },
    {
        "name": "Clipping Magic",
        "description": "在线智能抠图，可直接去除背景或者改变背景颜色",
        "url": "https://zh.clippingmagic.com",
        "category": "图像处理",
        "tags": ["智能抠图","去除背景","改变背景","在线工具"]
    },
    {
        "name": "Remove",
        "description": "在线抠图网站，5秒抠除背景",
        "url": "https://www.remove.bg",
        "category": "图像处理",
        "tags": ["在线抠图","5秒","抠除背景","快速"]
    },
    {
        "name": "TinyPNG",
        "description": "免费压缩PNG图像",
        "url": "https://tinypng.com",
        "category": "在线设计",
        "tags": ["免费压缩","PNG图像","图片优化","在线工具"]
    },
    {
        "name": "日本专利局",
        "description": "日本特许厅专利信息平台J-PlatPat",
        "url": "https://www.j-platpat.inpit.go.jp",
        "category": "知识产权服务",
        "tags": ["日本","专利局","J-PlatPat","专利信息"]
    },
    {
        "name": "谷歌专利搜索",
        "description": "Google专利搜索引擎，提供全球专利检索服务",
        "url": "https://patents.google.com",
        "category": "知识产权服务",
        "tags": ["谷歌","专利搜索","全球检索","搜索引擎"]
    },
    {
        "name": "Espacenet专利搜索",
        "description": "欧洲专利局全球专利数据库，提供专利检索服务",
        "url": "https://worldwide.espacenet.com",
        "category": "知识产权服务",
        "tags": ["Espacenet","专利搜索","全球数据库","欧洲专利局"]
    },
    {
        "name": "世界知识产权组织",
        "description": "联合国专门机构，负责知识产权事务的全球协调",
        "url": "https://www.wipo.int",
        "category": "知识产权服务",
        "tags": ["WIPO","世界知识产权","联合国","全球协调"]
    },
    {
        "name": "美国版权局",
        "description": "美国版权局官方网站，提供版权注册和查询服务",
        "url": "https://www.copyright.gov",
        "category": "知识产权服务",
        "tags": ["美国","版权局","版权注册","版权查询"]
    },
    {
        "name": "中国专利检索",
        "description": "中国专利检索及分析系统，提供专利查询和分析服务",
        "url": "https://pss-system.cponline.cnipa.gov.cn",
        "category": "知识产权服务",
        "tags": ["中国","专利检索","专利分析","国家知识产权局"]
    },
    {
        "name": "西柚找词插件",
        "description": "专业的亚马逊关键词挖掘和分析工具",
        "url": "https://knowledge.xiyouzhaoci.com",
        "category": "浏览器扩展",
        "tags": ["关键词挖掘","亚马逊","SEO工具","关键词分析"]
    },
    {
        "name": "LastPass",
        "description": "屡获殊荣的密码管理器，自动保存并记录你的密码，多终端同步",
        "url": "https://chrome.google.com",
        "category": "浏览器扩展",
        "tags": ["密码管理","多终端同步","自动保存","安全"]
    },
    {
        "name": "Sellerise",
        "description": "亚马逊卖家工具插件",
        "url": "https://sellerise.com",
        "category": "浏览器扩展",
        "tags": ["亚马逊","卖家工具","产品分析","运营工具"]
    },
    {
        "name": "图片下载插件",
        "description": "一键下载亚马逊高清大图和评论买家秀图片的插件，免费！",
        "url": "https://extpose.com",
        "category": "浏览器扩展",
        "tags": ["图片下载","亚马逊","高清大图","买家秀","免费"]
    },
    {
        "name": "Amazon图搜",
        "description": "AliPrice以图搜同款, 支持搜Amazon 1688 淘宝 拼多多 Alibaba AliExpress Shopee Ebay, 免费!",
        "url": "https://www.aliprice.com",
        "category": "浏览器扩展",
        "tags": ["以图搜图","多平台","免费","产品搜索","比价"]
    },
    {
        "name": "Keepa",
        "description": "（必备）可以查看亚马逊商品历史价格和BSR变化",
        "url": "https://keepa.com",
        "category": "浏览器扩展",
        "tags": ["价格追踪","BSR变化","亚马逊","历史数据","必备"]
    },
    {
        "name": "AMZDataStudio插件",
        "description": "Amazon KW Index and Rank Tracker，关键词排名定位追踪。",
        "url": "https://amzdatastudio.com",
        "category": "浏览器扩展",
        "tags": ["关键词追踪","排名监控","亚马逊","SEO工具"]
    },
    {
        "name": "Wordtracker Scout",
        "description": "直接分析任意一个页面的关键字，并形成关键字云图。",
        "url": "https://www.wordtracker.com",
        "category": "AI办公工具",
        "tags": ["关键词分析","关键词云图","页面分析","SEO工具"]
    },
    {
        "name": "SlickDeals",
        "description": "美国最大的促销导购网站，比较适合做电子类产品",
        "url": "https://slickdeals.net",
        "category": "营销推广",
        "tags": ["美国最大","促销导购","电子产品","折扣网站"]
    },
    {
        "name": "Vipon",
        "description": "站外促销平台",
        "url": "https://affiliate.blhltd.com",
        "category": "营销推广",
        "tags": ["站外促销","促销平台","亚马逊","推广"]
    },
    {
        "name": "Dealsplus",
        "description": "不是很挑产品，可以自己发帖，发帖被顶的多了编辑会审核一下，然后进入首页",
        "url": "https://www.dealsplus.com",
        "category": "营销推广",
        "tags": ["自助发帖","编辑审核","首页推荐","促销平台"]
    },
    {
        "name": "Deal News",
        "description": "美国网店折扣，促销，特价以及比价信息交流平台",
        "url": "https://www.dealnews.com",
        "category": "营销推广",
        "tags": ["美国网店","折扣促销","特价比价","信息交流"]
    },
    {
        "name": "Dealsea",
        "description": "美国前十的折扣商品网站",
        "url": "http://dealsea.com",
        "category": "营销推广",
        "tags": ["美国前十","折扣商品","促销网站","排名靠前"]
    },
    {
        "name": "Jumpsend",
        "description": "JungleScout旗下站外促销平台",
        "url": "https://www.jumpsend.com",
        "category": "营销推广",
        "tags": ["JungleScout","站外促销","促销平台","亚马逊"]
    },
    {
        "name": "ReatailMeNot",
        "description": "偏食品服装家居类，电子产品在上面热卖的成功率不太高",
        "url": "https://www.retailmenot.com",
        "category": "营销推广",
        "tags": ["食品服装","家居类","电子产品","成功率低"]
    },
    {
        "name": "Snagshout",
        "description": "美国领先的亚马逊产品测评网站",
        "url": "https://www.snagshout.com",
        "category": "营销推广",
        "tags": ["美国领先","亚马逊","产品测评","测评网站"]
    },
    {
        "name": "Kinja",
        "description": "流量大，最好找编辑给你发帖，他们会回复一个链接让你填表格，联系邮箱：deals@gawker.com shane@gawker.com studio@gawker.com",
        "url": "http://deals.kinja.com",
        "category": "AI办公工具",
        "tags": ["流量大","编辑发帖","填表格","联系邮箱"]
    },
    {
        "name": "Tomoson",
        "description": "美国红人平台",
        "url": "https://www.tomoson.com",
        "category": "营销推广",
        "tags": ["美国","红人平台","网红营销","KOL"]
    },
    {
        "name": "Giveaway",
        "description": "美国测评网站",
        "url": "https://www.giveawayservice.com",
        "category": "营销推广",
        "tags": ["美国","测评网站","产品测评","免费试用"]
    },
    {
        "name": "Dealmoon",
        "description": "北美省钱快报，面向北美市场的中英双语折扣信息网站",
        "url": "http://www.dealmoon.com",
        "category": "营销推广",
        "tags": ["北美省钱快报","中英双语","折扣信息","北美市场"]
    },
    {
        "name": "iReviewHome",
        "description": "美国测评网站",
        "url": "https://www.ilovetoreview.com",
        "category": "营销推广",
        "tags": ["美国","测评网站","产品测评","免费试用"]
    },
    {
        "name": "Techbargains",
        "description": "美国前10折扣商品促销信息发布网站，主要是数码、电子产品",
        "url": "http://www.techbargains.com",
        "category": "营销推广",
        "tags": ["美国前10","折扣商品","数码产品","电子产品"]
    },
    {
        "name": "Offers",
        "description": "服装食品休闲类的产品比较火爆，电子类产品也有，需要把deal发给编辑审核",
        "url": "http://www.offers.com",
        "category": "营销推广",
        "tags": ["服装食品","休闲类","电子类","编辑审核"]
    },
    {
        "name": "Hotukdeals",
        "description": "英国最大的促销导购网站",
        "url": "http://www.hotukdeals.com",
        "category": "营销推广",
        "tags": ["英国最大","促销导购","折扣网站","英国市场"]
    },
    {
        "name": "Lifehacker",
        "description": "美国著名的生活、软件类效率博客",
        "url": "http://lifehacker.com",
        "category": "营销推广",
        "tags": ["美国著名","生活软件","效率博客","科技资讯"]
    },
    {
        "name": "GoldLeaf",
        "description": "美国测评网站",
        "url": "http://gold-leaf-group.com",
        "category": "营销推广",
        "tags": ["美国","测评网站","产品测评","免费试用"]
    },
    {
        "name": "Elitedealclub",
        "description": "美国测评网站",
        "url": "https://elitedealclub.com",
        "category": "营销推广",
        "tags": ["美国","测评网站","产品测评","免费试用"]
    },
    {
        "name": "Bizrate",
        "description": "美国著名的购物比较搜索引擎",
        "url": "http://www.bizrate.com",
        "category": "营销推广",
        "tags": ["美国著名","购物比较","搜索引擎","比价网站"]
    },
    {
        "name": "Mydealz",
        "description": "德国最大的促销导购网站",
        "url": "http://www.mydealz.de",
        "category": "营销推广",
        "tags": ["德国最大","促销导购","折扣网站","德国市场"]
    },
    {
        "name": "UberZonClub",
        "description": "美国测评网站",
        "url": "http://www.uberzonclub.com",
        "category": "营销推广",
        "tags": ["美国","测评网站","产品测评","免费试用"]
    },
    {
        "name": "Dealabs",
        "description": "法国最大的促销导购网站",
        "url": "http://www.dealabs.com",
        "category": "营销推广",
        "tags": ["法国最大","促销导购","折扣网站","法国市场"]
    },
    {
        "name": "Redflagdeals",
        "description": "加拿大最大的促销导购网站",
        "url": "http://www.redflagdeals.com",
        "category": "营销推广",
        "tags": ["加拿大最大","促销导购","折扣网站","加拿大市场"]
    },
    {
        "name": "网红推广",
        "description": "海量站外推广途径，上易推宝，自助下单！",
        "url": "https://www.ytbao.com",
        "category": "营销推广",
        "tags": ["海量推广","站外推广","易推宝","自助下单","网红营销"]
    },
    {
        "name": "环球通汇",
        "description": "以引领合规的跨境支付方案链接中国和世界的交易场景",
        "url": "https://www.gptransfer.com",
        "category": "支付工具",
        "tags": ["跨境支付","合规","中国","世界","交易场景"]
    },
    {
        "name": "QBIT",
        "description": "打通企业全球资金流转链路。",
        "url": "https://www.qbitnetwork.com",
        "category": "支付工具",
        "tags": ["企业","全球资金","流转链路","资金管理"]
    },
    {
        "name": "Virtualcards",
        "description": "50美元起充,支持支付宝充值",
        "url": "https://www.virtualcards.us",
        "category": "支付工具",
        "tags": ["50美元起充","支付宝充值","虚拟卡","充值"]
    },
    {
        "name": "VMcard",
        "description": "VMcard 国际预付卡，用于海外电商购物、服务订阅、账户注册、会员储值等场景",
        "url": "https://vmcardio.com",
        "category": "支付工具",
        "tags": ["国际预付卡","海外电商","服务订阅","账户注册","会员储值"]
    },
    {
        "name": "Advcash",
        "description": "目前需要用欧洲国家的资料注册",
        "url": "https://wallet.advcash.com",
        "category": "支付工具",
        "tags": ["欧洲国家","资料注册","虚拟卡","注册要求"]
    },
    {
        "name": "Amzkeys",
        "description": "支持后台在线管理申请，同时无限开卡，实时查明细，多种币种支持，安全便捷。",
        "url": "https://amzkeys.com",
        "category": "支付工具",
        "tags": ["在线管理","无限开卡","实时查明细","多币种","安全便捷"]
    },
    {
        "name": "芥末卡",
        "description": "支付管理解决方案，为你提供你所需要的信贷和管理软件，免费使用",
        "url": "https://wasabicard.com",
        "category": "支付工具",
        "tags": ["支付管理","信贷","管理软件","免费使用"]
    },
    {
        "name": "Tap&Go拍住赏",
        "description": "由香港电讯的全资附属公司 HKT Payment Ltd 于2015年推出的电子钱包",
        "url": "https://www.tapngo.com.hk",
        "category": "支付工具",
        "tags": ["香港电讯","HKT Payment","电子钱包","2015年推出"]
    },
    {
        "name": "世界之极",
        "description": "世界之极，海外VISA，万事达虚拟卡",
        "url": "https://www.worldest.us",
        "category": "支付工具",
        "tags": ["海外VISA","万事达","虚拟卡","世界之极"]
    },
    {
        "name": "Bento",
        "description": "直观的、基于借记卡的商业支出管理平台，可帮助客户省钱",
        "url": "https://bentoforbusiness.com",
        "category": "支付工具",
        "tags": ["借记卡","商业支出","管理平台","省钱"]
    },
    {
        "name": "007虚拟卡",
        "description": "免费开户，无限开卡，拥有VISA、MASTER多个国家多个币种卡BIN，广告投放、电商租金、游戏等多元场景消费全球",
        "url": "https://pay007.cc",
        "category": "支付工具",
        "tags": ["免费开户","无限开卡","VISA","MASTER","多国家","多币种","广告投放","电商","游戏"]
    },
    {
        "name": "全球付",
        "description": "0费用轻松申请，国际在线购物新体验",
        "url": "http://www.globalcash.hk",
        "category": "支付工具",
        "tags": ["0费用","轻松申请","国际在线购物","新体验"]
    },
    {
        "name": "爱汇旅支卡",
        "description": "最容易适合中国用户申请的mastercard电子旅支卡",
        "url": "https://www.ihui.com",
        "category": "支付工具",
        "tags": ["中国用户","mastercard","电子旅支卡","容易申请"]
    },
    {
        "name": "Emburse",
        "description": "一家提供企业级支出管理解决方案的软件公司",
        "url": "https://www.emburse.com",
        "category": "支付工具",
        "tags": ["企业级","支出管理","解决方案","软件公司"]
    },
    {
        "name": "Privacy",
        "description": "使用隐私保护，用自动生成的虚拟卡屏蔽你的真实卡信息。",
        "url": "https://privacy.com",
        "category": "支付工具",
        "tags": ["隐私保护","自动生成","虚拟卡","屏蔽真实卡信息"]
    },
    {
        "name": "Revolut",
        "description": "更智能地发送、消费和储蓄，把所有的钱放在一个地方，使日常开支变得轻而易举",
        "url": "https://www.revolut.com",
        "category": "支付工具",
        "tags": ["智能发送","消费储蓄","统一管理","日常开支"]
    },
    {
        "name": "Wirego",
        "description": "支付场景全面覆盖，支持美元、英镑、欧元、澳元、港币等 10 个主流币种的支付与结算",
        "url": "https://wiregotech.com",
        "category": "支付工具",
        "tags": ["支付场景","全面覆盖","10个主流币种","支付结算"]
    },
    {
        "name": "信用卡号码生成器",
        "description": "Namso-gen信用卡号码生成器",
        "url": "https://namso-gen.com",
        "category": "支付工具",
        "tags": ["信用卡号码","生成器","Namso-gen","工具"]
    },
    {
        "name": "信用卡检测",
        "description": "免费的信用卡号码检查工具",
        "url": "https://www.mrchecker.net",
        "category": "支付工具",
        "tags": ["免费","信用卡号码","检查工具","检测"]
    },
    {
        "name": "PST",
        "description": "用于广告帐户和个人购买的虚拟卡",
        "url": "https://pst.net",
        "category": "支付工具",
        "tags": ["广告帐户","个人购买","虚拟卡","广告投放"]
    },
    {
        "name": "VIABUY",
        "description": "使用个人IBAN和预付万事达卡的在线账户",
        "url": "https://www.viabuy.com",
        "category": "支付工具",
        "tags": ["个人IBAN","预付万事达卡","在线账户","个人账户"]
    },
    {
        "name": "Dupay",
        "description": "支持USDT充值到VISA卡和Master卡",
        "url": "https://dupay.one",
        "category": "支付工具",
        "tags": ["USDT充值","VISA卡","Master卡","加密货币"]
    },
    {
        "name": "e.pn",
        "description": "致力于为跨境从业者提供优质的国内外Card",
        "url": "https://e.pn",
        "category": "支付工具",
        "tags": ["跨境从业者","优质","国内外Card","跨境服务"]
    },
    {
        "name": "三三金融",
        "description": "适合所有人的一站式购物礼品解決方案",
        "url": "https://www.33finance.com",
        "category": "支付工具",
        "tags": ["一站式","购物礼品","解决方案","适合所有人"]
    },
    {
        "name": "NobePay",
        "description": "覆盖多种支付场景，满足您商旅、购物、应用、游戏、广告等消费管理需求",
        "url": "https://www.nobepay.com",
        "category": "支付工具",
        "tags": ["多种支付场景","商旅","购物","应用","游戏","广告","消费管理"]
    },
    {
        "name": "PayTrades",
        "description": "为中小外贸企业提供快捷、 安全、一站式的收款结汇服务",
        "url": "https://www.paytrades.cn",
        "category": "支付工具",
        "tags": ["中小外贸企业","快捷","安全","一站式","收款结汇"]
    },
    {
        "name": "Pyvio",
        "description": "为跨境企业实现更安全、更快速、更便捷的全球收付服务",
        "url": "https://pyvio.com",
        "category": "支付工具",
        "tags": ["跨境企业","安全","快速","便捷","全球收付"]
    },
    {
        "name": "TransferEasy",
        "description": "为客户提供安全、便捷、高效的多币种、跨地域、跨平台的国际汇款金融服务",
        "url": "https://www.transfereasy.com",
        "category": "支付工具",
        "tags": ["安全","便捷","高效","多币种","跨地域","跨平台","国际汇款"]
    },
    {
        "name": "Skyee",
        "description": "费率0.2%封顶，注册即享90天0费率，人民币提现秒到账，安全一定省",
        "url": "https://www.skyee360.com",
        "category": "支付工具",
        "tags": ["费率0.2%","90天0费率","人民币提现","秒到账","安全省"]
    },
    {
        "name": "寻汇SUNRATE",
        "description": "费率0-0.5%,支持多平台本土店铺,安全合规多牌照",
        "url": "https://www.sunrate.com",
        "category": "支付工具",
        "tags": ["费率0-0.5%","多平台本土店铺","安全合规","多牌照"]
    },
    {
        "name": "宝付国际",
        "description": "Tiktok东南亚本地收款上线，六大站点直收！",
        "url": "https://exchange.gepholding.com",
        "category": "支付工具",
        "tags": ["Tiktok","东南亚","本地收款","六大站点","直收"]
    },
    {
        "name": "HyperPay",
        "description": "全球化加密数字货币支付聚合解决方案服务商",
        "url": "https://www.hyperpay.io",
        "category": "支付工具",
        "tags": ["全球化","加密数字货币","支付聚合","解决方案","服务商"]
    },
    {
        "name": "Global E-Payment",
        "description": "提供定制化的全球收款、全球付款、换汇、虚拟卡服务，覆盖客户生态链业务需求",
        "url": "https://www.gepholding.com",
        "category": "支付工具",
        "tags": ["定制化","全球收款","全球付款","换汇","虚拟卡","生态链"]
    },
    {
        "name": "4399Pay",
        "description": "支持USDT直接充值使用，系统自动换汇成美金,整体费率低",
        "url": "https://4399pay.com",
        "category": "支付工具",
        "tags": ["USDT充值","自动换汇","美金","整体费率低"]
    },
    {
        "name": "Windpayer",
        "description": "为跨境卖家提供多平台、多币种、安全快捷的收款服务",
        "url": "https://windpayer.com",
        "category": "支付工具",
        "tags": ["跨境卖家","多平台","多币种","安全快捷","收款服务"]
    },
    {
        "name": "MXKPay",
        "description": "开卡无限量，一个账户管理全部卡片",
        "url": "https://www.mxkpay.com",
        "category": "支付工具",
        "tags": ["开卡无限量","一个账户","管理全部卡片","统一管理"]
    },
    {
        "name": "Foton Card",
        "description": "提供安全、便捷、灵活的虚拟卡服务，覆盖多种消费场景",
        "url": "https://dashboard.fotoncard.com",
        "category": "支付工具",
        "tags": ["安全","便捷","灵活","虚拟卡服务","多种消费场景"]
    },
    {
        "name": "US Unlocked",
        "description": "我们的虚拟预付卡允许您在您最喜爱的零售商处进行无限制购物",
        "url": "https://www.usunlocked.com",
        "category": "支付工具",
        "tags": ["虚拟预付卡","零售商","无限制购物","美国"]
    },
    {
        "name": "VccPay",
        "description": "0开户费，透明费率。超多卡段、消费场景全覆盖，与美国银行深度合作",
        "url": "https://vcc.joycart.cn",
        "category": "支付工具",
        "tags": ["0开户费","透明费率","超多卡段","消费场景全覆盖","美国银行"]
    },
    {
        "name": "ePayServices",
        "description": "面向个人企业和IT专业人员的多功能支付解决方案",
        "url": "https://epayservices.com",
        "category": "支付工具",
        "tags": ["个人企业","IT专业人员","多功能","支付解决方案"]
    },
    {
        "name": "狸猫",
        "description": "无需实名，安全便携，卡段多样。",
        "url": "https://www.limaopay.com",
        "category": "支付工具",
        "tags": ["无需实名","安全便携","卡段多样","匿名"]
    },
    {
        "name": "皮卡宝",
        "description": "",
        "url": "https://www.pikabao.com",
        "category": "支付工具",
        "tags": ["虚拟卡","支付服务","皮卡宝"]
    },
    {
        "name": "Hubstudio",
        "description": "一款功能强大的网络浏览器",
        "url": "https://www.hubstudio.cn",
        "category": "隐私安全工具",
        "tags": ["功能强大","网络浏览器","指纹管理"]
    },
    {
        "name": "AdsPower",
        "description": "一款为跨境业务提供多账号营销管理专用防关联指纹浏览器",
        "url": "https://www.adspower.net",
        "category": "隐私安全工具",
        "tags": ["跨境业务","多账号营销","防关联","指纹浏览器"]
    },
    {
        "name": "VMlogin",
        "description": "国内功能最强的虚拟多登防关联超级浏览器",
        "url": "https://vmlogin.cc",
        "category": "隐私安全工具",
        "tags": ["国内最强","虚拟多登","防关联","超级浏览器"]
    },
    {
        "name": "比特浏览器",
        "description": "功能强大的免费指纹浏览器！",
        "url": "https://www.bitbrowser.cn",
        "category": "隐私安全工具",
        "tags": ["功能强大","免费","指纹浏览器"]
    },
    {
        "name": "Zennolab",
        "description": "Zennolab自动化程序浏览器",
        "url": "https://zennolab.com",
        "category": "隐私安全工具",
        "tags": ["自动化程序","浏览器","Zennolab"]
    },
    {
        "name": "Antbrowser",
        "description": "蚂蚁浏览器，战斗民族俄罗斯出品",
        "url": "https://antbrowser.pro",
        "category": "隐私安全工具",
        "tags": ["蚂蚁浏览器","俄罗斯","战斗民族"]
    },
    {
        "name": "Multilogin",
        "description": "有着多年业内专家指导和协作，立足于国内，服务于全球用户",
        "url": "https://multilogin.com",
        "category": "隐私安全工具",
        "tags": ["业内专家","国内","全球用户","协作"]
    },
    {
        "name": "飞跨浏览器",
        "description": "多品牌运营工具/账密安全/加速访问/团队协同",
        "url": "https://www.feikua.net",
        "category": "隐私安全工具",
        "tags": ["多品牌运营","账密安全","加速访问","团队协同"]
    },
    {
        "name": "跨境卫士",
        "description": "独享固定环境+固定IP，解决跨境电商运营账号安全问题",
        "url": "https://www.kuajingvs.com",
        "category": "隐私安全工具",
        "tags": ["独享固定环境","固定IP","跨境电商","账号安全"]
    },
    {
        "name": "Kameleo",
        "description": "一款功能强大的网络浏览器",
        "url": "https://kameleo.io",
        "category": "隐私安全工具",
        "tags": ["功能强大","网络浏览器","指纹管理"]
    },
    {
        "name": "Gologin",
        "description": "一款多功能、非常实用的网络浏览工具",
        "url": "https://gologin.com",
        "category": "隐私安全工具",
        "tags": ["多功能","实用","网络浏览工具"]
    },
    {
        "name": "Incogniton",
        "description": "一款基于网络的跨平台浏览器",
        "url": "https://incogniton.com",
        "category": "隐私安全工具",
        "tags": ["基于网络","跨平台","浏览器"]
    },
    {
        "name": "快兔浏览器",
        "description": "一款基于网络的跨平台浏览器",
        "url": "https://kuaitux.com",
        "category": "隐私安全工具",
        "tags": ["基于网络","跨平台","浏览器"]
    },
    {
        "name": "候鸟浏览器",
        "description": "一款基于网络的跨平台浏览器",
        "url": "https://www.ehouniao.com",
        "category": "隐私安全工具",
        "tags": ["基于网络","跨平台","浏览器"]
    },
    {
        "name": "Tiger AI指纹浏览器",
        "description": "Tiger AI根据不同的风控标准，进行账号防关联。",
        "url": "https://www.tiger.top",
        "category": "隐私安全工具",
        "tags": ["Tiger AI","风控标准","账号防关联","AI技术"]
    },
    {
        "name": "Sphere",
        "description": "俄罗斯大神开发的免费超级浏览器",
        "url": "https://sphere.tenebris.cc",
        "category": "AI编程工具",
        "tags": ["俄罗斯","免费","超级浏览器","大神开发"]
    },
    {
        "name": "拉力猫",
        "description": "一台电脑即可实现同时多开浏览器",
        "url": "https://www.lalimao.com",
        "category": "隐私安全工具",
        "tags": ["一台电脑","同时多开","浏览器","多开管理"]
    },
    {
        "name": "ClonBrowser",
        "description": "永久免费的反侦测指纹浏览器",
        "url": "https://www.clonbrowser.net",
        "category": "隐私安全工具",
        "tags": ["永久免费","反侦测","指纹浏览器"]
    },
    {
        "name": "快洋淘浏览器",
        "description": "一款跨境电商卖家安全多账号管理工具",
        "url": "https://www.yangtao.com",
        "category": "隐私安全工具",
        "tags": ["跨境电商","卖家","安全多账号","管理工具"]
    },
    {
        "name": "Maskfog",
        "description": "一款为跨境业务提供多账号营销管理专用防关联指纹浏览器",
        "url": "https://www.maskfog.com",
        "category": "隐私安全工具",
        "tags": ["跨境业务","多账号营销","防关联","指纹浏览器"]
    },
    {
        "name": "MuLogin",
        "description": "一款多登防关联指纹浏览器。安全登录管理多个平台帐号,独立分开的浏览器指纹环境,防止同时登录被关联,安全,高效,快速发展您的在线业务。",
        "url": "https://www.mulogin.com",
        "category": "隐私安全工具",
        "tags": ["多登防关联","安全登录","多平台帐号","独立指纹环境","防止关联"]
    },
    {
        "name": "VMMask",
        "description": "一款全新的虚拟网络技术,它结合了以太网和虚拟机技术,实现了高安全性和更加灵活的高效网络环境。",
        "url": "https://vmmask.net",
        "category": "隐私安全工具",
        "tags": ["虚拟网络技术","以太网","虚拟机技术","高安全性","灵活高效"]
    },
    {
        "name": "阿拉鱼",
        "description": "首个独立站专业级运营系统,专注于独立站运营痛点解决方案。",
        "url": "https://alayu.com",
        "category": "隐私安全工具",
        "tags": ["独立站","专业级运营系统","运营痛点","解决方案"]
    },
    {
        "name": "Mologin指纹浏览器",
        "description": "款基于Chromium开发的指纹浏览器，通过对Chromium底层代码加以改进，实现在一台电脑创建多个独立指纹浏览器，用于管理多个帐号。",
        "url": "https://www.mologin.com",
        "category": "AI编程工具",
        "tags": ["Chromium开发","指纹浏览器","底层代码改进","多独立指纹","多帐号管理"]
    },
    {
        "name": "蜂巢浏览器",
        "description": "一款软件, 自定义所有参数来隐藏和控制您的数字指纹。",
        "url": "https://nestbrowser.com",
        "category": "隐私安全工具",
        "tags": ["自定义参数","隐藏控制","数字指纹","指纹管理"]
    },
    {
        "name": "花漾浏览器",
        "description": "业界领先的防关联多重分身指纹浏览器,致力于解决多账号安全运营问题。",
        "url": "https://www.szdamai.com",
        "category": "隐私安全工具",
        "tags": ["业界领先","防关联","多重分身","指纹浏览器","多账号安全运营"]
    },
    {
        "name": "Ghost Browser",
        "description": "一款基于 Chromium 的浏览器,它最大的特点就是支持「账号多开」。",
        "url": "https://ghostbrowser.com",
        "category": "隐私安全工具",
        "tags": ["Chromium","浏览器","账号多开","多开支持"]
    },
    {
        "name": "MarketerBrowser",
        "description": "MarketerBrowser团队开发的一款浏览器软件,帮助网络营销人员处理同一个网站的多个账号,安全高效地进行推广。您可以查看各种页面并为页面绑定不同的代理和用户代理,因此在一个网站上运行多个帐户是安全的。",
        "url": "https://www.marketerbrowser.com",
        "category": "AI编程工具",
        "tags": ["网络营销","多账号处理","安全高效","推广","代理绑定","用户代理"]
    },
    {
        "name": "Che Browser",
        "description": "创建和成功管理各种网站上的多个帐户所需的:脸谱、宾、雅虎、谷歌、博彩、赌博和任何其他帐户。",
        "url": "https://chebrowser.site",
        "category": "隐私安全工具",
        "tags": ["多帐户管理","脸谱","宾","雅虎","谷歌","博彩","赌博"]
    },
    {
        "name": "Surfinite",
        "description": "反检测浏览器，管理多个广告柜、社交媒体账户、投注店和加密货币交易所。",
        "url": "https://surfinite.com",
        "category": "隐私安全工具",
        "tags": ["反检测浏览器","广告柜","社交媒体账户","投注店","加密货币交易所"]
    },
    {
        "name": "Undetectable",
        "description": "一种基于设备替换地理位置、地址和硬件打印(显示器分辨率、设备型号、语言、连接)的浏览器。",
        "url": "https://undetectable.io",
        "category": "隐私安全工具",
        "tags": ["设备替换","地理位置","硬件打印","显示器分辨率","设备型号","语言连接"]
    },
    {
        "name": "MoreLogin",
        "description": "反检测浏览器的多帐户管理，安全管理帐户，防止检测或堵塞。",
        "url": "https://www.morelogin.com",
        "category": "隐私安全工具",
        "tags": ["反检测浏览器","多帐户管理","安全管理","防止检测","防止堵塞"]
    },
    {
        "name": "Xlogin",
        "description": "创建安全的浏览器配置文件与不同的指纹运行无限的帐户。 XLogin提供多种指纹保护。",
        "url": "https://xlogin.us",
        "category": "隐私安全工具",
        "tags": ["安全浏览器","配置文件","不同指纹","无限帐户","指纹保护"]
    },
    {
        "name": "MultiBrowser",
        "description": "防关联指纹浏览器，用于跨境电商多店铺，多账号管理。",
        "url": "https://www.multibrowser.com",
        "category": "隐私安全工具",
        "tags": ["防关联","指纹浏览器","跨境电商","多店铺","多账号管理"]
    },
    {
        "name": "Accovod",
        "description": "一个可以轻松管理多个帐户，从一个窗口安全方便地访问浏览器配置文件的软件。",
        "url": "https://accovod.com",
        "category": "隐私安全工具",
        "tags": ["多帐户管理","一个窗口","安全方便","浏览器配置文件"]
    },
    {
        "name": "AEZAKMI",
        "description": "一种反检测浏览器，用于安全操作多帐户，流量套利，投注叉以及上下文广告和SMM。  使用AEZAKMI，您可以用一个程序替换虚拟多台计算机，而不会被反欺诈系统所注意。",
        "url": "https://cn.aezakmi.run",
        "category": "隐私安全工具",
        "tags": ["反检测浏览器","安全操作","多帐户","流量套利","投注叉","上下文广告","SMM","反欺诈系统"]
    },
    {
        "name": "Indigo Browser",
        "description": "可用于管理多个帐户,而不会被检测到的多个环境窗口的浏览器之一,使用此浏览器,您可以高效地为每个帐户设置单独的浏览环境。",
        "url": "https://indigobrowser.com",
        "category": "隐私安全工具",
        "tags": ["多帐户管理","不被检测","多环境窗口","单独浏览环境","高效设置"]
    },
    {
        "name": "SMLOGIN",
        "description": "基于全球最流行的浏览器内核深度开发，允许在不同的浏览器配置文件之间快速切换，同时通过数据多重加密，SSL/HTTPS传输，加速防干扰等多项技术，解决了这些问题。",
        "url": "https://www.smlogin.cn",
        "category": "AI编程工具",
        "tags": ["浏览器内核","深度开发","快速切换","数据多重加密","SSL/HTTPS","加速防干扰"]
    },
    {
        "name": "Yunlark",
        "description": "为每个账户提供安全、防关联、独立环境的工具多账户多店铺的安全管理专家。",
        "url": "https://www.yunlark.com",
        "category": "隐私安全工具",
        "tags": ["安全","防关联","独立环境","多账户","多店铺","安全管理专家"]
    },
    {
        "name": "Proxyrack",
        "description": "IP代理，获得可靠、快速、高质量的代理。",
        "url": "https://www.proxyrack.com",
        "category": "隐私安全工具",
        "tags": ["IP代理","可靠","快速","高质量","代理服务"]
    },
    {
        "name": "ixBrowser",
        "description": "一站式解决多账号管理问题，并让团队协作更加灵活高效。",
        "url": "https://www.ixbrowser.com",
        "category": "隐私安全工具",
        "tags": ["一站式","多账号管理","团队协作","灵活高效"]
    },
    {
        "name": "海豚浏览器",
        "description": "俄罗斯出品海豚指纹浏览器，可以管理多个Facebook账号",
        "url": "https://panel.dolphin.ru.com",
        "category": "隐私安全工具",
        "tags": ["俄罗斯出品","海豚","指纹浏览器","Facebook账号","多账号管理"]
    },
    {
        "name": "Pixelscan",
        "description": "浏览器环境检测网站，一个检测互联网机器人的一次性解决方案",
        "url": "https://pixelscan.net",
        "category": "隐私安全工具",
        "tags": ["浏览器环境检测","互联网机器人","一次性解决方案","检测网站"]
    },
    {
        "name": "BrowserLeaks",
        "description": "指纹检测王牌网站",
        "url": "https://browserleaks.com",
        "category": "隐私安全工具",
        "tags": ["指纹检测","王牌网站","浏览器泄露","检测工具"]
    },
    {
        "name": "Fingerprint",
        "description": "指纹查看网站",
        "url": "https://fingerprintjs.com",
        "category": "隐私安全工具",
        "tags": ["指纹查看","指纹检测","指纹识别"]
    },
    {
        "name": "WhatLeaks",
        "description": "提供匿名和欺骗服务,它适用于验证与机器相关联的IP地址的场景,能够提供一个简单的方案。",
        "url": "https://whatleaks.com",
        "category": "隐私安全工具",
        "tags": ["匿名","欺骗服务","IP地址验证","机器关联","简单方案"]
    },
    {
        "name": "Iphey",
        "description": "环境检测网站",
        "url": "https://iphey.com",
        "category": "隐私安全工具",
        "tags": ["环境检测","检测网站","环境分析"]
    },
    {
        "name": "原生IP查询",
        "description": "面向整个互联网的互联网分析网站",
        "url": "https://bgp.he.net",
        "category": "隐私安全工具",
        "tags": ["原生IP","互联网分析","IP查询","网络分析"]
    },
    {
        "name": "IP干净程度",
        "description": "IP位置与干净程度查询",
        "url": "https://whatismyiplookup.com",
        "category": "隐私安全工具",
        "tags": ["IP位置","干净程度","IP查询","质量检测"]
    },
    {
        "name": "Speedtest",
        "description": "强大而知名的全球宽带网络速度测试网站，采用Flash载入界面，Alexa世界排名非常高，Speedtest.net在全球有数百个测试节点，国内有测速节点几十个。作为一款在线并且可视化的网速测试工具。",
        "url": "https://www.speedtest.net",
        "category": "隐私安全工具",
        "tags": ["网络速度测试","全球宽带","Flash界面","Alexa排名","测试节点","可视化工具"]
    },
    {
        "name": "Yalala",
        "description": "浏览器指纹在线检测",
        "url": "https://www.yalala.com",
        "category": "隐私安全工具",
        "tags": ["浏览器指纹","在线检测","指纹分析"]
    },
    {
        "name": "Whoer",
        "description": "查询网络环境匹配度，检查您自己的IP地址以及DNS地址",
        "url": "https://whoer.net",
        "category": "隐私安全工具",
        "tags": ["网络环境匹配度","IP地址检查","DNS地址","环境检测"]
    },
    {
        "name": "IPinfo",
        "description": "IP种类查询，通过对IP信息的的挖掘, 发现滥用IP的行为以及各种类型的机器行为, 区分正常访问和非正常访问, 构建干净的互联网环境, 为站长或者系统管理员提供准确的业务决策。",
        "url": "https://ipinfo.io",
        "category": "隐私安全工具",
        "tags": ["IP种类查询","IP信息挖掘","滥用IP检测","机器行为","正常访问","业务决策"]
    },
    {
        "name": "IPIP",
        "description": "基于实时BGP/ASN数据分析的IP数据库",
        "url": "https://www.ipip.net",
        "category": "隐私安全工具",
        "tags": ["实时BGP","ASN数据分析","IP数据库","网络分析"]
    },
    {
        "name": "2IP",
        "description": "IP地址检测",
        "url": "https://2ip.io",
        "category": "隐私安全工具",
        "tags": ["IP地址检测","IP查询","网络检测"]
    },
    {
        "name": "Scamalytics",
        "description": "IP洁净度查询，国外一个提供IP欺诈评分的网站。",
        "url": "https://scamalytics.com",
        "category": "隐私安全工具",
        "tags": ["IP洁净度","欺诈评分","国外网站","IP质量"]
    },
    {
        "name": "FAKE VISION",
        "description": "更全面的检测信息",
        "url": "http://f.vision",
        "category": "隐私安全工具",
        "tags": ["全面检测","检测信息","详细信息"]
    },
    {
        "name": "Ipdata",
        "description": "一种低延迟API,可根据IP地址(IPv4和IPv6)为网站所有者提供有关其访问者的各种信息。 将其视为IP地理位置和威胁情报API。",
        "url": "https://ipdata.co",
        "category": "隐私安全工具",
        "tags": ["低延迟API","IPv4","IPv6","访问者信息","地理位置","威胁情报"]
    },
    {
        "name": "IP2LOCATION",
        "description": "准确的地理位置",
        "url": "https://www.ip2location.com",
        "category": "隐私安全工具",
        "tags": ["准确地理位置","位置定位","IP定位"]
    },
    {
        "name": "IPHub.info",
        "description": "检测你购买的代理是否是住宅代理IP",
        "url": "https://iphub.info",
        "category": "隐私安全工具",
        "tags": ["代理检测","住宅代理IP","代理验证","IP类型检测"]
    },
    {
        "name": "IP2Proxy",
        "description": "一种匿名代理服务器，它能够隐藏用户的真实IP地址，并代表用户向互联网发送请求。",
        "url": "https://www.ip2proxy.com",
        "category": "隐私安全工具",
        "tags": ["匿名代理","隐藏真实IP","代理服务器","互联网请求"]
    },
    {
        "name": "IPinfodb",
        "description": "一个免费IP地址地理位置定位工具。",
        "url": "https://www.ipinfodb.com",
        "category": "隐私安全工具",
        "tags": ["免费","IP地址","地理位置定位","定位工具"]
    },
    {
        "name": "IPqualityscore",
        "description": "IP质量检测网站",
        "url": "https://www.ipqualityscore.com",
        "category": "隐私安全工具",
        "tags": ["IP质量检测","质量评估","IP分析"]
    },
    {
        "name": "Whatismyipaddress",
        "description": "一个提供互联网协议地址查询和设置的网站。该网站提供的服务有IP查找、黑名单检查、电子邮件追踪、互联网速率测验、隐藏IP和改变IP等等。",
        "url": "https://whatismyipaddress.com",
        "category": "隐私安全工具",
        "tags": ["IP地址查询","IP设置","黑名单检查","电子邮件追踪","速率测验","隐藏IP","改变IP"]
    },
    {
        "name": "IPleak",
        "description": "可以查询网站、个人的IP、DNS及位置等信息。可以将客户的IP地址输入到搜索框进行搜索，从而查询客户在哪个国家。",
        "url": "https://ipleak.net",
        "category": "隐私安全工具",
        "tags": ["IP查询","DNS查询","位置信息","国家查询","网站查询","个人信息"]
    },
    {
        "name": "Sms-Activate",
        "description": "$1起充，提供50多个国家的虚拟号码让您接收短信和来电",
        "url": "https://sms-activate.org",
        "category": "隐私安全工具",
        "tags": ["$1起充","50多个国家","虚拟号码","接收短信","来电"]
    },
    {
        "name": "5sim.net",
        "description": "有超级便宜的国家短信码",
        "url": "https://5sim.net",
        "category": "隐私安全工具",
        "tags": ["超级便宜","国家短信码","接码服务"]
    },
    {
        "name": "Sms-Man",
        "description": "您可以轻松地以低廉的价格获得短信虚拟号码。",
        "url": "https://sms-man.com",
        "category": "隐私安全工具",
        "tags": ["低廉价格","短信虚拟号码","轻松获得"]
    },
    {
        "name": "CheapSms",
        "description": "便宜的在线SMS服务商",
        "url": "https://cheapsms.ru",
        "category": "隐私安全工具",
        "tags": ["便宜","在线SMS","服务商"]
    },
    {
        "name": "Smspva",
        "description": "起价0.1美元,也就是最便宜的70美分起",
        "url": "https://www.smspva.com",
        "category": "隐私安全工具",
        "tags": ["起价0.1美元","70美分起","最便宜"]
    },
    {
        "name": "SMSHUB",
        "description": "以最低价格进行帐户验证的虚拟号码",
        "url": "https://smshub.org",
        "category": "隐私安全工具",
        "tags": ["最低价格","帐户验证","虚拟号码"]
    },
    {
        "name": "OnlineSIM",
        "description": "接收消息、确认和短信激活到临时和一次性号码",
        "url": "https://onlinesim.io",
        "category": "隐私安全工具",
        "tags": ["接收消息","确认","短信激活","临时号码","一次性号码"]
    },
    {
        "name": "Receive SMS",
        "description": "通过保留你的真实电话号码来保护你的隐私",
        "url": "https://receive-sms.com",
        "category": "隐私安全工具",
        "tags": ["保护隐私","真实电话号码","隐私保护"]
    },
    {
        "name": "Sonetel",
        "description": "企业家的本地电话号码",
        "url": "https://sonetel.com",
        "category": "隐私安全工具",
        "tags": ["企业家","本地电话号码","商业服务"]
    },
    {
        "name": "VAK SMS",
        "description": "始终可用的临时、一次性虚拟号码",
        "url": "https://vak-sms.com",
        "category": "隐私安全工具",
        "tags": ["始终可用","临时号码","一次性","虚拟号码"]
    },
    {
        "name": "Sms-Pro",
        "description": "用户现在可以阻止垃圾短信、设置自动回复、进行短信转发",
        "url": "https://sms-pro.cn",
        "category": "隐私安全工具",
        "tags": ["阻止垃圾短信","自动回复","短信转发","高级功能"]
    },
    {
        "name": "SmsPlaza",
        "description": "使用临时号码在线接收短信，用我们的临时号码绕过任何在线短信验证",
        "url": "https://smsplaza.io",
        "category": "隐私安全工具",
        "tags": ["临时号码","在线接收短信","绕过验证","短信验证"]
    },
    {
        "name": "Sms Bus",
        "description": "为Telegram, WhatsApp, TikTok, Google, Yahoo, AOL, Microsoft, Vinted等批量注册账户",
        "url": "https://sms-bus.com",
        "category": "隐私安全工具",
        "tags": ["Telegram","WhatsApp","TikTok","Google","Yahoo","AOL","Microsoft","Vinted","批量注册"]
    },
    {
        "name": "Richpva",
        "description": "验证码接收平台，允许您在美国、英国、印度、德国、澳大利亚等多个国家购买真实的SIM卡号码",
        "url": "https://richpva.com",
        "category": "隐私安全工具",
        "tags": ["验证码接收","美国","英国","印度","德国","澳大利亚","真实SIM卡"]
    },
    {
        "name": "SMSPool",
        "description": "网络上 最便宜、最快的在线短信验证",
        "url": "https://www.smspool.net",
        "category": "隐私安全工具",
        "tags": ["最便宜","最快","在线短信验证","网络服务"]
    },
    {
        "name": "GetSMS.ONLINE",
        "description": "GetSMS.ONLINE在线接收短信，短信激活",
        "url": "https://getsms.online",
        "category": "隐私安全工具",
        "tags": ["在线接收短信","短信激活","GetSMS"]
    },
    {
        "name": "1s2u",
        "description": "通过遍布全球的分布式 SMSC 提供快速可靠的 SMS 流量",
        "url": "https://1s2u.com",
        "category": "隐私安全工具",
        "tags": ["全球分布式","SMSC","快速可靠","SMS流量"]
    },
    {
        "name": "Tiger SMS",
        "description": "世界上最抢手的接码平台，每天10万多新增！",
        "url": "https://tiger-sms.com",
        "category": "隐私安全工具",
        "tags": ["最抢手","接码平台","每天10万多新增","热门平台"]
    },
    {
        "name": "火狐狸平台",
        "description": "提供一次性使用电话号码在几分钟内获取验证码。 支持各种服务Discord、Tinder、Gmail、Telegram、WhatsApp、Line、Nike、OpenAi",
        "url": "https://firefox.fun",
        "category": "隐私安全工具",
        "tags": ["一次性使用","几分钟内","验证码","Discord","Tinder","Gmail","Telegram","WhatsApp","Line","Nike","OpenAi"]
    },
    {
        "name": "Textverified",
        "description": "绕过语音，短信和文本验证",
        "url": "https://www.textverified.com",
        "category": "AI音频工具",
        "tags": ["绕过验证","语音","短信","文本验证"]
    },
    {
        "name": "Google Voice",
        "description": "谷歌虚拟手机号，可永久使用",
        "url": "https://voice.google.com",
        "category": "隐私安全工具",
        "tags": ["谷歌","虚拟手机号","永久使用","Google服务"]
    },
    {
        "name": "Grizzly SMS",
        "description": "用来接码的虚拟手机号的价格很低，所有供应的手机号都有效并能够接码",
        "url": "https://grizzlysms.com",
        "category": "隐私安全工具",
        "tags": ["价格很低","虚拟手机号","有效","接码"]
    },
    {
        "name": "Uomsg",
        "description": "接码平台，接码网站，接码APP，虚拟手机号",
        "url": "http://www.uomsg.com",
        "category": "隐私安全工具",
        "tags": ["接码平台","接码网站","接码APP","虚拟手机号"]
    },
    {
        "name": "SMSCodes",
        "description": "提供真实的SIM卡号供您创建和验证您的帐户",
        "url": "https://www.smscodes.io",
        "category": "AI编程工具",
        "tags": ["真实SIM卡","创建帐户","验证帐户","SIM卡号"]
    },
    {
        "name": "SMS REG",
        "description": "接收 SMS 消息的激活服务。提供用于短信或租用个人虚拟电话号码的单个号码。",
        "url": "https://sms-reg.com",
        "category": "隐私安全工具",
        "tags": ["SMS消息","激活服务","个人虚拟电话号码","单个号码"]
    },
    {
        "name": "SMS Acktiwator",
        "description": "虚拟短信号码激活服务，以最低的价格接收短信到虚拟号码",
        "url": "https://sms-acktiwator.ru",
        "category": "隐私安全工具",
        "tags": ["虚拟短信号码","激活服务","最低价格","接收短信","虚拟号码"]
    },
    {
        "name": "Receive-sms-online",
        "description": "免费在线接收短信，无需注册，无需使用您的个人电话号码。",
        "url": "http://receive-sms-online.info",
        "category": "隐私安全工具",
        "tags": ["免费","在线接收短信","无需注册","无需个人电话号码"]
    },
    {
        "name": "Rreceive-SMS",
        "description": "在线免费接收短信有200多个免费的临时电话号码或虚拟电话号码",
        "url": "https://receive-sms-free.cc",
        "category": "隐私安全工具",
        "tags": ["在线免费","200多个","临时电话号码","虚拟电话号码"]
    },
    {
        "name": "云短信",
        "description": "免费接短信，在线接收短信验证码",
        "url": "https://yunduanxin.net",
        "category": "隐私安全工具",
        "tags": ["免费接短信","在线接收","短信验证码","云短信"]
    },
    {
        "name": "Sms-online",
        "description": "免费在线接收短信，无需注册，甚至无需拥有电话",
        "url": "https://sms-online.co",
        "category": "隐私安全工具",
        "tags": ["免费在线","无需注册","无需拥有电话","接收短信"]
    },
    {
        "name": "Us-Phone-Number",
        "description": "在线免费接收短信，即时在线接收短信",
        "url": "https://us-phone-number.com",
        "category": "隐私安全工具",
        "tags": ["在线免费","即时接收","美国电话号码","接收短信"]
    },
    {
        "name": "Lothelper",
        "description": "提供免费手机号和免费短信验证码服务的免费接码平台",
        "url": "https://www.lothelper.com",
        "category": "隐私安全工具",
        "tags": ["免费手机号","免费短信验证码","免费接码平台","Lothelper"]
    },
    {
        "name": "RVSO",
        "description": "免费在线接收短信",
        "url": "https://www.rvso.com",
        "category": "隐私安全工具",
        "tags": ["免费在线","接收短信","RVSO"]
    },
    {
        "name": "Receive SMS Online",
        "description": "在线接收短信，语音通话验证",
        "url": "https://sms.sellaite.com",
        "category": "AI音频工具",
        "tags": ["在线接收短信","语音通话验证","SMS Online"]
    },
    {
        "name": "Receive a Sms",
        "description": "保持你的个人号码的私密性，在网上或通过电子邮件接收你的信息",
        "url": "https://www.receiveasms.com",
        "category": "隐私安全工具",
        "tags": ["个人号码私密性","网上接收","电子邮件接收","信息接收"]
    },
    {
        "name": "Receive-Sms.CC",
        "description": "在线接收短信，免费接收短信",
        "url": "https://receive-sms.cc",
        "category": "隐私安全工具",
        "tags": ["在线接收短信","免费接收短信","SMS.CC"]
    },
    {
        "name": "GetFreeSMSNumber",
        "description": "获取免费短信，在线即时接收短信",
        "url": "https://getfreesmsnumber.com",
        "category": "隐私安全工具",
        "tags": ["获取免费短信","在线即时接收","FreeSMSNumber"]
    },
    {
        "name": "ReceiveSMS.org",
        "description": "免费在线接收短信，可以使用任意数量的电话号码，并且可以接收任意数量的短信",
        "url": "https://receivesms.org",
        "category": "隐私安全工具",
        "tags": ["免费在线","任意数量电话号码","任意数量短信","ReceiveSMS.org"]
    },
    {
        "name": "Free Online Phone",
        "description": "免费在线电话",
        "url": "https://www.freeonlinephone.org",
        "category": "隐私安全工具",
        "tags": ["免费在线电话","电话服务","Free Online Phone"]
    },
    {
        "name": "Online-sms.org",
        "description": "免费在线接收短信到一个新的临时电话号码",
        "url": "https://online-sms.org",
        "category": "隐私安全工具",
        "tags": ["免费在线","临时电话号码","接收短信","Online-sms.org"]
    },
    {
        "name": "ReceiveFreeSMS",
        "description": "免费在线接收短信",
        "url": "https://receivefreesms.net",
        "category": "隐私安全工具",
        "tags": ["免费在线","接收短信","ReceiveFreeSMS"]
    },
    {
        "name": "ReceiveSMSS.com",
        "description": "接收短信的免费服务和在线语音邮件，无需注册",
        "url": "https://receive-smss.com",
        "category": "AI音频工具",
        "tags": ["免费服务","在线语音邮件","无需注册","ReceiveSMSS.com"]
    },
    {
        "name": "ReceiveSMS",
        "description": "免费电话号码，让每个人都可以在线接收短信",
        "url": "https://receivesms.co",
        "category": "隐私安全工具",
        "tags": ["免费电话号码","每个人都可以","在线接收短信","ReceiveSMS"]
    },
    {
        "name": "Free-SMS-Receive.com",
        "description": "一项免费在线接收短信服务，用于在线接收手机短信验证码",
        "url": "https://www.free-sms-receive.com",
        "category": "隐私安全工具",
        "tags": ["免费在线","手机短信验证码","接收短信服务","Free-SMS-Receive.com"]
    },
    {
        "name": "SMS-Receive.net",
        "description": "提供公共电话号码的免费服务，您可以在各种社交网站或论坛上在线接收短信",
        "url": "https://sms-receive.net",
        "category": "隐私安全工具",
        "tags": ["公共电话号码","免费服务","社交网站","论坛","在线接收短信","SMS-Receive.net"]
    },
    {
        "name": "Getnada",
        "description": "一次性使用的临时电子邮件，可以用于注册到受信任的网站",
        "url": "https://getnada.com",
        "category": "隐私安全工具",
        "tags": ["一次性使用","临时电子邮件","受信任网站","注册"]
    },
    {
        "name": "Crazymailing",
        "description": "Crazymailing临时邮箱，有效时间30分钟",
        "url": "https://www.crazymailing.com",
        "category": "隐私安全工具",
        "tags": ["Crazymailing","30分钟","临时邮箱"]
    },
    {
        "name": "24小时邮箱",
        "description": "不需要注册，邮箱持续24小时，可以任意设置邮箱名，随时更换邮箱",
        "url": "http://24mail.chacuo.net",
        "category": "隐私安全工具",
        "tags": ["不需要注册","24小时","任意设置邮箱名","随时更换"]
    },
    {
        "name": "Yopmail",
        "description": "临时免费邮箱，有效期限5日",
        "url": "http://www.yopmail.com",
        "category": "隐私安全工具",
        "tags": ["临时免费邮箱","有效期限5日","Yopmail"]
    },
    {
        "name": "Snapmail邮箱",
        "description": "虚拟邮箱/一次性邮箱，保护你的真实邮箱",
        "url": "https://www.snapmail.cc",
        "category": "隐私安全工具",
        "tags": ["虚拟邮箱","一次性邮箱","保护真实邮箱","Snapmail"]
    },
    {
        "name": "脆球邮箱",
        "description": "批量注册域名邮箱，临时邮箱，超方便的多账号管理邮箱",
        "url": "https://mail.cuiqiu.com",
        "category": "隐私安全工具",
        "tags": ["批量注册","域名邮箱","临时邮箱","多账号管理","脆球邮箱"]
    },
    {
        "name": "InboxKitten",
        "description": "Inboxkitten.com 电子邮件属于公共领域，几个小时后会自动删除",
        "url": "https://inboxkitten.com",
        "category": "隐私安全工具",
        "tags": ["公共领域","几个小时后","自动删除","InboxKitten"]
    },
    {
        "name": "Tempail",
        "description": "Tempail为你提供临时邮件地址，1小时后过期。",
        "url": "https://tempail.com",
        "category": "隐私安全工具",
        "tags": ["临时邮件地址","1小时后过期","Tempail"]
    },
    {
        "name": "10minutemail",
        "description": "10分钟邮箱，临时邮箱将会在10分钟后失效",
        "url": "https://10minutemail.net",
        "category": "隐私安全工具",
        "tags": ["10分钟邮箱","10分钟后失效","临时邮箱"]
    },
    {
        "name": "Guerrillamail",
        "description": "Guerrilla临时邮箱，有限时间60分钟",
        "url": "https://www.guerrillamail.com",
        "category": "隐私安全工具",
        "tags": ["Guerrilla","临时邮箱","60分钟","有限时间"]
    },
    {
        "name": "Temp-mail.org",
        "description": "提供临时，安全，匿名，免费，一次性的电子邮件地址",
        "url": "https://temp-mail.org",
        "category": "隐私安全工具",
        "tags": ["临时","安全","匿名","免费","一次性","电子邮件地址"]
    },
    {
        "name": "Moakt Email",
        "description": "临时邮箱地址将在您创建一小时后过期",
        "url": "https://moakt.com",
        "category": "隐私安全工具",
        "tags": ["临时邮箱地址","一小时后过期","Moakt Email"]
    },
    {
        "name": "Mailinator",
        "description": "Mailinator提供强大的功能集，以确保您的电子邮件和短信工作流程保持完整和运行",
        "url": "https://www.mailinator.com",
        "category": "隐私安全工具",
        "tags": ["强大功能集","电子邮件","短信工作流程","完整运行","Mailinator"]
    },
    {
        "name": "临时邮",
        "description": "临时邮箱,10分钟邮箱,24小时邮箱",
        "url": "https://linshiyou.com",
        "category": "隐私安全工具",
        "tags": ["临时邮箱","10分钟邮箱","24小时邮箱","临时邮"]
    },
    {
        "name": "Tempmail",
        "description": "仅提供临时邮箱接收邮件的功能，不具有发送邮件功能",
        "url": "https://tempmail.cn",
        "category": "隐私安全工具",
        "tags": ["接收邮件","不具有发送","临时邮箱","Tempmail"]
    },
    {
        "name": "Tempmailo",
        "description": "将收到的电子邮件保留自收到之日起两天。在此期限之后，电子邮件将被永久删除且无法恢复。",
        "url": "https://tempmailo.com",
        "category": "隐私安全工具",
        "tags": ["保留两天","永久删除","无法恢复","Tempmailo"]
    },
    {
        "name": "Internxt",
        "description": "使用免费、私密和安全的临时电子邮件地址生成器匿名发送电子邮件",
        "url": "https://internxt.com",
        "category": "隐私安全工具",
        "tags": ["免费","私密","安全","临时电子邮件","匿名发送","Internxt"]
    },
    {
        "name": "Mail.tm",
        "description": "保护您的个人电子邮件地址免受垃圾邮件、机器人程序、网络钓鱼干扰",
        "url": "https://mail.tm",
        "category": "隐私安全工具",
        "tags": ["保护个人邮箱","垃圾邮件","机器人程序","网络钓鱼","Mail.tm"]
    },
    {
        "name": "TempMail.Plus",
        "description": "一次性的电子邮箱，可供短时间内保留电子邮件",
        "url": "https://tempmail.plus",
        "category": "隐私安全工具",
        "tags": ["一次性","电子邮箱","短时间内保留","TempMail.Plus"]
    },
    {
        "name": "Mohmal",
        "description": "只需单击一个按钮，用户就可以获得一个带有随机名称的临时电子邮件地址",
        "url": "https://www.mohmal.com",
        "category": "隐私安全工具",
        "tags": ["单击按钮","随机名称","临时电子邮件地址","Mohmal"]
    },
    {
        "name": "DisposableMail.com",
        "description": "临时邮件地址，以确保原始电子邮件的安全",
        "url": "https://www.disposablemail.com",
        "category": "隐私安全工具",
        "tags": ["临时邮件地址","原始电子邮件","安全","DisposableMail.com"]
    },
    {
        "name": "Dropmail",
        "description": "电子邮件的有效期是无限期的，直到您刷新/关闭此页面",
        "url": "https://dropmail.me",
        "category": "隐私安全工具",
        "tags": ["无限期","刷新页面","关闭页面","Dropmail"]
    },
    {
        "name": "Mailsac",
        "description": "一次性检测电子邮件收件箱服务，几乎所有邮件都能被接收",
        "url": "https://mailsac.com",
        "category": "隐私安全工具",
        "tags": ["一次性检测","收件箱服务","几乎所有邮件","Mailsac"]
    },
    {
        "name": "10MinutesMail",
        "description": "10分钟邮件提供10分钟的临时，安全，匿名，免费，一次性电子邮件地址",
        "url": "https://10minemail.com",
        "category": "隐私安全工具",
        "tags": ["10分钟邮件","临时","安全","匿名","免费","一次性","10MinutesMail"]
    },
    {
        "name": "FakeMail",
        "description": "临时邮件地址保护您的隐私，提供一次性的临时邮件，保存时间为10分钟至2周",
        "url": "https://www.fakemail.net",
        "category": "隐私安全工具",
        "tags": ["保护隐私","一次性临时邮件","10分钟至2周","FakeMail"]
    },
    {
        "name": "LuxusMail",
        "description": "匿名临时邮件，免费且无需注册即可立即使用。生成无限的临时电子邮件帐户",
        "url": "https://luxusmail.org",
        "category": "隐私安全工具",
        "tags": ["匿名","免费","无需注册","立即使用","无限生成","LuxusMail"]
    },
    {
        "name": "MinuteInBox",
        "description": "10分钟邮件服务，提供10分钟至一个月的临时邮件地址。",
        "url": "https://www.minuteinbox.com",
        "category": "隐私安全工具",
        "tags": ["10分钟邮件服务","10分钟至一个月","临时邮件地址","MinuteInBox"]
    },
    {
        "name": "随用随弃",
        "description": "本站提供临时邮箱、抖音视频转文字等功能，为全网工作者提供最便利的工具服务",
        "url": "https://www.suiyongsuiqi.com",
        "category": "隐私安全工具",
        "tags": ["临时邮箱","抖音视频转文字","工具服务","随用随弃"]
    },
    {
        "name": "MailTemp.net",
        "description": "10分钟的电子信箱，临时邮箱，保护私隐,避免收到垃圾邮件的最佳方案",
        "url": "https://mailtemp.net",
        "category": "隐私安全工具",
        "tags": ["10分钟","电子信箱","保护私隐","避免垃圾邮件","MailTemp.net"]
    },
    {
        "name": "Maildrop",
        "description": "提供虚拟邮件投递地址，而不是您的真实电子邮件地址。",
        "url": "https://maildrop.cc",
        "category": "隐私安全工具",
        "tags": ["虚拟邮件投递地址","真实电子邮件地址","Maildrop"]
    },
    {
        "name": "虚拟身份生成器",
        "description": "可批量生成国外虚拟身份神器",
        "url": "https://www.fakenamegenerator.com",
        "category": "虚拟资料",
        "tags": ["批量生成","国外虚拟身份","神器","身份生成器"]
    },
    {
        "name": "虚拟头像生成器",
        "description": "可批量生成各种虚拟头像的神器",
        "url": "https://generated.photos",
        "category": "虚拟资料",
        "tags": ["批量生成","虚拟头像","神器","头像生成器"]
    },
    {
        "name": "美国虚拟信息生成",
        "description": "世界各国虚拟身份信息、地址、信用卡生成",
        "url": "http://www.haoweichi.com",
        "category": "虚拟资料",
        "tags": ["世界各国","虚拟身份信息","地址","信用卡生成","美国"]
    },
    {
        "name": "Ins用户名生成器",
        "description": "Ins用户名生成器，还可查名字是否被占用",
        "url": "https://instausername.com",
        "category": "虚拟资料",
        "tags": ["Ins用户名","生成器","查名字占用","用户名"]
    },
    {
        "name": "Bright亮数据",
        "description": "全球网络数据一站式平台，将全网数据转化成结构化数据库，商用代理网络和低代码数据采集软件双引擎驱动。",
        "url": "https://www.bright.cn",
        "category": "AI编程工具",
        "tags": ["全球网络数据","一站式平台","结构化数据库","商用代理网络","低代码数据采集","Bright亮数据"]
    },
    {
        "name": "kookeey",
        "description": "提供全球业务级高纯独享代理 ip产品及服务",
        "url": "https://www.kookeey.com",
        "category": "隐私安全工具",
        "tags": ["全球业务级","高纯独享","代理IP","kookeey"]
    },
    {
        "name": "Netnut",
        "description": "提供四种类型IP代理服务：动态住宅，静态住宅，移动代理，数据中心代理，支持HTTP/S, SOCKS5协议",
        "url": "https://www.netnut.cn",
        "category": "隐私安全工具",
        "tags": ["四种类型","动态住宅","静态住宅","移动代理","数据中心代理","HTTP/S","SOCKS5协议","Netnut"]
    },
    {
        "name": "Decodo",
        "description": "使用代理访问世界任何地方的网络数据",
        "url": "https://decodo.cn",
        "category": "隐私安全工具",
        "tags": ["代理访问","世界任何地方","网络数据","Decodo"]
    },
    {
        "name": "Iphtml",
        "description": "世界领先的代理IP提供商",
        "url": "https://iphtml.com",
        "category": "隐私安全工具",
        "tags": ["世界领先","代理IP提供商","Iphtml"]
    },
    {
        "name": "IPIDEA",
        "description": "全球互联网大数据 IP资源服务商",
        "url": "https://www.ipidea.net",
        "category": "隐私安全工具",
        "tags": ["全球互联网","大数据","IP资源服务商","IPIDEA"]
    },
    {
        "name": "SOAX",
        "description": "专门为您提供最干净、定期更新的代理池，超过850万的全球活跃IP。",
        "url": "https://cn.soax.com",
        "category": "隐私安全工具",
        "tags": ["最干净","定期更新","代理池","850万","全球活跃IP","SOAX"]
    },
    {
        "name": "Oxylabs",
        "description": "企业级海外HTTP代理服务商",
        "url": "https://oxylabs.cn",
        "category": "隐私安全工具",
        "tags": ["企业级","海外","HTTP代理服务商","Oxylabs"]
    },
    {
        "name": "IPIPGO",
        "description": "全球代理IP专业服务商",
        "url": "http://www.ipipgo.com",
        "category": "隐私安全工具",
        "tags": ["全球代理IP","专业服务商","IPIPGO"]
    },
    {
        "name": "Luna Proxy",
        "description": "超值住宅代理服务商",
        "url": "https://www.lunaproxy.com",
        "category": "隐私安全工具",
        "tags": ["超值","住宅代理服务商","Luna Proxy"]
    },
    {
        "name": "PIA Proxy",
        "description": "全球1.5亿新鲜商业住宅代理供应商",
        "url": "https://account.piaproxy.com",
        "category": "隐私安全工具",
        "tags": ["全球1.5亿","新鲜商业住宅代理","供应商","PIA Proxy"]
    },
    {
        "name": "天启HTTP",
        "description": "企业级代理IP服务商，HTTP、HTTPS、SOCKS5协议，全方位支持大数据采集。",
        "url": "https://www.tianqiip.com",
        "category": "隐私安全工具",
        "tags": ["企业级","代理IP服务商","HTTP","HTTPS","SOCKS5协议","大数据采集","天启HTTP"]
    },
    {
        "name": "IPRoyal",
        "description": "100%透明的代理服务",
        "url": "https://iproyal.com",
        "category": "隐私安全工具",
        "tags": ["100%透明","代理服务","IPRoyal"]
    },
    {
        "name": "LocalProxies",
        "description": "高级住宅代理",
        "url": "https://www.localproxies.com",
        "category": "隐私安全工具",
        "tags": ["高级住宅代理","LocalProxies"]
    },
    {
        "name": "WonderProxy",
        "description": "为客户提供我们不断增长的住宅网络",
        "url": "https://wonderproxy.com",
        "category": "隐私安全工具",
        "tags": ["不断增长","住宅网络","WonderProxy"]
    },
    {
        "name": "Proxyverse",
        "description": "一个住宅代理网络",
        "url": "https://proxyverse.io",
        "category": "隐私安全工具",
        "tags": ["住宅代理网络","Proxyverse"]
    },
    {
        "name": "ProxySocks5",
        "description": "数据中心代理和VPN",
        "url": "https://proxysocks5.com",
        "category": "隐私安全工具",
        "tags": ["数据中心代理","VPN","ProxySocks5"]
    },
    {
        "name": "LiveProxies",
        "description": "将住宅代理的质量与稳定性和速度相结合",
        "url": "https://liveproxies.io",
        "category": "隐私安全工具",
        "tags": ["住宅代理","质量","稳定性","速度","LiveProxies"]
    },
    {
        "name": "YiLu Proxy",
        "description": "全球住宅代理服务提供商，专供您使用的最干净、定期更新的独立s5代理IP池。",
        "url": "https://www.yilus5.com",
        "category": "隐私安全工具",
        "tags": ["全球住宅代理","最干净","定期更新","独立s5代理IP池","YiLu Proxy"]
    },
    {
        "name": "Rola-IP",
        "description": "全球1.2亿IP代理服务商，动态住宅IP/静态住宅IP/手机5GIP/动态机房IP/IPv6等多种IP类型，支持API一键提取",
        "url": "http://www.rola-ip.co",
        "category": "隐私安全工具",
        "tags": ["全球1.2亿IP","动态住宅IP","静态住宅IP","手机5GIP","动态机房IP","IPv6","API一键提取","Rola-IP"]
    },
    {
        "name": "芝麻代理",
        "description": "企业HTTP代理IP服务提供商，安全、稳定、快速、海量、便捷，1w个免费测试IP",
        "url": "http://www.zmhttp.com",
        "category": "隐私安全工具",
        "tags": ["企业HTTP代理IP","安全","稳定","快速","海量","便捷","1w个免费测试IP","芝麻代理"]
    },
    {
        "name": "IPv4web",
        "description": "静态/动态住宅IP服务商，高性价比，支持测试",
        "url": "https://ipv4web.com",
        "category": "隐私安全工具",
        "tags": ["静态住宅IP","动态住宅IP","高性价比","支持测试","IPv4web"]
    },
    {
        "name": "360Proxy",
        "description": "高性价比的综合代理服务",
        "url": "https://www.360proxy.com",
        "category": "隐私安全工具",
        "tags": ["高性价比","综合代理服务","360Proxy"]
    },
    {
        "name": "Proxy-Cheap",
        "description": "低价住宅代理，静态IP2.99$起。",
        "url": "https://www.proxy-cheap.com",
        "category": "隐私安全工具",
        "tags": ["低价住宅代理","静态IP","2.99$起","Proxy-Cheap"]
    },
    {
        "name": "ProxySeller",
        "description": "相当便宜的IP代理，购买私人Socks5和HTTPs代理 社交网络、用于SEO的搜刮器、网络游戏、互联网冲浪和许多其他用途。",
        "url": "https://proxy-seller.com",
        "category": "隐私安全工具",
        "tags": ["便宜IP代理","私人Socks5","HTTPs代理","社交网络","SEO搜刮器","网络游戏","互联网冲浪","ProxySeller"]
    },
    {
        "name": "SmartProxy",
        "description": "Smartproxy 专业海外http代理商，千万优质纯净住宅IP资源，全球城市覆盖，高匿稳定提供100%原生住宅IP，支持社交账户、电商平台、网络数据收集等服务。",
        "url": "https://www.smartproxy.cn",
        "category": "隐私安全工具",
        "tags": ["专业海外http代理商","千万优质纯净住宅IP","全球城市覆盖","高匿稳定","100%原生住宅IP","社交账户","电商平台","网络数据收集","SmartProxy"]
    },
    {
        "name": "Proxy302",
        "description": "低价优质住宅服务商",
        "url": "https://www.proxy302.com",
        "category": "隐私安全工具",
        "tags": ["低价优质","住宅服务商","Proxy302"]
    },
    {
        "name": "Miya IP",
        "description": "为您提供最专业的数据采集解决方案",
        "url": "https://miyaip.com",
        "category": "隐私安全工具",
        "tags": ["最专业","数据采集解决方案","Miya IP"]
    },
    {
        "name": "HeliusCloud",
        "description": "全球IP代理服务提供商，整合全球190多个国家和地区的住宅IP资源。",
        "url": "https://heliuscloud.net",
        "category": "隐私安全工具",
        "tags": ["全球IP代理服务提供商","190多个国家","住宅IP资源","HeliusCloud"]
    },
    {
        "name": "922S5代理",
        "description": "具有99%纯度的大型住宅IP代理",
        "url": "https://www.922proxy.com",
        "category": "隐私安全工具",
        "tags": ["99%纯度","大型住宅IP代理","922S5代理"]
    },
    {
        "name": "品赞",
        "description": "全球优质IP供应商 1000万+海量IP池",
        "url": "http://hw.ipzan.com",
        "category": "隐私安全工具",
        "tags": ["全球优质IP供应商","1000万+","海量IP池","品赞"]
    },
    {
        "name": "ABCProxy",
        "description": "全球顶级住宅IP代理，最佳代理解决方案",
        "url": "https://www.abcproxy.com",
        "category": "隐私安全工具",
        "tags": ["全球顶级","住宅IP代理","最佳代理解决方案","ABCProxy"]
    },
    {
        "name": "IP2World",
        "description": "千万纯净&匿名优质住宅代理IP",
        "url": "http://www.ip2world.com",
        "category": "隐私安全工具",
        "tags": ["千万纯净","匿名优质","住宅代理IP","IP2World"]
    },
    {
        "name": "Roxlabs",
        "description": "优质动态住宅资源，汇集全球超过200个国家的住宅代理IP，城市级定位代理，让数据采集更简单",
        "url": "https://www.roxlabs.cn",
        "category": "隐私安全工具",
        "tags": ["优质动态住宅资源","200多个国家","住宅代理IP","城市级定位代理","数据采集","Roxlabs"]
    },
    {
        "name": "MetaProxies",
        "description": "稳定的9200万+ P2P网络",
        "url": "https://metaproxies.net",
        "category": "隐私安全工具",
        "tags": ["稳定","9200万+","P2P网络","MetaProxies"]
    },
    {
        "name": "Storm Proxies",
        "description": "全球大数据IP资源服务商，涵盖220+地区的全球住宅代理资源",
        "url": "https://www.stormproxies.cn",
        "category": "隐私安全工具",
        "tags": ["全球大数据IP资源服务商","220+地区","全球住宅代理资源","Storm Proxies"]
    },
    {
        "name": "HTTPMars",
        "description": "拥有全球195+个国家的IP资源，每天更新数千万个IP资源",
        "url": "https://ipmars.com",
        "category": "隐私安全工具",
        "tags": ["全球195+个国家","IP资源","每天更新","数千万个IP资源","HTTPMars"]
    },
    {
        "name": "ActProxy",
        "description": "我们提供HTTP(S)和SOCKS代理与3天退款保证。 所有代理包括多城市、多子网、免费设置、用户/通道和IP认证。",
        "url": "https://actproxy.com",
        "category": "隐私安全工具",
        "tags": ["HTTP(S)","SOCKS代理","3天退款保证","多城市","多子网","免费设置","用户/通道","IP认证","ActProxy"]
    },
    {
        "name": "Dove Proxy",
        "description": "优质国际IP代理服务商",
        "url": "https://www.doveip.com",
        "category": "隐私安全工具",
        "tags": ["优质国际IP代理服务商","Dove Proxy"]
    },
    {
        "name": "PYPROXY",
        "description": "经济有效的动态住宅和静态住宅代理网络 囊括9000万遍及全球的IP地址",
        "url": "https://www.pyproxy.com",
        "category": "隐私安全工具",
        "tags": ["经济有效","动态住宅","静态住宅代理网络","9000万","遍及全球","IP地址","PYPROXY"]
    },
    {
        "name": "IPCola",
        "description": "全球 IP 资源服务商和一站式跨境解决方案",
        "url": "https://ipcola.com",
        "category": "隐私安全工具",
        "tags": ["全球IP资源服务商","一站式跨境解决方案","IPCola"]
    },
    {
        "name": "NSOCKS",
        "description": "socks5代理服务商",
        "url": "https://nsocks.net",
        "category": "隐私安全工具",
        "tags": ["socks5代理服务商","NSOCKS"]
    },
    {
        "name": "ProxyGuys",
        "description": "企业代理网络，5G移动和住宅代理。",
        "url": "https://proxyguys.com",
        "category": "隐私安全工具",
        "tags": ["企业代理网络","5G移动","住宅代理","ProxyGuys"]
    },
    {
        "name": "Webshare",
        "description": "快速实惠的代理服务器。购买匿名和私人代理服务器，支持HTTP和SOCKS5代理、IP鉴权或密码鉴权。",
        "url": "https://www.webshare.io",
        "category": "隐私安全工具",
        "tags": ["快速实惠","代理服务器","匿名","私人代理服务器","HTTP","SOCKS5代理","IP鉴权","密码鉴权","Webshare"]
    },
    {
        "name": "ProxyPanel",
        "description": "美国最大的4G移动代理提供商",
        "url": "https://www.proxypanel.io",
        "category": "隐私安全工具",
        "tags": ["美国最大","4G移动代理提供商","ProxyPanel"]
    },
    {
        "name": "蜘蛛IP",
        "description": "banner 为大数据产业， 跨境电商产业提供优质可靠的代理网络服务，9500w+住宅ip池时刻为您准备。",
        "url": "https://www.zhizhuip.com",
        "category": "隐私安全工具",
        "tags": ["大数据产业","跨境电商产业","优质可靠","代理网络服务","9500w+住宅ip池","蜘蛛IP"]
    },
    {
        "name": "SquidProxies",
        "description": "一家海外的私有和共享代理提供商，以一流的客户服务和市场上最具竞争力的价格为特色，提供具有1000 + Mbps专用速度的全球服务器以及无限带宽，其主要分布地区是在美国。",
        "url": "https://www.squidproxies.com",
        "category": "隐私安全工具",
        "tags": ["海外","私有和共享代理提供商","一流客户服务","最具竞争力价格","1000+Mbps专用速度","全球服务器","无限带宽","美国","SquidProxies"]
    },
    {
        "name": "Proxs",
        "description": "提供私人HTTP/SOCKS代理",
        "url": "https://proxs.ru",
        "category": "隐私安全工具",
        "tags": ["私人HTTP/SOCKS代理","Proxs"]
    },
    {
        "name": "Nexus",
        "description": "一个强大的Maven仓库管理器,它极大地简化了自己内部仓库的维护和外部仓库的访问。利用Nexus你可以只在一个地方就能够完全控制访问和部署在你所维护仓库中的每个Artifact。",
        "url": "https://nexusnet.io",
        "category": "隐私安全工具",
        "tags": ["Maven仓库管理器","内部仓库维护","外部仓库访问","完全控制","部署","Artifact","Nexus"]
    },
    {
        "name": "Proxy6",
        "description": "俄罗斯人创办的一家出售住宅IP的网站，业内超低价格迅速吸引了不少客户。",
        "url": "https://proxy6.net",
        "category": "隐私安全工具",
        "tags": ["俄罗斯","出售住宅IP","超低价格","Proxy6"]
    },
    {
        "name": "极风云",
        "description": "全球海量高匿IP，从任何网站获取可靠的结构化数据",
        "url": "http://www.jifengdaili.com",
        "category": "隐私安全工具",
        "tags": ["全球海量","高匿IP","任何网站","可靠","结构化数据","极风云"]
    },
    {
        "name": "AstroProxy",
        "description": "一家欧洲的海外代理提供商，提供对包括常驻代理、移动 IP 和常规互联网服务提供者用户在内的网络的访问。",
        "url": "https://astroproxy.com",
        "category": "隐私安全工具",
        "tags": ["欧洲","海外代理提供商","常驻代理","移动IP","常规互联网服务提供者","AstroProxy"]
    },
    {
        "name": "Litport",
        "description": "提供住宅、移动和数据中心代理，顶级品质。",
        "url": "https://litport.net",
        "category": "隐私安全工具",
        "tags": ["住宅","移动","数据中心代理","顶级品质","Litport"]
    },
    {
        "name": "PacketStream",
        "description": "一家海外的代理网络提供商，于2018年成立于美国，目前仅提供住宅代理，其特点为随用随付。",
        "url": "https://packetstream.io",
        "category": "隐私安全工具",
        "tags": ["海外代理网络提供商","2018年","美国","住宅代理","随用随付","PacketStream"]
    },
    {
        "name": "Infatica",
        "description": "一家很年轻的海外代理提供商，利用P2P网络利用空闲时间连接全球数百万个小工具",
        "url": "https://dashboard.infatica.io",
        "category": "隐私安全工具",
        "tags": ["年轻","海外代理提供商","P2P网络","空闲时间","全球数百万个","小工具","Infatica"]
    },
    {
        "name": "ProxyLine",
        "description": "提供代理服务器服务器",
        "url": "https://proxyline.net",
        "category": "隐私安全工具",
        "tags": ["代理服务器服务器","ProxyLine"]
    },
    {
        "name": "ScraperAPI",
        "description": "提供数据抓取，网页抓取的应用。 用于商业智能、价格分析、评论提取和任何其他业务需求。",
        "url": "https://www.scraperapi.com",
        "category": "隐私安全工具",
        "tags": ["数据抓取","网页抓取","商业智能","价格分析","评论提取","业务需求","ScraperAPI"]
    },
    {
        "name": "HydraProxy",
        "description": "一家住宅和移动代理提供商。它们的移动代理专注于美国市场,且支持HTTPS和SOCKS5协议。",
        "url": "https://hydraproxy.com",
        "category": "隐私安全工具",
        "tags": ["住宅和移动代理提供商","美国市场","HTTPS","SOCKS5协议","HydraProxy"]
    },
    {
        "name": "The Social Proxy",
        "description": "高质量的5G和4G移动专用代理",
        "url": "https://thesocialproxy.com",
        "category": "隐私安全工具",
        "tags": ["高质量","5G","4G移动专用代理","The Social Proxy"]
    },
    {
        "name": "Crawlbase",
        "description": "不仅通过API提供智能代理服务,它还是为寻找数据的开发人员提供的综合平台。",
        "url": "https://zh-cn.crawlbase.com",
        "category": "AI编程工具",
        "tags": ["API","智能代理服务","开发人员","综合平台","Crawlbase"]
    },
    {
        "name": "BestProxy",
        "description": "高质量代理SOCKS5和vpn的领先提供商",
        "url": "https://bestproxy.net",
        "category": "隐私安全工具",
        "tags": ["高质量代理","SOCKS5","vpn","领先提供商","BestProxy"]
    },
    {
        "name": "MyPrivateProxy",
        "description": "一家老牌的海外代理提供商，目前有各种通过访问选项的数据中心代理，存在共享、私人与专用代理可供选择.",
        "url": "https://www.myprivateproxy.net",
        "category": "隐私安全工具",
        "tags": ["老牌","海外代理提供商","数据中心代理","共享","私人","专用代理","MyPrivateProxy"]
    },
    {
        "name": "PublicProxy",
        "description": "最高质量的高级代理，世界领先的IP代理提供商。",
        "url": "https://www.publicproxyservers.com",
        "category": "隐私安全工具",
        "tags": ["最高质量","高级代理","世界领先","IP代理提供商","PublicProxy"]
    },
    {
        "name": "Proxy4Free",
        "description": "全球领先的IP代理提供商，在全球190多个国家和城市级地区拥有9000万+ ip",
        "url": "https://www.proxy4free.com",
        "category": "隐私安全工具",
        "tags": ["全球领先","IP代理提供商","190多个国家","城市级地区","9000万+ip","Proxy4Free"]
    },
    {
        "name": "ProxySale",
        "description": "最好的私人代理提供商",
        "url": "https://proxy-sale.com",
        "category": "隐私安全工具",
        "tags": ["最好","私人代理提供商","ProxySale"]
    },
    {
        "name": "GeoSurf",
        "description": "在每个国家和全球1,700 多个城市的370万个 IP 地址代理位置池",
        "url": "https://www.geosurf.com",
        "category": "隐私安全工具",
        "tags": ["每个国家","1700多个城市","370万个IP地址","代理位置池","GeoSurf"]
    },
    {
        "name": "IPBurger",
        "description": "最高质量的高级代理服务公司",
        "url": "https://www.ipburger.com",
        "category": "隐私安全工具",
        "tags": ["最高质量","高级代理服务公司","IPBurger"]
    },
    {
        "name": "IPFoxy纯净代理",
        "description": "IPFoxy专注于为跨境玩家提供全球独享纯净IP代理，为您出海业务提供高效助力",
        "url": "https://referral.ipfoxy.com",
        "category": "隐私安全工具",
        "tags": ["跨境玩家","全球独享纯净IP代理","出海业务","高效助力","IPFoxy纯净代理"]
    },
    {
        "name": "Sky Ip",
        "description": "致力于为全球用户提供优质的大数据代理服务,促进信息创造价值。",
        "url": "https://sky-ip.net",
        "category": "隐私安全工具",
        "tags": ["全球用户","优质","大数据代理服务","信息创造价值","Sky Ip"]
    },
    {
        "name": "Asocks",
        "description": "面向企业和个人的无线快速服务代理器",
        "url": "https://asocks.com",
        "category": "隐私安全工具",
        "tags": ["企业","个人","无线快速服务代理器","Asocks"]
    },
    {
        "name": "ProxyEmpire",
        "description": "一家提供优质代理的代理服务公司。 ProxyEmpire 拥有庞大的代理网络,并提供移动和住宅 IP。",
        "url": "https://proxyempire.io",
        "category": "隐私安全工具",
        "tags": ["优质代理","代理服务公司","庞大代理网络","移动IP","住宅IP","ProxyEmpire"]
    },
    {
        "name": "Shifter",
        "description": "最早的住宅代理提供商之一，成立于 2012 年，是全球领先的代理网络之一，被包括财富 500 强公司在内的 25.000 多家客户使用。",
        "url": "https://shifter.io",
        "category": "隐私安全工具",
        "tags": ["最早","住宅代理提供商","2012年","全球领先","财富500强公司","25000多家客户","Shifter"]
    },
    {
        "name": "Froxy",
        "description": "完全匿名,可靠的全球代理网络,拥有超过800万个白色IP地址,在一定时期内自动旋转IP地址。",
        "url": "https://froxy.com",
        "category": "隐私安全工具",
        "tags": ["完全匿名","可靠","全球代理网络","800万个","白色IP地址","自动旋转IP地址","Froxy"]
    },
    {
        "name": "Airproxy",
        "description": "INSTAGRAM、FACEBOOK ADS、SCRAPING的专用移动代理",
        "url": "https://airproxy.io",
        "category": "隐私安全工具",
        "tags": ["INSTAGRAM","FACEBOOK ADS","SCRAPING","专用移动代理","Airproxy"]
    },
    {
        "name": "ProxyLte",
        "description": "高质量的美国移动代理服务公司",
        "url": "https://proxylte.com",
        "category": "隐私安全工具",
        "tags": ["高质量","美国移动代理服务公司","ProxyLte"]
    },
    {
        "name": "Rayobyte",
        "description": "一家数据中心代理巨头，属于Sprious集团，提供网络爬取、数据智能和托管服务。除主要产品-数据中心代理外,还提供住宅代理、ISP代理、移动代理。除代理外,还具有谷歌和亚马逊的数据分析功能Web爬取API，IP池大小约30万。",
        "url": "https://rayobyte.com",
        "category": "隐私安全工具",
        "tags": ["数据中心代理巨头","Sprious集团","网络爬取","数据智能","托管服务","住宅代理","ISP代理","移动代理","谷歌","亚马逊","数据分析功能","Web爬取API","30万IP池","Rayobyte"]
    },
    {
        "name": "HighProxies",
        "description": "一家海外HTTP代理提供商，提供快速愉快的全天候支持、快速代理、无线带宽以及1Gbps的服务器。",
        "url": "https://highproxies.com",
        "category": "隐私安全工具",
        "tags": ["海外HTTP代理提供商","快速愉快","全天候支持","快速代理","无线带宽","1Gbps服务器","HighProxies"]
    },
    {
        "name": "InstantProxies",
        "description": "海外私人（住宅）代理提供商，提供私有HTTP代理，存在及时设置选项，让用户能够立即开始使用。",
        "url": "https://instantproxies.com",
        "category": "隐私安全工具",
        "tags": ["海外私人","住宅代理提供商","私有HTTP代理","及时设置选项","立即开始使用","InstantProxies"]
    },
    {
        "name": "SSLPrivateProxy",
        "description": "高级私人代理提供商，于2012年进入市场，自成立以来，已发展成为该行业的主要参与者之一。",
        "url": "https://www.sslprivateproxy.com",
        "category": "隐私安全工具",
        "tags": ["高级私人代理提供商","2012年","市场","主要参与者","SSLPrivateProxy"]
    },
    {
        "name": "Geonode",
        "description": "一个地理空间内容管理系统,用于管理地理空间数据的发布。它将成熟且稳定的开放源码软件项目组合在一个一致且易用的界面上,允许非专业用户共享数据并创建交互式地图。 ",
        "url": "https://geonode.com",
        "category": "隐私安全工具",
        "tags": ["地理空间内容管理系统","地理空间数据发布","开放源码软件项目","一致且易用界面","非专业用户","共享数据","交互式地图","Geonode"]
    },
    {
        "name": "BuyProxies",
        "description": "一家海外的HTTP代理网络提供商，总部位于欧洲，支持HTTP与HTTPS两种协议，覆盖地区大部分为欧美，目前只提供数据中心代理，有24小时的退款保证。",
        "url": "https://buyproxies.org",
        "category": "隐私安全工具",
        "tags": ["海外HTTP代理网络提供商","欧洲总部","HTTP","HTTPS协议","欧美覆盖","数据中心代理","24小时退款保证","BuyProxies"]
    },
    {
        "name": "IPLease",
        "description": "主要是提供私人代理,还提供共享代理。iPlease.io不支持免费试用,但支持3天退款。还提供API和良好的文档,以帮助自动化程序员学习如何使用代理来开发脚本和机器人。",
        "url": "https://www.iplease.io",
        "category": "AI编程工具",
        "tags": ["私人代理","共享代理","不支持免费试用","3天退款","API","良好文档","自动化程序员","脚本","机器人","IPLease"]
    },
    {
        "name": "YourPrivateProxy",
        "description": "供住宅和数据中心代理服务。它不仅提供HTTP代理,还提供SOCKS5代理。",
        "url": "https://www.yourprivateproxy.com",
        "category": "隐私安全工具",
        "tags": ["住宅","数据中心代理服务","HTTP代理","SOCKS5代理","YourPrivateProxy"]
    },
    {
        "name": "Dichvusocks",
        "description": "提供Socks5服务，匿名代理",
        "url": "https://dichvusocks.us",
        "category": "隐私安全工具",
        "tags": ["Socks5服务","匿名代理","Dichvusocks"]
    },
    {
        "name": "NewIPNow",
        "description": "拥有惊人的速度，精英级的匿名性以及无限的可拓展性，目前拥有9900位用户与1700个服务器，提供HTTP协议代理。",
        "url": "https://newipnow.com",
        "category": "隐私安全工具",
        "tags": ["惊人速度","精英级匿名性","无限可拓展性","9900位用户","1700个服务器","HTTP协议代理","NewIPNow"]
    },
    {
        "name": "163邮箱",
        "description": "中文邮箱第一品牌",
        "url": "https://mail.163.com",
        "category": "邮箱网站",
        "tags": ["中文邮箱","第一品牌","163邮箱"]
    },
    {
        "name": "126邮箱",
        "description": "网易旗下的免费邮箱",
        "url": "https://mail.126.com",
        "category": "邮箱网站",
        "tags": ["网易","免费邮箱","126邮箱"]
    },
    {
        "name": "QQ邮箱",
        "description": "腾讯旗下的电子邮箱",
        "url": "https://mail.qq.com",
        "category": "邮箱网站",
        "tags": ["腾讯","电子邮箱","QQ邮箱"]
    },
    {
        "name": "Gmail",
        "description": "google推出的一款直观、高效、实用的电子邮件应用",
        "url": "https://mail.google.com",
        "category": "邮箱网站",
        "tags": ["google","直观","高效","实用","电子邮件应用","Gmail"]
    },
    {
        "name": "Hotmail",
        "description": "微软旗下的一款免费邮箱服务",
        "url": "https://login.live.com",
        "category": "邮箱网站",
        "tags": ["微软","免费邮箱服务","Hotmail"]
    },
    {
        "name": "新浪邮箱",
        "description": "新浪推出的一款邮箱服务",
        "url": "https://mail.sina.com.cn",
        "category": "邮箱网站",
        "tags": ["新浪","邮箱服务","新浪邮箱"]
    },
    {
        "name": "139邮箱",
        "description": "中国移动提供的电子邮件业务",
        "url": "https://mail.10086.cn",
        "category": "邮箱网站",
        "tags": ["中国移动","电子邮件业务","139邮箱"]
    },
    {
        "name": "阿里邮箱",
        "description": "阿里云旗下的一款免费邮箱服务",
        "url": "https://mail.aliyun.com",
        "category": "邮箱网站",
        "tags": ["阿里云","免费邮箱服务","阿里邮箱"]
    },
    {
        "name": "BOSS直聘",
        "description": "互联网招聘神器！",
        "url": "https://www.zhipin.com",
        "category": "招聘网站",
        "tags": ["互联网招聘","神器","BOSS直聘"]
    },
    {
        "name": "猎聘网",
        "description": "知名中高端人才招聘网站，汇聚行业名企",
        "url": "https://www.liepin.com",
        "category": "招聘网站",
        "tags": ["知名","中高端人才","招聘网站","行业名企","猎聘网"]
    },
    {
        "name": "智联招聘",
        "description": "一个大型招聘平台和一站式专业人力资源服务平台",
        "url": "https://www.zhaopin.com",
        "category": "招聘网站",
        "tags": ["大型招聘平台","一站式","专业人力资源服务","智联招聘"]
    },
    {
        "name": "前程无忧",
        "description": "中国具有广泛影响力的人力资源服务供应商",
        "url": "https://www.51job.com",
        "category": "招聘网站",
        "tags": ["中国","广泛影响力","人力资源服务供应商","前程无忧"]
    },
    {
        "name": "拉勾网",
        "description": "权威的互联网行业招聘平台",
        "url": "https://www.lagou.com",
        "category": "招聘网站",
        "tags": ["权威","互联网行业","招聘平台","拉勾网"]
    },
    {
        "name": "乔布简历",
        "description": "一款专业简历制作工具",
        "url": "https://cv.qiaobutang.com",
        "category": "招聘网站",
        "tags": ["专业","简历制作工具","乔布简历"]
    },
    {
        "name": "斗米兼职",
        "description": "免费提供大量最新兼职招聘信息",
        "url": "https://doumi.com",
        "category": "招聘网站",
        "tags": ["免费","大量","最新","兼职招聘信息","斗米兼职"]
    },
    {
        "name": "五百丁",
        "description": "好用的简历制作工具",
        "url": "https://www.500d.me",
        "category": "招聘网站",
        "tags": ["好用","简历制作工具","五百丁"]
    },
    {
        "name": "实习僧",
        "description": "国内领先的实习生招聘网站",
        "url": "https://www.shixiseng.com",
        "category": "招聘网站",
        "tags": ["国内领先","实习生","招聘网站","实习僧"]
    },
    {
        "name": "中华英才网",
        "description": "国内最早、最专业的人才招聘网站之一",
        "url": "https://www.chinahr.com",
        "category": "招聘网站",
        "tags": ["国内最早","最专业","人才招聘网站","中华英才网"]
    },
    {
        "name": "腾讯网",
        "description": "腾讯QQ网首页",
        "url": "https://www.qq.com",
        "category": "资讯与媒体",
        "tags": ["腾讯","QQ网首页","新闻资讯","腾讯网"]
    },
    {
        "name": "凤凰网",
        "description": "中国领先的综合门户网站",
        "url": "https://www.ifeng.com",
        "category": "资讯与媒体",
        "tags": ["中国领先","综合门户网站","凤凰网"]
    },
    {
        "name": "新浪网",
        "description": "新浪门户首页",
        "url": "https://www.sina.com.cn",
        "category": "资讯与媒体",
        "tags": ["新浪","门户首页","新浪网"]
    },
    {
        "name": "搜狐",
        "description": "中国最大的网站门户之一",
        "url": "https://www.sohu.com",
        "category": "资讯与媒体",
        "tags": ["中国最大","网站门户","搜狐"]
    },
    {
        "name": "网易",
        "description": "中国领先的互联网技术公司",
        "url": "https://www.163.com",
        "category": "资讯与媒体",
        "tags": ["中国领先","互联网技术公司","网易"]
    },
    {
        "name": "环球网",
        "description": "中国领先的国际资讯门户",
        "url": "https://www.huanqiu.com",
        "category": "资讯与媒体",
        "tags": ["中国领先","国际资讯门户","环球网"]
    },
    {
        "name": "观察者",
        "description": "中国关怀 全球视野",
        "url": "https://www.guancha.cn",
        "category": "资讯与媒体",
        "tags": ["中国关怀","全球视野","观察者"]
    },
    {
        "name": "爱范儿",
        "description": "让未来触手可及",
        "url": "https://www.ifanr.com",
        "category": "资讯与媒体",
        "tags": ["让未来触手可及","爱范儿"]
    },
    {
        "name": "雷锋网",
        "description": "读懂智能&未来",
        "url": "https://www.leiphone.com",
        "category": "资讯与媒体",
        "tags": ["读懂智能","未来","雷锋网"]
    },
    {
        "name": "极客公园",
        "description": "国内较大的创新者社区",
        "url": "https://www.geekpark.net",
        "category": "资讯与媒体",
        "tags": ["国内较大","创新者社区","极客公园"]
    },
    {
        "name": "钛媒体",
        "description": "引领未来商业与生活新知",
        "url": "https://www.tmtpost.com",
        "category": "资讯与媒体",
        "tags": ["引领未来","商业","生活新知","钛媒体"]
    },
    {
        "name": "好奇心日报",
        "description": "好奇驱动你的世界",
        "url": "http://www.qdaily.com",
        "category": "资讯与媒体",
        "tags": ["好奇驱动","你的世界","好奇心日报"]
    },
    {
        "name": "界面",
        "description": "只服务于独立思考的人群",
        "url": "https://www.jiemian.com",
        "category": "资讯与媒体",
        "tags": ["只服务于","独立思考","人群","界面"]
    },
    {
        "name": "ZAKER",
        "description": "传递价值资讯",
        "url": "https://www.myzaker.com",
        "category": "资讯与媒体",
        "tags": ["传递价值资讯","ZAKER"]
    },
    {
        "name": "知乎日报",
        "description": "每天 3 次，每次 7 分钟",
        "url": "https://daily.zhihu.com",
        "category": "资讯与媒体",
        "tags": ["每天3次","每次7分钟","知乎日报"]
    },
    {
        "name": "开源中国",
        "description": "国内最大的开源技术社区",
        "url": "https://www.oschina.net",
        "category": "资讯与媒体",
        "tags": ["国内最大","开源技术社区","开源中国"]
    },
    {
        "name": "简书",
        "description": "创作你的创作",
        "url": "https://www.jianshu.com",
        "category": "资讯与媒体",
        "tags": ["创作你的创作","简书"]
    },
    {
        "name": "少数派",
        "description": "高效工作，品质生活",
        "url": "https://sspai.com",
        "category": "资讯与媒体",
        "tags": ["高效工作","品质生活","少数派"]
    },
    {
        "name": "煎蛋",
        "description": "地球上没有新鲜事",
        "url": "https://jandan.net",
        "category": "资讯与媒体",
        "tags": ["地球上没有新鲜事","煎蛋"]
    },
    {
        "name": "果壳",
        "description": "科技有意思",
        "url": "https://www.guokr.com",
        "category": "资讯与媒体",
        "tags": ["科技有意思","果壳"]
    },
    {
        "name": "cnbeta",
        "description": "中文业界资讯站",
        "url": "https://www.cnbeta.com",
        "category": "资讯与媒体",
        "tags": ["中文业界资讯站","cnbeta"]
    },
    {
        "name": "PingWest",
        "description": "有品好玩的科技，一切与你有关",
        "url": "https://www.pingwest.com",
        "category": "资讯与媒体",
        "tags": ["有品好玩","科技","一切与你有关","PingWest"]
    },
    {
        "name": "投资界",
        "description": "创业与投资第一门户",
        "url": "https://www.pedaily.cn",
        "category": "资讯与媒体",
        "tags": ["创业与投资","第一门户","投资界"]
    },
    {
        "name": "创业邦",
        "description": "帮助创业者成功",
        "url": "https://www.cyzone.cn",
        "category": "资讯与媒体",
        "tags": ["帮助创业者成功","创业邦"]
    },
    {
        "name": "i黑马",
        "description": "帮助创业者获得灵感的文章分享网站",
        "url": "https://www.iheima.com",
        "category": "AI写作工具",
        "tags": ["帮助创业者","获得灵感","文章分享网站","i黑马"]
    },
    {
        "name": "快科技",
        "description": "最新DIY硬件信息",
        "url": "https://www.mydrivers.com",
        "category": "资讯与媒体",
        "tags": ["最新","DIY硬件信息","快科技"]
    },
    {
        "name": "懒科技",
        "description": "带你玩科技",
        "url": "https://www.dorastory.com",
        "category": "资讯与媒体",
        "tags": ["带你玩科技","懒科技"]
    },
    {
        "name": "腾讯视频",
        "description": "腾讯旗下的视频播放产品",
        "url": "https://v.qq.com",
        "category": "视频音乐",
        "tags": ["腾讯","视频播放产品","腾讯视频"]
    },
    {
        "name": "芒果TV",
        "description": "湖南广播电视台旗下唯一互联网视频平台",
        "url": "https://www.mgtv.com",
        "category": "视频音乐",
        "tags": ["湖南广播电视台","唯一互联网视频平台","芒果TV"]
    },
    {
        "name": "乐视视频",
        "description": "乐视视频旗下视频平台",
        "url": "https://www.le.com",
        "category": "视频音乐",
        "tags": ["乐视视频","视频平台","乐视视频"]
    },
    {
        "name": "搜狐视频",
        "description": "搜狐旗下专业的综合视频网站",
        "url": "https://tv.sohu.com",
        "category": "视频音乐",
        "tags": ["搜狐","专业","综合视频网站","搜狐视频"]
    },
    {
        "name": "CCTV",
        "description": "中央电视台官方视频网站",
        "url": "https://tv.cctv.com",
        "category": "视频音乐",
        "tags": ["中央电视台","官方视频网站","CCTV"]
    },
    {
        "name": "AcFun",
        "description": "弹幕视频网站，中国二次元文化开创者",
        "url": "https://www.acfun.cn",
        "category": "视频音乐",
        "tags": ["弹幕视频网站","中国二次元文化开创者","AcFun"]
    },
    {
        "name": "PPTV视频",
        "description": "海量影视剧",
        "url": "https://www.pptv.com",
        "category": "AI办公工具",
        "tags": ["海量影视剧","PPTV视频"]
    },
    {
        "name": "土豆网",
        "description": "阿里巴巴文化娱乐集团旗下短视频平台",
        "url": "https://www.tudou.com",
        "category": "视频音乐",
        "tags": ["阿里巴巴文化娱乐集团","短视频平台","土豆网"]
    },
    {
        "name": "电影天堂",
        "description": "免费电影下载",
        "url": "https://www.dytt8.net",
        "category": "视频音乐",
        "tags": ["免费电影下载","电影天堂"]
    },
    {
        "name": "虎牙直播",
        "description": "中国领先的互动直播平台",
        "url": "https://www.huya.com",
        "category": "视频音乐",
        "tags": ["中国领先","互动直播平台","虎牙直播"]
    },
    {
        "name": "斗鱼直播",
        "description": "每个人的直播平台",
        "url": "https://www.douyu.com",
        "category": "视频音乐",
        "tags": ["每个人的直播平台","斗鱼直播"]
    },
    {
        "name": "企鹅电竞",
        "description": "腾讯游戏官方直播平台",
        "url": "https://egame.qq.com",
        "category": "视频音乐",
        "tags": ["腾讯游戏","官方直播平台","企鹅电竞"]
    },
    {
        "name": "企鹅直播",
        "description": "体育直播平台",
        "url": "https://live.qq.com",
        "category": "视频音乐",
        "tags": ["体育直播平台","企鹅直播"]
    },
    {
        "name": "YY直播",
        "description": "全球领先的互动直播平台",
        "url": "https://www.yy.com",
        "category": "视频音乐",
        "tags": ["全球领先","互动直播平台","YY直播"]
    },
    {
        "name": "花椒直播",
        "description": "高颜值的直播App",
        "url": "https://www.huajiao.com",
        "category": "视频音乐",
        "tags": ["高颜值","直播App","花椒直播"]
    },
    {
        "name": "龙珠直播",
        "description": "游戏直播平台",
        "url": "https://www.longzhu.com",
        "category": "视频音乐",
        "tags": ["游戏直播平台","龙珠直播"]
    },
    {
        "name": "战旗直播",
        "description": "天生爱玩,游戏至上",
        "url": "https://www.zhanqi.tv",
        "category": "视频音乐",
        "tags": ["天生爱玩","游戏至上","战旗直播"]
    },
    {
        "name": "酷狗音乐",
        "description": "中国使用人数较多的音乐播放器之一",
        "url": "https://www.kugou.com",
        "category": "AI音频工具",
        "tags": ["中国使用人数较多","音乐播放器","酷狗音乐"]
    },
    {
        "name": "豆瓣FM",
        "description": "豆瓣开发的个性化的音乐收听工具",
        "url": "https://douban.fm",
        "category": "AI音频工具",
        "tags": ["豆瓣","个性化","音乐收听工具","豆瓣FM"]
    },
    {
        "name": "喜马拉雅",
        "description": "国内音频分享平台，随时随地，听我想听，说我想说",
        "url": "https://www.ximalaya.com",
        "category": "AI音频工具",
        "tags": ["国内音频分享平台","随时随地","听我想听","说我想说","喜马拉雅"]
    },
    {
        "name": "酷我音乐",
        "description": "无损音乐正版在线试听网站",
        "url": "https://www.kuwo.cn",
        "category": "AI音频工具",
        "tags": ["无损音乐","正版","在线试听网站","酷我音乐"]
    },
    {
        "name": "蜻蜓FM",
        "description": "国内首家FM网络音频电台应用",
        "url": "https://www.qingting.fm",
        "category": "AI音频工具",
        "tags": ["国内首家","FM网络音频电台应用","蜻蜓FM"]
    },
    {
        "name": "荔枝FM",
        "description": "一款因为热爱而生的音乐产品",
        "url": "https://www.lizhi.fm",
        "category": "AI音频工具",
        "tags": ["因为热爱而生","音乐产品","荔枝FM"]
    },
    {
        "name": "猫耳FM",
        "description": "第一家弹幕音图站,同时也是中国声优基地",
        "url": "https://www.missevan.com",
        "category": "视频音乐",
        "tags": ["第一家弹幕音图站","中国声优基地","猫耳FM"]
    },
    {
        "name": "咪咕音乐",
        "description": "中国移动官方音乐门户",
        "url": "https://music.migu.cn",
        "category": "AI音频工具",
        "tags": ["中国移动","官方音乐门户","咪咕音乐"]
    },
    {
        "name": "凤凰军事",
        "description": "凤凰网旗下的军事频道",
        "url": "https://news.ifeng.com",
        "category": "军事网站",
        "tags": ["凤凰网","军事频道","凤凰军事"]
    },
    {
        "name": "环球军事",
        "description": "中国最权威的军事新闻网站之一",
        "url": "https://mil.huanqiu.com",
        "category": "军事网站",
        "tags": ["中国最权威","军事新闻网站","环球军事"]
    },
    {
        "name": "新浪军事",
        "description": "新浪网旗下的一个专业的军事知识网站",
        "url": "https://mil.news.sina.com.cn",
        "category": "军事网站",
        "tags": ["新浪网","专业","军事知识网站","新浪军事"]
    },
    {
        "name": "米尔网",
        "description": "中国最具特色的军事社区",
        "url": "https://www.miercn.com",
        "category": "军事网站",
        "tags": ["中国最具特色","军事社区","米尔网"]
    },
    {
        "name": "腾讯军事",
        "description": "腾讯网旗下军事频道",
        "url": "https://new.qq.com",
        "category": "军事网站",
        "tags": ["腾讯网","军事频道","腾讯军事"]
    },
    {
        "name": "铁血军事",
        "description": "中国最大的军事网站,提供中国军事、世界军事、军事新闻、",
        "url": "https://www.tiexue.net",
        "category": "军事网站",
        "tags": ["中国最大","军事网站","中国军事","世界军事","军事新闻","铁血军事"]
    },
    {
        "name": "中华网军事",
        "description": "中国最具权威的军事门户",
        "url": "https://military.china.com",
        "category": "军事网站",
        "tags": ["中国最具权威","军事门户","中华网军事"]
    },
    {
        "name": "军事头条",
        "description": "东方网旗下的专业军事新闻网站",
        "url": "https://mil.eastday.com",
        "category": "军事网站",
        "tags": ["东方网","专业","军事新闻网站","军事头条"]
    },
    {
        "name": "工商银行",
        "description": "中国工商银行官方网站",
        "url": "https://www.icbc.com.cn",
        "category": "银行网站",
        "tags": ["中国工商银行","官方网站","工商银行"]
    },
    {
        "name": "建设银行",
        "description": "中国建设银行官方网站",
        "url": "https://www.ccb.com",
        "category": "银行网站",
        "tags": ["中国建设银行","官方网站","建设银行"]
    },
    {
        "name": "农业银行",
        "description": "中国农业银行官方网站",
        "url": "https://www.abchina.com",
        "category": "银行网站",
        "tags": ["中国农业银行","官方网站","农业银行"]
    },
    {
        "name": "中国银行",
        "description": "中国银行官网网站",
        "url": "https://www.boc.cn",
        "category": "银行网站",
        "tags": ["中国银行","官网网站","中国银行"]
    },
    {
        "name": "交通银行",
        "description": "中国交通银行官方网站",
        "url": "https://www.bankcomm.com",
        "category": "银行网站",
        "tags": ["中国交通银行","官方网站","交通银行"]
    },
    {
        "name": "招商银行",
        "description": "招商银行官方网站",
        "url": "https://www.cmbchina.com",
        "category": "银行网站",
        "tags": ["招商银行","官方网站","招商银行"]
    },
    {
        "name": "邮政储蓄银行",
        "description": "中国邮政储蓄银行官方网站",
        "url": "https://www.psbc.com",
        "category": "银行网站",
        "tags": ["中国邮政储蓄银行","官方网站","邮政储蓄银行"]
    },
    {
        "name": "兴业银行",
        "description": "兴业银行官方网站",
        "url": "https://www.cib.com.cn",
        "category": "银行网站",
        "tags": ["兴业银行","官方网站","兴业银行"]
    },
    {
        "name": "汽车之家",
        "description": "看车·买车·用车",
        "url": "https://www.autohome.com.cn",
        "category": "汽车网站",
        "tags": ["看车","买车","用车","汽车之家"]
    },
    {
        "name": "太平洋汽车",
        "description": "一个专业的汽车网络媒体",
        "url": "https://www.pcauto.com.cn",
        "category": "汽车网站",
        "tags": ["专业","汽车网络媒体","太平洋汽车"]
    },
    {
        "name": "易车网",
        "description": "中国国内最领先的汽车专业媒体集团",
        "url": "https://www.yiche.com",
        "category": "汽车网站",
        "tags": ["中国国内最领先","汽车专业媒体集团","易车网"]
    },
    {
        "name": "爱卡汽车",
        "description": "中国领先的汽车主题社区",
        "url": "https://www.xcar.com.cn",
        "category": "汽车网站",
        "tags": ["中国领先","汽车主题社区","爱卡汽车"]
    },
    {
        "name": "新出行",
        "description": "专注于新能源出行方式",
        "url": "https://www.xchuxing.com",
        "category": "汽车网站",
        "tags": ["专注于","新能源出行方式","新出行"]
    },
    {
        "name": "懂车帝",
        "description": "专业的汽车媒体",
        "url": "https://www.dongchedi.com",
        "category": "汽车网站",
        "tags": ["专业","汽车媒体","懂车帝"]
    },
    {
        "name": "车辆违章查询",
        "description": "公安交通管理局互联网交通安全服务管理平台",
        "url": "https://gab.122.gov.cn",
        "category": "汽车网站",
        "tags": ["公安交通管理局","互联网交通安全服务管理平台","车辆违章查询"]
    },
    {
        "name": "瓜子二手车",
        "description": "没有中间商赚差价！",
        "url": "https://www.guazi.com",
        "category": "汽车网站",
        "tags": ["没有中间商赚差价","瓜子二手车"]
    },
    {
        "name": "直播吧",
        "description": "知名体育平台",
        "url": "https://www.zhibo8.cc",
        "category": "体育网站",
        "tags": ["知名","体育平台","直播吧"]
    },
    {
        "name": "虎扑体育",
        "description": "专注于体育等资讯的平台",
        "url": "https://www.hupu.com",
        "category": "体育网站",
        "tags": ["专注于","体育资讯","平台","虎扑体育"]
    },
    {
        "name": "腾讯体育",
        "description": "腾讯旗下的体育频道",
        "url": "https://sports.qq.com",
        "category": "体育网站",
        "tags": ["腾讯","体育频道","腾讯体育"]
    },
    {
        "name": "新浪体育",
        "description": "新浪网旗下的体育频道",
        "url": "https://sports.sina.com.cn",
        "category": "体育网站",
        "tags": ["新浪网","体育频道","新浪体育"]
    },
    {
        "name": "搜狐体育",
        "description": "搜狐旗下的体育频道",
        "url": "https://sports.sohu.com",
        "category": "体育网站",
        "tags": ["搜狐","体育频道","搜狐体育"]
    },
    {
        "name": "网易体育",
        "description": "网易163旗下体育频道",
        "url": "https://sports.163.com",
        "category": "体育网站",
        "tags": ["网易163","体育频道","网易体育"]
    },
    {
        "name": "PP体育",
        "description": "上PP体育过足球瘾",
        "url": "https://sports.pptv.com",
        "category": "体育网站",
        "tags": ["上PP体育过足球瘾","PP体育"]
    },
    {
        "name": "NBA",
        "description": "NBA中国官方网站",
        "url": "https://china.nba.com",
        "category": "体育网站",
        "tags": ["NBA中国","官方网站","NBA"]
    },
    {
        "name": "中关村在线",
        "description": "大中华区专业IT网站",
        "url": "https://www.zol.com.cn",
        "category": "数码网站",
        "tags": ["大中华区","专业IT网站","中关村在线"]
    },
    {
        "name": "太平洋电脑",
        "description": "专业IT门户网站",
        "url": "https://www.pconline.com.cn",
        "category": "数码网站",
        "tags": ["专业","IT门户网站","太平洋电脑"]
    },
    {
        "name": "数字尾巴",
        "description": "分享美好数字生活",
        "url": "https://www.dgtle.com",
        "category": "数码网站",
        "tags": ["分享美好","数字生活","数字尾巴"]
    },
    {
        "name": "ZEALER",
        "description": "科技生活方式第一站",
        "url": "https://www.zealer.com",
        "category": "数码网站",
        "tags": ["科技生活方式","第一站","ZEALER"]
    },
    {
        "name": "Engadget中国",
        "description": "消费性电子产品新闻和评测",
        "url": "https://cn.engadget.com",
        "category": "数码网站",
        "tags": ["消费性电子产品","新闻和评测","Engadget中国"]
    },
    {
        "name": "IT之家",
        "description": "数码，科技，生活",
        "url": "https://www.ithome.com",
        "category": "数码网站",
        "tags": ["数码","科技","生活","IT之家"]
    },
    {
        "name": "Chiphell",
        "description": "分享与交流用户体验",
        "url": "https://www.chiphell.com",
        "category": "数码网站",
        "tags": ["分享与交流","用户体验","Chiphell"]
    },
    {
        "name": "京东数码",
        "description": "京东旗下数码频道",
        "url": "https://shuma.jd.com",
        "category": "数码网站",
        "tags": ["京东","数码频道","京东数码"]
    },
    {
        "name": "贝壳",
        "description": "找房大平台",
        "url": "https://www.ke.com",
        "category": "房产网站",
        "tags": ["找房大平台","贝壳"]
    },
    {
        "name": "安居客",
        "description": "房地产租售服务平台",
        "url": "https://www.anjuke.com",
        "category": "房产网站",
        "tags": ["房地产","租售服务平台","安居客"]
    },
    {
        "name": "链家网",
        "description": "连接每个家的故事",
        "url": "https://www.lianjia.com",
        "category": "房产网站",
        "tags": ["连接每个家的故事","链家网"]
    },
    {
        "name": "我爱我家",
        "description": "陪你发现心中的家",
        "url": "https://www.5i5j.com",
        "category": "房产网站",
        "tags": ["陪你发现心中的家","我爱我家"]
    },
    {
        "name": "房天下",
        "description": "买房 租房 装修房",
        "url": "https://www.fang.com",
        "category": "房产网站",
        "tags": ["买房","租房","装修房","房天下"]
    },
    {
        "name": "房多多",
        "description": "1000万精选房源任你挑",
        "url": "https://www.fangdd.com",
        "category": "房产网站",
        "tags": ["1000万精选房源任你挑","房多多"]
    },
    {
        "name": "小猪短租",
        "description": "居住自由主义",
        "url": "https://www.xiaozhu.com",
        "category": "房产网站",
        "tags": ["居住自由主义","小猪短租"]
    },
    {
        "name": "ziroom自如",
        "description": "品质租房选自如",
        "url": "https://www.ziroom.com",
        "category": "房产网站",
        "tags": ["品质租房选自如","ziroom自如"]
    },
    {
        "name": "起点中文网",
        "description": "精彩小说尽在起点中文网",
        "url": "https://www.qidian.com",
        "category": "小说网站",
        "tags": ["精彩小说尽在起点中文网","起点中文网"]
    },
    {
        "name": "飞卢小说",
        "description": "热门的同人小说阅读网。",
        "url": "https://b.faloo.com",
        "category": "小说网站",
        "tags": ["热门的同人小说阅读网","飞卢小说"]
    },
    {
        "name": "纵横小说网",
        "description": "最热门的免费小说网",
        "url": "https://www.zongheng.com",
        "category": "小说网站",
        "tags": ["最热门的免费小说网","纵横小说网"]
    },
    {
        "name": "创世中文网",
        "description": "阅文集团旗下小说阅读网",
        "url": "https://chuangshi.qq.com",
        "category": "小说网站",
        "tags": ["阅文集团","小说阅读网","创世中文网"]
    },
    {
        "name": "SF轻小说",
        "description": "国内最大原创轻小说网站",
        "url": "https://book.sfacg.com",
        "category": "小说网站",
        "tags": ["国内最大","原创轻小说网站","SF轻小说"]
    },
    {
        "name": "红袖添香",
        "description": "最新全本免费手机小说阅读",
        "url": "https://www.hongxiu.com",
        "category": "小说网站",
        "tags": ["最新全本免费","手机小说阅读","红袖添香"]
    },
    {
        "name": "榕树下",
        "description": "华语文学门户",
        "url": "https://www.rongshuxia.com",
        "category": "小说网站",
        "tags": ["华语文学门户","榕树下"]
    },
    {
        "name": "17K小说",
        "description": "免费小说下载,最新最好看的小说网",
        "url": "https://www.17k.com",
        "category": "小说网站",
        "tags": ["免费小说下载","最新最好看的小说网","17K小说"]
    },
    {
        "name": "快看漫画",
        "description": "官方漫画大全免费在线观看",
        "url": "https://www.kuaikanmanhua.com",
        "category": "动漫网站",
        "tags": ["官方漫画大全","免费在线观看","快看漫画"]
    },
    {
        "name": "腾讯动漫",
        "description": "腾讯动漫官方网站",
        "url": "https://ac.qq.com",
        "category": "动漫网站",
        "tags": ["腾讯动漫","官方网站","腾讯动漫"]
    },
    {
        "name": "嘀哩嘀哩",
        "description": "这里是兴趣使然的无名小站",
        "url": "https://www.dilidili.name",
        "category": "动漫网站",
        "tags": ["这里是兴趣使然的无名小站","嘀哩嘀哩"]
    },
    {
        "name": "半次元",
        "description": "二次元爱好者社区",
        "url": "https://bcy.net",
        "category": "动漫网站",
        "tags": ["二次元爱好者社区","半次元"]
    },
    {
        "name": "番组计划",
        "description": "Bangumi 番组计划",
        "url": "https://bangumi.tv",
        "category": "动漫网站",
        "tags": ["Bangumi","番组计划"]
    },
    {
        "name": "有妖气",
        "description": "有妖气原创漫画梦工厂",
        "url": "https://www.u17.com",
        "category": "动漫网站",
        "tags": ["有妖气","原创漫画梦工厂"]
    },
    {
        "name": "快递100",
        "description": "查快递,寄快递,上快递100",
        "url": "https://www.kuaidi100.com",
        "category": "生活必备",
        "tags": ["查快递","寄快递","上快递100"]
    },
    {
        "name": "便民查询",
        "description": "在线查询、实用工具、生活工具、万能查询",
        "url": "https://www.51240.com",
        "category": "生活必备",
        "tags": ["在线查询","实用工具","生活工具","万能查询","便民查询"]
    },
    {
        "name": "微信网页版",
        "description": "微信Web版本客户端",
        "url": "https://wx.qq.com",
        "category": "生活必备",
        "tags": ["微信Web版本客户端","微信网页版"]
    },
    {
        "name": "驾校一点通",
        "description": "驾校学车、教练陪练、模拟考试",
        "url": "https://www.jxedt.com",
        "category": "生活必备",
        "tags": ["驾校学车","教练陪练","模拟考试","驾校一点通"]
    },
    {
        "name": "下厨房",
        "description": "在线食谱分享平台",
        "url": "https://www.xiachufang.com",
        "category": "生活必备",
        "tags": ["在线食谱分享平台","下厨房"]
    },
    {
        "name": "豆果美食",
        "description": "中文美食菜谱分享网站",
        "url": "https://www.douguo.com",
        "category": "生活必备",
        "tags": ["中文美食菜谱分享网站","豆果美食"]
    },
    {
        "name": "58同城",
        "description": "中国最大的分类信息网",
        "url": "https://www.58.com",
        "category": "生活必备",
        "tags": ["中国最大的分类信息网","58同城"]
    },
    {
        "name": "赶集网",
        "description": "分类信息门户",
        "url": "https://www.ganji.com",
        "category": "生活必备",
        "tags": ["分类信息门户","赶集网"]
    },
    {
        "name": "Mtime时光网",
        "description": "让电影遇见生活",
        "url": "https://www.mtime.com",
        "category": "生活必备",
        "tags": ["让电影遇见生活","Mtime时光网"]
    },
    {
        "name": "百度网盘",
        "description": "百度旗下的在线网络存储服务",
        "url": "https://pan.baidu.com",
        "category": "生活必备",
        "tags": ["百度","在线网络存储服务","百度网盘"]
    },
    {
        "name": "有道词典",
        "description": "网易旗下的在线翻译工具",
        "url": "https://dict.youdao.com",
        "category": "AI翻译工具",
        "tags": ["网易","在线翻译工具","有道词典"]
    },
    {
        "name": "社保查询",
        "description": "全国养老、医疗、社会保险综合查询",
        "url": "https://www.12333sb.com",
        "category": "生活必备",
        "tags": ["全国养老","医疗","社会保险综合查询","社保查询"]
    },
    {
        "name": "DeepSeek",
        "description": "幻方量化旗下深度求索推出的开源大模型和聊天助手",
        "url": "https://chat.deepseek.com",
        "category": "AI聊天助手",
        "tags": ["幻方量化","深度求索","开源大模型","聊天助手","DeepSeek"]
    },
    {
        "name": "Gemini",
        "description": "Google推出的AI聊天对话机器人Bard",
        "url": "https://gemini.google.com",
        "category": "AI聊天助手",
        "tags": ["Google","AI聊天对话机器人","Bard","Gemini"]
    },
    {
        "name": "腾讯元宝",
        "description": "腾讯推出的免费AI智能助手",
        "url": "https://yuanbao.tencent.com",
        "category": "AI聊天助手",
        "tags": ["腾讯","免费AI智能助手","腾讯元宝"]
    },
    {
        "name": "Kimi.ai",
        "description": "会推理解析，能深度思考的AI助手",
        "url": "https://kimi.moonshot.cn",
        "category": "AI聊天助手",
        "tags": ["推理解析","深度思考","AI助手","Kimi.ai"]
    },
    {
        "name": "Gemini Chat Pro",
        "description": "同时理解文字、图像、音频以及更多模态的信息，拥有更为高级的推理、规划、理解等能力",
        "url": "https://gemini-pro.chat",
        "category": "AI聊天助手",
        "tags": ["理解文字","图像","音频","多模态信息","高级推理","规划","理解","Gemini Chat Pro"]
    },
    {
        "name": "小悟空",
        "description": "字节跳动推出的免费AI对话助手和个人助理",
        "url": "https://wukong.com",
        "category": "AI聊天助手",
        "tags": ["字节跳动","免费AI对话助手","个人助理","小悟空"]
    },
    {
        "name": "Jasper Chat",
        "description": "Jasper针对内容创作者出品的AI聊天工具",
        "url": "https://www.jasper.ai",
        "category": "AI聊天助手",
        "tags": ["Jasper","内容创作者","AI聊天工具","Jasper Chat"]
    },
    {
        "name": "百川大模型",
        "description": "融合了意图理解、信息检索以及强化学习技术等，在知识问答、文本创作领域表现突出",
        "url": "https://www.baichuan-ai.com",
        "category": "AI聊天助手",
        "tags": ["意图理解","信息检索","强化学习技术","知识问答","文本创作","百川大模型"]
    },
    {
        "name": "百度 Chat",
        "description": "高效解答问题，辅助你进行内容理解，激发你的灵感和想象。",
        "url": "https://chat.baidu.com",
        "category": "AI聊天助手",
        "tags": ["高效解答问题","内容理解","激发灵感","百度 Chat"]
    },
    {
        "name": "网红秀",
        "description": "Ai网红免费生成工具，创建AI网红语音对话聊天",
        "url": "https://wanghongxiu.com",
        "category": "AI聊天助手",
        "tags": ["Ai网红","免费生成工具","语音对话聊天","网红秀"]
    },
    {
        "name": "免费ChatGPT中文版",
        "description": "国内免费使用gpt4.0，视频绘画PPT",
        "url": "https://chat.doltrans.com",
        "category": "AI聊天助手",
        "tags": ["国内免费使用","gpt4.0","视频绘画PPT","免费ChatGPT中文版"]
    },
    {
        "name": "Gnomic智能体平台",
        "description": "CarrotAI-GPT4自由使用，稳定无广可创建智能体",
        "url": "https://www.gnomic.cn",
        "category": "AI聊天助手",
        "tags": ["CarrotAI-GPT4","自由使用","稳定无广","创建智能体","Gnomic智能体平台"]
    },
    {
        "name": "讯飞星火大模型",
        "description": "全语音对话发音人上新，新增特色助手，优化用户体验",
        "url": "https://xinghuo.xfyun.cn",
        "category": "AI聊天助手",
        "tags": ["全语音对话","发音人","特色助手","优化用户体验","讯飞星火大模型"]
    },
    {
        "name": "AI品类分析",
        "description": "免费品类消费洞察",
        "url": "https://www.voc.ai",
        "category": "AI聊天助手",
        "tags": ["免费品类消费洞察","AI品类分析"]
    },
    {
        "name": "白昼AI",
        "description": "免费GPT3.5 支持GPT4.0 Midjourney!!!",
        "url": "https://ai3.bz007.cn",
        "category": "AI聊天助手",
        "tags": ["免费GPT3.5","支持GPT4.0","Midjourney","白昼AI"]
    },
    {
        "name": "AI提示语",
        "description": "无需代码，连接模型快速构建AI应用",
        "url": "https://tishi.top",
        "category": "AI聊天助手",
        "tags": ["无需代码","连接模型","快速构建AI应用","AI提示语"]
    },
    {
        "name": "AI问客",
        "description": "一款基于最新的AI大模型技术开发的智能问答与内容创作应用",
        "url": "https://ai.myprad.com",
        "category": "AI聊天助手",
        "tags": ["AI大模型技术","智能问答","内容创作应用","AI问客"]
    },
    {
        "name": "ppword",
        "description": "GPT4不限对话次数，支持自建知识库",
        "url": "https://www.ppword.cn",
        "category": "AI聊天助手",
        "tags": ["GPT4","不限对话次数","自建知识库","ppword"]
    },
    {
        "name": "问小白",
        "description": "一键自动生成问小白ppt,行业深度调教模型,AI+专业保障效率和内容精品",
        "url": "https://www.wenxiaobai.com",
        "category": "AI聊天助手",
        "tags": ["一键自动生成","ppt","行业深度调教模型","AI+专业","问小白"]
    },
    {
        "name": "Anthropic",
        "description": "Anthropic发布的与ChatGPT竞争的聊天机器人",
        "url": "https://www.anthropic.com",
        "category": "AI聊天助手",
        "tags": ["Anthropic","与ChatGPT竞争","聊天机器人"]
    },
    {
        "name": "Poe",
        "description": "问答社区Quora推出的问答机器人工具",
        "url": "https://poe.com",
        "category": "AI聊天助手",
        "tags": ["Quora","问答机器人工具","Poe"]
    },
    {
        "name": "Character.AI",
        "description": "创建虚拟角色并与其对话",
        "url": "https://character.ai",
        "category": "AI聊天助手",
        "tags": ["创建虚拟角色","对话","Character.AI"]
    },
    {
        "name": "YouChat",
        "description": "AI搜索对话工具",
        "url": "https://you.com",
        "category": "AI聊天助手",
        "tags": ["AI搜索","对话工具","YouChat"]
    },
    {
        "name": "ChatSonic",
        "description": "WriteSonic出品的ChatGPT竞品",
        "url": "https://writesonic.com",
        "category": "AI聊天助手",
        "tags": ["WriteSonic","ChatGPT竞品","ChatSonic"]
    },
    {
        "name": "IngestAI",
        "description": "一种帮助人们将他们的知识库转变为类似聊天机器人的助手的工具。该工具与Slack、Discord、Whatsapp、Telegram等兼容。分钟上手，支持上传Markdown、TXT、Word、Excel、PowerPoint、Notion、Confluence等知识库文件。",
        "url": "https://ingestai.io",
        "category": "AI聊天助手",
        "tags": ["知识库","聊天机器人助手","Slack","Discord","Whatsapp","Telegram","Markdown","TXT","Word","Excel","PowerPoint","Notion","Confluence","IngestAI"]
    },
    {
        "name": "Whispr",
        "description": "免费AI对话回应",
        "url": "https://whispr.chat",
        "category": "AI聊天助手",
        "tags": ["免费AI对话回应","Whispr"]
    },
    {
        "name": "啾啾 Ai",
        "description": "您的专属 Ai 好友！",
        "url": "https://215.im",
        "category": "AI聊天助手",
        "tags": ["专属 Ai 好友","啾啾 Ai"]
    },
    {
        "name": "Google Bard",
        "description": "媲美ChatGPT，最新的谷歌AI对话模型",
        "url": "https://bard.google.com",
        "category": "AI聊天助手",
        "tags": ["媲美ChatGPT","谷歌AI对话模型","Google Bard"]
    },
    {
        "name": "AgentGPT",
        "description": "革命性的AI平台！具有UI界面的Auto-GPT",
        "url": "https://agentgpt.reworkd.ai",
        "category": "AI聊天助手",
        "tags": ["革命性AI平台","UI界面","Auto-GPT","AgentGPT"]
    },
    {
        "name": "ColossalChat",
        "description": "免费开源的AI聊天机器人",
        "url": "https://chat.colossalai.org",
        "category": "AI聊天助手",
        "tags": ["免费开源","AI聊天机器人","ColossalChat"]
    },
    {
        "name": "Copilot",
        "description": "可以帮助撰写、重写、改进或优化文章内容等功能",
        "url": "https://copilot.microsoft.com",
        "category": "AI聊天助手",
        "tags": ["撰写","重写","改进","优化文章内容","Copilot"]
    },
    {
        "name": "Le Chat",
        "description": "提供一个教育性和有趣的方式来探索MistralAI的技术",
        "url": "https://chat.mistral.ai",
        "category": "AI聊天助手",
        "tags": ["教育性","有趣","探索MistralAI技术","Le Chat"]
    },
    {
        "name": "海螺AI",
        "description": "提供知识问答、智能创作、语音聊天等功能",
        "url": "https://hailuoai.com",
        "category": "AI聊天助手",
        "tags": ["知识问答","智能创作","语音聊天","海螺AI"]
    },
    {
        "name": "紫东太初",
        "description": "支持多轮问答、文本创作、图像生成、3D理解、信号分析等全面问答任务，拥有更强的认知、理解、创作能力，带来全新互动体验",
        "url": "https://taichu-web.ia.ac.cn",
        "category": "AI聊天助手",
        "tags": ["多轮问答","文本创作","图像生成","3D理解","信号分析","认知","理解","创作能力","全新互动体验","紫东太初"]
    },
    {
        "name": "Grok",
        "description": "马斯克旗下xAI推出的人工智能助手",
        "url": "https://x.ai",
        "category": "AI聊天助手",
        "tags": ["马斯克","xAI","人工智能助手","Grok"]
    },
    {
        "name": "智谱清言",
        "description": "智谱AI推出的生成式AI助手，基于ChatGLM 2",
        "url": "https://chatglm.cn",
        "category": "AI聊天助手",
        "tags": ["智谱AI","生成式AI助手","ChatGLM 2","智谱清言"]
    },
    {
        "name": "跃问",
        "description": "具备强大的多模态能力，随时帮你智能搜索、高效阅读、识图理解，高效开启你的工作和生活，和你畅聊感兴趣的话题",
        "url": "https://yuewen.cn",
        "category": "AI聊天助手",
        "tags": ["多模态能力","智能搜索","高效阅读","识图理解","工作和生活","畅聊","跃问"]
    },
    {
        "name": "MChat",
        "description": "基于孟子GPT大模型的AI对话机器人",
        "url": "https://www.langboat.com",
        "category": "AI聊天助手",
        "tags": ["孟子GPT大模型","AI对话机器人","MChat"]
    },
    {
        "name": "商量SenseChat",
        "description": "商汤科技推出的免费AI聊天助手",
        "url": "https://chat.sensetime.com",
        "category": "AI聊天助手",
        "tags": ["商汤科技","免费AI聊天助手","商量SenseChat"]
    },
    {
        "name": "元象XChat",
        "description": "提供3D空间、AIGC工具、大模型等产品",
        "url": "https://chat.xverse.cn",
        "category": "AI聊天助手",
        "tags": ["3D空间","AIGC工具","大模型","元象XChat"]
    },
    {
        "name": "魔搭GPT",
        "description": "阿里巴巴达摩院最新推出的一个大小模型协同的智能助手，具备作诗、绘画、视频生成、语音播放等多模态能力",
        "url": "https://www.modelscope.cn",
        "category": "AI聊天助手",
        "tags": ["阿里巴巴达摩院","大小模型协同","智能助手","作诗","绘画","视频生成","语音播放","多模态能力","魔搭GPT"]
    },
    {
        "name": "TigerBot",
        "description": "支持文章创作、表格数据统计、尝试问答等，并支持多态，能生成图片绘画",
        "url": "https://tigerbot.com",
        "category": "AI聊天助手",
        "tags": ["文章创作","表格数据统计","尝试问答","多态","生成图片绘画","TigerBot"]
    },
    {
        "name": "Stable Chat",
        "description": "Stability Al最新推出的免费聊天对话网站",
        "url": "https://research.stability.ai",
        "category": "AI聊天助手",
        "tags": ["Stability Al","免费聊天对话网站","Stable Chat"]
    },
    {
        "name": "百小应",
        "description": "百川智能推出的免费AI助手",
        "url": "https://ying.baichuan-ai.com",
        "category": "AI聊天助手",
        "tags": ["百川智能","免费AI助手","百小应"]
    },
    {
        "name": "Ohai",
        "description": "月之暗面旗下推出的AI角色扮演虚拟陪伴应用",
        "url": "https://www.ohai.ai",
        "category": "AI聊天助手",
        "tags": ["月之暗面","AI角色扮演","虚拟陪伴应用","Ohai"]
    },
    {
        "name": "钉钉·个人版",
        "description": "钉钉推出的个人版办公应用程序，内置AI智能助手，可进行AI创作、AI 对话、AI绘画",
        "url": "https://workspace.dingtalk.com",
        "category": "AI聊天助手",
        "tags": ["钉钉","个人版办公应用程序","AI智能助手","AI创作","AI 对话","AI绘画","钉钉·个人版"]
    },
    {
        "name": "冒泡鸭",
        "description": "阶跃星辰推出的AI聊天机器人和智能体平台",
        "url": "https://maopaoya.com",
        "category": "AI聊天助手",
        "tags": ["阶跃星辰","AI聊天机器人","智能体平台","冒泡鸭"]
    },
    {
        "name": "超级助理",
        "description": "百度智能云发布的基于文心一言的AI原生应用和Copilot超级助理",
        "url": "https://cloud.baidu.com",
        "category": "AI聊天助手",
        "tags": ["百度智能云","文心一言","AI原生应用","Copilot","超级助理"]
    },
    {
        "name": "Wanderboat",
        "description": "硅谷初创公司UTA AI推出的AI旅行助手",
        "url": "https://wanderboat.ai",
        "category": "AI聊天助手",
        "tags": ["硅谷初创公司","UTA AI","AI旅行助手","Wanderboat"]
    },
    {
        "name": "Luca面壁露卡",
        "description": "面壁智能推出的千亿多模态大模型免费智能对话助手",
        "url": "https://luca.cn",
        "category": "AI聊天助手",
        "tags": ["面壁智能","千亿多模态大模型","免费智能对话助手","Luca面壁露卡"]
    },
    {
        "name": "Forefront",
        "description": "提供GPT-3.5、GPT-4、Claude的AI聊天机器人",
        "url": "https://forefront.ai",
        "category": "AI聊天助手",
        "tags": ["GPT-3.5","GPT-4","Claude","AI聊天机器人","Forefront"]
    },
    {
        "name": "HuggingChat",
        "description": "HuggingFace推出的在线聊天机器人，基于Open Assistant模型",
        "url": "https://huggingface.co",
        "category": "AI聊天助手",
        "tags": ["HuggingFace","在线聊天机器人","Open Assistant模型","HuggingChat"]
    },
    {
        "name": "Koko AI",
        "description": "提供众包认知疗法的同伴支持平台",
        "url": "https://www.seeles.ai",
        "category": "AI聊天助手",
        "tags": ["众包认知疗法","同伴支持平台","Koko AI"]
    },
    {
        "name": "Me.bot",
        "description": "心识宇宙推出的个性化AI伴侣产品",
        "url": "https://www.me.bot",
        "category": "AI聊天助手",
        "tags": ["心识宇宙","个性化AI伴侣产品","Me.bot"]
    },
    {
        "name": "Museland",
        "description": "沉浸式AI角色扮演产品",
        "url": "https://www.museland.ai",
        "category": "AI聊天助手",
        "tags": ["沉浸式","AI角色扮演产品","Museland"]
    },
    {
        "name": "造梦次元",
        "description": "AI互动内容平台",
        "url": "https://ciyuan.ideaflow.pro",
        "category": "AI聊天助手",
        "tags": ["AI互动内容平台","造梦次元"]
    },
    {
        "name": "Cici豆包国际版",
        "description": "可进行智能对话、写作、翻译、情感支持和编程",
        "url": "https://www.ciciai.com",
        "category": "AI聊天助手",
        "tags": ["智能对话","写作","翻译","情感支持","编程","Cici豆包国际版"]
    },
    {
        "name": "逗逗",
        "description": "陪你一起玩游戏的AI桌宠软件",
        "url": "https://www.doudou.fun",
        "category": "AI聊天助手",
        "tags": ["陪你一起玩游戏","AI桌宠软件","逗逗"]
    },
    {
        "name": "360智脑",
        "description": "360自主研发和训练的认知型通用大模",
        "url": "https://ai.360.com",
        "category": "AI聊天助手",
        "tags": ["360","自主研发和训练","认知型通用大模","360智脑"]
    },
    {
        "name": "Replika",
        "description": "一个渴望学习并希望通过你的眼睛看世界的人工智能伴侣",
        "url": "https://replika.com",
        "category": "AI聊天助手",
        "tags": ["渴望学习","通过你的眼睛看世界","人工智能伴侣","Replika"]
    },
    {
        "name": "Inworld",
        "description": "开发和创建AI虚拟角色并与其互动",
        "url": "https://www.inworld.ai",
        "category": "AI聊天助手",
        "tags": ["开发","创建AI虚拟角色","互动","Inworld"]
    },
    {
        "name": "Pi AI",
        "description": "DeepMind联创新公司推出的AI聊天机器人",
        "url": "https://pi.ai",
        "category": "AI聊天助手",
        "tags": ["DeepMind联创新公司","AI聊天机器人","Pi AI"]
    },
    {
        "name": "Open Assistant",
        "description": "免费开源的对话式Al，GitHub星标超3万",
        "url": "https://open-assistant.io",
        "category": "AI聊天助手",
        "tags": ["免费开源","对话式Al","GitHub星标超3万","Open Assistant"]
    },
    {
        "name": "Saylo",
        "description": "AI驱动的故事角色扮演游戏应用，沉浸式的剧本互动体验",
        "url": "https://www.sayloai.com",
        "category": "AI聊天助手",
        "tags": ["AI驱动","故事角色扮演游戏应用","沉浸式","剧本互动体验","Saylo"]
    },
    {
        "name": "飞书知识问答",
        "description": "飞书智能办公平台推出的A!知识库工具",
        "url": "https://ask.feishu.cn",
        "category": "AI聊天助手",
        "tags": ["飞书智能办公平台","A!知识库工具","飞书知识问答"]
    },
    {
        "name": "Adobe Firefly",
        "description": "Adobe最新推出的AI图像生成和编辑工具",
        "url": "https://firefly.adobe.com",
        "category": "AI图像工具",
        "tags": ["Adobe","AI图像生成","编辑工具","Adobe Firefly"]
    },
    {
        "name": "NijiJourney",
        "description": "MJ出品！面向二次元风格，内容细致拿捏专业到位",
        "url": "https://nijijourney.com",
        "category": "AI图像工具",
        "tags": ["MJ出品","二次元风格","内容细致","专业到位","NijiJourney"]
    },
    {
        "name": "Scribble Diffusion",
        "description": "将草图转变为精美的插画",
        "url": "https://scribblediffusion.com",
        "category": "AI图像工具",
        "tags": ["草图转变","精美插画","Scribble Diffusion"]
    },
    {
        "name": "DreamStudio",
        "description": "SD兄弟产品！AI 图像生成器",
        "url": "https://beta.dreamstudio.ai",
        "category": "AI图像工具",
        "tags": ["SD兄弟产品","AI 图像生成器","DreamStudio"]
    },
    {
        "name": "NightCafe",
        "description": "AI艺术插画在线生成",
        "url": "https://creator.nightcafe.studio",
        "category": "AI图像工具",
        "tags": ["AI艺术插画","在线生成","NightCafe"]
    },
    {
        "name": "无界AI",
        "description": "提供一站式AI搜索创作交流分享服务",
        "url": "https://www.wujieai.com",
        "category": "AI图像工具",
        "tags": ["一站式AI搜索","创作交流分享服务","无界AI"]
    },
    {
        "name": "GPT绘画/PPT国内免费",
        "description": "绘画、对话、PPT、创作共四种模式！中文输入",
        "url": "https://aichat.kqbusinessai.com",
        "category": "AI图像工具",
        "tags": ["绘画","对话","PPT","创作","四种模式","中文输入","GPT绘画/PPT国内免费"]
    },
    {
        "name": "Aimaginate",
        "description": "一站式绘图工具，支持ai生图，消除背景，智能文案生成",
        "url": "https://aimaginate.chat",
        "category": "AI图像工具",
        "tags": ["一站式绘图工具","ai生图","消除背景","智能文案生成","Aimaginate"]
    },
    {
        "name": "海艺AI",
        "description": "海艺自研大模型，最强免费版Midjourney",
        "url": "https://www.haiyi.art",
        "category": "AI图像工具",
        "tags": ["海艺自研大模型","最强免费版Midjourney","海艺AI"]
    },
    {
        "name": "175FUN",
        "description": "地表最强AI绘画社区，国货之光！",
        "url": "https://www.175.ai",
        "category": "AI图像工具",
        "tags": ["地表最强AI绘画社区","国货之光","175FUN"]
    },
    {
        "name": "小门道AI",
        "description": "GPT4.0，AutoGPT，MJ绘图",
        "url": "https://www.xiaomendao.cn",
        "category": "AI图像工具",
        "tags": ["GPT4.0","AutoGPT","MJ绘图","小门道AI"]
    },
    {
        "name": "极简智能王",
        "description": "一站式AI创作工具，提高极简创作效率",
        "url": "https://www.jijianzn.com",
        "category": "AI图像工具",
        "tags": ["一站式AI创作工具","提高极简创作效率","极简智能王"]
    },
    {
        "name": "米啫喱AI绘画",
        "description": "登录即用的免费中文MJ生图工具",
        "url": "https://www.mizheliai.com",
        "category": "AI图像工具",
        "tags": ["登录即用","免费中文MJ生图工具","米啫喱AI绘画"]
    },
    {
        "name": "云吧",
        "description": "专业AI绘画工具，Midjourny网页版，Stable Diffusion网页版",
        "url": "https://yun800.com",
        "category": "AI图像工具",
        "tags": ["专业AI绘画工具","Midjourny网页版","Stable Diffusion网页版","云吧"]
    },
    {
        "name": "Civitai",
        "description": "AI艺术共享平台！海量SD开源模型",
        "url": "https://civitai.com",
        "category": "AI图像工具",
        "tags": ["AI艺术共享平台","海量SD开源模型","Civitai"]
    },
    {
        "name": "Dreamlike.art",
        "description": "效果惊人！内置5种模型的AI图像生成器",
        "url": "https://dreamlike.art",
        "category": "AI图像工具",
        "tags": ["效果惊人","内置5种模型","AI图像生成器","Dreamlike.art"]
    },
    {
        "name": "DreamUp",
        "description": "DeviantArt推出的AI插画生成工具",
        "url": "https://www.dreamup.com",
        "category": "AI图像工具",
        "tags": ["DeviantArt","AI插画生成工具","DreamUp"]
    },
    {
        "name": "Lexica",
        "description": "基于StableDiffusion的在线插画生成",
        "url": "https://lexica.art",
        "category": "AI图像工具",
        "tags": ["基于StableDiffusion","在线插画生成","Lexica"]
    },
    {
        "name": "Artbreeder",
        "description": "创建令人惊叹的插画和艺术",
        "url": "https://www.artbreeder.com",
        "category": "AI图像工具",
        "tags": ["创建令人惊叹的插画和艺术","Artbreeder"]
    },
    {
        "name": "AISEO ART",
        "description": "AISEO Art 的AI算法按照分类进行过细致的训练",
        "url": "https://art.aiseo.ai",
        "category": "AI图像工具",
        "tags": ["AISEO Art","AI算法","分类细致训练","AISEO ART"]
    },
    {
        "name": "天才助理",
        "description": "一站式AI gpt加midjourney绘画",
        "url": "https://2gpt.ai",
        "category": "AI图像工具",
        "tags": ["一站式AI","gpt加midjourney绘画","天才助理"]
    },
    {
        "name": "小冰智能",
        "description": "免费使用，AI绘画，AI思维导图，AI聊天，AI绘画提示词",
        "url": "https://xiaobing.yuntunft.cn",
        "category": "AI图像工具",
        "tags": ["免费使用","AI绘画","AI思维导图","AI聊天","AI绘画提示词","小冰智能"]
    },
    {
        "name": "liblib哩布哩布",
        "description": "超多优质模型，国内领先的AI创作平台",
        "url": "https://www.liblib.art",
        "category": "AI图像工具",
        "tags": ["超多优质模型","国内领先","AI创作平台","liblib哩布哩布"]
    },
    {
        "name": "Fooocus",
        "description": "操作简单！免费生成高质量的图像",
        "url": "https://www.fooocus.cc",
        "category": "AI图像工具",
        "tags": ["操作简单","免费生成高质量图像","Fooocus"]
    },
    {
        "name": "TryEmoji",
        "description": "将emoji表情变成3D元素",
        "url": "https://www.tryemoji.com",
        "category": "AI图像工具",
        "tags": ["emoji表情","3D元素","TryEmoji"]
    },
    {
        "name": "Imagine with Me",
        "description": "Meta 推出的免费AI绘画工具",
        "url": "https://imagine.meta.com",
        "category": "AI图像工具",
        "tags": ["Meta","免费AI绘画工具","Imagine with Me"]
    },
    {
        "name": "NVIDIA Canvas",
        "description": "用AI将简单的勾勒转化成逼真的图像",
        "url": "https://www.nvidia.cn",
        "category": "AI图像工具",
        "tags": ["AI","简单勾勒","逼真图像","NVIDIA Canvas"]
    },
    {
        "name": "Bing Image Creat",
        "description": "基于Dalle的AI绘画工具，Edge的侧边栏可直接使用",
        "url": "https://cn.bing.com",
        "category": "AI图像工具",
        "tags": ["基于Dalle","AI绘画工具","Edge侧边栏","Bing Image Creat"]
    },
    {
        "name": "Tiamat",
        "description": "国内自研的AI作画系统！内测中",
        "url": "https://www.tiamat.world",
        "category": "AI图像工具",
        "tags": ["国内自研","AI作画系统","内测中","Tiamat"]
    },
    {
        "name": "eSheep",
        "description": "国内知名的开源AI模型社区",
        "url": "https://www.esheep.com",
        "category": "AI图像工具",
        "tags": ["国内知名","开源AI模型社区","eSheep"]
    },
    {
        "name": "illostration",
        "description": "推荐!几秒内创建不同风格插图",
        "url": "https://www.illostration.com",
        "category": "AI图像工具",
        "tags": ["推荐","几秒内创建","不同风格插图","illostration"]
    },
    {
        "name": "Visualelectric",
        "description": "更适合设计创作的AI绘画工具",
        "url": "https://visualelectric.com",
        "category": "AI图像工具",
        "tags": ["更适合设计创作","AI绘画工具","Visualelectric"]
    },
    {
        "name": "触手AI绘画",
        "description": "免费专业的AI绘画/模型/分享平台",
        "url": "https://acgnai.art",
        "category": "AI图像工具",
        "tags": ["免费专业","AI绘画","模型","分享平台","触手AI绘画"]
    },
    {
        "name": "猫目社区",
        "description": "AI绘画模型社区和内容创作平台，支持文生图、文生视频",
        "url": "https://maomu.com",
        "category": "AI图像工具",
        "tags": ["AI绘画模型社区","内容创作平台","文生图","文生视频","猫目社区"]
    },
    {
        "name": "艾绘",
        "description": "一键创作故事、绘画、配音，轻松创建高质量的绘本故事",
        "url": "https://www.aiyou.art",
        "category": "AI图像工具",
        "tags": ["一键创作故事","绘画","配音","高质量绘本故事","艾绘"]
    },
    {
        "name": "Exactly AI",
        "description": "专业的AI绘画和艺术创作平台",
        "url": "https://exactly.ai",
        "category": "AI图像工具",
        "tags": ["专业","AI绘画","艺术创作平台","Exactly AI"]
    },
    {
        "name": "吐司AI",
        "description": "AI绘画模型社区和在线生图平台",
        "url": "https://tusiart.com",
        "category": "AI图像工具",
        "tags": ["AI绘画模型社区","在线生图平台","吐司AI"]
    },
    {
        "name": "奇域AI",
        "description": "中式审美国风AI绘画创作平台",
        "url": "https://www.qiyuai.net",
        "category": "AI图像工具",
        "tags": ["中式审美","国风","AI绘画创作平台","奇域AI"]
    },
    {
        "name": "360智图",
        "description": "360推出的AI作图平台，支持智能抠图、智能消除、智能放大、智能配图",
        "url": "https://pic.360.com",
        "category": "AI图像工具",
        "tags": ["360","AI作图平台","智能抠图","智能消除","智能放大","智能配图","360智图"]
    },
    {
        "name": "笔魂AI绘画",
        "description": "AI绘画工具，支持文生图和以图生图",
        "url": "https://ibihun.com",
        "category": "AI图像工具",
        "tags": ["AI绘画工具","文生图","以图生图","笔魂AI绘画"]
    },
    {
        "name": "豆绘AI",
        "description": "AI绘图设计平台，一键生成720°VR全景图",
        "url": "https://www.douhuiai.com",
        "category": "AI图像工具",
        "tags": ["AI绘图设计平台","一键生成","720°VR全景图","豆绘AI"]
    },
    {
        "name": "微盟WIME",
        "description": "电商必备!AI扩图/抠图/商品海报/营销写作全流程创作平台",
        "url": "https://wime-ai.com",
        "category": "AI图像工具",
        "tags": ["电商必备","AI扩图","抠图","商品海报","营销写作","全流程创作平台","微盟WIME"]
    },
    {
        "name": "Linkfox",
        "description": "免费的跨境电商聚合服务工具，接入了GPT-4",
        "url": "https://www.linkfox.com",
        "category": "AI聊天助手",
        "tags": ["跨境电商","聚合服务","GPT-4","免费工具","Linkfox"]
    },
    {
        "name": "Perpetua",
        "description": "AI广告引擎/亚马逊、沃尔玛PPC智能全自动优化",
        "url": "http://perpetua.com.cn",
        "category": "跨境AI",
        "tags": ["AI广告引擎","亚马逊","沃尔玛","PPC优化","智能优化","Perpetua"]
    },
    {
        "name": "ChatGPT for Shop",
        "description": "使用 ChatGPT 在亚马逊上获取购买分析和消费者洞察",
        "url": "https://chatgpt4shop.com",
        "category": "AI聊天助手",
        "tags": ["ChatGPT","亚马逊","购买分析","消费者洞察","电商分析"]
    },
    {
        "name": "HoppyCopy",
        "description": "邮件AI，自动写回复邮件，提高邮件营销+客服效率",
        "url": "https://www.hoppycopy.co",
        "category": "跨境AI",
        "tags": ["邮件AI","自动回复","邮件营销","客服效率","HoppyCopy"]
    },
    {
        "name": "纯佣达人库",
        "description": "图灵Turing Market是全球首个按效果付费的网红营销平台，0会员费，无成本",
        "url": "https://www.turingmarket.cn",
        "category": "跨境AI",
        "tags": ["网红营销","按效果付费","0会员费","图灵","Turing Market"]
    },
    {
        "name": "TapNow 跨境助手",
        "description": "一键生成整套图，高审美懂用户本地化场景",
        "url": "https://app.tapnow.ai",
        "category": "AI聊天助手",
        "tags": ["一键生成","整套图","高审美","本地化","TapNow"]
    },
    {
        "name": "VdnGPT",
        "description": "GPT4免费用，电商卖家AI魔法助手",
        "url": "https://gpt.vdnlink.cn",
        "category": "AI聊天助手",
        "tags": ["GPT4","免费使用","电商卖家","AI魔法助手","VdnGPT"]
    },
    {
        "name": "FashionLabs",
        "description": "AI服装模特、商品图，可商用，低价提升销量神器",
        "url": "https://www.fashionlabs.cn",
        "category": "跨境AI",
        "tags": ["AI服装模特","商品图","可商用","提升销量","FashionLabs"]
    },
    {
        "name": "AI智能招聘系统",
        "description": "专门针对跨境企业的AI智能招聘系统，降低企业45%的招聘成本、节省35%招聘支出",
        "url": "https://www.itasaas.com",
        "category": "跨境AI",
        "tags": ["AI智能招聘","跨境企业","降低招聘成本","节省招聘支出","招聘系统"]
    },
    {
        "name": "EchoTik AI",
        "description": "EchoTik AI 工具箱，你聪明的TikTok帮手",
        "url": "https://echotik.live",
        "category": "跨境AI",
        "tags": ["EchoTik AI","工具箱","TikTok帮手","智能工具"]
    },
    {
        "name": "领星ChatGPT",
        "description": "集翻译、分析、生产、优化为一体的一站式智能文案，提高转化率与买家满意度",
        "url": "https://www.lingxing.com",
        "category": "AI写作工具",
        "tags": ["领星ChatGPT","翻译","分析","生产","优化","智能文案","转化率"]
    },
    {
        "name": "魔法AI跨境营销",
        "description": "前沿的AI技术，赋能跨境电商、外贸等场景",
        "url": "https://www.mofaai.com.cn",
        "category": "跨境AI",
        "tags": ["魔法AI","跨境营销","前沿AI技术","跨境电商","外贸"]
    },
    {
        "name": "匠紫AI设计",
        "description": "一站式AI高效设计工具，跨境电商营销快捷键",
        "url": "https://jiangziai.com",
        "category": "跨境AI",
        "tags": ["匠紫AI设计","一站式","AI设计工具","跨境电商","营销快捷键"]
    },
    {
        "name": "光子AI商拍",
        "description": "电商商家专用AI商拍工具，节约95%商拍成本",
        "url": "https://www.photonaiclub.com",
        "category": "跨境AI",
        "tags": ["光子AI商拍","电商商家","AI商拍工具","节约成本","95%成本节约"]
    },
    {
        "name": "QuickDesign.Ai",
        "description": "一键生成AI假发模特",
        "url": "https://www.quickdesign.ai",
        "category": "跨境AI",
        "tags": ["QuickDesign.Ai","一键生成","AI假发模特","设计工具"]
    },
    {
        "name": "AI商品图生成",
        "description": "跨境电商必备作图神器，商品图智能翻译生成",
        "url": "https://www.hsphoto.cn",
        "category": "AI翻译工具",
        "tags": ["AI商品图生成","跨境电商","作图神器","智能翻译","商品图"]
    },
    {
        "name": "AI创意商拍",
        "description": "AI电商设计、AI主图、AI智能抠图、AI生成素材",
        "url": "https://www.meijian.com",
        "category": "图像处理",
        "tags": ["AI创意商拍","AI电商设计","AI主图","AI智能抠图","AI生成素材"]
    },
    {
        "name": "WeShop唯象",
        "description": "国内首款AI商拍工具，全球注册用户超百万",
        "url": "https://www.weshop.com",
        "category": "跨境AI",
        "tags": ["WeShop唯象","AI商拍工具","国内首款","全球用户","超百万"]
    },
    {
        "name": "睿观AI查侵权",
        "description": "查侵权，用睿观！专利·商标·版权·政策都能查！",
        "url": "https://eric-bot.com",
        "category": "跨境AI",
        "tags": ["睿观AI","查侵权","专利","商标","版权","政策查询"]
    },
    {
        "name": "智猫AI",
        "description": "一款基于搜索引擎优化的文案创作及营销神器",
        "url": "https://www.zhimaoai.cn",
        "category": "AI写作工具",
        "tags": ["智猫AI","搜索引擎优化","文案创作","营销神器","SEO"]
    },
    {
        "name": "ZMO.AI",
        "description": "AI产品图背景生成，替代拍摄",
        "url": "https://imgcreator.zmo.ai",
        "category": "跨境AI",
        "tags": ["ZMO.AI","AI产品图","背景生成","替代拍摄","产品图"]
    },
    {
        "name": "跨境Ai",
        "description": "撰写优质listing、精准翻译各国语言、全面的竞品数据分析、生成处理高清图片等",
        "url": "https://kuajingai.com",
        "category": "AI翻译工具",
        "tags": ["跨境Ai","优质listing","精准翻译","竞品数据分析","高清图片","多语言"]
    },
    {
        "name": "Kua.ai",
        "description": "跨境电商AI免费工具，基于gpt-4来搭建，应用场景主要是跨境领域，不管是亚马逊还是独立站",
        "url": "https://www.kua.ai",
        "category": "AI聊天助手",
        "tags": ["Kua.ai","跨境电商","AI免费工具","GPT-4","亚马逊","独立站"]
    },
    {
        "name": "ARC Lab",
        "description": "腾讯旗下ARC实验室推出的AI人像修复、抠图和增强工具",
        "url": "https://arc.tencent.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI人像修复","抠图","图像增强","ARC Lab","腾讯"]
    },
    {
        "name": "6pen Art",
        "description": "6pen 是一个使用 AI技术，利用文本生成绘画作品的产品，这意味着，你可以仅仅通过文字描述画面内容，风格，就可以得到画面",
        "url": "https://6pen.art",
        "category": "AI图像工具",
        "tags": ["图像AI","文本生成绘画","AI绘画","6pen Art"]
    },
    {
        "name": "Imagine",
        "description": "AI文字到图片生成",
        "url": "https://magicstudio.com",
        "category": "AI图像工具",
        "tags": ["图像AI","文字到图片","AI图片生成","Imagine"]
    },
    {
        "name": "改图鸭AI图片生成",
        "description": "改图鸭AI图片生成",
        "url": "https://www.gaituya.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图片生成","改图鸭"]
    },
    {
        "name": "Craiyon",
        "description": "免费在线文本到图像生成",
        "url": "https://www.craiyon.com",
        "category": "AI图像工具",
        "tags": ["图像AI","文本到图像","免费在线","Craiyon"]
    },
    {
        "name": "Starryai",
        "description": "AI艺术图片生成",
        "url": "https://starryai.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI艺术","图片生成","Starryai"]
    },
    {
        "name": "Ribbet.ai",
        "description": "免费在线AI图片处理编辑",
        "url": "https://ribbet.ai",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图片处理","图片编辑","免费在线","Ribbet.ai"]
    },
    {
        "name": "Booltool",
        "description": "常用AI图片图像处理工具箱",
        "url": "https://booltool.boolv.tech",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图片处理","图像处理工具箱","Booltool"]
    },
    {
        "name": "TreeMind树图",
        "description": "新一代AI人工智能思维导图",
        "url": "https://shutu.cn",
        "category": "AI图像工具",
        "tags": ["图像AI","AI思维导图","人工智能","TreeMind树图"]
    },
    {
        "name": "美图云修",
        "description": "商业级AI影像处理工具",
        "url": "https://yunxiu.meitu.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI影像处理","商业级工具","美图云修","美图"]
    },
    {
        "name": "美图AI开放平台",
        "description": "美图推出的AI人脸图像处理平台",
        "url": "https://ai.meitu.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI人脸处理","图像处理平台","美图AI开放平台","美图"]
    },
    {
        "name": "ClipDrop",
        "description": "Stability.AI出品的图片处理系列工具（背景移除、图片放大、打光）",
        "url": "https://clipdrop.co",
        "category": "AI图像工具",
        "tags": ["图像AI","背景移除","图片放大","打光","ClipDrop","Stability.AI"]
    },
    {
        "name": "Pixelcut.ai",
        "description": "AI产品图片处理——背景移除替换、物体抹除和图片放大",
        "url": "https://www.pixelcut.ai",
        "category": "AI图像工具",
        "tags": ["图像AI","AI产品图片处理","背景移除替换","物体抹除","图片放大","Pixelcut.ai"]
    },
    {
        "name": "Hotpot.ai",
        "description": "AI工具箱（图像、游戏和写作系列工具）",
        "url": "https://hotpot.ai",
        "category": "AI图像工具",
        "tags": ["图像AI","AI工具箱","图像工具","游戏工具","写作工具","Hotpot.ai"]
    },
    {
        "name": "灵图AI",
        "description": "免费的AI电商设计工具",
        "url": "https://www.lingvisions.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI电商设计","免费工具","灵图AI"]
    },
    {
        "name": "绘蛙AI",
        "description": "阿里旗下AI工具，低成本生成优质商拍图",
        "url": "https://www.ihuiwa.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI商拍图","低成本生成","绘蛙AI","阿里"]
    },
    {
        "name": "Stockimg AI",
        "description": "AI生成高质量图像、书籍封面、壁纸、海报、Logo、插画、艺术等",
        "url": "https://stockimg.ai",
        "category": "AI图像工具",
        "tags": ["图像AI","AI生成高质量图像","书籍封面","壁纸","海报","Logo","插画","艺术","Stockimg AI"]
    },
    {
        "name": "PicWish",
        "description": "推荐！专业的AI抠图修图，支持格式转化",
        "url": "https://picwish.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI抠图","修图","格式转化","PicWish"]
    },
    {
        "name": "WaifuLabs",
        "description": "一键生成动漫二次元头像",
        "url": "https://waifulabs.com",
        "category": "AI图像工具",
        "tags": ["图像AI","动漫头像","二次元头像","WaifuLabs"]
    },
    {
        "name": "Change Style AI",
        "description": "人工智能多风格肖像生成器！能够AI生成30种照片",
        "url": "https://changestyleai.com",
        "category": "AI图像工具",
        "tags": ["图像AI","多风格肖像生成","AI照片生成","Change Style AI"]
    },
    {
        "name": "Palette",
        "description": "用AI为黑白照片着色",
        "url": "https://palette.fm",
        "category": "AI图像工具",
        "tags": ["图像AI","黑白照片着色","AI着色","Palette"]
    },
    {
        "name": "CG Faces",
        "description": "免费的 AI 人像生成图片素材网站",
        "url": "https://cgfaces.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI人像生成","图片素材","免费","CG Faces"]
    },
    {
        "name": "Picsart",
        "description": "Picsart推出的AI图片生成器",
        "url": "https://picsart.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图片生成器","Picsart"]
    },
    {
        "name": "Neural.love",
        "description": "AI艺术图片生成",
        "url": "https://neural.love",
        "category": "AI图像工具",
        "tags": ["图像AI","AI艺术","图片生成","Neural.love"]
    },
    {
        "name": "Artssy",
        "description": "AI图像生成",
        "url": "https://www.artssy.co",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图像生成","Artssy"]
    },
    {
        "name": "AI Photos",
        "description": "AI图片艺术美化",
        "url": "https://aiphotos.ai",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图片美化","艺术美化","AI Photos"]
    },
    {
        "name": "ShutterStock",
        "description": "Shutterstock推出的AI图片生成工具",
        "url": "https://www.shutterstock.com",
        "category": "AI图像工具",
        "tags": ["图像AI","AI图片生成","ShutterStock"]
    },
    {
        "name": "Supermeme",
        "description": "AIMEME梗图生成器",
        "url": "https://www.supermeme.ai",
        "category": "AI图像工具",
        "tags": ["图像AI","AIMEME","梗图生成器","Supermeme"]
    },
    {
        "name": "Bing 映像创建器",
        "description": "图像创建器是一款产品，可帮助用户使用DALL-E 生成 AI 映像。得到文本提示后，AI将生成一组与该提示匹配的图像。",
        "url": "http://bing.com",
        "category": "AI图像工具",
        "tags": ["图像AI","DALL-E","AI映像生成","文本提示","Bing 映像创建器","微软"]
    },
    {
        "name": "Icons8 Background Remover",
        "description": "Icons8出品的免费图片背景移除工具",
        "url": "https://icons8.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","免费工具","Icons8"]
    },
    {
        "name": "ClippingMagic",
        "description": "魔术般地去除图片背景",
        "url": "https://clippingmagic.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","ClippingMagic"]
    },
    {
        "name": "BgSub",
        "description": "免费的保护隐私的AI图片背景去除工具",
        "url": "https://bgsub.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","免费工具","保护隐私","BgSub"]
    },
    {
        "name": "Erase.bg",
        "description": "在线抠图和去除图片背景",
        "url": "https://www.erase.bg",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","在线工具","Erase.bg"]
    },
    {
        "name": "PhotoRoom",
        "description": "免费的AI图片背景移除和添加",
        "url": "https://www.photoroom.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","背景添加","免费工具","PhotoRoom"]
    },
    {
        "name": "Adobe Image Background Remover",
        "description": "AdobeExpress的图片背景移除工具",
        "url": "https://www.adobe.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","Adobe","AdobeExpress"]
    },
    {
        "name": "Removal.AI",
        "description": "AI图片背景移除工具",
        "url": "https://removal.ai",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","Removal.AI"]
    },
    {
        "name": "Slazzer",
        "description": "免费在线抠除图片背景",
        "url": "https://www.slazzer.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","免费在线","Slazzer"]
    },
    {
        "name": "Cutout.Pro抠图",
        "description": "AI批量抠图去背景",
        "url": "https://www.cutout.pro",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","批量抠图","Cutout.Pro"]
    },
    {
        "name": "BGremover",
        "description": "VanceAI推出的图片背景移除工具",
        "url": "https://bgremover.vanceai.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","BGremover","VanceAI"]
    },
    {
        "name": "Quicktools Background Remover",
        "description": "Picsart旗下的Quicktools推出的图片背景移除工具",
        "url": "https://tools.picsart.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","Quicktools","Picsart"]
    },
    {
        "name": "Zyro AI Background Remover",
        "description": "Zyro推出的AI图片背景移除工具",
        "url": "https://zyro.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","Zyro"]
    },
    {
        "name": "一键抠图",
        "description": "在线一键抠图换背景",
        "url": "https://www.yijiankoutu.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","一键抠图","换背景"]
    },
    {
        "name": "Stylized",
        "description": "AI产品图背景替换",
        "url": "https://www.stylized.ai",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","产品图背景替换","Stylized"]
    },
    {
        "name": "Pebblely",
        "description": "AI产品图精美背景添加",
        "url": "https://pebblely.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","产品图背景添加","Pebblely"]
    },
    {
        "name": "Mokker AI",
        "description": "AI产品图添加背景",
        "url": "https://mokker.ai",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","产品图背景添加","Mokker AI"]
    },
    {
        "name": "Booth.ai",
        "description": "高质量AI产品展示效果图生成",
        "url": "https://www.booth.ai",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","产品展示效果图","Booth.ai"]
    },
    {
        "name": "ImgCleaner",
        "description": "运用AI人工智能技术，一键去除图片内的任意文字，人物和对象",
        "url": "https://imgcleaner.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","去除文字","去除人物","去除对象","ImgCleaner"]
    },
    {
        "name": "Remover",
        "description": "几秒钟，去除图中不需要的元素",
        "url": "https://remover.zmo.ai",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","去除元素","Remover","ZMO"]
    },
    {
        "name": "Designify",
        "description": "拖入图片便可自动去除背景✨",
        "url": "https://www.designify.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","自动去除背景","Designify"]
    },
    {
        "name": "魔术橡皮擦",
        "description": "帮你将图片中任何不需要的部分智能擦除、填补背景内容。",
        "url": "https://jpgrm.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","智能擦除","填补背景","魔术橡皮擦"]
    },
    {
        "name": "Magic Eraser",
        "description": "魔术橡皮擦，一键去除图片上任意元素",
        "url": "https://www.magiceraser.io",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","魔术橡皮擦","去除元素","Magic Eraser"]
    },
    {
        "name": "凡科AI抠图",
        "description": "简单好用的在线图片处理工具。",
        "url": "https://kt.fkw.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","在线工具","凡科AI抠图"]
    },
    {
        "name": "顽兔抠图",
        "description": "一键去除商品图背景工具",
        "url": "https://d.design",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","商品图背景","顽兔抠图"]
    },
    {
        "name": "图可丽",
        "description": "AI图片和视频抠图，一键抠图神器",
        "url": "https://www.tukeli.net",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","视频抠图","一键抠图","图可丽"]
    },
    {
        "name": "干图设计室AI助手",
        "description": "AI绘画抠图工具集",
        "url": "https://hisheai.com",
        "category": "AI图像工具",
        "tags": ["背景移除","AI抠图","AI绘画","工具集","干图设计室AI助手"]
    },
    {
        "name": "AI速配(Aisoup)",
        "description": "AI产品图背景融合、抠图、放大、抹除、修复工具",
        "url": "https://www.aisoup.cn",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","背景融合","图片放大","抹除修复","AI速配","Aisoup"]
    },
    {
        "name": "美图抠图",
        "description": "美图秀秀推出的AI智能抠图工具，一键移除背景",
        "url": "https://cutout.designkit.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","美图秀秀","智能抠图","美图抠图"]
    },
    {
        "name": "Pixian Al",
        "description": "免费的AI图片背景抠除工具",
        "url": "https://pixian.ai",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","免费工具","Pixian AI"]
    },
    {
        "name": "鲜艺AI抠图",
        "description": "免费AI抠图工具，支持离线安装使用",
        "url": "https://kt.94xy.com",
        "category": "图像处理",
        "tags": ["背景移除","AI抠图","免费工具","离线安装","鲜艺AI抠图"]
    },
    {
        "name": "Pixelhunter",
        "description": "AI智能调整图片尺寸用于社交媒体平台发帖",
        "url": "https://pixelhunter.io",
        "category": "图像处理",
        "tags": ["无损调整","AI图片调整","社交媒体","Pixelhunter"]
    },
    {
        "name": "Img.Upscaler",
        "description": "免费的AI图片放大工具",
        "url": "https://imgupscaler.com",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","免费工具","Img.Upscaler"]
    },
    {
        "name": "VanceAI Image Resizer",
        "description": "VanceAI推出的在线图片尺寸调整工具",
        "url": "https://vanceai.com",
        "category": "图像处理",
        "tags": ["无损调整","图片尺寸调整","VanceAI"]
    },
    {
        "name": "Media.io AI Image Upscaler",
        "description": "Media.io推出的AI图片放大工具",
        "url": "https://www.media.io",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","Media.io"]
    },
    {
        "name": "Nero Image Upscaler",
        "description": "AI免费图片无损放大",
        "url": "https://ai.nero.com",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","免费工具","Nero"]
    },
    {
        "name": "PhotoAid Image Upscaler",
        "description": "PhotoAid出品的免费在线人工智能图片放大工具",
        "url": "https://photoaid.com",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","免费工具","PhotoAid"]
    },
    {
        "name": "Upscalepics",
        "description": "在线图片放大工具",
        "url": "https://upscalepics.com",
        "category": "图像处理",
        "tags": ["无损调整","图片放大","在线工具","Upscalepics"]
    },
    {
        "name": "Upscale.media",
        "description": "使用我们的人工智能工具将您的图像升级到2倍或4倍，而不会丢失任何纹理或细节。使用我们的超分辨率工具，为您的图像带来新的活力。",
        "url": "https://www.upscale.media",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","超分辨率","Upscale.media"]
    },
    {
        "name": "佐糖",
        "description": "图像处理功能丰富，包括图片变清晰、在线抠图、在线去水印、图片压缩、裁剪、图片识别文字......",
        "url": "https://picwish.cn",
        "category": "图像处理",
        "tags": ["无损调整","图片变清晰","在线抠图","去水印","图片压缩","佐糖"]
    },
    {
        "name": "jpgHD",
        "description": "一键修复，让您的老照片变新照片",
        "url": "https://jpghd.com",
        "category": "图像处理",
        "tags": ["无损调整","老照片修复","照片增强","jpgHD"]
    },
    {
        "name": "Magnific Al",
        "description": "强大的AI图像放大工具，最高支持到10K分辨率",
        "url": "https://magnific.ai",
        "category": "图像处理",
        "tags": ["无损调整","AI图像放大","10K分辨率","Magnific AI"]
    },
    {
        "name": "Let's Enhance",
        "description": "AI在线免费放大图片并保持图像质量",
        "url": "https://letsenhance.io",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","免费工具","保持图像质量","Let's Enhance"]
    },
    {
        "name": "Upscayl",
        "description": "免费开源的AI图片无损放大工具",
        "url": "https://upscayl.org",
        "category": "图像处理",
        "tags": ["无损调整","AI图片放大","免费开源","无损放大","Upscayl"]
    },
    {
        "name": "Mejorar lmagen",
        "description": "AI图像放大增强工具，快速放大至10倍或12K分辨率",
        "url": "https://mejorarimagen.org",
        "category": "图像处理",
        "tags": ["无损调整","AI图像放大","10倍放大","12K分辨率","Mejorar Imagen"]
    },
    {
        "name": "Playground AI",
        "description": "AI图片生成和修图",
        "url": "https://playgroundai.com",
        "category": "AI图像工具",
        "tags": ["优化修复","AI修图","图片生成","Playground AI"]
    },
    {
        "name": "Restorephoto",
        "description": "用AI修复旧的人像照片",
        "url": "https://www.restorephotos.io",
        "category": "优化修复",
        "tags": ["优化修复","老照片修复","人像修复","Restorephoto"]
    },
    {
        "name": "妙话AI",
        "description": "支持AI修复图片、人像变清晰、去除背景、在线抠图",
        "url": "https://imiaohua.com",
        "category": "图像处理",
        "tags": ["优化修复","人像清晰","去背景","在线抠图","妙话AI"]
    },
    {
        "name": "Remini",
        "description": "AI智能将模糊照片变高清的图像修复工具",
        "url": "https://remini.ai",
        "category": "优化修复",
        "tags": ["优化修复","照片增强","变清晰","Remini"]
    },
    {
        "name": "Facet",
        "description": "AI图片修图和优化工具",
        "url": "https://facet.ai",
        "category": "优化修复",
        "tags": ["优化修复","AI修图","图片优化","Facet"]
    },
    {
        "name": "咻图AI",
        "description": "面向影楼的摄影后期AI修图软件",
        "url": "https://www.aixtsy.com",
        "category": "优化修复",
        "tags": ["优化修复","AI修图","摄影后期","咻图AI"]
    },
    {
        "name": "像素蛋糕PixCake",
        "description": "简单易用的AI图像精修工具",
        "url": "https://www.pixcakeai.com",
        "category": "优化修复",
        "tags": ["优化修复","图像精修","易用工具","PixCake"]
    },
    {
        "name": "PicMa Studio",
        "description": "AI一键批量增强、修复、彩色化你的照片",
        "url": "https://picma.magictiger.ai",
        "category": "优化修复",
        "tags": ["优化修复","批量增强","批量修复","彩色化","PicMa"]
    },
    {
        "name": "Bg Eraser",
        "description": "图片物体抹除和清理",
        "url": "https://bgeraser.com",
        "category": "物体抹除",
        "tags": ["物体抹除","清理","去除物体","Bg Eraser"]
    },
    {
        "name": "SnapEdit",
        "description": "AI移除图片中的任何物体",
        "url": "https://snapedit.app",
        "category": "物体抹除",
        "tags": ["物体抹除","去除物体","SnapEdit"]
    },
    {
        "name": "Hama",
        "description": "AI图片对象智能抹除",
        "url": "https://www.hama.app",
        "category": "物体抹除",
        "tags": ["物体抹除","对象抹除","Hama"]
    },
    {
        "name": "Inpaint-web",
        "description": "生成效果飞快！超智能的AI涂抹工具",
        "url": "https://inpaintweb.lxfater.com",
        "category": "物体抹除",
        "tags": ["物体抹除","涂抹工具","Inpaint","Inpaint-web"]
    },
    {
        "name": "WatermarkRemover",
        "description": "AI智能删除照片中的水印",
        "url": "https://www.watermarkremover.io",
        "category": "物体抹除",
        "tags": ["物体抹除","去水印","WatermarkRemover"]
    },
    {
        "name": "lOPaint",
        "description": "免费开源的AI图像擦除、修复和处理工具",
        "url": "https://www.iopaint.com",
        "category": "物体抹除",
        "tags": ["物体抹除","开源","图像擦除","lOPaint"]
    },
    {
        "name": "蜜蜂剪辑",
        "description": "AI去水印工具，支持图片和30+流行短视频平台",
        "url": "https://beecut.cn",
        "category": "物体抹除",
        "tags": ["物体抹除","去水印","短视频平台","蜜蜂剪辑"]
    },
    {
        "name": "HitPaw Watermark Remover",
        "description": "AI图片和视频去水印工具",
        "url": "https://www.hitpaw.com",
        "category": "物体抹除",
        "tags": ["物体抹除","去水印","图片去水印","视频去水印","HitPaw"]
    },
    {
        "name": "Chatdoc",
        "description": "免费的AI文件阅读工具，可以快速解析、定位和总结上传的pdf文件内容",
        "url": "https://cas.chatdoc.site",
        "category": "AI阅读工具",
        "tags": ["阅读AI","PDF解析","内容定位","自动总结","Chatdoc"]
    },
    {
        "name": "Cubox",
        "description": "一款阅读器应用程序，可通过 AI 摘要、突出显示和洞察力帮助您更快、更智能地阅读",
        "url": "https://cubox.cc",
        "category": "AI阅读工具",
        "tags": ["阅读AI","AI摘要","高亮标注","阅读洞察","Cubox"]
    },
    {
        "name": "ChatPDF",
        "description": "最先进的 AI 聊天机器人构建器，可让您制作一个个性化的 GPT 聊天机器人来理解您的 PDF 文件",
        "url": "https://pdf.chat",
        "category": "AI阅读工具",
        "tags": ["阅读AI","PDF理解","聊天机器人","ChatPDF"]
    },
    {
        "name": "小绿鲸",
        "description": "小绿鲸是一款集翻译、笔记、文献管理、文献汇报、写作功能于一体的云端英文文献阅读器",
        "url": "https://www.xljsci.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","文献阅读","翻译","笔记","文献管理","小绿鲸"]
    },
    {
        "name": "Scholarcy",
        "description": "利用AI技术提高科研效率的阅读工具，支持自动划出文献重点、链接背景概念、导出参考文献等功能",
        "url": "https://www.scholarcy.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","科研效率","重点划出","参考文献","Scholarcy"]
    },
    {
        "name": "Scispace",
        "description": "通过主页上传文献PDF、搜索栏搜索对应文献关键词来分析目标文献",
        "url": "https://scispace.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","文献分析","PDF上传","关键词搜索","Scispace"]
    },
    {
        "name": "Paperdigest",
        "description": "人工智能搜索文献的网站，可以生成英文文献综述和改写综述，还可以提炼文献的研究内容和结果",
        "url": "https://www.paperdigest.org",
        "category": "AI阅读工具",
        "tags": ["阅读AI","文献搜索","综述生成","结果提炼","Paperdigest"]
    },
    {
        "name": "Docalysis",
        "description": "通过划线帮你总结文献段落大意，也支持提问问答，基于提交的文献帮你了解文献的具体内容",
        "url": "https://docalysis.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","段落总结","问答","Docalysis"]
    },
    {
        "name": "网易有道速读",
        "description": "支持快速从文档中提取、定位、汇总信息，为你一站式  解决文档翻译、文档解析、文档QA方面的问题",
        "url": "https://read.youdao.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","信息提取","文档解析","文档翻译","文档QA","有道速读"]
    },
    {
        "name": "BookAI",
        "description": "人工智能驱动的阅读工具，通过聊天界面与书籍互动，为用户提供了全新的阅读体验",
        "url": "https://www.bookai.chat",
        "category": "AI阅读工具",
        "tags": ["阅读AI","书籍对话","阅读体验","BookAI"]
    },
    {
        "name": "Clearly阅读器",
        "description": "AI文章阅读浏览器插件",
        "url": "https://clearlyreader.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","浏览器插件","文章阅读","Clearly"]
    },
    {
        "name": "风声雨声",
        "description": "能够提供高质量的中英文对照翻译，支持多种文件格式和语言，适用于书籍、手册、字幕等多种场景",
        "url": "https://fsys.app",
        "category": "AI阅读工具",
        "tags": ["阅读AI","双语对照","多格式支持","翻译","风声雨声"]
    },
    {
        "name": "哔哔终结者",
        "description": "一键总结视频中的语音字幕内容，支持多种平台和格式",
        "url": "https://bibigpt.co",
        "category": "AI阅读工具",
        "tags": ["阅读AI","视频摘要","字幕总结","哔哔终结者"]
    },
    {
        "name": "Monica",
        "description": "基于ChatGPT的谷歌浏览器插件，可以帮你聊天、翻译、写作、总结、解释等",
        "url": "https://monica.im",
        "category": "AI阅读工具",
        "tags": ["阅读AI","浏览器插件","总结","翻译","Monica"]
    },
    {
        "name": "OpenRead",
        "description": "提供科研文献阅读、摘要、笔记、语音等功能的平台，旨在帮助科研人员提高阅读效率和质量",
        "url": "https://www.openread.academy",
        "category": "AI阅读工具",
        "tags": ["阅读AI","科研平台","摘要笔记","OpenRead"]
    },
    {
        "name": "MyGPTReader",
        "description": "阅读和总结任何网页、文档（包括电子书），甚至是来自 YouTube 的视频",
        "url": "https://www.myreader.io",
        "category": "AI阅读工具",
        "tags": ["阅读AI","网页总结","电子书","视频总结","MyGPTReader"]
    },
    {
        "name": "AskYourPDF",
        "description": "用来整理分析、检索论文、会议记录等，对阅读PDF格式的文档非常有用",
        "url": "https://askyourpdf.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","PDF检索","文档分析","AskYourPDF"]
    },
    {
        "name": "Humata",
        "description": "基于ChatGPT API的AI工具，可以帮助用户快速分析、撰写、阅读各种文档，如论文、报告、技术文档等",
        "url": "https://www.humata.ai",
        "category": "AI阅读工具",
        "tags": ["阅读AI","文档分析","撰写","阅读","Humata"]
    },
    {
        "name": "Glarity",
        "description": "利用 ChatGPT 生成中文版本的网页内容摘要的浏览器插件，可以快速总结 Google、百度、YouTube、B站等网站或视频的结果和精华",
        "url": "https://glarity.app",
        "category": "AI阅读工具",
        "tags": ["阅读AI","摘要插件","视频摘要","Glarity"]
    },
    {
        "name": "Wiseone",
        "description": "由人工智能驱动的浏览器扩展，通过节省时间、提升生产力和拓展知识的方式，为您提供一种全新的网络搜索和在线阅读方式。",
        "url": "https://wiseone.io",
        "category": "AI阅读工具",
        "tags": ["阅读AI","阅读插件","效率提升","Wiseone"]
    },
    {
        "name": "包阅AI",
        "description": " 支持多种文档格式，如PDF、DOCX、扫描文件等； 提供全文概述、分章节总结、智能导读； 多语言AI翻译； 跨文档查询",
        "url": "https://baoyueai.com",
        "category": "AI阅读工具",
        "tags": ["阅读AI","多格式支持","智能导读","跨文档查询","包阅AI"]
    },
    {
        "name": "Walles AI",
        "description": "一款集成了多种AI阅读场景的全能AI阅读工具，可以对网页、视频、PDF等内容进行摘要、解释、翻译等操作",
        "url": "https://walles.ai",
        "category": "AI阅读工具",
        "tags": ["阅读AI","全能阅读","摘要翻译","Walles AI"]
    },
    {
        "name": "司马阅",
        "description": "高效应用于工作、学习场景，如读行业市场报告、产品手册、法律文档、论文文献、电子书等",
        "url": "https://smartread.cc",
        "category": "AI阅读工具",
        "tags": ["阅读AI","行业报告","法律文档","电子书","司马阅"]
    },
    {
        "name": "Rytr",
        "description": "AI内容生成和写作助手",
        "url": "https://rytr.me",
        "category": "AI写作工具",
        "tags": ["写作AI","内容生成","Rytr"]
    },
    {
        "name": "WPS智能写作",
        "description": "WPS旗下在线智能写作工具",
        "url": "https://aiwrite.wps.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","办公写作","WPS"]
    },
    {
        "name": "Novelist AI",
        "description": "AI辅助你创建自己的小说",
        "url": "https://novelistai.com",
        "category": "AI写作工具",
        "tags": ["写作AI","小说创作","Novelist"]
    },
    {
        "name": "QuillBot",
        "description": "AI写作润色工具",
        "url": "https://quillbot.com",
        "category": "AI写作工具",
        "tags": ["写作AI","改写润色","QuillBot"]
    },
    {
        "name": "据意查句",
        "description": "清华出品！AI 神器让你的文案立马变高级",
        "url": "https://wantquotes.net",
        "category": "AI写作工具",
        "tags": ["写作AI","措辞优化","清华"]
    },
    {
        "name": "创作王",
        "description": "全能型智能创作平台，可以智能回答、智能创作、智能编写、智能翻译、智能写代码等",
        "url": "https://aiapp.cc",
        "category": "AI写作工具",
        "tags": ["写作AI","多场景","创作王"]
    },
    {
        "name": "笔灵AI写作",
        "description": "专业AI写作工具，提供多场景AI创作服务",
        "url": "https://ibiling.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","多场景写作","笔灵"]
    },
    {
        "name": "宣小二新媒体",
        "description": "新媒体平台，媒体发稿平台，自媒体宣发平台，网红短视频分发平台",
        "url": "https://www.xuanxiaoer.com",
        "category": "AI写作工具",
        "tags": ["写作AI","新媒体","宣小二"]
    },
    {
        "name": "晓语台",
        "description": "先进的AI点击式文本创作平台",
        "url": "https://www.xiaoyutai.com",
        "category": "AI写作工具",
        "tags": ["写作AI","点击式创作","晓语台"]
    },
    {
        "name": "AIPaperPass",
        "description": "优质AI论文平台，千字大纲免费，3万字10分钟",
        "url": "https://www.aipaperpass.com",
        "category": "AI写作工具",
        "tags": ["写作AI","论文生成","PaperPass"]
    },
    {
        "name": "学境思源-Academicideas",
        "description": "AI原创论文，10分钟内完美解决论文写作难题",
        "url": "https://academicideas.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","学术论文","Academicideas"]
    },
    {
        "name": "Adwrite智能写作工具",
        "description": "交互式中英文写作平台，营销文案/邮件/网站文案/纠错改写/续写/配图",
        "url": "https://aigcdeep.com",
        "category": "AI写作工具",
        "tags": ["写作AI","营销文案","改写润色","Adwrite"]
    },
    {
        "name": "万彩AI",
        "description": "全能型AI内容和文案创作助手",
        "url": "https://ai.kezhan365.com",
        "category": "AI写作工具",
        "tags": ["写作AI","文案助手","万彩AI"]
    },
    {
        "name": "开放猫AI",
        "description": "AI聊天、AI绘图、AI写作、AI润色简历、AI修改论文等",
        "url": "https://openmao.panchuang.net",
        "category": "AI写作工具",
        "tags": ["写作AI","多功能","开放猫"]
    },
    {
        "name": "怪兽AI知识库大模型",
        "description": "大模型，知识库，问答回复，AI写作，智能客服",
        "url": "https://www.guaishouai.net",
        "category": "AI写作工具",
        "tags": ["写作AI","知识库","客服"]
    },
    {
        "name": "梅子AI论文",
        "description": "无限免费生成千字论文大纲，AI自动生成论文",
        "url": "https://www.meizilunwen.com",
        "category": "AI写作工具",
        "tags": ["写作AI","论文大纲","梅子AI"]
    },
    {
        "name": "免费论文降AI",
        "description": "一键降低85%的AI痕迹，将论文重复率降至5%",
        "url": "https://sourl.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","降AI","论文降重"]
    },
    {
        "name": "抖云猫论文AI助手",
        "description": "基于自研抖云猫大模型的论文写作AI产品",
        "url": "https://www.douyunmao.com",
        "category": "AI写作工具",
        "tags": ["写作AI","论文写作","抖云猫"]
    },
    {
        "name": "猫眼课题宝",
        "description": "5分钟定创新选题，3步生成高质量标书",
        "url": "https://www.myketi.com",
        "category": "AI写作工具",
        "tags": ["写作AI","课题标书","选题"]
    },
    {
        "name": "笔目鱼SCI写作器",
        "description": "云端英文论文写作器：翻译、润色、改写、例句、参考文献管理",
        "url": "https://www.bmysci.com",
        "category": "AI写作工具",
        "tags": ["写作AI","SCI论文","英文写作"]
    },
    {
        "name": "MagicPen",
        "description": "在线AI英语写作助手",
        "url": "https://magickpen.com",
        "category": "AI写作工具",
        "tags": ["写作AI","英文写作","MagicPen"]
    },
    {
        "name": "字语智能",
        "description": "企业AI办公助手，智能文案创作神器",
        "url": "https://getgetai.com",
        "category": "AI写作工具",
        "tags": ["写作AI","企业文案","字语智能"]
    },
    {
        "name": "editGPT",
        "description": "让ChatGPT修改英语文章",
        "url": "https://www.editgpt.app",
        "category": "AI写作工具",
        "tags": ["写作AI","英文润色","editGPT"]
    },
    {
        "name": "jenni",
        "description": "面向作家的AI协作助手",
        "url": "https://jenni.ai",
        "category": "AI写作工具",
        "tags": ["写作AI","协作写作","jenni"]
    },
    {
        "name": "Effidit写作助手",
        "description": "腾讯AI Lab开发的AI写作助手，轻松高效完成写作",
        "url": "https://effidit.qq.com",
        "category": "AI写作工具",
        "tags": ["写作AI","腾讯","Effidit"]
    },
    {
        "name": "Co Writer",
        "description": "AI驱动的营销内容优化工具",
        "url": "https://cowriter.org",
        "category": "AI写作工具",
        "tags": ["写作AI","营销内容","CoWriter"]
    },
    {
        "name": "墨鱼Aigc",
        "description": "AI文案写作工具，支持营销广告、文案、原创文章自动写作",
        "url": "http://www.moyuai.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","文案写作","墨鱼AIGC"]
    },
    {
        "name": "YYW.AI",
        "description": "YYW.AI确实比chatgpt更懂你",
        "url": "https://yyw.ai",
        "category": "AI写作工具",
        "tags": ["写作AI","写作助手","YYW.AI"]
    },
    {
        "name": "笔尖AI写作",
        "description": "AI智能写作，轻松原创的在线生成器",
        "url": "https://www.bijianxiezuo.com",
        "category": "AI写作工具",
        "tags": ["写作AI","原创写作","笔尖"]
    },
    {
        "name": "Paperpal",
        "description": "面向科研人员的AI写作工具",
        "url": "https://www.editage.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","科研写作","Paperpal"]
    },
    {
        "name": "星火网文助手",
        "description": "免费AI小说网文写作工具",
        "url": "https://writersdesk.net",
        "category": "AI写作工具",
        "tags": ["写作AI","网文写作","星火网文"]
    },
    {
        "name": "光速写作",
        "description": "作业帮旗下推出的AI写作工具",
        "url": "https://guangsuxie.com",
        "category": "AI写作工具",
        "tags": ["写作AI","作业帮","光速写作"]
    },
    {
        "name": "新华妙笔",
        "description": "新华社推出的AI公文写作平台",
        "url": "https://miaobi.xinhuaskl.com",
        "category": "AI写作工具",
        "tags": ["写作AI","公文写作","新华"]
    },
    {
        "name": "万能小in",
        "description": "AI写作助手，3分钟5万字论文 初稿一键生成",
        "url": "https://xiaoin.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","论文生成","小in"]
    },
    {
        "name": "讯飞公文写作助手",
        "description": "国产大模型AI公文写作工具",
        "url": "https://gw.iflydocs.com",
        "category": "AI写作工具",
        "tags": ["写作AI","公文写作","讯飞"]
    },
    {
        "name": "FlowUs AI",
        "description": "在线文档平台息流推出的AI创作助手",
        "url": "https://flowus.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","在线文档","FlowUs"]
    },
    {
        "name": "Bearly",
        "description": "英文阅读写作效率提高10倍",
        "url": "https://bearly.ai",
        "category": "AI写作工具",
        "tags": ["写作AI","效率工具","Bearly"]
    },
    {
        "name": "爱改写",
        "description": "科研工作者的AI文字生产力工具",
        "url": "https://www.aigaixie.com",
        "category": "AI写作工具",
        "tags": ["写作AI","改写工具","科研"]
    },
    {
        "name": "ClosersCopy",
        "description": "AI文案写作机器人",
        "url": "https://www.closerscopy.com",
        "category": "AI写作工具",
        "tags": ["写作AI","文案机器人","ClosersCopy"]
    },
    {
        "name": "Smodin Al Research Paper",
        "description": "Smodin推出的AI研究论文写作工具",
        "url": "https://smodin.io",
        "category": "AI写作工具",
        "tags": ["写作AI","研究论文","Smodin"]
    },
    {
        "name": "Elephas",
        "description": "与Mac、iPhone、iPad集成的个人写作助手",
        "url": "https://elephas.com",
        "category": "AI写作工具",
        "tags": ["写作AI","多端集成","Elephas"]
    },
    {
        "name": "PaperBetter Al",
        "description": "AI论文写作工具，一键生成万字初稿",
        "url": "http://www.ai.paperbetter.com",
        "category": "AI写作工具",
        "tags": ["写作AI","论文初稿","PaperBetter"]
    },
    {
        "name": "讯飞AI免费写作",
        "description": "通用文章5分钟生成，深度稿件编辑效率翻番",
        "url": "https://turbodesk.xfyun.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","快速生成","讯飞"]
    },
    {
        "name": "AI新媒体文章",
        "description": "夸克出品，适合新媒体AI生文",
        "url": "https://vt.quark.cn",
        "category": "AI写作工具",
        "tags": ["写作AI","新媒体写作","夸克"]
    },
    {
        "name": "凹凸工坊",
        "description": "一键生成手写文稿",
        "url": "www.autohanding.com",
        "category": "AI写作工具",
        "tags": ["写作AI","手写生成","凹凸工坊"]
    },
    {
        "name": "智写流程",
        "description": "自动捕捉网页操作生成清晰图文教程的AI工具",
        "url": "https://www.igenflow.com",
        "category": "AI写作工具",
        "tags": ["写作AI","流程文档","操作指南"]
    },
    {
        "name": "掌桥科研AI论文",
        "description": "依托3亿+真实文献库的AI论文写作工具",
        "url": "https://www.zhangqiaokeyan.com",
        "category": "AI写作工具",
        "tags": ["写作AI","文献库","掌桥科研"]
    },
    {
        "name": "Galileo AI",
        "description": "AI生成可编辑的UI界面",
        "url": "https://www.usegalileo.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","UI设计","界面生成"]
    },
    {
        "name": "Uizard",
        "description": "设计界 ChatGPT！利用AI生成多屏的UI界面",
        "url": "https://uizard.io",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","UI设计","界面生成"]
    },
    {
        "name": "Designs.ai",
        "description": "AI设计工具",
        "url": "https://designs.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","设计工具"]
    },
    {
        "name": "Looka",
        "description": "AI辅助logo和品牌设计",
        "url": "https://looka.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo设计","品牌设计"]
    },
    {
        "name": "Noya",
        "description": "让线框图变成高保真设计",
        "url": "https://www.noya.io",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","线框图","高保真设计"]
    },
    {
        "name": "PLUG AI",
        "description": "AI辅助包装设计！并对包装方案生成分析评估",
        "url": "https://hp.package-ai.jp",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","包装设计","分析评估"]
    },
    {
        "name": "Huemint",
        "description": "推荐！用AI自定义和谐配色",
        "url": "https://huemint.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","配色","和谐配色"]
    },
    {
        "name": "青椒云",
        "description": "专注AI及设计领域的云桌面云电脑平台",
        "url": "http://account.qingjiaocloud.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","云桌面","设计平台"]
    },
    {
        "name": "燕雀光年AiLogo设计",
        "description": "国内最好用的品牌LOGO在线设计平台，线上线下可商用",
        "url": "https://www.yanqueai.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo设计","品牌设计"]
    },
    {
        "name": "Superflow",
        "description": "AI辅助高效网站协作设计",
        "url": "https://www.usesuperflow.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","网站设计","协作设计"]
    },
    {
        "name": "Digram",
        "description": "让Figma更好用的AI神器",
        "url": "https://diagram.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Figma","设计工具"]
    },
    {
        "name": "Logoai",
        "description": "利用AI来设计你喜欢的Logo和品牌",
        "url": "https://www.logoai.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo设计","品牌设计"]
    },
    {
        "name": "Daft Art",
        "description": "AI专辑封面图片生成器",
        "url": "https://www.daftart.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","专辑封面","图片生成"]
    },
    {
        "name": "Logomaster.ai",
        "description": "AI Logo生成工具",
        "url": "https://logomaster.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo生成","设计工具"]
    },
    {
        "name": "Creatie.ai",
        "description": "一键即出UI作品，绝美界面惊艳全场",
        "url": "https://creatie.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","UI设计","界面生成"]
    },
    {
        "name": "QoQo",
        "description": "推荐！AI快速创建用户旅程地图",
        "url": "https://qoqo.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","用户旅程","地图设计"]
    },
    {
        "name": "Visily",
        "description": "实用！AI轻松将手绘线框转换为高保真度",
        "url": "https://www.visily.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","线框转换","高保真设计"]
    },
    {
        "name": "Microsoft Designer",
        "description": "用于创建任意类型的图像设计的工具",
        "url": "https://designer.microsoft.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","图像设计","设计工具"]
    },
    {
        "name": "Stylar",
        "description": "一站式AI图像编辑和设计工具",
        "url": "https://www.stylar.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","图像编辑","设计工具"]
    },
    {
        "name": "Kittl",
        "description": "AI驱动的平面图形设计工具",
        "url": "https://www.kittl.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","平面设计","图形设计"]
    },
    {
        "name": "Krea Al",
        "description": "AI创意设计平台，实时AI图像生成和编辑",
        "url": "https://www.krea.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","创意设计","图像生成"]
    },
    {
        "name": "Pixso AI",
        "description": "国产在线设计工具Pixso的内置AI助手，支持AI文生图、AI对话、AI设计等",
        "url": "https://pixso.cn",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Pixso","设计助手"]
    },
    {
        "name": "MasterGo Al",
        "description": "国产产品设计工具MasterGo推出的智能UI设计助手",
        "url": "https://mastergo.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","MasterGo","UI设计"]
    },
    {
        "name": "智绘设计",
        "description": "腾讯推出的智能设计平台，让内容更精彩",
        "url": "https://taishan.qq.com",
        "category": "AI设计工具",
        "tags": ["设计AI","智能","腾讯"]
    },
    {
        "name": "鹿班",
        "description": "阿里推出的智能设计商品图和海报的平台",
        "url": "https://luban.aliyun.com",
        "category": "AI设计工具",
        "tags": ["设计AI","智能","阿里"]
    },
    {
        "name": "即时AI",
        "description": "即时设计推出的由文本描述生成可编辑的原型设计稿",
        "url": "https://jsai.cc",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","即时设计","原型设计"]
    },
    {
        "name": "Logo Diffusion",
        "description": "AI驱动的Logo和标志生成工具",
        "url": "https://logodiffusion.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo生成","标志设计"]
    },
    {
        "name": "LogoliveryAl",
        "description": "免费的AILogo生成器，提供SVG矢量格式",
        "url": "https://logolivery.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo生成","SVG"]
    },
    {
        "name": "千图设计室AI海报",
        "description": "免费批量生成在线可编辑的AI海报工具",
        "url": "https://hihaibao.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","海报生成","批量生成"]
    },
    {
        "name": "标小智",
        "description": "超过500万用户的AI智能logo设计神器",
        "url": "https://www.logosc.cn",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","Logo设计","智能设计"]
    },
    {
        "name": "字体家AI神笔",
        "description": "造字神器！ 仅需8个汉字即可生成一套6K+中文字库",
        "url": "https://www.ai.zitijia.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","字体生成","中文字库"]
    },
    {
        "name": "AIcolors",
        "description": "推荐！根据文本生成调色板，提供配色案例参考",
        "url": "https://aicolors.co",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","调色板","配色参考"]
    },
    {
        "name": "ImgCreator",
        "description": "超赞的多合一AI设计工具，超强的背景生成、海报生成能力",
        "url": "https://imgcreator.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","背景生成","海报生成"]
    },
    {
        "name": "ImageCreator",
        "description": "推荐！PS中免费使用的SD神级插件",
        "url": "https://imagecreator.alkaidvision.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","PS插件","SD插件"]
    },
    {
        "name": "Alpaca",
        "description": "个性化的AI工具包，可接入Ps的SD绘画插件",
        "url": "https://www.alpacaml.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","PS插件","绘画工具"]
    },
    {
        "name": "Flair AI",
        "description": "你的私人AI设计师！一键生成精美产品照片",
        "url": "https://flair.ai",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","产品照片","设计师"]
    },
    {
        "name": "Fabrie Al",
        "description": "可帮助设计师管理所有文档、客户对话、创建情绪板并随时随地审查设计",
        "url": "https://www.fabrie.cn",
        "category": "AI设计工具",
        "tags": ["设计AI","文档","情绪板"]
    },
    {
        "name": "羚珑",
        "description": "京东推出的商品图智能设计小工具",
        "url": "https://ling.jd.com",
        "category": "AI设计工具",
        "tags": ["设计AI","工具","智能"]
    },
    {
        "name": "图宇宙",
        "description": "高品质AI智能设计平台",
        "url": "https://www.nolibox.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","智能"]
    },
    {
        "name": "灵动AI",
        "description": "专业的AI商品图生成工具",
        "url": "https://www.redoon.cn",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","商品图"]
    },
    {
        "name": "PhotoMagic",
        "description": "AI快速生成商拍图片",
        "url": "https://www.photomagic.cn",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","商拍图片"]
    },
    {
        "name": "居然设计家",
        "description": "居然之家联合阿里推出的AI家装设计平台",
        "url": "https://www.shejijia.com",
        "category": "AI设计工具",
        "tags": ["设计AI","AI","家装设计"]
    },
    {
        "name": "Holopix AI",
        "description": "专为游戏、动漫、插画设计打造的AI设计平台",
        "url": "https://holopix.cn",
        "category": "AI设计工具",
        "tags": ["设计AI","AI"]
    },
    {
        "name": "GET3D",
        "description": "Nvidia的2D转3D模型",
        "url": "https://nv-tlabs.github.io",
        "category": "3D AI",
        "tags": ["3D AI","2D转3D"]
    },
    {
        "name": "3DFY AI",
        "description": "AI创建大规模高质量的3D资产",
        "url": "https://3dfy.ai",
        "category": "3D AI",
        "tags": ["3D AI","3D资产"]
    },
    {
        "name": "Sloyd",
        "description": "快速生成3D游戏资产",
        "url": "https://www.sloyd.ai",
        "category": "3D AI",
        "tags": ["3D AI","游戏资产"]
    },
    {
        "name": "DreamFusion",
        "description": "谷歌推出的文本转3D模型",
        "url": "https://dreamfusion3d.github.io",
        "category": "3D AI",
        "tags": ["3D AI","文本转3D"]
    },
    {
        "name": "Ponzu",
        "description": "AI生成3D无缝贴图纹理",
        "url": "https://www.ponzu.gg",
        "category": "3D AI",
        "tags": ["3D AI","贴图纹理"]
    },
    {
        "name": "Text to Skybox",
        "description": "推荐！AI生成360°无缝环境贴图",
        "url": "https://skybox.blockadelabs.com",
        "category": "3D AI",
        "tags": ["3D AI","Skybox"]
    },
    {
        "name": "Poly",
        "description": "根据文本生成3D材质",
        "url": "https://withpoly.com",
        "category": "3D AI",
        "tags": ["3D AI","3D材质"]
    },
    {
        "name": "Plasmo",
        "description": "将草图转为3D模型",
        "url": "https://www.plasmo.ai",
        "category": "3D AI",
        "tags": ["3D AI","草图转3D"]
    },
    {
        "name": "Cascadeur",
        "description": "AI辅助制作3D关键帧动画",
        "url": "https://cascadeur.com",
        "category": "3D AI",
        "tags": ["3D AI","关键帧动画"]
    },
    {
        "name": "KAEDIM",
        "description": "帮你迅速生成3D模型及纹理",
        "url": "https://www.kaedim3d.com",
        "category": "3D AI",
        "tags": ["3D AI","3D模型","纹理"]
    },
    {
        "name": "Plask",
        "description": "AI捕捉运动！帮你制作流畅的3D动画",
        "url": "https://plask.ai",
        "category": "3D AI",
        "tags": ["3D AI","动捕"]
    },
    {
        "name": "DeepMotion",
        "description": "利用 AI 支持的无标记运动捕捉和实时 3D 身体跟踪来分析人体运动并创建逼真的 3D 模型",
        "url": "https://www.deepmotion.com",
        "category": "3D AI",
        "tags": ["3D AI","动捕","身体跟踪"]
    },
    {
        "name": "Rokoko",
        "description": "AI 视频转 3D 生成器，可以从多个来源访问动作捕捉并创建令人惊叹的 3D 模型",
        "url": "https://www.rokoko.com",
        "category": "3D AI",
        "tags": ["3D AI","视频转3D"]
    },
    {
        "name": "Move.AI",
        "description": "简化动作捕捉过程，从视频中捕获动作并将其转换为 3D 模型",
        "url": "https://www.move.ai",
        "category": "3D AI",
        "tags": ["3D AI","动捕"]
    },
    {
        "name": "LALAL.AI",
        "description": "AI人声乐器分离和提取",
        "url": "https://www.lalal.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Audo Studio",
        "description": "AI音频清洗工具（噪音消除、声音平衡、音量调节）",
        "url": "https://audo.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Krisp",
        "description": "AI噪音消除工具",
        "url": "https://krisp.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "网易天音",
        "description": "网易出品！一站式AI编曲渲染导出，零基础写歌",
        "url": "https://tianyin.163.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Riffusion",
        "description": "AI生成不同风格的音乐",
        "url": "https://www.riffusion.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "讯飞智作",
        "description": "科大讯飞推出的AI转语音和配音工具",
        "url": "https://peiyin.xunfei.cn",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Voice.ai",
        "description": "可以创建和修改任何声音的在线人工智能语音转换器",
        "url": "https://voice.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","智能"]
    },
    {
        "name": "Soundraw",
        "description": "用AI制作免费的音乐",
        "url": "https://soundraw.io",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "微软文字转语音",
        "description": "微软文本转语音，支持选择多种语音风格，可调节语速",
        "url": "https://azure.microsoft.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "AI Song Maker",
        "description": "AI音乐生成器轻松生成歌曲和创作音乐",
        "url": "https://www.aisongmaker.io",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Resemble.ai",
        "description": "AI人声生成工具",
        "url": "https://www.resemble.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "IBM Watson文字转语音",
        "description": "IBM Watson文字转语音",
        "url": "https://www.ibm.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "FakeYou",
        "description": "Deep Fake文本转语音，可以生成多种语言和声音的音频剪辑",
        "url": "https://fakeyou.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "AssemblyAI",
        "description": "转录和理解语音的AI模型",
        "url": "https://www.assemblyai.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "NaturalReader",
        "description": "AI文本转语音工具，支持 99+ 种语言",
        "url": "https://www.naturalreaders.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Lemonaid",
        "description": "为音乐人提供音乐灵感的AI生成工具网站",
        "url": "https://lemonaid.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Boomy",
        "description": "使用人工智能技术帮助用户快速创建和分享音乐",
        "url": "https://boomy.com",
        "category": "AI音频工具",
        "tags": ["音频AI","智能"]
    },
    {
        "name": "LOVO AI",
        "description": "可为 100 种语言提供逼真的 AI 语音，适用于各种用例，例如营销、教育、游戏等",
        "url": "https://lovo.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Typecast",
        "description": "在线AI文字转语音生成工具，一款简单易用的人工智能音频和视频转换器，可提供卓越的准确性、速度和高级功能",
        "url": "https://typecast.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具","智能"]
    },
    {
        "name": "Veed AI Voice Generator",
        "description": "Veed推出的AI语音生成器",
        "url": "https://www.veed.io",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Clipchamp AI旁白生成器",
        "description": "Clipchamp的文字转语音生成器",
        "url": "https://clipchamp.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "MetaVoice",
        "description": "用AI人工智能新型技术，实现超逼真声音呈现",
        "url": "https://themetavoice.xyz",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","智能"]
    },
    {
        "name": "Speechify",
        "description": "超2000万人都在用的文字转语音朗读器",
        "url": "https://speechify.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "Voicemaker",
        "description": "可以使用文本到语音转换器和人工智能技术，为您的视频、音频、游戏等内容创建自然的配音",
        "url": "https://voicemaker.in",
        "category": "AI音频工具",
        "tags": ["音频AI","智能"]
    },
    {
        "name": "Listnr",
        "description": "拥有一个包含900多种语言和方言的声音库，使用户可以轻松地将文本转换为逼真的AI语音",
        "url": "https://www.listnr.tech",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Voicemod",
        "description": "免费的实时语音变换器和声音板，适用于Windows和macOS",
        "url": "https://www.voicemod.net",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "WellSaid Labs",
        "description": "可在几秒钟内将文本转换为画外音，提供 50 多种高质量合成语音",
        "url": "https://wellsaidlabs.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "Play",
        "description": "根据文本生成多种逼真的语音",
        "url": "https://play.ht",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "BeatBot",
        "description": "AI音乐制作工具，可以帮助用户创作个性化的音乐",
        "url": "https://beatbot.fm",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Mubert",
        "description": "1分钟内生成AI背景音乐",
        "url": "https://mubert.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Uberduck",
        "description": "开源的AI语音生成平台",
        "url": "https://uberduck.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "TTSMaker",
        "description": "TTSMaker是一个免费的文本转语音工具，提供语音合成服务，支持多种语言。",
        "url": "https://ttsmaker.com",
        "category": "AI音频工具",
        "tags": ["音频AI","工具"]
    },
    {
        "name": "ElevenLabs",
        "description": "十一实验室-语音人工智能，使用最先进的多用途AI 语音工具，以任何声音和风格生成高质量的语音音频。",
        "url": "https://beta.elevenlabs.io",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具","智能"]
    },
    {
        "name": "Ondoku",
        "description": "语音朗读软件Ondoku。这是一种无需安装，任何人都可以免费使用的语音朗读服务。",
        "url": "https://ondoku3.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "koolio.ai",
        "description": "koolio.ai可以让你在几分钟内把一个概念变成一个完整的播客。我们帮助您编辑播客，轻松制作优质内容。无论是转录音频，与他人合作，根据上下文自动选择音效或音乐来增强播客。",
        "url": "https://www.koolio.ai",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "人声去除",
        "description": "用强大的人工智能算法将声音从音乐中分离出来",
        "url": "https://vocalremover.org",
        "category": "AI音频工具",
        "tags": ["音频AI","智能"]
    },
    {
        "name": "Stable Audio",
        "description": "Stability Al最新推出的音乐生成工具",
        "url": "https://www.stableaudio.com",
        "category": "AI音频工具",
        "tags": ["音频AI","工具"]
    },
    {
        "name": "Speaking AI",
        "description": "一键克隆！效果真实的文本转语音神器",
        "url": "https://speaking.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "海绵音乐",
        "description": "字节跳动推出的免费AI音乐创作和发现平台",
        "url": "https://www.haimian.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Wondercraft",
        "description": "AI音频内容生成工具，可创建播客有声书等",
        "url": "https://www.wondercraft.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Suno",
        "description": "高质量的AI音乐创作平台",
        "url": "https://www.suno.cn",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "琅琅配音",
        "description": "智能文本转语音工具",
        "url": "https://lang123.top",
        "category": "AI音频工具",
        "tags": ["音频AI","工具","智能"]
    },
    {
        "name": "Sonauto",
        "description": "免费的AI音乐生成和歌曲创作工具",
        "url": "https://sonauto.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "天工SkyMusic",
        "description": "昆仑万维发布的国内首个AI音乐生成大模型",
        "url": "https://music.tiangong.cn",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "魔音工坊",
        "description": "AI配音软件，轻松配出媲美真人的声音",
        "url": "https://www.moyin.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "大饼AI变声",
        "description": "免费专业的AI变声软件，一键实时语音变声",
        "url": "https://dubbing.tech",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Supertone Shift",
        "description": "AI驱动的实时语音变换软件",
        "url": "https://product.supertone.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Adobe Podcast",
        "description": "Adobe推出的在线AI音频录制和编辑工具",
        "url": "https://podcast.adobe.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "网易云音乐·X Studio",
        "description": "网易云音乐与小冰智能联合推出的免费AI歌手音乐创作软件",
        "url": "https://xstudio.music.163.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","智能"]
    },
    {
        "name": "听脑AI",
        "description": "人工智能语音录音记录助手",
        "url": "https://itingnao.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","智能","助手"]
    },
    {
        "name": "Voicenotes",
        "description": "AI驱动的语音笔记工具",
        "url": "https://voicenotes.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "OptimizerAl",
        "description": "AI声音效果生成工具",
        "url": "https://www.optimizerai.xyz",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "ACE Studio",
        "description": "AI歌声合成工具，输入歌词与旋律即可生成宛如真人的歌声",
        "url": "https://ace-studio.timedomain.cn",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "蓝藻AI",
        "description": "云知声旗下的AI配音和声音克隆平台",
        "url": "https://aigc.unisound.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Reecho睿声",
        "description": "超拟真的中英文AI语音克隆/生成平台",
        "url": "https://www.reecho.cn",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Deepgram",
        "description": "快速低成本的AI语音文本互转API平台",
        "url": "https://deepgram.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Audiobox",
        "description": "Meta推出的免费开源的AI语音和声音生成模型",
        "url": "https://audiobox.metademolab.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "BGM猫",
        "description": "灵动音科技推出的AI智能生成BGM音乐",
        "url": "https://bgmcat.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","智能"]
    },
    {
        "name": "快转字幕",
        "description": "AI语音视频转文字和字幕的工具",
        "url": "https://www.kzzimu.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "悦音配音",
        "description": "AI智能在线配音语音合成工具",
        "url": "https://yueyin.zhipianbang.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具","智能"]
    },
    {
        "name": "Beatoven.ai",
        "description": "免版税AI音乐创建平台",
        "url": "https://www.beatoven.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "通义听悟",
        "description": "聚焦音视频内容的工作学习AI助手",
        "url": "https://tingwu.aliyun.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","助手"]
    },
    {
        "name": "Notta",
        "description": "AI在线将语音转换成文字",
        "url": "https://www.notta.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "音虫",
        "description": "用于音乐编曲和录音的软件， 致力于帮助更多的音乐爱好者体会音乐创作的乐趣",
        "url": "https://www.soundbug.com",
        "category": "AI音频工具",
        "tags": ["音频AI"]
    },
    {
        "name": "音疯",
        "description": "昆仑万维推出的AI音乐创作平台，一键生成原创歌曲",
        "url": "https://www.yinfeng.cn",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Memo Al",
        "description": "免费的AI语音转文字工具",
        "url": "https://memo.ac",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Fryderyk",
        "description": "AI音乐创作工具，集成了多种乐器声音",
        "url": "https://fryderyk.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "刺鸟配音",
        "description": "刺鸟科技推出的专业AI配音工具",
        "url": "https://www.icnpy.com",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "TextToSpeech",
        "description": "完全免费的AI文字转语音工具",
        "url": "https://texttospeech.im",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Lyrics Into Song Al",
        "description": "在线AI音乐创作工具，输入歌词创建个性化歌曲",
        "url": "https://lyricsintosong.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Rask",
        "description": "领先的AI视频本地化和配音工具",
        "url": "https://zh.rask.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "MiniMax Audio",
        "description": "MiniMax推出的AI语音合成工具，支持声音克隆",
        "url": "https://www.minimax.io",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Mureka",
        "description": "昆仑万维推出的 AI 音乐商用创作平台",
        "url": "https://www.mureka.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI"]
    },
    {
        "name": "Noiz Al",
        "description": "AI配音工具，支持文本转语音和声音克隆",
        "url": "https://noiz.ai",
        "category": "AI音频工具",
        "tags": ["音频AI","AI","工具"]
    },
    {
        "name": "Synthesia",
        "description": "AI视频生成平台",
        "url": "https://www.synthesia.io",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "SoraBox",
        "description": "创意视频和提示词，每日更新官方和用户生成的视频&提示词",
        "url": "https://sorabox.ai",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "Lumen5",
        "description": "AI将博客文章转换成视频",
        "url": "https://lumen5.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Pictory",
        "description": "AI视频制作工具",
        "url": "https://pictory.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Fliki",
        "description": "高效帮用户创建视频，具有文本转语音功能",
        "url": "https://fliki.ai",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "DeepBrain",
        "description": "AI视频生成工具",
        "url": "https://www.deepbrain.io",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "腾讯智影",
        "description": "腾讯推出的在线智能视频创作平台",
        "url": "https://zenvideo.qq.com",
        "category": "AI视频工具",
        "tags": ["视频AI","智能"]
    },
    {
        "name": "闪剪AI数字人",
        "description": "AI数字人短视频营销创作工具",
        "url": "https://shanjian.tv",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "AIGC工具一帧秒创",
        "description": "一键图文转视频，生成AI数字人，零门槛创作",
        "url": "https://aigc.yizhentv.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "VidAU AI",
        "description": "视频换脸、视频翻译、AI数字人、字幕翻译",
        "url": "https://www.vidau.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","翻译"]
    },
    {
        "name": "AIMIX智剪",
        "description": "AIGC电商内容生成平台，集混剪、文案、字幕、语音合成等功能，助力短电商运营",
        "url": "https://www.aimix.pro",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","电商","运营"]
    },
    {
        "name": "怪兽AI数字人",
        "description": "实时交互数字人直播，数字人短视频创作",
        "url": "https://www.guaishouai.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "快创3D秀",
        "description": "高效易用的AI三维动画制作平台",
        "url": "https://www.quick3dshow.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "万兴播爆（AI数字人）",
        "description": "3分钟完成一条出海营销视频",
        "url": "https://virbo.wondershare.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Unscreen",
        "description": "AI智能视频背景移除工具",
        "url": "https://www.unscreen.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","智能"]
    },
    {
        "name": "有言3D视频",
        "description": "一站式AI视频创作和3D数字人生成平台",
        "url": "https://youyan.xyz",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "千面视频动捕",
        "description": "上传一段视频生成3D动作数据",
        "url": "https://www.qmai.vip",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "DreamFace",
        "description": "让图片动起来的AI工具",
        "url": "https://dreamfaceapp.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Rephrase.ai",
        "description": "AI文字到视频生成",
        "url": "https://www.rephrase.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Synthesys",
        "description": "AI虚拟人出镜讲解",
        "url": "https://synthesys.io",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Hour One",
        "description": "人工智能文字到视频生成",
        "url": "https://hourone.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","智能"]
    },
    {
        "name": "BgRem",
        "description": "无水印AI视频背景移除",
        "url": "https://bgrem.deelvin.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Colourlab.ai",
        "description": "好莱坞也在用的AI视频颜色分级工具",
        "url": "https://colourlab.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Colossyan",
        "description": "AI虚拟人出镜视频生成",
        "url": "https://www.colossyan.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "AVCLabs",
        "description": "AI自动移除视频背景",
        "url": "https://app.avclabs.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Movio",
        "description": "AI真人出镜视频讲解",
        "url": "https://www.movio.la",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Elai.io",
        "description": "AI文本到视频生成工具",
        "url": "https://elai.io",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "SteveAI",
        "description": "Animaker旗下AI在线视频制作工具",
        "url": "https://www.steve.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Wonder Studio",
        "description": "真人表演自动转换为CG",
        "url": "https://wonderdynamics.com",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "Chat YouTube",
        "description": "Chat with anyYouTube video",
        "url": "https://chatyoutube.com",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "BibiGPT",
        "description": "一键总结B站音视频内容",
        "url": "https://b.jimmylv.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","总结"]
    },
    {
        "name": "鬼手剪辑GhostCut",
        "description": "AI视频翻译&字幕擦除工具",
        "url": "https://cn.jollytoday.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","翻译"]
    },
    {
        "name": "Noisee Al",
        "description": "月之暗面旗下推出的AI音乐视频MV生成工具",
        "url": "https://noisee.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Hedra",
        "description": "AI对口型视频生成工具，单次可免费生成30秒的视频",
        "url": "https://www.hedra.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "KreadoAl",
        "description": "AI数字人视频营销创作平台",
        "url": "https://kreadoai.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "WinkStudio",
        "description": "美图推出的桌面端AI视频剪辑工具",
        "url": "https://wink.meitu.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "快剪辑",
        "description": "360旗下的AI视频剪辑工具，AI成片、AI数字人、智能添加字幕、去水印",
        "url": "https://www.kuaijianji.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","智能"]
    },
    {
        "name": "Stable Video",
        "description": "Stability Al上线的AI视频生成工具",
        "url": "https://www.stablevideo.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "即创",
        "description": "抖音推出的一站式智能创作平台，支持视频、图文和直播创作",
        "url": "https://aic.oceanengine.com",
        "category": "AI视频工具",
        "tags": ["视频AI","智能"]
    },
    {
        "name": "度加创作工具",
        "description": "百度官方出品的AIGC创作平台",
        "url": "https://aigc.baidu.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "可灵大模型",
        "description": "快手推出的视频生成大模型，可生成2分钟的视频",
        "url": "https://kling.kuaishou.com",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "Viva",
        "description": "免费的AI视频生成和图像创作平台",
        "url": "https://vivago.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "曦灵",
        "description": "百度推出的AI数字人和视频创作平台",
        "url": "https://xiling.cloud.baidu.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "寻光",
        "description": "阿里达摩院推出的全流程AI视频创作平台",
        "url": "https://xunguang.damo-vision.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Duix",
        "description": "硅基智能推出的AI数字人生成平台",
        "url": "https://www.duix.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","智能"]
    },
    {
        "name": "MOKI",
        "description": "美图推出的AI视频短片创作工具",
        "url": "https://www.moki.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Vimi",
        "description": "商汤科技推出的可控人物视频生成AI模型",
        "url": "https://www.sensetime.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Viggle",
        "description": "AI生成角色动态视频的工具",
        "url": "https://viggle.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Spikes Studio",
        "description": "AI自动将长视频切片剪辑为短视频",
        "url": "https://www.spikes.studio",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Google Vids",
        "description": "谷歌推出的AI视频创作工具",
        "url": "https://workspace.google.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "DomoAl",
        "description": "一键将照片和视频动漫化的AI工具",
        "url": "https://domoai.app",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Gatekeep",
        "description": "AI教学视频生成工具，可生成数学物理问题解释视频",
        "url": "https://gatekeep.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Morph Studio",
        "description": "高质量的AI文本到视频生成工具",
        "url": "https://www.morphstudio.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Haiper",
        "description": "AI视频生成和重绘工具，支持文本/图像转视频",
        "url": "https://haiper.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "星火绘镜",
        "description": "科大讯飞推出的AI短视频创作平台",
        "url": "https://typemovie.art",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Showrunner",
        "description": "AI动画视频剧集生成工具",
        "url": "https://www.showrunner.xyz",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "即构数智人",
        "description": "即构科技推出的AI数字人创作平台",
        "url": "https://aigc.zego.im",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "蝉镜",
        "description": "AI数字人视频生成平台",
        "url": "https://www.chanjing.cc",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Magicam",
        "description": "实时的AI直播/视频换脸工具",
        "url": "https://magicam.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "即梦AI",
        "description": "一站式AI创作平台，支持AI图片和视频生成",
        "url": "https://jimeng.jianying.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "PixVerse",
        "description": "爱诗科技推出的AI视频生成工具",
        "url": "https://pixverse.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Vidu",
        "description": "生数科技与清华大学联合发布的AI视频大模型",
        "url": "https://www.vidu.studio",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Vozo",
        "description": "集一键重写脚本、配音、对口型、翻译于一体的AI视频编辑工具",
        "url": "https://www.vozo.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","翻译"]
    },
    {
        "name": "Tavus",
        "description": "AI视频生成平台，支持数字人克隆和实时对话",
        "url": "https://www.tavus.io",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "SkyReels",
        "description": "昆仑万维推出的全球首个AI短剧创作平台",
        "url": "https://skyreels.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Vizard",
        "description": "将长视频转换为社交短视频片段的AI视频工具",
        "url": "https://vizard.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Hotshot",
        "description": "AI视频生成工具，将文本转为3秒逼真视频",
        "url": "https://hotshot.co",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Adsdog",
        "description": "专为跨境电商卖家设计的AI营销工具",
        "url": "https://ai-bot.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","跨境","电商"]
    },
    {
        "name": "YoYo",
        "description": "专注于动漫垂类的AIGC创作工具",
        "url": "https://avolutionai.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Pixfun",
        "description": "一站式动画故事AI视频生成平台",
        "url": "https://pixfun.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Opus Clip",
        "description": "人工智能视频剪辑工具",
        "url": "https://www.opus.pro",
        "category": "AI视频工具",
        "tags": ["视频AI","工具","智能"]
    },
    {
        "name": "Filmora",
        "description": "一款简单的视频编辑器，可让您在 Windows 和 Mac 上编辑视频和音频",
        "url": "https://filmora.wondershare.com",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "巨日禄",
        "description": "一款强大的文本转视频生成神器，帮助用户将文字内容快速转换为令人惊艳的视频",
        "url": "https://ai.jurilu.com",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "Descript",
        "description": "一款由人工智能驱动、功能齐全的端到端视频编辑器",
        "url": "https://www.descript.com",
        "category": "AI视频工具",
        "tags": ["视频AI","智能"]
    },
    {
        "name": "开拍",
        "description": "用AI制作口播视频的生产力工具",
        "url": "https://www.kaipai.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "场辞",
        "description": "新片场推出的AI视频字幕制作工具",
        "url": "https://trans.xinpianchang.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "一起剪",
        "description": "AI短视频创作平台，图文一键成片",
        "url": "https://www.yiqijian.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "LTX Studio",
        "description": "AI电影制作和视频短片生成平台",
        "url": "https://ltx.studio",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Clipfly",
        "description": "一站式AI长视频制作和编辑平台",
        "url": "https://www.clipfly.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Captions",
        "description": "AI驱动的视频剪辑和制作平台",
        "url": "https://www.captions.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Capsule",
        "description": "A驱动的在线视频剪辑工具，个人和小团队免费",
        "url": "https://capsule.video",
        "category": "AI视频工具",
        "tags": ["视频AI","工具"]
    },
    {
        "name": "EbSynth",
        "description": "A将真人视频转化为油画风动画",
        "url": "https://ebsynth.com",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "InVideo Al",
        "description": "人工智能视频创作和剪辑工具",
        "url": "https://invideo.io",
        "category": "AI视频工具",
        "tags": ["视频AI","工具","智能"]
    },
    {
        "name": "GoEnhance",
        "description": "A1视频风格转换和画质增强工具",
        "url": "https://www.goenhance.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","工具"]
    },
    {
        "name": "Artflow",
        "description": "AI创建生成视频动画",
        "url": "https://app.artflow.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Gencraft",
        "description": "AI艺术画视频生成工具",
        "url": "https://gencraft.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "模力视频",
        "description": "AI驱动的视频编辑平台",
        "url": "https://www.mooliv.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "团队快剪",
        "description": "闪剪智能专为团队带货打造的AI视频工具",
        "url": "https://teamcut.shanjian.tv",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","智能"]
    },
    {
        "name": "录咖",
        "description": "一站式AI音视频总结和转录处理工具",
        "url": "https://reccloud.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","总结"]
    },
    {
        "name": "Kaiber",
        "description": "图片文字转视频的AI引擎",
        "url": "https://kaiber.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Typeframes",
        "description": "AI快速生成高质量的产品介绍视频",
        "url": "https://www.typeframes.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Mootion",
        "description": "AI原生3D动画创作平台",
        "url": "https://mootion.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "来画",
        "description": "动画和数字人智能生成平台",
        "url": "https://www.laihua.com",
        "category": "AI视频工具",
        "tags": ["视频AI","智能"]
    },
    {
        "name": "奇妙元",
        "description": "AI数字人视频生成平台，由出门问问推出",
        "url": "https://weta365.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "绘影字幕",
        "description": "一键智能在线自动为视频加字幕",
        "url": "https://huiyingzimu.com",
        "category": "AI视频工具",
        "tags": ["视频AI","智能"]
    },
    {
        "name": "Genmo",
        "description": "更具创造性！使用文本指令编辑图像和视频",
        "url": "https://www.genmo.ai",
        "category": "AI视频工具",
        "tags": ["视频AI"]
    },
    {
        "name": "白日梦",
        "description": "AI视频创作平台，最长可生成六分钟的视频",
        "url": "https://aibrm.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "神笔马良",
        "description": "首个面向长剧本解析的动态故事板AI生成工具",
        "url": "https://shenbi.maoyan.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Video Ocean",
        "description": "潞晨科技推出的多功能AI视频生成平台",
        "url": "https://video.luchentech.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "LensGo",
        "description": "AI视频创作工具，支持视频转动漫，替换3D人物",
        "url": "https://lensgo.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "讯飞虚拟人",
        "description": "科大讯飞推出的全栈式AI虚拟人应用服务平台",
        "url": "https://virtual-man.xfyun.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Video Studio",
        "description": "在线AI视频制作工具，零编辑技能制作专业视频内容",
        "url": "https://www.vidustudio.net",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Decohere",
        "description": "AI视频生成平台，支持音频同步功能",
        "url": "https://www.decohere.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "万彩微影",
        "description": "AI智能自动生成动画短视频",
        "url": "https://www.animiz.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","智能"]
    },
    {
        "name": "飞影数字人",
        "description": "AI数字人创作平台，支持免费定制数字人",
        "url": "https://www.flyworks.live",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "艺映AI",
        "description": "AI视频创作工具，支持文生视频、因图生视频及视频转浸画功能",
        "url": "https://www.artink.art",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "OneStory",
        "description": "AI故事生成助手，创作故事和视频变得像说话一样简单",
        "url": "https://onestory.art",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","助手"]
    },
    {
        "name": "Etna",
        "description": "七火山科技推出的AI文生视频工具",
        "url": "https://etna.7volcanoes.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "VMagic",
        "description": "AI视频处理平台，提供视频风格转换、换脸、照片舞蹈等功能",
        "url": "https://www.vmagic.app",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "腾讯混元文生视频",
        "description": "腾讯推出的AI视频生成模型，能根据文本提示生成相应的视频内容",
        "url": "https://video.hunyuan.tencent.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "SoundView",
        "description": "AI视频本地化工具，支持视频配音和翻译",
        "url": "https://soundviewai.com",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具","翻译"]
    },
    {
        "name": "元镜",
        "description": "AI视频生成工具，支持从创意灵感到成品视频实现高效创作",
        "url": "https://yuanjing.zeelin.cn",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "JoyPix",
        "description": "AI数字人创作工具，支持声音克隆",
        "url": "https://www.joypix.ai",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Medeo",
        "description": "AI视频创作平台，一句话生成完整视频",
        "url": "https://www.medeo.app",
        "category": "AI视频工具",
        "tags": ["视频AI","AI"]
    },
    {
        "name": "Boba",
        "description": "AI动漫视频创作工具",
        "url": "https://www.boba.video",
        "category": "AI视频工具",
        "tags": ["视频AI","AI","工具"]
    },
    {
        "name": "Microsoft 365 Copilot",
        "description": "暂未开放！内置GPT-4的微软Office",
        "url": "https://blogs.microsoft.com",
        "category": "AI办公工具",
        "tags": ["办公AI"]
    },
    {
        "name": "Decktopus AI",
        "description": "高质量AI演示文稿生成工具",
        "url": "https://www.decktopus.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Powerpresent AI",
        "description": "AI创建精美的演示稿",
        "url": "https://present.yaara.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Beautiful.ai",
        "description": "AI创建展示幻灯片",
        "url": "https://www.beautiful.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Presentations.AI",
        "description": "演示文档版的ChatGPT",
        "url": "https://www.presentations.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档"]
    },
    {
        "name": "ProcessOn",
        "description": "AI一站式绘图平台，轻松创建思维导图流程图",
        "url": "https://www.processon.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Tome",
        "description": "先进的AI智能PPT制作工具",
        "url": "https://beta.tome.app",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具","智能"]
    },
    {
        "name": "Glimmer Ai",
        "description": "热门！基于GPT-3和DALL·E2的AI PPT知名工具",
        "url": "https://glimmerai.tech",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "WordAi",
        "description": "10倍速AI内容输出！创建读者喜爱的优质内容",
        "url": "https://wordai.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Timely",
        "description": "一款AI时间管理工具！可以帮助你更有效地管理时间",
        "url": "https://timelyapp.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "ChatBA",
        "description": "AI幻灯片生成工具",
        "url": "https://www.chatba.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Whimsical",
        "description": "Whimsical推出的AI思维导图工具",
        "url": "https://whimsical.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Ajelix",
        "description": "处理Excel和GoogleSheets表格的AI工具",
        "url": "https://ajelix.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Sheet+",
        "description": "Excel和GoogleSheets表格AI处理工具",
        "url": "https://sheetplus.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "ExcelFormulaBot",
        "description": "AI将指令转换成Excel的函数公式",
        "url": "https://excelformulabot.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Fireflies.ai",
        "description": "AI会议转录和会议纪要生成工具",
        "url": "https://fireflies.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Otter.ai",
        "description": "AI会议内容生成和实时转录",
        "url": "https://otter.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Taskade",
        "description": "高颜值AI大纲和思维导图生成",
        "url": "https://www.taskade.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "FormX.ai",
        "description": "AI自动从表格和文档中提取数据",
        "url": "https://www.formx.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档"]
    },
    {
        "name": "Rossum.ai",
        "description": "现代化的AI文档处理工具",
        "url": "https://rossum.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档","工具"]
    },
    {
        "name": "百度AI创作工具箱",
        "description": "百度大脑智能创作平台",
        "url": "https://ai.baidu.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具","智能"]
    },
    {
        "name": "万兴智演",
        "description": "万兴智演是AIGC软件A股上市公司万兴科技旗下泛知识AI视频演示工具",
        "url": "https://zhiyan.wondershare.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Zapier AI",
        "description": "赞！Zapier推出的AI自动化集成功能",
        "url": "https://zapier.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Noty AI",
        "description": "推荐！ChatGPT驱动的AI会议转录工具",
        "url": "https://noty.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "AiPPT",
        "description": "AI快速生成高质量PPT",
        "url": "https://www.aippt.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Coda Al",
        "description": "在线协作平台Coda推出的AI写作和文档助手",
        "url": "https://coda.io",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档","助手"]
    },
    {
        "name": "灵办AI",
        "description": "全能型AI浏览器扩展插件，集成了AI对话、翻译、写作、阅读、搜索和绘图等多功能",
        "url": "https://ilingban.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","阅读","翻译"]
    },
    {
        "name": "Zoom Workplace",
        "description": "Zoom推出的AI办公协作和交流沟通平台",
        "url": "https://www.zoom.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "iSlide Al",
        "description": "PPT一键生成+AI个性化编辑",
        "url": "https://www.islide.cc",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "美图AI PPT",
        "description": "美图秀秀推出的免费在线AI生成PPT设计工具",
        "url": "https://www.designkit.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "博思AI PPT",
        "description": "博思云创推出的在线AI生成PPT工具",
        "url": "https://pptgo.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Gamma App",
        "description": "AI幻灯片演示生成工具",
        "url": "https://gamma.app",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "讯飞智文",
        "description": "科大讯飞推出的免费AIPPT生成工具",
        "url": "https://zhiwen.xfyun.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "轻竹办公",
        "description": "在线智能生成和设计PPT的AI工具",
        "url": "https://www.qzoffice.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具","智能"]
    },
    {
        "name": "Chronicle",
        "description": "AI高颜值演示文稿创建",
        "url": "https://chroniclehq.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "万知",
        "description": "零一万物推出的一站式AI文档阅读和PPT创作工作台",
        "url": "https://www.wanzhi.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","阅读","文档"]
    },
    {
        "name": "Slides Al",
        "description": "AI快速创建演示幻灯片",
        "url": "https://www.slidesai.io",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "歌者AI",
        "description": "彩漩PPT推出的AIPPT生成工具",
        "url": "https://gezhe.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Auxi",
        "description": "功能强大的PowerPoint Al插件",
        "url": "https://www.auxi.ai",
        "category": "AI办公工具",
        "tags": ["办公AI"]
    },
    {
        "name": "MindShow",
        "description": "国内独立开发者开发的输入内容自动生成演示工具",
        "url": "https://www.mindshow.fun",
        "category": "AI办公工具",
        "tags": ["办公AI","工具"]
    },
    {
        "name": "Vika维格云",
        "description": "智能多维表格和数据生产力平台",
        "url": "https://vika.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","智能"]
    },
    {
        "name": "Rows",
        "description": "集成了AI功能的在线表格处理工具",
        "url": "https://rows.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "SheetGod",
        "description": "BoloForms推出的AI Excel公式生成工具",
        "url": "https://www.boloforms.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Excel Formularizer",
        "description": "AI将文本输入转换为Excel公式处理",
        "url": "https://formularizer.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "百度文库AI助手",
        "description": "基于文心一言的一站式智能文档助手",
        "url": "https://wenku.baidu.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档","智能","助手"]
    },
    {
        "name": "星火文档问答",
        "description": "基于讯飞星火大模型的AI文档和知识库问答助手",
        "url": "https://chatdoc.xfyun.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档","助手"]
    },
    {
        "name": "PMAI",
        "description": "面向产品经理的AI助手",
        "url": "https://www.pm-ai.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","助手"]
    },
    {
        "name": "知我AI",
        "description": "智能阅读机器人，AI总结文档、网页、视频、播客等",
        "url": "https://knowme.xiaoduoai.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","阅读","文档","智能","总结"]
    },
    {
        "name": "星火科研助手",
        "description": "提供文献成果调研、论文研读和学术 写作等科学研究助手功能",
        "url": "https://paperlogin.iflytek.com",
        "category": "AI办公工具",
        "tags": ["办公AI","助手"]
    },
    {
        "name": "印象AI",
        "description": "印象笔记推出的AI知识和信息管理功能",
        "url": "https://www.yinxiang.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Craft Al Assistant",
        "description": "在线文档工县Craft推出的AI文档和创作助手",
        "url": "https://www.craft.do",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档","助手"]
    },
    {
        "name": "Super Al",
        "description": "AI复杂文档自动识别处理转换",
        "url": "https://super.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","文档"]
    },
    {
        "name": "亿图脑图",
        "description": "亿图脑图AI思维导图助手",
        "url": "https://www.edrawsoft.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","助手"]
    },
    {
        "name": "Mapify",
        "description": "Xmind推出的AI思维导图生成工具",
        "url": "https://mapify.so",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "小画桌",
        "description": "在线协作白板工具，内置AIGC功能",
        "url": "https://www.xiaohuazhuo.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "知犀AI",
        "description": "知犀推出的AI思维导图生成工具",
        "url": "https://www.swdt.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Xmind Copilot",
        "description": "Xmind Al思维导图助手",
        "url": "https://xmind.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","助手"]
    },
    {
        "name": "妙办AI画图工具",
        "description": "免费一键生成流程图、思维导图",
        "url": "https://imiaoban.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "GitMind思乎",
        "description": "免费思维导图工具",
        "url": "https://gitmind.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","工具"]
    },
    {
        "name": "AmyMind",
        "description": "开箱即用的在线AI思维导图工具",
        "url": "https://amymind.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "Miro Al",
        "description": "在线白板协作工具推出的AI功能",
        "url": "https://miro.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "博思AI白板",
        "description": "AI自动生成文字和思维导图",
        "url": "https://boardmix.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "腾讯会议AI小助手",
        "description": "腾讯会议推出的AI会议内容助理",
        "url": "https://meeting.tencent.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","助手"]
    },
    {
        "name": "麦耳会记",
        "description": "思必驰推出的AI会议助手，语音转文字、字幕同传、AI摘要",
        "url": "https://work.duiopen.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","助手"]
    },
    {
        "name": "Glif",
        "description": "无代码的AI小工具构建平台",
        "url": "https://glif.app",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "BetterYeah Al",
        "description": "企业AI应用和助手构建平台",
        "url": "https://www.betteryeah.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","助手"]
    },
    {
        "name": "影刀AI Power",
        "description": "面向企业的无代码AI开发和集成平台",
        "url": "https://www.yingdao.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Anakin.ai",
        "description": "一站式无代码AI应用构建平台",
        "url": "https://anakin.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Merlin",
        "description": "基于ChatGPT的Chrome浏览器扩展，浏览任意网页时利用GPT",
        "url": "https://www.getmerlin.in",
        "category": "AI办公工具",
        "tags": ["办公AI"]
    },
    {
        "name": "Raycast Al",
        "description": "Raycast推出的Mac AI助手，智能写作、编程、回答问题等",
        "url": "https://www.raycast.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","智能","助手"]
    },
    {
        "name": "靠谱AI",
        "description": "无代码AI机器人创建平台",
        "url": "https://www.kaopuai.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "通答AI",
        "description": "企业AI数字员工生成平台",
        "url": "https://www.tongdaai.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "奇妙问",
        "description": "企业AI数字员工生成平台",
        "url": "https://aiask365.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "职徒简历",
        "description": "智能简历制作软件，基于GPT的简历优化和简历代写",
        "url": "https://www.52cv.com",
        "category": "AI办公工具",
        "tags": ["办公AI","智能"]
    },
    {
        "name": "Napkin",
        "description": "将文本内容快速转换成演示图像的AI办公工具",
        "url": "https://www.napkin.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "AI灵感PPT",
        "description": "免费高效的AIPPT生成工具",
        "url": "https://www.lgppt.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "百度GBI",
        "description": "百度推出的全球商业智能平台",
        "url": "https://gbi.cloud.baidu.com",
        "category": "AI办公工具",
        "tags": ["办公AI","智能"]
    },
    {
        "name": "轻云图",
        "description": "轻量化3D文字词云图在线生成工具",
        "url": "https://cloud.yoo-ai.com",
        "category": "AI办公工具",
        "tags": ["办公AI","工具"]
    },
    {
        "name": "北极九章",
        "description": "新一代AI对话式数据分析平台",
        "url": "https://datarc.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","分析"]
    },
    {
        "name": "Ayoa Ultimate",
        "description": "AI思维导图和头脑风暴工具",
        "url": "https://www.ayoa.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "WPS灵犀",
        "description": "WPS推出的AI智能助手",
        "url": "https://lingxi.wps.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","智能","助手"]
    },
    {
        "name": "奇觅",
        "description": "游戏广告AI制作与投放平台",
        "url": "https://qimi.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "Hoarder",
        "description": "可自托管的书签应用程序",
        "url": "https://hoarder.app",
        "category": "AI办公工具",
        "tags": ["办公AI"]
    },
    {
        "name": "司马诸葛",
        "description": "企业级AI数字员工平台",
        "url": "https://smartchoose.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "YOO简历",
        "description": "必优科技推出的AI简历生成工具",
        "url": "https://www.yoojober.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "文多多AIPPT",
        "description": "AI一键生成PPT，支持AI配图和智能资料整合",
        "url": "https://docmee.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","智能"]
    },
    {
        "name": "麦当秀Mindshow",
        "description": "AI在线PPT制作工具，支持Markdown等多种格式",
        "url": "https://www.mindshow.vip",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "熊猫办公",
        "description": "AI办公服务平台，提供PPT模板、Excel模板、Word模板等资源",
        "url": "https://www.tukuppt.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "NotebookLM",
        "description": "谷歌推出的AI笔记应用，5分钟生成一段对话播客",
        "url": "https://notebooklm.google",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "苏打办公",
        "description": "360公司推出的一站式AI办公工具",
        "url": "https://bangong.360.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "希沃白板",
        "description": "专为互动教学设计的AI课件生成器",
        "url": "https://easinote.seewo.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "GAIPPT",
        "description": "AI智能美化PPT工具，上传PPT一键美化",
        "url": "https://www.gaippt.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具","智能"]
    },
    {
        "name": "秒出PPT",
        "description": "一键生成PPT，智能辅助编辑",
        "url": "https://10sppt.com",
        "category": "AI办公工具",
        "tags": ["办公AI","智能"]
    },
    {
        "name": "蓝字典AI求职",
        "description": "AI求职工具，提供AI简历生成、AI模拟面试服务",
        "url": "https://www.lanzidian.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "神笔简历",
        "description": "AI简历云平台，专为求职者提供一站式求职服务",
        "url": "https://jianli.jiuyeqiao.cn",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "小易AI",
        "description": "易企秀推出的AI办公工具",
        "url": "https://ai.eqxiu.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "自由画布",
        "description": "百度文库和百度网盘联合推出的AI万能白板",
        "url": "https://wenku.baidu.co",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "匡优AI",
        "description": "AI出题工具，快速生成各类考试题目",
        "url": "https://ai.kyou.ltd",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "咔片PPT",
        "description": "AI PPT制作工具，设计美化全流程自动化",
        "url": "https://www.cappt.cc",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","工具"]
    },
    {
        "name": "无阶未来",
        "description": "AI应用与弹性算网平台",
        "url": "https://www.aivinla.com",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "UP简历",
        "description": "AI聊天搞定简历",
        "url": "https://www.upcv.tech",
        "category": "AI办公工具",
        "tags": ["办公AI","AI"]
    },
    {
        "name": "爱图表",
        "description": "镝数科技推出的A数据可视化和分析工具",
        "url": "https://aitubiao.com",
        "category": "AI办公工具",
        "tags": ["办公AI","工具","分析"]
    },
    {
        "name": "Shortcut",
        "description": "AI Excel 超级智能体，处理复杂 Excel 任务",
        "url": "https://www.tryshortcut.ai",
        "category": "AI办公工具",
        "tags": ["办公AI","AI","智能"]
    },
    {
        "name": "GitFluence",
        "description": "GitFluence是人工智能驱动的解决方案，可帮助您快速找到正确的命令。立即开始使用Git命令生成器，节省时间。",
        "url": "https://www.gitfluence.com",
        "category": "AI编程工具",
        "tags": ["编程AI","智能"]
    },
    {
        "name": "Zion",
        "description": "内置大语言模型，可视化创建属于自己的AI应用",
        "url": "https://functorz.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "AirOps",
        "description": "AI SQL语句生成和修改",
        "url": "https://www.airops.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Warp",
        "description": "21世纪的终端工具（内置AI命令搜索）",
        "url": "https://www.warp.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "Fig",
        "description": "下一代命令行工具（内置AI终端命令自动补全）",
        "url": "https://fig.io",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "CodeSnippets",
        "description": "AI代码生成、补全、分析、重构和调试",
        "url": "https://codesnippets.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","分析"]
    },
    {
        "name": "HTTPie AI",
        "description": "AI API开发工具",
        "url": "https://httpie.io",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "AI Code Reviewer",
        "description": "AI代码检查",
        "url": "https://ai-code-reviewer.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Visual Studio IntelliCode",
        "description": "Visual StudioAI辅助开发",
        "url": "https://visualstudio.microsoft.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "bloop",
        "description": "使用GPT-4了解代码库和语义代码搜索",
        "url": "https://bloop.ai",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Programming Helper",
        "description": "AI代码生成器只需键入一个文本说明.AI会为你创建代码。帮助您完成各种任务的工具。",
        "url": "https://www.programming-helper.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "Safurai",
        "description": "基于 AI 的 IDE 扩展，旨在帮助开发人员进行编码、调试和重构",
        "url": "https://www.safurai.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Cron AI",
        "description": "可以使用 AI 基于文本生成 Cron 表达式，也可以将 Cron 表达式翻译成人类可读的描述",
        "url": "https://cronai.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","翻译"]
    },
    {
        "name": "Bito",
        "description": "根据开发人员的需求生成代码、解释代码、生成测试用例、生成注释等",
        "url": "https://bito.ai",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Duino Code Generator",
        "description": "可以自动生成适用于任何兼容Arduino的开发板的代码",
        "url": "https://www.duinocodegenerator.com",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Hacker AI",
        "description": "由人工智能驱动的代码审计工具，可以识别和修复源代码中潜在的安全漏洞",
        "url": "https://hacker-ai.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具","智能"]
    },
    {
        "name": "Airtest",
        "description": "帮助开发者优化代码、生成文档、创建单元测试等，提高开发效率",
        "url": "https://refraction.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","文档","效率"]
    },
    {
        "name": "CodeGeeX",
        "description": "拥有 130 亿参数的大规模多语言代码生成模型，在超过 20 种编程语言的大型代码语料库上进行预训练",
        "url": "https://codegeex.cn",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "CodeAssist",
        "description": "强大的IntelliJ IDEs插件，为开发者提供智能代码辅助功能",
        "url": "https://plugins.jetbrains.com",
        "category": "AI编程工具",
        "tags": ["编程AI","智能"]
    },
    {
        "name": "AI Code Mentor",
        "description": "一款基于人工智能的代码优化、重构和审查工具，帮助开发人员提高代码质量和效率",
        "url": "https://code-mentor.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具","效率","智能"]
    },
    {
        "name": "Unakin",
        "description": "专注于游戏工作室的AI代理技术公司",
        "url": "https://www.unakin.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "CodeConvert AI",
        "description": "代码转换工具，可以帮助用户将代码从一种编程语言转换为另一种编程语言",
        "url": "https://www.codeconvert.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "Codacy",
        "description": "代码质量管理工具，它能够自动检测代码中的问题，并提供修复建议",
        "url": "https://ai.codacy.com",
        "category": "AI编程工具",
        "tags": ["编程AI","工具"]
    },
    {
        "name": "Spark Engine",
        "description": "能够阅读、写作、构建组件、创建动画和构建网站，能够修复 40 多种语言的编码错误",
        "url": "https://sparkengine.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","阅读"]
    },
    {
        "name": "Gitwit",
        "description": "通过AI代码生成来加速您的编码过程，帮助您在几分钟内构建和发布Web应用程序",
        "url": "https://gitwit.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "AskCodi",
        "description": "AskCodi上可以帮助你完成任何编码工作",
        "url": "https://www.askcodi.com",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Fronty",
        "description": "支持图像到 HTML CSS 转换器",
        "url": "https://fronty.com",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Mutable AI",
        "description": "一款更全面的 GitHub Copilot 替代品",
        "url": "https://mutable.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Theculturedao",
        "description": "技术优势！快速打造 AI的迪士尼漫画、游戏、电影和 Gepetto",
        "url": "https://www.theculturedao.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Ludo AI",
        "description": "推荐！快速帮助游戏开发者进行创造过程",
        "url": "https://ludo.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "AI Dungeon",
        "description": "拥有更流畅的体验，更快的模型，堪比免费版本的Steam平台",
        "url": "https://play.aidungeon.io",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Charisma",
        "description": "轻松连接到 Unreal Engine、Unity、移动设备和 metaverses",
        "url": "https://charisma.ai",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Hidden Door",
        "description": "热门！小说作品生成在线社交角色扮演游戏",
        "url": "https://www.hiddendoor.co",
        "category": "AI编程工具",
        "tags": ["编程AI"]
    },
    {
        "name": "Latitude",
        "description": "Latitude将成为人们访问人工智能驱动体验的唯一场所 AI研究机构",
        "url": "https://latitude.io",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","智能"]
    },
    {
        "name": "Cody",
        "description": "Sourcegraph推出的免费AI编程工具",
        "url": "https://sourcegraph.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "Augment",
        "description": "AI编程辅助工具，专为大型代 码库设计",
        "url": "https://www.augmentcode.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "JamGPT",
        "description": "Al Debug调试助手",
        "url": "https://jam.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","助手"]
    },
    {
        "name": "BLACKBOX AI",
        "description": "黑箱AI编程助理，快速代码生成",
        "url": "https://www.blackbox.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "代码小浣熊Raccoon",
        "description": "商汤科技推出的免费AI编程助手",
        "url": "https://raccoon.sensetime.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "DevChat",
        "description": "开源的支持多款大模型的AI编程助手",
        "url": "https://www.devchat.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "腾讯云AI代码助手",
        "description": "腾讯推出的AI编程辅助工具",
        "url": "https://cloud.tencent.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具","助手"]
    },
    {
        "name": "CodeFuse",
        "description": "蚂蚁集团推出的AI代码编程助手",
        "url": "https://codefuse.alipay.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "Tabby",
        "description": "免费开源的自托管AI编程助手",
        "url": "https://tabby.tabbyml.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "iFlyCode",
        "description": "科大讯飞推出的智能编程助手",
        "url": "https://iflycode.xfyun.cn",
        "category": "AI编程工具",
        "tags": ["编程AI","智能","助手"]
    },
    {
        "name": "C知道",
        "description": "CSDN推出的AI技术问答工具",
        "url": "https://so.csdn.net",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "驭码CodeRider",
        "description": "极狐GitLab推出的AI编程与软件智能研发助手",
        "url": "https://coderider.gitlab.cn",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","智能","助手"]
    },
    {
        "name": "Fitten Code",
        "description": "非十科技推出的免费AI代码助手",
        "url": "https://code.fittentech.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "Comate",
        "description": "百度推出的AI编程助手，基于文心大模型",
        "url": "https://comate.baidu.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "JetBrains Al",
        "description": "JetBrains推出的AI编程开发助手",
        "url": "https://www.jetbrains.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "CodeArts Snap",
        "description": "华为云推出的智能编程助手",
        "url": "https://www.huaweicloud.com",
        "category": "AI编程工具",
        "tags": ["编程AI","智能","助手"]
    },
    {
        "name": "ChatDev",
        "description": "面壁智能推出的AI智能体软件开发平台，使用自然语言即可创建软件",
        "url": "https://chatdev.modelbest.cn",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","智能"]
    },
    {
        "name": "V0.dev",
        "description": "AI生成前端React/UI组件",
        "url": "https://v0.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Boxy",
        "description": "CodeSandbox推出的AI编程助手",
        "url": "https://codesandbox.io",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "天工智码Skycode",
        "description": "AI智能编程助手，轻松生成各种代码",
        "url": "https://sky-code.singularity-ai.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","智能","助手"]
    },
    {
        "name": "BigModel",
        "description": "智谱AI推出的大模型开发平台",
        "url": "https://bigmodel.cn",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Genie",
        "description": "Cosine Al推出的AI编程助手",
        "url": "https://cosine.sh",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "Twinny",
        "description": "专为 VS Code 设计的AI代码补全插件",
        "url": "https://twinny.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Duo Chat",
        "description": "GitLab推出的AI编程助手",
        "url": "https://about.gitlab.com",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","助手"]
    },
    {
        "name": "Trae",
        "description": "字节跳动推出的免费AI编程工具，基于Claude模型",
        "url": "https://www.trae.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "Firebase Studio",
        "description": "谷歌推出的AI编程工具，一站式开发全栈应用",
        "url": "https://firebase.studio",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "MGX",
        "description": "基于MetaGPT框架的AI编程工具",
        "url": "https://mgx.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","工具"]
    },
    {
        "name": "Qodo",
        "description": "免费AI代码测试、分析",
        "url": "https://www.qodo.ai",
        "category": "AI编程工具",
        "tags": ["编程AI","AI","分析"]
    },
    {
        "name": "Kiro",
        "description": "亚马逊公司推出的 AI IDE",
        "url": "https://kiro.dev",
        "category": "AI编程工具",
        "tags": ["编程AI","AI"]
    },
    {
        "name": "Winston AI",
        "description": "强大的AI内容检测解决方案",
        "url": "https://gowinston.ai",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI"]
    },
    {
        "name": "Originality.AI",
        "description": "原创度和AI内容检测",
        "url": "https://originality.ai",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI"]
    },
    {
        "name": "Sapling AI Content Detector",
        "description": "Sapling.ai推出的免费在线AI内容检测工具",
        "url": "https://sapling.ai",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI","工具"]
    },
    {
        "name": "CheckforAI",
        "description": "免费在线检测AI内容",
        "url": "https://checkforai.com",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI"]
    },
    {
        "name": "StudyCorgi ChatGPT Detector",
        "description": "StudyCorgi推出的帮助学生检测ChatGPT的工具",
        "url": "https://studycorgi.com",
        "category": "AI聊天助手",
        "tags": ["内容检测AI","工具"]
    },
    {
        "name": "AISEO AI Content Detector",
        "description": "AISEO推出的AI内容检测器",
        "url": "https://aiseo.ai",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI"]
    },
    {
        "name": "Writecream AI Content Detector",
        "description": "Writecream推出的AI内容检测工具",
        "url": "https://www.writecream.com",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI","工具"]
    },
    {
        "name": "GPT Detector",
        "description": "在线检查文本是否由GPT-3或ChatGPT生成",
        "url": "https://x.writefull.com",
        "category": "AI聊天助手",
        "tags": ["内容检测AI"]
    },
    {
        "name": "AI Content Detector",
        "description": "Writer推出的AI内容检测工具",
        "url": "https://writer.com",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI","工具"]
    },
    {
        "name": "Proofig",
        "description": "AI检测科研图像是否造假抄袭",
        "url": "https://www.proofig.com",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI"]
    },
    {
        "name": "Mitata Al",
        "description": "专业的AI文章检测",
        "url": "https://www.copyleaks.top",
        "category": "AI写作工具",
        "tags": ["内容检测AI","AI"]
    },
    {
        "name": "朱雀AI检测",
        "description": "腾讯推出的AI图像和文本鉴别工具",
        "url": "https://matrix.tencent.com",
        "category": "内容检测AI",
        "tags": ["内容检测AI","AI","工具"]
    },
    {
        "name": "飞桨PaddlePaddle",
        "description": "开源深度学习平台",
        "url": "https://www.paddlepaddle.org.cn",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "TensorFlow",
        "description": "Google推出的机器学习和人工智能开源库",
        "url": "https://www.tensorflow.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架","智能"]
    },
    {
        "name": "PyTorch",
        "description": "开源机器学习框架",
        "url": "https://pytorch.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "Keras",
        "description": "Python版本的TensorFlow深度学习API",
        "url": "https://keras.io",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "Caffe",
        "description": "UC伯克利研究推出的深度学习框架",
        "url": "https://caffe.berkeleyvision.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "Apache MXNet",
        "description": "免费开源的深度学习框架",
        "url": "https://mxnet.apache.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "MindSpore",
        "description": "华为推出的全场景 AI 计算框架",
        "url": "https://www.mindspore.cn",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "Scikit-learn",
        "description": "Python机器学习库",
        "url": "https://scikit-learn.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "NumPy",
        "description": "Python科学计算必备的包",
        "url": "https://numpy.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "LangChain",
        "description": "一个专为使用语言模型构建应用而设计的开源框架",
        "url": "https://www.langchain.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "LlamaIndex",
        "description": "一个高级编排框架，旨在增强像GPT-4这样的LLM的功能",
        "url": "https://www.llamaindex.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "Haystack",
        "description": "用于构建由各种NLP技术驱动的应用程序，包括但不限于生成式人工智能",
        "url": "https://haystack.deepset.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架","智能"]
    },
    {
        "name": "Lightning Al",
        "description": "快速训练、部署和开发人工智能产品的深度学习框架，由Pytorch Lightning团队推出",
        "url": "https://lightning.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架","智能"]
    },
    {
        "name": "NLTK",
        "description": "Python自然语言处理工具包",
        "url": "https://www.nltk.org",
        "category": "AI开发框架",
        "tags": ["AI开发框架","工具"]
    },
    {
        "name": "JAX",
        "description": "Google推出的用于变换数值函数的机器学习框架",
        "url": "https://jax.readthedocs.io",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "DL4J",
        "description": "开源的使用IVM部署和训练深度学习模型的套件",
        "url": "https://deeplearning4j.konduit.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "Vercel AI SDK",
        "description": "SDK Vercel开源的搭建AI聊天机器人的开发套件，支持React/Svelte/Vue等框 架",
        "url": "https://sdk.vercel.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "文心智能体平台",
        "description": "百度推出的智能体构建平台",
        "url": "https://agents.baidu.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架","智能"]
    },
    {
        "name": "MLX",
        "description": "苹果推出的开源机器学习框架，专为Apple silicon芯片设计",
        "url": "https://ml-explore.github.io",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "Label Studio",
        "description": "免费开源的数据标注工具",
        "url": "https://labelstud.io",
        "category": "AI开发框架",
        "tags": ["AI开发框架","工具"]
    },
    {
        "name": "Leap",
        "description": "将AI快速集成到你自己的应用中",
        "url": "https://www.tryleap.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "芝士饼",
        "description": "可以提供一站式 AI 原生应用的开发平台",
        "url": "https://knowledgepie.cloud.alipay.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "Wordware",
        "description": "使用自然语言构建 AI 代理的 IDE 平台",
        "url": "https://www.wordware.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "Coze",
        "description": "字节推出的AI机器人和智能体创建平台",
        "url": "https://www.coze.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI","智能"]
    },
    {
        "name": "言犀智能体平台",
        "description": "京东推出的一站式AI智能体开发平台",
        "url": "https://yanxi.jd.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI","智能"]
    },
    {
        "name": "无问芯穹",
        "description": "AI大模型服务平台，提供从算力、模型到应用一站式服务",
        "url": "https://cloud.infini-ai.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "魔乐社区",
        "description": "天翼云联合华为推出的AI开发者社区",
        "url": "https://modelers.c",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "百宝箱Tbox",
        "description": "蚂蚁集团推出的一站式 A原生应用开发平台",
        "url": "https://tbox.alipay.com",
        "category": "AI开发框架",
        "tags": ["AI开发框架"]
    },
    {
        "name": "NoCode",
        "description": "美团推出的零代码AI应用开发平台",
        "url": "https://nocode.cn",
        "category": "AI开发框架",
        "tags": ["AI开发框架","AI"]
    },
    {
        "name": "Skywork",
        "description": "昆仑万维面向全球推出的天工超级智能体",
        "url": "https://skywork.ai",
        "category": "AI开发框架",
        "tags": ["AI开发框架","智能"]
    },
    {
        "name": "网商园",
        "description": "全国最早最专业的服装服饰类货源分销平台，提供一键上传、一件代发、15天可退等服务",
        "url": "https://www.wsy.com",
        "category": "货源平台",
        "tags": ["服装服饰","分销","一件代发","货源","电商"]
    },
    {
        "name": "赛盈",
        "description": "主打欧美中大件海外仓精品一件代发分销服务",
        "url": "https://www.saleyee.cn",
        "category": "货源平台",
        "tags": ["海外仓","欧美","一件代发","分销","中大件"]
    },
    {
        "name": "美适分销",
        "description": "致力于为跨境卖家解决货源问题，降低跨境起步门槛",
        "url": "https://www.mixsss.com",
        "category": "货源平台",
        "tags": ["跨境电商","分销","货源","卖家","电商"]
    },
    {
        "name": "大健云仓",
        "description": "为全球家居供应商及零售商提供线上/线下的综合交易及交付服务",
        "url": "https://www.gigacloudtech.cn",
        "category": "货源平台",
        "tags": ["家居","供应链","交易","交付","云仓"]
    },
    {
        "name": "指纹科技",
        "description": "跨境热销品类齐全，无限SKU，1件起订",
        "url": "https://www.hicustom.com",
        "category": "货源平台",
        "tags": ["跨境电商","热销品","SKU","定制","批发"]
    },
    {
        "name": "飞飞鱼定制",
        "description": "全球性的S2B2C柔性供应链赋能平台",
        "url": "http://feifeiyu.com",
        "category": "货源平台",
        "tags": ["定制","供应链","S2B2C","电商","赋能"]
    },
    {
        "name": "青创网",
        "description": "B2B鞋服供应链数智平台，汇聚全国鞋服产业带优质供应商",
        "url": "https://www.17qcc.com",
        "category": "货源平台",
        "tags": ["B2B","鞋服","供应链","产业带","供应商"]
    },
    {
        "name": "CJdropshipping",
        "description": "官方合作分销服务商，提供一站式代发货解决方案",
        "url": "https://www.cjdropshipping.com",
        "category": "货源平台",
        "tags": ["代发货","Dropshipping","分销","跨境电商","供应链"]
    },
    {
        "name": "DOBA",
        "description": "国外知名分销平台，提供产品采购和发货服务",
        "url": "https://www.doba.com",
        "category": "货源平台",
        "tags": ["国外分销","产品采购","发货","跨境电商","美国"]
    },
    {
        "name": "Oberlo",
        "description": "国外一件代发平台，与Shopify紧密集成",
        "url": "https://www.oberlo.com",
        "category": "货源平台",
        "tags": ["一件代发","Shopify","Dropshipping","跨境电商","产品导入"]
    },
    {
        "name": "拖尼斯",
        "description": "国内知名分销平台，提供多品类货源",
        "url": "https://www.toonies.cn",
        "category": "货源平台",
        "tags": ["分销","电商","货源","批发","代发"]
    },
    {
        "name": "搜款网",
        "description": "全国著名服装批发平台，聚集广州、杭州等服装批发市场资源",
        "url": "https://www.vvic.com",
        "category": "货源平台",
        "tags": ["服装批发","服饰","批发市场","服装","电商"]
    },
    {
        "name": "17货源",
        "description": "全国知名服装批发、分销平台，提供一站式货源解决方案",
        "url": "https://www.17zwd.com",
        "category": "货源平台",
        "tags": ["服装批发","分销","货源","一站式","电商"]
    },
    {
        "name": "亚马逊墨西哥站",
        "description": "亚马逊墨西哥官方网站，拉丁美洲重要的线上购物平台",
        "url": "https://www.amazon.com.mx",
        "category": "电商平台",
        "tags": ["亚马逊","墨西哥","拉美","跨境电商","Amazon"]
    },
    {
        "name": "Mercado Libre México",
        "description": "墨西哥最大的线上购物网站，拉丁美洲领先的电商平台",
        "url": "https://www.mercadolibre.com.mx",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Walmart México",
        "description": "沃尔玛墨西哥官方网站，提供线上购物服务",
        "url": "https://www.walmart.com.mx",
        "category": "电商平台",
        "tags": ["沃尔玛","墨西哥","拉美","跨境电商","零售","Walmart"]
    },
    {
        "name": "Coppel",
        "description": "墨西哥知名连锁百货公司的线上商城，提供各类生活商品",
        "url": "https://www.coppel.com",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","百货","电商","跨境电商"]
    },
    {
        "name": "Liverpool México",
        "description": "墨西哥高端百货公司的线上购物平台",
        "url": "https://www.liverpool.com.mx",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","奢侈品","百货","跨境电商"]
    },
    {
        "name": "SHEIN México",
        "description": "SHEIN墨西哥站，提供时尚服饰和配饰",
        "url": "https://mx.shein.com",
        "category": "电商平台",
        "tags": ["SHEIN","墨西哥","拉美","服饰","跨境电商","时尚"]
    },
    {
        "name": "Linio México",
        "description": "墨西哥知名电子商务平台，提供多种类别商品",
        "url": "https://www.linio.com.mx",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","电子商务","跨境电商"]
    },
    {
        "name": "Claro Shop",
        "description": "墨西哥大型电子商务平台，提供电子产品及家居商品",
        "url": "https://www.claroshop.com",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","电子产品","家居","跨境电商"]
    },
    {
        "name": "Elektra",
        "description": "墨西哥知名电器和家居用品零售商的线上商城",
        "url": "https://www.elektra.com.mx",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","电器","家居","跨境电商"]
    },
    {
        "name": "Soriana",
        "description": "墨西哥大型连锁超市的线上购物平台",
        "url": "https://www.soriana.com",
        "category": "电商平台",
        "tags": ["墨西哥","拉美","超市","生活用品","跨境电商"]
    },
    {
        "name": "Mercado Libre Chile",
        "description": "智利最大的线上购物平台，拉丁美洲领先的电商平台",
        "url": "https://www.mercadolibre.cl",
        "category": "电商平台",
        "tags": ["智利","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Falabella Chile",
        "description": "智利领先的百货零售商线上购物平台",
        "url": "https://www.falabella.com",
        "category": "电商平台",
        "tags": ["智利","拉美","百货","零售","跨境电商"]
    },
    {
        "name": "Paris.cl",
        "description": "智利知名百货公司的线上购物平台",
        "url": "https://www.paris.cl",
        "category": "电商平台",
        "tags": ["智利","拉美","百货","时尚","跨境电商"]
    },
    {
        "name": "Ripley Chile",
        "description": "智利知名连锁百货公司的线上购物网站",
        "url": "https://simple.ripley.cl",
        "category": "电商平台",
        "tags": ["智利","拉美","百货","电商","跨境电商"]
    },
    {
        "name": "Linio Chile",
        "description": "智利大型电子商务平台，提供多种类别商品",
        "url": "https://www.linio.cl",
        "category": "电商平台",
        "tags": ["智利","拉美","电子商务","跨境电商"]
    },
    {
        "name": "Sodimac Chile",
        "description": "智利领先的家居装修和建材零售商的线上平台",
        "url": "https://www.sodimac.cl",
        "category": "电商平台",
        "tags": ["智利","拉美","家居","装修","建材","跨境电商"]
    },
    {
        "name": "Mercado Libre Perú",
        "description": "秘鲁最大的线上购物平台，拉丁美洲领先的电商平台",
        "url": "https://www.mercadolibre.com.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Falabella Perú",
        "description": "秘鲁知名百货公司的线上购物平台",
        "url": "https://www.falabella.com.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","百货","电商","跨境电商"]
    },
    {
        "name": "Linio Perú",
        "description": "秘鲁大型电子商务平台，提供多种类别商品",
        "url": "https://www.linio.com.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","电子商务","跨境电商"]
    },
    {
        "name": "Ripley Perú",
        "description": "秘鲁知名连锁百货公司的线上购物网站",
        "url": "https://simple.ripley.com.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","百货","电商","跨境电商"]
    },
    {
        "name": "Plaza Vea",
        "description": "秘鲁大型超市连锁的线上购物平台",
        "url": "https://www.plazavea.com.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","超市","生活用品","跨境电商"]
    },
    {
        "name": "Oechsle",
        "description": "秘鲁知名百货公司的线上购物网站",
        "url": "https://www.oechsle.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","百货","电商","跨境电商"]
    },
    {
        "name": "Wong Peru",
        "description": "秘鲁高端超市连锁的线上购物平台",
        "url": "https://www.wong.pe",
        "category": "电商平台",
        "tags": ["秘鲁","拉美","超市","高端","跨境电商"]
    },
    {
        "name": "亚马逊巴西站",
        "description": "亚马逊巴西官方网站，南美洲重要的线上购物平台",
        "url": "https://www.amazon.com.br",
        "category": "电商平台",
        "tags": ["亚马逊","巴西","拉美","跨境电商","Amazon"]
    },
    {
        "name": "Mercado Livre Brasil",
        "description": "巴西最大的线上购物平台，拉丁美洲领先的电商平台",
        "url": "https://www.mercadolivre.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","电商","Mercado Livre","跨境电商"]
    },
    {
        "name": "Magazine Luiza",
        "description": "巴西领先的电子产品和家居用品零售商的线上平台",
        "url": "https://www.magazineluiza.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","电子产品","家居","跨境电商"]
    },
    {
        "name": "Casas Bahia",
        "description": "巴西知名的家居用品和电器零售商的线上平台",
        "url": "https://www.casasbahia.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","家居","电器","跨境电商"]
    },
    {
        "name": "Americanas.com",
        "description": "巴西大型电子商务平台，提供多种类别商品",
        "url": "https://www.americanas.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","电子商务","跨境电商"]
    },
    {
        "name": "Shopee Brasil",
        "description": "Shopee巴西站，提供各类消费品和电子产品",
        "url": "https://shopee.com.br",
        "category": "电商平台",
        "tags": ["Shopee","巴西","拉美","电商","跨境电商"]
    },
    {
        "name": "OLX Brasil",
        "description": "巴西最大的二手商品交易平台",
        "url": "https://www.olx.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","二手","交易","跨境电商"]
    },
    {
        "name": "Submarino",
        "description": "巴西知名的电子商务平台，专注于电子产品",
        "url": "https://www.submarino.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","电子产品","跨境电商"]
    },
    {
        "name": "Extra",
        "description": "巴西大型零售商的线上购物平台",
        "url": "https://www.extra.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","零售","跨境电商"]
    },
    {
        "name": "Ponto Frio",
        "description": "巴西知名电器和电子产品零售商的线上平台",
        "url": "https://www.pontofrio.com.br",
        "category": "电商平台",
        "tags": ["巴西","拉美","电器","电子产品","跨境电商"]
    },
    {
        "name": "AliExpress Brasil",
        "description": "阿里巴巴旗下AliExpress针对巴西市场的平台",
        "url": "https://pt.aliexpress.com",
        "category": "电商平台",
        "tags": ["阿里巴巴","巴西","拉美","跨境电商","AliExpress"]
    },
    {
        "name": "Mercado Libre Colombia",
        "description": "美客多哥伦比亚站，提供了手机、时尚、家居、园艺、汽车配件、体育用品等",
        "url": "https://www.mercadolibre.com.co",
        "category": "电商平台",
        "tags": ["哥伦比亚","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Falabella Colombia",
        "description": "Falabella哥伦比亚站，提供了男女装、童装、家居用品、潮流配饰等品类",
        "url": "https://www.falabella.com.co",
        "category": "电商平台",
        "tags": ["哥伦比亚","拉美","百货","电商","跨境电商"]
    },
    {
        "name": "Shopee Colombia",
        "description": "Shopee哥伦比亚站，为所有用户提供简单、安全、快速的在线买卖体验",
        "url": "https://shopee.com.co",
        "category": "电商平台",
        "tags": ["Shopee","哥伦比亚","拉美","电商","跨境电商"]
    },
    {
        "name": "Tiendamia Colombia",
        "description": "Tiendamia哥伦比亚站，为当地消费者提供了优质的购物体验和丰富多样的商品选择",
        "url": "https://tiendamia.co",
        "category": "电商平台",
        "tags": ["哥伦比亚","拉美","电商","跨境电商"]
    },
    {
        "name": "Homecenter Colombia",
        "description": "Homecenter哥伦比亚站，比较受当地民众欢迎的电商平台",
        "url": "https://www.homecenter.com.co",
        "category": "电商平台",
        "tags": ["哥伦比亚","拉美","家居","装修","电商","跨境电商"]
    },
    {
        "name": "Mercado Libre Argentina",
        "description": "美客多阿根廷站，阿根廷第一家本土电商平台",
        "url": "https://www.mercadolibre.com.ar",
        "category": "电商平台",
        "tags": ["阿根廷","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Easy Argentina",
        "description": "Easy阿根廷站，为阿根廷的消费者提供方便、快捷的购物体验",
        "url": "https://www.easy.com.ar",
        "category": "电商平台",
        "tags": ["阿根廷","拉美","家居","装修","电商","跨境电商"]
    },
    {
        "name": "Carrefour Argentina",
        "description": "Carrefour阿根廷站，阿根廷人喜爱的购物平台之一",
        "url": "https://www.carrefour.com.ar",
        "category": "电商平台",
        "tags": ["阿根廷","拉美","超市","零售","电商","跨境电商"]
    },
    {
        "name": "Tiendamia Argentina",
        "description": "Tiendamia阿根廷站，提供了鞋类、手表、珠宝、背包、钱包、儿童服装等产品",
        "url": "https://tiendamia.com",
        "category": "电商平台",
        "tags": ["阿根廷","拉美","电商","跨境电商","时尚"]
    },
    {
        "name": "Fravega",
        "description": "阿根廷最受欢迎和最受认可的电子商务平台之一",
        "url": "https://www.fravega.com",
        "category": "电商平台",
        "tags": ["阿根廷","拉美","电子商务","电子产品","跨境电商"]
    },
    {
        "name": "Mercado Libre Ecuador",
        "description": "厄瓜多尔站是一个自由交易的门户网站，用户可以在平台自由发布商品，自由进行买卖",
        "url": "https://www.mercadolibre.com.ec",
        "category": "电商平台",
        "tags": ["厄瓜多尔","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Dominicana",
        "description": "多米尼加站是美客多的18个站点之一",
        "url": "https://www.mercadolibre.com.do",
        "category": "电商平台",
        "tags": ["多米尼加","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Costa Rica",
        "description": "哥斯达黎加站提供了丰富的商品种类，包括电子产品、家居用品、服装、珠宝、美食等",
        "url": "https://www.mercadolibre.co.cr",
        "category": "电商平台",
        "tags": ["哥斯达黎加","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Bolivia",
        "description": "玻利维亚站拥有完善的仓储和物流系统，确保商品能够快速、准确地送达消费者手中",
        "url": "https://www.mercadolibre.com.bo",
        "category": "电商平台",
        "tags": ["玻利维亚","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Panamá",
        "description": "巴拿马站点是拉丁美洲最大的电商平台之一，也是全球电商市场的重要参与者",
        "url": "https://www.mercadolibre.com.pa",
        "category": "电商平台",
        "tags": ["巴拿马","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Guatemala",
        "description": "危地马拉站为当地消费者提供更丰富的商品选择和更便捷的购物体验",
        "url": "https://www.mercadolibre.com.gt",
        "category": "电商平台",
        "tags": ["危地马拉","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Paraguay",
        "description": "巴拉圭站是美客多集团在南美洲的重要布局之一",
        "url": "https://www.mercadolibre.com.py",
        "category": "电商平台",
        "tags": ["巴拉圭","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Honduras",
        "description": "洪都拉斯站为当地消费者提供便捷、安全的购物体验",
        "url": "https://www.mercadolibre.com.hn",
        "category": "电商平台",
        "tags": ["洪都拉斯","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Mercado Libre Nicaragua",
        "description": "尼加拉瓜站为当地消费者提供了一站式购物体验",
        "url": "https://www.mercadolibre.com.ni",
        "category": "电商平台",
        "tags": ["尼加拉瓜","拉美","电商","Mercado Libre","跨境电商"]
    },
    {
        "name": "Shopee Malaysia",
        "description": "虾皮马来西亚站，东南亚领先的电商平台",
        "url": "https://shopee.com.my",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","马来西亚","东南亚","跨境电商"]
    },
    {
        "name": "Shopee Thailand",
        "description": "虾皮泰国站，东南亚领先的电商平台",
        "url": "https://shopee.co.th",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","泰国","东南亚","跨境电商"]
    },
    {
        "name": "Shopee Indonesia",
        "description": "虾皮印尼站，东南亚领先的电商平台",
        "url": "https://shopee.co.id",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","印尼","东南亚","跨境电商"]
    },
    {
        "name": "Shopee Vietnam",
        "description": "虾皮越南站，东南亚领先的电商平台",
        "url": "https://shopee.vn",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","越南","东南亚","跨境电商"]
    },
    {
        "name": "Shopee Singapore",
        "description": "虾皮新加坡站，东南亚领先的电商平台",
        "url": "https://shopee.sg",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","新加坡","东南亚","跨境电商"]
    },
    {
        "name": "Shopee Taiwan",
        "description": "虾皮台湾站，东亚领先的电商平台",
        "url": "https://xiapi.xiapibuy.com",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","台湾","东亚","跨境电商"]
    },
    {
        "name": "Shopee卖家中心",
        "description": "虾皮全球卖家管理平台",
        "url": "https://seller.shopee.cn",
        "category": "东南亚电商",
        "tags": ["Shopee","虾皮","卖家中心","跨境电商","运营"]
    },
    {
        "name": "Lazada Malaysia",
        "description": "来赞达马来西亚站，东南亚知名电商平台",
        "url": "https://www.lazada.com.my",
        "category": "东南亚电商",
        "tags": ["Lazada","来赞达","马来西亚","东南亚","跨境电商"]
    },
    {
        "name": "Lazada Thailand",
        "description": "来赞达泰国站，东南亚知名电商平台",
        "url": "https://www.lazada.co.th",
        "category": "东南亚电商",
        "tags": ["Lazada","来赞达","泰国","东南亚","跨境电商"]
    },
    {
        "name": "Lazada Indonesia",
        "description": "来赞达印尼站，东南亚知名电商平台",
        "url": "https://www.lazada.co.id",
        "category": "东南亚电商",
        "tags": ["Lazada","来赞达","印尼","东南亚","跨境电商"]
    },
    {
        "name": "Lazada Vietnam",
        "description": "来赞达越南站，东南亚知名电商平台",
        "url": "https://www.lazada.vn",
        "category": "东南亚电商",
        "tags": ["Lazada","来赞达","越南","东南亚","跨境电商"]
    },
    {
        "name": "Lazada Singapore",
        "description": "来赞达新加坡站，东南亚知名电商平台",
        "url": "https://www.lazada.sg",
        "category": "东南亚电商",
        "tags": ["Lazada","来赞达","新加坡","东南亚","跨境电商"]
    },
    {
        "name": "Lazada卖家中心",
        "description": "来赞达全球卖家管理平台",
        "url": "https://gsp.lazada-seller.cn",
        "category": "东南亚电商",
        "tags": ["Lazada","来赞达","卖家中心","跨境电商","运营"]
    },
    {
        "name": "紫鸟浏览器",
        "description": "账号安全管理系统，全场景AI运营方式升级",
        "url": "https://www.superbrowser.com",
        "category": "跨境电商工具",
        "tags": ["浏览器","AI","跨境电商","运营","账号管理"]
    },
    {
        "name": "蓝海加速",
        "description": "TikTok海外专线，高速稳定加速器，跨境必备",
        "url": "https://lanhai.yhui0g.com",
        "category": "跨境电商工具",
        "tags": ["网络加速","TikTok","跨境电商","出海"]
    },
    {
        "name": "FastMoss",
        "description": "超260万商家信赖&市占率第一的TikTok数据分析平台",
        "url": "https://www.fastmoss.com",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","选品"]
    },
    {
        "name": "EchoTik",
        "description": "性价比最高的TikTok数据分析工具，近40万真实卖家的选择",
        "url": "https://share.echotik.live",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","工具"]
    },
    {
        "name": "Kalodata",
        "description": "全球150万+商家选择的TikTok数据分析工具",
        "url": "https://www.kalodata.com",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","工具"]
    },
    {
        "name": "郑和数据",
        "description": "TikTok数据准确度 99.9%",
        "url": "https://tk.zhenghedata.com",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","工具"]
    },
    {
        "name": "出海匠",
        "description": "TikTok 爆品/投流/直播/达人数据分析+AI 爆款内容创作+ 真实客户触达",
        "url": "https://www.chuhaijiang.com",
        "category": "AI写作工具",
        "tags": ["数据分析","AI","TikTok","跨境电商","直播"]
    },
    {
        "name": "Pentos",
        "description": "领先的 TikTok 分析工具包",
        "url": "https://pentos.co",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","工具"]
    },
    {
        "name": "Tikstar",
        "description": "海外短视频分析平台",
        "url": "https://www.tikstar.com",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","短视频"]
    },
    {
        "name": "Exolyt",
        "description": "领先的TikTok分析工具，帮助网红、营销人员和内容创作者获得洞察力的报告",
        "url": "https://exolyt.com",
        "category": "AI写作工具",
        "tags": ["数据分析","TikTok","跨境电商","营销"]
    },
    {
        "name": "AdWins",
        "description": "TikTok广告营销情报分析就用AdWins",
        "url": "https://www.adwins.net",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","广告"]
    },
    {
        "name": "PiPiADS",
        "description": "广告间谍工具，可让您监视竞争对手的 TikTok 广告，发现最热门的病毒和趋势产品",
        "url": "https://www.pipiads.com",
        "category": "跨境电商工具",
        "tags": ["数据分析","TikTok","跨境电商","广告"]
    },
    {
        "name": "蜗牛海拍",
        "description": "行业第一家买家秀视频/ 1000名达人任选/ 29.9美金全场一口价",
        "url": "https://woniu.video",
        "category": "跨境电商工具",
        "tags": ["视频营销","TikTok","跨境电商","达人"]
    },
    {
        "name": "WotoHub",
        "description": "TikTok达人建联神器，全站点资源，市占率第一",
        "url": "https://www.wotohub.com",
        "category": "跨境电商工具",
        "tags": ["达人营销","TikTok","跨境电商","网红"]
    },
    {
        "name": "Toolsprite",
        "description": "专注TK卖家建联，极致性价比，私信、商品卡、EDM自动AI批量建联",
        "url": "https://tk.toolsprite.com",
        "category": "跨境电商工具",
        "tags": ["达人营销","AI","TikTok","跨境电商","自动化"]
    },
    {
        "name": "评大师",
        "description": "TikTok美区、东南亚测评平台，测评专家，增长伙伴",
        "url": "https://www.pingdashi.com",
        "category": "跨境电商工具",
        "tags": ["达人营销","TikTok","跨境电商","测评"]
    },
    {
        "name": "达人精灵",
        "description": "tk免费运营工具，下载无水印视频、爆款素材筛选，无需登录，高效便捷",
        "url": "https://mjjl.cn",
        "category": "跨境电商工具",
        "tags": ["达人营销","TikTok","跨境电商","运营","工具"]
    },
    {
        "name": "达人无界",
        "description": "批量建联邀约TK达人神器，AI智能匹配达人和生成建联话术",
        "url": "https://app.influenbase.com",
        "category": "跨境电商工具",
        "tags": ["达人营销","AI","TikTok","跨境电商","智能"]
    },
    {
        "name": "DAMI达秘",
        "description": "TikTok批量邀约达人带货神器",
        "url": "https://home.tikclubs.com",
        "category": "跨境电商工具",
        "tags": ["达人营销","TikTok","跨境电商","邀约"]
    },
    {
        "name": "Vikoc",
        "description": "TikTok达人主动来帮你做视频带货，不再受平台邀约限制",
        "url": "https://vikoc.cn",
        "category": "跨境电商工具",
        "tags": ["达人营销","TikTok","跨境电商","运营","视频"]
    },
    {
        "name": "Crevideo红茄",
        "description": "唯一官方API | AI达人运营官，7x24h自动邀约/跟进达人带货",
        "url": "https://crevideo.com",
        "category": "AI视频工具",
        "tags": ["达人营销","AI","TikTok","跨境电商","运营"]
    },
    {
        "name": "BoomCut爆剪辑",
        "description": "出海营销一站式本地化解决：一键翻译、换脸、音色克隆、数字人",
        "url": "https://boomcutai.com",
        "category": "AI翻译工具",
        "tags": ["视频制作","AI","TikTok","跨境电商","翻译"]
    },
    {
        "name": "TK云大师",
        "description": "专业的TikTok矩阵系统，自动化管理上万账号",
        "url": "https://www.tkyds.com",
        "category": "跨境电商工具",
        "tags": ["账号管理","TikTok","跨境电商","运营"]
    },
    {
        "name": "指尖出海TK专线",
        "description": "TikTok美英、东南亚多国专线网络，上市公司，合规纯净独享",
        "url": "https://www.zhijianchuhai.com",
        "category": "跨境电商工具",
        "tags": ["网络加速","TikTok","跨境电商","出海"]
    },
    {
        "name": "猎豹TK节点网络",
        "description": "覆盖50+国家，TK原生、独享、住宅IP，专线加速，网络更稳定",
        "url": "https://www.tkliebao.com",
        "category": "跨境电商工具",
        "tags": ["网络加速","TikTok","跨境电商","IP代理"]
    },
    {
        "name": "GeeLark",
        "description": "TikTok 账号管理专家，助力出海商家矩阵营销",
        "url": "https://www.geelark.cn",
        "category": "跨境电商工具",
        "tags": ["账号管理","TikTok","跨境电商","矩阵营销"]
    },
    {
        "name": "多客-AI智能客服系统",
        "description": "店小秘旗下一款与TikTok官方合作的AI智能客服系统",
        "url": "https://www.duoke.com",
        "category": "跨境电商工具",
        "tags": ["客服系统","AI","TikTok","跨境电商","智能"]
    },
    {
        "name": "Gloda",
        "description": "TikTok 亚马逊 抖音三合一选品",
        "url": "https://www.gloda.vip",
        "category": "跨境电商工具",
        "tags": ["选品工具","TikTok","亚马逊","跨境电商"]
    },
    {
        "name": "妙手",
        "description": "跨境电商免费ERP，方便快速上品、店铺运营管理等",
        "url": "https://erp.91miaoshou.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","运营","管理系统"]
    },
    {
        "name": "领星ERP",
        "description": "领星ERP 5000单/月免费用！财务、广告、供应链全功能限时开放！",
        "url": "https://erp.lingxing.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","财务","供应链"]
    },
    {
        "name": "店小秘",
        "description": "免费跨境电商ERP，超120万跨境卖家的共同选择",
        "url": "http://www.dianxiaomi.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","管理系统"]
    },
    {
        "name": "芒果店长",
        "description": "轻量级跨境ERP，支持速卖通、wish、amazon跨境电商平台的订单管理",
        "url": "https://www.mangoerp.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","运营","订单管理"]
    },
    {
        "name": "BigSeller",
        "description": "一站式电商管理系统，是东南亚用户量最大的电商SaaS系统",
        "url": "https://www.bigseller.com",
        "category": "跨境电商工具",
        "tags": ["ERP","电商","东南亚","SaaS"]
    },
    {
        "name": "Ushop",
        "description": "专家顾问一对一服务，支持TikTok/Lazada/Shopee等多家电商平台本土及跨境店铺",
        "url": "http://www.ushopbi.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","TikTok","顾问"]
    },
    {
        "name": "客优云",
        "description": "SaaS切入，服务出口跨境电商卖家、为卖家接入海外电商平台、优化产品选择、降低物流成本",
        "url": "https://www.keyouyun.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","SaaS"]
    },
    {
        "name": "斑马",
        "description": "专注提供跨境电商领域SAAS软件服务的互联网公司",
        "url": "https://www.banmaerp.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","SAAS"]
    },
    {
        "name": "海卖通",
        "description": "提供全球电商平台的开店入驻，ERP自动化系统、仓储物流、培训孵化、代运营、分销及供应链服务",
        "url": "https://b2csupply.com",
        "category": "AI教育与学习",
        "tags": ["ERP","跨境电商","运营","供应链"]
    },
    {
        "name": "旺销王",
        "description": "针对中小企业商家打造的云端管理软件",
        "url": "https://www.wxwerp.com",
        "category": "跨境电商工具",
        "tags": ["ERP","跨境电商","管理系统","中小企业"]
    },
    {
        "name": "Ksher开时支付",
        "description": "印，菲，泰，马本土店和外贸收款$",
        "url": "https://www.ksher.cn",
        "category": "跨境支付",
        "tags": ["收款","东南亚","跨境电商","支付"]
    },
    {
        "name": "珊瑚跨境CoralGlobal",
        "description": "美、英、马、菲、印、越、泰等本土店和外贸收款，零汇损；极速到账；安全便捷",
        "url": "https://www.coralglobal.cn",
        "category": "跨境支付",
        "tags": ["收款","跨境电商","支付","零汇损"]
    },
    {
        "name": "巴西市场分析",
        "description": "巴西市场概况分析",
        "url": "http://www.dny123.com",
        "category": "跨境电商工具",
        "tags": ["巴西","拉美","市场分析","跨境电商"]
    },
    {
        "name": "意大利站",
        "description": "亚马逊意大利站点，意大利主要的综合电商平台",
        "url": "https://www.amazon.it",
        "category": "电商平台",
        "tags": ["亚马逊","电商","意大利","跨境电商","欧洲"]
    },
    {
        "name": "西班牙站",
        "description": "亚马逊西班牙站点，西班牙主要的综合电商平台",
        "url": "https://www.amazon.es",
        "category": "电商平台",
        "tags": ["亚马逊","电商","西班牙","跨境电商","欧洲"]
    },
    {
        "name": "SHEIN",
        "description": "中国跨境快时尚电商平台，主营女装、男装、童装等服饰",
        "url": "https://us.shein.com",
        "category": "电商平台",
        "tags": ["电商","跨境电商","中国出海","服装","快时尚"]
    },
    {
        "name": "Ozon",
        "description": "俄罗斯最大的电商平台之一，被称为'俄罗斯亚马逊'",
        "url": "https://www.ozon.ru",
        "category": "电商平台",
        "tags": ["电商","俄罗斯","跨境电商","俄语"]
    },
    {
        "name": "日本乐天",
        "description": "日本最大的电商平台之一，提供多样化的商品和服务",
        "url": "https://www.rakuten.co.jp",
        "category": "电商平台",
        "tags": ["电商","日本","乐天","跨境电商","日语"]
    },
    {
        "name": "Coupang",
        "description": "韩国最大的电商平台之一，提供快速配送服务",
        "url": "https://www.coupang.com",
        "category": "电商平台",
        "tags": ["电商","韩国","跨境电商","韩语"]
    },
    {
        "name": "Wildberries",
        "description": "俄罗斯最大的电商平台之一，主营服装和生活用品",
        "url": "https://www.wildberries.ru",
        "category": "电商平台",
        "tags": ["电商","俄罗斯","跨境电商","俄语","服装"]
    },
    {
        "name": "Yandex.Market",
        "description": "俄罗斯搜索引擎Yandex旗下电商平台，类似俄罗斯版Google Shopping",
        "url": "https://market.yandex.ru",
        "category": "电商平台",
        "tags": ["电商","俄罗斯","跨境电商","俄语","比价"]
    },
    {
        "name": "FNAC",
        "description": "法国大型文化及电子产品零售商的电商平台",
        "url": "https://www.fnac.com",
        "category": "电商平台",
        "tags": ["电商","法国","电子产品","文化","跨境电商","欧洲"]
    },
    {
        "name": "Darty",
        "description": "法国著名家电和电子产品零售商的电商平台",
        "url": "https://www.darty.com",
        "category": "电商平台",
        "tags": ["电商","法国","家电","电子产品","跨境电商","欧洲"]
    },
    {
        "name": "Joom",
        "description": "俄罗斯跨境电商平台，主打低价商品直邮服务",
        "url": "https://www.joom.com",
        "category": "电商平台",
        "tags": ["电商","俄罗斯","跨境电商","俄语","直邮"]
    },
    {
        "name": "Worten",
        "description": "葡萄牙最大的电子产品零售商的电商平台",
        "url": "https://www.worten.pt",
        "category": "电商平台",
        "tags": ["电商","葡萄牙","电子产品","跨境电商","欧洲"]
    },
    {
        "name": "HomeDepot",
        "description": "美国最大的家居装修连锁零售商的电商平台",
        "url": "https://www.homedepot.com",
        "category": "电商平台",
        "tags": ["电商","美国","家居","DIY","装修","跨境电商"]
    },
    {
        "name": "BBB",
        "description": "Bed Bath & Beyond，美国家居和生活用品零售商的电商平台",
        "url": "https://www.bedbathandbeyond.com",
        "category": "电商平台",
        "tags": ["电商","美国","家居","生活用品","跨境电商"]
    },
    {
        "name": "Lowes",
        "description": "美国第二大家居装修零售商的电商平台",
        "url": "https://www.lowes.com",
        "category": "电商平台",
        "tags": ["电商","美国","家居","DIY","装修","跨境电商"]
    },
    {
        "name": "Poshmark",
        "description": "美国时尚二手交易电商平台，主打服装和配饰品类",
        "url": "https://poshmark.com",
        "category": "电商平台",
        "tags": ["电商","美国","二手","时尚","服装","跨境电商"]
    },
    {
        "name": "Trendyol",
        "description": "土耳其最大的电商平台，提供时尚、电子产品等多品类商品",
        "url": "https://www.trendyol.com",
        "category": "电商平台",
        "tags": ["电商","土耳其","时尚","跨境电商","中东"]
    },
    {
        "name": "Daraz",
        "description": "阿里巴巴旗下在南亚地区的电商平台，覆盖巴基斯坦等国家",
        "url": "https://www.daraz.pk",
        "category": "电商平台",
        "tags": ["电商","巴基斯坦","南亚","阿里巴巴","跨境电商"]
    },
    {
        "name": "Gmarket",
        "description": "韩国最大的电商平台之一，提供多样化的商品和服务",
        "url": "https://www.gmarket.co.kr",
        "category": "电商平台",
        "tags": ["电商","韩国","跨境电商","亚洲"]
    },
    {
        "name": "Auction",
        "description": "韩国电商平台，提供拍卖和固定价格销售模式",
        "url": "https://www.auction.co.kr",
        "category": "电商平台",
        "tags": ["电商","韩国","拍卖","跨境电商","亚洲"]
    },
    {
        "name": "11Street",
        "description": "韩国领先的电商平台之一，提供多样化的商品和服务",
        "url": "https://www.11st.co.kr",
        "category": "电商平台",
        "tags": ["电商","韩国","跨境电商","亚洲"]
    },
    {
        "name": "Qoo10日本",
        "description": "新加坡电商平台在日本的站点，覆盖日本市场的商品和服务",
        "url": "https://www.qoo10.jp",
        "category": "电商平台",
        "tags": ["电商","日本","跨境电商","亚洲"]
    },
    {
        "name": "Falabella",
        "description": "拉丁美洲领先的百货零售商和电商平台，总部位于智利",
        "url": "https://www.falabella.cl",
        "category": "电商平台",
        "tags": ["电商","智利","拉美","跨境电商","百货"]
    },
    {
        "name": "Fordeal",
        "description": "中国跨境电商平台，主要面向中东和北非市场",
        "url": "https://www.fordeal.com",
        "category": "电商平台",
        "tags": ["电商","中东","阿联酋","中国出海","跨境电商"]
    },
    {
        "name": "WeareSellers",
        "description": "知无不言跨境电商社区，专注亚马逊、沃尔玛、Wayfair、Shein、Wish、Temu、独立站等平台的销售运营与内容营销",
        "url": "https://wearesellers.com",
        "category": "电商平台",
        "tags": ["跨境电商","社区","亚马逊","独立站","电商运营"]
    },
    {
        "name": "卖家之家",
        "description": "国内领先的出口跨境电商卖家服务平台，提供最新跨境电商资讯、运营工具及测评",
        "url": "https://mjzj.com",
        "category": "电商平台",
        "tags": ["跨境电商","卖家服务","电商资讯","运营工具","测评"]
    },
    {
        "name": "易仓科技",
        "description": "跨境电商ERP系统，连接60+电商平台，助力卖家多平台多订单处理和多海外仓比价",
        "url": "https://eccang.com",
        "category": "电商平台",
        "tags": ["跨境电商","ERP","订单处理","海外仓","电商系统"]
    },
    {
        "name": "跨境知道",
        "description": "跨境电商领域知名媒体平台，提供跨境早知道、电商报告、导航等资源及服务",
        "url": "https://ikjzd.com",
        "category": "电商平台",
        "tags": ["跨境电商","媒体","资讯","电商报告","导航"]
    },
    {
        "name": "外贸网站导航",
        "description": "外贸和跨境电商从业人员常用网站导航",
        "url": "https://chwang.com",
        "category": "电商平台",
        "tags": ["外贸","跨境电商","网站导航","电商工具"]
    },
    {
        "name": "邦阅网",
        "description": "致力于为外贸人寻找真实可信的服务商，提供外贸知识分享、案例分析和营销技巧",
        "url": "https://52by.com",
        "category": "电商平台",
        "tags": ["外贸","服务商","知识分享","营销技巧","案例分析"]
    },
    {
        "name": "Seller Sprite",
        "description": "亚马逊卖家产品研究、市场分析、关键词推荐和产品跟踪的综合工具",
        "url": "https://sellersprite.com",
        "category": "电商平台",
        "tags": ["亚马逊","卖家工具","市场分析","关键词","产品研究"]
    },
    {
        "name": "17TRACK",
        "description": "全球包裹跟踪平台，支持2500多家物流公司的包裹追踪",
        "url": "https://17track.net",
        "category": "电商平台",
        "tags": ["物流","包裹跟踪","跨境电商","物流追踪"]
    },
    {
        "name": "UPS",
        "description": "全球领先的物流和供应链解决方案提供商",
        "url": "https://ups.com",
        "category": "电商平台",
        "tags": ["物流","快递","供应链","国际运输"]
    },
    {
        "name": "马帮ERP",
        "description": "专业团队打造的跨境电商ERP软件，帮卖家接入海外电商平台、降低物流成本",
        "url": "https://mabangerp.com",
        "category": "电商平台",
        "tags": ["ERP","跨境电商","物流","海外电商","卖家工具"]
    },
    {
        "name": "豆包",
        "description": "免费全能AI助手，生成图片/视频、写作、编程",
        "url": "https://ai-w3cschool.com",
        "category": "AI聊天助手",
        "tags": ["AI","助手","多模态","免费","国产"]
    },
    {
        "name": "通义千问",
        "description": "阿里推出的自研大模型，通情、达义的全能AI助手",
        "url": "https://qianwen.aliyun.com",
        "category": "AI聊天助手",
        "tags": ["AI","助手","阿里","国产"]
    },
    {
        "name": "文心一言",
        "description": "百度推出的基于文心大模型的AI智能助手",
        "url": "https://yiyan.baidu.com",
        "category": "AI聊天助手",
        "tags": ["AI","智能","助手","百度","国产"]
    },
    {
        "name": "MiniMax",
        "description": "MiniMax推出的AI智能问答助手",
        "url": "https://api.minimax.chat",
        "category": "AI聊天助手",
        "tags": ["AI","智能","助手","国产"]
    },
    {
        "name": "绘蛙",
        "description": "AI电商营销工具，免费生成商品图",
        "url": "https://ihuiwa.paluai.com",
        "category": "AI图像工具",
        "tags": ["AI","工具","电商","营销"]
    },
    {
        "name": "Midjourney",
        "description": "AI图像和插画生成工具",
        "url": "https://www.midjourney.com",
        "category": "AI图像工具",
        "tags": ["AI","工具","图像","生成","艺术"]
    },
    {
        "name": "Stable Diffusion",
        "description": "StabilityAI推出的文本到图像生成AI",
        "url": "https://stability.ai",
        "category": "AI图像工具",
        "tags": ["AI","图像","生成","开源"]
    },
    {
        "name": "即梦",
        "description": "抖音旗下免费AI图片创作工具",
        "url": "https://jimengart.com",
        "category": "AI图像工具",
        "tags": ["AI","工具","图片","字节跳动","国产"]
    },
    {
        "name": "通义万相",
        "description": "阿里推出的AI创意内容生成平台",
        "url": "https://wanxiang.aliyun.com",
        "category": "AI图像工具",
        "tags": ["AI","创意","内容","阿里","国产"]
    },
    {
        "name": "秒画",
        "description": "商汤科技推出的免费AI作画和图片生成平台",
        "url": "https://miaohua.sensetime.com",
        "category": "AI图像工具",
        "tags": ["AI","作画","图片","商汤","国产"]
    },
    {
        "name": "有言",
        "description": "一站式AI视频创作和3D数字人生成平台",
        "url": "https://www.youyan3d.com",
        "category": "AI视频工具",
        "tags": ["AI","视频","数字人","3D"]
    },
    {
        "name": "Keevx",
        "description": "开箱即用的AI数字人视频创作工具",
        "url": "https://www.keevx.com",
        "category": "AI视频工具",
        "tags": ["AI","工具","数字人","视频"]
    },
    {
        "name": "智谱清影",
        "description": "智谱推出的免费AI视频生成工具",
        "url": "https://video.zhipuai.cn",
        "category": "AI视频工具",
        "tags": ["AI","工具","视频","免费","国产"]
    },
    {
        "name": "蛙蛙写作",
        "description": "AI小说和内容创作工具",
        "url": "https://wawawriter.com",
        "category": "AI写作工具",
        "tags": ["AI","工具","小说","创作"]
    },
    {
        "name": "秘塔写作猫",
        "description": "AI写作，文章自成",
        "url": "https://xiezuocat.com",
        "category": "AI写作工具",
        "tags": ["AI","写作","文章","国产"]
    },
    {
        "name": "小鱼AI写作",
        "description": "智能AI写作平台，可用AI自动生成高质量原创内容，满足不同场景、人群的创作需求",
        "url": "https://www.xiaoyuxiezuo.com",
        "category": "AI写作工具",
        "tags": ["AI","写作","原创","内容","智能"]
    },
    {
        "name": "AI内容管家",
        "description": "AI驱动的SEO挖词、写作、发布工具",
        "url": "https://guanjia.seowhy.com",
        "category": "AI写作工具",
        "tags": ["AI","SEO","内容","写作","发布"]
    },
    {
        "name": "迅捷AI写作",
        "description": "AI智能文字处理软件，提高写作效率和质量",
        "url": "https://www.aichat1234.com",
        "category": "AI写作工具",
        "tags": ["AI","写作","智能","文字处理","效率"]
    },
    {
        "name": "酷宣AI",
        "description": "快速生成高颜值文章，支持多平台同步",
        "url": "https://kuxuanai.com",
        "category": "AI写作工具",
        "tags": ["AI","文章","多平台","高颜值"]
    },
    {
        "name": "稿易AI论文",
        "description": "AI论文写作助手，免费生成2000字大纲",
        "url": "https://gaoyiai.com",
        "category": "AI学术写作",
        "tags": ["AI","助手","论文","学术"]
    },
    {
        "name": "千笔AI论文",
        "description": "全网首家论文无限改稿平台",
        "url": "https://www.qianbixiezuo.com",
        "category": "AI学术写作",
        "tags": ["AI","论文","改稿","学术"]
    },
    {
        "name": "66AI论文",
        "description": "高质量、低查重、低AIGC率的AI论文写作工具",
        "url": "https://www.66paper.cn",
        "category": "AI学术写作",
        "tags": ["AI","工具","论文","查重"]
    },
    {
        "name": "维普科创助手",
        "description": "维普的一站式AI科研服务平台",
        "url": "https://super.cqvip.com",
        "category": "AI学术写作",
        "tags": ["AI","助手","科研","维普"]
    },
    {
        "name": "茅茅虫",
        "description": "一站式AI论文写作助手",
        "url": "https://mymmc.cn",
        "category": "AI学术写作",
        "tags": ["AI","助手","论文","学术"]
    },
    {
        "name": "AI论文",
        "description": "免费专业论文写作和学术润色工具",
        "url": "https://ai-lunwen.com",
        "category": "AI学术写作",
        "tags": ["论文","学术","写作","润色"]
    },
    {
        "name": "LaTeX Base",
        "description": "在线LaTeX编辑与协作平台",
        "url": "https://latexbase.com",
        "category": "AI学术写作",
        "tags": ["LaTeX","编辑","协作","论文"]
    },
    {
        "name": "Writefull",
        "description": "学术英语写作改进工具",
        "url": "https://writefull.com",
        "category": "AI学术写作",
        "tags": ["学术","英语","写作","修改"]
    },
    {
        "name": "Research Rabbit",
        "description": "学术文献发现和可视化工具",
        "url": "https://researchrabbit.ai",
        "category": "AI学术写作",
        "tags": ["文献","研究","可视化","发现"]
    },
    {
        "name": "扣子PPT",
        "description": "免费一键生成精美PPT",
        "url": "https://www.coze.cn",
        "category": "AI办公工具",
        "tags": ["PPT","生成","办公","免费"]
    },
    {
        "name": "办公小浣熊",
        "description": "最强AI数据分析助手",
        "url": "https://www.xiaohuanxiong.com",
        "category": "AI办公工具",
        "tags": ["AI","助手","分析","数据","办公"]
    },
    {
        "name": "笔格AIPPT",
        "description": "高效的AI PPT生成工具",
        "url": "https://www.bigppt.cn",
        "category": "AI办公工具",
        "tags": ["AI","工具","PPT","办公"]
    },
    {
        "name": "协同AI",
        "description": "多模态AI办公协作平台",
        "url": "https://xietongai.com",
        "category": "AI办公工具",
        "tags": ["AI","协作","办公","多模态"]
    },
    {
        "name": "智谱文档",
        "description": "智谱AI推出的文档生成和处理工具",
        "url": "https://doc.zhipuai.cn",
        "category": "AI办公工具",
        "tags": ["AI","文档","生成","处理"]
    },
    {
        "name": "TRAE编程",
        "description": "字节跳动推出的免费AI编程工具，基于Claude模型",
        "url": "https://www.trae.cn",
        "category": "AI编程工具",
        "tags": ["AI","工具","编程","字节跳动","国产"]
    },
    {
        "name": "Qoder",
        "description": "阿里巴巴推出的AI Agentic编程工具",
        "url": "https://qoder.ai",
        "category": "AI编程工具",
        "tags": ["AI","工具","编程","阿里","国产"]
    },
    {
        "name": "DeepSeek Coder",
        "description": "专注于编程领域的开源AI助手",
        "url": "https://deepseekcoder.github.io",
        "category": "AI编程工具",
        "tags": ["AI","开源","编程","代码生成"]
    },
    {
        "name": "WisPaper",
        "description": "复旦团队推出的AI学术搜索工具",
        "url": "https://www.wispaper.ai",
        "category": "AI搜索工具",
        "tags": ["AI","工具","学术","搜索","国产"]
    },
    {
        "name": "心流",
        "description": "阿里旗下推出的AI搜索助手",
        "url": "https://iflow.cn",
        "category": "AI搜索工具",
        "tags": ["AI","助手","搜索","阿里","国产"]
    },
    {
        "name": "AMiner",
        "description": "智谱AI推出的大模型学术平台",
        "url": "https://www.aminer.cn",
        "category": "AI搜索工具",
        "tags": ["AI","学术","搜索","智谱","国产"]
    },
    {
        "name": "博查AI搜索",
        "description": "支持多模型的AI搜索引擎",
        "url": "https://bochaai.com",
        "category": "AI搜索工具",
        "tags": ["AI","搜索引擎","多模型","国产"]
    },
    {
        "name": "Kagi",
        "description": "注重隐私的AI增强搜索引擎",
        "url": "https://kagi.com",
        "category": "AI搜索工具",
        "tags": ["AI","搜索","隐私","付费"]
    },
    {
        "name": "Claude搜索",
        "description": "Anthropic推出的基于Claude的AI搜索功能",
        "url": "https://claude.ai",
        "category": "AI搜索工具",
        "tags": ["AI","搜索","Claude","Anthropic"]
    },
    {
        "name": "Tunee",
        "description": "首个对话式音乐创作AI智能体",
        "url": "https://tunee.ai",
        "category": "AI音频工具",
        "tags": ["AI","智能","音乐","创作","对话式"]
    },
    {
        "name": "FakeTTS",
        "description": "中文AI语音克隆工具",
        "url": "https://faketts.com",
        "category": "AI音频工具",
        "tags": ["AI","语音","克隆","中文"]
    },
    {
        "name": "Pic Copilot",
        "description": "阿里国际推出的AI电商设计工具",
        "url": "https://www.piccopilot.com",
        "category": "AI设计工具",
        "tags": ["AI","工具","电商","设计","阿里","国产"]
    },
    {
        "name": "创客贴AI",
        "description": "AI辅助的智能在线设计工具",
        "url": "https://aiart.chuangkit.com",
        "category": "AI设计工具",
        "tags": ["AI","工具","智能","设计","在线","辅助","国产"]
    },
    {
        "name": "通义千问开放平台",
        "description": "阿里通义千问推出的AI开放平台",
        "url": "https://dashscope.aliyun.com",
        "category": "AI平台与市场",
        "tags": ["AI","平台","开放","阿里","国产"]
    },
    {
        "name": "OpenAI平台",
        "description": "OpenAI官方API和开放平台",
        "url": "https://platform.openai.com",
        "category": "AI平台与市场",
        "tags": ["AI","平台","API","OpenAI"]
    },
    {
        "name": "Replicate",
        "description": "云端运行和部署AI模型的平台",
        "url": "https://replicate.com",
        "category": "AI平台与市场",
        "tags": ["AI","部署","云端","平台"]
    },
    {
        "name": "AI导航",
        "description": "500+精选AI工具导航平台",
        "url": "https://www.ainavw.com",
        "category": "AI工具推荐",
        "tags": ["AI","导航","工具","平台","国产"]
    },
    {
        "name": "夸克AI导航",
        "description": "阿里旗下夸克推出的AI工具导航",
        "url": "https://aitool.quark.cn",
        "category": "AI工具推荐",
        "tags": ["AI","工具","导航","夸克","阿里","国产"]
    },
    {
        "name": "爱作AI",
        "description": "免费的AI工具导航网站",
        "url": "https://www.aizuoai.com",
        "category": "AI工具推荐",
        "tags": ["AI","工具","导航","免费","国产"]
    },
    {
        "name": "AI玩家",
        "description": "AI应用导航，从入门到精通",
        "url": "https://www.aiplayer.cn",
        "category": "AI工具推荐",
        "tags": ["AI","导航","应用","入门","国产"]
    },
    {
        "name": "AI百科",
        "description": "一站式AI工具导航",
        "url": "https://www.aibaike.cn",
        "category": "AI工具推荐",
        "tags": ["AI","工具","导航","百科","国产"]
    },
    {
        "name": "FutureTools",
        "description": "收录最新AI工具的导航站",
        "url": "https://www.futuretools.io",
        "category": "AI工具推荐",
        "tags": ["AI","工具","导航","最新"]
    },
    {
        "name": "AI Depot",
        "description": "精选AI工具资源库",
        "url": "https://aidepot.co",
        "category": "AI工具推荐",
        "tags": ["AI","工具","资源","精选"]
    },
    {
        "name": "There's An AI For That",
        "description": "根据需求推荐AI工具的搜索引擎",
        "url": "https://theresanaiforthat.com",
        "category": "AI工具推荐",
        "tags": ["AI","工具","推荐","搜索"]
    },
    {
        "name": "TopAI.tools",
        "description": "按排名展示最优质的AI工具",
        "url": "https://topai.tools",
        "category": "AI工具推荐",
        "tags": ["AI","工具","排名","推荐"]
    },
    {
        "name": "万兴爱思AI学习",
        "description": "万兴科技推出的AI学习助手",
        "url": "https://ai.aiistudy.com",
        "category": "AI教育与学习",
        "tags": ["AI","助手","学习","万兴","国产"]
    },
    {
        "name": "李志平ChatGPT教程",
        "description": "李志平老师的ChatGPT高质量教程",
        "url": "https://chatgpt.lizhiping.net",
        "category": "AI教育与学习",
        "tags": ["教程","ChatGPT","学习","高质量","国产"]
    },
    {
        "name": "AI教程网",
        "description": "专注于AI学习和教程的网站",
        "url": "https://www.aijcw.com",
        "category": "AI教育与学习",
        "tags": ["AI","教程","学习","网站","国产"]
    },
    {
        "name": "吴恩达AI课程",
        "description": "AI大师吴恩达的机器学习课程",
        "url": "https://www.deeplearning.ai",
        "category": "AI教育与学习",
        "tags": ["AI","课程","机器学习","吴恩达"]
    },
    {
        "name": "李沐AI课程",
        "description": "李沐老师的AI和深度学习课程",
        "url": "https://space.bilibili.com",
        "category": "AI教育与学习",
        "tags": ["AI","课程","深度学习","李沐","国产"]
    },
    {
        "name": "AI研习社",
        "description": "极客邦AI学习社区",
        "url": "https://ai.geekbang.org",
        "category": "AI教育与学习",
        "tags": ["AI","学习","社区","极客邦","国产"]
    },
    {
        "name": "Elements of AI",
        "description": "芬兰赫尔辛基大学免费AI基础课程",
        "url": "https://www.elementsofai.com",
        "category": "AI教育与学习",
        "tags": ["AI","免费","基础","课程"]
    },
    {
        "name": "Fast.ai",
        "description": "免费实用的深度学习课程",
        "url": "https://www.fast.ai",
        "category": "AI教育与学习",
        "tags": ["深度学习","课程","实用","免费"]
    },
    {
        "name": "QR爱生成",
        "description": "AI二维码生成器，艺术二维码设计神器",
        "url": "https://www.qraishengcheng.cn",
        "category": "AI营销工具",
        "tags": ["AI","二维码","生成器","设计","国产"]
    },
    {
        "name": "AI子弹短信",
        "description": "短视频营销文案助手",
        "url": "https://www.zidanduanxin.com",
        "category": "AI营销工具",
        "tags": ["AI","助手","短视频","营销","文案","国产"]
    },
    {
        "name": "Copymatic",
        "description": "AI营销文案和内容创作平台",
        "url": "https://copymatic.ai",
        "category": "AI营销工具",
        "tags": ["AI","营销","文案","内容","创作"]
    },
    {
        "name": "AI广告狮",
        "description": "AI智能广告创意生成工具",
        "url": "https://guanggaoshi.com",
        "category": "AI营销工具",
        "tags": ["AI","广告","创意","生成","智能","国产"]
    },
    {
        "name": "SmartCopy",
        "description": "AI驱动的营销文案和广告复制工具",
        "url": "https://unbounce.com",
        "category": "AI营销工具",
        "tags": ["AI","驱动","营销","文案","广告"]
    },
    {
        "name": "Anyword",
        "description": "AI驱动的文案生成和优化平台",
        "url": "https://anyword.com",
        "category": "AI营销工具",
        "tags": ["AI","文案","优化","生成"]
    },
    {
        "name": "MarketMuse",
        "description": "AI驱动的内容规划和优化工具",
        "url": "https://www.marketmuse.com",
        "category": "AI营销工具",
        "tags": ["AI","内容","规划","优化"]
    },
    {
        "name": "Frase",
        "description": "AI驱动的SEO内容创作和优化平台",
        "url": "https://www.frase.io",
        "category": "AI营销工具",
        "tags": ["AI","SEO","内容","优化"]
    },
    {
        "name": "百度翻译",
        "description": "支持200多种语言的在线翻译平台",
        "url": "https://fanyi.baidu.com",
        "category": "AI翻译工具",
        "tags": ["翻译","百度","在线","多语言","国产"]
    },
    {
        "name": "有道翻译",
        "description": "网易旗下智能翻译工具",
        "url": "https://fanyi.youdao.com",
        "category": "AI翻译工具",
        "tags": ["翻译","智能","网易","工具","国产"]
    },
    {
        "name": "腾讯翻译",
        "description": "腾讯AI翻译平台",
        "url": "https://fanyi.qq.com",
        "category": "AI翻译工具",
        "tags": ["AI","翻译","腾讯","平台","国产"]
    },
    {
        "name": "火山翻译",
        "description": "字节旗下全球领先翻译引擎",
        "url": "https://translate.volcengine.com",
        "category": "AI翻译工具",
        "tags": ["翻译","引擎","字节","全球","国产"]
    },
    {
        "name": "ChatPaper",
        "description": "科研利器，AI论文翻译和总结工具",
        "url": "https://www.chatpaper.org",
        "category": "AI翻译工具",
        "tags": ["AI","论文","翻译","总结","科研","国产"]
    },
    {
        "name": "Lingvanex",
        "description": "支持178种语言的AI翻译工具",
        "url": "https://lingvanex.com",
        "category": "AI翻译工具",
        "tags": ["翻译","多语言","AI","语言"]
    },
    {
        "name": "Translate.com",
        "description": "提供人工和AI翻译服务",
        "url": "https://www.translate.com",
        "category": "AI翻译工具",
        "tags": ["翻译","服务","人工","AI"]
    },
    {
        "name": "SYSTRAN",
        "description": "专业的AI翻译解决方案",
        "url": "https://www.systransoft.com",
        "category": "AI翻译工具",
        "tags": ["翻译","解决方案","专业","AI"]
    },
    {
        "name": "Wordfast",
        "description": "专业译者使用的翻译记忆工具",
        "url": "https://www.wordfast.com",
        "category": "AI翻译工具",
        "tags": ["翻译","记忆","专业","工具"]
    },
    {
        "name": "Language Reactor",
        "description": "通过视频内容学习语言的翻译工具",
        "url": "https://www.languagereactor.com",
        "category": "AI翻译工具",
        "tags": ["翻译","学习","视频","语言"]
    },
    {
        "name": "智海律大模型",
        "description": "法院最高院用的法律大模型",
        "url": "https://zhihai.court.gov.cn",
        "category": "AI法律工具",
        "tags": ["大模型","法律","法院","最高院","国产"]
    },
    {
        "name": "法道GPT",
        "description": "专注于法律场景的AI助手",
        "url": "https://www.fadaogpt.com",
        "category": "AI法律工具",
        "tags": ["AI","助手","法律","场景","国产"]
    },
    {
        "name": "宜搜律师函",
        "description": "专业律师函一键生成平台",
        "url": "https://www.lshlawyer.com",
        "category": "AI法律工具",
        "tags": ["专业","律师函","生成","平台","国产"]
    },
    {
        "name": "智能法律助手",
        "description": "高效在线法律咨询和服务平台",
        "url": "https://www.66law.cn",
        "category": "AI法律工具",
        "tags": ["智能","法律","助手","咨询","服务","国产"]
    },
    {
        "name": "觅律",
        "description": "一站式AI法律服务平台",
        "url": "https://milvs.com",
        "category": "AI法律工具",
        "tags": ["AI","法律","服务","平台","国产"]
    },
    {
        "name": "墨丘利",
        "description": "专为律师打造的AI研究和法律创新平台",
        "url": "https://mercurieslaw.com",
        "category": "AI法律工具",
        "tags": ["AI","律师","研究","创新","国产"]
    },
    {
        "name": "LawGeex",
        "description": "AI合同审查和法律自动化平台",
        "url": "https://www.lawgeex.com",
        "category": "AI法律工具",
        "tags": ["AI","合同","审查","法律","自动化"]
    },
    {
        "name": "CaseText",
        "description": "AI驱动的法律研究工具",
        "url": "https://casetext.com",
        "category": "AI法律工具",
        "tags": ["AI","法律","研究","工具"]
    },
    {
        "name": "DoNotPay",
        "description": "世界首个AI律师机器人",
        "url": "https://donotpay.com",
        "category": "AI法律工具",
        "tags": ["AI","律师","机器人","法律"]
    },
    {
        "name": "Harvey",
        "description": "专为律所设计的生成式AI助手",
        "url": "https://harvey.ai",
        "category": "AI法律工具",
        "tags": ["AI","生成式","助手","律所"]
    },
    {
        "name": "Spellbook",
        "description": "专为律师设计的AI合同起草工具",
        "url": "https://spellbook.legal",
        "category": "AI法律工具",
        "tags": ["AI","合同","起草","律师"]
    },
    {
        "name": "腾讯觅影",
        "description": "腾讯推出的医疗AI辅助诊断产品",
        "url": "https://miying.qq.com",
        "category": "AI医疗健康",
        "tags": ["腾讯","医疗","AI","辅助","诊断","国产"]
    },
    {
        "name": "阿里健康AI",
        "description": "阿里健康推出的AI医疗服务",
        "url": "https://www.alihealth.cn",
        "category": "AI医疗健康",
        "tags": ["阿里","健康","AI","医疗","服务","国产"]
    },
    {
        "name": "讯飞医疗",
        "description": "科大讯飞旗下AI医疗产品",
        "url": "https://medical.xfyun.cn",
        "category": "AI医疗健康",
        "tags": ["讯飞","医疗","AI","产品","科大讯飞","国产"]
    },
    {
        "name": "健问智能",
        "description": "医疗人工智能问诊平台",
        "url": "https://www.jianwen.com.cn",
        "category": "AI医疗健康",
        "tags": ["医疗","人工智能","问诊","平台","国产"]
    },
    {
        "name": "百度健康AI",
        "description": "百度旗下AI医疗健康服务",
        "url": "https://health.baidu.com",
        "category": "AI医疗健康",
        "tags": ["百度","健康","AI","医疗","服务","国产"]
    },
    {
        "name": "Nabla",
        "description": "AI医生助手和临床自动化平台",
        "url": "https://www.nabla.com",
        "category": "AI医疗健康",
        "tags": ["AI","医生","助手","临床","自动化"]
    },
    {
        "name": "Ada Health",
        "description": "AI驱动的健康评估和咨询平台",
        "url": "https://ada.com",
        "category": "AI医疗健康",
        "tags": ["AI","健康","评估","咨询"]
    },
    {
        "name": "BenevolentAI",
        "description": "利用AI加速药物发现的平台",
        "url": "https://www.benevolent.com",
        "category": "AI医疗健康",
        "tags": ["AI","药物","发现","研究"]
    },
    {
        "name": "Tempus",
        "description": "利用AI分析临床和分子数据的精准医疗平台",
        "url": "https://www.tempus.com",
        "category": "AI医疗健康",
        "tags": ["AI","精准医疗","数据","分析"]
    },
    {
        "name": "Atomwise",
        "description": "AI驱动的药物发现平台",
        "url": "https://www.atomwise.com",
        "category": "AI医疗健康",
        "tags": ["AI","药物","发现","研究"]
    },
    {
        "name": "阿里云DataWorks",
        "description": "阿里云推出的一站式大数据开发治理平台",
        "url": "https://www.aliyun.com",
        "category": "AI数据分析",
        "tags": ["阿里","云","大数据","开发","治理","国产"]
    },
    {
        "name": "Microsoft Power BI",
        "description": "微软推出的商业智能分析服务",
        "url": "https://powerbi.microsoft.com",
        "category": "AI数据分析",
        "tags": ["微软","商业","智能","分析","服务"]
    },
    {
        "name": "奇安信",
        "description": "领先的网络安全服务提供商",
        "url": "https://www.qianxin.com",
        "category": "AI安全与隐私",
        "tags": ["网络安全","服务","提供商","国产"]
    },
    {
        "name": "360企业安全",
        "description": "360推出的企业级安全解决方案",
        "url": "https://b.360.cn",
        "category": "AI安全与隐私",
        "tags": ["企业","安全","解决方案","360","国产"]
    },
    {
        "name": "腾讯安全",
        "description": "腾讯推出的安全防护平台",
        "url": "https://security.tencent.com",
        "category": "AI安全与隐私",
        "tags": ["腾讯","安全","防护","平台","国产"]
    },
    {
        "name": "Google Cloud",
        "description": "谷歌推出的云计算服务平台",
        "url": "https://cloud.google.com",
        "category": "AI企业服务",
        "tags": ["谷歌","云","计算","服务","平台"]
    },
    {
        "name": "算了么AI",
        "description": "卦解心声的AI易经占卜师",
        "url": "https://suanleme.gebagi.com",
        "category": "AI娱乐工具",
        "tags": ["AI"]
    },
    {
        "name": "AI游戏素材生成器",
        "description": "AI游戏素材生成器是一个创新的游戏开发辅助工具，它通过AI技术简化了游戏美术资源的创作过程。这个平台不仅为独立开发者和小团队节省了成本，也为大型团队提高了工作效率，使得游戏开发变得更加高效和便捷。",
        "url": "https://game-generator.com",
        "category": "AI游戏工具",
        "tags": ["AI","工具","效率","辅助"]
    },
    {
        "name": "启元世界",
        "description": "暂无描述",
        "url": "https://www.inspirai.com",
        "category": "AI世界构建",
        "tags": []
    },
    {
        "name": "Promethean AI",
        "description": "Promethean AI是一个强大的AI助手，为创意团队提供了一个无需上传资产和更换编辑器即可使用的平台。它通过企业级的数据安全和工作流定制功能，帮助团队提高生产效率，同时保持创意流程的完整性。",
        "url": "https://www.prometheanai.com",
        "category": "AI聊天助手",
        "tags": ["AI","效率","助手"]
    },
    {
        "name": "Inworld AI",
        "description": "Inworld AI是一个综合性的AI游戏开发平台，它通过提供先进的NPC逻辑、互动剧情设计工具、实时AI反应和自然语音生成等功能，极大地增强了游戏的沉浸感和互动性。",
        "url": "https://inworld.ai",
        "category": "AI游戏工具",
        "tags": ["AI","工具","设计"]
    },
    {
        "name": "Layer AI",
        "description": "Layer AI是一个强大的工具，它通过AI技术帮助游戏工作室在保持艺术风格一致性的同时，提高生产效率和创造力。",
        "url": "https://www.layer.ai",
        "category": "AI游戏工具",
        "tags": ["AI","工具","效率"]
    },
    {
        "name": "Rosebud AI",
        "description": "Rosebud AI是一个创新的游戏开发工具，它通过AI技术简化了游戏创作的复杂性，使得从初学者到经验丰富的开发者都能够快速地将想法转化为游戏。",
        "url": "https://www.rosebud.ai",
        "category": "AI游戏工具",
        "tags": ["AI","工具"]
    },
    {
        "name": "Scenario",
        "description": "Scenario是一个强大的工具，它通过AI技术帮助游戏开发者和设计师创建和定制游戏资产。用户可以根据自己的需求训练AI模型，并通过高级控制功能精确调整生成的资产。",
        "url": "https://www.scenario.com",
        "category": "AI游戏工具",
        "tags": ["AI","工具","设计"]
    },
    {
        "name": "DefinityLegend",
        "description": "DefinityLegend是一个创新的游戏平台，它通过提供无代码的游戏构建工具，降低了游戏开发的门槛，使得任何有创意的人都可以成为游戏开发者",
        "url": "https://www.definitylegend.com",
        "category": "AI游戏工具",
        "tags": ["工具"]
    },
    {
        "name": "Octokit",
        "description": "Octokit是一个多功能的无代码游戏创作工具，它通过提供丰富的模板和资产，简化了游戏开发和部署流程，使得任何用户都能轻松创建游戏化产品。",
        "url": "https://octokit.co",
        "category": "AI游戏工具",
        "tags": ["工具"]
    },
    {
        "name": "Charmed AI",
        "description": "Charmed AI是一个强大的3D创作工具，它通过AI技术简化了3D建模和动画制作的流程。无论是生成3D几何体、应用纹理、还是动画绑定，Charmed AI都提供了高效的解决方案，使用户能够快速将创意转化为现实，同时保持对细节的精确控制。",
        "url": "https://charmed.ai",
        "category": "AI工具",
        "tags": ["AI","工具"]
    },
    {
        "name": "Biomes",
        "description": "暂无描述",
        "url": "https://www.biomes.gg",
        "category": "AI工具",
        "tags": []
    },
    {
        "name": "The Simulation",
        "description": "仿真是一个人工intelligence-...",
        "url": "https://fablesimulation.com",
        "category": "AI工具",
        "tags": []
    },
    {
        "name": "GGPredict",
        "description": "提高你的CS:技能的力量AI-gen...",
        "url": "https://ggpredict.io",
        "category": "AI工具",
        "tags": ["AI"]
    },
    {
        "name": "LitRPG Adventures",
        "description": "先进的桌面RPG发电机内容库D",
        "url": "https://litrpgadventures.com",
        "category": "AI工具",
        "tags": []
    },
    {
        "name": "Convai Technologies Inc.",
        "description": "Convai Technologies Inc.为...",
        "url": "https://convai.com",
        "category": "AI工具",
        "tags": []
    },
    {
        "name": "Orbofi",
        "description": "Orbofi允许用户为web3、游戏...",
        "url": "https://www.orbofi.com",
        "category": "AI游戏工具",
        "tags": []
    },
    {
        "name": "AI Roguelite",
        "description": "【付费】AI Roguelite是一款...",
        "url": "https://store.steampowered.com",
        "category": "AI工具",
        "tags": ["AI"]
    },
    {
        "name": "rct AI",
        "description": "生活有无限可能。我们相信我...",
        "url": "https://rct.ai",
        "category": "AI工具",
        "tags": ["AI"]
    },
    {
        "name": "Pixela.ai",
        "description": "Pixela.ai允许用户上传稳定扩散算法生成的图像与社区共享。该工具还允许用户找到随机纹理。",
        "url": "https://pixela.ai",
        "category": "AI开发社区",
        "tags": ["工具"]
    },
    {
        "name": "Postme",
        "description": "快速生成高质量外贸营销文案",
        "url": "https://www.postme.cn",
        "category": "AI写作工具",
        "tags": []
    },
    {
        "name": "无痕AI",
        "description": "一键无痕去除视频中的水印与字幕",
        "url": "https://www.wuhenai.com",
        "category": "AI工具",
        "tags": ["AI"]
    },
    {
        "name": "易可图",
        "description": "电商人都在用的AI设计平台",
        "url": "https://www.yiketu.com",
        "category": "AI工具",
        "tags": ["AI","电商","设计"]
    },
    {
        "name": "及时语",
        "description": "跨境出海企业智能客服平台，提供强大的AI多轮交互能力，智能高效的客服工作台，多平台/多渠道集中统一管理等服务。",
        "url": "https://www.jishiyuchat.com",
        "category": "AI工具",
        "tags": ["AI","智能","跨境"]
    },
    {
        "name": "一拍秀",
        "description": "一拍秀能更低成本、更便捷的帮助用户去生成制作3D模型",
        "url": "https://www.1pxiu.com",
        "category": "AI工具",
        "tags": []
    },
    {
        "name": "Chato AI",
        "description": "帮您快速构建专属机器人",
        "url": "https://chato.cn",
        "category": "AI聊天助手",
        "tags": ["AI"]
    },
    {
        "name": "跨赋-跨境AI退税",
        "description": "专门针对跨境领域的AI应用服务产品",
        "url": "https://www.aikuafu.com",
        "category": "AI工具",
        "tags": ["AI","跨境"]
    },
    {
        "name": "TipRanks",
        "description": "一个为投资者提供股票市场研究、新闻和分析师预测的工具",
        "url": "https://www.tipranks.com",
        "category": "AI数据分析",
        "tags": ["工具","分析"]
    },
    {
        "name": "Finchat",
        "description": "准确地提供了上市公司的验证数据。",
        "url": "https://finchat.io",
        "category": "AI聊天助手",
        "tags": []
    },
    {
        "name": "Morphlin",
        "description": "Morphlin 是一款基于人工智能的工具，旨在通过为交易者提供有效的借贷策略、网格策略以及跨市场和交易所的实时信号推送通知来增强交易者的能力。",
        "url": "https://www.morphlin.com",
        "category": "AI工具",
        "tags": ["工具","智能"]
    },
    {
        "name": "Paymefy",
        "description": "Paymefy是一款人工智能催收工具，通过自动通知和促进一键支付，帮助企业优化催收流程。它有助于降低运营成本和恢复时间，根据用户的视觉识别定制通知，并从拒绝偿还债务的客户那里接收可操作的反馈。该工具还可以与erp和crm集成，并提供多发票和分期付款选项。",
        "url": "https://www.paymefy.com",
        "category": "AI工具",
        "tags": ["工具","智能","运营"]
    },
    {
        "name": "Truewind",
        "description": "Truewind是一款人工智能记账和财务工具，旨在让创业公司的后台财务更简单、更高效。它提供人工智能和礼宾服务的结合，通过准确的簿记、详细的财务模型和更快的月度结帐，提供令人愉快的财务后台体验。Truewind还提供世界级的支持和模板风格指南。",
        "url": "https://www.truewind.ai",
        "category": "AI世界构建",
        "tags": ["工具","智能"]
    },
    {
        "name": "AlphaResearch",
        "description": "AlphaResearch是一个提供人工智能搜索引擎的平台，帮助投资者从非结构化文本、文件、业绩电话记录等中提取信息。它提供了一系列功能，包括文件搜索、文件警报和文件筛选、趋势话题和情绪分析、新闻观察、内幕交易和机构所有权分析、ETF和共同基金持股、笔记记录以及全球基本面和估计。",
        "url": "https://alpharesearch.io",
        "category": "AI数据分析",
        "tags": ["智能","分析"]
    },
    {
        "name": "AI Competence",
        "description": "AI Competence一个在10秒左右为用户提供免费ai (GPT-3驱动)公司价值增值报告的工具。用户可以输入他们感兴趣的公司名称，然后将收到一份概述该公司重要信息的报告。该网站还为人工智能社区提供资源和灵感。",
        "url": "https://freshly.ai",
        "category": "AI开发社区",
        "tags": ["AI","工具","智能"]
    },
    {
        "name": "ChainGPT",
        "description": "ChainGPT是一个基于区块链的人工智能模型，旨在帮助个人和企业完成所有加密和区块链相关的任务。它使用变压器网络等深度学习技术来生成类似人类的文本，并回答有关加密和区块链的问题。它可以帮助编程和开发任务，区块链分析，风险管理，人工智能交易等。",
        "url": "https://www.chaingpt.org",
        "category": "AI教育与学习",
        "tags": ["智能","分析"]
    },
    {
        "name": "Finalle.ai",
        "description": "Finalle.ai是一个基于新媒体数据和Gen. ai技术的金融智能平台。该平台汇总并分析大量金融资源，为投资者提供实时、全面的市场及其驱动力视图。",
        "url": "https://finalle.ai",
        "category": "AI数据分析",
        "tags": ["智能","分析"]
    },
    {
        "name": "Rose.ai",
        "description": "Rose是一个云数据平台，旨在帮助用户查找、参与、可视化和共享数据。它支持外部和内部数据的集成，并能够为内部团队或第三方授予数据权限。",
        "url": "https://rose.ai",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "AiTax",
        "description": "AiTax是一款基于人工智能的报税软件，可以帮助企业家准确高效地报税，同时避免错误，增加潜在的退款，避免不必要的审计。",
        "url": "https://www.aitax.com",
        "category": "AI工具",
        "tags": ["智能"]
    },
    {
        "name": "Tendi",
        "description": "Tendi是您的个人AI财务顾问，旨在帮助用户设定财务目标、制定预算、减少债务、积累储蓄、明智投资并实现退休。通过分析支出、储蓄和投资行为，提供可操作的见解。",
        "url": "https://tendi.ai",
        "category": "AI数据分析",
        "tags": ["AI","分析"]
    },
    {
        "name": "投搜AI",
        "description": "投搜AI是一款专注于投资研究的AI应用，利用先进的人工智能技术，为您提供个性化的投资分析和实时的市场洞察。",
        "url": "https://tousouai.com",
        "category": "AI数据分析",
        "tags": ["AI","智能","分析"]
    },
    {
        "name": "Avanzai",
        "description": "Avanzai是一款AI助手，允许用户使用自然语言生成可用于生产的Python代码，从而帮助加速金融数据分析。",
        "url": "https://avanz.ai",
        "category": "AI聊天助手",
        "tags": ["AI","助手","分析"]
    },
    {
        "name": "Gather AI",
        "description": "Gather AI是一款强大的应付账款软件，为高增长的财务团队提供智能和自动化来简化、增压和节省。它提供了无与伦比的智能和可见性，以识别难以察觉的趋势，深入洞察核心驱动因素，并发现超支领域。",
        "url": "https://www.glean.ai",
        "category": "AI工具",
        "tags": ["AI","智能"]
    },
    {
        "name": "Genius Sheets",
        "description": "Genius Sheets是一款基于人工智能的工具，可以根据文本提示提供即时分析。它允许用户从现有的Excel或谷歌Sheets工作簿中生成报告和财务模型，从而使用户能够以全新的方式与数据交互。",
        "url": "https://www.geniussheets.com",
        "category": "AI数据分析",
        "tags": ["工具","智能","分析"]
    },
    {
        "name": "满分语法",
        "description": "一键检查并修正所有的英语语法错误、拼写错误和标点符号错误",
        "url": "https://manfenyufa.com",
        "category": "AI语言学习",
        "tags": []
    },
    {
        "name": "PhET",
        "description": "PhET 是一个由科罗拉多大学开发的互动仿真程序平台，旨在通过互动模拟帮助学生更好地理解科学和数学概念。提供丰富的仿真程序，覆盖物理、化学、生物、数学等多个学科，支持多语言，完全免费。",
        "url": "https://phet.colorado.edu",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "搜狐公众平台",
        "description": "",
        "url": "http://mp.sohu.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "百度百家",
        "description": "",
        "url": "http://baijia.baidu.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "一点资讯",
        "description": "",
        "url": "http://www.yidianzixun.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "数英网",
        "description": "",
        "url": "http://www.digitaling.com/",
        "category": "营销推广",
        "tags": []
    },
    {
        "name": "A5 站长网",
        "description": "",
        "url": "http://www.admin5.com/",
        "category": "营销推广",
        "tags": []
    },
    {
        "name": "站长之家",
        "description": "",
        "url": "http://www.chinaz.com/",
        "category": "营销推广",
        "tags": []
    },
    {
        "name": "涨粉圈",
        "description": "",
        "url": "https://t.zsxq.com/mYn6iEm",
        "category": "营销推广",
        "tags": []
    },
    {
        "name": "派代网",
        "description": "",
        "url": "http://www.paidai.com/",
        "category": "营销推广",
        "tags": []
    },
    {
        "name": "搜我们",
        "description": "",
        "url": "http://sowm.cn/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "艾瑞网",
        "description": "",
        "url": "http://www.iresearch.cn/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "36 氪",
        "description": "",
        "url": "http://36kr.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "i 黑马",
        "description": "",
        "url": "http://www.iheima.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "虎嗅网",
        "description": "",
        "url": "http://www.huxiu.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "创见",
        "description": "",
        "url": "http://tech2ipo.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "裂变星球",
        "description": "",
        "url": "https://t.zsxq.com/6EUNnyJ",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "国际热点新闻语义式拓展网",
        "description": "",
        "url": "http://hithot.cc/zh_CN",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "品读价值书籍阅读推荐网",
        "description": "",
        "url": "http://www.pento.cn/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "自媒体引流汇总",
        "description": "",
        "url": "https://hdk125.lanzous.com/b00n5qrhe",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "壹读传媒",
        "description": "",
        "url": "http://yidu.im/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "理想生活实验室",
        "description": "",
        "url": "http://www.toodaylab.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "画旅途",
        "description": "",
        "url": "http://www.hualvtu.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "妞新闻",
        "description": "",
        "url": "http://www.niusnews.com/",
        "category": "资讯与媒体",
        "tags": []
    },
    {
        "name": "昵图网",
        "description": "",
        "url": "http://www.nipic.com/index.html",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "天堂图片网",
        "description": "",
        "url": "http://www.ivsky.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "大图网",
        "description": "",
        "url": "http://www.daimg.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "123RF",
        "description": "",
        "url": "http://www.123rf.com.cn/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "我图网",
        "description": "",
        "url": "http://www.ooopic.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "搜狗素材",
        "description": "",
        "url": "http://sucai.sogou.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "POCO 摄影社区",
        "description": "",
        "url": "http://photo.poco.cn/like",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "苏打苏塔",
        "description": "",
        "url": "http://sudasuta.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "全景",
        "description": "",
        "url": "http://www.quanjing.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "优美图",
        "description": "",
        "url": "http://www.youmeitu.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "视觉 ME",
        "description": "",
        "url": "http://shijue.me/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "堆糖网",
        "description": "",
        "url": "http://www.duitang.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Dreamstime",
        "description": "",
        "url": "https://www.dreamstime.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Life Of Pix",
        "description": "",
        "url": "http://www.lifeofpix.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Free Digital Photos",
        "description": "",
        "url": "http://www.freedigitalphotos.net/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "IM Creator",
        "description": "",
        "url": "http://www.imcreator.com/free",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Free Photos Bank",
        "description": "",
        "url": "http://www.freephotosbank.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "PicJumbo",
        "description": "",
        "url": "https://picjumbo.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Pickupimage",
        "description": "",
        "url": "http://pickupimage.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Illusion Magazine",
        "description": "",
        "url": "http://illusion.scene360.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "9GAG",
        "description": "",
        "url": "http://9gag.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "GIF 酷",
        "description": "",
        "url": "http://gifcool.lofter.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Kotaiguchi-gif",
        "description": "",
        "url": "http://kotaiguchi-gif.tumblr.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Rafael-varona",
        "description": "",
        "url": "http://www.rafael-varona.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Golden Wolf",
        "description": "",
        "url": "http://goldenwolf.tv/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Julian Glander",
        "description": "",
        "url": "http://glander.co/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Gifparanoia",
        "description": "",
        "url": "http://www.gifparanoia.org/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "秀米微信图文排版工具",
        "description": "",
        "url": "http://xiumi.us/#",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "I排版",
        "description": "",
        "url": "http://www.ipaiban.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "135微信编辑器",
        "description": "",
        "url": "http://www.135editor.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "96 微信编辑器",
        "description": "",
        "url": "http://bj.96weixin.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "易点微信编辑器",
        "description": "",
        "url": "http://wxedit.yead.net/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "小蚂蚁微信编辑器",
        "description": "",
        "url": "http://www.xmyeditor.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "91 微信编辑器",
        "description": "",
        "url": "http://bj.91join.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "微信在线编辑器",
        "description": "",
        "url": "http://wx.bzrw.net/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "005 微信编辑器",
        "description": "",
        "url": "http://bj.weixin005.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "乐排图文编辑工具",
        "description": "",
        "url": "http://pb.ishangtong.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "爱美编",
        "description": "",
        "url": "http://www.imeibian.com/main.html",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "天行微信编辑器",
        "description": "",
        "url": "http://tx.huceo.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "秀多多图文编辑器",
        "description": "",
        "url": "http://xiudodo.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "小易微信编辑器",
        "description": "",
        "url": "http://xiaoyi.e7wei.cn/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "微信圈圈排版助手",
        "description": "",
        "url": "http://www.weixinquanquan.com/wxeditor",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "新浪微博短链接生成器",
        "description": "",
        "url": "http://www.surl.sinaapp.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "T.IM 短网址/短链接生成器",
        "description": "",
        "url": "http://t.im/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "百度短网址",
        "description": "",
        "url": "http://www.dwz.cn/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "I 排版短链接生成器",
        "description": "",
        "url": "http://xhr.so/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "易企秀",
        "description": "",
        "url": "http://www.eqxiu.com/show",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "兔展",
        "description": "",
        "url": "http://www.rabbitpre.com/store",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "秀制作",
        "description": "",
        "url": "http://xiumi.us/studio/booklet#/for/new",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "Maka",
        "description": "",
        "url": "http://maka.im/store",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "咫尺微页",
        "description": "",
        "url": "http://www.zhichiwangluo.com/",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "初页",
        "description": "",
        "url": "http://www.ichuye.cn/",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "Epub360 意派",
        "description": "",
        "url": "http://www.epub360.com/",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "Vxplo",
        "description": "",
        "url": "http://www.ih5.cn/not-logged-in",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "搜狐快站",
        "description": "",
        "url": "http://www.kuaizhan.com/",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "易传单",
        "description": "",
        "url": "http://echuandan.com/",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "Liveapp 场景应用/云来",
        "description": "",
        "url": "http://www.liveapp.cn/",
        "category": "H5制作工具",
        "tags": []
    },
    {
        "name": "草料",
        "description": "",
        "url": "http://cli.im/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "联图网",
        "description": "",
        "url": "http://www.liantu.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "鑫码",
        "description": "",
        "url": "http://www.xmesm.cn/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "59na",
        "description": "",
        "url": "http://qr.59na.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "仍赞",
        "description": "",
        "url": "http://ewm.rengzan.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "wwei 微微",
        "description": "",
        "url": "http://www.wwei.cn/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "Q码",
        "description": "",
        "url": "http://www.qmacode.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "QR Stuff",
        "description": "",
        "url": "http://www.qrstuff.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "Visualead",
        "description": "",
        "url": "http://www.visualead.com/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "Littleidiot",
        "description": "",
        "url": "https://qrcode.littleidiot.be/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "TalkingData",
        "description": "",
        "url": "http://www.talkingdata.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "CNZZ",
        "description": "",
        "url": "http://www.cnzz.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "百度指数",
        "description": "",
        "url": "http://index.baidu.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "Datahoop 大数据分析平台",
        "description": "",
        "url": "http://www.datahoop.cn/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "前瞻网",
        "description": "",
        "url": "http://www.qianzhan.com/qzdata/list/147.html",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "数据观",
        "description": "",
        "url": "http://www.cbdio.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "易观",
        "description": "",
        "url": "http://www.analysys.cn/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "中国统计网",
        "description": "",
        "url": "http://www.itongji.cn/cms/article/index",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "网站数据分析",
        "description": "",
        "url": "http://webdataanalysis.net/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "阿里指数",
        "description": "",
        "url": "http://index.1688.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "199IT",
        "description": "",
        "url": "http://www.199it.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "网站分析在中国",
        "description": "",
        "url": "http://www.chinawebanalytics.cn/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "DCCI 互联网数据中心",
        "description": "",
        "url": "http://www.dcci.com.cn/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "36大数据",
        "description": "",
        "url": "http://www.36dsj.com/",
        "category": "AI数据分析",
        "tags": []
    },
    {
        "name": "暴走漫画制作器",
        "description": "",
        "url": "http://baozoumanhua.com/makers",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "豆饼软件网",
        "description": "",
        "url": "http://www.doubean.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "爱斗图（斗图神器）",
        "description": "",
        "url": "http://www.adoutu.com/pages/index.php",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "起点学院",
        "description": "",
        "url": "http://www.qidianla.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "三节课",
        "description": "",
        "url": "http://www.sanjieke.cn/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "馒头商学院",
        "description": "",
        "url": "http://www.mtedu.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "插座学院",
        "description": "",
        "url": "http://www.chazuomba.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "黑马学院",
        "description": "",
        "url": "http://xueyuan.iheima.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "91 运营网",
        "description": "",
        "url": "http://www.yunying.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "慕课网 (IMOOC)",
        "description": "",
        "url": "http://www.imooc.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "极客学院",
        "description": "",
        "url": "http://www.jikexueyuan.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "25 学堂",
        "description": "",
        "url": "http://www.25xt.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "MOOC 学院",
        "description": "",
        "url": "http://mooc.guokr.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "网易云课堂",
        "description": "",
        "url": "http://study.163.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "腾讯课堂",
        "description": "",
        "url": "https://ke.qq.com/",
        "category": "AI教育与学习",
        "tags": []
    },
    {
        "name": "UI 中国灵感库",
        "description": "",
        "url": "http://idea.ui.cn/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "设计癖",
        "description": "",
        "url": "http://www.shejipi.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "设计青年",
        "description": "",
        "url": "http://www.design521.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Oritive 创意设计",
        "description": "",
        "url": "http://www.oritive.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "创意美图小站",
        "description": "",
        "url": "http://www.poboo.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "网络广告人社区",
        "description": "",
        "url": "http://iwebad.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "懒人图库",
        "description": "",
        "url": "http://www.lanrentuku.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "中国广告网",
        "description": "",
        "url": "http://www.cnad.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "广告放肆",
        "description": "",
        "url": "http://adfuns.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "创意网",
        "description": "",
        "url": "http://www.fsdpp.cn/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "设计 2 点半",
        "description": "",
        "url": "http://www.2dianban.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Inspiration Grid",
        "description": "",
        "url": "http://theinspirationgrid.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "siteInspire",
        "description": "",
        "url": "https://www.siteinspire.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "welovead",
        "description": "",
        "url": "http://www.welovead.com/cn",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "AdSoftheWorld",
        "description": "",
        "url": "http://adsoftheworld.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Framelab Design Direction",
        "description": "",
        "url": "http://www.frmlb.de/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Cargo",
        "description": "",
        "url": "http://cargocollective.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "boredpanda",
        "description": "",
        "url": "http://www.boredpanda.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Creativebloq",
        "description": "",
        "url": "http://www.creativebloq.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Creative Guerrilla Marketing",
        "description": "",
        "url": "http://www.creativeguerrillamarketing.com/",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "Yin liuzhangfen",
        "description": "",
        "url": "https://jinshuju.net/f/tQjCgL",
        "category": "创意灵感",
        "tags": []
    },
    {
        "name": "XMind 思维导图软件",
        "description": "",
        "url": "http://www.xmindchina.net/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "Mindjet 思维导图软件",
        "description": "",
        "url": "http://www.mindmanager.cc/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "FreeMind 思维导图",
        "description": "",
        "url": "http://freemind.en.softonic.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "iMindMap 思维导图软件",
        "description": "",
        "url": "http://www.imindmap.cc/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "百度脑图",
        "description": "",
        "url": "http://naotu.baidu.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "MINDPINTEAM",
        "description": "",
        "url": "http://mindmap.4ye.me/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "Mindomo",
        "description": "",
        "url": "https://www.mindomo.com/zh",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "LOGO 圈",
        "description": "",
        "url": "http://www.logoquan.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "LOGO 之家",
        "description": "",
        "url": "http://www.logozj.com/index.html",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "字体中国",
        "description": "",
        "url": "http://www.zitichina.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "logo 社",
        "description": "",
        "url": "http://www.logoshe.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "钙网",
        "description": "",
        "url": "http://www.uugai.com/logoa/logojz.php",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "LogoDesignLove",
        "description": "",
        "url": "http://www.logodesignlove.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "identity view",
        "description": "",
        "url": "http://identityview.net/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logo Talks",
        "description": "",
        "url": "http://www.logotalkz.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logospire",
        "description": "",
        "url": "http://logospire.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logooftheday",
        "description": "",
        "url": "http://logooftheday.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "LogoGalleria",
        "description": "",
        "url": "http://www.logogalleria.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "LogoFi",
        "description": "",
        "url": "http://logofi.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logo Faves",
        "description": "",
        "url": "http://logofaves.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logolicia",
        "description": "",
        "url": "http://www.logolicia.com.br/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logolog",
        "description": "",
        "url": "http://www.logolog.info/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Logoed",
        "description": "",
        "url": "http://www.logoed.co.uk/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Brands of the world",
        "description": "",
        "url": "https://www.brandsoftheworld.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "The Design Inspiration",
        "description": "",
        "url": "http://thedesigninspiration.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "kuler",
        "description": "",
        "url": "https://color.adobe.com/zh/create/color-wheel",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "NIPPON COLORS",
        "description": "",
        "url": "http://nipponcolors.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Colourlovers",
        "description": "",
        "url": "http://www.colourlovers.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "uiGradients",
        "description": "",
        "url": "http://uigradients.com/#",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "CSS Winner",
        "description": "",
        "url": "http://www.csswinner.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Material-UI",
        "description": "",
        "url": "https://www.materialui.co/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Peise（配色网）",
        "description": "",
        "url": "http://www.peise.net/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "ColorSchemeDesigner",
        "description": "",
        "url": "http://www.peise.net/tools/web",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "配色展示",
        "description": "",
        "url": "http://www.e754.com/color",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "中国色",
        "description": "",
        "url": "http://color.uisdc.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "中国传统色彩",
        "description": "",
        "url": "http://chinese.traditionalcolors.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "创意人",
        "description": "",
        "url": "http://chuangyiren.cn/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "绘世界网",
        "description": "",
        "url": "http://www.huisj.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "798 手绘网",
        "description": "",
        "url": "http://www.qijiuba.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "漫悠悠",
        "description": "",
        "url": "http://www.muu.com.cn/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "CCIUP（中国动漫插画）",
        "description": "",
        "url": "http://cciup.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "CG 部落",
        "description": "",
        "url": "http://www.cgbolo.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "插画家园",
        "description": "",
        "url": "http://www.13cg.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "动漫之家",
        "description": "",
        "url": "http://www.dmzj.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "布卡漫画",
        "description": "",
        "url": "http://www.buka.cn/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "笨狗漫画",
        "description": "",
        "url": "http://www.51bengou.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Nate Williams",
        "description": "",
        "url": "http://www.n8w.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Sakiroo",
        "description": "",
        "url": "http://sakiroo.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Illustrationweb",
        "description": "",
        "url": "http://www.illustrationweb.com.cn/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Howtoons",
        "description": "",
        "url": "http://www.howtoons.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Drawr",
        "description": "",
        "url": "http://drawr.net/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Fredo and Pidjin",
        "description": "",
        "url": "http://www.pidjin.net/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Pixiv（P 站）",
        "description": "",
        "url": "http://www.pixiv.net/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "CartoonStock",
        "description": "",
        "url": "http://www.cartoonstock.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "Central IllustrationAgency",
        "description": "",
        "url": "http://www.directoryofillustration.com/",
        "category": "插画与漫画",
        "tags": []
    },
    {
        "name": "CorelDRAW",
        "description": "",
        "url": "http://www.coreldrawchina.com/",
        "category": "AI设计工具",
        "tags": []
    },
    {
        "name": "海报工厂",
        "description": "",
        "url": "http://www.posterlabs.com/",
        "category": "AI设计工具",
        "tags": []
    },
    {
        "name": "WebsiteTemplates",
        "description": "",
        "url": "http://www.templatemonster.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "One Page Love",
        "description": "",
        "url": "https://onepagelove.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Landingfolio",
        "description": "",
        "url": "http://www.landingfolio.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "DreamTemplate",
        "description": "",
        "url": "http://www.dreamtemplate.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "EntheosWeb",
        "description": "",
        "url": "http://templates.entheosweb.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "FreeWeb",
        "description": "",
        "url": "http://www.freewebtemplates.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "TEMPLATED",
        "description": "",
        "url": "https://templated.co/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "模板之家",
        "description": "",
        "url": "http://www.cssmoban.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Free Fonts",
        "description": "",
        "url": "http://www.fontex.org/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Get Comic Neue",
        "description": "",
        "url": "http://comicneue.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Fontfabric™",
        "description": "",
        "url": "http://www.fontfabric.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Font Font",
        "description": "",
        "url": "https://www.fontfont.com/fonts",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "Lost Type",
        "description": "",
        "url": "http://www.losttype.com/browse",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "1001Free Fonts",
        "description": "",
        "url": "http://www.1001freefonts.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "求字体网",
        "description": "",
        "url": "http://www.qiuziti.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "叶根友字体",
        "description": "",
        "url": "http://www.yegenyou.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "字客网",
        "description": "",
        "url": "http://www.fontke.com/",
        "category": "设计资源",
        "tags": []
    },
    {
        "name": "会声会影",
        "description": "",
        "url": "http://www.huishenghuiying.com.cn/",
        "category": "AI视频工具",
        "tags": []
    },
    {
        "name": "爱剪辑",
        "description": "",
        "url": "http://www.aijianji.com/",
        "category": "AI视频工具",
        "tags": []
    },
    {
        "name": "腾讯地图",
        "description": "",
        "url": "https://map.qq.com/",
        "category": "地图导航",
        "tags": []
    },
    {
        "name": "飞猪",
        "description": "",
        "url": "https://www.fliggy.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "同程旅行",
        "description": "",
        "url": "https://www.ly.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "途牛旅游",
        "description": "",
        "url": "https://www.tuniu.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "中国航空",
        "description": "",
        "url": "https://www.airchina.com.cn/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "稻草人旅行",
        "description": "",
        "url": "https://www.daocaorentravel.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "春秋航空",
        "description": "",
        "url": "https://www.ch.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "去哪儿",
        "description": "",
        "url": "https://www.qunar.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "穷游",
        "description": "",
        "url": "https://www.qyer.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "蚂蜂窝",
        "description": "",
        "url": "https://www.mafengwo.cn/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "智行火车票",
        "description": "",
        "url": "https://www.zhixing.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "东方航空",
        "description": "",
        "url": "https://www.ceair.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "天巡网",
        "description": "",
        "url": "https://www.skyscanner.com.cn/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "艺龙旅行",
        "description": "",
        "url": "https://www.elong.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "中国知网",
        "description": "",
        "url": "https://www.cnki.net/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "学堂在线",
        "description": "",
        "url": "https://www.xuetangx.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "扇贝单词",
        "description": "",
        "url": "https://www.shanbay.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "超星尔雅",
        "description": "",
        "url": "https://www.chaoxing.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "百度学术",
        "description": "",
        "url": "https://xueshu.baidu.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "万方数据",
        "description": "",
        "url": "https://www.wanfangdata.com.cn/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "中国大学MOOC(慕课)",
        "description": "",
        "url": "https://www.icourse163.org/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "英语四六级",
        "description": "",
        "url": "https://cet.neea.edu.cn/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "学科网",
        "description": "",
        "url": "https://www.zxxk.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "国图公开课",
        "description": "",
        "url": "http://open.nlc.cn/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "TED",
        "description": "",
        "url": "https://www.ted.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "粉笔网",
        "description": "",
        "url": "https://www.fenbi.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "EnglishClub",
        "description": "",
        "url": "https://www.englishclub.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "牛客网",
        "description": "",
        "url": "https://www.nowcoder.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "LOFTER",
        "description": "",
        "url": "https://www.lofter.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "最右",
        "description": "",
        "url": "https://www.zuiyou.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "QQ空间",
        "description": "",
        "url": "https://qzone.qq.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "珍爱网",
        "description": "",
        "url": "https://www.zhenai.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "网易邮箱",
        "description": "",
        "url": "https://mail.163.com/",
        "category": "邮箱服务",
        "tags": []
    },
    {
        "name": "新浪博客",
        "description": "",
        "url": "https://blog.sina.com.cn/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "新浪微博",
        "description": "",
        "url": "https://weibo.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "虎扑社区",
        "description": "",
        "url": "https://www.hupu.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "微信公众号",
        "description": "",
        "url": "https://mp.weixin.qq.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "世纪佳缘",
        "description": "",
        "url": "https://www.jiayuan.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "facebook",
        "description": "",
        "url": "https://www.facebook.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "百度贴吧",
        "description": "",
        "url": "https://tieba.baidu.com/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "职友集",
        "description": "",
        "url": "https://www.jobui.com/",
        "category": "求职招聘",
        "tags": []
    },
    {
        "name": "强国论坛",
        "description": "",
        "url": "http://bbs1.people.com.cn/",
        "category": "社交娱乐",
        "tags": []
    },
    {
        "name": "爱奇艺体育",
        "description": "",
        "url": "https://sports.iqiyi.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "懂球帝",
        "description": "",
        "url": "https://www.dongqiudi.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "企鹅体育",
        "description": "",
        "url": "https://sports.qq.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "CCTV5",
        "description": "",
        "url": "https://sports.cctv.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "凤凰体育",
        "description": "",
        "url": "https://sports.ifeng.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "咪咕体育",
        "description": "",
        "url": "https://www.migu.cn/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "优酷体育",
        "description": "",
        "url": "https://sports.youku.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "新华网体育",
        "description": "",
        "url": "http://sports.xinhuanet.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "中国网体育",
        "description": "",
        "url": "http://sports.china.com.cn/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "东方体育",
        "description": "",
        "url": "http://sports.eastday.com/",
        "category": "体育运动",
        "tags": []
    },
    {
        "name": "腾讯汽车",
        "description": "",
        "url": "https://auto.qq.com/",
        "category": "汽车资讯",
        "tags": []
    },
    {
        "name": "搜狐汽车",
        "description": "",
        "url": "https://auto.sohu.com/",
        "category": "汽车资讯",
        "tags": []
    },
    {
        "name": "观沧海",
        "description": "",
        "url": "https://www.gchai.com/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "百度招聘",
        "description": "",
        "url": "https://zhaopin.baidu.com/",
        "category": "求职招聘",
        "tags": []
    },
    {
        "name": "中国移动",
        "description": "",
        "url": "https://www.10086.cn/",
        "category": "通信服务",
        "tags": []
    },
    {
        "name": "汇博招聘",
        "description": "",
        "url": "https://www.hbjob.com/",
        "category": "求职招聘",
        "tags": []
    },
    {
        "name": "新浪汽车",
        "description": "",
        "url": "https://auto.sina.com.cn/",
        "category": "汽车资讯",
        "tags": []
    },
    {
        "name": "丁香园",
        "description": "",
        "url": "https://www.dxy.cn/",
        "category": "医疗健康",
        "tags": []
    },
    {
        "name": "中国福利彩票",
        "description": "",
        "url": "https://www.cwl.gov.cn/",
        "category": "生活服务",
        "tags": []
    },
    {
        "name": "猎聘",
        "description": "",
        "url": "https://www.liepin.com/",
        "category": "求职招聘",
        "tags": []
    },
    {
        "name": "Booking",
        "description": "",
        "url": "https://www.booking.com/",
        "category": "旅游与出行",
        "tags": []
    },
    {
        "name": "新华英才",
        "description": "",
        "url": "https://www.xinhuayingcai.com/",
        "category": "求职招聘",
        "tags": []
    },
    {
        "name": "中国证券网",
        "description": "",
        "url": "https://www.cnstock.com/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "中国财经信息网",
        "description": "",
        "url": "https://www.cfi.cn/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "中金在线",
        "description": "",
        "url": "https://www.cnfol.com/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "萝卜投研",
        "description": "",
        "url": "https://www.luobotouyan.com/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "证券之星",
        "description": "",
        "url": "https://www.stockstar.com/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "中国经济网",
        "description": "",
        "url": "http://www.ce.cn/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "南方财富网",
        "description": "",
        "url": "https://www.southmoney.com/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "金投网",
        "description": "",
        "url": "https://www.cngold.org/",
        "category": "金融投资",
        "tags": []
    },
    {
        "name": "中国新闻网",
        "description": "",
        "url": "https://www.chinanews.com/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "中华网",
        "description": "",
        "url": "https://www.china.com/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "光明军事",
        "description": "",
        "url": "http://military.gmw.cn/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "参考消息",
        "description": "",
        "url": "http://www.cankaoxiaoxi.com/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "央视网",
        "description": "",
        "url": "https://www.cctv.com/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "观察者网",
        "description": "",
        "url": "https://www.guancha.cn/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "央广网",
        "description": "",
        "url": "http://www.cnr.cn/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "中国教育在线",
        "description": "",
        "url": "https://www.eol.cn/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "米尔军情",
        "description": "",
        "url": "http://www.miercn.com/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "中国网",
        "description": "",
        "url": "http://www.china.com.cn/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "新京报",
        "description": "",
        "url": "https://www.bjnews.com.cn/",
        "category": "新闻资讯",
        "tags": []
    },
    {
        "name": "PPT之家",
        "description": "",
        "url": "https://www.pptjia.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "AI思维导图",
        "description": "",
        "url": "https://www.zhixi.com/",
        "category": "AI办公工具",
        "tags": []
    },
    {
        "name": "搜狗百科",
        "description": "",
        "url": "https://baike.sogou.com/",
        "category": "搜索引擎",
        "tags": []
    },
    {
        "name": "deepseek",
        "description": "",
        "url": "https://www.deepseek.com/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "电脑管家",
        "description": "",
        "url": "https://guanjia.qq.com/",
        "category": "系统工具",
        "tags": []
    },
    {
        "name": "拉米工具",
        "description": "",
        "url": "https://www.lami.la/",
        "category": "工具",
        "tags": []
    },
    {
        "name": "谷歌翻译",
        "description": "",
        "url": "https://translate.google.com/",
        "category": "翻译工具",
        "tags": []
    },
    {
        "name": "阿里1688",
        "description": "",
        "url": "https://www.1688.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "爱淘宝",
        "description": "",
        "url": "https://ai.taobao.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "贝壳找房",
        "description": "",
        "url": "https://www.ke.com/",
        "category": "房产家居",
        "tags": []
    },
    {
        "name": "链家",
        "description": "",
        "url": "https://www.lianjia.com/",
        "category": "房产家居",
        "tags": []
    },
    {
        "name": "天气网",
        "description": "",
        "url": "https://www.tianqi.com/",
        "category": "生活服务",
        "tags": []
    },
    {
        "name": "薄荷健身",
        "description": "",
        "url": "https://www.boohee.com/",
        "category": "健康医疗",
        "tags": []
    },
    {
        "name": "聚划算",
        "description": "",
        "url": "https://ju.taobao.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "淘宝网",
        "description": "",
        "url": "https://www.taobao.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "搜房网",
        "description": "",
        "url": "https://www.soufun.com/",
        "category": "房产家居",
        "tags": []
    },
    {
        "name": "天猫商城",
        "description": "",
        "url": "https://www.tmall.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "苏宁易购",
        "description": "",
        "url": "https://www.suning.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "天猫超市",
        "description": "",
        "url": "https://chaoshi.tmall.com/",
        "category": "电商购物",
        "tags": []
    },
    {
        "name": "番茄小说",
        "description": "",
        "url": "https://www.fqnovels.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "微信读书",
        "description": "",
        "url": "https://weread.qq.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "小说阅读网",
        "description": "",
        "url": "https://www.readnovel.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "QQ阅读",
        "description": "",
        "url": "https://www.qq.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "中国国家图书馆",
        "description": "",
        "url": "http://www.nlc.cn/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "全历史",
        "description": "",
        "url": "https://www.allhistory.com/",
        "category": "知识学习",
        "tags": []
    },
    {
        "name": "起点女生网",
        "description": "",
        "url": "https://www.qidian.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "七猫免费小说",
        "description": "",
        "url": "https://www.qimao.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "纵横中文网",
        "description": "",
        "url": "https://www.zongheng.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "晋江文学城",
        "description": "",
        "url": "https://www.jjwxc.net/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "潇湘书院",
        "description": "",
        "url": "https://www.xxsy.net/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "17k小说网",
        "description": "",
        "url": "https://www.17k.com/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "懒人听书",
        "description": "",
        "url": "https://www.lrts.me/",
        "category": "阅读文学",
        "tags": []
    },
    {
        "name": "ima",
        "description": "",
        "url": "https://ima.cool/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "稿定AI",
        "description": "",
        "url": "https://www.gaoding.com/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "腾讯元器",
        "description": "",
        "url": "https://yuanqi.tencent.com/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "讯飞星火",
        "description": "",
        "url": "https://xinghuo.xfyun.cn/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "Notion AI",
        "description": "",
        "url": "https://www.notion.so/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "百度文库AI",
        "description": "",
        "url": "https://wenku.baidu.com/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "天工AI助手",
        "description": "",
        "url": "https://www.tiangong.cn/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "智谱AI",
        "description": "",
        "url": "https://www.zhipuai.cn/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "文心助手",
        "description": "",
        "url": "https://yiyan.baidu.com/",
        "category": "人工智能",
        "tags": []
    },
    {
        "name": "西瓜视频",
        "description": "",
        "url": "https://www.ixigua.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "1905电影网",
        "description": "",
        "url": "https://www.1905.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "虎牙",
        "description": "",
        "url": "https://www.huya.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "电视猫",
        "description": "",
        "url": "https://www.tvmao.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "新浪视频",
        "description": "",
        "url": "https://video.sina.com.cn/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "哔哩哔哩",
        "description": "",
        "url": "https://www.bilibili.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "斗鱼",
        "description": "",
        "url": "https://www.douyu.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "迅雷",
        "description": "",
        "url": "https://www.xunlei.com/",
        "category": "下载工具",
        "tags": []
    },
    {
        "name": "网易视频",
        "description": "",
        "url": "https://video.163.com/",
        "category": "影音娱乐",
        "tags": []
    },
    {
        "name": "哇学社",
        "description": "游戏化英语学习平台",
        "url": "https://www.waxueshe.com",
        "category": "AI教育与学习",
        "tags": ["英语学习","游戏化"]
    },
    {
        "name": "Linggle",
        "description": "语言参考搜索引擎",
        "url": "https://linggle.com",
        "category": "AI教育与学习",
        "tags": ["语言搜索","参考工具"]
    },
    {
        "name": "Toucan",
        "description": "浏览网页时学外语",
        "url": "https://jointoucan.com",
        "category": "AI教育与学习",
        "tags": ["浏览器扩展","外语学习"]
    },
    {
        "name": "Cambly",
        "description": "私人外教1对1真人在线课堂",
        "url": "https://www.cambly.com",
        "category": "AI教育与学习",
        "tags": ["在线","一对一","外教"]
    },
    {
        "name": "Grammarly",
        "description": "英语写作语法和拼写检查神器",
        "url": "https://app.grammarly.com",
        "category": "AI办公工具",
        "tags": ["语法检查","写作辅助"]
    },
    {
        "name": "Ludwig",
        "description": "英语句子用例搜索引擎",
        "url": "https://ludwig.guru",
        "category": "AI教育与学习",
        "tags": ["英语搜索","句子用例"]
    },
    {
        "name": "italki",
        "description": "向专业教师在线学习超过150种外语",
        "url": "https://www.italki.cn",
        "category": "AI教育与学习",
        "tags": ["在线","多语种","专业教师"]
    },
    {
        "name": "Babbel",
        "description": "1000万用户都在用的语言学习平台",
        "url": "https://www.babbel.com",
        "category": "AI教育与学习",
        "tags": ["语言学习","热门平台"]
    },
    {
        "name": "LingoDeer",
        "description": "在线学习韩语、日语和其他语言",
        "url": "https://www.lingodeer.com",
        "category": "AI教育与学习",
        "tags": ["在线","韩语","日语"]
    },
    {
        "name": "Rosetta Stone罗塞塔石碑",
        "description": "快速、简便、正确地学习语言",
        "url": "https://www.rosettastone.com",
        "category": "AI教育与学习",
        "tags": ["语言学习","经典软件"]
    },
    {
        "name": "Visuwords",
        "description": "可视化英语单词词典",
        "url": "https://visuwords.com",
        "category": "AI教育与学习",
        "tags": ["可视化","英语词典"]
    },
    {
        "name": "NHK学日语",
        "description": "日本广播协会出品的免费日语学习课程",
        "url": "https://www3.nhk.or.jp/nhkworld/zh/learnjapanese",
        "category": "AI教育与学习",
        "tags": ["日语学习","免费课程","NHK"]
    },
    {
        "name": "TV5Monde Enseigner",
        "description": "TV5Monde法语电视网旗下的免费学习法语的网站",
        "url": "https://enseigner.tv5monde.com",
        "category": "AI教育与学习",
        "tags": ["法语学习","免费","TV5Monde"]
    },
    {
        "name": "田间小站",
        "description": "英语小词详解和好书推荐",
        "url": "https://www.tianfateng.cn",
        "category": "AI教育与学习",
        "tags": ["英语词汇","图书推荐"]
    },
    {
        "name": "忆术家Memrise",
        "description": "像当地人一样学习外语",
        "url": "https://www.memrise.com",
        "category": "AI教育与学习",
        "tags": ["外语学习","记忆技巧"]
    },
    {
        "name": "百词斩",
        "description": "趣味背单词，就用百词斩！",
        "url": "http://www.baicizhan.com",
        "category": "AI教育与学习",
        "tags": ["背单词","趣味学习"]
    },
    {
        "name": "每日英语听力",
        "description": "专为英语学习者定制的英语听力训练软件",
        "url": "http://dict.eudic.net/ting",
        "category": "AI教育与学习",
        "tags": ["英语听力","训练软件"]
    },
    {
        "name": "Maspeak",
        "description": "学习新语言单词的有趣平台",
        "url": "https://www.maspeak.com",
        "category": "AI教育与学习",
        "tags": ["单词学习","趣味平台"]
    },
    {
        "name": "ESLBuzz",
        "description": "1000+免费英语学习课程",
        "url": "https://www.eslbuzz.com",
        "category": "AI教育与学习",
        "tags": ["免费课程","英语学习"]
    },
    {
        "name": "Lang-8",
        "description": "多国语言学习交流平台",
        "url": "https://lang-8.com",
        "category": "AI教育与学习",
        "tags": ["语言交流","多国语言"]
    },
    {
        "name": "沪江英语",
        "description": "沪江旗下英语学习资讯网站",
        "url": "https://www.hjenglish.com",
        "category": "AI教育与学习",
        "tags": ["英语学习","沪江"]
    },
    {
        "name": "译学馆",
        "description": "知识无疆界",
        "url": "https://www.yxgapp.com",
        "category": "AI教育与学习",
        "tags": ["翻译学习","知识分享"]
    },
    {
        "name": "声同小语种",
        "description": "声同此声，心同此心！小语种学习论坛",
        "url": "http://www.somdom.com",
        "category": "AI教育与学习",
        "tags": ["小语种","学习论坛"]
    },
    {
        "name": "有道精品课",
        "description": "有道旗下精品学习课程",
        "url": "https://ke.youdao.com",
        "category": "AI教育与学习",
        "tags": ["精品课程","有道"]
    },
    {
        "name": "笔灵AI论文",
        "description": "一站式AI论文写作助手",
        "url": "https://ibiling.cn/paper?from=aibotpaper",
        "category": "AI办公工具",
        "tags": ["AI","论文写作","助手"]
    },
    {
        "name": "茅茅虫AI论文",
        "description": "一站式AI智能写作助手",
        "url": "https://www.mmc.cc/?fromId=954f8p78",
        "category": "AI办公工具",
        "tags": ["AI","智能","写作助手"]
    },
    {
        "name": "Aibiye",
        "description": "综合性的AI论文写作AI平台",
        "url": "https://www.aibiye.com/?code=ZrW9Dy",
        "category": "AI办公工具",
        "tags": ["AI","论文写作"]
    },
    {
        "name": "知网",
        "description": "中国最大的学术信息检索与服务平台",
        "url": "https://www.cnki.net",
        "category": "AI教育与学习",
        "tags": ["学术检索","服务平台"]
    },
    {
        "name": "青泥学术",
        "description": "专注于学术研究与写作的智能平台",
        "url": "https://www.xueshuchuangxin.com",
        "category": "AI教育与学习",
        "tags": ["学术研究","智能"]
    },
    {
        "name": "玻尔",
        "description": "新一代科研知识库与AI学术搜索平台",
        "url": "https://www.bohrium.com",
        "category": "AI教育与学习",
        "tags": ["AI","科研知识库"]
    },
    {
        "name": "沁言学术",
        "description": "专为高校师生、科研人员及知识工作者设计的AI科研写作工具",
        "url": "https://www.qinyanai.com",
        "category": "AI办公工具",
        "tags": ["AI","科研写作","工具","设计"]
    },
    {
        "name": "范文喵",
        "description": "大学生的AI论文写作工具",
        "url": "https://ai.wolian.chat",
        "category": "AI办公工具",
        "tags": ["AI","论文写作","工具"]
    },
    {
        "name": "笔目鱼",
        "description": "小绿鲸推出的专业AI英文论文写作工具",
        "url": "https://www.bmysci.com/?channelCode=aibotad",
        "category": "AI办公工具",
        "tags": ["AI","英文论文","工具"]
    },
    {
        "name": "大学资源网",
        "description": "汇聚各类学科领域的学习资源平台",
        "url": "https://www.dxzy163.com",
        "category": "AI教育与学习",
        "tags": ["学习资源","平台"]
    },
    {
        "name": "我要自学网",
        "description": "国内领先的在线实用技能视频学习平台",
        "url": "https://www.51zxw.net",
        "category": "AI教育与学习",
        "tags": ["在线","技能学习"]
    },
    {
        "name": "OpenClassrooms",
        "description": "超过500+免费高质量课程",
        "url": "https://openclassrooms.com/en/courses",
        "category": "AI教育与学习",
        "tags": ["免费课程","高质量"]
    },
    {
        "name": "MasterClass",
        "description": "世界顶级大师精品课程学习平台",
        "url": "https://www.masterclass.com",
        "category": "AI教育与学习",
        "tags": ["精品课程","大师级"]
    },
    {
        "name": "FutureLearn",
        "description": "英国第一MOOC平台",
        "url": "https://www.futurelearn.com",
        "category": "AI教育与学习",
        "tags": ["MOOC","英国平台"]
    },
    {
        "name": "爱课程",
        "description": "高等教育课程资源共享平台",
        "url": "https://www.icourses.cn",
        "category": "AI教育与学习",
        "tags": ["高等教育","资源共享"]
    },
    {
        "name": "MOOC中国",
        "description": "慕课改变你，你改变世界。",
        "url": "https://www.mooc.cn",
        "category": "AI教育与学习",
        "tags": ["慕课","MOOC"]
    },
    {
        "name": "终身教育平台",
        "description": "国家开放大学推出的全民终身教育平台",
        "url": "http://le.ouchn.cn/#/home",
        "category": "AI教育与学习",
        "tags": ["终身教育","国家平台"]
    },
    {
        "name": "国家高等教育智慧教育平台",
        "description": "全国性的综合性在线开放课程平台",
        "url": "https://higher.smartedu.cn/subjects",
        "category": "AI教育与学习",
        "tags": ["在线","智慧教育"]
    },
    {
        "name": "edX",
        "description": "MIT和哈佛推出的大规模开放在线课堂平台",
        "url": "https://www.edx.org/edxchina",
        "category": "AI教育与学习",
        "tags": ["在线","MIT","哈佛"]
    },
    {
        "name": "可汗学院",
        "description": "非营利性教育学习平台",
        "url": "https://zh.khanacademy.org",
        "category": "AI教育与学习",
        "tags": ["非营利","教育平台"]
    },
    {
        "name": "哔哩哔哩知识区",
        "description": "来哔哩哔哩，学习也要干杯",
        "url": "https://www.bilibili.com/v/knowledge",
        "category": "AI教育与学习",
        "tags": ["知识分享","视频学习"]
    },
    {
        "name": "AI大学堂",
        "description": "科大讯飞打造的专业 AI 在线学习平台",
        "url": "https://www.aidaxue.com/?ch=daxue_collection_28",
        "category": "AI教育与学习",
        "tags": ["AI","在线","科大讯飞"]
    },
    {
        "name": "华为开发者学堂",
        "description": "华为官方面向开发者的学习、认证和职业发展的平台",
        "url": "https://developer.huawei.com/consumer/cn/training",
        "category": "编程开发",
        "tags": ["华为","开发者","认证"]
    },
    {
        "name": "Sabe.io",
        "description": "免费高质量的编程课程和教程",
        "url": "https://sabe.io",
        "category": "编程开发",
        "tags": ["免费","编程课程"]
    },
    {
        "name": "Laracasts",
        "description": "学习Laravel和网页开发的优质网站",
        "url": "https://laracasts.com",
        "category": "编程开发",
        "tags": ["Laravel","网页开发"]
    },
    {
        "name": "Codewars",
        "description": "计算机编程教育和技术挑战社区",
        "url": "https://www.codewars.com",
        "category": "编程开发",
        "tags": ["编程教育","技术挑战"]
    },
    {
        "name": "GeeksforGeeks",
        "description": "专为极客提供的计算机科学门户",
        "url": "https://www.geeksforgeeks.org",
        "category": "编程开发",
        "tags": ["计算机科学","极客"]
    },
    {
        "name": "DEV Community",
        "description": "软件开发人员社区",
        "url": "https://dev.to",
        "category": "编程开发",
        "tags": ["开发者社区","软件开发"]
    },
    {
        "name": "W3School在线教程",
        "description": "在线网站建设和Web技术教程平台",
        "url": "https://www.w3school.com.cn",
        "category": "编程开发",
        "tags": ["在线","Web技术"]
    },
    {
        "name": "SoloLearn",
        "description": "编程语言课程在线学习平台",
        "url": "https://www.sololearn.com/home",
        "category": "编程开发",
        "tags": ["在线","编程语言"]
    },
    {
        "name": "Google开发者教程（官方中文）",
        "description": "谷歌官方的开发者课程",
        "url": "https://developers.google.cn/learn/pathways?hl=zh-cn",
        "category": "编程开发",
        "tags": ["Google","开发者","官方"]
    },
    {
        "name": "Kaggle",
        "description": "数据科学社区和机器学习竞赛平台",
        "url": "https://www.kaggle.com",
        "category": "AI数据分析",
        "tags": ["数据科学","机器学习"]
    },
    {
        "name": "Udacity优达学城",
        "description": "在线学习各种编程和互联网技术",
        "url": "https://www.udacity.com",
        "category": "编程开发",
        "tags": ["在线","编程技术"]
    },
    {
        "name": "Programiz",
        "description": "免费的在线编程学习平台",
        "url": "https://www.programiz.com",
        "category": "编程开发",
        "tags": ["在线","免费","编程学习"]
    },
    {
        "name": "OSHWHub",
        "description": "嘉立创EDA开源硬件平台和社区",
        "url": "https://oshwhub.com",
        "category": "编程开发",
        "tags": ["开源硬件","EDA"]
    },
    {
        "name": "freeCodeCamp",
        "description": "免费学习编程的平台和非营利社区",
        "url": "https://www.freecodecamp.org",
        "category": "编程开发",
        "tags": ["免费","编程学习"]
    },
    {
        "name": "SegmentFault思否",
        "description": "国内领先的开发者技术社区",
        "url": "https://segmentfault.com",
        "category": "编程开发",
        "tags": ["开发者社区","技术"]
    },
    {
        "name": "egghead",
        "description": "专业高质量的前端开发课程平台",
        "url": "https://egghead.io",
        "category": "编程开发",
        "tags": ["前端开发","高质量"]
    },
    {
        "name": "五分钟学算法",
        "description": "小吴讲算法，图解面试算法",
        "url": "https://www.cxyxiaowu.com",
        "category": "编程开发",
        "tags": ["算法","面试"]
    },
    {
        "name": "Pluralsight",
        "description": "IT在线教育和培训平台",
        "url": "https://www.pluralsight.com",
        "category": "编程开发",
        "tags": ["在线","IT教育"]
    },
    {
        "name": "微软学院",
        "description": "微软官方出品的教程和学习路径",
        "url": "https://docs.microsoft.com/zh-cn/learn",
        "category": "编程开发",
        "tags": ["微软","官方教程"]
    },
    {
        "name": "Scrimba",
        "description": "交互式前端学习神器",
        "url": "https://scrimba.com",
        "category": "编程开发",
        "tags": ["交互式","前端学习"]
    },
    {
        "name": "Codecademy",
        "description": "国外在线学习编程知识的网站",
        "url": "https://codecademy.dev",
        "category": "编程开发",
        "tags": ["在线","编程知识"]
    },
    {
        "name": "慕课网",
        "description": "程序员的梦工厂，IT技能学习平台",
        "url": "https://www.imooc.com",
        "category": "编程开发",
        "tags": ["IT技能","程序员"]
    },
    {
        "name": "蓝桥云课（原实验楼）",
        "description": "IT在线编程及在线实训学习平台",
        "url": "https://www.lanqiao.cn",
        "category": "编程开发",
        "tags": ["在线","IT编程"]
    },
    {
        "name": "AI工具集",
        "description": "国内外热门AI工具集合网站",
        "url": "https://ai.bot",
        "category": "AI教育与学习",
        "tags": ["AI","工具集合"]
    },
    {
        "name": "AI分享圈",
        "description": "最好最全的AI免费资源分享网站",
        "url": "https://aisharenet.com",
        "category": "AI教育与学习",
        "tags": ["AI","免费资源"]
    },
    {
        "name": "软件侠",
        "description": "常用软件的入门视频教程",
        "url": "https://xueruanjian.com",
        "category": "AI教育与学习",
        "tags": ["软件教程","视频教程"]
    },
    {
        "name": "在线自学网",
        "description": "在线职业办公技能学习平台",
        "url": "https://www.zaixianzixue.com",
        "category": "AI教育与学习",
        "tags": ["在线","职业技能"]
    },
    {
        "name": "PPTfans",
        "description": "PPT设计教程网",
        "url": "https://www.pptfans.cn/pptcourse",
        "category": "AI教育与学习",
        "tags": ["设计","PPT教程"]
    },
    {
        "name": "OfficePLUS",
        "description": "微软Office官方在线模板网站",
        "url": "https://www.officeplus.cn",
        "category": "AI办公工具",
        "tags": ["在线","Office模板"]
    },
    {
        "name": "Office官方",
        "description": "微软Office软件官方帮助和培训",
        "url": "https://support.microsoft.com/zh-cn/office",
        "category": "AI教育与学习",
        "tags": ["Office","官方培训"]
    },
    {
        "name": "WPS学堂",
        "description": "WPS官方技巧学习平台",
        "url": "https://www.wps.cn/learning",
        "category": "AI教育与学习",
        "tags": ["WPS","技巧学习"]
    },
    {
        "name": "Word联盟",
        "description": "办公软件教程学习平台",
        "url": "http://www.wordlm.com",
        "category": "AI教育与学习",
        "tags": ["办公软件","教程"]
    },
    {
        "name": "锐普PPT论坛",
        "description": "专业友好的PPT交流平台",
        "url": "http://www.rapidbbs.cn",
        "category": "AI教育与学习",
        "tags": ["PPT","交流平台"]
    },
    {
        "name": "办公资源网",
        "description": "海量办公资源下载的网站",
        "url": "https://www.bangongziyuan.com",
        "category": "设计资源",
        "tags": ["办公资源","下载"]
    },
    {
        "name": "ExcelHome",
        "description": "Excel表格资源和教程网站",
        "url": "http://www.excelhome.net",
        "category": "AI教育与学习",
        "tags": ["Excel","教程"]
    },
    {
        "name": "优品PPT",
        "description": "免费高质量PPT模板下载网站",
        "url": "https://www.ypppt.com",
        "category": "设计资源",
        "tags": ["PPT模板","免费下载"]
    },
    {
        "name": "秋叶PPT",
        "description": "Office和职场系列在线课程",
        "url": "https://www.qiuyeppt.com",
        "category": "AI教育与学习",
        "tags": ["在线","Office","职场"]
    },
    {
        "name": "观猹",
        "description": "AI产品点评网站",
        "url": "https://watcha.cn",
        "category": "AI教育与学习",
        "tags": ["AI","产品点评"]
    },
    {
        "name": "LiblibAI",
        "description": "国内领先的AI图像创作平台和模型社区",
        "url": "https://www.liblib.art/?sourceId=003943",
        "category": "AI设计工具",
        "tags": ["AI","图像创作"]
    },
    {
        "name": "C4D之家",
        "description": "Cinema 4D教程和资源网站",
        "url": "https://www.c4d.cn",
        "category": "AI教育与学习",
        "tags": ["C4D","教程"]
    },
    {
        "name": "Domestika",
        "description": "面向创意者的在线学习平台",
        "url": "https://www.domestika.org",
        "category": "AI教育与学习",
        "tags": ["在线","创意学习"]
    },
    {
        "name": "CreativeLive",
        "description": "在线创意学习平台",
        "url": "https://www.creativelive.com",
        "category": "AI教育与学习",
        "tags": ["在线","创意学习"]
    },
    {
        "name": "翼狐网",
        "description": "专注于设计教育的学习平台",
        "url": "https://www.yiihuu.com",
        "category": "AI教育与学习",
        "tags": ["设计","教育平台"]
    },
    {
        "name": "有籍",
        "description": "设计相关的小册子集合网站",
        "url": "https://youji.pro",
        "category": "设计资源",
        "tags": ["设计","小册子"]
    },
    {
        "name": "Adobe官方教程",
        "description": "Adobe官方出品的软件使用文章和视频教程",
        "url": "https://helpx.adobe.com/cn/support/support-new/learn-apps.html#phsp",
        "category": "AI教育与学习",
        "tags": ["Adobe","官方教程"]
    },
    {
        "name": "飞屋设计",
        "description": "设计和插画创作方面的个人博客",
        "url": "https://www.ifeiwu.com",
        "category": "创意灵感",
        "tags": ["设计","插画创作"]
    },
    {
        "name": "Envato Tuts+",
        "description": "免费在线学习创意类教程和教学的平台",
        "url": "https://tutsplus.com",
        "category": "AI教育与学习",
        "tags": ["在线","创意教程"]
    },
    {
        "name": "站酷学习",
        "description": "站酷旗下的艺术设计在线教育平台",
        "url": "https://www.gogoup.com",
        "category": "AI教育与学习",
        "tags": ["设计","在线","艺术设计"]
    },
    {
        "name": "oeasy",
        "description": "oeasy系列网络教程，完全免费",
        "url": "http://oeasy.org",
        "category": "AI教育与学习",
        "tags": ["免费教程","网络教程"]
    },
    {
        "name": "abduzeedo",
        "description": "高质量的设计灵感分享平台",
        "url": "https://abduzeedo.com",
        "category": "创意灵感",
        "tags": ["设计","灵感分享"]
    },
    {
        "name": "doyoudo",
        "description": "平面设计及剪辑软件在线教程网站",
        "url": "https://www.doyoudo.com/free",
        "category": "AI教育与学习",
        "tags": ["设计","在线","剪辑软件"]
    },
    {
        "name": "国家中小学智慧教育平台电子教材",
        "description": "小初高免费电子教材",
        "url": "https://basic.smartedu.cn/tchMaterial",
        "category": "AI教育与学习",
        "tags": ["电子教材","免费","中小学"]
    },
    {
        "name": "鸠摩搜索",
        "description": "电子书搜索引擎",
        "url": "https://www.jiumodiary.com",
        "category": "AI教育与学习",
        "tags": ["电子书","搜索引擎"]
    },
    {
        "name": "高教书苑",
        "description": "高等教育出版社电子教材",
        "url": "https://ebook.hep.com.cn/index.html",
        "category": "AI教育与学习",
        "tags": ["电子教材","高等教育"]
    },
    {
        "name": "書格",
        "description": "自由开放的在线古籍图书馆",
        "url": "https://new.shuge.org",
        "category": "AI教育与学习",
        "tags": ["在线","古籍图书馆"]
    },
    {
        "name": "古登堡计划Project Gutenberg",
        "description": "公共领域作品的免费电子图书馆",
        "url": "http://www.gutenberg.org",
        "category": "AI教育与学习",
        "tags": ["免费","电子图书馆"]
    },
    {
        "name": "GitBook",
        "description": "开源的技术文档平台",
        "url": "https://www.gitbook.com",
        "category": "编程开发",
        "tags": ["文档","开源","技术文档"]
    },
    {
        "name": "LoreFree",
        "description": "去中心化知识共享社区",
        "url": "https://ebook2.lorefree.com",
        "category": "AI教育与学习",
        "tags": ["知识共享","去中心化"]
    },
    {
        "name": "植物智",
        "description": "中科院植物研究所推出的植物百科和物种信息系统网站",
        "url": "https://www.iplant.cn",
        "category": "AI教育与学习",
        "tags": ["植物百科","中科院"]
    },
    {
        "name": "Kurzgesagt简而言之",
        "description": "高质量的极简科普动画教育",
        "url": "https://kurzgesagt.org",
        "category": "AI教育与学习",
        "tags": ["科普","动画教育"]
    },
    {
        "name": "独立游戏百科",
        "description": "独立游戏人的百科文档",
        "url": "https://docs.qq.com/sheet/DWWtxbVFWZ25OZWJU",
        "category": "AI教育与学习",
        "tags": ["文档","独立游戏"]
    },
    {
        "name": "萌娘百科",
        "description": "ACG向wiki（百科）站点",
        "url": "https://zh.moegirl.org.cn/Mainpage",
        "category": "AI教育与学习",
        "tags": ["百科","ACG"]
    },
    {
        "name": "Emoji百科",
        "description": "Emoji表情大全和颜文字百科",
        "url": "https://emojixd.com",
        "category": "AI教育与学习",
        "tags": ["Emoji","表情百科"]
    },
    {
        "name": "小鸡词典",
        "description": "网络梗文化的娱乐科普社区",
        "url": "https://jikipedia.com",
        "category": "AI教育与学习",
        "tags": ["网络文化","科普"]
    },
    {
        "name": "MBA智库",
        "description": "MBA智库百科，专注于经济管理",
        "url": "https://wiki.mbalib.com",
        "category": "AI教育与学习",
        "tags": ["MBA","经济管理"]
    },
    {
        "name": "360百科",
        "description": "360推出的中文百科平台",
        "url": "https://baike.so.com",
        "category": "AI教育与学习",
        "tags": ["百科","360"]
    },
    {
        "name": "业百科",
        "description": "各种百科小知识、生活常识问答",
        "url": "https://www.yebaike.com",
        "category": "AI教育与学习",
        "tags": ["百科","生活常识"]
    },
    {
        "name": "央视网纪录片",
        "description": "CCTV节目官网旗下的央视纪录片平台",
        "url": "https://tv.cctv.com/yxg/index.shtml#datacid=jlp&datapd=&datafl=&fc=%E7%BA%AA%E5%BD%95%E7%89%87&datanf=&dataszm=",
        "category": "AI教育与学习",
        "tags": ["纪录片","央视"]
    },
    {
        "name": "中国科普博览",
        "description": "中科院推出的大型科普网站",
        "url": "http://www.kepu.net.cn",
        "category": "AI教育与学习",
        "tags": ["科普","中科院"]
    },
    {
        "name": "百度百科",
        "description": "百度旗下中文知识性百科全书",
        "url": "https://baike.baidu.com",
        "category": "AI教育与学习",
        "tags": ["百科","百度"]
    },
    {
        "name": "快懂百科",
        "description": "今日头条旗下中文网络百科全书",
        "url": "http://www.baike.com",
        "category": "AI教育与学习",
        "tags": ["百科","今日头条"]
    },
    {
        "name": "wikiHow",
        "description": "你可以信赖的万事指南",
        "url": "https://zh.wikihow.com",
        "category": "AI教育与学习",
        "tags": ["指南","教程"]
    },
    {
        "name": "科普中国",
        "description": "让科技知识在网上和生活中流行",
        "url": "http://www.kepuchina.cn",
        "category": "AI教育与学习",
        "tags": ["科普","科技知识"]
    },
    {
        "name": "头条问答",
        "description": "头条问答（原悟空问答），今日头条旗下问答版块",
        "url": "https://wukong.toutiao.com",
        "category": "社交媒体",
        "tags": ["问答","今日头条"]
    },
    {
        "name": "中公网校",
        "description": "公职备考在线学习培训辅助平台",
        "url": "https://www.eoffcn.com",
        "category": "AI教育与学习",
        "tags": ["在线","公职备考","辅助"]
    },
    {
        "name": "中国研究生招生信息网",
        "description": "隶属教育部官方的考研网站",
        "url": "https://yz.chsi.com.cn",
        "category": "AI教育与学习",
        "tags": ["考研","官方网站"]
    },
    {
        "name": "考研帮",
        "description": "中国领先的考研服务平台",
        "url": "http://www.kaoyan.com",
        "category": "AI教育与学习",
        "tags": ["考研","服务平台"]
    },
    {
        "name": "中国教育在线考研频道",
        "description": "专业的研究生报考服务网络平台",
        "url": "https://kaoyan.eol.cn",
        "category": "AI教育与学习",
        "tags": ["在线","考研服务"]
    },
    {
        "name": "中国考研网",
        "description": "为考生提供专业、可靠、贴心的考研信息",
        "url": "http://www.chinakaoyan.com",
        "category": "AI教育与学习",
        "tags": ["考研","信息服务"]
    },
    {
        "name": "翰墨风雅碑帖网",
        "description": "汇藏历代经典碑帖，书法学习必备网站",
        "url": "http://www.hanmofengya.com/Index.html",
        "category": "AI教育与学习",
        "tags": ["书法","碑帖"]
    },
    {
        "name": "建筑学院",
        "description": "为建筑师学习设计而打造的高品质平台",
        "url": "http://www.archcollege.com",
        "category": "AI教育与学习",
        "tags": ["设计","建筑学"]
    },
    {
        "name": "音乐而聚",
        "description": "每天几分钟，做自己的音乐家",
        "url": "https://www.music2gather.com/hans",
        "category": "AI教育与学习",
        "tags": ["音乐","学习"]
    },
    {
        "name": "吉他堂",
        "description": "聚合全网免费吉他谱",
        "url": "https://www.jitatang.cn",
        "category": "AI教育与学习",
        "tags": ["吉他","免费"]
    },
    {
        "name": "蓝调口琴网",
        "description": "张晓松老师创办的蓝调口琴网",
        "url": "http://www.tenholes.com",
        "category": "AI教育与学习",
        "tags": ["口琴","蓝调"]
    },
    {
        "name": "Flowkey",
        "description": "专为自学设计的在线钢琴教学应用",
        "url": "https://www.flowkey.com/zh",
        "category": "AI教育与学习",
        "tags": ["设计","在线","钢琴"]
    },
    {
        "name": "Deepseek",
        "description": "Deepseek AI",
        "url": "https://deepseek.com",
        "category": "AI聊天助手",
        "tags": ["AI", "Deepseek"]
    },
    {
        "name": "即梦AI",
        "description": "即梦AI",
        "url": "https://jimeng.jianying.com/",
        "category": "AI图像生成",
        "tags": ["AI", "图像生成"]
    },
    {
        "name": "Google",
        "description": "Google Search",
        "url": "https://google.com",
        "category": "搜索引擎",
        "tags": ["Search", "Google"]
    },
    {
        "name": "Bing",
        "description": "Microsoft Bing",
        "url": "https://www.bing.com",
        "category": "搜索引擎",
        "tags": ["Search", "Bing"]
    },
    {
        "name": "牛马工具库",
        "description": "牛马工具库",
        "url": "https://www.niumaku.top/",
        "category": "工具",
        "tags": ["工具"]
    },
    {
        "name": "豆包",
        "description": "字节跳动推出的免费AI对话助手和个人助理",
        "url": "https://www.doubao.com/chat/",
        "category": "AI聊天助手",
        "tags": ["字节跳动", "AI对话", "豆包"]
    }
];

// 热门推荐
const hotWebsites = [
    "https://deepseek.com",
    "https://chat.openai.com",
    "https://gemini.google.com",
    "https://www.doubao.com/chat/",
    "https://jimeng.jianying.com/",
    "https://www.midjourney.com",
    "https://google.com",
    "https://www.bing.com"
];

module.exports = {
    websitesDatabase,
    hotWebsites
};