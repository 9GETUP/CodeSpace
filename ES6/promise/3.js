// promise.all()方法
//注意此方法 实例对象不能使用
function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('a');

            // reject()告诉promise代码错误
            // resolve()告诉promise代码正确
            // 然后才可以调用.then,否则无法使用
            resolve()
            //reject()
        },1000)
    })
}
function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('b');
            //resolve()
            reject()
        },1500)
    })
}
function c(){
    console.log('c')
}
//all方法接收一个数组为参数
//传入两个会返回promise的函数即可
//  该方法的  数组中所有方法都正确，就会调用最后方法的.then
//Promise.all([a(),b()]).then(c)
//c充当了箭头函数的角色，会被调用

//为什么？then接收的实参会被调用
// function then(fn){
//     fn()
// }

//race方法
//该方法的 优点 调用数组中最快方法后的.then，且该方法promise状态是resolve
Promise.race([a(),b()])
.then(c)

//  reject对应catch，err作为形参
// function d(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('d');
//             reject('no')
//         },1000)
//     })
// }
// d().catch((err) =>{
//     console.log(err)
// })

