import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state() { //全局的数据源
    return {
      questionList: [],
      itemNum : 1, //第几题
      answerId: [], //存放选中的答案
    }
  },
  getters: { //computed
    rightAnswer(state) {
      let arr = []  //存放选对的项
      for(let question of state.questionList){
        for(let answer of question.topic_answer){
          if (answer.is_standard_answer == 1){
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: { //methods
    getQuestionList(state,list){
      state.questionList = list
    },
    recordAnswer(state,id){
      state.answerId.push(id)
    },
    nextItem(state,){
      //保存当前答案
      state.itemNum += 1
    }
  },
  actions: { //async methods
    //调用要到外部组件调用
    // context代表的是整个仓库的上下文对象 
    //{ commit } 相当于context.commit
    getQuestionListAction({ commit }){ //context
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/fri')
      .then(res => {
        console.log(res);
        //触发 getQuestionList
        commit('getQuestionList', res.data);
      })
    },
    recordAnswerAction({commit,state}, id){
      commit('recordAnswer', id)
      if (state.itemNum < state.questionList.length){
        commit('nextItem')
      }
    }
  },
  modules: {
  }
})
