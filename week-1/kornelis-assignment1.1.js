/*
============================================
; Title: Assignment 1.1
; Author: Izabella Kornelis
; Date: 27 November 2019
; Modified By: Jess Cruse
; Description: A simple JavaScript program using values and variables with at least two errors.
;===========================================
*/

//program start

//variable declaration
var x = 10;  //removed 2nd equal sign

//creating function
function multiply(num) {
    var product = x*x;  //num is not a declared variable, replacing with x
    return product;
};

//output
console.log(multiply(x));

//end program