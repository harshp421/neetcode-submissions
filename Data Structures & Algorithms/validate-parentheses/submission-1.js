class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // stack mean last in first out 
    isValid(s) {
        let parenthesesMap={')':'(','}':'{',']':'['}
        if(s.length === 0) return false;
        let parenthesesStack=[]
        for(let i=0;i<s.length;i++)
        {
           if('[{('.includes(s[i]))
           {
            parenthesesStack.push(s[i])
           }
           else
           {
            if(parenthesesStack.pop() != parenthesesMap[s[i]]) return false;
           }

        }
       
        return parenthesesStack.length === 0 ?true:false
    }
}
