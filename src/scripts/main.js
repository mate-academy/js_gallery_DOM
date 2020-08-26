'use strict';

const galleryList = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

galleryList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item || !galleryList.contains(item)) {
    return;
  }

  mainImg.src = item.href;
});
