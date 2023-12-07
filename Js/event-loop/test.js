
//宏任务队列
async function a(){
    console.log(123)
    await b()
    console.log(345)
}   
a()
function b(){
    console.log(234)
}