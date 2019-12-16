/*============================================
; Title: dawson-assignment-3.1
; Author: Professor Krasso
; Date: 09 December 2019
; Modified by: Jess Cruse
; Description: Control Statements
===========================================*/

// Header
  //I replaced the reference to the header as I don't have that file

  //const header = require('../dawson-header.js');
  const header = require('../header.js');
  console.log(header.display("Tisa", "Dawson", "Week 3"));

//START PROGRAM

//This if statement should display to advise if the individual is 18 or old and eligible to vote
var age = "4" ;

if (age > 17) { //changed the '=' to '>'
  console.log ( "This individual is old enough to vote" ); //removed '</br>'
}
else {
  console.log("This individual is not old enough to vote")
}

//END PROGRAM
