const getTheTitles = function(book) {
    return book.reduce((a, b) => {
        a.push(b.title); 
        return a; 
    }, []); 
};

// Do not edit below this line
module.exports = getTheTitles;
