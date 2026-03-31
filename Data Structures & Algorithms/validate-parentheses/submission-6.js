class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      if((s.length % 2) !== 0 ) return false;

      let brkt = {
        '(':')',
        '{':'}',
        '[':']'
      },
      stack = [];

      for(let c of s){
        if(brkt[c])
          stack.push(c)
        else
          if(c === brkt[stack[stack.length-1]])
            stack.pop()
          else 
            return false;
      }

      return stack.length === 0;
    }
}
