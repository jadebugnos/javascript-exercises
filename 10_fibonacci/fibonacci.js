const fibonacci = function(n) {
    n = Number(n); //convert to number
    let sequence = [1, 1];

    //generate the sequence and add to the array
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);        
    }
    //validates input to return expected value
    if (n === 0) {
        return 0;
    } else if (n < 0) {
        return 'OOPS'
    } else {
        return sequence.pop()
    }
};

// Do not edit below this line
module.exports = fibonacci;
