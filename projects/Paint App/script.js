const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = 800;
canvas.height = 500;

let painting = false;
let erasing = false;
let brushColor = '#000000'; 

function startPosition(e) {
    painting = true;
    draw(e); 
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = erasing ? '#ffffff' : brushColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mouseout', endPosition);
canvas.addEventListener('mousemove', draw);

const brushBtn = document.getElementById('brush');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');
const colorPicker = document.getElementById('colorPicker');

brushBtn.addEventListener('click', () => {
    erasing = false;
    setActiveTool(brushBtn);
});

eraserBtn.addEventListener('click', () => {
    erasing = true;
    setActiveTool(eraserBtn);
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener('input', (e) => {
    brushColor = e.target.value;
});

function setActiveTool(activeButton) {
    document.querySelectorAll('.tool').forEach(btn => {
        btn.classList.remove('active');
    });
    activeButton.classList.add('active');
}
