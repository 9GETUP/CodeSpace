// fs:文件系统模块,用于操作文件或文件夹
//const fs = require('fs');

// 读取文件
// 同步
// const syncData = fs.readFileSync('./data.txt',{encoding:'utf8'}) //读取文件
// console.log(syncData)

//异步读取
// fs.readFile('./data.txt',{encoding:'utf8'},(err,res) =>{
// })

// fs.promises.readFile('./data.txt','utf-8').then(res => {
//     console.log(res)
// })

const fs = require('fs/promises')
fs.readFile('./data.txt',{encoding: 'utf-8'}).then(res => {
    console.log(res)
})