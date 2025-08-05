let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")

let nameErr = document.getElementById("nameerr")
let emailErr = document.getElementById("emailerr")
let passErr = document.getElementById("passerr")

function handelSubmit(e){
    e.preventDefault();

    let regex = /hjbl/

    if(!regex.test(pass.value)){
        passErr.innerText = "Password is weak"
    }
    else{
        passErr.innerText = ""
    }
    // if (name.value.length <= 0) {
    //     nameErr.innerText = "The field is empty";
    // }
    // else if(name.value.length <= 8){
    //     nameErr.innerText = "The field must contain more than 8 characters.";
    // }
    // else{
    //     nameErr.innerText = "";
    // }

    // if (email.value.length <= 0) {
    //     emailErr.innerText = "The field is empty";
    // }
    // else if(!email.value.includes("@")){
    //     emailErr.innerText = "The email is not valid";
    // }
    // else{
    //     emailErr.innerText = "";
    // }

    // if (pass.value.length <= 0) {
    //     passErr.innerText = "The field is empty";
    // }
    // else{
    //     passErr.innerText = "";
    // }
}