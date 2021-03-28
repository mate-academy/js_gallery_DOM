'use strict';

const mainPicture = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const link = ev.target.closest('.list-item__link');

  mainPicture.src = link.href;
});
