//console.log(this);

//window： 窗口，浏览器的全局环境
//当在全局定义一个新变量，相当于在window上挂了一个新属性，并能访问
// var a = 1
// console.log(window.a);

//node 主要用于后端开发，无 window的概念

//为什么要设计 this

// function identify(context){
//     return context.name.toUpperCase() //作用于字符串的方法，小写改为大写
// }

// function speek(context){
//     var greeting = "hello ,I'm " +identify(context); //能用单引号便用单引号
//     console.log(greeting);
// }
// var me ={
//     name:"Tom"
// }
// var you ={
//     name:"Jerry"
// }
// console.log(identify(you));
// speek(me) //这里是显示的值传递

//但是用上面的代码，显示的传入参数（人为的，看得见的）
//应用this来隐式传递,省略了传参的过程,简化了代码
function identify(){
    return this.name.toUpperCase() //作用于字符串的方法，小写改为大写
}

function speek(){
    var greeting = "hello ,I'm " +identify.call(this);
    console.log(greeting);
}
var me ={
    name:"Tom"
}
var you ={
    name:"Jerry"
}
speek.call(me)
// this就是用于简化代码

//为什么要写call