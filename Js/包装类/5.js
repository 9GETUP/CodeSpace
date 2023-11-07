//包装类

//为什么输出undefined

var obj = {}
console.log(obj.a);


var num =123
num.abc = 'hello'
console.log(num.abc);

//使用数字的内置构造函数
var num = new Number(123); //得到一个对象
num.abc = 'hello'  //添加属性时被识别为对象
console.log(num.abc); 
console.log(num * 2); //参与四则运算时又会被识别成数字

// var str = 'abcd'
// console.log(str.length); //输出4


// var num = 4
// num.len = 3 //不可取语句，但是促使执行用构造函数创建：

//只要强行在原始类型上访问属性，以下语句就会执行
//但是v8还是会用构造函数创建一个数字对象，且赋值，最后自行删除
// var num = new Number(4)
// num.len =3
// delete num.len

// new Number(4).len // 隐式包装类

//但是  输出num.len时又会创建一个包装类，且len属性无值
// console.log(num.len);


//考点
// var arr = [1,2,3,4,5]
// arr.length = 2
// console.log(arr);

// var str = 'abcd'
// str.length =2 

// //new String('abcd').length
// //实际有以上语句
// console.log(str.length); //该值只能访问，不能更改

//面试题(阿里)
var str = 'abc'
str += 1 //'abc1' 注意：字符串类型与任意类型相加结果都是字符串类型
var test = typeof(str) // typeof是一个内置函数，返回一个表示数据类型的字符串，test = 'string'
if(test.length==6){// new String(test).length
    test.sign ='typeof的返回结果可能为String'
    // new String(test).sign ='typeof的返回结果可能为String'
    //delete
} 
console.log(test.sign); //又会重新 new 一个String（），但是不会赋值

// 为什么访问对象没有的属性不报错
// 因为v8会自行添加但不删除
//所以最终输出undefined