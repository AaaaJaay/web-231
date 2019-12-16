/*
============================================================
; Title: Discussion Board 3.1 - Control Statements
; Author: Pascal Pascarella
; Date: 11 December 2019
; Modified by: Jess Cruse
; Description: This program generates 3 columns of integers
; that increase up to 4 as the program loops.
============================================================
*/

// Header
  //I replaced the reference to the 'pascarella' header as I don't have that file

  //const header = require('../pascarella-header.js');
  const header = require('../header.js');
  console.log(header.display("Pascal","Pascarella","Control Statements"));


// Start Program
  //replaced the ',' after the 5 with the expected ';'
  //changed the '>' to '<' as the logic was adding 1 to 'y' when 'y' was grater than 5
  //but 'y' is initially set to 1 so it will never loop
  for (let y = 1; y < 5; y++) // Increases "Y"  column by 1 every loop
    for (let x = 1, z = 1; x < 5; x++, z++) // Increases "X" column by 1 every loop, added Z for the 3rd column
      console.log(x, y, z) // Output to console

// End Program
