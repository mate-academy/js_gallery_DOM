'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  e.preventDefault();

  largeImg.src = item.href;
});
