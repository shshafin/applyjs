// const prompt = require("prompt-sync")();
// const value = prompt("Enter a value:- ");

// function findEvenOdd(number) {
//   if (number % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// console.log(findEvenOdd(value));

// function findLeapYear(year) {
//   if ((year % 4 == 0) && (year % 100 != 0)|| (year % 400 == 0)) {

//     return "leap year";
//   } else {
//     return "no leap year";
//   }
// }

// console.log(findLeapYear(value));

// function getMin(hour) {
//   let min = hour * 60;
//   return min;
// }
// console.log(getMin(value));

// function getSec(min) {
//   let sec = min * 60;
//   return sec;
// }
// console.log(getSec(value), "second");

// function findLeapYear(year) {
//   let leapYear = [];
//   let sum = 0;
//   for (let i = 0; i < year.length; i++) {
//     let index = i;
//     let element = year[index];

//     if (element % 4 == 0 && (element % 100 != 0 || element % 400 == 0)) {
//       leapYear.push(element);
//     }
//   }
//   return leapYear;
// }

// const arr = [2023, 2024, 2025, 2028, 2030];
// const leapYear = findLeapYear(arr);
// console.log("these are leap yearsleapYear", leapYear);

// function findLeapYear(year) {
//   let leapYear = [];
//   let sum = 0;
//   for (let i = 0; i < year.length; i++) {
//     let index = i;
//     let element = year[index];

//     if ((element % 4 == 0 && element % 100 != 0) || element % 400 == 0) {
//       leapYear.push(element);
//     }
//   }
//   return leapYear;
// }

// const arr = [2023, 2024, 2025, 2028, 2030];
// const leapYear = findLeapYear(arr);
// console.log(leapYear);

// function findLeapYear(year) {
//   let oddNumber = [];

//   for (let i = 0; i < year.length; i++) {
//     const element = year[i];
//     if (element % 4 == 0 && (element % 100 != 0 || element % 400 == 0)) {
//       oddNumber.push(element);
//     }
//   }
//   return oddNumber;
// }

// const arr = [2023, 2024, 2025, 2028, 2030];
// const oddNumber = findLeapYear(arr);
// console.log(oddNumber);
