'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const ul = document.querySelector('.gallery__list');

ul.addEventListener('click', (event) => {
  event.preventDefault();

  const link = event.target.closest('a');

  largeImg.src = link.href;
})
