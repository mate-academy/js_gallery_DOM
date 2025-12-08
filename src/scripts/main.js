'use strict';

const gallery = document.querySelector('.gallery');
const bigImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const image = e.target.closest('.list-item__link');

  if (!image) {
    return;
  }

  e.preventDefault();
  bigImage.src = image.href;
});
