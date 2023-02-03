'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImage = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item');

  e.preventDefault();

  if (!item || !thumbs.contains(item)) {
    return;
  };

  largeImage.src = item.querySelector('a').href;
});
