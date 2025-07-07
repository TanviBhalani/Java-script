const arr = [
    'two.png',
    'six.png',
    'seven.png',
    'eight.png',
    'nine.png',
    'ten.png',
    'eleven.png'
];

let i = 0;
const img = document.getElementById('slider');

function magic() {
    img.src = arr[i];
}

function nextImage() {
    i = (i + 1) % arr.length;
    magic();
}

function prevImage() {
    i = (i - 1 + arr.length) % arr.length;
    magic();
}

 magic();