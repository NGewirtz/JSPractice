Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let test = ["Hello", "World", 123];
// test.myEach(el => console.log(el));
// read this YDKJS


Array.prototype.myFlatten = function() {
  let flat = [];
  for (let i = 0; i < this.length; i++) {
    let el = this[i];
    if (Array.isArray(el)) {
      //flat.push(...el.myFlatten());
      flat = flat.concat(el.myFlatten());
    }else {
      flat.push(el);
    }
  }
  return flat;
};

Array.prototype.dup = function() {
  let dup = [];
  this.forEach(el => {
    if (Array.isArray(el)) {
      dup.push(...el.dup());
    }else {
      dup.push(el);
    }
  });
  return dup;
};



Array.newThing = function() { console.log("new thing"); };
//Array.newThing();

let flatTest = [1,2,[12,12,[12]],[11],12,12];
let flatTest2 = [1, [2], [3, [4]]];
// console.log(flatTest2.myFlatten());
let dupTest = flatTest2.dup();
// console.log(dupTest);
// flatTest2.push("thing");
// console.log(dupTest);

function exponentRec(base,expo) {
  if (expo === 0) {
    return 1;
  }
  return base * exponentRec(base, expo - 1);
}

// console.log(exponentRec(2,5));


function expoRecTwo(base, expo) {
  if (expo === 0) {
    return 1;
  }else if (expo % 2 === 0) {
    let num = expoRecTwo(base, expo / 2);
    return num * num;
  }else {
    let num = expoRecTwo(base, (expo - 1) / 2);
    return base * (num * num);
  }
}

// console.log(expoRecTwo(2,5));
// console.log(expoRecTwo(2,6));
// console.log(expoRecTwo(2,7));
// console.log(expoRecTwo(3,3));
// console.log(expoRecTwo(3,4));


function fib(n) {
  let fibs = [1, 1];
  if (n <= 2) {
    return fibs.slice(0, n);
  }
  while (fibs.length < n) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs;
}

function fibRec(n) {
  if (n <= 2) {
    return [1, 1].slice(0, n);
  }
  let fibs = fibRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}


// console.log(fibRec(7));


function subSets(arr) {
  let subs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      subs.push(arr.slice(i, j));
    }
  }
  return subs;
}

// console.log(subSets([1,2,3]));


function subsRec(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  let subs = subsRec(arr.slice(1));
  let el = arr[0];
  subs.forEach(sub => {
    subs.push([el,...sub]);
  });
  return subs;
}

console.log(subsRec([1,2,3]));
