/*
============================================
; Title: Discussion Board 6.1 - Objects and Built-In Objects
; Author: Jess Cruse
; Date: 16 Jan 2020
; Modified By: Jess Cruse
; Description: JavaScript program using object properties with 2 errors
;===========================================
EXPECTED OUTPUT

Make: Jeep, Model: Wrangler, Year: 2002
Make: VW, Model: eGolf, Year: 2016
Make: Subaru, Model: STI, Year: 2008
Make: BMW, Model: F350, Year: 2004
Make: Ford, Model: e36, Year: 1992

Total value of vehicles: 52500
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Discussion Board 6.1 - Objects and Built-In Objects"));

//START PROGRAM

var randomCars = {
  {
    make: 'Jeep',
    model: 'Wrangler',
    year: '2002',
    value: 9000,
  },

  {
    make: 'VW',
    model: 'eGolf',
    year: '2016',
    value: 12000,
  },

  {
    make: 'Subaru',
    model: 'STI',
    year: '2008',
    value: 20000,
  },

  {
    make: 'BMW',
    model: 'F350',
    year: '2004',
    value: 3500,
  },

  {
    make: 'Ford',
    model: 'e36',
    year: '1992',
    value: 8000,
  },
];

var total = 0.0;

randomCars.forEach(function(car) {
  console.log('Make: ' + car.make + ', Model: ' + car.model + ', Year: ' + car.year)
  total += randomCars.value;
});

console.log("\nTotal value of vehicles: " + total);

//END PROGRAM
