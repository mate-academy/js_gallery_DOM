'use strict';

const largeImg = document.getElementById('largeImg');
const ul = document.getElementById('thumbs');

ul.addEventListener('click', (evt) => {
  evt.preventDefault();

  const item = evt.target.closest('.gallery__thumb');

  if (!item) {
    return;
  }

  const link = item.closest('a');

  if (!link) {
    return;
  }

  largeImg.src = link.href;
});
