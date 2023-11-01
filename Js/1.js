//实现输出0到9的整数

// 第一种：常规解法
var arr = []
// for(let i=0; i<10;i++)
// {
//     arr[i]= function() {
//         console.log(i);
//     }
// }
// for (var j=0 ;j<arr.length;j++)
// {
//     arr[j]()
// }



//第二种
//使用 自执行函数
for(var i=0; i<10;i++)
{
    (function a(j){
        arr[i]=function(){
            console.log(j);
        }
    })(i)
}

// -----
