# vue 网易云音乐

- 界面(前端)
    npm init vite 开发脚手架
    : 5173
- 后台（后端）
    netsea 
    :3000
- 前后端分离的全栈开发
# npm config set registry https://registry.npmmirror.com 
    配置一个新源 提升安装速度
devDependencies 开发时的依赖
# npm i -D  安装 开发阶段 的依赖，存放至devDependencies

# tailwindcss（类似css）
    代替 60% css 开发 原子化css 开发
    # npm i -D tailwindcss postcss autoprefixer 提升效率
    autoprefixer
    # npx tailwindcss init -p  初始化
        npx 用来执行安装或未安装的包
    "./src/**/*.{vue,js,ts,jsx,tsx}" 
        声明开发目录下所有后缀有.vue等格式的文件支持tailwindcss
        - tailwind.css
            配置三个命令即可使用 tailwind 类名
- 切页面
- 组件化思维
    - 根组件 ：App.vue
    - layout 组件 
        - Menu（菜单） 组件
        - Header 组件
        
- vite.config.js 是 vite 工程化的配置文件
    - alias 短路径
    例如 ："@" -> ./src 类似于回城
- 企业级vue 开发框架 element-plus PC版
    好多组件拿来就用

    vue 是渐进式的MVVM 开发框架 开发模式
    element-plus 组件库 找到我们想要的组件

- vite 写了一段让Element plus 自动引入的代码（省去import）

- 打造通用组件
    位于 /components/common/
    不属于特定的组件，有极高的复用性 在多个项目
    中可以复用
- 图标字体库
    要用到哪些图标？
        import {} from '@icon-park/vue-next'