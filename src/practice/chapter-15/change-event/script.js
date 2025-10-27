const text = document.querySelector('#text');
const checkbox = document.querySelector('#checkbox');
const textarea = document.querySelector('#textarea');
const select = document.querySelector('#select');

text.addEventListener('change', handler);
checkbox.addEventListener('change', handler);
textarea.addEventListener('change', handler);
select.addEventListener('change', handler);

function handler(event) {
  event.target.nextElementSibling.innerHTML += 'change '
}
