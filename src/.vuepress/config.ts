import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "TouchFish",
  description: "轻量级，兼容强，跨平台的Python聊天软件",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
