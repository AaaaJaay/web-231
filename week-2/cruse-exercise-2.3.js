/*
============================================
; Title:  cruse-exercise 2.3
; Author: Jess Cruse
; Date:   3 December 2019
; Description: Using a function to return
; my name
;===========================================
*/
/*
  Expected output:

  FirstName LastName
  Exercise 2.3
  Today's Date

  Hello FirstName LastName!

  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//function properties
myName.jess = "Jess";
myName.cruse = "Cruse"

//function
function myName() {
  return myName.jess + " " + myName.cruse;
}

//output
console.log("Hello " + myName() + "!");

//end program
