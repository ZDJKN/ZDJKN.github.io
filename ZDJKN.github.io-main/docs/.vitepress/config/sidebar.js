// docs/.vitepress/config/sidebar.js

export const sidebar = {
  '/articles/': [
    {
      text: '我的运营文章',
      items: [
        { text: '第一篇文章标题', link: '/articles/post1' },
        { text: '第二篇文章标题', link: '/articles/post2' },
      ]
    }
  ],
  '/platforms/': [
    {
      text: '平台算法解析',
      items: [
        { text: '小红书算法深度理解', link: '/platforms/xiaohongshu-algorithm' },
      ]
    }
  ]
};