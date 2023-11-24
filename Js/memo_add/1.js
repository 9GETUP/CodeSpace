//大厂面试题

// 永远不要相信用户的输入
function add(a,b){
    //  。。。代表参数？
    if (arguments.length != 2){
        // 抛出错误
        throw new Error('参数错误')
    }
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('请传入整数')
    }
    return a + b;
}
// js 不严格 编译阶段
//捕获错误
// console.log('111')

// try{
//     console.log(add(1,2))
// }catch(err){
//     console.log(err)
// }

// 上述代码能否优化一下？ 闭包

function memoize(fn){
    if (typeof fn != 'function') {
        throw new Error('请传入函数')
    }
    var cache = {} //key:value O(1) 空间换时间  cache：缓存
    return  function() {
        // 唯一性 21,2  21,2  22,1
        // 因为arguments没有 call方法，
        var key = arguments.length + Array.prototype.join.call(arguments,",")
        console.log(key);
        if (key in cache){
            return cache[key]
        }else {
            // apply 
            return cache[key] = fn.apply(this,arguments)
        }
    }
}
// 记忆函数 记忆功能
const memoizedAdd = memoize(add);
memoizedAdd(1,2)
memoizedAdd(1,2)