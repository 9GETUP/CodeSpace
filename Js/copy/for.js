//for循环

//let arr = ['a','b','c','d','e']
// //for of循环 （专门为有迭代器的）
//  for (let item of arr) {
//     console.log(item);
//  }

let obj = {
    name: '阿伟',
    age : 18,
    like :{
        type: 'coding'
    }
}
let data = Object.create(obj)
data.sex = 'boy'

//for in会打印对象显示和隐式原型的属性，但是一般只要遍历到显示上的属性
//key 本质是一个字符串
// 所以可以加一个if语句,hasOwnProperty用来判断属性是隐式具有还是显示具有
for(let key in data) {
    if(data.hasOwnProperty(key)) {
        console.log(key);
        console.log(obj[key]);
    }
}

// for in 循环 用来遍历对象,数组

// for (let key in arr){
//     console.log(key);
// }

// for of 不能遍历对象，又能遍历数组
// for (let item of obj) {
//     console.log(item);
// }