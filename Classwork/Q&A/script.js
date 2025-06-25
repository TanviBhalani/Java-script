//📘 Functions:
//👉 A function is a reusable block of code designed to perform a particular task.
//Functions help organize code, reduce repetition, and improve readability.

//✅ Types of Functions in JavaScript:
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function (ES6)
// 4. Anonymous Function







//📘 What is Function Declaration in JavaScript?
//👉 A Function Declaration is a way to define a function using the function keyword followed by a name.
//It's the most traditional and widely used method to create functions in JavaScript.
//Function declarations are hoisted, means You can call the function before it is defined in the code.

//✅ Syntax:

//Function Declaration
function greet(){
    console.log("Hello Function")
}

//Function Calling
greet()

//🔐 Key Features of Function Declaration:
//1. ✅Hoisting: You can call the function before it is defined in the code.

sayHello(); // Works fine

function sayHello() {
  console.log("Hello!");
}

//2. ✅ Reusable : You can reuse the function by calling it multiple times with different arguments

function sayHey(message) {
  console.log(message);
}

sayHey("Har Har Mahadev");
sayHey("Jay Maa Vishvambhari");

//3. ✅ Can Take Parameters:

function sub(a, b) {
  return a - b;
}

let result = sub(10, 7); // result = 3
console.log("Subtraction:", result);

//4. ✅ Can Return Values:

function getArea(length, width) {
  return length * width;
}

let area = getArea(5, 3); // area = 15
console.log("Area:", area);










//📘 What is Function Expression in JavaScript?
//👉 A function expression is a way to define a function and assign it to a variable.
//Unlike function declarations, function expressions are not hoisted, which means you cannot call the function before it’s defined in the code.

//✅ Syntax:

const sum = function(a,b){
    console.log(a+b)
    console.log("Hello this is a function Expression")
}

sum(25,25)

//🔐 Key Features of Function Expression:
// 1. ❌ Not Hoisted : You cannot use the function before it's defined

// hello(25,25)

// const hello = function(a,b){
//     console.log(a+b)
// }


//2. ✅ Can Be Anonymous : You can define a function without a name.

const greetings = function(name) {
  console.log("Hello, " + name + "!");
};

greetings("Tanvi"); // Output: Hello, Tanvi!

//function(name) { ... } → has no name, so it’s anonymous.
//It's stored in the variable greet.


//3. ✅ Can Be Assigned to Variables or Passed as Arguments: 

const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

//add becomes a function variable.


//4. ✅ Can Be Used Immediately (IIFE): Function expressions can run immediately using IIFE (Immediately Invoked Function Expression)

(function() {
  console.log("This runs immediately!");
})();











//📘 What is Arrow Function in JavaScript?
//👉 An arrow function is a new way to write functions introduced in ECMAScript 6 (ES6).
//It provides a shorter syntax and also behaves differently when it comes to the this keyword.


//✅ Syntax:

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(6, 7)); // Output: 42









//📘 What is an Anonymous Function?
//👉 An anonymous function is a function without a name.
//It is usually assigned to a variable, passed as an argument, or used immediately.


//✅ Syntax:

const greets = function(name) {
  console.log("Whats up, " + name + "!");
};

greets("Tanvi"); // Output: Whats up, Tanvi!








//📘 What is an IIFE in JavaScript?
//👉 An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it is created.

//✅ Syntax:

(function() {
  console.log("I run immediately!");
})();



//✅ IIFE with Parameters:

(function(name) {
  console.log("Dear, " + name);
})("Janvi");


//✅ IIFE with Return Value:

const results = (function(a, b) {
  return a + b;
})(4, 6);

console.log("Sum is:", results); // Output: Sum is: 10












//📘 What is Hoisting?

//✅ Definition:
//👉 Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (function or global) 
// before the code is executed.




//✅ What Gets Hoisted?
//         Type	                        Hoisted?	                            Value Hoisted?

//     var declarations	                 ✅ Yes	                           ❌ Only declaration (value is undefined)
//       let / const	                   ✅ Yes	                           ❌ Declared but not initialized
//    Function Declarations	             ✅ Yes	                           ✅ Fully hoisted (you can call them before)
//    Function Expressions	             ❌ No	                             ❌ Not hoisted
//       Arrow Functions	               ❌ No	                             ❌ Not hoisted
//        IIFE                           ❌ No                              ❌ Not hoisted



//🧪 Example 1: var Hoisting

var x;         // Declaration hoisted
console.log(x); // undefined
x = 5;         // Initialization stays here




//🧪 Example 2: let and const Are Not Fully Hoisted


// console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
// let y = 10;




//🧪 Example 3: Function Declaration Hoisting

say(); // ✅ Works

function say() {
  console.log("Jay Shree Ram!");
}



//🧪 Example 4: Function Expression is NOT Hoisted

// sayHi(); // ❌ Error: sayHi is not a function

// var sayHi = function() {
//   console.log("Hi!");
// };











//✅ Scope Definition:
//👉Scope means where you can use or access a variable in your code.

//1. Global Scope:
//👉Variables declared outside any function are available everywhere → Global Scope

//2. Function Scope:
//👉Variables declared inside a function are available only inside that function → Function Scope.

//3. Block Scope:
//👉 Variables declared inside {} with let or const are available only inside that block → Block Scope




//✅ Why Scope Matters?
// 💡It prevents conflicts between variables.
// 💡It keeps code organized and safe.
// 💡It decides which variables are accessible where.



//✅ 1. Global Scope:

var a = 10;

function show() {
  console.log(a); // Accessible
}

show(); // Output: 10
console.log(a); // Output: 10

//a is globally declared, so it's available anywhere.



//✅ 2. Function Scope:

function greet() {
  var message = "Hello, Guyss!";
  console.log(message);
}

greet();            // Output: Hello, Tanvi!
// console.log(message); ❌ Error: message is not defined


//message is declared inside a function — can’t be used outside.


//✅ 3. Block Scope (let & const):

if (true) {
  let x = 5;
  const y = 10;
  console.log(x, y); // Output: 5 10
}

// console.log(x); ❌ Error
// console.log(y); ❌ Error


//Variables declared with let or const inside {} are not accessible outside.
