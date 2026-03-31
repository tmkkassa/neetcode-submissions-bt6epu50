class MinStack {
    constructor() {
      this.stack = [];
      this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
      this.stack.push(val);
      if(this.min.length === 0){
        this.min.push(val);
      }
      else 
        this.min.push(Math.min(val,this.min[this.min.length-1]))
    }

    /**
     * @return {void}
     */
    pop() {
      this.stack.pop();
      this.min.pop();
    }

    /**
     * @return {number}
     */
    top() {
      if(this.stack.length < 1)
        return null;

      return this.stack[this.stack.length -1];
    }

    /**
     * @return {number}
     */
    getMin() {
      return this.min[this.min.length-1]
    }
}
