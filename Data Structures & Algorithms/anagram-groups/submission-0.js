class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length < 2)
            return [strs];
        
        const res = {};
        for(let i=0; i < strs.length; i++){
            const count = new Array(26).fill(0);
            for(let c of strs[i]){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const key = count.join(',');
            if(!res[key])
                res[key] = []

            res[key].push(strs[i])
        }

        return Object.values(res)
    }
}
