'use strict';

const list = document.getElementById('thumbs');
const mainPicture = document.getElementById('largeImg');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  mainPicture.src = item.href;
});
