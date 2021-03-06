/*
============================================
; Title: kenney-assignment-5.1.js
; Author: Sean Kenney - I did not use instructor code
; Date: 26 December 2019
; Modified By: Jess Cruse
; Description: Advanced array program that contains
; two errors. This program intentionally has errors.
; Spelling errors aren't included in the two total errors!
; Both errors are syntax errors.
; Code is written based on textbook reading.
; I also referenced MDN Web docs
; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections
;===========================================
*/

const header = require('../header.js'); //replaced with my header file
console . log ( header . display ( "Jess" , "Cruse" , "Exercise 5.1 Advanced Arrays" ));
/***********end including of header*/

//Create a map
var races = new Map ();  //removed createnew and replaced with new

//enter four key value pairs into map
races.set ( 1 , 'Marine Corps Marathon' );
races.set ( 2 , 'Dizzy Goat 12 Hour' );
races.set ( 3 , 'Feast and Feathers Half Marathon' );
races.set ( 4 , 'Hitchcock Experience 101k' );

//print to the console the size of the map
console.log ('\n' + races.size + ' items are in the map' );

//print a blank line
console.log ('\n');

//print to the console the keys and values;
for ( var [key, value] of races) { // replaced semi colon with comma
console.log (key + ' race ' + value);
}
