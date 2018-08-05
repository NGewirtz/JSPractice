var rotate = function(nums, k) {
  return nums.slice(k) + nums.slice(0, k);
};

var rotateInPlace = function(nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
