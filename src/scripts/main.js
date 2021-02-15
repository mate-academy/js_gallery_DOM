'use strict';

const list = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImg.setAttribute('src', item.href);
});
