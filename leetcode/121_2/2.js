// 简单说就是 ：低买高卖 
// 可以用动态规划
const maxProfit = function (prices){
    // 自顶向下，递归
    //当天卖：dp[i] = Math.max(price - min, dp[i-1])
    // 自下而上 迭代 dp[i]每一个都可以相信 ， 最优子结构
    // dp[0] = 0
    const dp = new Array(prices.length).fill(0)
    let min = prices[0];
    for(let i =1; i < prices.length; i++){
        min = Math.min(prices[i] , min);
        dp[i] = Math.max(dp[i-1], prices[i] - min)
    }
    return dp[prices.length-1]
}
console.log(maxProfit([7,1,5,3,6,4])); // prices = [7,1,5,3,6,4]