'use strict';

const images = document.querySelector('ul');
const bigImage = document.querySelector('#largeImg');

images.addEventListener('click', (targetEvent) => {
  targetEvent.preventDefault();
  bigImage.src = targetEvent.target.src;
});
