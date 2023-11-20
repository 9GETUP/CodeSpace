// 深拷贝

let obj ={
    name: '阿伟',
    age : 18,
    like :{
        type: 'coding'
    },
    a : undefined,
    b : null,
    c : function(){},
    d : { n:100 },
    e : Symbol('hello')
}

//循环引用
obj.c = obj.d
obj.d.m = obj.c
//console.log(obj);

//1. 用json方法
//一个属性把字符串变对象，对象变字符串
//console.log(JSON.stringify(obj)); //对象变字符串


let newObj = JSON.parse(JSON.stringify(obj)) //得到深拷贝后的对象

//obj.like.type='eating'
console.log(newObj);
// 缺点：拷贝不了undefined，函数，Symbol，bigint类型
