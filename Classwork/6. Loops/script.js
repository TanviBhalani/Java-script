// // Number 1 to 5
// for(let i=0; i<5; i++){
//     console.log(i);
// }

// // Reverse number
// for(let i=5; i>0; i--){
//     console.log(i);
// }

// // Number divisible by 2
// for(let i=0; i<50; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }


// // Table
// let a = prompt("Enter a number to get Table of that:")

// for(let i=1; i<11; i++){
//     console.log(a*i)
// }

// // or

// for(let i=1; i<11; i++){
//     console.log(`${a} x ${i} = ${a*i}`);
// }





// // Number divisible by 7
// for(let i=0; i<100; i++){
//     if(i%7 == 0){
//         console.log(i)
//     }
// }


// // square
// for(let i=1; i<30; i++){
//     console.log(`${i} x ${i} = ${i*i}`);
// }


// // cube
// for(let i=1; i<30; i++){
//     console.log(`${i} x ${i} x ${i}= ${i*i*i}`);
// }


// // while loop

// let num = 0;

// while(num<5){
//     console.log(num);
//     i++;
// }

// //do while loop

// let b = 6;

// do{
//     console.log("do while");
// }while(num<5);

//for while doWhile forOf forIn forEach



//for

for(let i=0; i<5; i++){
    for(let j=0; j<i; j++){
        document.write("*")
    }
    document.write("<br>")
}

for(let i=1; i<5; i++){
    for(let j=1; j<i; j++){
        document.write("j")
    }
    document.write("<br>")
}


for(let i=5; i>0; i--){
    for(let j=1; j<1; j++){
        document.write("*")
        document.write(" ")
    }
    document.write("<br>")
}



for(let i=1; i<5; i++){
    for(let j=0; j<5; j++){
        if(i%2==0){
            document.write("0")
            document.write(" ")
        }
    else{
        document.write("1")
        document.write(" ")
    }
    }
    document.write("<br>")
}
