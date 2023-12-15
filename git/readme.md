- git init 项目初始化带有本地仓库的项目
    - git-learn 工作区
    - .git  隐藏文件夹 代码仓库

- 先add 再commit
    为什么要分成几步？
    带入业务场景
    网易上班 请写一个 vue+ langchain 聊天功能
    1.py
    2.vue 界面
    两个文件 
    add 进入暂存区，不要git add .
    git add 1.py
    git add 2.vue（多次add没问题）
    git commit -m ''（老板要看的）
    一上午 会提交三次左右
- 当我们在写代码时，有可能会改到别人的代码，摸了个鱼 忘了
    git status 当前仓库状态
    对比修改 ？
    看修改前是什么状态, 在add 之前， 再次确认你改了哪些？
    git diff