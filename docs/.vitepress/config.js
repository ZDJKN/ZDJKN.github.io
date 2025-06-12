// .vitepress/config.js

export default {
    // --- 网站的标题和描述 ---
    title: 'ZDJKN', 
    description: '关于康宁的一切',
  
    // --- 主题配置 ---
    themeConfig: {
      // --- 网站Logo ---
      // logo: '/logo.png', // 如果你有logo，可以放在 docs/public/ 目录下
  
      // --- 顶部导航栏 ---
      nav: [
        { text: '首页', link: '/' },
        { text: '文章列表', link: '/articles/index' },
        { text: '关于我', link: '/about' },  // 链接到文章列表页
        // 你可以添加更多导航项，例如：
        // { text: '关于我', link: '/about' }, 
      ],
  
      // --- 侧边栏 ---
      sidebar: {
        // 当用户在 /articles/ 目录下时，会显示这个侧边栏
        '/articles/': [
          {
            text: '我的文章分类', // 侧边栏分组标题
            items: [
              // 每一项都是一个链接
              { text: '五月推荐看的5本书,值得反复阅读', link: 'https://mp.weixin.qq.com/s/XETuUNs5C9f-gzdCw_Fs_g' },
              { text: '2025年书单:100本书', link: 'https://mp.weixin.qq.com/s/Gj3fT7G99Zlr7ENYRQwl-A' },
              { text: '晴雯', link: 'https://mp.weixin.qq.com/s/pwTxsvA4xY5OVgBeVGpBvg' },
              // 以后有新文章，在这里添加链接即可
            ]
          }
        ]
      },
  
      // --- 社交链接 ---
      socialLinks: [
        // 将链接换成你自己的 GitHub 地址
        { icon: 'github', link: 'https://github.com/ZDJKN' }
      ],
      
      // --- 页脚 ---
      footer: {
        message: '基于 VitePress 构建',
        copyright: 'Copyright © 2025-present ZDJKN'
      },
  
      // --- 其他配置 ---
      // algolia: { ... } // 如果需要搜索功能，可以配置 Algolia
      // carbonAds: { ... } // 如果需要广告，可以配置 Carbon Ads
    }
  }