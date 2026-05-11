'use strict';

const bilder = document.querySelector('#largeImg');
const listImg = document.querySelector('#thumbs');

listImg.addEventListener('click', (e) => {
  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  e.preventDefault();

  bilder.src = item.href;
});
