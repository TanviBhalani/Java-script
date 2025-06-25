//Arrow function are part of function expression
//arrow Functions are not hoisted


const multi = (a,b)=>{
    console.log(a * b);
    console.log("Hello")
}


//IIFE
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined.


(function(){
    console.log("IIFE");
})();


//Function Declaration
//Function Expression
//Anonymous Function 
//Arrow Function
//IIFE - (Immediately Invoked Function Expression)
//Hoisting