function fibs() {
  let fibNums = [1,2];
  while (fibNums[fibNums.length - 1] <= 4000000) {
    let last = fibNums[fibNums.length - 1];
    let secondLast = fibNums[fibNums.length - 2];
    fibNums.push(last + secondLast);
  }
  return fibNums.reduce((acc, el) => {
    if (el % 2 === 0) {
      return acc + el;
    }else {
      return acc;
    }
  }, 0);
}

console.log(fibs()); //4613732
