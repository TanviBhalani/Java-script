let salary = Number(prompt("Enter your base salary:"));
let rent = Number(prompt("Enter your monthly rent:"));
let fuel = Number(prompt("Enter your monthly fuel expense:"));
let other = Number(prompt("Enter your other monthly expenses:"));
let extraIncome = Number(prompt("Enter any extra income:"));

const netSalary = (salary + extraIncome) - (rent + fuel + other);


const heading = document.getElementById("heading");
const para = document.getElementById("result");



heading.innerHTML = "Net Salary Calculation Completed!";
para.innerText = "Your net salary is ₹" + netSalary