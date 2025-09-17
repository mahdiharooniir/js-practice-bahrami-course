const contextMenu = document.querySelector('.contextmenu')

document.addEventListener('contextmenu', function(event) {
    event.preventDefault()
    contextMenu.classList.replace('hidden', 'flex')
    contextMenu.style.left = `${event.pageX}px`
    contextMenu.style.top =  `${event.pageY}px`
})

document.addEventListener('mousedown', function(event) {
    contextMenu.classList.replace('flex', 'hidden')
})