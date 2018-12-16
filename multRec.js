function recIntMult(num1, num2) {
  if (num1 < 10 && num2 < 10) {
    return num1 * num2;
  }
  let firstHalfNum1 = getHalf(num1, 1);    //A
  let secondHalfNum1 = getHalf(num1, 2);   //B
  let firstHalfNum2 = getHalf(num2, 1);    //C
  let secondHalfNum2 = getHalf(num2, 2);   //D
  let ac = recIntMult(firstHalfNum1, firstHalfNum2);
  let ad = recIntMult(firstHalfNum1, secondHalfNum2);
  let bc = recIntMult(secondHalfNum1, firstHalfNum2);
  let bd = recIntMult(secondHalfNum1, secondHalfNum2);
  let n = String(num1).length;
  return Math.pow(10, n) * ac + Math.pow(10, n / 2) * (ad + bc) + bd;
}


function getHalf(num, halph) {
  let arrNum = String(num).split("");
  let midIdx = Math.floor(arrNum.length / 2);
  let firstHalph =  parseInt(arrNum.slice(0, midIdx).join(""));
  let secondHalf = parseInt(arrNum.slice(midIdx).join(""));
  return halph === 1 ? firstHalph : secondHalf;
}

console.log(recIntMult(1234, 5678));
console.log(recIntMult(1234, 5678) === 7006652);
