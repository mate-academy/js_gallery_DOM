'use strict';

const nav = document.querySelector('.gallery__list');

nav.addEventListener('click', (even) => {
  even.preventDefault();

  const mainImage = document.querySelector('#largeImg');
  const link = even.target.closest('a').href;

  if (!link) {
    return;
  }

  mainImage.src = link;
});
