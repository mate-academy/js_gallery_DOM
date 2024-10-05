'use strict';

const largeImg = document.querySelector('.gallery__large-img');

const smallImg = document.querySelector('.gallery__list');

smallImg.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
  e.preventDefault();
});
