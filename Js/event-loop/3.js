// 面试题
// 用事件循环机制分析
console.log('script start')
async function async1() {
    await async2()
    // 浏览器给await开小灶，虽然是异步代码，但是会被当成同步，立即执行后面的逻辑
    //但是log依然会被推入微任务队列
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()
setTimeout(function () {
    console.log('setTimeout')
}, 0)
new Promise(resolve => {
    console.log('Promise')
    resolve()
})
    .then(function () {
        console.log('promise1')
    })
    .then(function () {
        console.log('promise2')
    })
console.log('script end')

// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout