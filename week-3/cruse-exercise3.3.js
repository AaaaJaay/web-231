/*
============================================
; Title: Exercise 3.3 - Control Statements
; Author: Jess Cruse
; Date: 12 Dec 2019
; Modified By: Jess Cruse
; Description: This program uses a switch statement to return in text what key was entered
;===========================================
*/

//HEADER
const header = require('../cruse-header.js');
console.log(header.display("Jess", "Cruse", "Exercise 3.3 - Control Statements"));

//START PROGRAM

//variable
let eventKeyCode = 13

//using switch statement to evaluate what key was pressed to return the corresponding description
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break;

  case 16:
    console.log('The shift key was pressed.')
    break;

  case 32:
    console.log('The spacebar key was pressed.')
    break;

  case 8:
    console.log('The backspace / delete key was pressed.')
    break;

  default:
    console.log('Unrecognized key.')
    break;
}

//END PROGRAM
