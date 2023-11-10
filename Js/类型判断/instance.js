let str = 'hello' 
let num =123  //number
let flag = false //boolean
let und = undefined //undefined
let nu =null //null
let big = 123n //es6新增：大整形 big number,数字尾部加个n
let s =Symbol('hello')  //s6新增：Symbol类型，定义出唯一 一种值，多用于封装

let obj={}
let arr=[] //new Array()
let fn = function(){}
let date = new Date //日期

//如何判断引用类型
//用instanceof语句
//console.log(obj instanceof Object);
//console.log(arr instanceof Array);
// console.log(fn instanceof Function);
// console.log(date instanceof Date);

// //如果判断原始
// console.log(str instanceof String);//false

//但是以下语句都为true
//所以只能往小的判断，不能往大判断
console.log(arr instanceof Object);
console.log(arr instanceof Array);

//instance 的原理：不断地找与数据的隐式原型相等的显示原型对应的数据，知道找到为止
// arr.__proto__ === Array.prototype