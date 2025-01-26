/*'use strict';

let hasDriversLicense = false;

const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I have a DL.");

// const interface = "Audio"; reserved words create an error in strict mode



// Functions

function logger() {
    console.log("My name is Alberto.");
}

// Calling or Running the function 
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5,1);
console.log(appleJuice);
console.log(fruitProcessor(1,9));

function describeCountry(country,population,capitalCity) {
    const countryInformation = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryInformation;
}

const Mexico = describeCountry("Mexico",127,"Mexico City");
const USA = describeCountry("United States",300,"Washington, DC");
const Spain = describeCountry("Spain",48,"Madrid");

console.log(Mexico);
console.log(USA);
console.log(Spain);



// Function Declaration vs Expressions

// Function Declaration

function calcAge1(birthYear) {
    return 2025 - birthYear;
}
const age1 = calcAge1(1994);

// Function Expression

const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1994);

console.log(age1,age2);

// Arrow functions

const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1994,'Lilly'));
console.log(yearsUntilRetirement(1989,'Alberto'));


function percentageOfWorld1(population) {
    percentage = (population * 100) / 7900;
    return percentage;
}

const mexico = percentageOfWorld1(127);
const usa = percentageOfWorld1(300);
const spain = percentageOfWorld1(48);
console.log(mexico);
console.log(usa);
console.log(spain);

const totalPercent = function (population) {
    return (population * 100) / 7900; //return value withour storing it in a constant.
}

const mexico2 = totalPercent(127);
console.log(mexico2);



// Functions that call other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice made with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
}

console.log(fruitProcessor(2,4));

// Practice
function percentageOfWorld1(population) {
    percentage = (population * 100) / 7900;
    return percentage;
}

function describePopulation(country,population) {
    percentage = percentageOfWorld1(population).toFixed(2);
    return `${country} has ${population} million people, which is about ${percentage} of the world`;
}

console.log(describePopulation('Mexico',127));
console.log(describePopulation('USA',300));
console.log(describePopulation('Spain',48));



// Arrays

const friends = ['Michael','Steven','Peter'];
console.log(friends);

const years = new Array(1991,1992,1993);
console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);


// ARRAY METHODS  

// push method
const friends = ['Michael','Steven','Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

// unshift method

friends.unshift('John');
console.log(friends);

// Pop Method - remove elements

friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Shift method - remove first

friends.shift();
console.log(friends);

// IndexOf

console.log(friends.indexOf('Steven'));

friends.push('Bob');
console.log(friends);

// includes

console.log(friends.includes('Bob'));

if (friends.includes('Bob')) {
    console.log("Your friend's name is Bob");
}

// challenge - array operations

let neighbors = ['Canada','Mexico','Cuba'];
console.log(neighbors);
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (neighbors.includes('Germany') === false) {
    console.log("Probably not a central european country :D");
}

console.log(neighbors.indexOf('Mexico'));
neighbors[neighbors.indexOf('Mexico')] = 'Russia';
console.log(neighbors);

// Intro to Objects

const alberto = {
    firstName: 'Alberto',
    lastName: 'Herrera',
    age: 35,
    job: 'programmer',
    friends: ['Michael','Bob','Robert']
}

console.log(alberto);

// console.log(alberto.lastName);
// console.log(alberto['lastName']);

// const nameKey = 'Name';
// console.log(alberto['first' + nameKey]);

const interestedIn = prompt('What would like to know about Alberto?');
console.log(alberto[interestedIn]);

console.log(`${alberto.firstName} has ${alberto.friends.length} friends, and his best friend is ${alberto.friends[0]}`);



// Object methods

const alberto = {
    firstName: 'Alberto',
    lastName: 'Herrera',
    birthYear: 1989,
    job: 'programmer',
    friends: ['Michael','Bob','Robert'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }
    calcAge: function () {
        return 2025 - this.birthYear;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he ${this.hasDriversLicense ? 'has a' : 'does not have a'} drivers license.`;
    }
};

console.log(alberto.calcAge(1989));

// Challenge

console.log(alberto.getSummary());



// For Loops


const alberto = [
    'Alberto',
    'Herrera',
    35,
    'programmer',
    ['Michael','Bob','Robert']
]
for (let rep = 1; rep <=10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

for (let i = 0;i < alberto.length ; i++) {
    console.log(alberto[i]);
}

const years = [1999,2005,2009,1995];
const ages = [];

for (let i=0; i<years.length; i++){
   ages.push(2025-years[i])
   console.log(ages[i]); 
}

for (let i = alberto.length -1; i>= 0; i--) {
    console.log(alberto[i]);
}


// Loop inside a loop
for (let exercise = 1; exercise < 4; exercise ++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep <6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

// While Loop

let rep = 1
while (rep <= 10) {
    console.log(`While: lifting weights repetition ${rep}`);
    rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; 
    if (dice === 6) console.log('Loop is about to end');
}

*/