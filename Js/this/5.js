// 常见的错误型代码
function foo(){
    var a =1
    setTimeout(function() {
        console.log(this.a); //this指向全局,因为setTimeout也是函数
    },1000)//定时器函数:函数 + 时间（ms）
}
foo()
//undefined

function foo(){
    var a =1
    var bar = function() {
        console.log(this.a); //this指向全局,因为setTimeout也是函数
    }
    baz = 
    setTimeout(1000)//定时器函数:函数 + 时间（ms）
}
foo()