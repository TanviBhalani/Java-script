//Event 1
let heading = document.getElementById("heading")
let hide = document.getElementById("btn-hide")
let show = document.getElementById("btn-show")

function hideFunc(){
    heading.style.visibility = "hidden";
}

function showFunc(){
    heading.style.visibility = "visible";
}


//Event 2
let input = document.getElementById("inp")

function getValue(){
    // alert(input.value)
    document.querySelector("#head").innerHTML = input.value
    input.value = ""
}
