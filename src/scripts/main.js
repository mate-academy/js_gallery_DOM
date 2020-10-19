'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('ul');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('.list-item__link');

  largeImg.src = image.href;
});
