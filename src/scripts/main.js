'use strict';

const largeImageElement = document.querySelector('#largeImg');
const galleryListElement = document.querySelector('#thumbs');

galleryListElement.addEventListener('click', (eventClick) => {
  eventClick.preventDefault();

  const thumbLink = eventClick.target.closest('.list-item__link');

  if (
    !thumbLink
    || !galleryListElement.contains(thumbLink)
  ) {
    return;
  }

  largeImageElement.src = thumbLink.href;
});
