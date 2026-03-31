class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
      let stack = [];
      for(let c of tokens){
        if(!isNaN(c))
          stack.push(parseInt(c));
        else{
          let secondOp = stack.pop();
          let firstOp = stack.pop();
          let result;

          if(c === "+")
            result = firstOp + secondOp;
          if(c === "-")
            result = firstOp - secondOp;
          if(c === "*")
            result = firstOp * secondOp;
          if(c === "/")
            result = Math.trunc(firstOp/secondOp)

          stack.push(result)
        }
      }

      return stack.pop();
    }
}
