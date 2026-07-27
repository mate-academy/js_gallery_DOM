'use strict';

const galleryListElement = document.querySelector('#thumbs');
const largeImgElement = document.querySelector('#largeImg');

galleryListElement.addEventListener('click', (evt) => {
  evt.preventDefault();

  const link = evt.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImgElement.src = link.href;
});
