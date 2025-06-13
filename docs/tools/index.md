---
layout: page
---

# AI 工具箱

这里是我精心筛选的、能极大提升生产力的AI工具。

<script setup>
import { VPHomeSponsors } from 'vitepress/theme'
const tools = [
  {
    name: 'ChatGPT',
    img: '/path/to/chatgpt-logo.png', // Logo图片需要放在 docs/public/ 目录下
    desc: '强大的语言模型，适用于写作、编程和对话。'
  },
  {
    name: 'Midjourney',
    img: '/path/to/midjourney-logo.png',
    desc: '顶级的AI绘画工具，释放你的创造力。'
  }
  // ...更多工具
]
</script>

<div class="vp-sponsor-grid">
  <div v-for="tool in tools" class="vp-sponsor-grid-item">
    <a :href="tool.link" target="_blank" class="sponsor-item">
      <img :src="tool.img" :alt="tool.name" />
      <p><strong>{{ tool.name }}</strong></p>
      <p>{{ tool.desc }}</p>
    </a>
  </div>
</div>
