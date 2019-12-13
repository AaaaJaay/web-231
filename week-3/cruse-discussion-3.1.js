/*
============================================
; Title: Discussion 3.1
; Author: Jess Cruse
; Date: 12 Dec 2019
; Modified By: Jess Cruse
; Description: This program demonstrates the
; use of else if in JavaScript.  It has 2+
; errors which need resolved.
;===========================================
*/

//Header
const header = require('./cruse-header.js');
console.log(header.display("Jess", "Cruse", "Discussion 3.1"));

//Start Program
var x = 2;
var y = 4;

//evaluating the relationship of the numbers
if (x == y) {
  console.log("x and y are the same");  //response of the numbers are the same
}
else if (x > y); {
  console.log(x + " is greater than " + y); //response if x is greater than y
}
else if (y > x) (
  console.log(y + " is greater than " + x);  //response if y is greater than x
)
else
  console.log("So sorry! Something didn't go as expected.");  //error message if above logic isn't met

  //END Program
