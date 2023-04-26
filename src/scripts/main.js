'use strict';

const mainImage = document.querySelector('#largeImg');
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.closest('.list-item__link')) {
    mainImage.src = e.target.closest('.list-item__link').href;
  }
});
