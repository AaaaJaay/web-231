/*
============================================
; Title:  header.js
; Author: Jess Cruse
; Date:   3 December 2019
; Modified By: <Your name>
; Description: Displays a formatted header
;===========================================
*/

/*
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
	new Date().toLocaleDateString('en-US')

	return output
}
