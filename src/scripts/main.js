'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery'); // Контейнер галереи
  // eslint-disable-next-line max-len
  const mainImage = document.querySelector('#largeImg'); // Основное изображение (исправленный селектор)

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', (event) => {
    const target = event.target.closest('a'); // Упрощаем выбор цели

    if (target) {
      event.preventDefault(); // Предотвращаем переход по ссылке
      mainImage.src = target.href;
    }
  });
});
