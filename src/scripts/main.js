'use strict';

const basicImg = document.querySelector('#largeImg');
const images = document.querySelector('#thumbs');

images.addEventListener('click', (param) => {
  param.preventDefault();

  const item = param.target.closest('.list-item__link');

  if (!item || !images.contains(item)) {
    return;
  }

  basicImg.src = item.href;
});
