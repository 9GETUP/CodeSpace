//类数组 set
// let arr = [1,1,2,3,3]
// let obj={
//     a:1,
//     b:1,
//     c:1
// }

//创建set对象
//传入的参数是数组
// let set  = new Set([1,1,2,3,3,4]) //{ 1, 2, 3, 4 },又像对象，又像数组
// // console.log(set);
// //读取值,不能按传统数组下标来访问
// console.log(set.values(0));

// //add添加,size表示长度
// set.add(5)
// console.log(set.size);

//数组去重,只能对放着原始值的数组生效
// var arr=[1,2,1,1,'1']
// function unique(arr){
//     return [...new Set(arr)]//类数组解构
// }

// var unique =(arr) => [...new Set(arr)]
// console.log(unique);

let set =new Set([1,1,2,2,3,4])
// set.delete(1)
// console.log(set);
// set.forEach((item,index,set)=>{
//     console.log(item,index,set);
// })
//判断元素的有无
// console.log(set.has(2));
// console.log(set);

//Iterator迭代器，所有数据结构只要拥有迭代器就能去遍历
//set具有迭代器,keys返回键，values返回值，entries两者都返回
console.log(set.keys()) // [Set Iterator] { 1, 2, 3, 4 }
for(let item of set.entries()){
    console.log(item)
}