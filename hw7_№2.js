let person = {
    name: 'Andrew',
    age: 28,
    city: 'Tomsk'
};

let str = "Name"

function personObj(person, str) {
    for (let key in person) {
        if (person.hasOwnProperty('name')) {
            return true
        }
        else {
            return false
        };
    };
};