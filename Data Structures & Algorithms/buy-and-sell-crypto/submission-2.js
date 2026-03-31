class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0,
        r = 1,
        maxProfit = 0;

        while(r < prices.length){
            let profit = prices[r]-prices[l];
            maxProfit = Math.max(maxProfit, profit);

            if( profit < 0){
                l = r;
            }

            r++;
        }

        return maxProfit;
    }
}
