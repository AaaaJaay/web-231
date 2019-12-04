/*
============================================
; Title:  cruse-exercise 2.3
; Author: Jess Cruse
; Date:   3 December 2019
; Description: Creating 4 functions which
; combines first name & last name into a full name
; combines the year, month, and day into a date
; formats a number with a fixed number of decimal points
; converts a string to an int
; converts a string to a float
; the output includes the class header
; and the results of each function in an intro statement
;===========================================
*/

//Referencing the function to format my header is located
const header = require('./cruse-header.js');

//creating a function called fullName with two parameters (first and last name) which returns a single string.
fullName.jess = "Jess";
fullName.cruse = "Cruse";

function fullName() {
  return fullName.jess + " " + fullName.cruse;
}

//creating a function called dateWriter with three parameters (year, month, and day) and return a new date using the passed-in values
function dateWriter(year, month, day) {
  var dateFunction = new Date (year, month - 1, day);
  return dateFunction.toLocaleDateString('en-US');
}

//creating a function called formatNumber with two parameters (number and numOfFixedPositions) which returns the number with the fixed positions you specified in the second parameter
function formatNumber (number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

//creating a function called convertToInt which parses a string and return the value as an integer
function convertToInt(age){
  return parseInt(age);
}

//creating a function called convertToFloat which parses a string and return the value as a float
function convertToFloat (savingsGoal){
  return parseFloat(savingsGoal);
}


//output
console.log(header.display("Jess", "Cruse", "Assignment 2.4 - Functions"));

console.log("\nHello my name is " + fullName() + "!");

console.log("\nToday's date is " + dateWriter(2019, 12, 3) + " and the current temperature is " + formatNumber(40.231, 1) + " degrees.");

console.log("\nI am " + convertToInt("39") + " years old and my savings account goal is " + convertToFloat("3259.75") + " dollars.");

//end program
