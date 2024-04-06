'use strict';

const largeImg = document.querySelector('#largeImg');

const list = document.querySelector('.gallery__list');

list.addEventListener('click', (listener) => {
  listener.preventDefault();

  const properLink = listener.target.closest('a');

  largeImg.src = properLink.href;
});
