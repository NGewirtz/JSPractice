function thisWorks() {
  for(let i = 0; i < 2; i++) {
    const fun = 'this is the same variable';
    console.log(fun);
  }
  const fun = 'whoops fun changed';
  console.log(fun);
}



function thisNoWorks() {
  let fun = 'this never changes';
  for(let i = 0; i < 2; i++) {
    let fun = 'this is a different variable';
    console.log(fun);
  }
  fun = 'no worries i can totally no this. NOT!!!!';
  console.log(fun);
}

// thisWorks();
// thisNoWorks();


function wrapElements(a) {
  var result = [];
  for (let i = 0, n = a.length; i < n; i++) {
    result[i] = function() {
      return a[i];
    };
  }
  return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
// console.log(f());
