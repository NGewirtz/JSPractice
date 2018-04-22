function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let toSort = arr.slice(1);
  let left = toSort.filter( el => el <= pivot );
  let right = toSort.filter( el => el > pivot );
  return quickSort(left).concat([pivot]).concat(quickSort(right));
}


let test = [5,14,2,4,1,123,-16,4,123,100,-23,1,0];
console.log(quickSort(test));
