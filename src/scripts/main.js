'use strict';

const largeImg = document.querySelector('#largeImg');
const img = document.querySelector('#thumbs');

img.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  if (!item || largeImg.contains(item)) {
    return;
  }

  e.preventDefault();

  largeImg.src = item.href;
});
