const canvas = document.getElementById("myCanvas");
const myCanvas = canvas.getContext("2d");

function color(color) {
    myCanvas.strokeStyle = color;
}

function thickness(thickness) {
    myCanvas.lineWidth = thickness;
}

function begin() {
    myCanvas.beginPath();
}

function paint(event) {
    if (event.buttons !== 1) return;
    const canvasRect = canvas.getBoundingClientRect();
    const offsetX = event.clientX - canvasRect.left;
    const offsetY = event.clientY - canvasRect.top;
    myCanvas.lineTo(offsetX, offsetY);
    myCanvas.stroke();
}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}



function clearCanvas() {
    myCanvas.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomLetter() {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const index = getRandomNumber(0, letters.length - 1);
    myCanvas.lineWidth = 1.5;
    return letters[index];
}

function randomLetter() {
    clearCanvas();
    const char = getRandomLetter();
    myCanvas.beginPath();
    myCanvas.strokeStyle = "black";
    myCanvas.font = '200px Arial';
    myCanvas.strokeText(char, 430, 390);
    
}
