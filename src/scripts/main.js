'use strict';

const mainImage = document.querySelector('#largeImg');
const thumbnails = document.querySelector('#thumbs');

thumbnails.addEventListener('click', e => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  mainImage.src = link.href;
});
