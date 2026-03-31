class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map()

        for(let i=0; i < numbers.length; i++){
            let rem = target - numbers[i]

            if(map.has(rem)){
                let idx = map.get(rem);
                return i < idx ? [i+1, idx+1] : [idx+1, i+1]
            }
            
            map.set(numbers[i],i)
        }
    }
}
