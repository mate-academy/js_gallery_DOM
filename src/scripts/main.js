'use strict';

const list = document.querySelector('.gallery__list');
const bigImg = document.querySelector('#largeImg');

list.addEventListener('click', e => {
  e.preventDefault();

  let item = e.target;

  if (item.classList.contains('gallery__img')) {
    item = item.parentElement;
  }
  bigImg.src = item.href;
});
