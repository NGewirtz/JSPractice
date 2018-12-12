function addBorder(picture) {
  let arr = picture.map(str => `*${str}*`);
  let stars = "*".repeat(arr[0].length);
  arr.unshift(stars);
  arr.push(stars);
  return arr;
}
