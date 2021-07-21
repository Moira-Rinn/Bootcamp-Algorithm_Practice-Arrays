// Print Values and Sum

// 1. Print each array value and the sum so far:

let testArr = [6,3,5,1,2,4];
testArr.forEach(val => {
  let sum=0;
  sum = val+sum;
  console.log(`Num ${val}, Sum ${sum}`);
});

// Value * Position

// 1. Multiply each value in the array by its array position:
testArr.forEach(val => testArr[testArr.indexOf(val)] = testArr.indexOf(val) * val);
console.log(testArr);