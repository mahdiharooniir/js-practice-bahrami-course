const box = document.querySelector('#box')

box.addEventListener('mouseenter', () => {
  const x = Math.random() * (window.innerWidth - box.offsetWidth)
  const y = Math.random() * (window.innerHeight - box.offsetHeight)
  box.style.left = `${x}px`
  box.style.top = `${y}px`
})

box.addEventListener('click', () => {
  alert('افرین، تونستی روش کلیک کنی')
})

