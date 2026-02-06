let numberOfBoxes = 16;
var r = document.querySelector(':root');
function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function myFunction_set() {
  r.style.setProperty('--n', numberOfBoxes);
}
let createBoxes = function() {
for (let i = 0; i < (numberOfBoxes * numberOfBoxes); i++) {
const div = document.createElement('div');
div.classList.add('box');
div.textContent = "";
document.getElementById('container').appendChild(div);
div.addEventListener('mouseenter', function(e) {
    e.target.style.backgroundColor = 'lightgray';
})
div.addEventListener('mouseleave', function(e) {
    e.target.style.backgroundColor = randomRgbColor();
})}}
createBoxes()
const resizeButton = document.getElementById('resizeButton');
resizeButton.addEventListener('click', function() {
    const container = document.getElementById('container');
container.innerHTML = ''; // Wipes everything inside
    let newSize = prompt("Enter new grid size (max 100):");
    newSize = Math.min(newSize, 100);
numberOfBoxes = newSize;
myFunction_set(); 
createBoxes()
   })