class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;
        for (let n of nums){
            if(!set.has(n-1)){
                let length = 0;
                while(set.has(n+length)){
                    length += 1;
                }
                longest = Math.max(length,longest)
            }
        }

        return longest;
    }
}
