var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let arr = [...new Array(numRows)].map(el => [""]);
  let down = false;
  let stringArr = s.split("");
  let idx = 0;
  for (let i = 0; i < stringArr.length; i++) {
    arr[idx] += stringArr[i];
    if(idx === 0 || idx === numRows - 1) {
      down = !down;
    }
    idx += down ? 1 : -1;
  }
  return arr.join("");
};
