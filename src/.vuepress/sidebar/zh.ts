import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "快速上手",
      icon: "rocket",
      prefix: "started/",
      link: "started/",
      children: "structure",
    },
    {
      text: "HOUZZkit OS 文档",
      icon: "book",
      prefix: "houzzkitos/",
      link: "houzzkitos/",
      children: "structure",
    },
    "firmware/",
    {
      text: "最新动态",
      icon: "laptop-code",
      prefix: "news/",
      link: "news/",
      children: "structure",
    },
    "qa/",

    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
  ],
});
