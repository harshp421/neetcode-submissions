class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      let a= s.split("").sort();
      let b= t.split("").sort();
      if(a.length != b.length)return false;
       for(let i=0;i<a.length;i++)
       {
          if(a[i] != b[i])
          {
            return false;
          }
       }
       return true;
    }
}
