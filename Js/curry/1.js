function add(a ,b ,c){
    return a+b+c
}

//函数的柯里化
function curry(fn){
    //收集参数，用闭包 arr数组放参数
    //到位了,就运行 arr.length == fn.length  fn(...arr)
    //否则返回 收集参数的函数
    // ...可以是展开运算符，
    //这里是rest 运算符 , 闭包空间，自由变量
    // args是自由变量
    let judge = (...args) => { //把展开的数整合为数组，args是数组
        if(args.length == fn.length)
            return fn(...args) //推出条件
        // 返回函数，继续收集参数
        return (...arg) => judge(...args, ...arg) //展开数组
    }
    return judge
}

// 有时候不会一次性给到，符合前端的交互
// 所以要掌握 js curry 柯里化
// 每次接收一个参数
// xxx.length拿到函数形参的数量
console.log(add.length);
// add(1)(2)(3)
const curryAdd = curry(add);
curryAdd(1)(2)(3)