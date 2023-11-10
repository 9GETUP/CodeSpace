# =操作符
1. === 值和数据类型都要一样
2. == 值相同就行

# 三种数据类型判断方法
# typeof
- 可以准确判断 除null之外 的原始类型（七种）
- 可以判断function

# instanceof
- 只能判断引用类型
- 且是通过原型链查找来判断（不是非常严谨）
- 只能往小了查，往大了查有错误的可能

# object.prototype.toString.call(xxx)
# 注意：一定要加一个call

1. 
2. 
3. 将 O 作为 ToObject（this） 的执行结果
4. 让 class 成为 O 内部属性 [[Class]] 的值
5. 返回由 "[object" 和 class 和 "]" 三部分组成的字符串

# 数组专用 Array.isArray(arr)

