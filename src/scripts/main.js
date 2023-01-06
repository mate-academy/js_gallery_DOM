'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (evnt) => {
  const item = evnt.target.closest('.list-item__link');

  if (!item || !thumbs.contains(item)) {
    return;
  }

  evnt.preventDefault();
  largeImg.src = item.href;
});
