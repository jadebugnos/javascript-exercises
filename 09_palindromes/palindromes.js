const palindromes = function (...string) {
    let filtered = string
        .map(item => item.toLowerCase()) // for case insensitivity
        .filter(item => typeof item === 'string') // omit all non alphabet
        .join('') //to convert the array back to string

    filtered = filtered.replace(/[^a-z0-9]/g, ''); // filters all non-string items

    let reversed = filtered
        .split('') //convert to array
        .reverse() //reverse the order of items
        .join(''); // convert back to string
    return reversed === filtered ? true : false;
};
//if (index === lastIndexof(item))
// Do not edit below this line
module.exports = palindromes;
