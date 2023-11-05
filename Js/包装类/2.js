//对象中key的访问
//对象中的 . 或 中括号的调用
let obj = {
    name:'丁总' ,
    age : 18
}
console.log(obj.name)
console.log(obj['name'])

//在对象中增加属性
//直接添加就可以
// obj.girlFriend = '翠花'
// console.log(obj);


//对象的两种访问方式：. 或 []
//区别：
//eg:现在我要在obj中新增一个key：girlFriend，且值为小红
//第一种 ：用 .
let girl = 'girlFriend'
// obj.girl='小红'

//第二种 ：用 []
 obj[girl]='小红'
console.log(obj);

//结论：在对象的key的新增中：
// . 就是添加.后面的变量作为key，中括号：打引号时添加括号中变量为key，不打引号时添加括号中变量值为key

// 
// obj.girl='girlFriend'
// //第一种 key为girl

// let girl = '小红'

// //第二种 key 为girlFriend
// obj[girl] = 'girlFriend'

//删除属性： delete语句
 delete obj.girlFriend


