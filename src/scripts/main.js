'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', (evt) => {
  evt.preventDefault();
  largeImg.src = evt.target.closest('.list-item__link');
});
