'use strict';

const list = document.querySelector('.gallery__list');
const mainPicture = document.querySelector('.gallery__large-img');

list.addEventListener('click', (eventToHandle) => {
  const item = eventToHandle.target.closest('.list-item__link');

  eventToHandle.preventDefault();

  if (!item || !list.contains(item)) {
    return;
  }

  mainPicture.src = item.href;
});
