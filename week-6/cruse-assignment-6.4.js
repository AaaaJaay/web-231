/*
============================================
; Title: Assignment 6.4 - Nested Object Literals
; Author: Jess Cruse
; Date: 16 Jan 2020
; Modified By: Jess Cruse
; Creating an object literal ticket with a nested object literal person
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Assignment 6.4 - Nested Object Literals"));

//START PROGRAM
var ticket = {  //creating the ticket object and related properties
  id: "105",
  name: "Help Desk Support",
  dateCreated: '01/19/2020',
  priority: "medium",
  person: {  //nesting the properties for the person object
    id: "201",
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer I"
  }
};

function employee () { //Creating a function to display the employee details so the final output is readable
  return ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ")";
}

//OUTPUT

console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + employee() + ".");

//END PROGRAM
