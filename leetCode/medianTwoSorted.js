var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [];
  let oneIdx = 0;
  let twoIdx = 0;
  while (oneIdx < nums1.length && twoIdx < nums2.length) {
    if (nums1[oneIdx] < nums2[twoIdx]) {
      arr.push(nums1[oneIdx]);
      oneIdx += 1;
    }else {
      arr.push(nums2[twoIdx]);
      twoIdx += 1;
    }
  }
  arr = arr.concat(nums1.slice(oneIdx)).concat(nums2.slice(twoIdx));
  let midIdx = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[midIdx] + arr[midIdx - 1]) / 2;
  }else {
    return arr[midIdx];
  }
};
