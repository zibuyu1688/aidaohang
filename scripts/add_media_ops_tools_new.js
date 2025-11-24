const fs = require('fs');
const path = require('path');

const websitesPath = path.join(__dirname, '../websites.js');

// 创建备份
const backupPath = `${websitesPath}.bak.${Date.now()}`;
fs.copyFileSync(websitesPath, backupPath);
console.log(`已创建备份: ${backupPath}`);

// 原始数据
const rawData = `
综合性平台：
1、今日头条：http://toutiao.com/
2、搜狐公众平台：http://mp.sohu.com/
3、百度百家：http://baijia.baidu.com/
4、一点资讯：http://www.yidianzixun.com
5、简书：http://www.jianshu.com/
6、小红书：https://www.xiaohongshu.com/
7、知乎：https://www.zhihu.com/

营销、广告平台：
1、人人都是产品经理：http://www.woshipm.com
2、数英网：http://www.digitaling.com/
3、梅花网：http://www.meihua.info/
4、A5 站长网：http://www.admin5.com/
5、站长之家：http://www.chinaz.com/
6、涨粉圈：https://t.zsxq.com/mYn6iEm
7、派代网：http://www.paidai.com/

科技资讯类网站：
1、雷锋网：http://www.leiphone.com/
2、搜我们：http://sowm.cn/
3、新媒体：https://t.zsxq.com/mYn6iEm
4、钛媒体：http://www.tmtpost.com/
5、艾瑞网：http://www.iresearch.cn/

创业资讯类网站：
1、创业邦：http://www.cyzone.cn/
2、36 氪：http://36kr.com/
3、i 黑马：http://www.iheima.com/
4、虎嗅网：http://www.huxiu.com/
5、创见：http://tech2ipo.com/
6、煎蛋：http://jandan.net/
7、好奇心日报：http://www.qdaily.com/
8、裂变星球：https://t.zsxq.com/6EUNnyJ
9、国际热点新闻语义式拓展网：http://hithot.cc/zh_CN/
10、品读价值书籍阅读推荐网：http://www.pento.cn/
11、自媒体引流汇总：https://hdk125.lanzous.com/b00n5qrhe
12、壹读传媒：http://yidu.im/
13、理想生活实验室：http://www.toodaylab.com/
14、画旅途：http://www.hualvtu.com/
15、妞新闻：http://www.niusnews.com/

图片素材 国内：
1、昵图网：http://www.nipic.com/index.html
2、天堂图片网：http://www.ivsky.com/
3、花瓣网：http://huaban.com/
4、大图网：http://www.daimg.com/
5、视觉中国：http://creative.vcg.com/
6、123RF：http://www.123rf.com.cn/
7、站酷：http://www.zcool.com.cn/gfxs/
8、我图网：http://www.ooopic.com/
9、搜狗素材：http://sucai.sogou.com/
10、千库网：http://588ku.com/
11、POCO 摄影社区：http://photo.poco.cn/like/
12、苏打苏塔：http://sudasuta.com/
13、全景：http://www.quanjing.com/
14、优美图：http://www.youmeitu.com/
15、视觉 ME：http://shijue.me/
16、堆糖网：http://www.duitang.com/

图片素材 国外：
1、Gratisography：http://www.gratisography.com/
2、Pinterest：https://www.pinterest.com/
3、Dreamstime：https://www.dreamstime.com/
4、Life Of Pix：http://www.lifeofpix.com/
5、Free Digital Photos：http://www.freedigitalphotos.net/
6、IM Creator：http://www.imcreator.com/free
7、Free Photos Bank：http://www.freephotosbank.com/
8、Pixabay：https://pixabay.com/
9、PicJumbo：https://picjumbo.com/
10、Pickupimage：http://pickupimage.com/
11、Canva：https://www.canva.com/
12、500px：https://500px.com/
13、Unsplash：https://unsplash.com/
14、Illusion Magazine：http://illusion.scene360.com/
15、9GAG：http://9gag.com/

动态图片网站：
1、GIF 酷：http://gifcool.lofter.com/
2、Kotaiguchi-gif：http://kotaiguchi-gif.tumblr.com/
3、Rafael-varona：http://www.rafael-varona.com/
4、Golden Wolf：http://goldenwolf.tv/
5、Julian Glander：http://glander.co/
6、Gifparanoia：http://www.gifparanoia.org/
7、Rafael-varona：https://www.behance.net/rafaelvarona

公众号排版工具：
1、秀米微信图文排版工具：http://xiumi.us/#/
2、I排版：http://www.ipaiban.com/
3、135微信编辑器：http://www.135editor.com/
4、96 微信编辑器：http://bj.96weixin.com/
5、易点微信编辑器：http://wxedit.yead.net/
6、小蚂蚁微信编辑器：http://www.xmyeditor.com/
7、91 微信编辑器：http://bj.91join.com/
8、微信在线编辑器：http://wx.bzrw.net/
9、005 微信编辑器：http://bj.weixin005.com/
10、乐排图文编辑工具：http://pb.ishangtong.com/
11、爱美编：http://www.imeibian.com/main.html/
12、天行微信编辑器：http://tx.huceo.com/
13、秀多多图文编辑器：http://xiudodo.com/
14、小易微信编辑器：http://xiaoyi.e7wei.cn/
15、微信圈圈排版助手：http://www.weixinquanquan.com/wxeditor

短链工具：
1、新浪微博短链接生成器：http://www.surl.sinaapp.com/
2、站长工具：http://tool.chinaz.com/tools/dwz.aspx
3、T.IM 短网址/短链接生成器：http://t.im/
4、百度短网址：http://www.dwz.cn/
5、I 排版短链接生成器：http://xhr.so/

H5工具：
1、易企秀：http://www.eqxiu.com/show
2、兔展：http://www.rabbitpre.com/store
3、秀制作：http://xiumi.us/studio/booklet#/for/new
4、Maka：http://maka.im/store
5、咫尺微页：http://www.zhichiwangluo.com/
6、初页：http://www.ichuye.cn/
7、Epub360 意派：http://www.epub360.com/
8、Vxplo：http://www.ih5.cn/not-logged-in
9、搜狐快站：http://www.kuaizhan.com/
10、易传单：http://echuandan.com/
11、Wix：http://www.wix.com/
12、Liveapp 场景应用/云来：http://www.liveapp.cn/

二维码工具：
1、草料：http://cli.im/
2、联图网：http://www.liantu.com/
3、鑫码：http://www.xmesm.cn/
4、59na：http://qr.59na.com/
5、仍赞：http://ewm.rengzan.com/
6、wwei 微微：http://www.wwei.cn/
7、Q码：http://www.qmacode.com/
8、QR Stuff：http://www.qrstuff.com/
9、Visualead：http://www.visualead.com/
10、Littleidiot：https://qrcode.littleidiot.be/

数据分析：
1、艾瑞网：http://www.iresearch.cn/
2、TalkingData：http://www.talkingdata.com/
3、CNZZ：http://www.cnzz.com
4、百度统计：http://tongji.baidu.com/web/welcome/login
5、百度指数：http://index.baidu.com/
6、百度数据：http://index.baidu.com/
7、Datahoop 大数据分析平台：http://www.datahoop.cn/
8、前瞻网：http://www.qianzhan.com/qzdata/list/147.html
9、数据观：http://www.cbdio.com/
10、易观：http://www.analysys.cn/
11、中国统计网：http://www.itongji.cn/cms/article/index
12、网站数据分析：http://webdataanalysis.net/
13、阿里指数：http://index.1688.com/
14、199IT：http://www.199it.com/
15、网站分析在中国：http://www.chinawebanalytics.cn/
16、DCCI 互联网数据中心：http://www.dcci.com.cn/
17、36大数据：http://www.36dsj.com/

表情包制作：
1、暴走漫画制作器：http://baozoumanhua.com/makers
2、豆饼软件网：http://www.doubean.com/
3、爱斗图（斗图神器）：http://www.adoutu.com/pages/index.php

运营学习：
1、起点学院：http://www.qidianla.com/
2、三节课：http://www.sanjieke.cn/
3、馒头商学院：http://www.mtedu.com/
4、插座学院：http://www.chazuomba.com/
5、黑马学院：http://xueyuan.iheima.com/
6、91 运营网：http://www.yunying.com/
7、慕课网 (IMOOC)：http://www.imooc.com/
8、极客学院：http://www.jikexueyuan.com/
9、25 学堂：http://www.25xt.com/
10、MOOC 学院：http://mooc.guokr.com/
11、网易云课堂：http://study.163.com/
12、腾讯课堂：https://ke.qq.com/

广告设计工具 国内：
1、TOPYS：http://www.topys.cn/
2、UI 中国灵感库：http://idea.ui.cn/
3、设计癖：http://www.shejipi.com/
4、视觉 ME 设计社区：http://shijue.me/
5、设计青年：http://www.design521.com/
6、Oritive 创意设计：http://www.oritive.com/
7、创意美图小站：http://www.poboo.com/
8、网络广告人社区：http://iwebad.com/
9、懒人图库：http://www.lanrentuku.com/
10、中国广告网：http://www.cnad.com/
11、广告放肆：http://adfuns.com/
12、梅花网：http://www.meihua.info/c
13、创意网：http://www.fsdpp.cn/
14、视觉中国：http://creative.vcg.com/
15、广告门：http://www.adquan.com/
16、设计 2 点半：http://www.2dianban.com/
17、数英网：http://www.digitaling.co/

广告设计工具 国外：
1、Inspiration Grid：http://theinspirationgrid.com/
2、siteInspire：https://www.siteinspire.com/
3、Dribbble：https://dribbble.com/
4、welovead：http://www.welovead.com/cn/
5、AdSoftheWorld：http://adsoftheworld.com/
6、Framelab Design Direction：http://www.frmlb.de/
7、Cargo：http://cargocollective.com/
8、boredpanda：http://www.boredpanda.com/
9、Creativebloq：http://www.creativebloq.com/
10、Creative Guerrilla Marketing：http://www.creativeguerrillamarketing.com/
11、Yin liuzhangfen：https://jinshuju.net/f/tQjCgL

思维导图工具：
1、XMind 思维导图软件：http://www.xmindchina.net/
2、Mindjet 思维导图软件：http://www.mindmanager.cc/
3、FreeMind 思维导图：http://freemind.en.softonic.com/
4、iMindMap 思维导图软件：http://www.imindmap.cc/
5、百度脑图：http://naotu.baidu.com/
6、MINDPINTEAM：http://mindmap.4ye.me/
7、Mindomo：https://www.mindomo.com/zh/
8、ProcessOn：https://www.processon.com/

LOGO设计 国内：
1、LOGO 圈：http://www.logoquan.com/
2、LOGO 之家：http://www.logozj.com/index.html
3、字体中国：http://www.zitichina.com/
4、logo 社：http://www.logoshe.com/
5、钙网：http://www.uugai.com/logoa/logojz.php

LOGO设计 国外：
1、LogoDesignLove：http://www.logodesignlove.com/
2、identity view：http://identityview.net/
3、LogoMoose：https://www.logomoose.com/
4、Logo Talks：http://www.logotalkz.com/
5、Logopond：https://logopond.com/
6、Logospire：http://logospire.com/
7、Logooftheday：http://logooftheday.com/
8、LogoGalleria：http://www.logogalleria.com/
9、LogoFi：http://logofi.com/
10、Logo Faves：http://logofaves.com/
11、Logolicia：http://www.logolicia.com.br/
12、Logolog：http://www.logolog.info/
13、Logoed：http://www.logoed.co.uk/
14、Brands of the world：https://www.brandsoftheworld.com/
15、The Design Inspiration：http://thedesigninspiration.com/

配色网站：
1、kuler：https://color.adobe.com/zh/create/color-wheel/
2、NIPPON COLORS：http://nipponcolors.com/
3、Colourlovers：http://www.colourlovers.com/
4、Coolors：https://www.coolors.co/
5、uiGradients：http://uigradients.com/#
6、CSS Winner：http://www.csswinner.com/
7、Color Hunt：http://colorhunt.co/
8、Material-UI：https://www.materialui.co/
9、Peise（配色网）：http://www.peise.net/
10、ColorSchemeDesigner：http://www.peise.net/tools/web/
11、Awwwards：http://www.awwwards.com/
12、配色展示：http://www.e754.com/color/
13、中国色：http://color.uisdc.com/
14、中国传统色彩：http://chinese.traditionalcolors.com/

插画素材 国内：
1、创意人：http://chuangyiren.cn/
2、绘世界网：http://www.huisj.com/
3、798 手绘网：http://www.qijiuba.com/
4、涂鸦王国：http://www.poocg.com/
5、漫悠悠：http://www.muu.com.cn/
6、CCIUP（中国动漫插画）：http://cciup.com/
7、CG 部落：http://www.cgbolo.com/
8、站酷：http://www.zcool.com.cn/
9、花瓣网：http://huaban.com/
10、堆糖网：http://www.duitang.com/
11、插画家园：http://www.13cg.com/
12、动漫之家：http://www.dmzj.com/
13、布卡漫画：http://www.buka.cn/
14、有妖气：http://www.u17.com/
15、笨狗漫画：http://www.51bengou.com/

插画素材 国外：
1、Nate Williams：http://www.n8w.com/
2、Sakiroo：http://sakiroo.com/
3、Illustrationweb：http://www.illustrationweb.com.cn/
4、Howtoons：http://www.howtoons.com/
5、Drawr：http://drawr.net/
6、Fredo and Pidjin：http://www.pidjin.net/
7、Pixiv（P 站）：http://www.pixiv.net/
8、Behance：https://www.behance.net/
9、VIZ：http://www.viz.com/
10、CartoonStock：http://www.cartoonstock.com/
11、ILLUSTRATION AGE：https://illustrationage.com/
12、Central IllustrationAgency：http://www.directoryofillustration.com/

画报工具：
1、CorelDRAW：http://www.coreldrawchina.com/
2、海报工厂：http://www.posterlabs.com/
3、创客贴：https://www.chuangkit.com/

网站模板：
1、WebsiteTemplates：http://www.templatemonster.com/
2、One Page Love：https://onepagelove.com/
3、Landingfolio：http://www.landingfolio.com/
4、DreamTemplate：http://www.dreamtemplate.com/
5、EntheosWeb：http://templates.entheosweb.com/
6、FreeWeb：http://www.freewebtemplates.com/
7、TEMPLATED：https://templated.co/
8、模板之家：http://www.cssmoban.com/

字体网站：
1、Free Fonts：http://www.fontex.org/
2、Get Comic Neue：http://comicneue.com/
3、Fontfabric™：http://www.fontfabric.com/
4、Font Font：https://www.fontfont.com/fonts
5、Lost Type：http://www.losttype.com/browse/
6、1001Free Fonts：http://www.1001freefonts.com/
7、求字体网：http://www.qiuziti.com/
8、叶根友字体：http://www.yegenyou.com/
9、字客网：http://www.fontke.com/

视频工具：
1、会声会影：http://www.huishenghuiying.com.cn/
2、爱剪辑：http://www.aijianji.com/
`;

