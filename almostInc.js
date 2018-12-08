function almostIncreasingSequence(sequence) {
  let currEl = sequence[0];
  let firstDown = null;
  let toSlice = 1;
  let ans = true;
  if (currEl > sequence[1]) {
    toSlice = 2;
    currEl = sequence[1];
    firstDown = sequence[0];
  }
  sequence.slice(toSlice).forEach(el => {
    if (el > currEl) {
      currEl = el;
    }else if (firstDown) {
      ans = false;
    }else {
      let prevEl = sequence[sequence.indexOf(currEl) - 1];
      let lower = (el < currEl) && (el > prevEl) ? el : currEl;
      firstDown = lower;
      currEl = lower;
    }
  });
  return ans;
}
