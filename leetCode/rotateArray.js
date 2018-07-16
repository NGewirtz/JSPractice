var rotate = function(nums, k) {
  return nums.slice(k) + nums.slice(0, k);
};

console.log(rotate([-1,-100,3,99], 2));

var rotateInPlace = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
