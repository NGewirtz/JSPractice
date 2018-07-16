var containsDuplicate = function(nums) {
  const set = {};
  nums.forEach( num => {
    set[num] = true;
  });
  return Object.keys(set).length !== nums.length;
};
