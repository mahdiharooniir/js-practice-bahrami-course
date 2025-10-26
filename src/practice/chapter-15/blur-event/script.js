const day = document.querySelector('#day')
const month = document.querySelector('#month')

day.addEventListener('blur', handler )
month.addEventListener('blur', monthHandler)

function handler() {
  if (!(day.value <= 31 && day.value >= 1)) {
    day.nextElementSibling.innerHTML = 'عددی بین ۱ تا ۳۱ وارد کنید'
    day.nextElementSibling.classList.remove('invisible')
  } else {
    day.nextElementSibling.innerHTML = '';
  }
}

function monthHandler() {
    if (!(month.value <= 12 && month.value >= 1)) {
    month.nextElementSibling.innerHTML = 'عددی بین ۱ تا ۱۲ وارد کنید'
    month.nextElementSibling.classList.remove('invisible')
  } else {
    month.nextElementSibling.innerHTML = '';
  }
}
