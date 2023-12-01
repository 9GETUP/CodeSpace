# 基本数据类型的转换
1. 转布尔值
2. 转数字

- NaN 是一个类型为num的值，表示不可表示

3. 转字符串
4. 转对象

# 对象转原始值
1. 转数字
    - toNumber方法
        空字符串为0，不包含数字的字符串为NaN
    - 调用valueOf方法 
        - 专门用于转换包装类

2. 转字符串
    - 转字符串调用的 就是Object.prototype.toString()方法
        - 对象转字符串： {}.toString() 返回由"[object" 和 class 和 "]" 组成的字符串
        - 数组转字符串： [].toString() 返回由数组内部元素以逗号拼接的字符串
        - 其他 ：xx.toString() 直接返回字符串字面量


# ToPrimitive方法（使用于引用类型）

- 转为Number
# toNumber的转换原理
ToPrimitive(obj , Number) ===> Number({}) 
# 这时ToPrimitive内部操作流程
1. 如果obj是基本类型，直接返回
2. 否则，调用 valueOf 方法，如果得到原始值则返回
3. 否则，调用toString方法， 如果得到原始值，则返回
4. 否则，报错

- 转为字符串  
# toString的转换原理
ToPrimitive(obj , String) ===> String({})
# 这时ToPrimitive内部操作流程
1. 如果obj是基本类型，直接返回
2. 否则，调用 toString方法，如果得到原始值，则返回
3. 否则，调用 valueOf 方法，如果得到原始值则返回
4. 否则，报错

- 转为布尔值
注： 所有对象转布尔值都是true


# 一元运算符： +号


# 二元运算符： +号

lprim + rprim == ToPrimitive(v1) + ToPrimitive(v2)
1. 当 + 号两边有一个是字符串，则按字符串进行拼接,不会转为number
2. 否则，转到 number 进行计算

# 浏览器上{}+{} 为NaN，因为会把上式看成 +{}，所以外部要加括号