class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
   
     let resultMap=new Map();
      for(let i=0;i<nums.length;i++)
        {
         let result=target-nums[i];
         if(resultMap.has(result)){
            return [resultMap.get(result),i]
         }
         resultMap.set(nums[i],i) 
        }
    }
}
