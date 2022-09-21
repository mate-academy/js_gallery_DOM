'use strict';

const mainImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', (ev) => {
  const item = ev.target.closest('.gallery__thumb');

  if (!item || !thumbs.contains(item)) {
    return;
  }

  ev.preventDefault();

  mainImg.src = item.src;
});
