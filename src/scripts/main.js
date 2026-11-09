'use strict';

const bigImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  bigImage.src = link.href;
});
