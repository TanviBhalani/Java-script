//Implicit Datatype:
//1.
let result1 = '5' + 2;
console.log(result1); // "52" → 2 is converted to string

//2.
let result3 = '6' * '2';
console.log(result3); // 12 → both strings converted to numbers



//Explicit Datatype:
//3.
let str = "123";
let num = Number(str);  // 123
console.log(num, typeof num); // 123 'number'

//4.
let bool = true;
console.log(Number(bool)); // 1
console.log(Number(false)); // 0


//Ladder Statement:

//5.
let digit = Number(prompt("Enter a Number: "))

if(digit > 0){
    alert("Positive Number.")
}
else if(digit < 0){
    alert("Negative Number.")
}
else{
    alert("Zero")
}


//6.
let age = Number(prompt("Enter your age: "))

if(age < 13){
    alert("Child")
}
else if(age < 20){
    alert("Teenager")
}
else if(age < 60){
    alert("Adult")
}
else{
    alert("Senior Citizen")
}


//Nested
//7.
let math = 65;
let science = 75;

if (math >= 33) {
  if (science >= 33) {
    console.log("Passed in both subjects");
  } else {
    console.log("Failed in Science");
  }
} else {
  console.log("Failed in Math");
}


//8.
let num1 = Number(prompt("Enter Number 1 "))
let num2 = Number(prompt("Enter Number 2 "))
let num3 = Number(prompt("Enter Number 3 "))



if(num1>num2){
    if(num1>num3){
        alert("Number 1 is Greater.")
    }
    else{
        alert("Number 3 is Greater.")
    }
}
else{
    if(num2>num3){
        alert("Number 2 is Greater.")
    }
    else{
        alert("Number 3 is Greater.")
    }
}



//DOM

//9.
let heading = document.getElementsByTagName("h1")
console.log(heading);

//10.
const message = document.getElementById("info");
message.innerText = "Welcome!";

//11.
let head = document.getElementById("head")
head.innerHTML = "<i>Har Har Mahadev</i>"
head.style.color = "yellow"
head.style.backgroundColor = "black"



//Function

//11.
function sayHey(message) {
  console.log(message);
}

sayHey("Har Har Mahadev");
sayHey("Jay Maa Vishvambhari");

//12.
function sub(a, b) {
  return a - b;
}

let result = sub(10, 7); // result = 3
console.log("Subtraction:", result);


//Function Expression:

//13.
const sum = function(a,b){
    console.log(a+b)
    console.log("Hello this is a function Expression")
}

sum(25,25)

//14.
const greetings = function(name) {
  console.log("Hello, " + name + "!");
};

greetings("Tanvi");



//Arrow Function:

//15.
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(6, 7)); // Output: 42

//16.
const square = n => n * n;
console.log(square(4)); // 16


//17.
const area = (length, width) => length * width;
console.log(area(5, 4)); // 20



//IIFE:

//18.
(function() {
  console.log("I run immediately!");
})();

//19.
(function(name) {
  console.log("Dear, " + name);
})("Tanvi");


//Anonymous Function:
//20.
const greets = function(name) {
  console.log("Whats up, " + name + "!");
};

greets("Tanvi"); // Output: Whats up, Tanvi!
