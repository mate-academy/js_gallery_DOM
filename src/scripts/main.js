'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('.gallery__large-img');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.src = e.target.closest('.list-item__link').href;
});
