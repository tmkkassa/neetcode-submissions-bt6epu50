class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0,
        longest = 0,
        charMap = new Map();

        for(let r=0; r < s.length; r++){
            charMap.set(s[r], (charMap.get(s[r]) || 0)+1);

            while((r-l+1) - Math.max(...charMap.values()) > k){
                charMap.set(s[l], charMap.get(s[l])-1);
                l++;
            }

            longest = Math.max(longest, r-l+1);
        }

        return longest;
    }
}
