// 回调解决异步问题

// function a(){
//     setTimeout(()=> {
//         console.log('阿珍');
//     },1000)
// }
// function b(){
//     console.log('10亩地');
// }
// a()
// b()
//怎么处理它的异步使打印的先是阿珍

//if判断不行
// let flag = false
// function a(){
//     setTimeout(()=> {
//         console.log('阿珍');
//         flag = true
//     },1000)
// }
// function b(){
//     console.log('10亩地');
// }
// a()
// if (flag){
//     b()
// }

//回调函数 可行，但是效率低
//不会造成内存泄漏，a执行完跟 b没关系
function a(cb){
    setTimeout(()=> {
        console.log('阿珍');
        cb() //回调写法
    },1000)
}
function b(){
    console.log('10亩地');
}
a(b)