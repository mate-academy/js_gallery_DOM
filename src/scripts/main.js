'use strict';

const listUl = document.querySelector('.gallery__list');

const bigImage = document.querySelector('#largeImg');

listUl.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  bigImage.src = link.href;
});
