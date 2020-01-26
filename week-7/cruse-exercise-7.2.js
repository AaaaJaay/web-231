/*
============================================
; Title: Exercise 7.2 - Constructor Functions
; Author: Jess Cruse
; Date: 26 Jan 2020
; Modified By: Jess Cruse
; Description: In the constructor example, a book object is created as a function with two arguments
; and instantiated using the "new" keyword.  A new instance of the object is created and its properties are assigned
; based on the parameterized arguments.  Properties are accessed through either "dot" or "index" notation.
; Under most circumstances, constructor objects are preferred for representing objects with behaviors and object
; literals are preferred for non-behavioral or "static" objects.
;
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 7.2 - Constructor Functions"));

//START PROGRAM

/*Create an employee constructor object with four (4) parameters/fields (id, firstName, lastName, title)*/
function employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

/*Populate an array with five (5) employee objects*/
var employees = [
  //1 Thomas Edison Software Engineer
  new employee(1, "Thomas", "Edison", "Software Engineer"),

  //2 Benjamin Franklin Programmer
  new employee(2, "Benjamin", "Franklin", "Programmer"),

  //3 Nikola Tesla Project Manager
  new employee(3, "Nikola", "Tesla", "Project Manager"),

  //4 Charles Babbage Product Manager
  new employee(4, "Charles", "Babbage", "Product Manager"),

  //5 Alexander Bell Business Analyst
  new employee(5, "Alexander", "Bell", "Business Analyst")

];

/*Loop over the array and output the results*/
console.log("-- EMPLOYEES --"); //list heading

employees.forEach(function(employee) {//Using JavaScripts built-in forEach() function to iterate over the composer objects
  console.log(employee.id + " " + employee.firstName + " " + employee.lastName + ' ' + employee.title)  //output iteration results
});

//END PROGRAM
