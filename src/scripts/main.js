'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.getElementById('largeImg');

list.addEventListener('click', ( e ) => {
  event.preventDefault();

  const listItem = event.target.closest('.list-item');

  const link = listItem.querySelector('.list-item__link');

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
