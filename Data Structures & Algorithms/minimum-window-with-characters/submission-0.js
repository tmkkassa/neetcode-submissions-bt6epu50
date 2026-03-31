class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(!t) return '';

        let sMap = new Map(),
            tMap = new Map(),
            have = 0,
            res = [-1,-1],
            smallest = Infinity,
            l = 0;

        for(let i=0; i < t.length; i++){
            tMap.set(t[i],(tMap.get(t[i]) || 0) + 1);
        }

        let need = tMap.size;

        for(let r=0; r< s.length; r++){
            let c = s[r];
            sMap.set(c,(sMap.get(c) || 0) + 1);

            if(tMap.has(c) && (sMap.get(c) == tMap.get(c)))
                have++;

            while(have === need){
                if((r-l+1) < smallest){
                    res = [l,r];
                    smallest = r-l+1;
                }
                sMap.set(s[l], sMap.get(s[l]) - 1);
                if(tMap.has(s[l]) && (sMap.get(s[l]) < tMap.get(s[l]))){
                  
                  have--;
                }
                l++; 
            }
        }

        return smallest === Infinity ? '' : s.slice(res[0],res[1]+1);
    }
}
