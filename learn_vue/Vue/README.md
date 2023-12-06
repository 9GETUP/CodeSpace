- vue 脚手架: 例如vite
    - npm init vite 
        1. 初始化vue项目，远程下载一个项目模板 starter
        2. 初始化为vite，快，用来开发vue，启动项目(vite负责流程，vue负责页面)
    - cd rate(Vue) 进入项目目录
        /src 开发目录
    - npm install(i) 依赖安装

    - npm run dev(development)  vite
        scripts
    - npm run build
        dist 目录，要上线的
组件 ： 
    - 把页面按 组件 划分
        APP.vue是根组件
        每个组件都是一个vue文件
        如 掘金 导航组件
        分成：
        - html结构
        - script js
        - style  css
- v3 setup 快捷搭建vue

# **组件化思想
    component
    开发单元是html 标签 太低级了，基本无复用性
    vue 提供了 组件 的概念 组件天生可以复用 
    组件是一堆 html、css、js 的集合， 完成某个展示和功能
    完成 开发任务的拆分，细分任务，高效合作

- DOM树 ->（升级） 组件树
    未来复用性：这个组件做过，可以不用写了
    .vue 组件的思想 分工 复用 优化
- devtool
    检查组件
- 数据 MVVM思想
    - ref 响应式
- Laf
