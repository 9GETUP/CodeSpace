var a =2 
function add(b,c){
     
    return b+c
}
function addAll(b,c){
    var d=10
    result =add(b,c)
    return a + result + d
}
// add是一个执行上下文对象
addAll(3,6)                                                                                                                   
