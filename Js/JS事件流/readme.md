# JS事件流（面试题：事件触发过程是什么样的）
1. 在window上往事件触发处传播（捕获过程），遇到注册的 捕获 事件会触发
2. 到达事件触发处
3. 从事件触发处往window上传播（冒泡过程），遇到注册的 冒泡 事件会触发

- js事件默认都在 冒泡 的过程中触发
- event.stopPropagation() || stopImmediatePropagation（） 都能阻止默认事件传播
    但是stopImmediatePropagation（）有个额外功能：阻止同一DOM绑定多个 相同 事件

# 事件委托
借助冒泡机制，将原本要添加在多个子容器上的事件，添加到父容器上
