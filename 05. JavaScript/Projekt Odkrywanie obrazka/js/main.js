const arrow = document.querySelector('.fas');
const button = document.querySelector('.arrow');
const image1 = document.querySelector('.item1');

console.log(arrow);
console.log(button);
console.log(image1);

function resize () {
    image1.classList.toggle('show');

    if (image1.classList.contains('show')) {
        console.log(`True`)
        button.classList.toggle('fas-transform')
        // arrow.style.transform = 'rotate(180deg)'
    } else {
        console.log(`False`)
        // arrow.style.transform = 'rotate(0deg)'
        button.classList.toggle('fas-transform')
    }
}



button.addEventListener('click', resize);