/*
============================================
; Title: Exercise 3.2 - Pattern Matching Functions
; Author: Jess Cruse
; Date: 12 Dec 2019
; Modified By: Jess Cruse
; Description: This program compares two number and provides error handling for if the numbers match or not
;===========================================
*/

//Header
const header = require('../cruse-header.js');
console.log(header.display("Jess", "Cruse", "Exercise 3.2 - Pattern Matching Functions"));

//START PROGRAM

//setting two sets of 6 numbers to compare
var firstNumCompare = [1, "purple", 3, 4, "red", 6];
var secondNumCompare = [1, "purple", 3, 3, "green", 5];

//FUNCTIONS
//creating a function to compare two numbers to see if they match
function match(a,b) {
  if (a == b)
    return true;
  else
    return false;
}

//message for a mismatch
function logMismatch(c,d) {
  console.log("The numbers you entered (" + c + ", " + d + ") do not match!");
}

//message for a match
function logMatch(e,f) {
  console.log("The numbers you entered (" + e + ", " + f + ") match.");
}

// comparing the sets of numbers
for(var i = 0; i < firstNumCompare.length; i++)
if (match(firstNumCompare[i], secondNumCompare[i]) == true)
  logMatch(firstNumCompare[i],secondNumCompare[i]);
else if (match(firstNumCompare[i], secondNumCompare[i]) == false)
  logMismatch(firstNumCompare[i],secondNumCompare[i]);

  //END PROGRAM
