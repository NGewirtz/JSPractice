function primesUpToX(x) {
  const arr = [];
  for (let i = 2; i <= x; i++) {
    arr.push(i);
  }
  for (let i = 2; i * i < x + 2; i++) {
    if (arr[i - 2]) {
      for (let j = i * i; j < x + 2; j += i) {
        arr[j - 2] = false;
      }
    }
  }
  return arr.filter( el => el);
}

console.log(primesUpToX(300));
