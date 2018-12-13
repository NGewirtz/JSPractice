function areSimilar(a, b) {
  let diffs = [];
  a.forEach((el, idx) => {
    if (el !== b[idx]) {
        diffs.push([el, b[idx]]);
    }
  });
  if (diffs.length === 2) {
    if ((diffs[0][0] === diffs[1][1])
      && (diffs[0][1] === diffs[1][0])) {
      return true;
    }
  }else if (diffs.length === 0) {
    return true;
  }
  return false;
}