// 分类映射
const categoryMapping = {
    '综合性平台': '资讯与媒体',
    '营销、广告平台': '营销推广',
    '科技资讯类网站': '资讯与媒体',
    '创业资讯类网站': '资讯与媒体',
    '图片素材 国内': '设计资源',
    '图片素材 国外': '设计资源',
    '动态图片网站': '设计资源',
    '公众号排版工具': 'AI办公工具',
    '短链工具': '工具',
    'H5工具': 'H5制作工具',
    '二维码工具': '工具',
    '数据分析': 'AI数据分析',
    '表情包制作': '创意灵感',
    '运营学习': 'AI教育与学习',
    '广告设计工具 国内': '创意灵感',
    '广告设计工具 国外': '创意灵感',
    '思维导图工具': 'AI办公工具',
    'LOGO设计 国内': '设计资源',
    'LOGO设计 国外': '设计资源',
    '配色网站': '设计资源',
    '插画素材 国内': '插画与漫画',
    '插画素材 国外': '插画与漫画',
    '画报工具': 'AI设计工具',
    '网站模板': '设计资源',
    '字体网站': '设计资源',
    '视频工具': 'AI视频工具'
};

// 解析函数
function parseData(data) {
    const lines = data.split('\n');
    let currentSection = '';
    const entries = [];
    
    for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) continue;
        
        // 检测章节标题
        if (trimmedLine.endsWith('：') && !trimmedLine.match(/^\d+、/)) {
            currentSection = trimmedLine.replace('：', '');
            continue;
        }
        
        // 匹配带URL的条目
        const match = trimmedLine.match(/^\d+、(.+?)：(.+)$/);
        if (match) {
            let name = match[1].trim();
            let url = match[2].trim();
            
            // 清理URL
            url = url.replace(/\/$/, ''); // 移除末尾斜杠
            if (!url.startsWith('http')) {
                url = 'http://' + url;
            }
            
            // 移除URL中的参数（如果包含from等）
            try {
                const urlObj = new URL(url);
                urlObj.search = ''; // 清除所有查询参数
                url = urlObj.toString();
            } catch (e) {
                // 如果URL解析失败，保持原样
            }
            
            const category = categoryMapping[currentSection] || '工具';
            
            entries.push({
                name: name,
                description: '',
                url: url,
                category: category,
                tags: []
            });
        }
    }
    
    return entries;
}

