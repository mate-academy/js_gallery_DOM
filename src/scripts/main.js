'use strict';

const list = document.querySelector('#thumbs');
const mainImage = document.querySelector('#largeImg');

list.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target.closest('.list-item__link');

  if (!target) {
    return;
  }

  mainImage.src = target.href;
});
