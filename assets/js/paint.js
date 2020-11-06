window.addEventListener("load", function onWindowLoad() {
    let canvas = document.getElementById("canvas");
    let clearButton = document.getElementById("clear");
    let colorInput = document.getElementById('color');
    let sizeInput = document.getElementById('size');
    let sizeIndicator = document.getElementById('sizeIndicator');
    let context = canvas.getContext("2d");

    context.lineCap = "round";
    context.lineWidth = 5;

    clearButton.addEventListener('click', ()=>{
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    colorInput.addEventListener('input', ()=>{
       context.strokeStyle = colorInput.value;
    });

    sizeInput.addEventListener('input', ()=>{
        context.lineWidth = sizeInput.value;
        sizeIndicator.innerHTML = sizeInput.value;
    })



    canvas.onmousemove = function drawIfPressed (e) {
        let x = e.offsetX;
        let y = e.offsetY;
        let dx = e.movementX;
        let dy = e.movementY;

        if (e.buttons > 0) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - dx, y - dy);
            context.stroke();
            context.closePath();
        }
    };

});
