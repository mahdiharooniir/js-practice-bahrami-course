const clickDisplay = document.querySelector('.click span')
const dblClickDisplay = document.querySelector('.dblClick span')
const button = document.querySelector('button')

let clickCounter = 0;
let dblClickCounter = 0;

button.addEventListener('click', function() {
    clickCounter++
    clickDisplay.innerHTML = clickCounter
})

button.addEventListener('dblclick', function() {
    dblClickCounter++
    dblClickDisplay.innerHTML = dblClickCounter
})


