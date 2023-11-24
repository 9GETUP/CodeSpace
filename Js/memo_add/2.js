// 一线公司水准
// 斐波那契
const memoized = require('./memo.js')
console.log(memoized,'/////?')
var count = 0 
var fibonacci = function(n) {
    count ++
    return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2);
}
//递归方法太过繁琐，可以用备忘录模式
const memoizedFibonacci = memoized(fibonacci)

console.time("fibonacci")
memoizedFibonacci(20)
console.log(count);
console.timeEnd("fibonacci")