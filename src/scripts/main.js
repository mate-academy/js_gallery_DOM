'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', e => {
  const item = e.target.closest('.list-item');

  e.preventDefault();

  largeImg.setAttribute('src', item.firstElementChild.href);
});
