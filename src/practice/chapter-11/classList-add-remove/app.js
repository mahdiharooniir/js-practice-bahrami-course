const showBtn = document.querySelector('#showBtn')
const hideBtn = document.querySelector('#hideBtn')
const box = document.querySelector('.box')

hideBtn.onclick = function() {
    box.classList.add('hidden')
}

showBtn.onclick = function() {
    box.classList.remove('hidden')
}