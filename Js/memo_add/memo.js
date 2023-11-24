// 记忆函数， 闭包 的高级功能
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
// commonjs 模块化方案
module.exports = memoize