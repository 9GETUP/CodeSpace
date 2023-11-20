// 浅拷贝的几种方式

// 1. 
// let a = { name :'俊熙'}
// //Object.create()创建一个空对象b，且让b对象继承a的属性
// let b = Object.create(a)
// console.log(b);

// a.name = '军儿'
// console.log(b.name);

// 2. 对象合并
// let a = { 
//     name :'俊熙',
//     like : {
//         n:'coding'
//     }
// }
// //浅拷贝
// //let b = Object.assign({},a)

// let b = Object.assign({},a)
// //a.like = {}
// a.like.n = 'running'

// a.name = '军儿'
// console.log(b);


// 数组方法：concat,slice,浅拷贝
let arr = [1,2,3,{a:10}]
//let newArr = [].concat(arr) //将arr拼接过来返回一个新数组
// let newArr = arr.slice(0)

//解构数组 浅拷贝
//let newArr = [...arr]

//es6新增 浅拷贝
let newArr = arr.toReversed().reverse()
//arr.push(4)
arr[3].a = 100
console.log(newArr);