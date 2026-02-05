/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Linkcard from "./components/Linkcard.vue"
import Banner from "./components/Banner.vue"
import { h } from 'vue'
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Banner)
    })
  },
  enhanceApp({app}) { 
    app.component('Linkcard' , Linkcard)
  }
} 