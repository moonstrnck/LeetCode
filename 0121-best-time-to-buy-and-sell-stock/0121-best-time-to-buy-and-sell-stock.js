/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice = 0;
    let profit = 0;
    
    for (let i = prices.length - 1; i >= 0; i--) {
        if (maxPrice < prices[i]) {
            maxPrice = prices[i];
        } 
        if (profit < maxPrice - prices[i]) {
            profit = maxPrice - prices[i];
        }
    }
    
    return profit;
};