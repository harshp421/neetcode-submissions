class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxvalue = 0;
        let left = 0;
        let right = heights.length-1;
        while (left < right) {
            let result= Math.min(heights[left],heights[right])*(right-left );
            console.log(result,"resule")
            if(result>maxvalue)maxvalue=result;
              if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxvalue
    }
}
