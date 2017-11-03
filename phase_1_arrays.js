Array.prototype.uniq = function uniq() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};



Array.prototype.twoSum = function twoSum() {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0 ) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function transpose(){
  const result=[];
  let subarray=[];
  for (let i = 0; i <this.length; i++){
    for(let j = 0; j<this.length; j++){
       subarray.push(this[j][i]);
    }
    result.push(subarray);
    subarray=[];
  }
  return result;
};
