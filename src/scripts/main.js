'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', () => {
  event.preventDefault();

  const selected = event.target.closest('.list-item__link');

  largeImg.src = selected.href;
});
