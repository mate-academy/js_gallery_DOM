'use strict';

const largeImage = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImage.src = link.href;
});
