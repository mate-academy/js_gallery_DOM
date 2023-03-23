'use strict';

const largeImg = document.querySelector('.gallery__large-img');
const thumbs = document.querySelector('.gallery__list');

thumbs.addEventListener('click', (item) => {
  item.preventDefault();

  const link = item.target.closest('.list-item__link').href;

  largeImg.src = link;
});
