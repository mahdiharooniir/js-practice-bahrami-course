document.addEventListener('keydown', (event) => {
  document.getElementById(event.code).classList.add('inset-shadow-sm', 'text-green-500');
})

document.addEventListener('keyup', (event) => {
  document.getElementById(event.code).classList.remove('inset-shadow-sm', 'text-green-500')
})
