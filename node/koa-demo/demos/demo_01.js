// koa 语法
//引入
const Koa = require('koa')

const app = new Koa()

app.listen(3000, () =>{
    console.log('项目运行在3000端口');
})