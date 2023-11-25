# map + parseInt 经典题

- 看mdn文档
    map 和 parseInt 
    map 支持一个callback（每个元素都遍历）
        返回值是一个新数组
            [当前访问的元素(item)，当前访问元素的下标(index)，调用map的数组本身(array)]
    parseInt 的参数就是当前的callback，但是它只能传两个参数，item 和 ?radix(进制，默认为10)
    radix 为0 则无效，按10进制运算 1
    radix 为1进制 item 为2   NaN
    radix 为2进制 item 为3   NaN