const students = [
    {
        id: '11ce',
        first_name: 'Luke',
        last_name: 'Stusio',
    },
    {
        id: '83a',
        first_name: 'Kriss',
        last_name: 'Tchekowsy',
    },
    {
        id: '131cb',
        first_name: 'Sebastian',
        last_name: 'Karamba',
    },
    {
        id: '563b',
        first_name: 'Anne',
        last_name: 'Pythonka',
    },
    {
        id: '1z',
        first_name: 'Cecyl',
        last_name: 'The Cat',
    }
    ];

    const toppings = ['tomatoes', 'olives', 'anchioves', 'peppers', 'onions', 'herbs', 'capars', 'mozarella cheese', 'prawns', 'aubergine', 'zucchini'];



// map
// side effects
console.log('map() & side effect')
const stusioFamily = ['roma', 'mira', 'cecyl', 'łukasz', 'nelson', 'zenek', 'krysia', 'ania', 'maciek'];

function capitalize(word){
    return `${word[0].toUpperCase()}${word.slice(1)}`;
};

function addSurname(name) {
    return `${name} Stusio`;
};

const familyFullNames = stusioFamily
    .map(capitalize)
    .map(addSurname);

console.log("assingning the surname to all my family names")
console.table(familyFullNames);



// cleaning the data from API alike
console.log('Cleaning the data from API alike array of objects with map():')
const people = [
    {
        birthday: 'April 22, 1993',
        names: {
            first: 'Keith',
            last: 'Buckley'
        }
    },
    {
        birthday: 'January 3, 1975',
        names: {
            first: 'Larry',
            last: 'Heep'
        }
    },
    {
        birthday: 'February 12, 1944',
        names: {
            first: 'Linda',
            last: 'Bermeer'
        }
    }
];

console.table(people)
// get their b-day
const cleanedPeople = people.map(function(person) {
    // timestamp
    const birthday = new Date(person.birthday).getTime();

    // no timestamp
    const now = Date.now();

    // figure out how old they are
    const age = Math.floor((now - birthday) / 31536000000);
    console.log(age);

    // return their full name & b-day in an object
return {
    age,
    name: `${person.names.first} ${person.names.last}`,
}
});

console.log("done: effect below")
console.table(cleanedPeople);

