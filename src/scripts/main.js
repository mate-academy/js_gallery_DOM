'use strict';

const largeImg = document.querySelector('#largeImg');
const galeryImg = document.querySelector('ul');

galeryImg.addEventListener('click', (e) => {
  e.preventDefault();

  const newLargeImg = e.target.closest('.list-item__link');

  largeImg.setAttribute('src', newLargeImg);
});
