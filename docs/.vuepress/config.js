module.exports = {
  title: "进化之路",
  description: "进化之路",
  port: "321",
  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      { text: "java", link: "/java/" },
      { text: "关于我", link: "/about/" },
    ],
    sidebar: [
      //左侧列表
      {
        title: "Java",
        path: '/java/',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          "/java/base/基础篇",
          "/java/base/Java基础知识",
          "/java/base/网络编程",
        ]
      },
      {
        title: "关于我",
        path: '/about/'
      }
    ],
  },
};

