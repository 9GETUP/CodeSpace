// 后端启动一个一直运行的服务 提供接口给前端请求
// 想办法提供多个不同的接口

// 原生node
const http = require('http');

// req,res 前者为前端的请求，后者为后端的响应
const serve = http.createServer((req,res) => {
    // 正常要考虑前端有多个页面 提供不同的接口地址
    if(req.url.startsWith('/home')){
        res.end('Welcome to the home page') //end：负责向前端响应内容
    }else if(req.url.startsWith('/detail')){
        res.end('Welcome to the detail page')
    }else{
        res.end('Not Found')
    }
})

serve.listen(3000, () =>{ //监听对应的域名 如3000端口
    console.log('serve listening on port 3000')
})