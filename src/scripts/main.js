'use strict';

const ulElement = document.querySelector('.gallery__list');

const mainImage = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
ulElement.addEventListener('click', (event) => {
  event.preventDefault();

  mainImage.setAttribute('src', event.target.parentElement.href);
});
