'use strict';

const galeryList = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__large-img');

galeryList.addEventListener('click', (e) => {
  e.preventDefault();

  const closestListItem = e.target.closest('.list-item');

  if (closestListItem) {
    largeImg.src = closestListItem.querySelector('a').href;
  }
});
