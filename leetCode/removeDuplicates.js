var removeDuplicates = function(nums) {
  let end = 0;
  for(let i = 1; i < nums.length; i++) {
    if(nums[end] !== nums[i]) {
      end += 1;
      nums[end] = nums[i];
    }
  }
  return end + 1;
};
