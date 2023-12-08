'use strict';

const largeImg = document.getElementById('largeImg');
const galleryThumbs = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
galleryThumbs.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  event.preventDefault();

  largeImg.setAttribute('src', item.href);
});
