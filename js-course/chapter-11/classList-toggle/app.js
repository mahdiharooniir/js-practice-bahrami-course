const items = document.querySelectorAll('li')
items.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('active')
    }
})