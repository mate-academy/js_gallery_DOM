'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbsContainer = document.querySelector('.gallery__list');

thumbsContainer.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.setAttribute('src', link.href);
});
