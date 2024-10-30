const findTheOldest = function (people) {
    let transform = people
        .map(person => {
            const currentYear = new Date().getFullYear()
            const yearOfDeath = (person.yearOfDeath || currentYear)
            const age = yearOfDeath - person.yearOfBirth;
            return {
                ...person,
                yearOfDeath,
                age
            }
        })
        .sort((a, b) => a.age - b.age)

    return transform.pop()
};


// Do not edit below this line
module.exports = findTheOldest;
