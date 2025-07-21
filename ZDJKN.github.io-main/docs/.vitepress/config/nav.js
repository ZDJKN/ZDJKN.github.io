// docs/.vitepress/config/nav.js

export const nav = [
  { text: '首页', link: '/' },
  { text: '运营文章', link: '/articles/' },
  { text: '平台洞见', link: '/platforms/' },
  {
    text: '资源推荐',
    items: [
      { text: '书单推荐', link: '/books/' },
      { text: 'AI工具', link: '/tools/' },
      { text: '学习资料', link: '/resources/' }
    ]
  },
  { text: '关于我', link: '/about' }
];