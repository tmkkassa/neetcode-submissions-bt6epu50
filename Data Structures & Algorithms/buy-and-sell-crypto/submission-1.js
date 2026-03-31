class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
        r = 1,
        profit = 0,
        currentProfit = 0;

        while(r < prices.length){
           if(prices[l] < prices[r]){
                currentProfit = prices[r] - prices[l];
                profit = Math.max(profit,currentProfit);
           } else {
                l = r
           }

           r++
        }

        return profit;
    }
}
