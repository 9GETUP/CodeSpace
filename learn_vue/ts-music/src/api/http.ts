import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.timeout = 10 * 1000;
axios.defaults.maxBodyLength = 5 * 1024 * 1024; //请求体最大数据量
axios.defaults.withCredentials = true;

// 响应式拦截
axios.interceptors.response.use(
    (response) => response,
    function (error) {
        return Promise.reject(error);
    }
)

interface Http {
    // ?是可选的意思，
    // Promise<T> 一定有返回值，难点和亮点 tailwind hooks编程，ts
    // T是 Banner接口需要的数据类型，是形参
    get<T>(url:string ,params?:unknown):Promise<T>
}
const http:Http = {
    get(url,params){
        return new Promise((resolve,reject)=>{
            axios
              .get(url, {params})
              .then((res) =>{
                resolve(res.data)
              })
              .catch((err) =>{
                reject(err.data)
              })
        })
    }
}

export default http;