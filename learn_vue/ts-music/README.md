# typescript 让工资 + 10%
- 让前端像写java一样写大型项目
   大型：代码一万行+
-vue/react + typescript
- es6 
   弱类型还没有，缺点是容易出问题
   ts中：let banners:[int] = [1,2,3]
- typescrpt 是js 的超集
- 给项目引入前端模型层
   - 路由已经不是后端的，前端也可以有
   - 前端也可以有自己的模型， MVVM

- UI组件和数据管理的分离
   - store / components|views
   - pinia defineStore('todos', () =>{
      return {
         这里包含状态：state
         或函数：...actions
      }
   }) useTodoStore
   - vue ref 
   - 这里是唯一请求axios 接口的地方
   - 全局使用pinia , app.use(createPinia())
   - 引入这个模块，执行useTodoStore()方法
const { todos } = toRefs(useTodoStore())
const { getTodos } = useTodoStore()

- vue 项目开发设计模式
   - 越复杂的,只要是流程,其实很简单,只不过需要一本说明书
   - UI 组件 + 数据管理
   - 数据的流向:
      backend -> models -> api -> store -> component
   - SPA
      router -> views -> components
   - APP = VUE + VueRouter + pinia + ts
   - 写 UI组件
      ElementPlus(熟悉) + views + components(common|components) +
      Tailwindcss(熟悉) + 组件设计艺术

- App.vue 一个一个组件慢慢搭
   <> defineProps
   - 不要用ts