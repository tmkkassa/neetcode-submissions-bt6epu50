class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let num_set = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(!num_set.has(num-1)){
                let length = 0;
                while(num_set.has(num+length)){
                    length +=1;
                }

                longest = Math.max(longest,length);
            }
        }

        return longest;
    }
}
