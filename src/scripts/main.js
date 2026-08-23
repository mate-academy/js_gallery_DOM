'use strict';

const gallery = document.querySelector('.gallery');

const thumbs = gallery.querySelector('.gallery__list');

const mainImage = gallery.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  const image = e.target.closest('.list-item');

  e.preventDefault();

  if (!image) {
    return;
  }

  mainImage.src = image.querySelector('.list-item__link').href;
});
