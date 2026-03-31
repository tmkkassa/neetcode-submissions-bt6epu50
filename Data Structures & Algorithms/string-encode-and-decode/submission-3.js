class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";

        for(const st of strs){
            str +=st.length + "#" + st
        }

        return str
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        
        let strs = [];
        let i = 0;
        //4#code5#sweet
        while(i < str.length){
            let j = i;
            while(str[j] !== "#")
                j++;

            let length = parseInt(str.substring(i,j));
            i=j+1;
            j= i + length;
            strs.push(str.substring(i,j));
            i=j;
        }

        return strs;
    }
}
