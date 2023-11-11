let arr = ['a','b','c']

// for (var i =0;i<arr.length;i++){

// }老式遍历
//新式遍历 for of,只能循环 具有迭代器 的数据结构
// for (let item of arr){  
//     console.log(item);
// }

//对象没有迭代器,字符串有
let obj={
    a:1,
    b:2,
    c:3
}
let a='hello'
for(let item of a){
    console.log(item);
}