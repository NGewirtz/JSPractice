const ex = [6,7,3,8];
const ex2 = [10, 3, 12, 4, 2, 9, 13, 0, 8, 11, 1, 7, 5, 6];
//  ``      [12, 12, 13, 9, 9, 13, -1, 8, 11, -1, 7, -1, 6, -1]

function nextLarger(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.forEach(idx => {
      if(arr[idx] < arr[i]) {
        arr[idx] = arr[i];
        delete stack[stack.indexOf(idx)];
      }
    });
    stack.push(i);
  }
  stack.forEach(leftover => {
    arr[leftover] = -1;
  });
  return arr;
}

console.log(nextLarger(ex));
console.log(nextLarger(ex2));
