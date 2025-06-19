// 1. String, Number, Boolean
let name = "Tanvi";
let age = 20;
let isStudent = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);


// 2. Undefined vs Null
let x;
let y = null;
console.log(typeof x);
console.log(typeof y);


// 3. Template Literals
console.log(`My name is ${name} and I am ${age} years old.`);


// 4. Implicit Type Coercion
console.log("5" + 3);    
console.log("5" - 2);    
console.log(true + 1);  


// 5. Explicit Conversion using Number, String
console.log(Number("123"));     
console.log(String(456));       
console.log(Boolean(0));       


// 6. if-else
let Age = Number(prompt("Enter your age: "))

if(Age >= 18){
    alert("Eligible for Vote")
}
else{
    alert("Not Eligible for Vote")
}


// 7. if-else
let year = Number(prompt("Enter a year to check leap year : "))

if(year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)){
    alert("Leap year.")
}
else{
    alert("Not a Leap year!")
}


// 8. Ladder statement
let dayNum = Number(prompt("Enter day number: "));

if(dayNum === 1){
  alert("Sunday");
} 
else if (dayNum === 2){
  alert("Monday");
} 
else if (dayNum === 3){
  alert("Tuesday");
} 
else if (dayNum === 4){
  alert("Wednesday");
} 
else if (dayNum === 5){
  alert("Thursday");
} 
else if (dayNum === 6){
  alert("Friday");
} 
else if (dayNum === 7){
  alert("Saturday");
} 
else{
  alert("Invalid input! Please enter a number from 1 to 7.");
}



// 9. Nested
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


// 10. DOM

let heading = document.querySelectorAll(".head")
console.log(heading);



// 11. For loop

for(let i=1; i<11; i++){
    console.log(`${a} x ${i} = ${a*i}`);
}


// 12. while loop

let num = 0;

while(num<5){
    console.log(num);
    i++;
}

// 13. while loop

let i = 0;

while (i < 10) {
  console.log("The number is " + i);
  i++;
}


// 14. do while loop

let count = 5;

do {
  console.log(count);
  count--;
} while (count > 0);



// 15. pattern

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    document.write("<br>");
}


// 16. Pattern

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write("* ");
    }
    document.write("<br>");
}



// 17. Pattern

let number = 1;

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(number + " ");
        num++;
    }
    document.write("<br>");
}
