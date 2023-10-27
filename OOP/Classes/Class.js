//Creating the class
class Train {
    //constructor function
    constructor(color, boxes, lightsOn){
        //properties
        this.color = color;
        this.boxes = boxes;
        this.lightsOn = lightsOn;
    }

    turnOffLights() {
        if(this.lightsOn == true){
            this.lightsOn = !this.lightsOn;
            console.log(this.lightsOn);
        }
    }

    getPrototype() {
        let proto = Object.getPrototypeOf(this); //getPrototypeOf(this) is a built in method.
        console.log(proto);
    }
}

//Creating new instance
let myTrain1 = new Train("Blue", 10, true);
console.log(myTrain1); //Train { color: 'Blue', boxes: 10, lightsOn: true }

let myTrain2 = new Train("Red", 8, false);
console.log(myTrain2); //Train { color: 'Red', boxes: 8, lightsOn: false }

let myTrain3 = new Train("Black", 12, true);

//Calling the method we created inside the Train class
myTrain3.turnOffLights(); //true
myTrain3.getPrototype(); //