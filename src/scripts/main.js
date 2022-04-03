'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (action) => {
  action.preventDefault();

  let img = action.target.closest('.list-item__link');

  if(!img) return;

  largeImg.src = img.href;
});

