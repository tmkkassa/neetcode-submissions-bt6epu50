class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let sum = 0
        , l = 0
        , r = height.length -1
        , lMax = height[l]
        , rMax = height[r];

        while(l < r){
            if(lMax < rMax){
                l++;
                lMax = Math.max(lMax, height[l])
                // if(lMax - height[l] > 0)
                    sum += lMax - height[l]
                
                
            } else{
                r--;

                rMax = Math.max(rMax, height[r])
                // if(rMax - height[r] > 0)
                    sum += rMax - height[r]

            }
        }

        return sum;
    }
}
