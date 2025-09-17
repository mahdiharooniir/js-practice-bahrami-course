const pElement = document.querySelector('.number');

let number = 0
document.body.onclick = function() {
    number++
    pElement.innerHTML = number
}