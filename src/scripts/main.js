'use strict';

const largeImg = document.getElementById('largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  largeImg.src = e.target.closest('.list-item__link').href;
});
