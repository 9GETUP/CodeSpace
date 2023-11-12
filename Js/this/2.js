//this只定义在有作用域的地方，如函数或全局中，不能定义在对象中，无意义
// var a=1

// function foo(){
//     console.log(this.a); //this 代表 的是整个foo的作用域，而this 代指 的是全局
                            //代表和代指不一样
// }  //因为this存在于函数，而函数在全局被调用
// foo()

// function foo(){
//     var a =2;
//     this.bar()
// }
// function bar() {
//     console.log(this.a); 
// }
// foo()
//结果是undefined

//因为this无法访问一个词法作用域内部的内容，this.a拿不到值
//词法作用域：指的是声明在了哪里，可能在全局也可能在函数内部
//foo的词法作用域在全局
// function foo(){  // [[scope]]是一个属性，这是函数的作用域
//     var a =2;
//     this.bar()
// }
// function bar() {
//     var b =3
//     console.log(this.b); //undefined，this无法访问一个词法作用域内部的内容
// }

// bar()

var b=2
function foo(){  
    var b =1
    bar()
}
function bar() {
   baz()
}
function baz(){
    console.log(b);
}
foo()
//结果是 2