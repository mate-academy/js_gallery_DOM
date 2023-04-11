'use strict';

const list = document.querySelector('.gallery__list');

const picture = document.querySelector('.gallery__large-img');

list.addEventListener('click', (events) => {
  const item = events.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  events.preventDefault();

  picture.src = item.href;
});
