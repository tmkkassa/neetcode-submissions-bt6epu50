class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = [];
        let prefix = [];
        let suffix = [];
        prefix[0] = 1;
        suffix[nums.length-1] = 1;
        let pre = 1;
        let suf = 1;
        for(let i =0; i < nums.length-1; i++){
            pre *= nums[i];
            prefix[i+1] = pre;
        }

        for(let k =nums.length-1; k >= 0; k--){
            suf *= nums[k];
            suffix[k-1] = suf;
        }
        
        for(let i = 0; i < nums.length; i++){
            res[i] = suffix[i]*prefix[i];
        }

        return res;
    }
}
