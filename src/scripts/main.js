'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImage = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  const imageLink = e.target.closest('.list-item__link');

  if (!imageLink) {
    return;
  }

  e.preventDefault();

  mainImage.src = imageLink.href;
});
