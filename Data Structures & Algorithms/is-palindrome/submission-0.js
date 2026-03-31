class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(c){
        return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        while(left <= right){
            if(!this.isAlphaNum(s[left])){
                left++;
                continue;
            }

            if(!this.isAlphaNum(s[right])){
                right--;
                continue;
            }

            if(s[right].toLowerCase() !== s[left].toLowerCase()) return false;
            left++
            right--
        }

        return true
    }
}
