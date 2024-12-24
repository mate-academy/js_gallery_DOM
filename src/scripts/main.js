'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image img');

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', (event) => {
    event.preventDefault(); // Забороняємо стандартну поведінку посилань

    // Знаходимо ціль кліку
    const target = event.target;

    if (target.tagName === 'IMG') {
      // Якщо клік по зображенню
      const newImageSrc = target.parentElement.getAttribute('href');

      mainImage.src = newImageSrc;
    } else if (target.tagName === 'A') {
      // Якщо клік по зовнішній оболонці
      const newImageSrc = target.getAttribute('href');

      mainImage.src = newImageSrc;
    }
  });
});
