class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       if(s.length != t.length) return  false;
         let firstString=s.split("").sort();
         let secoundString=t.split("").sort();
         for(let i=0;i<firstString.length;i++)
         {
           if(firstString[i] !=secoundString[i]) return false;
         }
         return true;
    }
}
