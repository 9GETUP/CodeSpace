// instanceof的原理

function instanceOF(L,R){
    let left = L.__proto__
    let right = R.prototype

    while(left!==null){
        if(left === right){
            return true
        }
        left = left.__proto__
    }

    return false
}
let obj = {}
let time = new Date()
instanceOF([],Array) //true
instanceOF([],Object) //true
console.log(instanceOF([],Array)); //true
console.log(instanceOF([],Object)); //true
console.log(instanceOF(obj,Object)); //true
console.log(instanceOF(function(){},Function)); //true
console.log(instanceOF(time,Date)); //true