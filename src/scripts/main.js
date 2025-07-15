'use strict';

const galleryList = document.querySelector('.gallery__list');
const mainImage = document.getElementById('largeImg');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const anchor = e.target.closest('a');

  if (!anchor) {
    return;
  }

  const newSrc = anchor.getAttribute('href');

  mainImage.src = newSrc;
});
