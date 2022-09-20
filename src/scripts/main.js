'use strict';

const list = document.querySelector('ul');
const largeImage = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  largeImage.src = item.href;
});
