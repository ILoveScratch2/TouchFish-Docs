import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TouchFish",
  lang: "zh-CN",
  ignoreDeadLinks: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  description: "The website for TouchFish - A FLOSS messaging system!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '下载', link: '/guide/download' }
    ],

    sidebar: [
      {
        text: '教程',
        items: [
          { text: 'TouchFish', link: '/guide/' },
          { text: '下载', link: '/guide/download' },
        ]
      },
      {
        text: '文档站',
        items: [
          { text: '文档站点', link: '/doc-site/' },
          { text: '文档 Markdown 语法', link: '/doc-site/markdown-usage' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/2044-space-elevator/TouchFish' },
      { icon: 'qq', link: 'https://qm.qq.com/q/wmlUpIabfy' }
    ]
  },
    markdown: {
      math: true
    }
})
