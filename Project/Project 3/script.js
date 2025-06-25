const salary = Number(prompt("Enter your base salary:"));
const rent = Number(prompt("Enter your monthly rent:"));
const fuel = Number(prompt("Enter your monthly fuel expense:"));
const other = Number(prompt("Enter your other monthly expenses:"));
const extraIncome = Number(prompt("Enter any extra income:"));


//Total
const totalIncome = salary + extraIncome;
const totalExpenses = rent + fuel + other;
const netSalary = totalIncome - totalExpenses;

//DOM Manipulation
const heading = document.getElementById("heading");
const para = document.getElementById("result");

heading.innerHTML = "Net Salary Calculation Details";

para.innerHTML = "Base Salary: ₹" + salary + "<br>" +
                 "Extra Income: ₹" + extraIncome + "<br>" +
                 "Total Income: ₹" + totalIncome + "<br><br>" +

                 "Rent: ₹" + rent + "<br>" +
                 "Fuel Expense: ₹" + fuel + "<br>" +
                 "Other Expenses: ₹" + other + "<br>" +
                 "Total Expenses: ₹" + totalExpenses + "<br><br>" +

                 "Net Salary = Total Income (₹" + totalIncome + ") - Total Expenses (₹" + totalExpenses + ")<br>"+
                 "<span class='net-salary'>Net Salary: ₹" + netSalary + "</span>";