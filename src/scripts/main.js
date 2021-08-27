'use strict';

const list = document.querySelector('#thumbs');

const handler = (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  const mainImg = document.querySelector('#largeImg');

  mainImg.src = item.href;
};

list.addEventListener('click', handler);
