function quickSelect(arr, n) {
  let pivot = arr[0];
  let toSplit = arr.slice(1);
  let left = toSplit.filter(el => el < pivot);
  let right = toSplit.filter(el => el >= pivot);
  let rightLen = right.length;
  if (rightLen === n - 1) {
    return pivot;
  }else if (rightLen >= n) {
    return quickSelect(right, n);
  }else {
    return quickSelect(left, n - rightLen - 1);
  }
}



console.log(quickSelect([3,2,1,5,6], 1));
console.log(quickSelect([3,2,7,1,5,6], 1));
console.log(quickSelect([3,2,1,5,6], 2));
console.log(quickSelect([3,2,1,5,6], 3));
console.log(quickSelect([8,3,2,1,5,6], 3));
