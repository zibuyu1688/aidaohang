const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 项目数据 - 根据名称补充URL和分类
const projectsData = [
    {name: "携程", url: "https://www.ctrip.com/", category: "旅游与出行"},
    {name: "腾讯地图", url: "https://map.qq.com/", category: "地图导航"},
    {name: "高德地图", url: "https://www.amap.com/", category: "地图导航"},
    {name: "飞猪", url: "https://www.fliggy.com/", category: "旅游与出行"},
    {name: "同程旅行", url: "https://www.ly.com/", category: "旅游与出行"},
    {name: "途牛旅游", url: "https://www.tuniu.com/", category: "旅游与出行"},
    {name: "中国航空", url: "https://www.airchina.com.cn/", category: "旅游与出行"},
    {name: "稻草人旅行", url: "https://www.daocaorentravel.com/", category: "旅游与出行"},
    {name: "春秋航空", url: "https://www.ch.com/", category: "旅游与出行"},
    {name: "去哪儿", url: "https://www.qunar.com/", category: "旅游与出行"},
    {name: "百度地图", url: "https://map.baidu.com/", category: "地图导航"},
    {name: "穷游", url: "https://www.qyer.com/", category: "旅游与出行"},
    {name: "蚂蜂窝", url: "https://www.mafengwo.cn/", category: "旅游与出行"},
    {name: "12306", url: "https://www.12306.cn/", category: "旅游与出行"},
    {name: "智行火车票", url: "https://www.zhixing.com/", category: "旅游与出行"},
    {name: "东方航空", url: "https://www.ceair.com/", category: "旅游与出行"},
    {name: "天巡网", url: "https://www.skyscanner.com.cn/", category: "旅游与出行"},
    {name: "艺龙旅行", url: "https://www.elong.com/", category: "旅游与出行"},
    {name: "简书", url: "https://www.jianshu.com/", category: "知识学习"},
    {name: "中国知网", url: "https://www.cnki.net/", category: "知识学习"},
    {name: "网易公开课", url: "https://open.163.com/", category: "知识学习"},
    {name: "学堂在线", url: "https://www.xuetangx.com/", category: "知识学习"},
    {name: "扇贝单词", url: "https://www.shanbay.com/", category: "知识学习"},
    {name: "超星尔雅", url: "https://www.chaoxing.com/", category: "知识学习"},
    {name: "Duolingo", url: "https://www.duolingo.com/", category: "知识学习"},
    {name: "百度学术", url: "https://xueshu.baidu.com/", category: "知识学习"},
    {name: "万方数据", url: "https://www.wanfangdata.com.cn/", category: "知识学习"},
    {name: "中国大学MOOC(慕课)", url: "https://www.icourse163.org/", category: "知识学习"},
    {name: "英语四六级", url: "https://cet.neea.edu.cn/", category: "知识学习"},
    {name: "学科网", url: "https://www.zxxk.com/", category: "知识学习"},
    {name: "国图公开课", url: "http://open.nlc.cn/", category: "知识学习"},
    {name: "有道翻译", url: "https://fanyi.youdao.com/", category: "翻译工具"},
    {name: "TED", url: "https://www.ted.com/", category: "知识学习"},
    {name: "粉笔网", url: "https://www.fenbi.com/", category: "知识学习"},
    {name: "EnglishClub", url: "https://www.englishclub.com/", category: "知识学习"},
    {name: "牛客网", url: "https://www.nowcoder.com/", category: "知识学习"},
    {name: "小红书", url: "https://www.xiaohongshu.com/", category: "社交娱乐"},
    {name: "知乎", url: "https://www.zhihu.com/", category: "社交娱乐"},
    {name: "QQ邮箱", url: "https://mail.qq.com/", category: "邮箱服务"},
    {name: "LOFTER", url: "https://www.lofter.com/", category: "社交娱乐"},
    {name: "最右", url: "https://www.zuiyou.com/", category: "社交娱乐"},
    {name: "QQ空间", url: "https://qzone.qq.com/", category: "社交娱乐"},
    {name: "珍爱网", url: "https://www.zhenai.com/", category: "社交娱乐"},
    {name: "网易邮箱", url: "https://mail.163.com/", category: "邮箱服务"},
    {name: "新浪博客", url: "https://blog.sina.com.cn/", category: "社交娱乐"},
    {name: "QQ", url: "https://im.qq.com/", category: "社交娱乐"},
    {name: "新浪微博", url: "https://weibo.com/", category: "社交娱乐"},
    {name: "虎扑社区", url: "https://www.hupu.com/", category: "社交娱乐"},
    {name: "微信公众号", url: "https://mp.weixin.qq.com/", category: "社交娱乐"},
    {name: "世纪佳缘", url: "https://www.jiayuan.com/", category: "社交娱乐"},
    {name: "facebook", url: "https://www.facebook.com/", category: "社交娱乐"},
    {name: "百度贴吧", url: "https://tieba.baidu.com/", category: "社交娱乐"},
    {name: "职友集", url: "https://www.jobui.com/", category: "求职招聘"},
    {name: "强国论坛", url: "http://bbs1.people.com.cn/", category: "社交娱乐"},
    {name: "腾讯体育", url: "https://sports.qq.com/", category: "体育运动"},
    {name: "搜狐体育", url: "https://sports.sohu.com/", category: "体育运动"},
    {name: "直播吧", url: "https://www.zhibo8.cc/", category: "体育运动"},
    {name: "虎扑体育", url: "https://www.hupu.com/", category: "体育运动"},
    {name: "网易体育", url: "https://sports.163.com/", category: "体育运动"},
    {name: "爱奇艺体育", url: "https://sports.iqiyi.com/", category: "体育运动"},
    {name: "PP体育", url: "https://www.ppsport.com/", category: "体育运动"},
    {name: "懂球帝", url: "https://www.dongqiudi.com/", category: "体育运动"},
    {name: "企鹅体育", url: "https://sports.qq.com/", category: "体育运动"},
    {name: "CCTV5", url: "https://sports.cctv.com/", category: "体育运动"},
    {name: "新浪体育", url: "https://sports.sina.com.cn/", category: "体育运动"},
    {name: "凤凰体育", url: "https://sports.ifeng.com/", category: "体育运动"},
    {name: "咪咕体育", url: "https://www.migu.cn/", category: "体育运动"},
    {name: "体育视频", url: "https://sports.cctv.com/", category: "体育运动"},
    {name: "优酷体育", url: "https://sports.youku.com/", category: "体育运动"},
    {name: "新华网体育", url: "http://sports.xinhuanet.com/", category: "体育运动"},
    {name: "中国网体育", url: "http://sports.china.com.cn/", category: "体育运动"},
    {name: "东方体育", url: "http://sports.eastday.com/", category: "体育运动"},
    {name: "懂车帝", url: "https://www.dongchedi.com/", category: "汽车资讯"},
    {name: "易车网", url: "https://www.yiche.com/", category: "汽车资讯"},
    {name: "腾讯汽车", url: "https://auto.qq.com/", category: "汽车资讯"},
    {name: "搜狐汽车", url: "https://auto.sohu.com/", category: "汽车资讯"},
    {name: "观沧海", url: "https://www.gchai.com/", category: "新闻资讯"},
    {name: "千图网", url: "https://www.58pic.com/", category: "设计资源"},
    {name: "百度招聘", url: "https://zhaopin.baidu.com/", category: "求职招聘"},
    {name: "中国移动", url: "https://www.10086.cn/", category: "通信服务"},
    {name: "汇博招聘", url: "https://www.hbjob.com/", category: "求职招聘"},
    {name: "太平洋汽车", url: "https://www.pcauto.com.cn/", category: "汽车资讯"},
    {name: "新浪汽车", url: "https://auto.sina.com.cn/", category: "汽车资讯"},
    {name: "丁香园", url: "https://www.dxy.cn/", category: "医疗健康"},
    {name: "IT之家", url: "https://www.ithome.com/", category: "科技资讯"},
    {name: "中国福利彩票", url: "https://www.cwl.gov.cn/", category: "生活服务"},
    {name: "实习僧", url: "https://www.shixiseng.com/", category: "求职招聘"},
    {name: "猎聘", url: "https://www.liepin.com/", category: "求职招聘"},
    {name: "Booking", url: "https://www.booking.com/", category: "旅游与出行"},
    {name: "新华英才", url: "https://www.xinhuayingcai.com/", category: "求职招聘"},
    {name: "东方财富网", url: "https://www.eastmoney.com/", category: "金融投资"},
    {name: "中国证券网", url: "https://www.cnstock.com/", category: "金融投资"},
    {name: "中国财经信息网", url: "https://www.cfi.cn/", category: "金融投资"},
    {name: "中金在线", url: "https://www.cnfol.com/", category: "金融投资"},
    {name: "工商银行", url: "https://www.icbc.com.cn/", category: "金融投资"},
    {name: "农业银行", url: "https://www.abchina.com/", category: "金融投资"},
    {name: "中国银行", url: "https://www.boc.cn/", category: "金融投资"},
    {name: "萝卜投研", url: "https://www.luobotouyan.com/", category: "金融投资"},
    {name: "36氪", url: "https://36kr.com/", category: "科技资讯"},
    {name: "同花顺", url: "https://www.10jqka.com.cn/", category: "金融投资"},
    {name: "证券之星", url: "https://www.stockstar.com/", category: "金融投资"},
    {name: "新浪财经", url: "https://finance.sina.com.cn/", category: "金融投资"},
    {name: "中国经济网", url: "http://www.ce.cn/", category: "金融投资"},
    {name: "建设银行", url: "https://www.ccb.com/", category: "金融投资"},
    {name: "雪球", url: "https://xueqiu.com/", category: "金融投资"},
    {name: "南方财富网", url: "https://www.southmoney.com/", category: "金融投资"},
    {name: "虎嗅网", url: "https://www.huxiu.com/", category: "科技资讯"},
    {name: "金投网", url: "https://www.cngold.org/", category: "金融投资"},
    {name: "中国新闻网", url: "https://www.chinanews.com/", category: "新闻资讯"},
    {name: "中华网", url: "https://www.china.com/", category: "新闻资讯"},
    {name: "光明军事", url: "http://military.gmw.cn/", category: "新闻资讯"},
    {name: "参考消息", url: "http://www.cankaoxiaoxi.com/", category: "新闻资讯"},
    {name: "央视网", url: "https://www.cctv.com/", category: "新闻资讯"},
    {name: "观察者网", url: "https://www.guancha.cn/", category: "新闻资讯"},
    {name: "新浪网", url: "https://www.sina.com.cn/", category: "新闻资讯"},
    {name: "央广网", url: "http://www.cnr.cn/", category: "新闻资讯"},
    {name: "中国教育在线", url: "https://www.eol.cn/", category: "知识学习"},
    {name: "凤凰网", url: "https://www.ifeng.com/", category: "新闻资讯"},
    {name: "澎湃新闻", url: "https://www.thepaper.cn/", category: "新闻资讯"},
    {name: "环球网", url: "https://www.huanqiu.com/", category: "新闻资讯"},
    {name: "米尔军情", url: "http://www.miercn.com/", category: "新闻资讯"},
    {name: "中国网", url: "http://www.china.com.cn/", category: "新闻资讯"},
    {name: "腾讯网", url: "https://www.qq.com/", category: "新闻资讯"},
    {name: "搜狐", url: "https://www.sohu.com/", category: "新闻资讯"},
    {name: "网易新闻", url: "https://news.163.com/", category: "新闻资讯"},
    {name: "新京报", url: "https://www.bjnews.com.cn/", category: "新闻资讯"},
    {name: "百度", url: "https://www.baidu.com/", category: "搜索引擎"},
    {name: "PPT之家", url: "https://www.pptjia.com/", category: "AI办公工具"},
    {name: "飞书文档", url: "https://www.feishu.cn/", category: "AI办公工具"},
    {name: "企业微信", url: "https://work.weixin.qq.com/", category: "AI办公工具"},
    {name: "AI思维导图", url: "https://www.zhixi.com/", category: "AI办公工具"},
    {name: "钉钉", url: "https://www.dingtalk.com/", category: "AI办公工具"},
    {name: "必应", url: "https://www.bing.com/", category: "搜索引擎"},
    {name: "Notion", url: "https://www.notion.so/", category: "AI办公工具"},
    {name: "搜狗百科", url: "https://baike.sogou.com/", category: "搜索引擎"},
    {name: "腾讯文档", url: "https://docs.qq.com/", category: "AI办公工具"},
    {name: "deepseek", url: "https://www.deepseek.com/", category: "人工智能"},
    {name: "电脑管家", url: "https://guanjia.qq.com/", category: "系统工具"},
    {name: "百度网盘", url: "https://pan.baidu.com/", category: "网盘存储"},
    {name: "企查查", url: "https://www.qcc.com/", category: "企业查询"},
    {name: "拉米工具", url: "https://www.lami.la/", category: "工具"},
    {name: "即时设计", url: "https://js.design/", category: "AI设计工具"},
    {name: "谷歌翻译", url: "https://translate.google.com/", category: "翻译工具"},
    {name: "石墨文档", url: "https://shimo.im/", category: "AI办公工具"},
    {name: "京东", url: "https://www.jd.com/", category: "电商购物"},
    {name: "阿里1688", url: "https://www.1688.com/", category: "电商购物"},
    {name: "爱淘宝", url: "https://ai.taobao.com/", category: "电商购物"},
    {name: "安居客", url: "https://www.anjuke.com/", category: "房产家居"},
    {name: "贝壳找房", url: "https://www.ke.com/", category: "房产家居"},
    {name: "下厨房", url: "https://www.xiachufang.com/", category: "美食菜谱"},
    {name: "链家", url: "https://www.lianjia.com/", category: "房产家居"},
    {name: "天气网", url: "https://www.tianqi.com/", category: "生活服务"},
    {name: "薄荷健身", url: "https://www.boohee.com/", category: "健康医疗"},
    {name: "聚划算", url: "https://ju.taobao.com/", category: "电商购物"},
    {name: "淘宝网", url: "https://www.taobao.com/", category: "电商购物"},
    {name: "赶集网", url: "https://www.ganji.com/", category: "生活服务"},
    {name: "豆果美食", url: "https://www.douguo.com/", category: "美食菜谱"},
    {name: "搜房网", url: "https://www.soufun.com/", category: "房产家居"},
    {name: "天猫商城", url: "https://www.tmall.com/", category: "电商购物"},
    {name: "苏宁易购", url: "https://www.suning.com/", category: "电商购物"},
    {name: "天猫超市", url: "https://chaoshi.tmall.com/", category: "电商购物"},
    {name: "番茄小说", url: "https://www.fqnovels.com/", category: "阅读文学"},
    {name: "微信读书", url: "https://weread.qq.com/", category: "阅读文学"},
    {name: "小说阅读网", url: "https://www.readnovel.com/", category: "阅读文学"},
    {name: "QQ阅读", url: "https://www.qq.com/", category: "阅读文学"},
    {name: "中国国家图书馆", url: "http://www.nlc.cn/", category: "阅读文学"},
    {name: "红袖添香", url: "https://www.hongxiu.com/", category: "阅读文学"},
    {name: "全历史", url: "https://www.allhistory.com/", category: "知识学习"},
    {name: "起点女生网", url: "https://www.qidian.com/", category: "阅读文学"},
    {name: "创世中文网", url: "https://chuangshi.qq.com/", category: "阅读文学"},
    {name: "七猫免费小说", url: "https://www.qimao.com/", category: "阅读文学"},
    {name: "起点中文网", url: "https://www.qidian.com/", category: "阅读文学"},
    {name: "纵横中文网", url: "https://www.zongheng.com/", category: "阅读文学"},
    {name: "晋江文学城", url: "https://www.jjwxc.net/", category: "阅读文学"},
    {name: "潇湘书院", url: "https://www.xxsy.net/", category: "阅读文学"},
    {name: "17k小说网", url: "https://www.17k.com/", category: "阅读文学"},
    {name: "动漫之家", url: "https://www.dmzj.com/", category: "动漫游戏"},
    {name: "懒人听书", url: "https://www.lrts.me/", category: "阅读文学"},
    {name: "腾讯动漫", url: "https://ac.qq.com/", category: "动漫游戏"},
    {name: "腾讯元宝", url: "https://yuanbao.tencent.com/", category: "人工智能"},
    {name: "ima", url: "https://ima.cool/", category: "人工智能"},
    {name: "稿定AI", url: "https://www.gaoding.com/", category: "人工智能"},
    {name: "腾讯元器", url: "https://yuanqi.tencent.com/", category: "人工智能"},
    {name: "通义千问", url: "https://tongyi.aliyun.com/", category: "人工智能"},
    {name: "讯飞星火", url: "https://xinghuo.xfyun.cn/", category: "人工智能"},
    {name: "Notion AI", url: "https://www.notion.so/", category: "人工智能"},
    {name: "讯飞智作", url: "https://zhizuo.xfyun.cn/", category: "人工智能"},
    {name: "智谱清言", url: "https://chatglm.cn/", category: "人工智能"},
    {name: "百度文库AI", url: "https://wenku.baidu.com/", category: "人工智能"},
    {name: "天工AI助手", url: "https://www.tiangong.cn/", category: "人工智能"},
    {name: "智谱AI", url: "https://www.zhipuai.cn/", category: "人工智能"},
    {name: "秘塔写作猫", url: "https://xiezuocat.com/", category: "人工智能"},
    {name: "即梦", url: "https://jimeng.jianying.com/", category: "人工智能"},
    {name: "文心助手", url: "https://yiyan.baidu.com/", category: "人工智能"},
    {name: "腾讯智影", url: "https://zenvideo.qq.com/", category: "人工智能"},
    {name: "文心一言", url: "https://yiyan.baidu.com/", category: "人工智能"},
    {name: "爱奇艺", url: "https://www.iqiyi.com/", category: "影音娱乐"},
    {name: "腾讯视频", url: "https://v.qq.com/", category: "影音娱乐"},
    {name: "QQ音乐", url: "https://y.qq.com/", category: "影音娱乐"},
    {name: "西瓜视频", url: "https://www.ixigua.com/", category: "影音娱乐"},
    {name: "1905电影网", url: "https://www.1905.com/", category: "影音娱乐"},
    {name: "虎牙", url: "https://www.huya.com/", category: "影音娱乐"},
    {name: "电视猫", url: "https://www.tvmao.com/", category: "影音娱乐"},
    {name: "新浪视频", url: "https://video.sina.com.cn/", category: "影音娱乐"},
    {name: "豆瓣", url: "https://www.douban.com/", category: "影音娱乐"},
    {name: "哔哩哔哩", url: "https://www.bilibili.com/", category: "影音娱乐"},
    {name: "优酷", url: "https://www.youku.com/", category: "影音娱乐"},
    {name: "网易云音乐", url: "https://music.163.com/", category: "影音娱乐"},
    {name: "芒果TV", url: "https://www.mgtv.com/", category: "影音娱乐"},
    {name: "搜狐视频", url: "https://tv.sohu.com/", category: "影音娱乐"},
    {name: "斗鱼", url: "https://www.douyu.com/", category: "影音娱乐"},
    {name: "迅雷", url: "https://www.xunlei.com/", category: "下载工具"},
    {name: "网易视频", url: "https://video.163.com/", category: "影音娱乐"}
];

