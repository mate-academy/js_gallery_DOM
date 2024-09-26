'use strict';

const mainImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.gallery__thumb');

  if (!item) {
    return;
  }

  const link = item.closest('a');

  if (!link) {
    return;
  }

  mainImg.src = link.href;
});
