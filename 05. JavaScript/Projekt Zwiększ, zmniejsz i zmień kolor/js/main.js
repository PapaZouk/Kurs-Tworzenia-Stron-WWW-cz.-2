const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const colorText = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 20;
const colors = ['royalblue', 'orange', 'violet', 'tomato']

function enlargeFont () {
    fontSize += 5
    p.style.fontSize = fontSize + 'px'
    // return fontSize
}

function decreaseFont () {
    fontSize -= 5
    p.style.fontSize = fontSize + 'px'
}

function changeColor () {
    p.style.color = 'royalblue'
}

//========================
// Rejestratory zdarzeń
//========================

sizeUp.addEventListener('click', enlargeFont);
sizeDown.addEventListener('click', decreaseFont);
colorText.addEventListener('click', changeColor);