'use strict';

const ul = document.querySelector('.gallery__list');
const liImg = document.querySelector('.gallery div img');

ul.addEventListener('click', (evnt) => {
  const item = evnt.target;

  evnt.preventDefault();

  const itemParent = item.closest('.list-item');

  if (itemParent === null) {
    return;
  }

  const mySrc = item.src;

  liImg.src = mySrc;
});
