//give number that divide by 3 from 1 to 100
for(let i = 1; i <= 100; i++ ){
    if(i % 3 === 0){
        console.log(i);
    }
}

//count individual numbers
let num = 123456;

while(num != 0){
    console.log(num%10);
    num = parseInt(num/10);
}

//reverse the given number
let reverse = "";
let number = 123456;

while(number != 0){
    reverse = reverse + String(number % 10); 
    number = parseInt(number/10);
}
console.log("Reversed number = ",reverse);