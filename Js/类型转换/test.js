// 争议例子(面试常考)
// []和 ![] 者相等

[] == ![]
// [] == !true
// [] == false
// [] == 0
//true

// 为什么？
//由优先级可知，先看 ![]，先把[]转为布尔类型，为true
//所以 ![] 为false，而 false == []为true，所以原式为true