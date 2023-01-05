'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  e.preventDefault();
  largeImg.src = item.href;
});
