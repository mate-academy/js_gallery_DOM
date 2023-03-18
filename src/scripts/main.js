'use strict';

const pictures = document.querySelector('.gallery__list');
const largePicture = document.querySelector('#largeImg');

pictures.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item || !pictures.contains(item)) {
    return;
  }

  largePicture.src = item.querySelector('.list-item__link').href;
});
