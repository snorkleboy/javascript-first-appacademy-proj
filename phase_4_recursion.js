function Range(start, end){
  if (start>end){
    return [];
  }
  return [start].concat(Range(start+1, end));
}

function sumRec(arr) {
  if (arr.length===1){
    return arr[0];
  }

  return sumRec(arr.slice(1, arr.length)) + arr[0];
}

function exponent(base, exp){
  if (exp===0){
    return 1;
  }
  return base * exponent(base, exp-1);
}

function exponent2(base, exp){
  if (exp===0){
    return 1;
  }
  return base * ( (exponent(base, (exp-1)/2) * (exponent(base, (exp-1)/2) )));
}

function fib(n){
  if (n===1){
    return [1];
  }
  if (n===2){
    return [1,1];
  }
  let temp=fib(n-1);
  let num= temp[temp.length-1] + temp[temp.length-2];
   temp.push(num);
   return temp;
}

function bsearch(arr, target) {
  if (arr[arr.length/2]===target){
    console.log(arr);
    return Math.floor(arr.length/2);
  } else if(arr.length===1){
    return -1;
  }

  if (arr[arr.length/2]>target){
    bsearch(arr.slice((Math.floor(arr.length/2)), (arr.length - 1)));
  } else{
    bsearch( arr.slice( 0, Math.floor(arr.length/2)));
  }
}


function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const half = Math.floor(arr.length / 2);

  const leftSort = mergeSort(arr.slice(0, half));
  const rightSort = mergeSort(arr.slice(half, arr.length));

  return merge(leftSort, rightSort);
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0]<right[0]){
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }
  return merged.concat(left,right);
}

function subsets(arr){
  if (arr.length===0) return [[]];
  const first = arr[0];
  const leftOver = subsets(arr.slice(1));
  const added = leftOver.map(function (el) {
    return [first].concat(el);
  });
  return leftOver.concat(added);


  //   console.log(arr);
  // return leftOver.concat(leftOver.map(function(el) {
  //   el.push(first);
  // }));

}
