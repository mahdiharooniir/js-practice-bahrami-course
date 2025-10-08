const contextMenu = document.querySelector('#context-menu');
const subMenu = document.querySelector('#sub-menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault()

  let x = e.pageX;
  let y = e.pageY;

  let cmWidth = contextMenu.offsetWidth;
  let cmHeight = contextMenu.offsetHeight;

  let winWidth = window.innerWidth;
  let winHeight = window.innerHeight;

  let subWidth = subMenu.offsetWidth;

  if (x < cmWidth) {
    x = 0
    subMenu.style.right = `-177px`
  } else {
    x = x - cmWidth
    if(x < 168) {
      subMenu.style.right = `-177px`
    } else {
      subMenu.style.right = '248px'
    }
  }

  contextMenu.style.left = `${x}px`
  contextMenu.style.top = `${y}px`
  contextMenu.classList.remove('invisible');
})

document.addEventListener('mousedown', () => {
  contextMenu.classList.add('invisible')
})
