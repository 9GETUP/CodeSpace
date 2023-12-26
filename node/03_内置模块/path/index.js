// path模块
// 模块化语句，require引入
const path = require('path')

//console.log(path.join('a','b','c')); //拼接路径
//console.log(path.join(process.cwd(),'model','index')); 

//console.log(path.resolve('a','b','c')); // 
//console.log(path.dirname('a/b/c')) // a/b 返回路径的目录名

//console.log(path.basename('a/b/c.js')); 
//console.log(path.basename(__filename,'.js')); //__filename是文件的绝对路径
//console.log(path.extname(__filename)) //extname返回扩展名

//console.log(path.normalize('/a//b/c.js')); //格式化路径,修改错误
    //console.log(path.normalize(__filename)); //但是无法处理反斜杠问题

//console.log(path.parse(__filename)) //解析路径
console.log('foo/bar/baz'.split('/'))
console.log('foo\\bar\\baz'.split(path.sep))