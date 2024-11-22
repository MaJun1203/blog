import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "数据库",
        icon: "pen-to-square",
        prefix: "MySQL/",
        children: [
          { text: "MySQL基础", icon: "pen-to-square", link: "MySQLBase" },
          { text: "MySQL进阶", icon: "pen-to-square", link: "MySQLAdvanced" },
        ],
      },
      {
        text: "JavaWeb",
        icon: "pen-to-square",
        prefix: "JavaWeb/",
        children: [
          {
            text: "04_XML_Tomcat_HTTP",
            icon: "pen-to-square",
            link: "04_XML_Tomcat_HTTP",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
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
