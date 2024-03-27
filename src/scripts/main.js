'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const smallImgsList = document.querySelector('.gallery__list');

smallImgsList.addEventListener('click', (e) => {
  e.preventDefault();

  const itemOfList = e.target.closest('a');

  if (!itemOfList) {
    return;
  }

  largeImg.src = itemOfList.href;
});
