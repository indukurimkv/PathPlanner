const canvas = document.getElementById("mainCanvas");
const bgImg = document.getElementById("bgImage");
const imgWidth = 2163;
const imgHeight = 1043;
const canvasDiv = document.getElementById("mainCanvasContainer");

const mousePoseContainer = document.getElementById("mousePosIndicator")
const mousePoseIndicatorX = document.getElementById("mousePositionIndicatorX");
const mousePoseIndicatorY = document.getElementById("mousePositionIndicatorY");

const pickOriginBtn = document.getElementById("btnPickOrigin")
const rstOriginBtn = document.getElementById("btnResteOrigin")


canvas.width = document.body.clientWidth;
canvas.height = imgHeight * canvas.width / imgWidth;
var mouseX = 0;
var mouseY = 0;

var mouseXOffest = 0;
var mouseYOffest = 0;
var canvasMode = "";

// update mouse position
canvas.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
canvas.onclick =  (e) => {
    console.log("CanvasClicked")
    switch (canvasMode){
        case "setOrigin":
        const canvasPoseOnScreen = canvas.getBoundingClientRect()
            mouseXOffest = mouseX - canvasPoseOnScreen.left;
            mouseYOffest = mouseY - canvasPoseOnScreen.top;
            canvasMode = ""
            break;
    }
}
pickOriginBtn.onclick =  (e) => {
    canvasMode = "setOrigin";
    console.log("clicked")
}
rstOriginBtn.onclick = (e) => {
    mouseXOffest = 0;
    mouseYOffest = 0;
}
canvas.ondblclick = (e) => {
    const canvasPoseOnScreen = canvas.getBoundingClientRect();
    const x = (mouseX - mouseXOffest - canvasPoseOnScreen.left) / canvasPoseOnScreen.width * imgWidth * 2.516378 / 323;
    const y = (mouseY - mouseYOffest - canvasPoseOnScreen.top) / canvasPoseOnScreen.height * imgHeight * 2.516378 / 323;
    navigator.clipboard.writeText(`${Math.round(x * 100) / 100}, ${Math.round(y * 100) / 100}`)
    if(e.ctrlKey){
        navigator.clipboard.writeText(`${Math.round(y * 100) / 100}, ${Math.round(x * 100) / 100}`)
    }
}

const ctx = canvas.getContext("2d");

// draw background image
bgImg.addEventListener("load", (event) => {
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
})


const update = setInterval(()=>{

    const canvasPoseOnScreen = canvas.getBoundingClientRect();
    mousePoseIndicatorX.value = (mouseX - mouseXOffest - canvasPoseOnScreen.left) / canvasPoseOnScreen.width * imgWidth * 2.516378 / 323;
    mousePoseIndicatorY.value = (mouseY - mouseYOffest - canvasPoseOnScreen.top) / canvasPoseOnScreen.height * imgHeight * 2.516378 / 323;
}, 10);



