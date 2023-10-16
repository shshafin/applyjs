// function sumOfArray(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     let index = i;
//     let element = number[index];
//     // console.log(index, element);
//     sum = sum + element;
//   }
//   return sum;
// }

// function getOddNumbers(odd) {
//   let oddNumbers = [];
//   for (let i = 0; i < odd.length; i++) {
//     let index = i;
//     let element = odd[index];
//     if (element % 2 != 0) {
//     //   console.log(index, element);
//       oddNumbers.push(element);
//     }
//   }
//   return oddNumbers;
// }

// const arr = [15, 26, 37, 48, 56, 65, 76, 88, 95];

// const oddNumbers = getOddNumbers(arr);
// // console.log(oddNumbers);

// const result = sumOfArray(oddNumbers);
// console.log("odd number sum ", result);

function getSumOfArray(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    let index = i;
    let element = number[index];
    sum = sum + element;
  }
  return sum;
}

function getOddNumbers(odd) {
  let oddNumber = [];
  for (let i = 0; i < odd.length; i++) {
    let index = i;
    let element = odd[index];
    if (element % 2 != 0) {
      oddNumber.push(element);
    }
  }
  return oddNumber;
}

const arr = [15, 26, 37, 48, 56, 65, 76, 88, 95];

const oddNumber = getOddNumbers(arr);
console.log(oddNumber);

const result = getSumOfArray(oddNumber);
console.log("odd numbers sum ", result);
