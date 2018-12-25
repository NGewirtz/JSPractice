function countInvs(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let midIdx = Math.floor(arr.length / 2);
  let sortedLeft = countInvs(arr.slice(0, midIdx));
  let sortedRight = countInvs(arr.slice(midIdx));
  return mergeAndCount(sortedLeft, sortedRight);
}

function mergeAndCount(left, right) {
  let count = 0;
  let sorted = [];
  while (left.length > 0 && right.length > 0) {
    if (right[0] > left[0]) {
      console.log(count);
      sorted.push(left.shift());
      count += left.length;
    }else {
      sorted.push(right.shift());
    }
  }
  sorted = sorted.concat(left).concat(right);
  return sorted;
}


const test = [2,3,5,1,4,6];
console.log(countInvs(test));
