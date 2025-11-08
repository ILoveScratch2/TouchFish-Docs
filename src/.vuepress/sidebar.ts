import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "docs/",
      children: "structure",
    },
    {
      text: "洛谷文章",
      icon: "document",
      link: "https://www.luogu.com.cn/article/z6se69kk/",
    },
  ],
});
