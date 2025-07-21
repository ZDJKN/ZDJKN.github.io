---
# 指定使用 VitePress 的 home 布局
layout: home

# 浏览器标签页的标题等信息
title: ZDJKN的个人主页
titleTemplate: 关于康宁的一切

hero:
  # 你的名字或品牌
  name: ZDJKN
  # 主要的标语
  text: 祝大家康宁
  # 描述性的文字，会显示在标语下方
  tagline: /内容运营/知识管理/AI工具
  # 首页右侧的图片
  image:
    src: /ZDJKN.jpg # 图片路径，我们下一步会讲怎么放
    alt: ZDJKN
  # 两个主按钮
  actions:
    - theme: brand
      text: 进入主页
      link: / # 链接到你的作品集页面
    - theme: alt
      text: 关于我
      link: /about # 链接到你的“关于我”页面

# 按钮下方的功能卡片区域
features:
  - icon: 📖
    title: 内容运营与平台洞见
    details: 我对于小红书、抖音等平台算法的理解，以及内容运营的实战复盘与思考。
    link: /platforms/ # 链接到你的“平台洞见”文章列表
  - icon: 🛠️
    title: AI工具与知识管理
    details: 我在工作和学习中高频使用的AI效率工具，以及个人知识体系的搭建方法。
    link: /tools/ # 链接到你的AI工具页面
  - icon: 🚀 
    title: Github项目分享
    details: 分享我的觉得有意思的开源项目
    link: /projects/ # 链接到工具页面
---
<style>
/* 这是一个 CSS 注释，它不会影响代码运行 */

/* 找到首页 Hero 区域里那张带 "image-src" 样式的图片 */
.VPHero .image-src {
  /* 关键代码：设置边框圆角为50%，任何正方形图片都会变成完美的圆形 */
  border-radius: 50%; 

  /* 下面是可选的“美化”代码，让圆形头像更好看 */

  /* 加一个 5 像素宽的、和背景色接近的柔和边框 */
  border: 5px solid var(--vp-c-bg-soft); 

  /* 加一点柔和的阴影，让它有立体感 */
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
}
</style>