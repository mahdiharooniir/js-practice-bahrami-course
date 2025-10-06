const showBtn = document.querySelector('#showBtn')
const hideBtn = document.querySelector('#hideBtn')
const box = document.querySelector('.box')

hideBtn.addEventListener('click', () => {
    box.classList.add('hidden')
})

showBtn.addEventListener('click', () => {
    box.classList.remove('hidden')
})