// 读取现有数据并获取已存在的URL
let content = fs.readFileSync(websitesPath, 'utf8');
const existingUrls = new Set();
const urlMatches = content.match(/"url":\s*"([^"]+)"/g);
if (urlMatches) {
    urlMatches.forEach(match => {
        const url = match.match(/"url":\s*"([^"]+)"/)[1];
        existingUrls.add(url);
    });
}

// 解析新数据
const newEntries = parseData(rawData);
console.log(`解析到 ${newEntries.length} 个条目`);

// 去重
const uniqueEntries = newEntries.filter(entry => !existingUrls.has(entry.url));
console.log(`去重后剩余 ${uniqueEntries.length} 个新条目`);

if (uniqueEntries.length === 0) {
    console.log('没有新条目需要添加');
    fs.unlinkSync(backupPath);
    process.exit(0);
}

// 生成要插入的条目
const newEntriesText = uniqueEntries.map(entry => `    {
        "name": "${entry.name}",
        "description": "${entry.description}",
        "url": "${entry.url}",
        "category": "${entry.category}",
        "tags": ${JSON.stringify(entry.tags)}
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

console.log(`已添加 ${uniqueEntries.length} 个新条目到 websites.js`);

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

// 显示添加的条目示例
console.log('\n添加的条目示例（前10个）:');
uniqueEntries.slice(0, 10).forEach((entry, index) => {
    console.log(`${index + 1}. ${entry.name} - ${entry.url} (${entry.category})`);
});

// 显示分类统计
const categoryStats = {};
uniqueEntries.forEach(entry => {
    categoryStats[entry.category] = (categoryStats[entry.category] || 0) + 1;
});

console.log('\n新增条目按分类统计:');
Object.entries(categoryStats).sort((a, b) => b[1] - a[1]).forEach(([category, count]) => {
    console.log(`  ${category}: ${count}个`);
});

// 删除备份文件
fs.unlinkSync(backupPath);
console.log('\n✓ 添加完成，备份文件已清理');