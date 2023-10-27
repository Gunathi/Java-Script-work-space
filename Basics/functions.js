let add = function(x,y){
    return x + y;
}

//first method to call the above function
console.log(add(3,5)); //directly print

//second method to call the above function

let sum = add(4,9);
console.log(sum);

//third method to call the above function

let addition = add;
console.log(addition(3,9));

