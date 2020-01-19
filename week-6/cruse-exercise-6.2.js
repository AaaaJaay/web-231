/*
============================================
; Title: Exercise 6.2 - Exception Handling
; Author: Jess Cruse
; Date: 16 Jan 2020
; Modified By: Jess Cruse
; The try/catch/finally statement is how developers gracefully "handle" runtime exceptions.
;===========================================
EXPECTED OUTPUT

  FirstName LastName
  Exercise 6.2
  Today's Date

  Catch clause: <your custom message goes here>
  Finally clause reached...
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 6.2 - Exception Handling"));

//START PROGRAM

try {
  var x = {x:1};

  if (x.hasOwnProperty("y") == false) throw "Does not have the property we are looking for";
  console.log(x.hasOwnProperty("y"));
}

catch (err) {
  console.log("Catch clause: " + err);
}

finally {
  console.log("Finally clause: End of program ...");
}

//END PROGRAM
