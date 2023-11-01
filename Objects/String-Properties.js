let name = "Hansani Nimasha";

console.log(name.length); // length of the string name
console.log(name.charAt(0)); //Character in the index 0

let fname = "Hansani ";
let mname = "Nimasha";

console.log(fname.concat(mname)); //concatenate the strings fname and mname.

console.log(fname.indexOf('s')); //returns the location of the first position that matches the character

console.log(fname.lastIndexOf('a')); //return the location of the last position that mathces the character.

let split = fname.split('a'); //chops the string into substrings in he given character. 
console.log(split); 

let FNAME = fname.toUpperCase(); //change to UPPERCASE letters
let MNAME = mname.toLowerCase(); //change to LOWERCASE letters

console.log(FNAME);
console.log(MNAME);
