/* let js = "amazing";
console.log(js);
console.log("Jonas");

let firstName = "Jonas";
console.log(firstName);

let firstNamePerson = "Matilda";
// Variable naming convention = camelCase

let PI = 3.1416;
console.log(PI);

let myFirstJob = 'Programmer';
console.log(myFirstJob);    


// Part 1 Assignments
let country = 'USA';
let continent = 'North America';
let population = 300;

console.log(country);
console.log(continent);
console.log(population);

//Data Types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof country);
console.log(typeof population);


// let,const and var
let language = "English";
const country = "USA";
const continent = "North America";
const isIsland = false;
// isIsland = true;

console.log(country);

var job = "programmer";
job = "teacher";

console.log(job);


// Basic Operators

const country = "USA";
const continent = "North America";
const population = 300;
const language ='English';
console.log(population + 1);

const populationFinland = 10;
console.log(population > populationFinland);

const avgPopulation = 33;
console.log(avgPopulation > population);

const description = 
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;

console.log(description);


const firstName = "Alberto";
const year = 2025;
const birthYear = 1989;
const job = "Programmer"
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old
 ${job}`;

 console.log(jonasNew);



// If, Else Statements

const age = 15;
const canDrive = age >=18;

if (canDrive) {
    console.log("You can drive.");
} else {
    const yearsLeft = 18 - age;
    console.log("You need to be at least 18 years old to drive.")
    console.log(`Wait at least ${yearsLeft} years.`);
}

const birthYear = 1989;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

const country = "USA";
const continent = "North America";
const population = 300;
const language ='English';

let populationDifference;
if (population > 33) {
    populationDifference = population - 33;
    console.log(`${country}'s population is ${populationDifference} million above average.`);
} else {
    populationDifference = 33 - population;
    console.log(`${country}'s population is ${populationDifference} million below average.`);
}


// Falsy values = 0,'',undefined,null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

// if, else if, else statements

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log('23 is a cool number.');
} else if (favorite === 7) {
    console.log("7 is cool too.");
} else {
    console.log("Number is not 23 nor 7");
}

// Logical Operators

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false   ;

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("You are able to drive.");
} else {
    console.log("You are not able to drive.");
}


// Switch statements

const day = "Monday";

switch(day) {
    case "Monday":
        console.log("Plan course structure");
        console.log("Go to coding mmetup");
        break;
    case "Tuesday":
        console.log("Prepare theory videos");
        break;
    case "Wednesday":
    case "Thursday":
        console.log("Record videos");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}



// Ternary Operator

const age = 23;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/
