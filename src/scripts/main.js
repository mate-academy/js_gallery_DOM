'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (eventElem) => {
  const item = eventElem.target.closest('.list-item__link');

  eventElem.preventDefault();

  mainImg.src = item.href;
});
