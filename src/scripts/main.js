'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const largeImg = document.querySelector('#largeImg');

  if (gallery && largeImg) {
    gallery.addEventListener('click', (e) => {
      // Нормалізуємо ціль події — забезпечуємо, що target це Element
      const target =
        e.target instanceof Element ? e.target : e.target.parentElement;

      if (!target) {
        return;
      }

      const link = target.closest('a');

      if (link) {
        e.preventDefault();

        // Використовуємо абсолютний URL з link.href
        const href = link.href;

        if (href) {
          largeImg.src = href;

          // Додатково оновлюємо alt великого зображення для доступності
          const thumbAlt = link.querySelector('img')?.alt || '';

          largeImg.alt = thumbAlt;
        }
      }
    });
  }
});
