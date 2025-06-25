// Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code.
// It can take inputs, perform actions, and return outputs.


//Function Declaration
function greet(){
    console.log("Hello Function")
}

//Function Calling

greet()
greet()
greet()
greet()
greet()


function sum(a,b){
    console.log(a+b)
}  
//The value we pass in function paranthese that call parameter

sum(45,45)
//Which value we pass when function calling that call argument

sum(35,35)
sum(50,50)



// //Method 1

// let num1 = Number(prompt("Enter Number 1: "))
// let num2 = Number(prompt("Enter Number 2: "))

// function sum1(){
//     console.log(num1+num2)
// } 
// sum1()


// //Method 2
// let a = Number(prompt("Enter Number 1: "))
// let b = Number(prompt("Enter Number 2: "))

// function sum2(a,b){
//     console.log(a+b)
// } 
// sum2(a,b)



// //Method 3
// let number1 = Number(prompt("Enter Number 1: "))
// let number2 = Number(prompt("Enter Number 2: "))

// function sum2(number1,number2){
//     return a+b
//     console.log(hello) //This shows that anything after return is not applicable
// } 
// let result = sum(a,b)

// console.log(result);




// // recursion :

// // A function calling itself called recursion and that function will be a recursive function

// function fact(a){
//     if(a<1){
//         return 1;
//     }
//     let result = a * fact(a-1)
// }




// // Hoisting vs hosting

// //Default behaviour of js that it can move declaration of function and variable to top of the scope



// //Types of Scopes:

// //1. Global scope:
// // Variable and functions declared outside of any function or block have global scope.


// //2. Function Scope:
// //Variable declared with var inside a function are said to have function scope.


// //3. Block Scope:
// //Introduced with ES6, block scope applies to variable declared with let and const.




// let A = 10;// Global scope

// function sum(){
//     let A = 15; //Function scope
//     console.log(a);
// }

// console.log(a);
// sum()




// // Block code of scope is only possible in let and const
// if(true){
//     let A = 50
//     console.log(A); // { } code between this is block scope
// }


// console.log(A);

// if(true){
//     const AA = 50
//     console.log(AA); // { } code between this is block scope
// }

// console.log(AA);



