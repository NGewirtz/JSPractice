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
