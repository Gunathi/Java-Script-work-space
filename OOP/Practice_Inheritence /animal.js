function Animal(id, name){
    this.id = id,
    this.name = name,
    this.cry = function(){
        return this.id + "-" + this.name + " crying so hard.";
    }
}

function Cat(id, name){
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

let a = new Animal("001", "Dobby");
let c = new Cat("003", "Tom");

c.cry();
