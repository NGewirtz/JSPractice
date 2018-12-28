function maxUniArr(arr) {
  let midIdx = Math.floor(arr.length / 2);
  while (!(arr[midIdx - 1] < arr[midIdx] && arr[midIdx] > arr[midIdx + 1])) {
    if (arr.length === 1) {
      return arr[0];
    }else if(arr[midIdx - 1] > arr[midIdx]) {
      arr = arr.slice(0, midIdx);
      midIdx = Math.floor(arr.length / 2);
    }else {
      arr = arr.slice(midIdx);
      midIdx = Math.floor(arr.length / 2);
    }
  }
  return arr[midIdx];
}



let test = [2,3,4,5,7,8,7,6,5,4,3,2,1];
console.log(maxUniArr(test));
