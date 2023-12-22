//  todo 数据管理模块 需要提供state actions
import { ref } from 'vue'  //引入ref 提供响应式功能
import { defineStore } from 'pinia';
// vue 3.0
//defineStore 返回  useTodoStore hook 函数
export const useTodoStore = defineStore("todo", ()=>{
    const todos = ref([
        { txt: '年前脱单' }
    ]) //响应式数据
    const addTodo = () =>{
        todos.value.push({txt: '吃饭'})//ref的增加方法
    }
    return {
        todos,
        addTodo,

    }
})
