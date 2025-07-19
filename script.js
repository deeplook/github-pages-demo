const colorButton = document.getElementById('colorButton');
const body = document.querySelector('body');

const colors = ['#f0f8ff', '#faebd7', '#e6e6fa', '#fff0f5', '#f5f5dc'];
let currentColorIndex = 0;

colorButton.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
});