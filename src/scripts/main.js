'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = gallery.querySelector('#largeImg');
const smallImg = gallery.querySelector('.gallery__list');

// eslint-disable-next-line no-shadow
smallImg.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const linkHref = link.getAttribute('href');

  largeImg.setAttribute('src', linkHref);
});
