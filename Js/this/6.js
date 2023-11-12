// 箭头函数专题
//以前函数只能写一个function

//函数声明
// function foo (){
// }
// //函数表达式
// var bar = function() {}

// //es6 新增：箭头函数,省略了function
// var bar = () => {
// }

//两者区别
var a=1
//输出1
// var bar = function (){
//     console.log(this.a);
// }
// bar()
//
// var baz = () => {
//     console.log(this.a);//箭头函数没有this属性，所以this相当于写在函数外
// }
// baz()

//对象没有作用域
var obj = {
    name: 'TOM',
    show: function(){
        //console.log(this); 

        // var bar = function() {
        //     console.log(this.name);
        // }
        var bar = () => {
            console.log(this.name);//因为箭头函数没有this属性
            //所以相当于this写在show里面
        }
        bar()//默认绑定
    }
}
obj.show()