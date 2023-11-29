- 点击登录按钮
- 要向百度服务器 发送请求
- 百度服务器的 后端代码 接收，并处理
- 然后把服务器上的 数据库中的数据 读取出来
- 后端拿到后再通过 网络请求 返回用户的浏览器
- 最后前端把 数据展示 在浏览器上

- 那么怎么发送请求？
    前端发送请求 在js中称为 ajax

# ajax (全称：async（异步） javascript and xml)


# XMLHttpRequest
- ajax状态：
0 -- xhr刚刚创建，请求还没发送
1 -- open准备完成
2 -- 请求已经发送，客户端接收到了响应头
3 -- 接收到服务端返回的响应头
4 -- 解析完成

- http status （http状态码）
2xxx
3xxx
4xxx
5xxx

AJAX历史进程：index：1-3