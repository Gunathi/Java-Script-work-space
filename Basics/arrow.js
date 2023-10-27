let add = (a,b) => {
    if(a < 0){
        a *= -1;
    }
    if(b < 0){
        b *= -1;
    }

    return a+b;
}

let sum = add(-2,-3);
console.log(sum);