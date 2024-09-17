'use strict';

const mainPhoto = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', changePhoto);

function changePhoto(e) {
  e.preventDefault();

  const item = e.target.closest('.list-item__link');

  if (!item || !list.contains(item)) {
    return;
  }

  mainPhoto.src = item.href;
}
