'use strict';

const list = document.querySelector('.gallery__list');
const large = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (!item) {
    return;
  }
  large.src = item.href;
});
