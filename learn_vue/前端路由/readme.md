# 路由
最早是 服务端用于描述路径的
目前是 前端借鉴路由的称呼来描述 url 和 组件 的映射关系


# 实现 路由 需要解决的问题
1. 如何修改url，且不引起页面的刷新
2. 如何知道 url变化了

两种方式：history和hash

# hash(哈希)
浏览器的url后拼接井号xxx，例如 http://localhost:8081/#/about
井号后面的都是hash值，而hash值的变更 是不会引起浏览器页面的刷新的。

- 修改url的方式：
    1. a标签
    2. 浏览器的前进后退
    3. window.location

以上方式导致url变更 都会触发hashchange事件

# history
history 提供了一个pushState 方法，可以修改url且不引起页面刷新，
提供了popState事件，仅当浏览器前进后退时生效