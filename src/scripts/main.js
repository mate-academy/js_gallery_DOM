'use strict';

const list = document.querySelector('.gallery');
const mainImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (thumb) => {
  const item = thumb.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }
  thumb.preventDefault();
  mainImg.src = item.href;
});
