'use strict';

const source = document.querySelector('#largeImg');
const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (evnt) => {
  const li = evnt.target.closest('.list-item');

  if (!li) {
    return;
  }

  evnt.preventDefault();

  const href =
    window.location.protocol +
    '//' +
    window.location.host +
    li.querySelector('a').getAttribute('href');

  source.setAttribute('src', href);
});
