import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "小哥的博客",
  description: "一位热爱生活的小哥",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
