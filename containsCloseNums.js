function containsCloseNums(nums, k) {
  if (nums.length === [...new Set(nums)].length) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + k; j > i; j--) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}
