var romanToInt = function(s) {
  const symbols = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let total = 0;
  let skip = false;
  [...s].forEach((letter, idx) => {
    if (skip) {
      skip = false;
    }else if (letter === "I" || letter === "X" || letter === "C") {
      let testStr = letter + s[idx + 1];
      if (symbols[testStr]) {
        total += symbols[testStr];
        skip = true;
      }else {
        total += symbols[letter];
      }
    }else {
      total += symbols[letter];
    }
  });
  return total;
};
