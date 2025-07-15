// Object - {} it is used to store data in key value pair.

let arr = [12,34,23,25,78]

let obj = {
    Name : "Tanvi",
    subject : ["JavaScript","Node","JS"],
    City : "Rajkot",
    State : "Gujarat",
    Contact : "8141452353",
    Parents : {
        Father : "Mr. Manoj Bhalani"
    }
}

obj.Name = "Janvi"
obj.subject[0] = "HTML"

console.log(typeof(obj));
console.log(obj.State);
console.log(obj);
console.log(obj["Name"]);
console.log(obj.subject[1]);
console.log(obj.Parents.Father);

console.log(typeof(obj));
console.log(obj.subject[0]);




//Note : Object Prototype






//Array of Object:

let class12th = [
    {
        name : "Tanvi",
        rollNumber : "1",
        age : "20",
        addmissionconfirm : "true",
        enrollmentNo : "1001",
        grade : [90,85,97],
        Parents : {
        Father : "Mr. Manoj Bhalani",
        Mother : "Mrs. Rekha Bhalani"
    }
    },
    {
        name : "Janvi",
        rollNumber : "2",
        age : "19",
        addmissionconfirm : "true",
        enrollmentNo : "1002",
        grade : [96,80,90],
        Parents : {
        Father : "Mr. Manoj Bhalani",
        Mother : "Mrs. Rekha Bhalani"
    }
    },
    {
        name : "Mili",
        rollNumber : "3",
        age : "20",
        addmissionconfirm : "true",
        enrollmentNo : "1003",
        grade : [75,80,97],
        Parents : {
        Father : "Mr. Nilesh Makvana",
        Mother : "Mrs. Pintu Makvana"
    }
    },
    {
        name : "Yuva",
        rollNumber : "4",
        age : "19",
        addmissionconfirm : "true",
        enrollmentNo : "1004",
        grade : [92,75,70],
        Parents : {
        Father : "Mr. Sanjiv Kalavadia",
        Mother : "Mrs. Jagruti Kalavadia"
    }
    },
    {
        name : "Vaibhav",
        rollNumber : "5",
        age : "21",
        addmissionconfirm : "true",
        enrollmentNo : "1005",
        grade : [91,82,90],
        Parents : {
        Father : "Mr. Nilesh Makvana",
        Mother : "Mrs. Pintu Makvana"
    }
    },
    {
        name : "Umang",
        rollNumber : "6",
        age : "20",
        addmissionconfirm : "true",
        enrollmentNo : "1006",
        grade : [92,86,97],
        Parents : {
        Father : "Mr. Hiren Bhalodi",
        Mother : "Mrs. Rupal Bhalodi"
    }
    },
    {
        name : "Angel",
        rollNumber : "7",
        age : "18",
        addmissionconfirm : "true",
        enrollmentNo : "1007",
        grade : [97,83,90],
        Parents : {
        Father : "Mr. Hiren Amrutiya",
        Mother : "Mrs. Bansi Amrutiya"
    }
    },
    {
        name : "Divyam",
        rollNumber : "8",
        age : "18",
        addmissionconfirm : "true",
        enrollmentNo : "1008",
        grade : [90,80,99],
        Parents : {
        Father : "Mr. Milan Vachani",
        Mother : "Mrs. Jiya Vachani"
    }
    },
    {
        name : "Nidhi",
        rollNumber : "9",
        age : "19",
        addmissionconfirm : "true",
        enrollmentNo : "1009",
        grade : [90,85,97],
        Parents : {
        Father : "Mr. Jitendra Bhalani",
        Mother : "Mrs. Suketa Bhalani"
    }
    },
    {
        name : "Tanvi",
        rollNumber : "10",
        age : "20",
        addmissionconfirm : "true",
        enrollmentNo : "1010",
        grade : [90,85,97],
        Parents : {
        Father : "Mr. Manoj Bhalani",
        Mother : "Mrs. Rekha Bhalani"
    }
    },

]

class12th.forEach((item)=>{
    console.log(item.name);
    console.log(item.rollNumber);
    
    
})

class12th.map((item) => {
    if(item.rollNumber == 2){
        console.log(item.name);
        console.log(item); 
    }

})

let confirmStudent = class12th.map((item)=>{
    if(item.rollNumber == 8){
        console.log(item.name);
        return item
    }
})


let singleData = class12th.find((item)=>item.rollNumber == 7)
console.log(singleData);











//Practice Questions"
console.log(" ");
console.log(" ");
//Question 1:
let cart = [
  { 
    id: 1, 
    name: "T-shirt", 
    price: 20, 
    quantity: 2 
  },
  { 
    id: 2, 
    name: "Shoes", 
    price: 50, 
    quantity: 1 
   }
];


cart.push({ id: 3, name: "Hat", price: 15, quantity: 1 });


//Only use this when you want to increase the quantity.(it's example in index2.html)
cart[1].quantity += 1;

cart.forEach((item) => {
  console.log(`${item.name}: ${item.quantity}`);
});


console.log(" ");
console.log(" ");
//Question 2:

let questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What word is spelled incorrectly in every dictionary?",
    options: ["Incorrectly", "Wrongly", "Spell", "Dictionary"],
    answer: "Incorrectly"
  },
  {
    question: "How many months have 28 days?",
    options: ["1", "2", "12", "Depends on the year"],
    answer: "12"
  },
  {
    question: "What goes up but never comes down?",
    options: ["Age", "Smoke", "Balloon", "Rain"],
    answer: "Age"
  },
];

// Show a question
console.log(questions[0].question);

//Question with answer
questions.forEach(function(item, index) {
  console.log("Q" + (index + 1) + ": " + item.question);
  console.log("Answer: " + item.answer);
  console.log("-------------");
});



console.log(" ");
console.log(" ");
//Question 3:

let contacts = [
  { 
    name: "Princi",
    phone: "9874562842",
    email: "princi156@gmail.com" 
  },
  { name: "Dhriya",
    phone: "9887569870",
    email: "dhriyathummar@gmail.com" 
  },
  { name: "Army",
    phone: "9765569770",
    email: "armypatel@gmail.com" 
  },
  { name: "Vishva",
    phone: "8857569872",
    email: "vishva555@gmail.com" 
  },
  { name: "Janvi",
    phone: "9975698207",
    email: "jpatel@gmail.com" 
  },
];

// Search contact by name
function findContacts(namesArray) {
  return contacts.filter(c => namesArray.includes(c.name));
}


// Get and print the contact
let result = findContacts(["Princi","Army","Dhriya"]);
console.log(result);



