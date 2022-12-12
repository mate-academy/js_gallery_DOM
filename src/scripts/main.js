'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', function(eventClick) {
  eventClick.preventDefault();

  const target = eventClick.target.closest('.list-item__link');

  if (!target || !list.contains(target)) {
    return;
  }

  mainImg.src = target.href;
});
