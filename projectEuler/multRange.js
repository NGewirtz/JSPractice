function multRange(num = 999) {
  let arr = [...Array(num + 1).keys()];
  arr.shift();
  return arr.reduce((acc, el) => {
    if (el % 3 === 0 || el % 5 === 0) {
      return acc + el;
    }else {
      return acc;
    }
  }, 0);
}

console.log(multRange()); //233168
