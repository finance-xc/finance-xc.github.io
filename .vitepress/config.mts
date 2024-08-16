import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "XChengTech Finance",
  description: "XCheng Finance Develop",
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/finance-xc/finance-xc.github.io' }
    ]
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Docs', link: '/api-spec' }
        ],

        sidebar: [
          {
            text: 'Finance SDK',
            items: [
              { text: 'Quick Start', link: '/quick-start' },
              { text: 'API Specification', link: '/api-spec' }
            ]
          }
        ],
      }
    },
    zh_CN: {
      label: '简体中文',
      lang: 'zh-CN', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zh_CN/', // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
      themeConfig: {
        nav: [
          { text: '主页', link: '/zh_CN/' },
          { text: '文档', link: '/zh_CN/api-spec' }
        ],

        sidebar: [
          {
            text: '祥承金融 SDK',
            items: [
              { text: '快速开始', link: '/zh_CN/quick-start' },
              { text: 'API 文档', link: '/zh_CN/api-spec' }
            ]
          }
        ],
      }
    }
  }
})
