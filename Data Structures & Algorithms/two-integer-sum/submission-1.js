class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const pMap = new Map()

        for(let i=0; i < nums.length; i++){
            let rem = target - nums[i]
            
            if(pMap.has(rem))
                return [i,pMap.get(rem)]
            
            pMap.set(nums[i],i)
        }

        return []
    }
}
