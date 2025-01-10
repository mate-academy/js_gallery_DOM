'use strict';

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (ev) => {
  const link = ev.target.closest('.list-item__link');
  const largeImage = document.querySelector('.gallery__large-img');

  if (!link) {
    return;
  }

  ev.preventDefault();

  largeImage.src = link.href;
});
