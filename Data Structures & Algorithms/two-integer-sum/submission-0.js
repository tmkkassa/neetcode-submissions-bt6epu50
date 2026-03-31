class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0; i < nums.length; i++){
            let rem = target - nums[i]
            for(let k=0; k < nums.length; k++){
                if(rem === nums[k] && k != i)
                    return [i,k]
            }
        }
    }
}
