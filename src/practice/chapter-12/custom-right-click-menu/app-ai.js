const contextMenu = document.querySelector('#context-menu');
const subMenu = document.querySelector('#sub-menu');

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const cmWidth = contextMenu.offsetWidth;
  const cmHeight = contextMenu.offsetHeight;
  const subWidth = subMenu.offsetWidth;
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  let x, y;

  // ✳️ تنظیم جهت منو (برای زبان فارسی: سمت چپ موس به‌صورت پیش‌فرض)
  const spaceOnLeft = mouseX > cmWidth + 10;
  const spaceOnRight = winWidth - mouseX > cmWidth + 10;

  if (spaceOnLeft) {
    // باز شدن منو در سمت چپ موس
    x = mouseX - cmWidth;
  } else if (spaceOnRight) {
    // اگر نزدیک لبه چپ بود، سمت راست موس باز بشه
    x = mouseX;
  } else {
    // در صورت کمبود فضا، وسط صفحه باز بشه
    x = (winWidth - cmWidth) / 2;
  }

  // ✳️ تنظیم موقعیت عمودی
  if (mouseY + cmHeight > winHeight) {
    y = winHeight - cmHeight - 10;
  } else {
    y = mouseY;
  }

  contextMenu.style.position = 'fixed';
  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;

  // ✳️ جهت زیرمنو: بسته به فضای چپ یا راست
  const spaceForSubLeft = x > subWidth + 30;
  const spaceForSubRight = winWidth - (x + cmWidth) > subWidth + 30;

  if (spaceForSubLeft) {
    // زیرمنو در سمت چپ باز شود
    subMenu.style.right = `${cmWidth - 3}px`;
    subMenu.style.left = 'auto';
  } else if (spaceForSubRight) {
    // زیرمنو در سمت راست باز شود
    subMenu.style.left = `${cmWidth - 3}px`;
    subMenu.style.right = 'auto';
  }

  contextMenu.classList.remove('invisible');
});

document.addEventListener('mousedown', (e) => {
  if (!contextMenu.contains(e.target)) contextMenu.classList.add('invisible');
});

window.addEventListener('scroll', () => contextMenu.classList.add('invisible'));




