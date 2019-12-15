 /*
============================================
; Title: Assignment 3.4 - Loops
; Author: Jess Cruse
; Date: 12 Dec 2019
; Modified By: Jess Cruse
; Description: This program compares a selected number to a 10 randomly generated numbers and provides the results
;===========================================
*/

//Header
  const header = require('../cruse-header.js');
  console.log(header.display("Jess", "Cruse", "Assignment 3.4 - Loops"));

//START PROGRAM

  //VARIABLES
    var myNumber = 3;  //static number selected by the end user
    var secondNumCompare;  //placeholder for random number in loop which will be assigned in the LOOP section

  //FUNCTIONS
    function match(a,b) {  //creating a function to compare two numbers to see if they match
      if (a == b)
        return true;
      else
        return false;
    }

    function logMismatch(c,d) {  //message for a mismatch
      console.log(c + " does not match " + d + "!");
    }

    function logMatch(e,f) {  //message for a match
      console.log(e + " does match " + f + "!");
    }

    function randomNumber() {  //random number generator
      return Math.floor((Math.random() * 10) + 1)
    }

  //OUTPUT
    console.log('-- DO THE NUMBERS MATCH GAME --');  //heading for the results

    for (var x = 0; x < 10; x++) {  //looping through the comparison of myNumber and a randomly generated number 10 times

      secondNumCompare = randomNumber();  //randomly selecting the numbers for comparison

      if (match(myNumber, secondNumCompare) == true)  //comparing if my number matches the randomly generated number
        logMatch(myNumber,secondNumCompare);  //providing a response for a match

      else if (match(myNumber, secondNumCompare) == false)  //comparing if my number does not match the randomly generated number
        logMismatch(myNumber,secondNumCompare);  //providing a response for a mismatch
    }

//END PROGRAM
