//LOCAL STORAGE:
//Local storage in js is a property of the Window object that allows web applications to store key-value pairs in a web browser, 
// with no expiration time. The data stored in localStorage  persists even after the browser window or tab is closed and reopened, 
// or the page is refreshed.


//SESSION STORAGE:
//Session storage is a web storage API that provides a way to store data on the client-side within a browser tab or window. 



//COOKIES:
//In JavaScript, cookies are small pieces of data stored on the user's web browser. 
// They are commonly used to store information about user interactions with a website, 
// such as login credentials, user preferences, and shopping cart contents. 


//Limit of local storage session and cookies:
//In JavaScript, cookies are small pieces of data stored on the user's web browser. 
// They are commonly used to store information about user interactions with a website, such as login 
// credentials, user preferences, and shopping cart contents. 


// //1.Set item:
// localStorage.setItem("Student","Tanvi")
// localStorage.setItem("Student2","Janvi")



// //The key of data must be unique else the data got over written


// //2.Get item:
// let data = localStorage.getItem("Student")
// console.log(data);


// sessionStorage.setItem("Student","Manoj")
// sessionStorage.setItem("Student")

//3.removeItem:


//4.clear













//JSON object
        

//java script object notation = json

//this is a lightweight object and fast or easy to manage

let obj = {name:"hetvi", age:19}

localStorage.setItem("student", JSON .stringify(obj));

console.log(obj);
console.log(JSON.stringify(obj)); // string ma convert krne ke liye

//JSON.stringify method converts the object in json string


// JSON.parse method converts the json string in object

let student = JSON.parse(localStorage.getItem("student"));
console.log(student.name);







