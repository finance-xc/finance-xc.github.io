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
      // {
      //   icon: {
      //     svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
      //   },
      //   link: 'https://weixin.qq.com/',
      //   ariaLabel: 'wechat'
      // },
      { icon: 'discord', link: 'https://discord.com/' },
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
          { text: 'APIs', link: '/api/poi-general-api' },
          { text: 'Changelog', link: '/changelog.md' },
          { text: 'JavaDoc', link: `/javadoc/index.html`, target: "blank" },
        ],

        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Quick Start', link: '/quick-start' }
            ]
          },
          {
            text: 'API',
            items: [
              { text: 'POIGeneralAPI', link: '/api/poi-general-api' },
              { text: 'POIHsmManage', link: '/zh_CN/api/poi-hsm-manage' },
              { text: 'POIPrinterManager', link: '/zh_CN/api/poi-print-manager' },
              { text: 'MifareCardReader', link: '/api/mifare-card-reader' }
            ]
          },
          {
            text: 'Wiki',
            items: [
              { text: 'Mifare Card', link: '/wiki/mifare-card' },
              // { text: 'KFC Demo', link: '/wiki/kfc' }
            ]
          },
          {
            text: 'FAQ',
            items: [
              { text: 'Error Codes', link: '/faq/error-codes' },
              { text: 'About Mifare', link: '/faq/mifare' }
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
          { text: '接口', link: '/zh_CN/api/poi-general-api' },
          { text: '更新日志', link: '/zh_CN/changelog.md' },
          { text: 'Java文档', link: '/javadoc/index.html', target: "blank" },
        ],

        sidebar: [
          {
            text: '简介',
            items: [
              { text: '快速开始', link: '/zh_CN/quick-start' }
            ]
          },
          {
            text: '接口',
            items: [
              { text: 'POIGeneralAPI', link: '/zh_CN/api/poi-general-api' },
              { text: 'POIHsmManage', link: '/zh_CN/api/poi-hsm-manage' },
              { text: 'POIPrinterManager', link: '/zh_CN/api/poi-print-manager' },
              { text: 'MifareCardReader', link: '/zh_CN/api/mifare-card-reader' },
            ]
          },
          {
            text: '拓展',
            items: [
              { text: 'Mifare 卡', link: '/zh_CN/wiki/mifare-card' },
              // { text: 'KFC Demo', link: '/wiki/kfc' }
            ]
          },
          {
            text: '常见问题',
            items: [
              { text: '错误码', link: '/zh_CN/faq/error-codes' },
              { text: 'Mifare 相关', link: '/zh_CN/faq/mifare' }
            ]
          }
        ],
      }
    }
  },

  markdown: {
    lineNumbers: true
  }
})
