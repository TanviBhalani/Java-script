//A function expression is a way to define a function as a part of an expression. Often assinging it to a variable. Unlike function declaration,
//function expression are not hoisted, meaning they are only accessible after their definition in the code.

//Function expression are anonymous(without a name)

//Function Expression are not hoisted


const sum = function(a,b){
    console.log(a+b)
    console.log("Hello this is a function Expression")
}

sum(25,25)