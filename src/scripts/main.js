'use strict';

const list = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImage.src = item.href;
});
