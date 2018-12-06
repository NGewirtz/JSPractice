var addBinary = function(a, b) {
  let carry = 0;
  let output = [];
  a = a.split("");
  b = b.split("");
  while ( a.length > 0 || b.length > 0) {
    let first = parseInt(a.pop()) || 0;
    let second = parseInt(b.pop()) || 0;
    if ( first + second === 2) {
      output.push(carry);
      carry = 1;
    }else if (first + second === 1) {
      output.push(carry === 0 ? 1 : 0);
      carry = carry === 0 ? 0 : 1;
    }else {
     output.push(carry);
     carry = 0;
    }
  }
  output = output.reverse();
  if ( carry === 1) {
    output.unshift(1);
  }
  return output.join("");
};
