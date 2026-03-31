class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0,
        matches = 0,
        s1Map = new Map(),
        s2Map = new Map();

        for(let i=0; i < s1.length; i++){
            s1Map.set(s1[i], 1 + (s1Map.get(s1[i]) || 0))
        }

        for(let r=0; r < s2.length; r++){
            s2Map.set(s2[r],  1 + (s2Map.get(s2[r]) || 0))

            if(s1Map.get(s2[r]) === s2Map.get(s2[r]))
                matches++;

            while(r-l+1 > s1.length){
                if(s1Map.has(s2[l]) && s1Map.get(s2[l]) === s2Map.get(s2[l]))
                    matches--;

                s2Map.set(s2[l], s2Map.get(s2[l])-1)

                if(s2Map.get(s2[l]) === 0) s2Map.delete(s2[l]);

                l++
            }

            if(matches === s1Map.size) return true;
        }

        return false;
    }
}
