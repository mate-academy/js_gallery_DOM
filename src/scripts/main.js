'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  e.preventDefault();
  largeImage.src = link.href;
});
