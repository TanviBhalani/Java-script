//primitive data types :


let str = "don't use this";
let num = 23;
let bool = true;
let nullD = null;
//undefined
// console.log(b);

//
// bigint(big integer)

let sym = Symbol("sym");

console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(bool));
console.log(typeof(nullD));
console.log(typeof(sym));


let a = prompt("Enter a number"); // string
let b = confirm("Confirm this or not"); // boolean

alert(typeof(b))

//Implicit type conversion
let c = prompt("Enter your Birth year : ")
alert(2025-c)


//== and === difference  

// let a = "22";
// let b = 22;

// if(a==b){
//     console.log("Hello");
// }
// if(a===b){
//     console.log("Bye bye");
// }