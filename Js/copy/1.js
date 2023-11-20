// 复习
//调用栈
// let a = 1

// 深拷贝
// let b =a
// a= 2
// console.log(b);

//堆 传地址
let obj = {
    age :18
}

// 浅拷贝
let obj2 =obj
obj.age = 20

console.log(obj2.age);