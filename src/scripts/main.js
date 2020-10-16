'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const listlImg = document.querySelector('ul');

listlImg.addEventListener('click', (event) => {
  event.preventDefault();

  const image = event.target.closest('.list-item');

  largeImg.src = image.children[0].href;
});
