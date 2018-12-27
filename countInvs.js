let fs = require("fs");
let file = fs.readFileSync("IntegerArray.txt", 'utf8')
  .split("\r\n")
  .map(el => parseInt(el));
file = file.slice(0, file.length - 1);

function countInvs(arr) {
  if (arr.length === 1) {
    return { arr, count: 0 };
  }
  let midIdx = Math.floor(arr.length / 2);
  let sortedLeft = countInvs(arr.slice(0, midIdx));
  let sortedRight = countInvs(arr.slice(midIdx));
  let splitInvs = mergeAndCount(sortedLeft.arr, sortedRight.arr);
  return {
    arr: splitInvs.arr,
    count: sortedLeft.count + sortedRight.count + splitInvs.count
  };
}

function mergeAndCount(left, right) {
  let count = 0;
  let sorted = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    }else {
      sorted.push(right.shift());
      count += left.length;
    }
  }
  sorted = sorted.concat(left).concat(right);
  return { arr: sorted, count };
}

const test1 = [1,2,3,4,6,5];
const test2 = [1,3,5,2,4,6];
const test3 = [2,3,4,6,5,1];
// console.log(countInvs(test1));
// console.log(countInvs(test2));
// console.log(countInvs(test3));
console.log(countInvs(file).count);
