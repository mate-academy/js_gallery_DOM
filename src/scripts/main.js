'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item) {
    return;
  }

  mainImage.src = item.href;
});
