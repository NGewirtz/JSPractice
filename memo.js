function fibsGood(num, memo) {
  if (num <= 2) {
    return fibStarter(num);
  }
  return getValue(num - 1, memo) + getValue(num - 2, memo);
}

function fibStarter(num) {
  if (num <= 0) return -1;
  let base = num === 1 ? 0 : 1;
  return base;
}

function getValue(num, memo) {
  if (memo[num]) {
    return memo[num];
  }else {
    memo[num] = fibsGood(num, memo);
    return memo[num];
  }
}


console.log(fibsGood(100, {}));
console.log(fibsGood(5, {}));


function fibsBad(n) {
  if (n <= 0) {
    return -1;
  }else if (n === 1) {
    return 0;
  }else if (n === 2) {
    return 1;
  }else {
    return fibsBad(n - 1) + fibsBad(n - 2);
  }
}

// console.log(fibsBad(41));

function fibsVar(n) {
  let seed = [0, 1];
  if (n <= 0 ) {
    return -1;
  }else if (n === 1) {
    return seed[0];
  }else if (n === 2) {
    return seed[1];
  }else {
    while(seed.length < n) {
      let a = seed[seed.length - 2];
      let b = seed[seed.length - 1];
      let c = a + b;
      seed.push(c);
    }
  }
  return seed[n - 1];
}




// console.log(fibsVar(3))
// console.log(fibsVar(5))
// console.log(fibsVar(15))
// console.log(fibsVar(41))
