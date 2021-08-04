'use strict';

const mainImage = document.querySelector('#largeImg');
const images = document.querySelector('#thumbs');

images.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImage.src = item.href;
});
