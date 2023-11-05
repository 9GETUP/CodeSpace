//构造函数专题
// function Person (name,age,sex) {
//     this.name= name
//     this.age =age
//     this.sex =sex

//     // let this ={
//     //     name:name ,
//     //     age :age ,
//     //     sex :sex 
//     // }
//     // return this
// }

// //new相当于在原函数生成一个this对象，且运行函数中的代码语句完成赋值,最后return
// let p =  new Person('海军',18,'boy')

// console.log(p);

//模拟一个构造函数
function Person(name,age){
    var that = {}
    that.name = name
    that.age=age
    return that
}

let p1 =Person('程总',18)
let p2 =Person ('梓帆',19)
console.log(p1);

console.log(p2);