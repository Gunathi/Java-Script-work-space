//USE OF BUILT-IN NUMBER CONSTANTS
let x = 10;

console.log(x*Math.PI); //Use math.PI 
console.log(Math.E*Math.E); //Use math.E

//USE ROUNDING METHODS

let y = 12.254;

console.log(Math.round(y)); //Normal Round
console.log(Math.ceil(y)); //Round up to the closet integer
console.log(Math.floor(y)); //Round down to the closet integer
console.log(Math.trunc(y)); //Trim the decimal, leaving only integer

//aRITHMETIC AND CALCULUS METHODS

console.log(Math.pow(2,3)); //2^3
console.log(Math.sqrt(100)); //100^(0.5)
console.log(Math.cbrt(8)); //Cuble root 8^(1/3) = 2
console.log(Math.abs(-10)); //Absolute value |-10| = 10

//LOGARITHMIC METHODS

console.log(Math.log(10)); 
console.log(Math.log10(10)); 
console.log(Math.log2(4)); 

//RETURN THE MINIMUM AND MAXIMUM VALUES

let a = Math.max(19,21,10,4,5); //Maximum value
console.log(a);

let b = Math.min(25,52,16,865); //Minimum value
console.log(b);
 
console.log(Math.random()); //Generate random number between 0 and 0.99
