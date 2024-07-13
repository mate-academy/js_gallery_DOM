'use strict';

const galery = document.querySelector('.gallery');
const mainPhoto = document.querySelector('.gallery__large-img');

galery.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link'); // есть href

  // check if click was inside a `.nav__link`
  if (!item) {
    return;
  }

  mainPhoto.src = item.href; // Изменение `src` основного изображения
});
