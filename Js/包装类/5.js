//包装类

//为什么输出undefined
// var obj = {}
// console.log(obj.a);

// var num =123
// num.abc = 'hello'
// console.log(num.abc);

// var num = new Number(123);
// num.abc = 'hello'  //添加属性时被识别为对象
// console.log(num.abc); 
// console.log(num * 2); //参与四则运算时又会被识别成数字

// var str = 'abcd'
// console.log(str.length); //输出4

// var num = 4
// num.len = 3 //不可取语句

//但是v8还是会创建一个构造函数，且赋值，最后自行删除
// var num = new Number(4)
// num.len =3
// delete num.len


//输出num.len时又会创建构造函数，但是len属性无值
// console.log(num.len);

//实际上执行以下语句
// new Number(4).len // 隐式包装类
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
str += 1 //'abc1'
var test = typeof(str) //'string'
if(test.length==6){// new String(test).length
    test.sign ='typeof的返回结果可能为String'
    // new String(test).sign ='typeof的返回结果可能为String'
    //delete
}
console.log(test.sign); //又会重新 new 一个String（），但是不会赋值

// 为什么访问对象没有的属性不报错
// 因为v8会自行添加但不删除
//所以最终输出undefined