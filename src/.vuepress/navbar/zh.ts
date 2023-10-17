import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/started/",
  "/houzzkitos/",
  "/firmware/",
  {
    text: "最新动态",
    icon: "newspaper",
    prefix: "/news/",
    children: [
      {
        text: "产品更新时间线",
        icon: "lightbulb",
        link: "update_line.md",
      },
      {
        text: "研发计划",
        icon: "lightbulb",
        link: "dev_plan.md",
      },
      {
        text: "固件发布",
        icon: "lightbulb",
        link: "firmware_publish.md",
      },
    ],
  },
  "/qa/",

  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
