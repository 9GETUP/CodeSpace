// 手动实现一个深拷贝方法

let obj = {
    name: '阿伟',
    age : 18,
    like :{
        type: 'coding'
    }
}

//封装一个深拷贝方法,不考虑循环引用
function deepCopy(obj){
    let objCopy = {}
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Object){ //判断obj[key] 是引用类型
                //创建新对象，防止引用地址相同
                    objCopy[key] = deepCopy(obj[key])
            }else {
                objCopy[key] = obj[key]
            }
        }
    }
    return objCopy
}
let copy = deepCopy(obj)
obj.like.type='eating'
console.log(copy);