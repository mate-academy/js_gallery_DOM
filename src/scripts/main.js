'use strict';

const largeImage = document.querySelector('#largeImg');
const smallImages = document.querySelector('#thumbs');

smallImages.addEventListener('click', (e) => {
  e.preventDefault();

  const target = e.target.closest('.list-item__link');

  if (!target) {
    return;
  }

  largeImage.src = target.href;
  largeImage.alt = target.title;
});
