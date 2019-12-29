/*
============================================
; Title:  padilla-discussion-board-main.js
; Author: Angel Padilla
; Date:   25 Dec 2019
; Modified By: Jess Cruse
; Description: Program that contains two errors
;===========================================
*/

// logging header
const header = require('../header.js');  //added reference
console.log(header.display("Angel", "Padilla", "Exercise 5.1"));

// declaring cars array of objects;
var cars = [
  {
    make: "Audi",
    model: "S3",  //added comma
  },

  {
    make: "BMW",
    model: "M3",  //added comma
  },

  { //had bracket [ instead of curly brace {
    make: "Ford" ,
    model: "Escort",  //added comma
  }
];

// returning an a string array of the map() the is concatenating text with the make and model of the cars array
var carInfo = cars.map(x => { //M was uppercase and not recognized
  return `The make is: ${x.make} and the model is: ${x.model} ` ;
});

// Logging the result of carInfo
console.log (carInfo);
