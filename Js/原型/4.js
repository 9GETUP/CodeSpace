function Bus () {

}
Car.prototype = {
    constructor : Bus
}

function Car() {

}

var car =new Car()

// constructor:制造师，记录对象是由谁创建的
//.constructor属性是实例函数一定会隐式继承的
// 作用：查看新对象由谁创建
// 依旧可以通过原型修改
console.log(car.constructor);