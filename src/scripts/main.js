'use strict';

const galery = document.querySelector('.gallery__list');
const bigImage = document.querySelector('#largeImg');

galery.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (ev.target.tagName === 'IMG') {
    bigImage.src = ev.target.parentElement.getAttribute('href');
  }
});
