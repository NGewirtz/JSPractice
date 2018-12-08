function matrixElementsSum(matrix) {
  let total = 0;
  let cols = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let num = matrix[i][j];
      if (num === 0) {
        cols[j] = true;
      }else if (!cols[j]) {
        total += num;
      }
    }
  }
  return total;
}
