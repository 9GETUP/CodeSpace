// js的单线程
let a = 1
console.log(a);

// 异步代码：单线程
// 异步指 v8能够决定耗时所以更后执行
setTimeout(() => {
    console.log(a);
},1000)

//v8决定不了，由cpu决定耗不耗时
for (let i = 0 ;i<10000;i++){ //假设耗时1s
}
//所以setTimeout要在2s时才执行