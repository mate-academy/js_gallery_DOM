'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

function clickHandler(clickEvent) {
  clickEvent.preventDefault();

  const galleryItem = clickEvent.target.closest('a');

  if (!galleryItem) {
    return;
  }
  largeImg.src = galleryItem.href;
};
thumbs.addEventListener('click', clickHandler);
