'use strict';

const list = document.querySelector('.gallery__list');
const preview = document.querySelector('.gallery__large-img');

list.addEventListener('click', e => {
  const item = e.target.parentElement.href;

  e.preventDefault();
  preview.src = item;
});
