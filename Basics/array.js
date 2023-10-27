//we can split a string into a array
// let words = "My name is Hansani".split(" ");
// console.log(words);

let nums = [1,2,3,4,5];

//get each individual values in the array. create a function which 
//use that values inside the forEach built in function.
nums.forEach((n) => {
    console.log(n);
}); 

nums.forEach((n,i,nums) => { //n => element, i => index , nums = > array
    console.log(i,n);
    //console.log(nums);
});

let even = nums.filter(n => n%2 === 0); //this output the values as an array

console.log(even); //this will print the array

//this will give the element one by one
nums.filter(n => n%2 === 0).forEach((n) => {
                                console.log(n);
                            });


let number = new Set(); //create new set
number.add(1); //add values to the set
number.add(1);
number.add(2);
number.add(3);
number.add(4);

//print each element in set using for of loop
for(let y of number)
    console.log(y); 

//print each element in set using forEach method
number.forEach(y => {
    console.log(y);
});

//we can chech whether special value(that we want to check) is in the set using has() method
console.log(number.has(2)); //true
console.log(number.has("Hansani")); //false
