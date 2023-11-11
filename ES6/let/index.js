//来聊聊 let和const

// console.log(a);
// var a =1 
// //var存在声明提升
// //所以实际执行
// var a
// console.log(a)
// a = 1

//换成let,不存在声明提升
// console.log(a);
// let a=2

// 暂时性死区
// 如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
// let a =1
// if(true){
//     console.log(a);
//     let a=2
// }

//let定义的变量不能重复定义
// let a =1 
// let a =2
// console.log(a);

// var a =2
// console.log(window.a);

//const声明的原始数据不允许更改
// const a =1
// console.log(a);

//引用类型值可以更改，词法作用域存放的是地址
const obj={
    name: '军儿'
}
obj.name='程总'
console.log(obj);