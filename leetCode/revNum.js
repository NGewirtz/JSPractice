var reverse = function(x) {
  const absoluteValue = Math.abs(x)
  if ( absoluteValue >= 2 ** 31 ) { return 0; }
  const stringNum = absoluteValue.toString();
  const reversed = stringNum.split("").reverse().join("");
  const result = x < 0 ? Number(reversed) * -1 : Number(reversed);
  if ( Math.abs(result) >= 2**31 ) { return 0; }
  return result;
};
