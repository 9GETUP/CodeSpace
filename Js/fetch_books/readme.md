# 全栈快速一览

- 什么是全栈
    - 前端 http 服务 将html/css/js 请求 渲染
        5500端口 启动了一个web服务
    - 后端 接口服务 
        主要是在 某个url上 返回json数据
        3000 端口
-   前后端分离
        json-server 快速的把后端数据server启动了
        - 输入相应指令
        - npm init -y 初始化 后端
        - npm i json-server  给个json文件就可以启动数据服务
            db.json 可以快速的伪造数据
        - package.json
            script
            "dev" : "json-server -w db.json" 自主监听
        
# 大厂面试必考（前后端规则）
- restful api  
    json-server遵守这个规则
    一切皆资源 url设计规则
    资源展示的方式， restful api 遵守的
- 规则：
    哪些状态码？
    GET（获取，查） http://localhost:3000/posts
    GET http://localhost:3000/posts/:id

    CRUD （creat 添加）:
    POST（新增） http://localhost:3000/posts
    DELETE（删除） http://localhost:3000/posts/3
    patch（修改）http://localhost:3000/posts/1

    为第一篇文章添加一条评论
    - 选择相应的请求方法 + 相关的资源路径 + 按照格式发送请求体
    - 设计url + 选择方法

    GET /posts/:pid/comments/:cid