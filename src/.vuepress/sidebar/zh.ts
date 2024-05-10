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
    {
      text: "硬件和固件",
      icon: "fa-solid fa-microchip",
      prefix: "firmware/",
      link: "firmware/",
      children: "structure",
    },
    {
      text: "开发者指南",
      icon: "laptop-code",
      prefix: "developers/",
      link: "developers/",
      children: "structure",
    },
    {
      text: "常见问题",
      icon: "fa-solid fa-circle-question",
      prefix: "qa/",
      link: "qa/",
      children: "structure",
    },

    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // "slides",
    // {
    //   text: "最新动态",
    //   icon: "laptop-code",
    //   prefix: "news/",
    //   link: "news/",
    //   children: "structure",
    // },
  ],
});
