// گرفتن همه آیتم‌های آکاردئون
const items = document.querySelectorAll('.accordion-item');

// تابع باز کردن آیتم
function openItem(item) {
  const header = item.querySelector('.accordion-header');
  const body = item.querySelector('.accordion-body');
  const arrow = header.querySelector('.arrow');

  item.classList.add('open');
  header.classList.replace('bg-sky-800/80', 'bg-sky-700'); // رنگ هدر وقتی باز است
  body.style.maxHeight = `${body.scrollHeight}px`;
  arrow.style.transform = 'rotate(45deg)'; // + تبدیل به ×
}

// تابع بستن آیتم
function closeItem(item) {
  const header = item.querySelector('.accordion-header');
  const body = item.querySelector('.accordion-body');
  const arrow = header.querySelector('.arrow');

  item.classList.remove('open');
  header.classList.replace('bg-sky-700', 'bg-sky-800/80'); // بازگرداندن رنگ اصلی
  body.style.maxHeight = null;
  arrow.style.transform = 'rotate(0deg)'; // × تبدیل به +
}

// تابع تغییر وضعیت (باز/بسته) آیتم
function toggleItem(item) {
  const isOpen = item.classList.contains('open');

  // بستن همه آیتم‌ها
  items.forEach(i => closeItem(i));

  // باز کردن فقط اگر قبلاً بسته بود
  if (!isOpen) openItem(item);
}

// اضافه کردن event listener به همه آیتم‌ها
items.forEach((item, index) => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => toggleItem(item));

  // باز کردن آیتم اول هنگام لود
  if (index === 0) openItem(item);
});



