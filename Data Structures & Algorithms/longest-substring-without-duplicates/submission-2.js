class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let m = new Set(),
            start = 0,
            end = 0,
            longest = 0;

        while(end < s.length){
            while(m.has(s[end])){
                m.delete(s[start]);
                start++;
            }

            m.add(s[end]);
            end++;
            longest = Math.max(longest, end-start);
        }

        return longest;
    }
}
