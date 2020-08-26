'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const img = event.target.closest('.list-item__link');

  largeImg.src = img.href;
});
