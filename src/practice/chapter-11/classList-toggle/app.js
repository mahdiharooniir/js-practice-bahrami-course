const items = document.querySelectorAll('li')
items.forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('active'))
})