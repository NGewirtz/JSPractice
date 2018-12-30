function areFollowingPatterns(strings, patterns) {
  let firstCheck = checker(strings, patterns);
  let secondCheck = checker(patterns, strings);
  return firstCheck && secondCheck;
}

function checker(arr1, arr2) {
  let hash = {};
  for (let i = 0; i < arr1.length; i++) {
    if (hash[arr1[i]] === undefined) {
      hash[arr1[i]] = arr2[i];
    }else if (hash[arr1[i]] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
