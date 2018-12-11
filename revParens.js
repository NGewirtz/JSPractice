function reverseParentheses(s) {
  let open = s.indexOf("(");
  let close = s.lastIndexOf(")");
  let firstClose = s.indexOf(")");
  let secondOpen = s.indexOf("(", open + 1);
  if( open === -1 ) {
    return s;
  }
  let prefix = s.slice(0, open);
  let suffix = s.slice(close + 1);
  let middle = s.slice(open + 1, close);
  if (firstClose < secondOpen){
    middle = s.slice(open + 1, firstClose).split("").reverse().join("");
    suffix = reverseParentheses(s.slice(firstClose + 1));
  }else {
    middle = reverseParentheses(middle).split("").reverse().join("");
  }
  return prefix + middle + suffix;
}
