// let num = 1;

// function abc(){
//     console.log(num);
//     num++;
//     abc();
// }

// abc();

function factorial(n){
    if(n === 0){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}

let numb = 5;

let fact = factorial(numb);
console.log(fact);

