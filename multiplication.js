//  1*2*3*4*..........

function multiplication(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum = sum * i;
  }
  return sum;
}

const result = multiplication(5);
console.log(result);


