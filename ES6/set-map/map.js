//传统对象的key只能为字符串
// let obj = {
//     a:1,
//     b:2
// }
// var arr =[1,2]
// obj[arr] = 3 //会将传入的数组转为字符串,所以还是以字符串类型作为key
// console.log(obj);

//那么如何解决呢？
//那么新增了map,Map类型的对象的key可以为任意数据结构
let map=new Map([
    ['name','老王']
]);
//set方法：传入值
   map.set({a:1},'hello')
// console.log(map);

//可以通过map.get访问值
//console.log(map.get({a:1}));//undefined，不能直接访问，因为地址不一样
//所以要多用一个对象
// let obj={
// }
// map.set(obj,'hello')
// console.log(map.get(obj));

//forEach
// map.forEach((value,key,map)=>{
//     console.log(value,key,map);
// })
console.log(...map);//可以被解构