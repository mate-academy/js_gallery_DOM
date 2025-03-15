'use strict';

const largeImg = document.getElementById('largeImg');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item');

  const a = target.querySelector('a');

  largeImg.src = a.href;
});
