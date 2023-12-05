# Vite
    是管家，帮我们生成一个完整的项目目录，并做好文件的引入
    vite 还能自动刷新页面，类似于live server

# Vue
    只有一个页面：index.html（跟项目大小无关）
        优势：同时加载所有页面的代码片段(组件)，反爬虫
    public ：放置一些公用的配置资源，如图片
    src：项目开发的地方
        - assets：也放一些配置资源
        - components：就是一些组件
        - APP.vue：放置总vue代码的地方
        - main.js：引入vue代码，挂载首页容器
        - package.json：项目说明书,记录

    如果编辑项目时要先装package.json中的依赖：npm i
        - 项目要运行起来：npm run dev
        - 将代码打包：npm run build