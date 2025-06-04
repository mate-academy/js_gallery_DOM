'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

gallery.addEventListener('click', (e) => {
  const link = e.target.closest('a.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  const newSrc = link.getAttribute('href');

  largeImg.src = newSrc;
});
