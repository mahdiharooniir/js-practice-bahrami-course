const form = document.querySelector('form');
const button = document.querySelector('button');
const successMessage = document.querySelector('#success-message');

// General validation function
function validateField(input) {
  const value = input.value.trim();
  const errorElement = document.querySelector(`#${input.id}-error`);
  let errorText = '';

  // Field-specific validation
  switch (input.id) {
    case 'name':
      if (value === '') errorText = 'نام را وارد کنید';
      break;

    case 'email':
      const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
      if (value === '') errorText = 'ایمیل را وارد کنید';
      else if (!pattern.test(value)) errorText = 'ایمیل معتبر نیست';
      break;

    case 'pass':
      if (value.length < 6) errorText = 'رمز عبور حداقل باید ۶ کاراکتر باشد';
      break;

    case 'confirm-pass':
      const passValue = document.querySelector('#pass').value.trim();
      if (value === '') errorText = 'رمز عبور را مجدد وارد کنید';
      else if (value !== passValue) errorText = 'رمز عبور تطابق ندارد';
      break;
  }

  // Show or remove error state
  if (errorText) {
    input.classList.replace('border-gray-300', 'border-rose-600');
    errorElement.textContent = errorText;
    return false;
  } else {
    input.classList.replace('border-rose-600', 'border-gray-300');
    errorElement.textContent = '';
    return true;
  }
}

// Validate on blur
form.addEventListener('blur', (e) => {
  if (e.target.tagName === 'INPUT') {
    validateField(e.target);
  }
}, true); // capture=true to catch blur

// Remove error while typing
form.addEventListener('input', (e) => {
  if (e.target.tagName === 'INPUT') {
    const errorElement = document.querySelector(`#${e.target.id}-error`);
    e.target.classList.replace('border-rose-600', 'border-gray-300');
    errorElement.textContent = '';
  }
});

// Submit button handler
button.addEventListener('click', () => {
  const inputs = form.querySelectorAll('input');
  let allValid = true;

  inputs.forEach(input => {
    const valid = validateField(input);
    if (!valid) allValid = false;
  });

  if (allValid) {
    successMessage.textContent = 'ثبت‌ نام با موفقیت انجام شد ✅';
    successMessage.classList.remove('invisible');
    form.reset();
  } else {
    successMessage.textContent = '';
    successMessage.classList.add('invisible');
  }
});
