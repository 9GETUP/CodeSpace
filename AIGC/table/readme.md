- 顶级大厂需要看到了实习生github 页面？
- fork
    开源的力量
三个月目标：
    - 给一个开源repo贡献代码

- 思想切换
    前端 切到 后端
    前端：DOM BOM
    后端：I/O 数据库 network 服务器 
          api 文件系统 操作系统

- 管家
    指令交给他
    向 厨师 ， 花匠... 发号施令
    自动的把任务完成
                    ———— AutoGen
- UserProxyAgent
    initiateChat(
        assistant,
        message = ""
    )
    负责执行代码
- AssistantAgent
    llm_config user_proxy message -> openai 分析命令的意思
    助理 ，有自己编写代码的能力，交给user_proxy(管家)执行,并检查结果

- AutoGen 一堆Agent聊着聊着就把活给干了， 不需要人的干预，只需要授权