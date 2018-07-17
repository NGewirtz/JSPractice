var intersect = function(nums1, nums2) {
  const intersection = [];
  nums1.forEach( num => {
    const index = nums2.indexOf(num);
    if(index !== -1) {
      intersection.push(num);
      delete nums2[index];
    }
  });
  return intersection;
};
