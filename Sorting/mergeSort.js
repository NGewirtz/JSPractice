function mergeSort(arr) {
  if ( arr.length <= 1 ) {
    return arr;
  }
  let sortedLeft = mergeSort(arr.slice(0, arr.length / 2));
  let sortedRight = mergeSort(arr.slice(arr.length / 2));
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let sorted = [];
  while ( left.length > 0 && right.length > 0 ) {
    if ( left[0] < right[0] ) {
      sorted.push(left[0]);
      left.shift();
    }else {
      sorted.push(right[0]);
      right.shift();
    }
  }
  return sorted.concat(left).concat(right);
}


console.log(mergeSort([3,4,1,5,86,1,23,-3,123,9,2,143]));
