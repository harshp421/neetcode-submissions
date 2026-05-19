class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length != t.length) return  false;
       let firstObject={}
        for(let i=0;i<s.length;i++)
        {
            firstObject[s[i]]=(firstObject[s[i]] || 0)+1
        }
        for(let i=0;i<t.length;i++)
        {
            firstObject[t[i]]=(firstObject[t[i]])-1;
        }
         for(let item of Object.values(firstObject))
         {
            if(item !== 0) return false
         }
         return true
    }
}
