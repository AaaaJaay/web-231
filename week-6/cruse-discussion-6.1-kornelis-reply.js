/*
============================================
; Title: Discussion 6.1
; Author: Izabella Kornelis
; Date: 14 January 2020
; Modified By: Jess Cruse
; Description: A broken JavaScript program using object properties with at least (2) errors.
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 6.2 - Exception Handling"));

//START PROGRAM

// defines the pet object
var pet = {
  animal: "cat",
  breed: "Maine Coon",
  color: "orange",
  age: "2",
  name: {
    firstName: "Billy",
    lastName: "Catlin",
  }
};

var oldPet = {
  animal: "cat",
  breed: "American Shorthair",
  color: "black",
  age: "10",
  name: {
    firstName: "Cheaka",
    lastName: "Choo",
  }
}

// Output
// expected output "Billy is a orange Maine Coon who is 2."
console.log (pet.name.firstName + " is a " + pet.color + " " + pet.breed + " who is " + pet.age + ".")

// expected output "Cheaka is a black American Shorthair who is 10."
console.log (oldPet.name.firstName + " is a " + oldPet.color + " " + oldPet.breed + " who is " + oldPet.age + ".")

// end program
