//字符串拼接或模板拼接
// let a ='hello'
// let b ='world'

// let c =a+b
// console.log(c);

//输出某年某月某日
//es5
let date = new Date()

e=date.getFullYear()+'年' +(Number(date.getMonth())+1)+'月'+date.getDate()+'日'
//es6
let t =`${date.getFullYear()}年${+date.getMonth()+1}月${date.getDate()}日`

console.log(t);
console.log(e);