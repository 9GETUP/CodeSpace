// 对象转数字或字符串都是通过方法

// console.log(Number({})); //NaN
// console.log(Number([])); //0

//转字符串 ： toString
// let a = {}
// let b = [1,2,3]
// console.log(a.toString()); //'[object Object]'
// console.log(b.toString()); // '1,2,3'
// let time = new Date()
// console.log(time.toString()); 

//转数字 ： valueOf 专门用于包装类
let a = new Number(123)

console.log(toString({}));