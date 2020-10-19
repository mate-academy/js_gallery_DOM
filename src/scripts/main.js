'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', function(event) {
  event.preventDefault();

  const item = event.target;

  largeImg.src = item.closest('.list-item__link').href;
});
