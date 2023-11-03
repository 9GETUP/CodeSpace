// function Car(owner,color){
//     this.name=BMW
//     this.lang=4900
//     this.height=1400
//     this.owner=owner
//     this.color=color
// }

// var car = new Car('浪哥','red')
// var car2 = new Car('但总','black')

//上述代码可以优化吗？会多执行几次234行代码

Car.prototype = {
    name:'BMW',
    lang:4900,
    height:1400
}

function Car(owner,color){
    // this.name=BMW
    // this.lang=4900
    // this.height=1400
    this.owner=owner
    this.color=color
}

var car = new Car('浪哥','red')
var car2 = new Car('但总','black')
console.log(car.name);
