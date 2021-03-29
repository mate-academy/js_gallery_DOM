'use strict';

const gallery = document.querySelector('.gallery__list');
const image = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (element) => {
  const link = element.target.closest('.list-item__link');

  element.preventDefault();
  image.src = link.href;
});
