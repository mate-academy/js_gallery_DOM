'use strict';

const imgBig = document.querySelector('.gallery__large-img');
const listImgSmall = document.querySelector('.gallery__list');

listImgSmall.addEventListener('click', (newEvent) => {
  const item = newEvent.target.closest('a');

  newEvent.preventDefault();

  if (!item.classList.contains('.list-item')) {
    imgBig.src = item.href;
    imgBig.alt = item.alt;
  }
});
