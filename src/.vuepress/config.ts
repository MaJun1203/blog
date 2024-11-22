import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "",
  description: "vuepress-theme-hope 的博客演示",

  theme,
})
