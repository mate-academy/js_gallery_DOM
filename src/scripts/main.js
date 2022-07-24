'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const itemLink = e.target.closest('.list-item__link');

  if (itemLink) {
    largeImg.src = itemLink.href;
  }
});
