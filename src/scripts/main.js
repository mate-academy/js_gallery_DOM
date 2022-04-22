'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', click => {
  click.preventDefault();

  const item = click.target.closest('.list-item__link');

  if (!item || !thumbs.contains(item)) {
    return;
  }

  largeImg.src = item.href;
});
