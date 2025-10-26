const accordion = document.querySelector('.accordion')

// باز کردن آیتم اول در شروع
const firstBody = accordion.querySelector('.accordion-body')
const firstArrow = accordion.querySelector('.accordion-header .arrow')
firstBody.style.maxHeight = `${firstBody.scrollHeight}px`
firstArrow.style.transform = 'rotate(45deg)'

accordion.addEventListener('click', (event) => {
  const header = event.target.closest('.accordion-header')
  if (!header) return // کلیک خارج از هدر بی‌اثر باشد

  const body = header.nextElementSibling
  const arrow = header.querySelector('.arrow')

  if (body.style.maxHeight) {
    // اگر همین آیتم باز است → ببند
    body.style.maxHeight = null
    arrow.style.transform = 'rotate(0deg)'
  } else {
    // بستن همه‌ی آیتم‌ها
    accordion.querySelectorAll('.accordion-body').forEach(b => b.style.maxHeight = null)
    accordion.querySelectorAll('.arrow').forEach(a => a.style.transform = 'rotate(0deg)')

    // باز کردن آیتم کلیک‌شده
    body.style.maxHeight = `${body.scrollHeight}px`
    arrow.style.transform = 'rotate(45deg)'
  }
})

