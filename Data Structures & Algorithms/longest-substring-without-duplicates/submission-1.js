class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0,
        longest = 0,
        sub = new Set();

        for(let r=0; r < s.length; r++){
            while(sub.has(s[r])){
                sub.delete(s[l]);
                l++
            }
            sub.add(s[r])
            longest = Math.max(longest, sub.size)
        }

        return longest;
    }
}
