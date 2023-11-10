// Object.prototype.toString方法可以判断所有类型
console.log(
    Object.prototype.toString.call(function(){})
    );
//为什么要写一个call
//不加的话就输出'[object Object]'
//因为Object.prototype.toString不接收参数
//

// 用于判断条件时,由于都是输出字符串[object .....],可以考虑切割字符串，减少代码量
// 1.slice， 2.splice
//先封装一个方法,切割
let s ='hello'
function isType(s){
    return Object.prototype.toString.call(s).slice(8,-1)
}
if (isType(s)==='String'){

}