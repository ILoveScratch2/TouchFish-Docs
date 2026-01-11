/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
}