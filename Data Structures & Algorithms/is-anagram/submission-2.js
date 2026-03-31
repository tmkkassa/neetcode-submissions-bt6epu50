class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length)
            return false
        
        // let stMap = new Map();

        // for(let i=0; i < s.length; i++){
        //     if(isNaN(stMap.get(s[i])))
        //         stMap.set(s[i],0);
        //     stMap.set(s[i],stMap.get(s[i]) + 1);

        //     if(isNaN(stMap.get(t[i])))
        //         stMap.set(t[i],0);
        //     stMap.set(t[i],stMap.get(t[i]) - 1);
        // }

        // for(let val of stMap.values()){
        //     if(val != 0) return false;
        // }

        // return true;
        let count = new Array(26).fill(0)

        for(let i=0; i < s.length; i++){
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
        }

        for(let k=0; k < 26; k++){
            if(count[k] !=0) return false
        }

        return true
    }
}
