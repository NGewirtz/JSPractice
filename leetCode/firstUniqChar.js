var firstUniqChar = function(s) {
  const idxHash = {};
  s.split("").forEach((char, idx) => {
    if(idxHash[char]) {
      idxHash[char].push(idx);
    }else {
      idxHash[char] = [idx];
    }
  });
  const smallestIdx = Object.values(idxHash)
    .filter( idxArr => idxArr.length === 1)
    .map( arr => arr[0])
    .sort((a, b) => a > b)[0];
  return smallestIdx === undefined ? -1 : smallestIdx;
};
