/*
============================================
; Title: Discussion Board 6.1 - Objects and Built-In Objects
; Author: Clayton Stacy
; Date: 16 Jan 2020
; Modified By: Jess Cruse
; Description: JavaScript program using object properties with 2 errors
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 6.2 - Exception Handling"));

//START PROGRAM

//Declare an object with crew positions and names
const crew = {captain: 'Dallas',science: 'Ash', warrant: 'Ripley'}

//Try to reassign the object and catch the built in javascript error

try {  //removed the (crew) from outside the curly brackets
  crew = {captain: 'Ripley'};
}

catch (err) {  //changing out error for err so we have the right syntax to catch the error message
  console.log("Catch clause: " + err);
}

finally {  //adding finally to as it should be executed regardless of the try / catch result
  console.log("Finally clause: End of program ...");
}

//Log the crew object to the console.
console.log(crew);

//END PROGRAM
