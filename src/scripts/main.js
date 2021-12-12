'use strict';

const bigImg = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.gallery__img');

  if (!item || !galleryList.contains(item)) {
    return;
  }

  bigImg.src = item.parentElement.href;
});
