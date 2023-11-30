// fs 读取文件
// promise + then / async + await 方案
const fs = require('fs');

// function readFileByPromise (){
//     return new Promise ((resolve,reject) =>{
//         fs.readFile(add,'utf8',((err,data) =>{
//             if (err){
//                 console.log(err);
//                 return;
//             }
//             //console.log(data.toString()); //输出：Buffer 二进制流，十六进制
//             console.log(data);}))
//         return resolve
//     })
// }
// readFileByPromise ()
// .then ((resolve,reject)=>{
//     return 
// })

function readFileByPromise(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}
(async function (){
    try{
        const f1 = await readFileByPromise('./a.txt')
        const f2 = await readFileByPromise('./b.txt')
        const f3 = await readFileByPromise('./c.txt')
        console.log(f1,f2,f3);
        }
    catch(e){
    }
}) 
