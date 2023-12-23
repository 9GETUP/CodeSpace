function myFunction(v, w, x, y, z) {
    console.log(v, w, x, y, z);
}
var args = {
    a:1,
    b:2
}
// myFunction(-1, ...args, 2, ...[3]);
let { a }  = args 
console.log(a)