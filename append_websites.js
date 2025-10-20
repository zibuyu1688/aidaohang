const fs = require('fs');
const path = require('path');
const file = path.resolve('websites.js');
let content = fs.readFileSync(file, 'utf8');

// collect existing URLs
const urlRegex = /"url":\s*"https?:\/\/[^"\n]*"/g;
const existingUrlSet = new Set();
(content.match(urlRegex) || []).forEach(m => {
  const url = m.replace(/^[^\"]+\"/, '').replace(/\"$/, '');
  // Fallback safer parse
  const parts = m.split('"');
  if (parts.length >= 4) existingUrlSet.add(parts[3]);
});

function dedupeByUrl(list){
  const seen = new Set();
  return list.filter(item => {
    if (!item.url) return false;
    if (existingUrlSet.has(item.url)) return false;
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

// 66 new Design AI sites (from previous processing)
const designSites = [
  {"name":"Galileo AI","description":"AI生成可编辑的UI界面","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Galileo%20AI.png","url":"https://www.usegalileo.ai/","category":"设计AI","tags":["设计AI","AI","UI设计","界面生成"]},
  {"name":"Uizard","description":"设计界 ChatGPT！利用AI生成多屏的UI界面","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Uizard.png","url":"https://uizard.io/autodesigner/","category":"设计AI","tags":["设计AI","AI","UI设计","界面生成"]},
  {"name":"Designs.ai","description":"AI设计工具","iconUrl":"https://img.amz123.com/upload/diy_page/aibeiyong/202303/1679564751Designs.ai.png","url":"https://designs.ai/","category":"设计AI","tags":["设计AI","AI","设计工具"]},
  {"name":"IconifyAI","description":"AI App图标生成器","iconUrl":"https://img.amz123.com/upload/diy_page/aibeiyong/202303/1679564752IconifyAI.png","url":"https://www.iconifyai.com/","category":"设计AI","tags":["设计AI","AI","图标生成","App图标"]},
  {"name":"Looka","description":"AI辅助logo和品牌设计","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494103Looka.png","url":"https://looka.com/","category":"设计AI","tags":["设计AI","AI","Logo设计","品牌设计"]},
  {"name":"Noya","description":"让线框图变成高保真设计","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Noya.png","url":"https://www.noya.io/","category":"设计AI","tags":["设计AI","AI","线框图","高保真设计"]},
  {"name":"PLUG AI","description":"AI辅助包装设计！并对包装方案生成分析评估","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494102PLUG%20AI.png","url":"https://hp.package-ai.jp/","category":"设计AI","tags":["设计AI","AI","包装设计","分析评估"]},
  {"name":"Huemint","description":"推荐！用AI自定义和谐配色","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494102Huemint.png","url":"https://huemint.com/brand-intersection/","category":"设计AI","tags":["设计AI","AI","配色","和谐配色"]},
  {"name":"青椒云","description":"专注AI及设计领域的云桌面云电脑平台","iconUrl":"https://img.amz123.com/image_cloud/202306/1687757736667_%E9%9D%92%E6%A4%92.jpg","url":"http://account.qingjiaocloud.com/signin?inviteCode=PAUWIO4S","category":"设计AI","tags":["设计AI","AI","云桌面","设计平台"]},
  {"name":"燕雀光年AiLogo设计","description":"国内最好用的品牌LOGO在线设计平台，线上线下可商用","iconUrl":"https://img.amz123.com/upload/image_cloud/202506/1750671987526235_%E7%87%95%E9%9B%80%E5%85%89%E5%B9%B4AILOGO%E8%AE%BE%E8%AE%A1.png","url":"https://www.yanqueai.com/?source=amz123&keyword=amz123","category":"设计AI","tags":["设计AI","AI","Logo设计","品牌设计"]},
  {"name":"Superflow","description":"AI辅助高效网站协作设计","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Superflow.png","url":"https://www.usesuperflow.com/","category":"设计AI","tags":["设计AI","AI","网站设计","协作设计"]},
  {"name":"Digram","description":"让Figma更好用的AI神器","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Digram.png","url":"https://diagram.com/","category":"设计AI","tags":["设计AI","AI","Figma","设计工具"]},
  {"name":"Logoai","description":"利用AI来设计你喜欢的Logo和品牌","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494103Logoai.png","url":"https://www.logoai.com/","category":"设计AI","tags":["设计AI","AI","Logo设计","品牌设计"]},
  {"name":"Daft Art","description":"AI专辑封面图片生成器","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494103Daft%20Art.png","url":"https://www.daftart.ai/","category":"设计AI","tags":["设计AI","AI","专辑封面","图片生成"]},
  {"name":"Palette","description":"生成整套UI调色板","iconUrl":"https://img.amz123.com/upload/diy_page/ai/202303/1679494103Palette.png","url":"https://palette.tone-row.com/","category":"设计AI","tags":["设计AI","UI调色板","配色工具"]},
  {"name":"Color Wheel","description":"AI灰度logo或插画上色工具","iconUrl":"https://img.amz123.com/upload/diy_page/aibeiyong/202303/1679564751Color%20Wheel.png","url":"https://brandmark.io/color-wheel","category":"设计AI","tags":["设计AI","AI","上色工具","Logo上色"]},
  {"name":"ColorMagic","description":"AI调色板生成工具","iconUrl":"https://img.amz123.com/upload/diy_page/aibeiyong/202303/1679564752ColorMagic.png","url":"https://www.obviously.ai/","category":"设计AI","tags":["设计AI","AI","调色板","配色工具"]},
  {"name":"Logomaster.ai","description":"AI Logo生成工具","iconUrl":"https://img.amz123.com/upload/diy_page/aibeiyong/202303/1679564752Logomaster.ai.png","url":"https://logomaster.ai/","category":"设计AI","tags":["设计AI","AI","Logo生成","设计工具"]},
  {"name":"Creatie.ai","description":"一键即出UI作品，绝美界面惊艳全场","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721109568789591_creatie.jpg","url":"https://creatie.ai/","category":"设计AI","tags":["设计AI","AI","UI设计","界面生成"]},
  {"name":"Makereal Tldraw","description":"使用！通过草图生成可交互的UI界面和代码","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721110034450240_MakerealTldraw.jpg","url":"https://github.com/tldraw/make-real","category":"设计AI","tags":["设计AI","AI","草图生成","UI界面"]},
  {"name":"UI Sketcher","description":"VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721110147026074_UISketcher.jpg","url":"https://github.com/pAIrprogio/vscode-ui-sketcher","category":"设计AI","tags":["设计AI","AI","VSCode插件","界面设计"]},
  {"name":"QoQo","description":"推荐！AI快速创建用户旅程地图","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721110850472677_QoQo.jpg","url":"https://qoqo.ai/","category":"设计AI","tags":["设计AI","AI","用户旅程","地图设计"]},
  {"name":"Visily","description":"实用！AI轻松将手绘线框转换为高保真度","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721110933322590_Visily.jpg","url":"https://www.visily.ai/","category":"设计AI","tags":["设计AI","AI","线框转换","高保真设计"]},
  {"name":"美间AI","description":"免费AI设计工具助手，智能海报、提案和商品图生成","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721197448317674_%E7%BE%8E%E9%97%B4ai.png","url":"https://www.meijian.com/e-commerce?utm_source=dsdhaibot","category":"设计AI","tags":["设计AI","AI","设计工具","海报生成"]},
  {"name":"Figma Al","description":"提供视觉搜索、AI增强的资产搜索、自动文本和图像生成等创新功能","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721197587084088_FigmaAl.png","url":"https://www.figma.com/ai/","category":"设计AI","tags":["设计AI","AI","Figma","视觉搜索"]},
  {"name":"Microsoft Designer","description":"用于创建任意类型的图像设计的工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721197844240449_MicrosoftDesigner.png","url":"https://designer.microsoft.com/","category":"设计AI","tags":["设计AI","AI","图像设计","设计工具"]},
  {"name":"Magic Design","description":"在线设计工具Canva推出的AI设计工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721894807434504_MagicWrite.jpg","url":"https://www.canva.com/magic-design/","category":"设计AI","tags":["设计AI","AI","Canva","设计工具"]},
  {"name":"135 AI排版","description":"公众号AI图文排版和智能文案生成工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721978920728133_135.png","url":"https://www.135editor.com/ai_editor/","category":"设计AI","tags":["设计AI","AI","排版工具","文案生成"]},
  {"name":"Wegic","description":"AI网页设计和建站开发工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721979470294913_Wegic.png","url":"https://wegic.ai/","category":"设计AI","tags":["设计AI","AI","网页设计","建站工具"]},
  {"name":"Stylar","description":"一站式AI图像编辑和设计工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721979746855849_Stylar.png","url":"https://www.stylar.ai/","category":"设计AI","tags":["设计AI","AI","图像编辑","设计工具"]},
  {"name":"Pictographic","description":"AI插图资源库和生成平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721979928096451_Pictographic.png","url":"https://pictographic.io/","category":"设计AI","tags":["设计AI","AI","插图","资源库"]},
  {"name":"Collov AI","description":"AI室内家居设计生成平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721199297160540_CollovAI.png","url":"https://collov.cn/","category":"设计AI","tags":["设计AI","AI","室内设计","家居设计"]},
  {"name":"Kittl","description":"AI驱动的平面图形设计工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721199390977191_Kittl.png","url":"https://www.kittl.com/","category":"设计AI","tags":["设计AI","AI","平面设计","图形设计"]},
  {"name":"Krea Al","description":"AI创意设计平台，实时AI图像生成和编辑","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721980382257712_KreaAl.png","url":"https://www.krea.ai/home","category":"设计AI","tags":["设计AI","AI","创意设计","图像生成"]},
  {"name":"Pixso AI","description":"国产在线设计工具Pixso的内置AI助手，支持AI文生图、AI对话、AI设计等","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721981368085283_PixsoAI.png","url":"https://pixso.cn/","category":"设计AI","tags":["设计AI","AI","Pixso","设计助手"]},
  {"name":"MasterGo Al","description":"国产产品设计工具MasterGo推出的智能UI设计助手","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721200044386815_%E8%8E%AB%E9%AB%98%E8%AE%BE%E8%AE%A1.png","url":"https://mastergo.com/","category":"设计AI","tags":["设计AI","AI","MasterGo","UI设计"]},
  {"name":"智绘设计","description":"腾讯推出的智能设计平台，让内容更精彩","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721979414958324_%E6%99%BA%E7%BB%98%E8%AE%BE%E8%AE%A1.png","url":"https://taishan.qq.com/brand/","category":"设计AI","tags":["设计AI","智能","腾讯"]},
  {"name":"鹿班","description":"阿里推出的智能设计商品图和海报的平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721979683048575_%E9%B9%BF%E7%8F%AD.png","url":"https://luban.aliyun.com/","category":"设计AI","tags":["设计AI","智能","阿里"]},
  {"name":"墨刀AI","description":"墨刀推出的AI产品原型设计助手","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721980118767176_%E5%A2%A8%E5%88%80AI.png","url":"https://modao.cc/","category":"设计AI","tags":["设计AI","AI","墨刀","原型设计"]},
  {"name":"即时AI","description":"即时设计推出的由文本描述生成可编辑的原型设计稿","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721980641522202_%E5%8D%B3%E6%97%B6AI.png","url":"https://jsai.cc/ai/","category":"设计AI","tags":["设计AI","AI","即时设计","原型设计"]},
  {"name":"酷家乐AI","description":"功能强大的AI家居设计软件","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721981118536046_%E9%85%B7%E5%AE%B6%E4%B9%90AI.png","url":"https://www.kujiale.cn/","category":"设计AI","tags":["设计AI","AI","家居设计","设计软件"]},
  {"name":"Framer Al","description":"Framer推出的AI网站自动设计、生成和上线","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721981960589749_FramerAl.png","url":"https://www.framer.com/features/ai","category":"设计AI","tags":["设计AI","AI","Framer","网站设计"]},
  {"name":"Motiff 妙多","description":"猿辅导旗下推出的AI界面设计工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721982108703932_Motiff%E5%A6%99%E5%A4%9A.png","url":"https://motiff.cn/","category":"设计AI","tags":["设计AI","AI","界面设计","设计工具"]},
  {"name":"Pimento","description":"人工智能驱动的设计创意和视觉参考平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721982536610392_Pimento.png","url":"https://www.pimento.design/?ref_id=TU7BJC0X4","category":"设计AI","tags":["设计AI","智能","设计创意"]},
  {"name":"Logo Diffusion","description":"AI驱动的Logo和标志生成工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721982631896138_LogoDiffusion.png","url":"https://logodiffusion.com/","category":"设计AI","tags":["设计AI","AI","Logo生成","标志设计"]},
  {"name":"LogoliveryAl","description":"免费的AILogo生成器，提供SVG矢量格式","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721982734377962_LogoliveryAl.png","url":"https://logolivery.ai/","category":"设计AI","tags":["设计AI","AI","Logo生成","SVG"]},
  {"name":"千图设计室AI海报","description":"免费批量生成在线可编辑的AI海报工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202407/1721983311392195_%E5%8D%83%E5%9B%BE%E8%AE%BE%E8%AE%A1%E5%AE%A4AI%E6%B5%B7%E6%8A%A5.png","url":"https://hihaibao.com/","category":"设计AI","tags":["设计AI","AI","海报生成","批量生成"]},
  {"name":"标小智","description":"超过500万用户的AI智能logo设计神器","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724910077500370_%E6%A0%87%E5%B0%8F%E6%99%BA.png","url":"https://www.logosc.cn/","category":"设计AI","tags":["设计AI","AI","Logo设计","智能设计"]},
  {"name":"字体家AI神笔","description":"造字神器！ 仅需8个汉字即可生成一套6K+中文字库","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724910768544233_%E5%AD%97%E4%BD%93%E5%AE%B6AI%E7%A5%9E%E7%AC%94.png","url":"https://www.ai.zitijia.com/","category":"设计AI","tags":["设计AI","AI","字体生成","中文字库"]},
  {"name":"AIcolors","description":"推荐！根据文本生成调色板，提供配色案例参考","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724911033277326_AIcolors.png","url":"https://aicolors.co/","category":"设计AI","tags":["设计AI","AI","调色板","配色参考"]},
  {"name":"ImgCreator","description":"超赞的多合一AI设计工具，超强的背景生成、海报生成能力","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724911129116724_ImgCreator.png","url":"https://imgcreator.ai/","category":"设计AI","tags":["设计AI","AI","背景生成","海报生成"]},
  {"name":"ImageCreator","description":"推荐！PS中免费使用的SD神级插件","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724911333799610_ImageCreator.jpg","url":"https://imagecreator.alkaidvision.com/","category":"设计AI","tags":["设计AI","AI","PS插件","SD插件"]},
  {"name":"Alpaca","description":"个性化的AI工具包，可接入Ps的SD绘画插件","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724921468636267_Alpaca.jpg","url":"https://www.alpacaml.com/","category":"设计AI","tags":["设计AI","AI","PS插件","绘画工具"]},
  {"name":"Flair AI","description":"你的私人AI设计师！一键生成精美产品照片","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1724921576445593_FlairAI.jpg","url":"https://flair.ai/","category":"设计AI","tags":["设计AI","AI","产品照片","设计师"]},
  {"name":"Fabrie Al","description":"可帮助设计师管理所有文档、客户对话、创建情绪板并随时随地审查设计","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1725005954305068_FabrieAl.png","url":"https://www.fabrie.cn/ai/imagine?utm_source=AI%E5%B7%A5%E5%85%B7%E9%9B%86&utm_content=fabrie%20Ai%20%E8%90%BD%E5%9C%B0%E9%A1%B5&_channel_track_key=uQ6fKV6j","category":"设计AI","tags":["设计AI","文档","情绪板"]},
  {"name":"羚珑","description":"京东推出的商品图智能设计小工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202408/1725006195367391_%E7%BE%9A%E7%8F%91.png","url":"https://ling.jd.com/","category":"设计AI","tags":["设计AI","工具","智能"]},
  {"name":"匠紫","description":"一站式AI设计工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202409/1726820270493201_%E5%8C%A0%E7%B4%AB_%E5%89%AF%E6%9C%AC.png","url":"https://jiangziai.com/","category":"设计AI","tags":["设计AI","AI","工具"]},
  {"name":"包图网AI素材库","description":"包图网提供的特色图库服务","iconUrl":"https://img.amz123.com/upload/image_cloud/202409/1726820200494866_%E5%8C%85%E5%9B%BE%E7%BD%91AI%E7%B4%A0%E6%9D%90%E5%BA%93.png","url":"https://ibaotu.com/tupian/shuziyishu.html?spm=aibot1","category":"设计AI","tags":["设计AI","AI","素材库"]},
  {"name":"图宇宙","description":"高品质AI智能设计平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202409/1726820789624789_%E5%9B%BE%E5%AE%87%E5%AE%99.png","url":"https://www.nolibox.com/","category":"设计AI","tags":["设计AI","AI","智能"]},
  {"name":"灵动AI","description":"专业的AI商品图生成工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202409/1726821233859605_%E7%81%B5%E5%8A%A8AI.png","url":"https://www.redoon.cn/","category":"设计AI","tags":["设计AI","AI","商品图"]},
  {"name":"PhotoMagic","description":"AI快速生成商拍图片","iconUrl":"https://img.amz123.com/upload/image_cloud/202409/1726821363666403_PhotoMagic.png","url":"https://www.photomagic.cn/?utm_source=aigongjuji","category":"设计AI","tags":["设计AI","AI","商拍图片"]},
  {"name":"笔格AI设计","description":"AI设计工具合集，包括文生图、智能消除等","iconUrl":"https://img.amz123.com/upload/image_cloud/202509/1758261469822606_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250919135605_156_53.webp","url":"https://bigesj.com/?hmmd=aibot&hmsr=bigeai","category":"设计AI","tags":["设计AI","AI","设计工具"]},
  {"name":"简单设计","description":"免费的在线设计、图片处理工具","iconUrl":"https://img.amz123.com/upload/image_cloud/202410/1729153938275157_%E7%AE%80%E5%8D%95%E8%AE%BE%E8%AE%A1.png","url":"https://jiandan.link/?rel=DB2V2320","category":"设计AI","tags":["设计AI","工具"]},
  {"name":"居然设计家","description":"居然之家联合阿里推出的AI家装设计平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202504/1744960949208613_shejijia-logo.png","url":"https://www.shejijia.com/","category":"设计AI","tags":["设计AI","AI","家装设计"]},
  {"name":"Pippit","description":"字节旗下 CapCut 推出的A营销内容创作平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202505/1748310419333342_Pippit-logo.png","url":"https://www.capcut.cn/","category":"设计AI","tags":["设计AI","工具"]},
  {"name":"Holopix AI","description":"专为游戏、动漫、插画设计打造的AI设计平台","iconUrl":"https://img.amz123.com/upload/image_cloud/202507/1752629751063463_Holopix-AI-logo.webp","url":"https://holopix.cn/","category":"设计AI","tags":["设计AI","AI"]}
];

// 3D AI list from user
const threeDSites = [
  {name:"Point-e",description:"文本提示转换为复杂的形状和场景，3D 模型创建和原型制作的首选工具",iconUrl:"https://img.amz123.com/upload/image_cloud/202403/1711615471128952_Point-e.jpg",url:"https://openai.com/research/point-e",category:"3D AI",tags:["3D AI","AI","3D模型"]},
  {name:"GET3D",description:"Nvidia的2D转3D模型",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102GET3D.png",url:"https://nv-tlabs.github.io/GET3D/",category:"3D AI",tags:["3D AI","2D转3D"]},
  {name:"3DFY AI",description:"AI创建大规模高质量的3D资产",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/16794941023DFY%20AI.png",url:"https://3dfy.ai/",category:"3D AI",tags:["3D AI","3D资产"]},
  {name:"Sloyd",description:"快速生成3D游戏资产",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102Sloyd.png",url:"https://www.sloyd.ai/",category:"3D AI",tags:["3D AI","游戏资产"]},
  {name:"Luma Labs",description:"推荐！将视频转为游戏资产",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102Luma%20Labs.png",url:"https://lumalabs.ai/",category:"3D AI",tags:["3D AI","视频转3D"]},
  {name:"DreamFusion",description:"谷歌推出的文本转3D模型",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102DreamFusion.png",url:"https://dreamfusion3d.github.io/",category:"3D AI",tags:["3D AI","文本转3D"]},
  {name:"Ponzu",description:"AI生成3D无缝贴图纹理",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Ponzu.png",url:"https://www.ponzu.gg/",category:"3D AI",tags:["3D AI","贴图纹理"]},
  {name:"Text to Skybox",description:"推荐！AI生成360°无缝环境贴图",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Text%20to%20Skybox.png",url:"https://skybox.blockadelabs.com/",category:"3D AI",tags:["3D AI","Skybox"]},
  {name:"Poly",description:"根据文本生成3D材质",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494101Poly.png",url:"https://withpoly.com/browse/textures",category:"3D AI",tags:["3D AI","3D材质"]},
  {name:"Plasmo",description:"将草图转为3D模型",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102Plasmo.png",url:"https://www.plasmo.ai/",category:"3D AI",tags:["3D AI","草图转3D"]},
  {name:"Cascadeur",description:"AI辅助制作3D关键帧动画",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102Cascadeur.png",url:"https://cascadeur.com/",category:"3D AI",tags:["3D AI","关键帧动画"]},
  {name:"KAEDIM",description:"帮你迅速生成3D模型及纹理",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102KAEDIM.png",url:"https://www.kaedim3d.com/",category:"3D AI",tags:["3D AI","3D模型","纹理"]},
  {name:"Plask",description:"AI捕捉运动！帮你制作流畅的3D动画",iconUrl:"https://img.amz123.com/upload/diy_page/ai/202303/1679494102Plask.png",url:"https://plask.ai/",category:"3D AI",tags:["3D AI","动捕"]},
  {name:"DeepMotion",description:"利用 AI 支持的无标记运动捕捉和实时 3D 身体跟踪来分析人体运动并创建逼真的 3D 模型",iconUrl:"https://img.amz123.com/upload/image_cloud/202403/1711614933508895_DeepMotion.jpg",url:"https://www.deepmotion.com/",category:"3D AI",tags:["3D AI","动捕","身体跟踪"]},
  {name:"Rokoko",description:"AI 视频转 3D 生成器，可以从多个来源访问动作捕捉并创建令人惊叹的 3D 模型",iconUrl:"https://img.amz123.com/upload/image_cloud/202403/1711615166112494_Rokoko.jpg",url:"https://www.rokoko.com/",category:"3D AI",tags:["3D AI","视频转3D"]},
  {name:"Move.AI",description:"简化动作捕捉过程，从视频中捕获动作并将其转换为 3D 模型",iconUrl:"https://img.amz123.com/upload/image_cloud/202403/1711615303628509_Move.AI.jpg",url:"https://www.move.ai/",category:"3D AI",tags:["3D AI","动捕"]},
  {name:"Shape-e",description:"可将自然语言描述转换为 3D 形状，将你的创意转化为 3D 现实",iconUrl:"https://img.amz123.com/upload/image_cloud/202403/1711615713952610_Shape-e.jpg",url:"https://lablab.ai/tech/openai/shap-e",category:"3D AI",tags:["3D AI","文本转3D"]},
  {name:"VoxCraft",description:"AI生成3D模型的工具",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721979833556003_VoxCraft.png",url:"https://voxcraft.ai/",category:"3D AI",tags:["3D AI","3D模型"]},
  {name:"Recraft Al",description:"免费无限AI画板，生成高质量矢量艺术画、图标、3D图片和插画",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721199651521532_RecraftAl.png",url:"https://www.recraft.ai/",category:"3D AI",tags:["3D AI","3D图片","插画"]},
  {name:"Realibox Al",description:"一站式在线3D内容创作工具",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721208337683872_Realibox.png",url:"https://www.realibox.com/",category:"3D AI",tags:["3D AI","3D内容"]},
  {name:"Dora Al",description:"在线生成精美3D动画的网站",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721208399559164_Dora.png",url:"https://www.dora.run/",category:"3D AI",tags:["3D AI","3D动画"]},
  {name:"Spline Al",description:"一款基于浏览器的免费在线3D编辑器",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721208448435438_Spline.png",url:"https://spline.design/ai-generate",category:"3D AI",tags:["3D AI","3D编辑器"]},
  {name:"模袋云AI",description:"专注于大型建筑、小型住宅、室内设计、景观的出图 和AI模型训练",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721982882974550_%E6%A8%A1%E8%A2%8B%E4%BA%91AI.png",url:"https://www.modaiyun.com/",category:"3D AI",tags:["3D AI","建筑","室内设计"]},
  {name:"Vizcom",description:"AI渲染转化手绘图为产品设计图",iconUrl:"https://img.amz123.com/upload/image_cloud/202407/1721983005474658_Vizcom.png",url:"https://www.vizcom.ai/",category:"3D AI",tags:["3D AI","产品设计"]},
  {name:"Meshy",description:"AI快速从文本或图像生成3D模型",iconUrl:"https://img.amz123.com/upload/image_cloud/202408/1725005873673981_Meshy.png",url:"https://www.meshy.ai/",category:"3D AI",tags:["3D AI","文本转3D","图像转3D"]}
];

const filteredDesign = dedupeByUrl(designSites);
const filtered3D = dedupeByUrl(threeDSites);

if (filteredDesign.length === 0 && filtered3D.length === 0){
  console.log('No new sites to append.');
  process.exit(0);
}

function serializeSite(site){
  const indent = '    ';
  const lines = [];
  lines.push(indent + '{');
  lines.push(indent + '    "name": ' + JSON.stringify(site.name) + ',');
  lines.push(indent + '    "description": ' + JSON.stringify(site.description) + ',');
  if (site.iconUrl) lines.push(indent + '    "iconUrl": ' + JSON.stringify(site.iconUrl) + ',');
  lines.push(indent + '    "url": ' + JSON.stringify(site.url) + ',');
  lines.push(indent + '    "category": ' + JSON.stringify(site.category) + ',');
  const tags = site.tags && site.tags.length ? site.tags : [site.category];
  lines.push(indent + '    "tags": ' + JSON.stringify(tags, null, 4).replace(/\n/g, '\n' + indent));
  lines.push(indent + '}');
  return lines.join('\n');
}

const toInsertBlocks = [...filteredDesign, ...filtered3D].map(serializeSite).join(',\n');

// Find insertion point: before websitesDatabase closing ];
const hotIdx = content.indexOf('\n// 热门推荐');
if (hotIdx === -1) {
  throw new Error('Cannot find 热门推荐 anchor');
}
const beforeHot = content.slice(0, hotIdx);
const afterHot = content.slice(hotIdx);
const closeIdx = beforeHot.lastIndexOf('];');
if (closeIdx === -1) {
  throw new Error('Cannot find websitesDatabase closing bracket');
}

// Ensure trailing comma before insertion if needed
let head = beforeHot.slice(0, closeIdx);
const needsComma = /\}\s*$/.test(head);
if (needsComma) head += ',\n';
head += toInsertBlocks + '\n];';

const newContent = head + afterHot;
fs.writeFileSync(file, newContent, 'utf8');
console.log(`Appended ${filteredDesign.length} 设计AI and ${filtered3D.length} 3D AI sites.`);
