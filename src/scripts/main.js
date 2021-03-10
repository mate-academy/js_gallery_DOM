'use strict';

const ulElement = document.querySelector('.gallery__list');

const mainImage = document.querySelector('#largeImg');

ulElement.addEventListener('click', (clickEvent) => {
  clickEvent.preventDefault();

  mainImage.setAttribute('src', clickEvent.target.parentElement.href);
});
