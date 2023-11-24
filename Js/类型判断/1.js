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


console.log(Object.prototype.toString.call('hello' ));//[object String]
console.log(Object.prototype.toString.call(123)); //[object Number]
console.log(Object.prototype.toString.call(false)); // [object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call(123n)); //[object BigInt]
console.log(Object.prototype.toString.call(Symbol('hello'))); //[object Symbol]
console.log(Object.prototype.toString.call({})); //[object Object]
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(Object.prototype.toString.call(function(){})); //[object Function]
let data = new Date //日期
console.log(Object.prototype.toString.call(data)); //[object Date]