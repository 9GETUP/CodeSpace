console.log('start');

//装入宏任务队列
setTimeout(() => {
  console.log('setTimeout');
  setTimeout(() => {
    console.log('inner');
  })
  console.log('end');
}, 1000) 

new Promise((resolve, reject) => {
  console.log('Promise');
  resolve()
})
.then(() => {
  console.log('then1');
})
.then(() => {
    console.log('then2');
  })
// 三次循环