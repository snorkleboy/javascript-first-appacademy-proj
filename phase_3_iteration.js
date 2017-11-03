Array.prototype.bubbleSort = function bubbleSort () {
  let swap = true;

  while (swap) {
    swap = false;
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let left = this[i];
        let right = this[i + 1];
        this[i] = right;
        this[i + 1] = left;
        swap = true;
      }
    }
  }
  return this;
};

String.prototype.subStrings = function SubStrings () {
  let result = [];

  for (let i=0; i<this.length ; i++ ){
    for (let j=i+1 ; j<this.length+1 ; j++ ){
      result.push(this.slice(i,j));
    }
  }
  return result;
};
