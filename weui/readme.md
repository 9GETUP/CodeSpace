# 企业级界面开发规则

- html css js 功能分离(文件分离)
- css 架构（面试重点）
    - reset(重置).css
        去除浏览器间的样式区别，无差别页面显示 （使用于各种浏览器） 
        box-sizing: 盒子大小的计算方式；
        浏览器有好多家（edge,chrome 内核不同）
        文档流（元素在页面上显示的流体性布局。网页的布局的本质，
            如body从上到下块级元素，行的元素从左到右->平面的网页） body开始
        盒子在页面上占了多少呢？
        2种盒模型 ：
            1.（默认）标准盒子模型具体大小 = content（如height、width属性） +  padding + border + margin ；
            公摊
            2.（原content的大小）(box-sizing: border-box)IE盒模型 = content（自动缩放）+ padding + border + margin  ； （本质就是对模型的缩放）
    - base.css 通用样式
- css命名套路：

    BEM css 命名规范 
        Block weui-cell
        Element weui-cell__bd 两个下划线
        Modifier 状态  weui-cell_access 一个下划线
    -page
        __hd __bd __ft
    - btn panel cell
    - 框架组件 BEM
- css + 兄弟选择器
- google 图片格式
    1.base64 图片 小一点简单的  在css文件里使用 能减少性能的浪费
    2.jpg|png|jpeg|wtt|webp     比较大 请求的并发
