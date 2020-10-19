'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', function(e) {
  e.preventDefault();

  const item = e.target;

  largeImg.src = item.closest('.list-item__link').href;
});
