var plusOne = function(digits) {
  if (digits.length === 1) {
    let val = digits[0] === 9 ? [1, 0] : [digits[0] + 1];
    return val;
  }
  let lastDigit = digits[digits.length - 1];
  if (lastDigit === 9) {
    return [...plusOne(digits.slice(0, digits.length - 1)), 0];
  }else {
    digits[digits.length - 1] += 1;
    return digits;
  }
};
