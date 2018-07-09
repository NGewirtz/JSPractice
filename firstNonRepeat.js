function firstNotRepeatingCharacter(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const hash = {};
  alphabet.forEach( letter => {
     hash[letter] = [];
  });
  s.split('').forEach( (letter, idx) => {
      hash[letter].push(idx);
  });
  let index = Object.values(hash).filter( arr => {
      return arr.length === 1;
  }).sort( (a, b) => a - b );
  return s[index[0]] || "_";
}
