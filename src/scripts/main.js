/* eslint-disable no-shadow */
'use strict';

const largeImage = document.getElementById('largeImg');
const imagesList = document.querySelector('.gallery__list');

imagesList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item || !imagesList.contains(item)) {
    return;
  }
  showThumbnail(item.href, item.title);
});

function showThumbnail(href, title) {
  largeImage.src = href;
  largeImage.alt = title;
}
