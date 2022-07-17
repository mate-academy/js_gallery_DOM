'use strict';

const mainImage = document.querySelector('#largeImg');
const galleryList = document.querySelector('#thumbs');

galleryList.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('a');

  if (!item || !galleryList.contains(item)) {
    return;
  }

  mainImage.src = item.href;
});
