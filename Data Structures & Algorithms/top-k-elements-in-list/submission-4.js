class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let num_freq = {};

        for(const num of nums){
            num_freq[num] = (num_freq[num] || 0) + 1;
        }

        let bucket_freq = Array.from({length:nums.length+1}, () => []);

        for(const itm in num_freq){
            bucket_freq[num_freq[itm]].push(parseInt(itm))
        }

        let ret = []
        for(let i =bucket_freq.length - 1; i > 0; i--){
            for(const n of bucket_freq[i]){
                ret.push(n)

                if(ret.length === k)
                    return ret
            }
        }
    }
}
