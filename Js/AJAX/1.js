let a='{"name" :1}'
console.log(JSON.parse(a));

// var jsonStr = '{"name":"John","age":30,"city":"New York"}';

 let obj = JSON.parse(jsonStr);
let data = {
    a :1,
    b:2,
    c:3
}
let count = 0
obj.data.forEach(a =>{
    console.log(a)
}
);
