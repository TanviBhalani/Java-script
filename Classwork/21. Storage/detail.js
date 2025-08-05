//1. 🧠 What is Local Storage in JavaScript?
//Local Storage is a feature provided by modern web browsers that allows websites to store key-value pairs in a user's 
// browser with no expiration time. This data persists even after the browser is closed and reopened.



//📦 Where is Local Storage Stored?
//It is stored locally in the user's browser, separate for each domain. That means only the website that saved the data can access it.




//🛠️ Basic Local Storage Methods:
//| Method                             | Description                            |
//| ---------------------------------- | -------------------------------------- |
//| `localStorage.setItem(key, value)` | Save data                              |
//| `localStorage.getItem(key)`        | Read data                              |
//| `localStorage.removeItem(key)`     | Delete a specific item                 |
//| `localStorage.clear()`             | Delete everything                      |
//| `localStorage.key(index)`          | Get the key name at a certain position |
//| `localStorage.length`              | Total number of stored items           |





// Store data
localStorage.setItem("username", "Tanvi");

// Get data
let user = localStorage.getItem("username");
console.log(user);  // Output: Tanvi

// Remove specific item
localStorage.removeItem("username");

// Clear all local storage
localStorage.clear();






//⚠️ Notes:
//⚠️Only strings can be stored. If you want to store objects or arrays, use JSON.stringify() and JSON.parse().


// Storing an object
let userObj = { name: "Tanvi", age: 20 };
localStorage.setItem("user", JSON.stringify(userObj));

// Retrieving it
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);  // Output: Tanvi















//🔐 What is Session Storage in JavaScript?

//Session Storage is similar to Local Storage, but with one key difference:
//🕒 Data in session storage only lasts until the tab or browser is closed.
//It stores key-value pairs in the browser, per tab and per session.





//🛠️ Basic Session Storage Methods:
//| Method                               | Description           |
//| ------------------------------------ | --------------------- |
//| `sessionStorage.setItem(key, value)` | Store data            |
//| `sessionStorage.getItem(key)`        | Retrieve data         |
//| `sessionStorage.removeItem(key)`     | Remove one item       |
//| `sessionStorage.clear()`             | Clear all items       |
//| `sessionStorage.key(index)`          | Get key at a position |
//| `sessionStorage.length`              | Total number of items |





// Save data
sessionStorage.setItem("user", "Tanvi");

// Read data
let name = sessionStorage.getItem("user");
console.log(name);  // Output: Tanvi

// Remove item
sessionStorage.removeItem("user");

// Clear all
sessionStorage.clear();




// Key Differences: Local vs Session Storage:

//| Feature         | Local Storage          | Session Storage          |
//| --------------- | ---------------------- | ------------------------ |
//| **Lifetime**    | Until manually deleted | Until tab/browser closed |
//| **Scope**       | Shared across tabs     | Tab-specific             |
//| **Size limit**  | \~5MB                  | \~5MB                    |
//| **Persistence** | Persistent             | Temporary                |
