var countAndSay = function(n) {
  if (n === 1) {
    return "1";
  }
  let curString = "1";
  for (let i = 2; i <= n; i++) {
    curString = evaluate(curString);
  }
  return curString;
};

function evaluate(str) {
  let output = "";
  let arr = str.split("");
  let curEl = arr[0];
  let streakNum = 0;
  arr.forEach(el => {
    if (el === curEl) {
      streakNum += 1;
    }else {
      output += `${streakNum}${curEl}`;
      streakNum = 1;
      curEl = el;
    }
  });
  output += `${streakNum}${curEl}`;
  return output;
}
