# 项目开发流程
1. 创建全局的css文件，添加reset.css

# 组件化(三步走)
1. import 引入
2. components 注册
3. 使用: 例如：<header-detail />或<HeaderDetail /> 大写改小写，后面那个驼峰改为横杠

# 父子组件通讯
1. 父组件在子组件使用处绑定属性以传值
2. 子组件用props接受父组件传递过来的属性（props中的属性用法同data数据源）

# axios (类似fetch)
1. 当请求跨域时，vueCli 允许我们配置一个代理，用于规避跨域问题（只在开发环境下生效）


# 在App.vue中获取到了商家信息

# transition
vue官方内置组件 过渡动画