//console.log(this);

//window： 窗口，一个全局的空对象
//当在全局定义一个新变量，相当于在window上挂了一个新属性，并能访问
// var a = 1
// console.log(window.a);

//node 主要用于后端开发，无 window的概念

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
// //console.log(identify(you));
// speek(me) //这里是显示的值传递

//应用this来隐式传递,省略了传参的过程,简化了代码
function identify(){
    return this.name.toUpperCase() //作用于字符串的方法，小写改为大写
}

function speek(){
    var greeting = "hello ,I'm " +identify.call(this); //能用单引号便用单引号
    console.log(greeting);
}
var me ={
    name:"Tom"
}
var you ={
    name:"Jerry"
}
speek.call(me)