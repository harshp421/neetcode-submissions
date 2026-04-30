class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sumMap=new Map();
        for(let i=0;i<nums.length;i++)
        {
            let result=target-nums[i]; // 7-3 =4, 7-4=3
            if(sumMap.has(result))
            {
               
                return [sumMap.get(result),i]
            }
            sumMap.set(nums[i],i)
        }
    }
}
