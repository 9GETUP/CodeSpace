// 读取文件
// node 内置的 模块化系统
// 引入fs模块，类似于import
// commonJS

const fs = require('fs');

// 1. 硬盘到内存（IO）
// 2. 文件有大小
// 3. 异步执行代码，怎么解决？
// 4. 下述是 回调地狱，无穷嵌套
// 用promise 详看2.js

// 第一个是一个错误对象，解决安全性问题
// 第二个参数才ss是data
fs.readFile('./a.txt','utf8',((err,data) =>{
    // 后端 稳定性第一
    if (err){
        console.log(err);
        return;
    }
    //console.log(data.toString()); //输出：Buffer 二进制流，十六进制
    console.log(data);
    // 文件以二进制存储,用toString方法转化格式

    fs.readFile('./b.txt','utf8',((err,data2) =>{
        if (err){
            console.log(err);
            return;
        }
        console.log(data2);
        fs.readFile('./c.txt','utf8',((err,data3) =>{
            if (err){
                console.log(err);
                return;
            }
            console.log(data3);
            
        }))
    }))
}))