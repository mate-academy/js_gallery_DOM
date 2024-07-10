'use strict';

const images = document.querySelector('ul');

images.addEventListener('click', (e) => {
  e.preventDefault();

  document
    .getElementById('largeImg')
    .setAttribute('src', `${e.target.closest('.list-item__link')}`);
});
