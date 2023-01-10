'use strict';

const mainImage = document.getElementById('largeImg');
const listImages = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
listImages.addEventListener('click', (event) => {
  if (event.target.classList.contains('gallery__thumb')) {
    event.preventDefault();

    mainImage.src = event.target.parentElement.href;
  }
});
