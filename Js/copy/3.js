// 浅拷贝的实现原理，手写浅拷贝
// 关键是obj.hasOwnProperty(key)
// let obj = {
//     name: '阿伟',
//     age : 18,
//     like :{
//         type: 'coding'
//     }
// }
let arr = ['a',{n:1},1,undefined,null]

function shalldwoCopy(obj){
    // let objCopy = {}
    //类型判断
    // if (obj instanceof Array){
    //     objCopy = []
    // }

    //要提前判断不是原始类型
    if (typeof obj !== 'object' || obj == null)
        return 
    let objCopy = obj instanceof Array ? [] : {} //三元运算符
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            //把key当成变量来读取
            objCopy[key] =  obj[key]
        }
    }
    return objCopy
}

let newObj = shalldwoCopy(arr)

// obj.like.type = 'swimming'
console.log(newObj);