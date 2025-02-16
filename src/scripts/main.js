'use strict';

const ul = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

ul.addEventListener('click', (mainEvent) => {
  mainEvent.preventDefault();

  const clickedThumb = mainEvent.target.closest('.gallery__thumb');

  if (!clickedThumb) {
    return;
  }

  mainImage.src = clickedThumb.parentNode.href;
});
