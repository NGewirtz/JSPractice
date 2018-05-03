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

function findDup(arr) {
  for (let i = 0; i < arr.length; i++) {
    if(arr[Math.abs(arr[i]) - 1] < 0) {
      return Math.abs(arr[i]);
    }else {
      arr[arr[i] - 1] *= -1;
    }
  }
}


let arr = [3,2,6,1, 4,3, 5, 7];
console.log(findDup(arr));


function firstDuplicate(a) {
  let set = {};
  for(let i = 0; i < a.length; i++ ) {
    if (set[a[i]]) {
        return a[i];
    }else {
      set[a[i]] = true;
    }
  }
  return -1;
}
