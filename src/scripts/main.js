'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  const img = clickEvent.target.closest('.list-item__link');

  if (!img) {
    return;
  }

  largeImg.src = img.href;
});
