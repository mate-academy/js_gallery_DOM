'use strict';

const list = document.querySelector('.gallery__list');
const bigImage = document.querySelector('#largeImg');

list.addEventListener('click', (evt) => {
  const item = evt.target;

  evt.preventDefault();

  bigImage.src = item.parentElement.href;
});
