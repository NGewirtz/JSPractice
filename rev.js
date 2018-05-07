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
