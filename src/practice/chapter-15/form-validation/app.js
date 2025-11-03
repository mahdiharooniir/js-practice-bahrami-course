const button = document.querySelector('button')

const nameError = document.querySelector('#nameError')
const emailError = document.querySelector('#emailError')
const passError = document.querySelector('#passError')
const confirmPassError = document.querySelector('#confirmPassError')
const successMessage = document.querySelector('#successMessage')

button.addEventListener('click', () => {
  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const pass = document.querySelector('#pass').value
  const confirmPass = document.querySelector('#confirmPass').value

  nameError.innerHTML = ''
  emailError.innerHTML = ''
  passError.innerHTML = ''
  confirmPassError.innerHTML = ''
  successMessage.innerHTML = ''

  let isValid = true;
  if (name === '') {
    nameError.innerHTML = 'نام نمی تواند خالی باشد'
    isValid = false;
  }

  const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
  if (pattern.test(email) == false) {
    emailError.innerHTML = 'ایمیل معتبر نیست'
    isValid = false
  }

  if (pass.length < 8) {
    passError.innerHTML = 'رمز عبور حداقل ۸ کاراکتر باید داشته باشد'
    isValid = false
  }

  if (confirmPass !== pass) {
    confirmPassError.innerHTML = 'تکرار رمز عبور با رمز عبور مطابقت ندارد'
    isValid = false
  }

  if (isValid) {
    successMessage.innerHTML = 'با موفقیت ثبت نام شدید'
    successMessage.classList.remove('invisible')

  }
})
