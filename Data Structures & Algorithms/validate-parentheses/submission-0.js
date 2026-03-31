class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map([
            [")","("],
            ["}","{"],
            ["]","["]
        ])
        let n = s.length
        let stack = []

        for(let i=0; i < n; i++){
            if(map.has(s[i]))
                if(stack.slice(-1)[0] == map.get(s[i]))
                    stack.pop()
                else
                    return false
            else
                stack.push(s[i])
        }

        return stack.length == 0 ? true : false
    }
}
