// Version: 1.0
// Autor: Iker Lobo Pérez
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const squareSize = 50;
let x = canvas.width / 2 - squareSize / 2;
let y = canvas.height - squareSize;

document.addEventListener('keydown', moveSquare);

//función para dibujar el cuadrado
function drawSquare() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x, y, squareSize, squareSize);
}
//función para mover el cuadrado
function moveSquare(e) {
    switch (e.key) {
        case 'ArrowLeft':
            if (x > 0) x -= 10;
            break;
        case 'ArrowRight':
            if (x < canvas.width - squareSize) x += 10;
            break;
        case 'ArrowUp':
            if (y > 0) y -= 10;
            break;
        case 'ArrowDown':
            if (y < canvas.height - squareSize) y += 10;
            break;
    }

    drawSquare();
}

drawSquare();


