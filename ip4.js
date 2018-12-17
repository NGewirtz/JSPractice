function isIPv4Address(inputString) {
  let arr = inputString.split(".");
  let bool = arr.length === 4 ? true : false;
  arr.forEach( section => {
    let num = section === "" ? 256 : Number(section);
    let isNaN = num !== num;
    if (isNaN || num > 255) {
      bool = false;
    }
  });
  return bool;
}
