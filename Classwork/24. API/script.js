// API (Application programming interface)


//Synchronous Programming:
//Synchronous programming is a style of programming where operations are executed one after another, 
//in a sequential manner. In this approach, each task must be completed before the next one begins.


//Asynchronous programming:
//Asynchronous programming is a technique that allows a program to perform multiple operations 
// concurrently without waiting for each operation to complete before moving on to the next.

//Method to perform asynchronous tasks:-

//1. Callback functions,
//2. Promises,
//3. Async/Await


//1.Callback hell:
//Callback Hell, also known as the "Pyramid of Doom," is a common anti-pattern in JavaScript asynchronous programming. 
// It arises when multiple asynchronous operations are chained together using nested callback functions, leading to 
// deeply indented and difficult-to-read and maintain code. 




//2.Promises:
//In JavaScript, a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. 
// It provides a structured way to handle asynchronous code, improving readability and maintainability compared to traditional callback functions,
//  which can lead to "callback hell" in complex scenarios. 

//A Promise can be in one of three states: 
//(Promise can exist in any of one stage)

//1. Pending: The initial state; the asynchronous operation is still in progress.
//2. Fulfilled (Resolved): The operation completed successfully, and the promise has a resulting value.
//3. Rejected: The operation failed, and the promise has a reason for the failure (an error).




//3.Async and Await:
//In JavaScript, async and await are keywords that simplify working with asynchronous code, particularly Promises, 
// by allowing it to be written in a more synchronous-looking style. 


//async keyword:
//Placed before a function declaration (async function myFunction() { ... }).
//Designates the function as an asynchronous function.
//An async function implicitly returns a Promise. If the function's return value is not explicitly a Promise, it will be automatically wrapped in one.


//await keyword:
//Can only be used inside an async function.
//Placed before a Promise-returning expression (let result = await somePromise();).
//Pauses the execution of the async function until the Promise it's "awaiting" resolves or rejects.
//If the Promise resolves, the await expression evaluates to the resolved value of the Promise.
//If the Promise rejects, the await expression throws the rejected value (which can then be caught using try...catch blocks).





//Event loop:





//Promise:
// const myPromise = new Promise((res,rej)=>{
//     fetch("https://dog.ceo/api/breeds/image/random");
// }).then((res)=>{
//     console.log(res.json());    
// })



//async/await:

let head = document.getElementById("heading")
let img = document.getElementById("img")

const fetchData = async ()=>{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json()
    img.src = data.message;
}

const fetchData2 = async ()=>{
    const inpValue = document.getElementById("inp").value
    const response = await fetch(`https://fakestoreapi.com/products/${inpValue}`);
    const data = await response.json()
    heading.innerText = data.title
    img.src = data.image;
}

fetchData()
fetchData2()