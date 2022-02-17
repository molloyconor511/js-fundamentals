// define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function myFunction(firstNum, lastNum) {
  const newArray = [];
  for (let i = firstNum; i <= lastNum; i++) {
    newArray.push(i);
  }
  return newArray;
}

// define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function myFunc(string, num) {
  string = string.toUpperCase();
  num = "!".repeat(num);
  return string + num;
}

// change the exported value to be the name of the function you defined
module.exports = {
  a: myFunction, // change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: myFunc, // change undefined to be the name of the function defined to return the string with exclamations (the second todo)
};
