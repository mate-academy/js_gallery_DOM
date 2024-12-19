'use strict';

const largeImg = document.querySelector('#largeImg');
const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  e.preventDefault();

  largeImg.setAttribute('src', link.getAttribute('href'));
});
