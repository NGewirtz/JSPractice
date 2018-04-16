function knapsack(valArr, weightArr, size) {
  let knap = [];
  for (let i = 0; i < valArr.length + 1; i++) {
    knap.push(new Array(size + 1));
  }
  if (size === 0) {
    return 0;
  }
  for (let i = 0; i < valArr.length + 1; i++) {
    for (let j = 0; j <= size; j++) {
      if (i === 0 || j === 0) {
        knap[i][j] = 0;
      }else if (weightArr[i - 1] <= j) {
        knap[i][j] = Math.max(
          knap[i - 1][j],
          knap[i - 1][j - weightArr[i - 1]] + valArr[i - 1]
        );
      }else{
        knap[i][j] = knap[i - 1][j];
      }
    }
  }
  return knap[valArr.length][size];
}

let s = 10;
let weight = [1, 2, 3];
let val = [4, 5, 1];

console.log(knapsack(val, weight, s));




function revStrRec(str) {
  if (str.length <= 1) {
    return str;
  }
  return revStr(str.slice(1)) + str[0];
}


console.log(revStr("abc"));



function revStr(str) {
  let retStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    retStr += str[i];
  }
  return retStr;
}
