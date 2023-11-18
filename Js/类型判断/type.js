let str = 'hello' 
let num =123  //number
let flag = false //boolean
let und = undefined //undefined
let nu =null //null
let big = 123n //es6新增：大整形 big number,数字尾部加个n
let s =Symbol('hello')  //s6新增：Symbol类型，定义出唯一 一种值，多用于封装

let obj={}
let arr=[]
let fn = function(){}
let data = new Date //日期

// 如何判断数据的类型

//1. typeof 将数据转化为2进制数，前面三位是0就是对象
console.log(typeof(str));
console.log(typeof(nu)); // 2进制是一串0，所以是object, js的bug,
console.log(typeof(big));
console.log(typeof(s));
//2. typeof不能判断引用类型，但是 function 除外
console.log(typeof(arr));
console.log(typeof(obj));
console.log(typeof(fn));

//总结，typeof只能判断原始数据类型