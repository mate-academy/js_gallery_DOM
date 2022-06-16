'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (mouseEvent) => {
  mouseEvent.preventDefault();

  const item = mouseEvent.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
