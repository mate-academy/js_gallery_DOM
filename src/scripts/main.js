'use strict';

const mainPicture = document.getElementById('largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (events) => {
  events.preventDefault();

  const item = events.target.closest('.list-item__link');

  mainPicture.src = item.href;
});
