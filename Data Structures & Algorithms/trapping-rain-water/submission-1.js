class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let sum = 0;
        let preMax = [0,height[0]];
        let sufMax = [];
        sufMax[height.length-1] = 0;
        sufMax[height.length-2] = height[height.length-1];

        for(let i=2; i < height.length; i++){
            preMax[i] = Math.max(height[i-1],preMax[i-1])
        }

        for(let i= height.length-3; i >=0 ; i--){
            sufMax[i] = Math.max(height[i+1],sufMax[i+1])
        }

        for(let i=0; i < height.length-1; i++){
            if(Math.min(preMax[i],sufMax[i]) - height[i] > 0)
                sum += Math.min(preMax[i],sufMax[i]) - height[i];
        }

        return sum;
       
    }
}
