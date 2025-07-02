let menuToggle = document.querySelector('.menuToggle')
let lightDark = document.querySelector('.lightDark')
let body = document.querySelector('body')
let video = document.querySelector('video')
let dark = false;
let navigation = document.querySelector('.navigation')

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

lightDark.onclick = function(){
    dark = !dark
    lightDark.classList.toggle('active')
    body.classList.toggle('dark')
}

// function changeFunc(selectObj) {
//     document.body.style.backgroundColor = selectObj.value;
// }

const darkBtn = document.getElementById("darkToggle");
const lightBtn = document.getElementById("lightToggle");

darkBtn.onclick = () => {
    document.body.className = "dark-mode";
};

lightBtn.onclick = () => {
    document.body.className = "light-mode";
};