function cool() { 
    this.value = 1;
    setTimeout( () => { 
    // 箭头函数继承了父作用域中的 this 
    this.value++; 
    console.log(this.value); // 输出 2
    }, 1000); 
    }
    cool() 