function permutations(nums) {
  if (nums.length <= 1) {
    return [nums];
  }

  let first = nums[0];
  let perms = permutations(nums.slice(1));
  let totalPerms = [];
  perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      totalPerms.push(perm.slice(0, i) + [first] + perm.slice(i));
    }
  });
  return totalPerms;
}

console.log(permutations([1,2,3]));
