module.exports = {
  title: "进化之路",
  description: "进化之路",
  port: "321",
  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      { text: "java", link: "/java/" }
    ],
    sidebar: [
      //左侧列表
      {
        title: "Java基础",
        path: '/java/',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          {title:"面向对象",
          path:'/java/base/1.面向对象.md'},
          {title:"封装、继承、多态",
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            '/java/base/polymorphism/2.封装、继承、多态',
            '/java/base/polymorphism/3.方法重写与重载.md',
            '/java/base/polymorphism/4.Java的继承与实现.md'
          ]}
        ]
      }
    ],
  },
};

