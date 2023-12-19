// 调用 Vuex
import { createStore } from "vuex";

const store = createStore({
    state() { // state 等同于data，是公共的库
        return {
            //不能用this访问
            lists: ['html','css','js']
        }
    },
    //只有仓库管理员能动数据
    mutations: { // 类似于methods
        // 用第一个形参访问state，内定的
        // 第二个是人为的，接收外部实参的值
        listsAdd(state,val){
            state.lists.push(val)
        }
    }
})

export default store