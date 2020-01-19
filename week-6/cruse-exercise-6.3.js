/*
============================================
; Title: Exercise 6.3 - Object Literals
; Author: Jess Cruse
; Date: 16 Jan 2020
; Modified By: Jess Cruse
; Create an object literal for a ticketing system
;===========================================
EXPECTED OUTPUT
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 6.3 - Object Literals"));

//START PROGRAM

var ticket = {

  id: "101",

  name: "Help Desk Support",

  requestor: "Bob Jones"

};


console.log("id: " + ticket.id + ", name: " + ticket.name + ", requestor:" + ticket.requestor);
