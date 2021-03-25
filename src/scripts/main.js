'use strict';

const largeImage = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', () => {
  event.preventDefault();

  const picture = event.target.closest('.list-item__link');

  if (!picture) {
    return;
  }

  largeImage.src = picture.href;
});
