'use strict';

const buttonsBlock = document.body.querySelector('.gallery__list');
const largeImage = document.body.querySelector('#largeImg');

buttonsBlock.addEventListener('click', (ev) => {
  ev.preventDefault();

  const picture = ev.target.closest('.list-item__link');

  largeImage.src = `${picture.href}`;
});
