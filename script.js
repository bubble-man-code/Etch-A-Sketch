for (let i = 0; i < 256; i++) {
const div = document.createElement('div');
div.classList.add('box');
div.textContent = "";
document.getElementById('container').appendChild(div);
div.addEventListener('mouseenter', function(e) {
    e.target.style.backgroundColor = 'black';
})
div.addEventListener('mouseleave', function(e) {
    e.target.style.backgroundColor = 'lightblue';
})}
