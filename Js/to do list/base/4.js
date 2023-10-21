var a = 'hello' //字符串
var b = 123.12 //数字 number
var c = true  //false 布尔类型 boolean
var d = undefined  //未定义的
var e = null       //空的，但能找到
//以上均为基本数据类型

//以下为对象，引用类型
var obj = { //引用类型 object
    name: '君君',
    age: 18
}

//数组
var arr = ['a', 'b', 'c', 'd']

//数组的相关操作
arr.push('e') //从数组的末尾推入一个元素
arr.unshift('w')//从数组的起始推入一个元素
arr.pop() //移除数组末尾元素
arr.shift() //移除数组起始元素