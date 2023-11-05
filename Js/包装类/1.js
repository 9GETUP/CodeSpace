// //五种 原始 数据类型
// let a='hello'
// let b=123
// let c=true
// let u=undefined
// let n=null

// // 引用 类型（有一个引用地址，指针）:对象，数组，函数，正则，日期
// let obj ={
//     name:'老王'
// }

// let a=1
// let b=a
// a=2
// console.log(b);


//打印出小红---

let obj = {
    name:'小花',
    a :1
}
let lw =obj
obj.name='小红'
obj.a=2
console.log(lw.name,lw.a);