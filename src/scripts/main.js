'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  largeImg.src = link.href;
});
