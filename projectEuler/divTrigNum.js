function divTrigNum() {
  let factors = [];
  let n = 0;
  let i = 0;
  while (factors.length < 500) {
    i += 1;
    n += i;
    factors = findFactors(n);
  }
  return n;
}

function findFactors(n) {
  const factors = [1, n];
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(divTrigNum()); //12785
//more efficient factoring algorithm?
