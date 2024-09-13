const sumAll = function (...arg) {
    let sum = 0;

    if (arg[0] > arg[1]) {
        arg.reverse();
    } else if (
        arg[0] < 0 ||
        arg[1] < 0 ||
        arg[0] % 1 !== 0 ||
        arg[1] % 1 !== 0 ||
        isNaN(arg[0]) ||
        isNaN(arg[1])||
        typeof(arg[0]) == "string" ||
        typeof(arg[1]) == "string"
        ) {
        return "ERROR";
    }

    for (let i = arg[0]; i <= arg[1]; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
