/*
============================================================
; Title: Discussion Board 4.1 - Arrays
; Author: Pascal Pascarella
; Date: 19 December 2019
; Modified By: Jess Cruse
; Description: This program displays an array of Star Wars
; films, their respective run-times in minutes, as well as
; what percent of one day would be spent watching each film.
  Expected Output:
Pascal Pascarella
Discussion Board 4.1 - Arrays
Date: 12/19/2019
A New Hope,121,8%
The Empire Strikes Back,124,9%
Return of the Jedi,131,9%
The Phantom Menace,136,9%
Attack of the Clones,142,10%
Revenge of the Sith,140,10%
============================================================
*/

// Header - adjusted header to use general header
const header = require('../header.js'); // Links to header file

console.log(header.display("Pascal","Pascarella","Discussion Board 4.1 - Arrays")); // Prints header
console.log("\n") // Line break


// Program Start

// Establish Array Movie Names and Run-Times
var movieMinutes = [121, 124, 131, 136, 142, 140];

var movieName = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith'];


// Converts Array Values (in minutes) Into Percentage of 24 Hours
for (var i = 0; i < movieMinutes.length; i++) {
  var percentage = ((movieMinutes[i] / 1440) * 100).toFixed();  //removed [1]
  console.log(movieName[i] + ', ' + movieMinutes[i] + ', ' + percentage + '%');
}

// Program End

