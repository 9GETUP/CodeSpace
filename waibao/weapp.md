# 小程序外包

- 当下最流行的是线上线下结合程序。
    APP：外卖App 移动时代的红利 手机的普及，定位GPS 
    Location Base Service： LBS应用
    例如 ：陌陌app
- 小程序：中小商家， 扫码拿小程序 小程序让线下实体店立马线上化、软件化 
    O2O应用：Offline To Online 轻量化， 不用安装

# 小程序开发：汽车4S店
- 商业级别 的中小型外包程序需要什么样的开发能力？
- 开发约定、架构思路（重要） ：简单
    - pages 概念
        - 小程序由页面构成（几个页面几个page）
            - wxml html html也是 xml 的一种：
            写结构 weixinxml 没有div，只有view
            http：协议标准
            JSON：对象字面量，前后端沟通的数据交换标准。
            {
                name："但总"，
                age：18
            }
            xml是早于json的数据交换标准
            <reviewer>
                <name>但总</name>
                <age>18</age>
            </reviewer>
            目前多用JSON
            - wxss css
            - js 交互  数据管理  Ajax（网络请求，向后端发送）
            - JSON 配置文件
            - app.json
                app开头的都是全局的，大于page，所有的页面共享的
        - 切图崽
    - 书写下一个页面：先新建，再更改一下app.json文件中pages中文件的顺序即可

- 数据驱动界面思想 MVVM
    - 可以在js里配置一个data区域 声明一个info
        书写格式：
        引用格式：{{ 数据绑定 占位符：info.name }}
        wxml 静态页面 模板
        data 模板数据
        页面 = 模板 + 数据
        数据改变，模板会重新编译，显示新的页面

- 优质项目开发思路
    - wxml有着html不具备的组件：image，swiper可以快速实现幻灯片
        使用新属性的方法：看文档
    - css开发，将我们样式按照原子功能，封装，有利于未来项目复用
        - 当我们发现在重复写样式的时候
            white hero section 按原子拆分成不同功能
            一行或几行css 形成一个功能模块
            .sub-header {副标题
                font-size：；
                line-height：；
                font-family：；
            }
        - 慢慢积累经验