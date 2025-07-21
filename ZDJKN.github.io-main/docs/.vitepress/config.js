// docs/.vitepress/config.js

// 1. 从我们创建的新文件中导入 nav 和 sidebar 配置
import { nav } from './config/nav.js';
import { sidebar } from './config/sidebar.js';

export default {
  title: "ZDJKN 的个人主页",
  description: "一个分享运营、AI工具与思考的个人博客。",
  base: '/',

  themeConfig: {
    // 2. 在这里直接使用导入的配置
    nav: nav,
    sidebar: sidebar,

    // 3. 其他配置保持不变
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ZDJKN' }
    ],

    footer: {
      message: 'Powered by VitePress.',
      copyright: 'Copyright © 2025-present ZDJKN'
    }
  }
}