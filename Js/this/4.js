//显示绑定，call方法,apply方法,bind方法
// function foo(n){
//     console.log(this.a);
// }
// var obj = {
//     a:2
// }
// foo.call(obj) //call：内置方法，强行把一个函数体的this掰到哪里去
//      function.call(...)
function foo(n,m){
    console.log(this.a,n,m);
}
var obj = {
    a:2
}
//foo.call(obj,100)//call又能强行绑定，又能调用函数，又能接收参数
//foo.apply(obj, [100,200])//与call接收参数的方式不同，要用数组
var bar = foo.bind(obj,100,200)//bind的执行结果会返回一个函数体
bar(100,200)//接收参数bind或自己传都行，或者两者协同也可以，只不过要遵循就近原则