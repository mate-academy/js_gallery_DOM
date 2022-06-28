'use strict';

const list = document.querySelector('.gallery__list');

const bigImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (someEvent) => {
  someEvent.preventDefault();

  bigImg.src = someEvent.target.closest('.list-item__link').href;
});
