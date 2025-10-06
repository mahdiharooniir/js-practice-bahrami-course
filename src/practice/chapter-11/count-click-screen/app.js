const pElement = document.querySelector('.number');

let number = 0
document.body.addEventListener( 'click', () => {
    number++
    pElement.innerHTML = number
})