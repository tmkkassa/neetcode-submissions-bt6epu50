class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        for(let i=0;i < strs.length;i++){
            strs[i] = `${strs[i].length}#${strs[i]}`;
        }
        console.log(strs.join(""));
        return strs.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("here::",str)
        let decoded = []
        while(str.length > 0){
            let num = str.split("#")[0];
            let len = parseInt(num);
            let gap = num.length + 1;
            decoded.push(str.slice(gap,len+gap));
            if(str[len+2]){
                str = str.slice(len + gap);
                console.log(str)
            }
            else
                str = "";
        }

        return decoded
    }
}
