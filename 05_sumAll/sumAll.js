const sumAll = function (...arg) {
    let sum = 0;

    if (arg[0] > arg[1]) {
        arg.reverse();
    } else if (arg[0] < 0 || arg[1] < 0) {
        return "ERROR";
    }

    for (let i = arg[0]; i <= arg[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
