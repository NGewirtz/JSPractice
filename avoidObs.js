function avoidObstacles(inputArray) {
  let end = Math.max(...inputArray);
  for (let i = 2; i < end; i ++) {
    if(inputArray.filter( el => el % i === 0).length === 0) {
      return i;
    }
  }
  return end + 1;
}
