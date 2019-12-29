/*
============================================
; Title: Exercise 5.2 - ES5 Built-In Functions
; Author: Jess Cruse
; Date: 28 Dec 2019
; Modified By: Jess Cruse
; Description: Using the forEach() method to simplify the iteration process and improve readability for a list of food
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 5.2 - ES5 Built-In Functions"));

//START PROGRAM

var foods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];  //Creating a String array of 5 food types

//OUTPUT
foods.forEach(function(food) {console.log(food)});  //Using forEach() function to iterate over the array and output the results

//END PROGRAM
