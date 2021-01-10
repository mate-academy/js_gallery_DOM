'use strict';

const thumbList = document.querySelector('.gallery__list');
const previewImg = document.querySelector('#largeImg');

thumbList.addEventListener('click', (e) => {
  e.preventDefault();

  const clickedItem = e.target.closest('.list-item__link');

  if (!clickedItem || !thumbList.contains(clickedItem)) {
    return;
  };

  previewImg.src = clickedItem.href;
});
