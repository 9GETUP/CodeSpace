//在js中，垃圾回收机制是自动的，上述普通对象在全局中没有再被引用时就会被清理掉内存
let obj ={name:'德玛西亚'}
//console.log(obj); //普通引用

let ws = new WeakSet()
ws.add(obj)//weakset对obj对象的引用 不会 被垃圾回收机制发现
//所以obj在第一行就被销毁
//obj = null //标记为可以回收对象
console.log(ws);//ws里面有值，因为谷歌的垃圾回收机制什么时候来打扫无法控制


