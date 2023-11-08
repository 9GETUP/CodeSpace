//this只定义在有作用域的地方，如函数或全局中，不能定义在对象中，无意义
// var a=1

// function foo(){
//     console.log(this.a); //
// }
// foo()

//词法作用域：指的是声明在了哪里，可能在全局也可能在函数内部
// function foo(){
//     var a =2;
//     this.bar()
// }
function bar() {
    var b =3
    console.log(this.b); //this无法访问一个词法作用域内部的内容
}

bar()