import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  //"/demo/",
  {
    text: "笔记",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "数据库",
        icon: "pen-to-square",
        prefix: "MySQL/",
        children: [
          { text: "MySQL基础", icon: "pen-to-square", link: "MySQLBase" },
          //{ text: "MySQL进阶", icon: "pen-to-square", link: "MySQLAdvanced" },
        ],
      },
      {
        text: "JavaWeb",
        icon: "pen-to-square",
        prefix: "JavaWeb/",
        children: [
          {
            text: "XML_Tomcat_HTTP",
            icon: "pen-to-square",
            link: "XML_Tomcat_HTTP",
          },
          // {
          //   text: "Servlet",
          //   icon: "pen-to-square",
          //   link: "Servlet",
          // },
        ],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
