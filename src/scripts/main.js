'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', () => {
  event.preventDefault();

  const img = event.target.parentElement;

  largeImg.src = img.href;
});
