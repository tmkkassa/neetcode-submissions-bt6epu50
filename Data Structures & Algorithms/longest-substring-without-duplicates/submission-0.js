class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0,
        maxLength = 0,
        strSet = new Set();

        for(let r = 0; r < s.length; r++){
            while(strSet.has(s[r])){
                strSet.delete(s[l]);
                l++;
            }

            strSet.add(s[r]);
            maxLength = Math.max(maxLength,r-l+1);
        }

        return maxLength;
    }
}
