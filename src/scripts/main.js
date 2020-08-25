'use strict';

const mainImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item || !thumbs.contains(item)) {
    return;
  }

  mainImage.src = item.href;
});
