'use strict';

const body = document.querySelector('body');
const largeImg = document.querySelector('.gallery__large-img');

body.addEventListener('click', (ent) => {
  ent.preventDefault();

  const item = ent.target.closest('.gallery__thumb');

  if (!item || !body.contains(item)) {
    return;
  }

  largeImg.src = item.closest('.list-item__link').href;
});
