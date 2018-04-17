// names.map(function(name) {
// 	return `Hello ${name}`;
// });

function adder(num1, num2) {
  return num1 + num2;
}

let notFunctionVariable = 7;
console.log(adder);
// adder IS a function. What is the difference between adder and
// notFunctionVariable? What can we do to adder?
// When we define a function we can use it AS IF it were any other
// variable

function iWantAFunctionAsAnArgument(thisIsThatFunctionThatIWant) {
  thisIsThatFunctionThatIWant();
}

//iWantAFunctionAsAnArgument(trustIExist);

//How else can I reproduce this same functionality
//if a defined function does not exist?











// How would we reproduce the functionality of map?
// Lets break it down into smaller steps






function myMap(arr, callBack) {
	 let newArr = [];
   for(let i = 0; i < arr.length; i++) {
     newArr.push(callBack(arr[i]));
   }
   return newArr;
}

let arr = [1, 2, 3];
let mapped = myMap(arr, function(el) {
  return el * 3;
});

//console.log(mapped);















































































function trustIExist() {
  console.log("I AM THAT FUNCTION THAT HE WANTED!!!!!!!");
}
