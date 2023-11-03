//整个代码里分为两种代码：全局和函数体内
//先编译全局再编译函数体内
//分为外层作用域和内层作用域
var a =1

function foo() {
    var c = ture
    console.log(a);
}


foo()
console.log(c);