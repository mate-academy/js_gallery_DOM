'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const listImg = document.querySelector('.gallery__list');

listImg.addEventListener('click', (event) => {
  const item = event.target.closest('.list-item__link');

  if (item) {
    event.preventDefault();
    largeImg.src = item.href;
  }
});
