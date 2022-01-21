'use strict';

const bigImg = document.querySelector('.gallery__large-img');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (clickEvent) => {
  const item = clickEvent.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return;
  }

  clickEvent.preventDefault();

  bigImg.src = item.children[0].href;
});
