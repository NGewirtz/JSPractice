function curryAdder(...args) {
  let nums = [...args];
  function adder(arg) {
    if (arg !== undefined) {
      nums.push(arg);
    }
    if (nums.length === 2) {
      return nums[0] + nums[1];
    }else {
      return adder;
    }
  }
  return adder();
}

console.log(curryAdder(2,3));
console.log(curryAdder(2)(3));
