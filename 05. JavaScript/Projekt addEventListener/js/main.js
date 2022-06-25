const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const squere = document.querySelector('.color');
const removeColor = document.querySelector('.remove-color');
console.log(removeColor);
console.log(squere);
console.log(btn2);
console.log(btn1);

function redColor () {
    // squere.classList.add('red');
    squere.classList.toggle('red');
    squere.classList.remove('blue');
}

function blueColor () {
    // squere.classList.add('blue');
    squere.classList.toggle('blue');
    squere.classList.remove('red');
}

function deleteColor () {
    squere.classList.remove('red', 'blue');
}

btn1.addEventListener('click', redColor);
btn2.addEventListener('click', blueColor);
removeColor.addEventListener('click', deleteColor);