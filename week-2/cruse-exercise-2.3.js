/*
============================================
; Title:  cruse-exercise 2.3
; Author: Jess Cruse
; Date:   3 December 2019
; Description: Using a function to return
; my name
;===========================================
*/

//function properties
myName.jess = "Jess";

//function
function myName() {
  return myName.jess;
}

//Identifying where the fuction is located
const header = require('./cruse-header.js');

//Using the function to format
console.log(header.display(myName(), "Cruse", "Exercise 2.3 - Function Properties"));

//output
console.log("\n");
console.log("Hello " + myName() + "Cruse!");

//end program
