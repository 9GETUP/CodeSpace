var obj={
    a: 1
    
}
function foo(x,y) {
    console.log(this.a,x+y);
}
//foo.call(obj) //隐式绑定

// call的原理相当于

Function.prototype.myCall=function(context){
    if(typeof this!= 'function'){
    }
    //类数组，代指所有的实参
    let args = Array.from(arguments).slice(1) //Array.from（）:将类数组转变为数组
    context.fn=this
    let res= context.fn(...args) //触发this隐式绑定规则, ...args:解构args数组
    delete context.fn
    return res //要写一个返回值
}

foo.myCall(obj,1,2);
