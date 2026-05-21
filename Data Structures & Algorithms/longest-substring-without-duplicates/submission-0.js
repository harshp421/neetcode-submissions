class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let strset=new Set();
        let left=0;
        let count=0;
        for(let i=0;i<s.length;i++)
        {
            while(strset.has(s[i]))
            {
              
               strset.delete(s[left])
                left++;
            }
            strset.add(s[i])
         count=Math.max(count,i-left+1)
        }
        return count;
    }
   
}
