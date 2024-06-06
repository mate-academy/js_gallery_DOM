/* eslint-disable no-shadow */
'use strict';

const galary = document.querySelector('.gallery__list');

galary.addEventListener('click', (event) => {
  event.preventDefault();

  const smallLink = event.target.closest('.list-item__link');
  const bigImage = document.querySelector('.gallery__large-img');

  bigImage.setAttribute('src', smallLink.getAttribute('href'));
});
