'use strict';

const bigPicture = document.querySelector('#largeImg');

const list = document.querySelector('#thumbs');

list.addEventListener('click', (item) => {
  const ziel = item.target.closest('.list-item__link');

  item.preventDefault();

  bigPicture.src = ziel.href;
});
