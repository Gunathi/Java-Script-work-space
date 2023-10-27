//Designing inheritance structure

//Super Super class 
class Animal{
    constructor(color, energy){
        this.color = color;
        this.energy = energy;
    }

    sleep(){
        this.energy = this.energy + 20;
        console.log(this.energy);
    }

    isActive(){
        if(this.energy <= 0){
            this.sleep();
        }else if(this.energy > 0){
            this.energy = this.energy -20;
            console.log(this.energy);
        }
    }

    getColor(){
        console.log(this.color);
    }
}

//First Super class
class Cat extends Animal{
    constructor(sound, canJumpHigh, canClimbTrees, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){
        console.log(this.sound);
    }
}

//Second Super Class
class Bird extends Animal{
    constructor(sound, canFly, color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }

    makeSound(){
        console.log(this.sound);
    }
}

//First Subclass of first super class
class HouseCat extends Cat{
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }else{
            console.log(this.houseCatSound);
        }
    }
}

//Second Sub class of first super class
class Tiger extends Cat{
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, energy, color){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }else{
            console.log(this.houseCatSound);
        }
    }
}

//Sub class of the second super class
class Parrot extends Bird{
    constructor(canTalk, sound, canFly, color, energy){
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        }
        if(this.canTalk) {
            console.log("I can talk!");
        }
    }
}


//Crating new objects

let Animal1 =new Animal("Black", 100);
let Cat1 = new Cat("Purr", true, true, "Brown", 90);
let Kitty = new HouseCat("Meow", "Purr", false, true, "Yellow", 80);

console.log(Cat1);

Kitty.isActive(); //60
Kitty.isActive(); //40
Kitty.isActive(); //20
Kitty.isActive(); //0
Kitty.isActive(); //20
Kitty.isActive(); //0
Kitty.isActive(); //20

Kitty.sleep(); //40

Cat1.makeSound();
Kitty.makeSound(true); //Purr
Kitty.makeSound(false); //Meow

let Bird1 = new Bird("chirp", true, "black", 50);
let Polly = new Parrot(false, "Shriek", true, "green", 50);

Polly.makeSound(true); //Shriek
