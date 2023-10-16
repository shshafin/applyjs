// const prompt = require("prompt-sync")();

// const value = prompt("enter a value ");

// function find(number) {
//   if (value % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(find(value));

// const prompt = require("prompt-sync")();

// const value = prompt("enter a value ");

// function factorial(number) {
//   let ans = 1;
//   for (let i = number; i >= 1; i--) {
//     ans = ans * i;
//   }
//   return ans;
// }

// console.log(factorial(value));

// function findLeapYear(year) {
//   if (year % 4 == 0) {
//     return "leap year";
//   } else {
//     return "no leap year";
//   }
// }

// let full = findLeapYear(2003);
// console.log(full);
// function findLeapYear(year) {
//   if ((year % 4 == 0) && ( year % 100 != 0) || year % 400 == 0) {
//     return "leap year";
//   }
//   return "no leap year";
// }

// let full = findLeapYear(2016);
// console.log(full);

// function sumOddNumber(odd) {
//   let sum = 0;
//   for (let i = 1; i <= odd.length; i += 2) {
//     // sum = sum + i;
//     console.log(i);
//   }
//   // return sum;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(sumOddNumber(arr));

// function sumOfAll(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     const index = i;
//     const element = number[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//   }
//   return sum;
// }

// const arr = [15, 26, 37, 48, 56, 68, 76, 88, 95];
// sumOfAll(arr);

// function sumOfOdd(odd) {
//   let sum = 0;
//   for (let i = 1; i < odd.length; i += 2) {
//     const index = i;
//     const element = odd[index];
//     sum = sum + element;
//     console.log(index, element, sum);
//     sum = sum + i;
//   }
//   return sum;
// }

// const arr = [15, 26, 37, 48, 56, 68, 76, 88, 95];
// // sumOfOdd(arr);
// console.log(sumOfOdd(arr));

// function getOddNumbers(number) {
//   const oddNumbers = [];
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     let index = i;
//     let element = number[index];
//     if (element % 2 != 0) {
//       oddNumbers.push(element);
      
      
//     }
//   }
  
//   return oddNumbers;
// }
// const arr = [15, 26, 37, 48, 56, 65, 76, 88, 95];
// console.log(getOddNumbers(arr));

// let sum = getOddNumbers(oddNumbers);
// console.log(sum);
