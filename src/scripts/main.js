'use strict';

const mainImage = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (mouseEvent) => {
  const item = mouseEvent.target.closest('.gallery__thumb');

  if (!item || !thumbs.contains(item)) {
    return;
  }
  mouseEvent.preventDefault();
  mainImage.src = mouseEvent.target.closest('.list-item__link').href;
});
