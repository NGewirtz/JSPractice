function rotateImage(a) {
  let newArr = new Array(a.length);
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = new Array(a.length);
  }
  for (let r = 0; r < a.length; r++) {
    for (let c = 0; c < a[0].length; c++) {
      let y = a.length - r - 1;
      newArr[c][y] = a[r][c];
    }
  }
  return newArr;
}

// 0 0 = 0 2
// 0 1 = 1 2
// 0 2 = 2 2

// 1 0 = 0 1
// 1 1 = 1 1
// 1 2 = 2 1

// 2 0 = 0 0
// 2 1 = 1 0
// 2 2 = 2 0
