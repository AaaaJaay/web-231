/*
============================================
; Title: Discussion Board 5.1 – Advanced Arrays
; Author: Jess Cruse
; Date: 25 Dec 2019
; Modified By: Jess Cruse
; Description: simple JavaScript program using a keyed collection array with at least two (2) errors
;===========================================
*/

//Header
const header = require('../header.js');
console.log(header.display("Jess", "Cruse", "Discussion Board 5.1 – Advanced Arrays"));

//START PROGRAM

var spaceHistory = new array();
spaceHistory.set('4 October 1957', 'The worlds first artificial satellite.');
spaceHistory.set('28 May 1959', 'First creatures to return alive from space.');
spaceHistory.set('12 April 1961 ', 'The first man in space.');
spaceHistory.set('16 June 1963', 'The first woman in space.');
spaceHistory.set('18 March 1965', 'First-ever spacewalk.');
spaceHistory.set('20 July 1969', 'First man on the Moon.');
spaceHistory.set('9 April 1971', 'The first space station is launched.');

for (var (key, value) of spaceHistory) {
  console.log(key + ' - ' + value);
}
  console.log('\nLearn more at “10 Key Moments in Space Exploration.” BBC News, BBC, 15 Jan. 2016, https://www.bbc.com/news/science-environment-35326827.');

//EXPECTED OUTPUT
//4 October 1957 - The worlds first artificial satellite. ...
//28 May 1959 - First creatures to return alive from space. ...
//12 April 1961 - The first man in space. ...
//16 June 1963 - The first woman in space. ...
//18 March 1965 - First-ever spacewalk. ...
//20 July 1969 - First man on the Moon. ...
//19 April 1971 - The first space station is launched.
//Learn more at “10 Key Moments in Space Exploration.” BBC News, BBC, 15 Jan. 2016, https://www.bbc.com/news/science-environment-35326827.'

spaceHistory.clear();
spaceHistory.size; // 0

//END PROGRAM
