function bSearch(target, arr) {
  if (arr.length === 0) {
    return -1;
  }
  const midIdx = Math.floor(arr.length / 2);
  if (arr[midIdx] === target) {
    return midIdx;
  }else if (target < arr[midIdx]) {
    return bSearch(target, arr.slice(0, midIdx));
  }else {
    let temp = bSearch(target, arr.slice(midIdx + 1));
    return temp === -1 ? -1 : temp + midIdx + 1 ;
  }
}


const testArr = [1,3,5,8,16,54,124,167];
//               0 1 2 3  4  5  6   7
console.log(bSearch(1, testArr));
console.log(bSearch(3, testArr));
console.log(bSearch(5, testArr));
console.log(bSearch(8, testArr));
console.log(bSearch(16, testArr));
console.log(bSearch(54, testArr));
console.log(bSearch(124, testArr));
console.log(bSearch(167, testArr));
console.log(bSearch(11, testArr));
console.log(bSearch(12, testArr));
console.log(bSearch(123, testArr));
