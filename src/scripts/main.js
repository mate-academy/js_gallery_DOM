'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const itemLink = e.target.closest('.list-item__link');

  if (!itemLink || !list.contains(itemLink)) {
    return;
  }
  largeImg.src = itemLink.href;
  e.preventDefault();
});
