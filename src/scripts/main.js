'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const itemList = document.querySelector('.gallery__list');

itemList.addEventListener('click', (ev) => {
  ev.preventDefault();
  largeImg.src = ev.target.src;
});
