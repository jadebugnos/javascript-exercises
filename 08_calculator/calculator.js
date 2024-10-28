const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (sum) {
  return sum.reduce((a, b) => a + b, 0);
};

const multiply = function (times) {
  return times.reduce((a, b) => a * b, 1);
};

const power = function (...numbers) {
  return numbers.reduce((a, b) => a ** b);
};

const factorial = function (n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
