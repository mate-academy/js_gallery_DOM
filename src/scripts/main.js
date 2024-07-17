'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.src = e.target.closest('a').href;
});
