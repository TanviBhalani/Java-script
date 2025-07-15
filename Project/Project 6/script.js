class Person{
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      console.log(`Hello, My name is ${this.name}.`);
   }

}

let obj = new Person("Tanvi",20)

obj.greet()




//Question 1.
class Student{
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    }

    info(){
        console.log(`${this.name} is in grade ${this.grade}.`);
    }

}

let student1 = new Student("Nishil",5)
student1.info();






//Question 2:
class Series{
    constructor(title,year){
        this.title = title;
        this.year = year;
    }

    details(){
        console.log(`${this.title} was released in ${this.year}.`); 
    }

}

let series1 = new Series("Special OPS",2020) 
series1.details();







//Question 3:
class Phone{
    constructor(model,os){
        this.model = model;
        this.os = os;
    }

    info(){
        console.log(`${this.model} runs on ${this.os}.`);
    }

}

let phone1 = new Phone("iphone 14", "ios");
phone1.info();









//Question 4:
class Course{
    constructor(name,duration){
        this.name = name;
        this.duration = duration;
    }

    info(){
        console.log(`The course ${this.name} is lasts for ${this.duration} months.`);
    }

}

let course1 = new Course("Fullstack", 16)
course1.info();








//Question 5:
class Stay{
    constructor(name,duration){
        this.name = name;
        this.duration = duration;
    }

    details(){
        console.log(`${this.name} admitted at hospital ${this.duration} days for his treatment.`);       
    }

}

let stay1 = new Stay("Yug", 8)
stay1.details();
