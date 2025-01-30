// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2025 - birthYear;

console.log("Hello,World");

// Task: given an array of temperatures of one day, calculate the
// temperature amplitude. Keep in mind that sometimes there might be
// a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// What is temperature amplitude? Answer:
// the difference between the highest and lowest temp.
// How to compute max temp?
// What's a sensor error?

// 2) Break up the problem into sub-problems
// How to ignore errors?
// Find max value in array
// Find min value in array
// subtract min from max

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];

    if (typeof currTemp !== "number") continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Task 2:
// Function should receive 2 arrays of temps
// 2)How to merge two arrays?

// const array2 = [1, 2, 3];
// const array3 = temperatures.concat(array2);
// console.log(array3);



const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //  C. FIX
    value: Number(prompt("Degrees celsius")),
  };
  //   B. FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A.IDENTIFY
console.log(measureKelvin());

*/

// Challenge
// Given an array of forecaster maximum temperatures,
// the thermometer displays a string with these temps.
// Example: [17,21,23] will print "17C in 1 days...21C in 2 days
// 23C in 3 days ..."
// Test data 1 = [17,21,23]
// Test data 2 = [12,5,-5,0,4]

const printForecast = function (temps) {
  let forecast = "...";
  for (let i = 0; i < temps.length; i++) {
    forecast += `${temps[i]}°C in ${i + 1} days ... `;
  }
  console.log(forecast);
};
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);
