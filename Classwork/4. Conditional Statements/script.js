// // Conditional Statements

// let age = Number (prompt("Enter your age "))

// if(age>=18){
//     alert("You are eligible for vote"); 
// }
// else{
//     alert("You are not eligible for vote");
// }


// let a = 24;
// let b= 35;
// let c;

// c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);


//Ladder que1

// let marks = Number(prompt("Enter your marks: "))

// if(marks > 100){
//      alert("Invalid Marks! Enter correct marks.")
// }
// else if(marks >= 90){
//     alert("Excellent!")
// }
// else if(marks >= 80){
//     alert("Good Job!")
// }
// else if(marks >= 70){
//     alert("Nice!")
// }
// else if(marks >= 60){
//     alert("Good!")
// }
// else if(marks >= 50){
//     alert("Better!")
// }
// else if(marks >= 40){
//     alert("You can do better!");
// }
// else{
//     alert("Need more practice!");
// }


//Ladder que2

// let num = Number(prompt("Enter a number: "))

// if(num % 2 == 0){
//     alert("Number is Even.")
// }
// else{
//     alert("Number is Even.")
// }


//Ladder que3

// let choice = Number(confirm("Do you want to play game? "))

// if(choice){
//     alert("Let's Start!")
// }
// else{
//     alert("Bye Bye!!!")
// }



// PRACTICE (H.W) 

//question 1

// let num1 = Number(prompt("Enter first number: "))
// let num2 = Number(prompt("Enter second number: "))
// let num3 = Number(prompt("Enter third number: "))

//let Largest

// if(num1 >= num2 && num1 >= num3){
//     alert("Number 1 is Largest")
// } 
// else if(num2 >= num1 && num2 >= num3){
//     alert("Number 2 is Largest")
// } 
// else{
//     alert("Number 3 is Largest")
// }


//question 2

// let dayNum = Number(prompt("Enter day number: "));

// if(dayNum === 1){
//   alert("Sunday");
// } 
// else if (dayNum === 2){
//   alert("Monday");
// } 
// else if (dayNum === 3){
//   alert("Tuesday");
// } 
// else if (dayNum === 4){
//   alert("Wednesday");
// } 
// else if (dayNum === 5){
//   alert("Thursday");
// } 
// else if (dayNum === 6){
//   alert("Friday");
// } 
// else if (dayNum === 7){
//   alert("Saturday");
// } 
// else{
//   alert("Invalid input! Please enter a number from 1 to 7.");
// }


//question 3

// let num = Number(prompt("Enter a Number: "))

// if(num > 0){
//     alert("Positive Number.")
// }
// else if(num < 0){
//     alert("Negative Number.")
// }
// else{
//     alert("Zero")
// }



//question 4

// let age = Number(prompt("Enter your age: "))

// if(age < 13){
//     alert("Child")
// }
// else if(age < 20){
//     alert("Teenager")
// }
// else if(age < 60){
//     alert("Adult")
// }
// else{
//     alert("Senior Citizen")
// }



//question 5

// let password = Number(prompt("Enter your Password: "))

// if(password == 123456){
//     alert("Access Granted.")
// }
// else{
//     alert("Access Denied.")
// }



//question 6

// let year = Number(prompt("Enter a year to check leap year : "))

// if(year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)){
//     alert("Leap year.")
// }
// else{
//     alert("Not a Leap year!")
// }


//question 7

// let ch = prompt("Enter an Alphabet: ")

// if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
//     alert("Vowel")
// }
// else{
//     alert("Consonant")
// }



//question 8

// let age = Number(prompt("Enter your age: "))

// if(age >= 18){
//     alert("Eligible for Vote")
// }
// else{
//     alert("Not Eligible for Vote")
// }



//question 9

// let temp = Number(prompt("Enter temperature in °C: "))

// if(temp < 0){ 
//    alert("Freezing"); 
// } 
// else if(temp < 20){ 
//    alert("Cold"); 
// } 
// else if(temp < 30){ 
//    alert("Warm"); 
// } 
// else{ 
// alert("Hot"); 
// }




//Nested que1

// let num1 = Number(prompt("Enter Number 1 "))
// let num2 = Number(prompt("Enter Number 2 "))
// let num3 = Number(prompt("Enter Number 3 "))



// if(num1>num2){
//     if(num1>num3){
//         alert("Number 1 is Greater.")
//     }
//     else{
//         alert("Number 3 is Greater.")
//     }
// }
// else{
//     if(num2>num3){
//         alert("Number 2 is Greater.")
//     }
//     else{
//         alert("Number 3 is Greater.")
//     }
// }


//que2

// let num1 = Number(prompt("Enter Number 1 "))
// let num2 = Number(prompt("Enter Number 2 "))
// let num3 = Number(prompt("Enter Number 3 "))



// if(num1<num2){
//     if(num1<num3){
//         alert("Number 1 is Minimum.")
//     }
//     else{
//         alert("Number 3 is Minimum.")
//     }
// }
// else{
//     if(num2<num3){
//         alert("Number 2 is Minimum.")
//     }
//     else{
//         alert("Number 3 is Minimum.")
//     }
// }



//que 3

let num1 = Number(prompt("Enter Number 1 "))
let num2 = Number(prompt("Enter Number 2 "))
let num3 = Number(prompt("Enter Number 3 "))



if(num1>=num2){
    if(num1==num2){
        alert("Number 1 and 2 are same.")
    }
    else if(num1>num3){
        alert("Number 1 is Greater.")
    }
    else{
        alert("Number 3 is Greater.")
    }
}
else{
    if(num2=num3){
        alert("Number 2 and 3 are same.")
    }
    else if(num2>=num3){
        alert("Number 2 is Greater.")
    }
    else{
        alert("Number 3 is Greater.")
    }
}
