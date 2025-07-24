'use strict';

const nav = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

nav.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
