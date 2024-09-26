'use strict';

const slide = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item');

  if (!item || !list.contains(item)) {
    return null;
  }

  slide.src = item.firstElementChild.href;
});
