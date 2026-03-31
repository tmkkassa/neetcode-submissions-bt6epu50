class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mMap = {};

        for(let i=0; i < nums.length; i++){
            mMap[nums[i]] = (mMap[nums[i]] || 0)+1;
        }

        const arr = Object.entries(mMap).map(([num,freq]) => [freq,parseInt(num)])

        arr.sort((a,b) => b[0]-a[0])

        return arr.slice(0,k).map(pair => pair[1])
    }
}
