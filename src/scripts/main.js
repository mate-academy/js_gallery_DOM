'use strict';

const mainImage = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (handler) => {
  const target = handler.target.closest('.list-item__link');

  if (!target) {
    return;
  }

  handler.preventDefault();

  mainImage.setAttribute('src', target.href);
});
