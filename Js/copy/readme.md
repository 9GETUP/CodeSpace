# 拷贝
通常只针对于引用类型
因为针对原始类型时毫无意义（都是深拷贝）


# 浅拷贝

概念：通过某些方法创建的一个和原对象一样的
     对象，原对象的修改会影响新对象。

- 常见的浅拷贝方法
1. Object.create(x)
2. Object.assign({},x)

- 数组上
3. concat
4. slice
5. 数组解构
6. arr.toReversed().reverse() 

# 深拷贝

- 常见的深拷贝方法：
JSON.parse(JSON.stringify(obj))

- 缺点：
1. 拷贝不了undefined，函数，Symbol，bigint
类型的数据
2. 无法处理循环引用