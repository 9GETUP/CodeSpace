//监听用户敲击enter键
var input = document.getElementById('list-input')
var ul = document.getElementById('list')
input.onkeyup = function (e) {
    if (e.keyCode === 13) {
        //读取到input中的值
        console.log(input.value);
        var todoList = '<li>' + '< input type = "checkbox" >' + ' <span>${input.value}</span> ' + '</li> '

        // 将li添加到ul中
        ul.insertAdjacentHTML('afterbegin', todoList)

    }
}



//生成li结构

//将input中的值添加到li中

//将li添加到ul中