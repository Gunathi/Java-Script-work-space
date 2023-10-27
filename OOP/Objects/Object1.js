//creating assistantManager object with 4 properties and their values. 
let assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmart: 30,
    health: 40
};


console.log(assistantManager.health); //console loging value of assistantManager's health.
console.log(assistantManager.streetSmart); //value before modified.

//Changing values of properties. 
assistantManager.streetSmart = 10;

console.log(assistantManager.streetSmart); //value after modified. 

//creating house object using another method.
let house = {}; //create empty object.

house.rooms = 4; //declare properties using dot notation. 
house.color = "pink";
house.priceUSD = 200000;

console.log(house.color); //console loging value of house's color.

house.color = "White"; //Changing values of properties. 

console.log(house.color); //value after modified.

//creating car object using another method.
let car = {};

car["brand"] = "Benz"; //declaring properties using brackets notation.
car["priceUSD"] = 25000;
car["color"] = "black";

console.log(car.brand); //Access property using dot notation.
console.log(car["color"]); //Access property using brackets notation.