//This is the super class
class Train {
    
    constructor(color, boxes, lightsOn){
        
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
        let proto = Object.getPrototypeOf(this); 
        console.log(proto);
    }
}

//create sub class highSpeed and extends it with Train super class
class highSpeed extends Train {
    constructor(Speed, Passengers, color, lightsOn, boxes){
        super(color, boxes, lightsOn); //what properties inherit from super class to this subclass
        //properties that unique to this sub class
        this.Speed = Speed;
        this.Passengers = Passengers;
    }
    //add a method that specify to the highSpeed subclass
    increaseSpeed(){
        for(let i = 0; i < 10; i++){
            this.Speed = this.Speed + 1;
        }
        console.log(this.Speed);
        
    }
}

let highSpeed1 = new highSpeed(1000, 120, "black", true, 18);

console.log(highSpeed1);
highSpeed1.increaseSpeed();