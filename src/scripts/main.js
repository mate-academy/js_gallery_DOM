'use strict';

const largeImage = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !thumbs.contains(item)) {
    return;
  }

  largeImage.src = item.getAttribute('href');
});
