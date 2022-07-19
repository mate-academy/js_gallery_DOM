'use strict';

const bigImg = document.getElementById('largeImg');
const listImgs = document.querySelector('.gallery__list');

listImgs.addEventListener('click', (eventImg) => {
  eventImg.preventDefault();

  const item = eventImg.target.closest('.gallery__thumb');

  if (!item || !listImgs.contains(item)) {
    return;
  }

  bigImg.src = item.src;
});
