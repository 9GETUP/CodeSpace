//对象中的 . 或 中括号的调用
let obj = {
    name:'丁总' ,
    age : 18
}
console.log(obj.name)
console.log(obj['name'])
// 
obj.girl='girlFriend'
//第一种 key为girl

let girl = '小红'

//第二种 key 为girlFriend
obj[girl] = 'girlFriend'

//删除属性： delete语句
delete obj.girlFriend


