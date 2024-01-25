//task.1//

for (let i = 0; i < 100; i++){
    console.log(i);
}  


//task.2//

let i = 0;
while (i < 50) {
    console.log(i); 
    i++;
}

//task.3//

let name = ["ana", "nini", "keto", "keso", "mariami"];
name.pop( );
console.log(name);

name.shift();
console.log(name);

name.unshift("giorgi");
console.log(name);

name.push("nika");
console.log(name);



//task.4//
let nums = []
for  (let i = 1; i < 1000; i++){
    nums.push (i * 1);
}

console.log(nums);


//task.5//

let variables = [1,2,3,4,5];
let sum = 0;
for ( let i = 0; i < variables.length; i++){
    let numbers = variables[i];
    sum = sum + numbers;
}

//task.6//

function isEven(number){
    return number  % 2 === 0;
}
 
console.log(isEven(4));  // true//
console.log(isEven(7));  //false//


//task.7//

function converToLowercase(string){
    return string.toLowerCase();
}

console.log(convertToLowercase("MY NAME IS JOHN"));

//მგონი ეს არასწორია,ვერ გავაკეთე:))//

//task.8//

function filterEvenNumbers (numbers){
    return numbers.filter(number => number % 2 === 0);
}
 let numbers = [1,2,3,4,5,6,7,8,9];
 console.log(filterEvenNumbers(numbers));
 //ესეც :))//