// 读取现有数据
let content = fs.readFileSync(websitesPath, 'utf8');
const existingUrls = new Set();
const urlMatches = content.match(/"url":\s*"([^"]+)"/g);
if (urlMatches) {
    urlMatches.forEach(match => {
        const url = match.match(/"url":\s*"([^"]+)"/)[1];
        existingUrls.add(url);
    });
}

// 过滤已存在的URL
const newEntries = projectsData.filter(entry => !existingUrls.has(entry.url));
console.log(`原始数据: ${projectsData.length} 条`);
console.log(`去重后新增: ${newEntries.length} 条`);

if (newEntries.length === 0) {
    console.log('没有新条目需要添加');
    fs.unlinkSync(backupPath);
    process.exit(0);
}

// 生成要插入的条目
const newEntriesText = newEntries.map(entry => `    {
        "name": "${entry.name}",
        "description": "",
        "url": "${entry.url}",
        "category": "${entry.category}",
        "tags": []
    }`).join(',\n');

// 找到插入点
const insertPoint = content.lastIndexOf('\n];\n\n// 热门推荐');
if (insertPoint === -1) {
    console.error('未找到插入点');
    fs.unlinkSync(backupPath);
    process.exit(1);
}

// 插入新条目
const newContent = content.slice(0, insertPoint) + ',\n' + newEntriesText + content.slice(insertPoint);
fs.writeFileSync(websitesPath, newContent, 'utf8');

console.log(`已添加 ${newEntries.length} 个新条目到 websites.js`);

// 验证语法
try {
    delete require.cache[require.resolve(websitesPath)];
    const db = require(websitesPath);
    console.log('✓ 语法验证通过');
    console.log(`当前网站总数: ${db.websitesDatabase.length}`);
} catch (e) {
    console.error('✗ 语法验证失败:', e.message);
    // 恢复备份
    fs.copyFileSync(backupPath, websitesPath);
    console.log('已从备份恢复文件');
    process.exit(1);
}

// 统计分类
const categoryStats = {};
newEntries.forEach(entry => {
    categoryStats[entry.category] = (categoryStats[entry.category] || 0) + 1;
});

console.log('\n新增条目按分类统计:');
Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
    console.log(`  ${category}: ${count}个`);
});

console.log('\n添加的条目示例（前15个）:');
newEntries.slice(0, 15).forEach((entry, index) => {
    console.log(`${index + 1}. ${entry.name} - ${entry.url} (${entry.category})`);
});

// 删除备份文件
fs.unlinkSync(backupPath);
console.log('\n✓ 添加完成，备份文件已清理');