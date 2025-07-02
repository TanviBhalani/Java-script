let arr = [10,20,30,40,50]
let arrStr = ["Tanvi,Janvi,Manoj,Rekha"]

console.log(arr);
console.log(" ")
console.log(arrStr)
console.log(" ")

let total = 0;

for(let i=0; i<=4; i++){
    //total = total + arr[i]
    total += arr[i]
}

console.log(total);
console.log(" ")

let square1 = 1;

for(let i=0; i<=4; i++){
    //total = total + arr[i]
    square1 = arr[i] * arr[i];

    console.log(square1);
    
}


console.log(" ")

let square = total * total ;
console.log("Square of total :" + square);
console.log(" ")







let arr2 = ["Apple","Mango","Banana","Orange","Litichi","Apple"]





//add element at last
console.log(arr.length);
arr.push("Watermelon")

// remove element at last
let poped = arr.pop()
console.log(arr2)
console.log(poped)

//add  element at first
arr2.shift()


//remove element at first
arr2.unshift("Grapes")



console.log(arr2.slice(0,3))
console.log(arr.reverse())



arr2.splice(0,2)    
arr2.splice(0,2,'ETC')







console.log(arr2)





console.log(" ")








//Strings

let str = "Tanvi"
let arr1 = [10,25,35,50,80,90,100]

console.log(str.length)  //#
console.log(arr1.length)  //#
console.log(str.charAt(3))
console.log(str.indexOf('T'))
console.log(str.indexOf('a'))
console.log(str.indexOf('i'))
console.log(str.substring(1,5))  //#
console.log(str.substring(1,4))
console.log(str.toUpperCase())   //#
console.log(str.toLowerCase())  //#
console.log(str.slice(2,4))  //#



console.log(" ")

let str1 = "   Tanvi   "

console.log(str1)
console.log(str1.trim())


//starsWitch(prefix) / endsWitch(suffix)    only for knowledge



var arr3 = ["Manoj","Rekha","Tanvi","Janvi"]

// the forEach loop is used to iterate the array, not return the new array
arr3.forEach((item) => {
    console.log(item);
})

// the Map Function use to iterate the array, return the new array

var arr3 = arr.map((item) => {
    return item + "Bhalani"
})

console.log(arr3)


let naam = "Tanvi"

console.log(arr.includes("black"))
console.log(naam.includes("nvi"))