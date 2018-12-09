var longestCommonPrefix = function(strs) {
  if ( strs.length === 0 ) {
    return "";
  }
  let iters = strs[0].length + 1;
  let hash = {};
  for (let i = 0; i < iters; i++) {
    strs.forEach(str => {
      hash[str.slice(0, i)] = true;
    });
    if (Object.keys(hash).length !== 1) {
      return strs[0].slice(0, i - 1);
    }else {
      hash = {};
    }
  }
  return strs[0];
};
