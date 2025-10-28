const form = document.querySelector('form')
const phone = document.querySelector('#phone')

form.addEventListener('submit', submitForm)
form.addEventListener('reset', resetForm)

function submitForm(event) {
  if (phone.value.length !== 11) {
    event.preventDefault();
    phone.nextElementSibling.innerHTML = 'شماره تلفن صحیح ۱۱ رقم می باشد'
  }
}

function resetForm(event) {
  phone.nextElementSibling.innerHTML = 'شماره پاک شد'
}
