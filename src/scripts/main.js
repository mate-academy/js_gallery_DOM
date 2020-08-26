'use strict';

const largImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  };

  largImg.src = item.href;
});
