// 基本数据类型的转换方法
let num =123
let str = 'hello world'
let un = undefined
let n = null
let flag = true

// let big = 123n
// let sy = Symbol(123)

//1.转换成布尔值的方法

//显示转换 ： 使用布尔构造函数，非空字符串，非0数字均为true
// console.log(Boolean(-0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(''));

//2.转换成数字的方法
// 使用Number构造函数
// console.log(Number('123')); 
// console.log(Number('hello'));
// console.log(Number(undefined));
// console.log(Number('003.123'));


// 3.转字符串
// console.log(String(NaN)); //NaN
// console.log(String(Infinity));  //Infinity
// console.log(String(undefined)); 
// console.log(String(null)); //null
// console.log(String(true));

// 4.转对象

console.log(Object(123));  // {123}
console.log(new Number(123));  // {123}