'use strict';

const largeImg = document.querySelector('#largeImg');
const galeryImg = document.querySelector('ul');

galeryImg.addEventListener('click', (e) => {
  e.preventDefault();

  const newLargeImg = e.target.closest('.gallery__thumb');

  largeImg.setAttribute('src', newLargeImg.getAttribute('src'));
});
