// 分清楚函数的调用和引用

// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a:2,
//     foo:foo //函数的引用（拥有）
// }
// obj.foo() //对象对函数的调用
// //结果为2

// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a:2,
//     foo:foo() //函数的调用
// }
// obj.foo 
//结果为undefined

//特例
function foo() {
    console.log(this.a);
}
var obj = {
    a:2,
    foo:foo //函数的引用
}
var obj2 = {
    a:3,
    obj:obj
}
obj2.obj.foo()
//结果为 2，foo被 obj拥有且调用