'use strict';

const thumbnails = document.querySelector('.gallery__thumbnails');
const mainImage = document.querySelector('.gallery__main img');

thumbnails.addEventListener('click', (e) => {
  const img = e.target.closest('img');

  if (!img) {
    return;
  }

  e.preventDefault();
  mainImage.src = img.src;
});
