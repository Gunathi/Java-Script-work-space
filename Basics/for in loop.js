
//create alien object
let alien = {
    name : "Hansani",
    age : 23,
    look : {
        color : 'dark',
        height : 5,
        hair : 'short'
    }
}

//print properties only
for (let key in alien){
    console.log(key);
}

//print properties and their values
for (let key in alien){
    console.log(key, alien[key]);
}

//print properties of look object
for (let key in alien.look){
    console.log(key);
}

//print properties and their values of look object

for (let key in alien.look){
    console.log(key, alien.look[key]);
}