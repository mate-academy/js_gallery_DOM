'use strict';

const mainImage = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  e.preventDefault();

  mainImage.src = link.href;
});
