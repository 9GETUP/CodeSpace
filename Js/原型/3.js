//对原型的使用
//第一种：
Car.prototype.name = 'BMW'
Car.prototype.lang = 4900
Car.prototype.height = 1400
//第二种：自己创建一个
Car.prototype = {
    name:'BMW',
    lang:4900,
    height:1400
}

function Car(owner,color){
    this.owner=owner
    this.color=color
}

var car = new Car('浪哥','red')
var car2 = new Car('但总','black')
//实例对象共用一个祖先，无法更改
car.name='红旗'
//修改属性
Car.prototype.name='红旗'
//删除
delete Car.prototype.name
//增加属性

console.log(car.name);
console.log(car2.name);