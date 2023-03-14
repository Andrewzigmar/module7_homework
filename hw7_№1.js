const person = {
    name: 'Andrew',
    age: 28,
    city: 'Tomsk'
};


function objPerson() {
    for (let key in person) {
        if (person.hasOwnProperty(key)){
            console.log(key, person[key]);
        };
    };

};

objPerson();