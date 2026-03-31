class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
  let maxList = [],
    l = 0;

  for (let r = k - 1; r < nums.length; r++) {
    maxList.push(Math.max(...nums.slice(l, r + 1)));
    l++;
  }

  return maxList;
    }
}
