/*
============================================
; Title: Exercise 5.3 - Object Collections
; Author: Jess Cruse
; Date: 28 Dec 2019
; Modified By: Jess Cruse
; Description: Using the ES5 standards and building Array-Like Object collections
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Exercise 5.3 - Object Collections"));

//START PROGRAM

//Creating an array of five (5) composer objects with the following fields: firstName, lastName, genre, rating (acceptable values are between 1 and 10)
var famousComposers = [
    {  //Last Name: Beethoven, Genre: Classical, Rating: 8
    firstName: 'Ludwig',
    lastName: 'Beethoven',
    genre: 'Classical',
    rating: 8,
    },

    {  //Last Name: Mozart, Genre: Classical, Rating: 10
    firstName: 'Johannes',
    lastName: 'Mozart',
    genre: 'Classical',
    rating: 10,
    },

    {  //Last Name: Bach, Genre: Classical, Rating: 9
    firstName: 'Johann',
    lastName: 'Bach',
    genre: 'Classical',
    rating: 9,
    },

    {  //Last Name: Haydn, Genre: Classical, Rating: 6
    firstName: 'Franz',
    lastName: 'Haydn',
    genre: 'Classical',
    rating: 6,
    },

    {  //Last Name: Schubert, Genre: Classical, Rating: 5
    firstName: 'Franz',
    lastName: 'Schubert',
    genre: 'Classical',
    rating: 5,
    },
  ];
//OUTPUT
/*
  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5
*/


console.log('-- COMPOSERS --'); //list heading

famousComposers.forEach(function(composer) {//Using JavaScripts built-in forEach() function to iterate over the composer objects
  console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)  //output iteration results
});

//END PROGRAM
