'use strict';

const ul = document.querySelector('ul');
const largeImg = document.querySelector('.gallery div img');

ul.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  largeImg.setAttribute('src', link.href);
});
