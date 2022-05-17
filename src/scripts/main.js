'use strict';

const list = document.querySelector('.gallery__list');

const mainImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (someEvent) => {
  someEvent.preventDefault();

  mainImg.src = someEvent.target.closest('.list-item__link').href;
});
