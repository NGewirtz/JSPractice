//Brute force O(n^2) solution
var maxArea = function(height) {
  let leftEl = height[0];
  let max = 0;
  height.forEach((wall, idx1) => {
    leftEl = wall;
    if (!(wall > leftEl)) {
      height.slice(idx1 + 1).forEach((rightEl, idx2) => {
        let smaller = rightEl < leftEl ? rightEl : leftEl;
        let posMax = smaller * (idx2 + 1);
        if (posMax > max) {
          max = posMax;
        }
      });
    }
  });
  return max;
};


//2 Pointers O(n) solution
var maxArea2 = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let min = height[left] < height[right] ? height[left] : height[right];
    let posMax = min * (right - left);
    max = Math.max(max, posMax);
    if (min === height[left]) {
      left += 1;
    }else{
      right -= 1;
    }
  }
  return max;
};
