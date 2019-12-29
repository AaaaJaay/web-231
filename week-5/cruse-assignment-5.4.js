/*
============================================
; Title: Assignment 5.4 - Filtering/Reducing Complex Data Structures
; Author: Jess Cruse
; Date: 28 Dec 2019
; Modified By: Jess Cruse
; Description: Transforming a data set of composers into meaningful lists by genre and rating
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "5.4 - Filtering/Reducing Complex Data Structures"));

//START PROGRAM

  //Creating an array of five (5) composer objects with the following fields: firstName, lastName, genre, rating (acceptable values are between 1 and 10)
  var famousComposers = [
      {  //Last Name: Beethoven, Genre: Classical, Rating: 8
      firstName: 'Ludwig van',
      lastName: 'Beethoven',
      genre: 'Classical',
      rating: 8,
      },

      {  //Last Name: Mozart, Genre: Classical, Rating: 10
      firstName: 'Wolfgang Amadeus',
      lastName: 'Mozart',
      genre: 'Classical',
      rating: 10,
      },

      {  //Last Name: Bach, Genre: Classical, Rating: 9
      firstName: 'Johann Sebastian',
      lastName: 'Bach',
      genre: 'Classical',
      rating: 9,
      },

      {  //Last Name: Haydn, Genre: Classical, Rating: 6
      firstName: 'Joseph',
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


  //Using JavaScripts built-in map() function, create a filtered array of composers by rating (review the starter code for output expectations).
  console.log('-- COMPOSER BY RATING --'); //list heading

    var composerRatings = new Map();  //creating my map object to hold composers by ratings

    composerRatings =  famousComposers.filter(function(composer) {  //setting my map object to the filtered list
      return composer.rating >= 5;  //filtering by the rating genre
    });

    composerRatings.forEach(function(composer) {//Using JavaScripts built-in forEach() function to iterate over the composer objects
      console.log('Rating: ' + composer.rating + '\nComposer: ' + composer.lastName + '\n');  //formatting the final output
  });


  //Using JavaScripts built-in map() function, create a filtered array of composers by genre (review the starter code for output expectations).
  console.log('-- COMPOSER BY GENRE --'); //list heading

    var classicalComposers = new Map();  //creating my map object

    classicalComposers =  famousComposers.filter(function(composer) {  //setting my map object to the filtered list
      return composer.genre == 'Classical';  //filtering by the Classical genre
    });

    classicalComposers.forEach(function(composer) {//Using JavaScripts built-in forEach() function to iterate over the composer objects
      console.log('Genre: ' + composer.genre + '\nComposer: ' + composer.lastName + '\n');  //formatting the final output
  });


  //Using JavaScripts built-in forEach() function, iterate over each array and output the results.
  console.log('-- COMPOSERS --'); //list heading

    famousComposers.forEach(function(composer) {//Using JavaScripts built-in forEach() function to iterate over the composer objects
      console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)  //output iteration results
  });

//END PROGRAM
