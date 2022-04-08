const canvas = document.querySelector("#draw");
const board = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
board.strokeStyle = "#BADA55";
board.lineJoin = "round";
board.lineCap ='round';
board.lineWidth = 100;
board.globalCompositeOperation = multiply;

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let direction = true;
let hue = 0;

function draw(e){
    if (!isDrawing) return;
    console.log(e);

    board.strokeStyle =`hsl(${hue}, 100%, 50%)`;
    board.beginPath();
    board.moveTo(lastX, lastY);
    board.lineTo (e.offsetX, e.offsetY);
    board.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360){
    hue = 0;
    }

    if (board.lineWidth >= 100 || board.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction){
        board.lineWidth++;
    }
    else{
        board.lineWidth--;
    }
}

canvas.addEventListener('mousedown', (e) =>{
     isDrawing = true;
     [lastX, lastY] = [e.offsetX, e.offsetY];
    });

canvas.addEventListener('mousemove', draw );

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);