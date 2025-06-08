import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dasamuka",
  description: "Dasamuka",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },

      {
        text: 'Other',
        collapsed: true,
        items: [
          { text: 'XRDP and XFCE', link: '/md/xrdp-xfce' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/buris13' },
      { icon: 'twitter', link: 'https://twitter.com/bawaperut' }
    ]
  }
})
