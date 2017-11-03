Array.prototype.myEach= function MyEach(callback){
  for (let i=0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function MyMap(callback){
  const result = [];
  this.myEach(function (el){
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myReduce = function MyReduce(callback, accumulator){
  let arr=this;
  if (!accumulator){
    accumulator=this[0];
    arr=arr.slice(1);
  }
  arr.myEach( function (el) {
    accumulator = callback(el, accumulator);
  });

  return accumulator;
};
