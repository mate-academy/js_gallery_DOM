'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();
  }

  largeImg.src = link.href;
});
