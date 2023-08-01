import { defineConfig } from 'vitepress'
import markdown from './markdown'
import lang from './lang'
import sidebar from './sidebar'

const config = defineConfig({
  title: 'New Biz',
  description: 'New Biz 组件库',
  markdown,
  locales: {
    '/': {
      lang: 'zh-CN',
      label: '简体中文'
    },
    '/en-US': {
      lang: 'en-US',
      label: 'English'
    }
  },
  themeConfig: {
    sidebar,
    demoblock: lang,
    logo: '../../assets/logo.svg',
    locales: {
      '/': {
        lang: 'zh-CN',
        label: '简体中文'
      },
      '/en-US': {
        lang: 'en-US',
        label: 'English'
      }
    },
    algolia: {
      appId: 'HOQD3NUZNM',
      apiKey: '07456b4a262e8c84eb892088e5cc3791',
      indexName: 'vue-devui'
    }
  }
})

export default config
