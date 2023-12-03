// promise解决异步
//

//xq -> marry
function xq(){
    //promise是一个构造函数，里面放一个回调函数
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log('龙哥相亲了！');

            //调用resolve参数，它是一个函数
            //提供的值可以作为.then的形参res的值
            resolve('相亲成功了')
        },2000)
    })
}
function marry(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了！');
            resolve()
        },1000)
    })
    
}
function baby(){
    setTimeout(() => {
        console.log('小龙女出生');
    },500)
}
//promise实例对象 then
//.then天生返回 promise实例对象
//不写就用自带的
xq()
.then((res)=>{
    return marry()
})
.then((res2)=>{
    baby()
})
