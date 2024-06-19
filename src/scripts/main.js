'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const image = document.getElementById('largeImg');

  image.src = link.href;
});
