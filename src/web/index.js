const canvas = document.getElementById("mainCanvas");
const bgImg = document.getElementById("bgImage");
const canvasDiv = document.getElementById("mainCanvasContainer");

canvas.width = document.body.clientWidth;
canvas.height = 1659 * canvas.width/3300;
var mouseX = 0;
var mouseY = 0;

// update mouse position
canvas.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
})

const ctx = canvas.getContext("2d");

// draw backgroun image
bgImg.addEventListener("load", (err) => {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
})

setInterval(()=>{
    console.log(mouseX, mouseY);
}, 100)


