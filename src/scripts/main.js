'use strict';

const bigImage = document.querySelector('.gallery__large-img');
const imageList = document.querySelector('.gallery__list');

imageList.addEventListener('click', (eventClick) => {
  const item = eventClick.target.closest('.list-item__link');

  if (!item) {
    return;
  };

  eventClick.preventDefault();

  bigImage.src = item.href;
});
