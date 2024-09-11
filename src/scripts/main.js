'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const imgLink = e.target.closest('.list-item__link');

  if (!imgLink) {
    return;
  }

  const largeImg = document.querySelector(
    '#largeImg.gallery__large-img.gallery__img',
  );

  largeImg.src = imgLink.href;
  largeImg.title = imgLink.title;
});
