/*
============================================
; Title: Assignment 4.4 - Predicates
; Author: Jess Cruse
; Date: 19 Dec 2019
; Modified By: Jess Cruse
; Description: This program compares two number and provides error handling for if the numbers match or not
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Assignment 4.4 - Predicates"));

//START PROGRAM

//Creating a string array of 5 states.
var originalArray = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];
var myState = "Iowa";

//Creating a function called getState with two string parameters.
function getState(state) {
    if (state == myState)  //In the body of the getState function add an if statement to test if the two string parameters match.
      return true;
    else false;
    }

//Display the original contents of the original array
console.log(originalArray)

//Sort and display the contents of the updated array
console.log(originalArray.sort())

//Using the built in filter() function to display the selected value
console.log(originalArray.filter(getState));

//END PROGRAM
