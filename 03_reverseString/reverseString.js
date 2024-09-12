const reverseString = function(string) {
    let stringArray = string.split('');
    const reversed = [];

    while (stringArray.length) {
        reversed.push(stringArray.pop());
    }

    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
