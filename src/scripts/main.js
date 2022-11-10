'use strict';

const list = document.getElementById('thumbs');

list.addEventListener('click', (eventObj) => {
  const largeImg = document.getElementById('largeImg');

  eventObj.preventDefault();

  const item = eventObj.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
