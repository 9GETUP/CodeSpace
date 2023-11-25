//面试题

// map遍历数组， callback 返回值 新的数组
// map传出的 (1 , 0 , [1,2,3])
// parseInt （2，1，[1,2,3]）
// parseInt （1，0，[1,2,3]）
//parseInt （3，2，[1,2,3]）
console.log([1,2,3].map(parseInt));