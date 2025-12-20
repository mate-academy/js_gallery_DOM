'use strict';

const galery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

galery.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();
  largeImg.src = `${link.href}`;
});

