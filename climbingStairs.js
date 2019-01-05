function climbingStairs(n) {
  let stairs = [1,1];
  for (let i = 2; i <= n; i++) {
    let len = stairs.length;
    stairs[len] = stairs[len - 1] + stairs[len - 2];
  }
  return stairs[stairs.length - 1];
}
