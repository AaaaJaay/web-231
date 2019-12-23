/*
============================================
; Title: Saeou-discussion-arrays-4.1.js
; Author: Krasso
; Date: 17 December 2019
; Modified By: Jess Cruse
; Description: find the two error in javascript arrays
;===========================================
*/
//Header
const header = require('../header.js');  //pointed to general header and added .js
console.log(header.display("Joann", "Saeou", "discussion 4.1  arrays") + '\n');

//BEGIN PROGRAM

//create an array
var meals = ['breakfast', 'lunch', 'dinner'];
var weather = ['spring', 'summer', 'fall', 'winter'];

console.log(meals, weather);  //removed =

//empty an arrays
var meals = ['breakfast', 'lunch', 'dinner'];
meals.length = 0;  //setting to 0 to empty array

var weather = ['spring', 'summer', 'fall', 'winter'];
weather.length = 0;  //setting to 0 to empty array

console.log(meals, weather);  //updating to display the empty array

//clone an array
var meals = ['breakfast', 'lunch', 'dinner'];
var cloneMeals = meals.slice(); //breakfast, lunch, dinner

var weather = ['spring', 'summer', 'fall', 'winter'];
 var cloneWeather = weather.slice();  //should be a . instead of a / and changed degree to slice

 //logging variables to console
 console.log(cloneWeather + ',' + cloneMeals);  //removed = and updated to the cloned array & moved , to ''


//an array to get last item
var meals = ['breakfast', 'lunch', 'dinner'];
console.log(meals.slice(-1)[0]); //dinner

var weather = ['spring', 'summer', 'fall', 'winter'];
console.log(weather.slice(-1)[0]); //removing syntax and adding to get to last item

//didn't see function getting used so removed it

//END PROGRAM
