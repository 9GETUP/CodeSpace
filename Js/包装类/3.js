 // 对象的创建

 //第一种
//var obj = {}  // 对象字面量|对象直接量

//第二种 使用js内置函数，首字母大写，称为构造函数，专门用来生成对象的
//其与普通函数无区别，但是要大写，约定俗称的规定
//一般不会使用，特殊情况下使用
//let obj=new Object()

//第三种 ：自定义内置函数
//构造函数就像工厂，可以批量
function Car(color) {
    //this 也是个对象
    this.name = 'BMW' 
    this.height='1400'
    this.lang = '4900'
    this.weight =1000
    this.color=color
}
//普通函数调用要传出值要有return
let car1 =new Car('pink') //new -> 实例对象
let car2 =new Car('green')

console.log(car1);
console.log(car2);

//第四种 ： Object.create()