'use strict';

const mainImg = document.getElementById('largeImg');
const thumbsList = document.getElementById('thumbs');

thumbsList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const item = ev.target.closest('.list-item__link');

  if (!item || !thumbsList.contains(item)) {
    return;
  }

  mainImg.src = item.href;
});
