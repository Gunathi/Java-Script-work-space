//INHERITANCE 

//Superclass
function Vehicle(model, year){
    this.model = model,
    this.year = year,
    this.park = function(){
        return this.model + "-" + this.year + " is going to park";
    }
}

//Subclass
function Car(model, year){
    Vehicle.apply(this, arguments); //calling superclass properties and functions
}

//create new object targetting existing object
Car.prototype = Object.create(Vehicle.prototype); //create empty object referring Vehicle prototype. 
Car.prototype.constructor = Car;

let v = new Vehicle("Benz", 2000);
let c = new Car("BMW", 1998);

v.__proto__ == Vehicle.prototype; //true
c.__proto__ == Car.prototype; //true 

//testing inheritance 
Vehicle.prototype.vTest = 100;
c.vTest; //100 
//superclass properties can access through subclass object

Car.prototype.cTest = 200; 
v.cTest; //undefined 
//subclass properties can't access through superclass object. 

v.park(); //Benz-2000 is going to park 
c.park(); //BMW-1998 is going to park 

//c can access park function in vehicle class 
