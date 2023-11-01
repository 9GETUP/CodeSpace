// v8引擎运行代码时要调用栈

function foo() {
    console.log('hello');
    foo()
}
foo()