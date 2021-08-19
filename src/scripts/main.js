'use strict';

const largeImage = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', e => {
  const item = e.target;
  const newSrc = item.parentElement.href;

  e.preventDefault();
  largeImage.setAttribute('src', newSrc);
});
