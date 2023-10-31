// console.log('hello wr');
/**
 * 要有好的习惯：写良好的注释
 * @func 返回固定格式的电话号码 (123) 456-7890
 * @params array[1,2,3,4,5,6,7,8,9,0]
 * @return (123) 456-7890
 * @author jser
 */
//es5
// function phoneNumber(numbers){
//     return '('+numbers[0]+numbers[1]+numbers[2]
//     +')'+' '+numbers[3]+numbers[4]+numbers[5]
//     +'-'+numbers[6]+numbers[7]+numbers[8]+numbers[9]
// }
// phoneNumber([1,2,3,4,5,6,7,8,9,0]);
// console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));

//es6 箭头函数
//phoneNumber = (numbers) => `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`

let phoneNumber;//弱类型 undefined  null 值为空 
//函数表达式
//简版函数：箭头函数 次方法比es5少敲一个function
 phoneNumber=(numbers) =>
     '('+numbers[0]+numbers[1]+numbers[2]
    +')'+' '+numbers[3]+numbers[4]+numbers[5]
    +'-'+numbers[6]+numbers[7]+numbers[8]+numbers[9]

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));