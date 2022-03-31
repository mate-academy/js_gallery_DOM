'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const imgList = document.querySelector('.gallery__list');

imgList.addEventListener('click', (clickedEvent) => {
  clickedEvent.preventDefault();

  const item = clickedEvent.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImg.src = item.href;
});
