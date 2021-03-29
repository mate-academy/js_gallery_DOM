'use strict';

const gallery = document.querySelector('.gallery__list');
const image = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', e => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  image.src = link.href;
});
