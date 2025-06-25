//🔄 1. Implicit Type Conversion (Type Coercion)
// JavaScript automatically converts data types when needed during operations. 
// This often happens with operators like +, -, *, /, ==, and others.



// ➕  String+Number (concatenation)

let result1 = '5' + 2;
console.log(result1); // "52" → 2 is converted to string



// ➖ String - Number (numeric conversion)

let result2 = '10' - 4;
console.log(result2); // 6 → '10' is converted to number



// ✖️ Multiplying string numbers

let result3 = '6' * '2';
console.log(result3); // 12 → both strings converted to numbers



// ➗ String division

let result4 = '20' / 4;
console.log(result4); // 5 → '20' is converted to number



// ❓ Boolean + Number

let result5 = true + 1;
console.log(result5); // 2 → true becomes 1



// ❗ Boolean in string context

let result6 = false + ' is false';
console.log(result6); // "false is false" → false becomes string



// 🧪 Equality operator == (performs coercion)

console.log('5' == 5);       // true → string '5' converted to number
console.log(false == 0);     // true → false becomes 0
console.log(null == undefined); // true → special coercion rule






//  👨‍💻 2. Explicit Type Conversion (Type Casting)
// This is when you manually convert a value from one type to another using built-in JavaScript functions.



//📌 Convert to Number

let str = "123";
let num = Number(str);  // 123
console.log(num, typeof num); // 123 'number'

let bool = true;
console.log(Number(bool)); // 1
console.log(Number(false)); // 0

let invalid = Number("abc");
console.log(invalid); // NaN (Not a Number)



// 📌 Convert to String

let num1 = 123;
let str1 = String(num); // "123"
console.log(str, typeof str); // "123" 'string'

let bool1 = true;
console.log(String(bool)); // "true"

let nullVal = null;
console.log(String(nullVal)); // "null"



// 📌 Convert to Boolean

console.log(Boolean(1));    // true
console.log(Boolean(0));    // false
console.log(Boolean(""));   // false
console.log(Boolean("hi")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false



//🧠 Summary of Truthy and Falsy Values
//🔴 Falsy values (converted to false):

//    1. false
//    2. 0
//    3. "" (empty string)
//    4. null
//    5. undefined
//    6. NaN

// Everything else is truthy (converted to true).




//🔁 Comparison of Implicit vs Explicit
// Example	                                 Implicit Coercion	                              Explicit Conversion

// '5' + 1	                                 '51' (1 → string)	                               String(5) + 1 → '51'
// '5' - 1                                    4 (string → number)	                           Number('5') - 1 → 4
// true + false	                              1 (true → 1, false → 0)	                       Number(true) + Number(false) → 1
// '10' == 10	                              true (string → number)	                       Number('10') === 10 → true


//In short :
//Implicit means datatypes changed by javascript 
//Explicit means datatype changed by us