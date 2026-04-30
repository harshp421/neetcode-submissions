class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let result=0;
       let minbuy=prices[0];
       for(let sell of prices)
       {
         result= Math.max(result,sell-minbuy)
         minbuy=Math.min(minbuy,sell)
       }
       return result
    }

}
