// 写入文件

const fs = require('fs')

// fs.writeFileSync('./target.md','举头望明月')

// 传输avatar图片
const img = fs.readFileSync('./avatar.png');
fs.writeFileSync('./pic/avatar2.png',img)

// console.log(img)