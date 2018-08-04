var isPalindrome = function(s) {
  const letters = s.toLowerCase().replace(/[^\w]/g, "");
  return letters.split("").reverse().join("") === letters;
};
