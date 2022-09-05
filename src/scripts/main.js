'use strict';

const mainImg = document.querySelector('.gallery__large-img');

const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', () => {
  const item = event.target.closest('.list-item__link');

  event.preventDefault();

  mainImg.src = item.href;
});
