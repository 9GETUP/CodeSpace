# 企业级开发
+
- 代码的健壮性
    校验一下参数
    考虑 进程的安全性
    js 是单线程语言
    简单 + event loop  太脆了  
    throw + try catch()，上文报错，下文依旧执行

- cathe 自由变量 key 设置
    1 + 12      11 + 2  '1,12' '11,2'
    - arguments 伪数组 要支持es6，兼容性不太好
    [...arguments].join('')
    Array.from(arguments)
    Object.prototype.toString
    Array.prototype.join.call(arguments) 借给
    [1,2,3].join(',') // this 指向数组

- fibonacci 爬楼梯问题
    # 递归的通用性问题
        不停的入栈
        自顶向下解决问题  CEO思想  递归的不停的入栈
    - 记忆函数 备忘录 减少重复的计算 递归的优化

    # 动态规划
    - 如果自低向上解决问题?  不要入栈
        f(1) = 1   f(2) = 1  f(3) = f(1) + f(2)
        f(n) = f(n-1) + f(n-2)

- 使用递归， 快速的， 基于自顶向下的思想解决问题
    - 程序栈的问题：栈溢出

- 可以先使用memoize 备忘录模式，优化
    - 空间 { }  key：value
- 但是都可以自底向上解决， 每一步都有一个公式 f(n) = f(n-1)+f(n-2)
    动态规划 考点中的 dp
    for 循环 （自底向上）88%
- 优化到99.9% 空间上再优化一下
    不需要数组，我们只要最后的结果
    es6的解构运算符
    [a,b] = [b,a+b]
