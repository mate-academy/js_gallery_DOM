'use strict';

const mainImg = document.querySelector('#largeImg');

const list = document.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (link === null) {
    return;
  }

  mainImg.src = link.href;
});
