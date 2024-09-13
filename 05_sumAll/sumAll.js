const sumAll = function(...arg) {
let sum = arg[0] - 1;

for (let i = arg[0]; i <= arg[1]; i++) {
    sum += i;
}
 return sum;
};

// Do not edit below this line
module.exports = sumAll;
