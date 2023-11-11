//解构方法，用三个变量一 一对应数组的值

//第一种
// let [x,y,z] = ['a','b','c','d','e']

// console.log(x,y,z);

//第二种
// let arr =[1,2,3]
// console.log(...arr);

//添加一个新元素进入数组
// let arr =[1,2,3]
// let newArr =[0]
// console.log(...newArr,...arr);

//第三种：解构,简写,类型与对象，但代码减少
let {name,age} = {name:'浪哥',age:19}//一一对应
console.log(name,age);
//还可以放默认值，如let{name=‘abc’,age}


