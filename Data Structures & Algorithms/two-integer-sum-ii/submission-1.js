class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length -1;

        while(l < r){
            let cursum = numbers[l] + numbers[r];

            if(cursum > target)
                r--;
            else if(cursum < target)
                l++;
            else
                return [l+1,r+1]
        }
    }
}
