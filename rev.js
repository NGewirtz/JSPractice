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

function rev(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = arr[i];
    arr[i] = temp;
  }
}

let trial1 = [ 1, 2, 3, 4 , 5 ];
let trial2 = [ 1, 2, 3, 4, 5, 6 ];


rev(trial1);
