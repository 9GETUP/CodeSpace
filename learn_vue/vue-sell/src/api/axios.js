import axios from 'axios'

//做了代理就不要写
const baseUrl = ''

//在引用前要 export 抛出 但引用时要用花括号，因为抛出的是对象
//而 export default 不用花括号
export function get(url) {
  return function(params = {}) {
    return axios.get(baseUrl+url, {
      //允许向后端传递值
      params
    }).then(res => {
      //res.data 的解构
      const { errno, data } = res.data
      if (errno === 0) {
        return data
      }
    })
  }
}



// export default get

// let resFn = get('/seller')
// resFn().then(data => {

// })