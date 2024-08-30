'use strict';

const gallery = document.querySelector('.gallery__img');
const ul = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
ul.addEventListener('click', (event) => {
  event.preventDefault();

  const img = event.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  img.getAttribute('href');
  gallery.setAttribute('src', img);
});
