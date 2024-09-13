const removeFromArray = function(array, ...restArg) { 
    let firstArgument = array;
    let restArguments = restArg;
   

    return firstArgument.filter(item => !restArguments.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
