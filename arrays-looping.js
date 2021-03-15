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

// Filter, Find and Higher Order Functions

console.log('Filter(), Find() and higher order functions:')

console.log('Filter() use: find people over 40;')
// const overForty = cleanedPeople.filter(function(person){
    //     if(person.age > 40) {
        //         return true;
        //     } else {
//         return false
//     }
// });

const overForty = cleanedPeople.filter(person => person.age > 40);
console.table(overForty);

overForty.length ? console.log('There are some people over 40;') : console.log('It seems that there is no person over 40 here;');

// Find()
console.log('Find() use:')

function findStudentById(id) {
    return function isThereAStudent(student) {
        return student.id === id;
    };
};

const student = students.find(findStudentById('11ce'));
console.log(student)

console.log('Find() by property: a more flexible function;')

function findStudentByProperty (prop, propWeAreLookingFor) {
    return function isThereAStudent(student) {
        return student[prop] === propWeAreLookingFor;
    }
};

const student1 = students.find(findStudentByProperty('id', '11ce'));
const student2 = students.find(findStudentByProperty('first_name', 'Luke'));

console.log('One function finding through different properties:');
console.log('find by id');
console.log(student1);
console.log('find by name');
console.log(student2);

// reduce()
console.log('reduce()!!!');

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];
console.table(orderTotals);

function tallyNumbers(tally, currentTotal) {
    console.log(`The current tally is ${tally}`);
    console.log(`The current total is ${currentTotal}`);
    console.log('---------')
    // return the tally plus the amount of this order
    return tally + currentTotal;
};

const allOrders = orderTotals.reduce(tallyNumbers, 0);
console.log("Summary:");
console.log(allOrders);


// #52[11:25]
// Counting instances...
console.log('// Counting instances in an object:');

const inventory = [
    { type: 'shirt', price: 4000 },
    { type: 'pants', price: 4532 },
    { type: 'socks', price: 234 },
    { type: 'shirt', price: 2343 },
    { type: 'pants', price: 2343 },
    { type: 'socks', price: 542 },
    { type: 'pants', price: 123 },
];

console.table(inventory);

function inventoryReducer(totals, item) {

    // increment the type by one;
    // totals.shirt = totals.shirt +1 || 1;
    totals[item.type] = totals[item.type] + 1 || 1;


    // or in that way:
    // totals.shirt ? totals.shirt +1 : totals.shirt = 1;

    /* reminder: above is the same as:
    if(totals.shirt) {
        totals.shirt = totals.shirt = 1;
    } else {
        totals.shirt = 1;
    }*/

    // return the total so the next  loop can use it:
    return totals;
};

const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);
console.log('totalInventoryPrice');
console.log(totalInventoryPrice);

