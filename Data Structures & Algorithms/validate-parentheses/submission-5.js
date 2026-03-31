class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if(s.length % 2 != 0) return false;

        let charObj = {
            '(':')',
            '{':'}',
            '[':']'}
        ,
        stack = [];

        for(let ch of s){
            if(charObj[ch])
                stack.push(ch)
            else if(charObj[stack[stack.length-1]] === ch)
                stack.pop()
            else
                return false;
        }

        return stack.length === 0;
    }
}
