'use strict';

const mainImage = document.querySelector('#largeImg');
const imagesList = document.querySelector('#thumbs');

imagesList.addEventListener('click', (currentEvent) => {
  currentEvent.preventDefault();

  const item = currentEvent.target.closest('.list-item__link');

  if (!item || !imagesList.contains(item)) {
    return;
  }

  mainImage.src = item.href;
});
