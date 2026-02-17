'use strict';

const mainImage = document.getElementById('largeImg');
const thumbsList = document.getElementById('thumbs');

thumbsList.addEventListener('click', (e) => {
  // 1. Спочатку знаходимо елемент списку
  const item = e.target.closest('.list-item');

  // Якщо клік був не по елементу списку — ігноруємо
  if (!item) {
    return;
  }

  // 2. Шукаємо посилання ТІЛЬКИ всередині знайденого елемента .list-item
  const link = item.querySelector('a');

  // Якщо посилання всередині немає — ігноруємо
  if (!link) {
    return;
  }

  // 3. Тепер безпечно блокуємо перехід (це точно посилання галереї)
  e.preventDefault();

  // 4. Оновлюємо картинку
  const largeImageUrl = link.href;

  if (largeImageUrl) {
    mainImage.src = largeImageUrl;
  }
});
