'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item');

  event.preventDefault();

  if (!item || !list.contains(item)) {
    return;
  }

  const src = item.querySelector('.list-item__link').href;

  largeImg.src = src;
});
