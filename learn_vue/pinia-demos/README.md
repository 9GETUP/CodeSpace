# vue3 全家桶 MVVM

- vue 响应式组件开发
    - components
        - common
        - 业务组件
    - views/
    - 第三方组件库 element-plus

- vue-router （单页应用）
    负责前端有了路由
    SPA 快 不需要传统的 http request + response
    页面不会白一下
    缺点： SEO 搜索引擎优化不够好

- vuex / pinia   财务
    适用于大型项目
    前端可以管理数据了
    - 确保数据流的正确性
        数据在组件里叫什么？
            状态，因为要确保状态在变换时 数据不出错
    - 将数据与组件剥离，UI组件更单纯

# 介绍vue 项目 数据从后端到 页面显示 经过的所有流程和关键环节
    todos
    数据源于 mysql/mongondb db/todos table
    sql 
    读取到java/node 的内存中 MVC（传统后端架构）
    通过后端router 进入controler
    响应res api
    http GET ：3000/todos
    然后来到 axios http.js index.js getTodoList
    store actions -> mutations -> state
    遵守 组件 views/ -> props 传给子组件（UI化）
    UI Component + State + Router = SPA
    UI Component + State = App

- pinia ?
    - 更简单
        /store/todo.js defineStore 可以得到一个状态管理函数 返回值命名以use开头
        函数返回 state
        若引入：import { useTodoStore } from './store/todo.js'
        const { todos }  = useTodoStore() 
    - 更现代
        hooks编程 use 开头
    - 将数据 和 UI组件分离