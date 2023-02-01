'use strict';

const largeImg = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
