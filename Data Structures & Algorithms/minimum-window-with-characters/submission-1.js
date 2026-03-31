class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(!t) return '';

        let count = t.length,
            m = new Map(),
            start = 0,
            end = 0,
            res = [-1,-1],
            shortest = Infinity;

        for(let c of t)
            m.set(c, (m.get(c) || 0) +1);

        while(end < s.length){
            if(m.has(s[end])){
                if(m.get(s[end]) > 0)
                    count--;
                m.set(s[end], m.get(s[end]) -1);
            }

            end++;

            while(count == 0){
                if(end-start < shortest){
                    shortest = end-start;
                    res = [start, end];
                }

                if(m.has(s[start])){
                    m.set(s[start], m.get(s[start]) + 1)
                    if(m.get(s[start]) > 0){
                        count++;
                    }
                }

                start++;
            }
        }

        return shortest == Infinity? '' : s.slice(res[0], res[1]);

    }
}
