/*
============================================
; Title: Assignment 1.5
; Author: Jess Cruse
; Date: 29 November 2019
; Modified By: <Your name>
; Description: The purpose of this program 
; is to create 3 employee records to demonstrate
; the process of defining and assigning 
; and formating values to a defined variable
;===========================================
*/ 

//Variables required for employee #1
var firstNameEmp1 = "Jess";
var lastNameEmp1 = "Cruse";
var addressEmp1 = "11 Wall Street, New York, NY, 10005";
var payRateEmp1 = 63.8559;
var hireDateEmp1 = new Date (2001, 1, 05);

//Variables required for employee #2
var firstNameEmp2 = "Sutton";
var lastNameEmp2 = "Holmes";
var addressEmp2 = "221 B Baker St, London, England";
var payRateEmp2 = 40.54346;
var hireDateEmp2 = new Date (2014, 0, 06);
//Variables required for employee #3
var firstNameEmp3 = "Drax";
var lastNameEmp3 = "Maximus";
var addressEmp3 = "4059 Mt Lee Dr. Hollywood, CA 90068";
var payRateEmp3 = 50.67932;
var hireDateEmp3 = new Date (2018, 6, 21);

//output for employee #1
console.log (firstNameEmp1);
console.log (lastNameEmp1);
console.log (addressEmp1);
console.log (payRateEmp1.toFixed(1));
console.log (hireDateEmp1.toLocaleDateString());

//output for employee #2
console.log (firstNameEmp2);
console.log (lastNameEmp2);
console.log (addressEmp2);
console.log (payRateEmp2.toFixed(1));
console.log (hireDateEmp2.toLocaleDateString());

//output for employee #3
console.log (firstNameEmp3);
console.log (lastNameEmp3);
console.log (addressEmp3);
console.log (payRateEmp3.toFixed(1));
console.log (hireDateEmp3.toLocaleDateString());