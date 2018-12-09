function commonCharacterCount(s1, s2) {
  let count = 0;
  let second = s2.split("");
  s1.split("").forEach( char => {
    let idx = second.indexOf(char);
    if (idx !== -1) {
      count += 1;
      second.splice(idx, 1);
    }
  });
  return count;
}
